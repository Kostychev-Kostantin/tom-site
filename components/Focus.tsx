"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, TrendingUp, Target, Users } from "lucide-react";

export default function Focus() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Building2,
      title: "Portfolio Companies",
      description: "Private equity-backed enterprises seeking rapid transformation",
    },
    {
      icon: TrendingUp,
      title: "Growth-Stage Firms",
      description: "Companies scaling operations and market presence",
    },
    {
      icon: Target,
      title: "Value Creation",
      description: "Organizations focused on measurable business outcomes",
    },
    {
      icon: Users,
      title: "Forward-Thinking Leaders",
      description: "Teams ready to embrace AI-driven competitive advantages",
    },
  ];

  return (
    <section id="focus" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-xs text-[hsl(var(--muted))] uppercase tracking-widest mb-3">Who We Serve</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-5">
            Our Focus
          </h2>
          <p className="text-[hsl(var(--muted))] text-base leading-relaxed">
            We partner with <span className="text-foreground">portfolio companies of private equity firms</span> to unlock value through AI-driven transformation.
            We help growing companies leverage cutting-edge technology and intelligent systems to achieve measurable outcomes,
            increase market share, and build sustainable competitive advantages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="bg-surface rounded-xl p-6 border border-[hsl(var(--border))] hover:border-[hsl(var(--muted)/0.5)] transition-all duration-400 h-full">
                <div className="w-10 h-10 rounded-lg bg-surface border border-[hsl(var(--border))] flex items-center justify-center mb-5">
                  <feature.icon className="w-5 h-5 text-[hsl(var(--muted))]" />
                </div>
                <h3 className="text-base font-medium text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
