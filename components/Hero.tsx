"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `linear-gradient(hsl(0 0% 50%) 1px, transparent 1px),
                         linear-gradient(90deg, hsl(0 0% 50%) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Top gradient fade into grid */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[hsl(var(--background))] to-transparent z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2.5 bg-surface border border-[hsl(var(--border))] text-[hsl(var(--muted))] text-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Accepting New Enterprise Partners
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight text-balance max-w-4xl"
          >
            <span className="text-foreground">Operationalizing</span>
            <br />
            <span className="text-[hsl(var(--muted))]">Machine Intelligence.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-lg text-[hsl(var(--muted))] max-w-2xl leading-relaxed"
          >
            We deploy agentic architectures and data engineering pipelines for
            private equity portfolios and growth-stage enterprises.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-foreground text-[hsl(var(--background))] px-7 py-3.5 rounded-lg font-medium text-sm hover:bg-white transition-all duration-300"
            >
              Start Implementation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 text-foreground px-7 py-3.5 rounded-lg font-medium text-sm border border-[hsl(var(--border))] hover:border-[hsl(var(--muted))] transition-all duration-300"
            >
              View Case Studies
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="pt-6"
          >
            <div className="inline-flex border border-[hsl(var(--border))] rounded-xl overflow-hidden divide-x divide-[hsl(var(--border))]">
              {[
                { value: "3-6m", label: "TIME TO VALUE" },
                { value: "50+", label: "ENTERPRISE CLIENTS" },
                { value: "95%", label: "SUCCESS RATE" },
              ].map((stat, index) => (
                <div key={index} className="px-8 py-5 text-center">
                  <div className="text-2xl md:text-3xl font-medium text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[hsl(var(--muted))] mt-1 tracking-widest uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
