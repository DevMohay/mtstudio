"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter Plan",
      price: "$999/month",
      button: "Level Up Now",
      requests: "1 request at a time",
      bestFor: "Best For Small businesses",
      features: [
        "All services are included",
        "1 request at a time",
        "Delivery Within 48 hours",
        "Unlimited revision",
        "Managed via Slack & Trello",
        "10% off for 6-month upfront",
        "$99 'Test Drive' Trial",
        "Pause or cancel anytime",
      ],
      glow: "from-pink-500 via-purple-500 to-blue-500",
    },
    {
      name: "Growth Plan",
      price: "$1999/month",
      button: "Get Started Now",
      requests: "2 request at a time",
      bestFor: "Best For Growing startups",
      badge: "Most Popular",
      features: [
        "All services are included",
        "2 request at a time",
        "Delivery Within 24 hours",
        "Unlimited revision",
        "Managed via Slack & Trello",
        "10% off for 6-month upfront",
        "$99 'Test Drive' Trial",
        "Pause or cancel anytime",
      ],
      glow: "from-cyan-400 via-blue-500 to-purple-600",
    },
    {
      name: "Premium Plan",
      price: "$2999/month",
      button: "Go Premium Now",
      requests: "4 request at a time",
      bestFor: "Best For Established brands",
      features: [
        "All services are included",
        "4 request at a time",
        "Delivery within your-set timelines",
        "Unlimited revision",
        "Managed via Slack & Trello",
        "15% off for 12-month upfront",
        "$99 'Test Drive' Trial",
        "Pause or cancel anytime",
      ],
      glow: "from-green-400 via-emerald-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20 bg-black/20 backdrop-blur-sm relative">
      <h2 className="text-4xl font-extrabold text-center text-white mb-16">
        💎 Choose Your Plan
      </h2>

      <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08, rotateX: 8, rotateY: -8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            viewport={{ once: true }}
            className="relative rounded-2xl text-white bg-neutral-950 overflow-hidden shadow-2xl"
          >
            {/* Neon Glow */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${plan.glow} opacity-70 blur-2xl animate-pulse`}
            ></div>

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col h-full">
              {plan.badge && (
                <span className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-500 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>

              <ul className="space-y-3 flex-1">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-neutral-200"
                  >
                    <Star className="w-4 h-4 text-yellow-400" /> {f}
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm text-neutral-400 italic">
                {plan.bestFor}
              </p>

              <button className="mt-8 w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg hover:shadow-purple-500/70 transition-all">
                {plan.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
