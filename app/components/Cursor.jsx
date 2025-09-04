'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);
  const numTrails = 6;

  // state-like refs
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const lastPos = useRef({ x: 0, y: 0 });
  const dir = useRef({ x: 1, y: 0 }); // smoothed direction unit vector
  const trailPos = useRef(
    Array.from({ length: numTrails }, () => ({ x: 0, y: 0 }))
  );

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    // ticker fn kept to remove later
    const tick = () => {
      // ---- Smooth follow (lerp) ----
      const follow = 0.18; // higher = tighter follow
      pos.current.x += (mouse.current.x - pos.current.x) * follow;
      pos.current.y += (mouse.current.y - pos.current.y) * follow;

      // ---- Velocity & direction ----
      const vx = pos.current.x - lastPos.current.x;
      const vy = pos.current.y - lastPos.current.y;
      lastPos.current.x = pos.current.x;
      lastPos.current.y = pos.current.y;

      const speed = Math.hypot(vx, vy);
      if (speed > 0.001) {
        // target unit vector
        const tx = vx / speed;
        const ty = vy / speed;
        // smooth the direction vector (avoids -180/180 jump)
        const dFollow = 0.25;
        dir.current.x += (tx - dir.current.x) * dFollow;
        dir.current.y += (ty - dir.current.y) * dFollow;
        // renormalize a bit
        const dLen = Math.hypot(dir.current.x, dir.current.y) || 1;
        dir.current.x /= dLen;
        dir.current.y /= dLen;
      }

      // angle from smoothed direction
      const angleRad = Math.atan2(dir.current.y, dir.current.x);
      const angleDeg = (angleRad * 180) / Math.PI;

      // ---- Squash–Stretch based on speed ----
      // tune for stronger flattening but keep readable
      const stretch = 1 + Math.min(speed * 0.08, 2.0); // up to 3x long
      const squash = Math.max(0.35, 1 / (stretch * 1.35)); // not thinner than 0.35

      // ---- Dynamic neon glow with speed ----
      const glow1 = 10 + speed * 0.6;
      const glow2 = 26 + speed * 1.2;

      // center anchor: use translate(-50%,-50%)
      gsap.set(cursorRef.current, {
        x: pos.current.x,
        y: pos.current.y,
        rotation: angleDeg,
        scaleX: stretch,
        scaleY: squash,
        boxShadow: `0 0 ${glow1}px rgba(16,185,129,0.95), 0 0 ${glow2}px rgba(16,185,129,0.45)`,
      });

      // ---- Trailing: chain follow for ghosts ----
      // first trail follows main pos; each next follows the previous
      const baseEase = 0.18; // lower = more lag
      let leadX = pos.current.x;
      let leadY = pos.current.y;

      for (let i = 0; i < numTrails; i++) {
        const t = trailPos.current[i];
        const ease = baseEase * (0.8 - i * 0.09); // farther trails lag more
        t.x += (leadX - t.x) * ease;
        t.y += (leadY - t.y) * ease;

        const scale = Math.max(0.4, 1 - i * 0.12);
        const op = Math.max(0.08, 0.5 - i * 0.08);

        gsap.set(trailRefs.current[i], {
          x: t.x,
          y: t.y,
          rotation: angleDeg,
          scaleX: stretch * scale,
          scaleY: squash * scale,
          opacity: op,
        });

        // next one follows this one's position
        leadX = t.x;
        leadY = t.y;
      }
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]
                   w-6 h-6 rounded-full
                   bg-emerald-400 
                   "
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Trailing ghosts */}
      {Array.from({ length: numTrails }).map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 pointer-events-none z-[9998]
                     w-5 h-5 rounded-full
                     bg-emerald-400/20 backdrop-blur-md
                     border border-emerald-200/30"
          style={{ transform: 'translate(-50%, -50%)' }}
        />
      ))}
    </>
  );
}
