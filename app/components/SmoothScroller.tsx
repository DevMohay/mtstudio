// app/components/SmoothScroller.tsx
'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

export const SmoothScroller = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis()

    // Animation frame function
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // Start the animation frame loop
    requestAnimationFrame(raf)

    // Cleanup function to destroy Lenis instance on component unmount
    return () => {
      lenis.destroy()
    }
  }, []) // Empty dependency array ensures this runs only once on mount

  return <>{children}</>
}
