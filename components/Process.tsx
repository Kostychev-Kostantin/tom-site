"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target,
  FlaskConical,
  Cog,
  TestTube,
  Rocket,
  RefreshCw,
} from "lucide-react";

const processSteps = [
  {
    icon: Target,
    number: "01",
    title: "Opportunity & Readiness Alignment",
    subtitle: "The Matchmaking",
    description:
      "We match high-value business pain points to our solution capabilities, ensuring data readiness and producing a scoped project charter with clear success metrics.",
    highlights: ["Portfolio Assessment", "Data Readiness", "Success Metrics"],
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Collaborative Research & Solution Design",
    subtitle: "The Prototype",
    description:
      "Develop a Minimum Viable Model (MVM) that achieves target performance through collaborative research and domain expert validation.",
    highlights: ["Novel AI Models", "Ground Truth Validation", "Model Cards"],
  },
  {
    icon: Cog,
    number: "03",
    title: "Engineering Handoff & ML System Design",
    subtitle: "The Translation",
    description:
      "Shift from research to production-ready systems with full-stack infrastructure including data pipelines, model serving, and monitoring.",
    highlights: ["Infrastructure Design", "Production Environment", "Compliance"],
  },
  {
    icon: TestTube,
    number: "04",
    title: "Shadow Testing & A/B Evaluation",
    subtitle: "The Validation",
    description:
      "Prove business value in low-risk environments through shadow mode testing and A/B evaluation with real users before full deployment.",
    highlights: ["Shadow Mode", "A/B Testing", "Metric Validation"],
  },
  {
    icon: Rocket,
    number: "05",
    title: "Production Deployment & MLOps",
    subtitle: "The Launch",
    description:
      "Full rollout with comprehensive MLOps including drift detection, performance monitoring, and automated feedback mechanisms.",
    highlights: ["100% Rollout", "Drift Detection", "Continuous Monitoring"],
  },
  {
    icon: RefreshCw,
    number: "06",
    title: "Knowledge Transfer & Iteration",
    subtitle: "The Future",
    description:
      "Leverage shared learning for the next project. Documentation and insights create a knowledge base for continuous improvement and long-term strategic advantage.",
    highlights: ["Documentation", "IP Assignment", "Next Opportunity"],
  },
];

function ProcessStep({ step, index }: { step: typeof processSteps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const isLast = index === processSteps.length - 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex gap-8 group"
    >
      {/* Timeline column */}
      <div className="hidden sm:flex flex-col items-center flex-shrink-0">
        <div className="w-11 h-11 rounded-full border border-[hsl(var(--border))] bg-surface flex items-center justify-center group-hover:border-[hsl(var(--muted))] transition-all duration-400 z-10">
          <span className="text-[hsl(var(--muted))] font-medium text-xs">{step.number}</span>
        </div>
        {!isLast && (
          <div className="w-px flex-1 bg-[hsl(var(--border))]" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-12">
        <div className="bg-surface rounded-xl p-6 border border-[hsl(var(--border))] hover:border-[hsl(var(--muted)/0.5)] transition-all duration-400">
          <div className="sm:hidden text-[hsl(var(--muted))] text-xs font-medium mb-3">{step.number}</div>

          <div className="flex items-start gap-3 mb-3">
            <div className="w-9 h-9 rounded-lg bg-surface border border-[hsl(var(--border))] flex items-center justify-center flex-shrink-0">
              <step.icon className="w-4 h-4 text-[hsl(var(--muted))]" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-medium text-foreground">
                {step.title}
              </h3>
              <p className="text-[hsl(var(--muted))] text-sm mt-0.5">{step.subtitle}</p>
            </div>
          </div>

          <p className="text-[hsl(var(--muted))] text-sm leading-relaxed mb-4 ml-0 sm:ml-12">
            {step.description}
          </p>

          <div className="flex flex-wrap gap-2 ml-0 sm:ml-12">
            {step.highlights.map((highlight, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs text-[hsl(var(--muted))] bg-[hsl(var(--background))] rounded-md border border-[hsl(var(--border))]"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs text-[hsl(var(--muted))] uppercase tracking-widest mb-3">Methodology</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4">
            Our Process
          </h2>
          <p className="text-[hsl(var(--muted))] text-base max-w-2xl leading-relaxed mb-4">
            A proven 6-step methodology that transforms AI concepts into production-ready solutions.
          </p>
          <span className="inline-flex items-center text-sm text-[hsl(var(--muted))] border border-[hsl(var(--border))] rounded-lg px-4 py-2">
            From opportunity assessment to MLOps in 3–6 months
          </span>
        </motion.div>

        <div>
          {processSteps.map((step, index) => (
            <ProcessStep key={index} step={step} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-3 bg-foreground text-[hsl(var(--background))] px-7 py-3 rounded-lg font-medium text-sm">
            <RefreshCw className="w-4 h-4" />
            Continuous Improvement Cycle
          </div>
        </motion.div>
      </div>
    </section>
  );
}
