"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Users, Zap, TrendingUp, Clock } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "3-6 Month Time to Value",
    description: "See measurable results fast. We deliver production-ready systems in months, not years.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Quality",
    description: "Built for scale with comprehensive monitoring, testing, and compliance from day one.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description: "We work alongside your team, ensuring knowledge transfer and long-term success.",
  },
  {
    icon: TrendingUp,
    title: "Proven ROI",
    description: "Our clients see average 40% cost reduction and 3x efficiency gains within first year.",
  },
  {
    icon: Award,
    title: "Battle-Tested Methodology",
    description: "6-step process refined across 50+ successful enterprise AI implementations.",
  },
  {
    icon: Zap,
    title: "Production-First Mindset",
    description: "We don't just build models—we build systems that work reliably at scale.",
  },
];

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="bg-surface rounded-xl p-6 border border-[hsl(var(--border))] hover:border-[hsl(var(--muted)/0.5)] transition-all duration-400 h-full">
        <div className="w-10 h-10 rounded-lg bg-surface border border-[hsl(var(--border))] flex items-center justify-center mb-5">
          <benefit.icon className="w-5 h-5 text-[hsl(var(--muted))]" />
        </div>
        <h3 className="text-base font-medium text-foreground mb-2">
          {benefit.title}
        </h3>
        <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs text-[hsl(var(--muted))] uppercase tracking-widest mb-3">Our Advantage</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4">
            Why Top of Mind Labs
          </h2>
          <p className="text-[hsl(var(--muted))] text-base max-w-2xl leading-relaxed">
            We&apos;re not just consultants—we&apos;re your technical partners committed to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-surface rounded-xl p-8 border border-[hsl(var(--border))]"
        >
          <div>
            <h3 className="text-xl font-medium text-foreground mb-1">
              Ready to Transform Your Business?
            </h3>
            <p className="text-[hsl(var(--muted))] text-sm">
              Join 50+ enterprises already seeing results.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 bg-foreground text-[hsl(var(--background))] px-7 py-3 rounded-lg font-medium text-sm hover:bg-white transition-all duration-300"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
