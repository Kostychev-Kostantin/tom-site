"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Zap, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "3-6 Month Time to Value",
    description: "Production-ready systems in months, not years.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "40% average cost reduction and 3x efficiency gains within first year.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We work alongside your team, ensuring knowledge transfer and long-term success.",
  },
  {
    icon: Zap,
    title: "Production-First Mindset",
    description: "We don't just build models—we build systems that work reliably at scale.",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs text-[hsl(var(--muted))] uppercase tracking-widest mb-3">Our Advantage</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3">
            Why Top of Mind Labs
          </h2>
          <p className="text-[hsl(var(--muted))] text-sm max-w-xl leading-relaxed">
            We&apos;re not just consultants—we&apos;re your technical partners committed to measurable outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="bg-surface rounded-xl p-5 border border-[hsl(var(--border))] hover:border-[hsl(var(--muted)/0.5)] transition-all duration-400 h-full flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-surface border border-[hsl(var(--border))] flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-4 h-4 text-[hsl(var(--muted))]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-medium text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-surface rounded-xl p-6 border border-[hsl(var(--border))]"
        >
          <div>
            <h3 className="text-base font-medium text-foreground mb-0.5">
              Ready to Transform Your Business?
            </h3>
            <p className="text-[hsl(var(--muted))] text-sm">
              Join 50+ enterprises already seeing results.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-foreground text-[hsl(var(--background))] px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-white transition-all duration-300"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
