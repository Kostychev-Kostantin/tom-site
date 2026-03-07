"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const phases = [
  { title: "Alignment", description: "KPI definition & data audit." },
  { title: "Design", description: "Architecture & agent logic." },
  { title: "Testing", description: "Sandboxed evaluation." },
  { title: "Deployment", description: "Production rollout." },
  { title: "Transfer", description: "Team training & docs." },
  { title: "Optimization", description: "Continuous improvement." },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight">
            Implementation Protocol
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="border border-[hsl(var(--border))] rounded-xl overflow-hidden"
        >
          {/* Phase labels row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-[hsl(var(--border))] border-b border-[hsl(var(--border))]">
            {phases.map((_, index) => (
              <div key={index} className="px-5 py-3">
                <span className="text-[hsl(var(--muted))] text-sm">
                  Phase {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>

          {/* Content row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-[hsl(var(--border))]">
            {phases.map((phase, index) => (
              <div key={index} className="px-5 py-6">
                <div
                  className={`w-2.5 h-2.5 rounded-full mb-5 ${
                    index === 0
                      ? "bg-blue-500"
                      : "bg-[hsl(var(--muted)/0.5)]"
                  }`}
                />
                <h3 className="text-[15px] font-medium text-foreground mb-1">
                  {phase.title}
                </h3>
                <p className="text-[hsl(var(--muted))] text-sm">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
