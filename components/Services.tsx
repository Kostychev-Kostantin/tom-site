"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Database,
  ArrowRight,
  X,
  CheckCircle,
  Clock,
  Target,
  Users,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Deployed AI Researchers & Engineers",
    description:
      "Senior AI engineers and researchers who join your team, ship production code, and upskill your people — not consultants who hand over a PDF.",
    features: ["Embedded Experts", "Knowledge Transfer", "Rapid Delivery"],
    detailedDescription: "Skip the 6-month hiring cycle. Our engineers plug into your workflows from week one — writing production code, conducting code reviews, and mentoring your team. When the engagement ends, your team is stronger.",
    deliverables: [
      "Dedicated AI researchers and engineers",
      "Production-ready AI systems",
      "Technical documentation and runbooks",
      "Team training and mentorship",
      "Ongoing architecture guidance"
    ],
    timeline: "Flexible (3-12+ months)",
    idealFor: "Teams that need senior AI talent now, not in six months"
  },
  {
    icon: Brain,
    title: "AI Use Case Development",
    description:
      "We find the AI use cases that actually move your P&L — then build and deploy them.",
    features: ["ROI Analysis", "Proof of Concept", "Production Deployment"],
    detailedDescription: "Most companies have a backlog of AI ideas and no way to prioritize them. We assess feasibility, estimate ROI, build proof of concepts, and deploy the winners into production.",
    deliverables: [
      "AI opportunity assessment",
      "Prioritized use case portfolio",
      "Proof of concept implementation",
      "Production-ready AI models",
      "Performance monitoring dashboards"
    ],
    timeline: "3-6 months",
    idealFor: "Companies with AI ambitions that haven't translated into production results yet"
  },
  {
    icon: Database,
    title: "Data Infrastructure & Pipelines",
    description:
      "Reliable, automated data pipelines that get the right data to the right place — on time and at scale.",
    features: ["Pipeline Automation", "Real-Time Processing", "Data Quality"],
    detailedDescription: "Bad data infrastructure kills AI projects before they start. We build automated pipelines that monitor data quality, scale with your business, and reduce the manual work your team hates.",
    deliverables: [
      "Automated ETL/ELT pipelines",
      "Real-time data streaming",
      "Data quality monitoring",
      "Self-healing mechanisms",
      "Scalable architecture"
    ],
    timeline: "4-8 weeks",
    idealFor: "Organizations whose data issues are blocking AI progress"
  },
  {
    icon: Sparkles,
    title: "Generative AI & LLM Solutions",
    description:
      "Custom AI assistants, RAG systems, and LLM-powered workflows — built on your data, integrated into your stack.",
    features: ["Custom LLM Fine-tuning", "RAG Systems", "AI Agents"],
    detailedDescription: "We build the AI tools your team will actually use — document Q&A, internal assistants, content generation, and custom agents. Everything runs on your data with proper guardrails and compliance controls.",
    deliverables: [
      "Fine-tuned language models",
      "Retrieval-augmented generation (RAG) systems",
      "Custom AI agents and assistants",
      "Prompt engineering frameworks",
      "Safety and compliance guardrails"
    ],
    timeline: "4-8 weeks",
    idealFor: "Teams that want ChatGPT-level capabilities with their own data and security requirements"
  },
];

function ServiceCard({ service, index, onLearnMore }: { service: typeof services[0]; index: number; onLearnMore: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative bg-surface rounded-xl p-5 border border-[hsl(var(--border))] hover:border-[hsl(var(--muted)/0.5)] transition-all duration-500 h-full flex flex-col">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-surface border border-[hsl(var(--border))] flex items-center justify-center flex-shrink-0">
            <service.icon className="w-4 h-4 text-[hsl(var(--muted))]" />
          </div>
          <h3 className="text-[15px] font-medium text-foreground pt-1.5">
            {service.title}
          </h3>
        </div>

        <p className="text-[hsl(var(--muted))] text-sm leading-relaxed mb-4 flex-1">
          {service.description}
        </p>

        <button
          onClick={onLearnMore}
          className="inline-flex items-center gap-1.5 text-xs text-[hsl(var(--muted))] hover:text-foreground transition-colors duration-300 group/btn"
        >
          Learn more
          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
        </button>
      </div>
    </motion.div>
  );
}

function ServiceModal({ service, isOpen, onClose }: { service: typeof services[0] | null; isOpen: boolean; onClose: () => void }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[hsl(0_0%_0%/0.7)] backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="bg-surface-raised rounded-xl border border-[hsl(var(--border))] w-full max-w-2xl max-h-[85vh] overflow-y-auto my-8"
          >
            <div className="sticky top-0 bg-surface-raised border-b border-[hsl(var(--border))] p-6 z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface border border-[hsl(var(--border))] flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-4 h-4 text-[hsl(var(--muted))]" />
                  </div>
                  <h3 className="text-base font-medium text-foreground">{service.title}</h3>
                </div>
                <button
                  onClick={onClose}
                  className="text-[hsl(var(--muted))] hover:text-foreground transition-colors p-2 hover:bg-surface rounded-lg flex-shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-xs font-medium text-[hsl(var(--muted))] uppercase tracking-widest mb-3">Overview</h4>
                <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-medium text-[hsl(var(--muted))] uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Deliverables
                </h4>
                <ul className="space-y-2">
                  {service.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[hsl(var(--muted))] text-sm">
                      <span className="w-1 h-1 rounded-full bg-[hsl(var(--muted))] mt-2 flex-shrink-0" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[hsl(var(--background))] rounded-lg p-4 border border-[hsl(var(--border))]">
                  <div className="flex items-center gap-2 text-[hsl(var(--muted))] text-xs uppercase tracking-widest mb-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    Timeline
                  </div>
                  <p className="text-foreground font-medium text-sm">{service.timeline}</p>
                </div>
                <div className="bg-[hsl(var(--background))] rounded-lg p-4 border border-[hsl(var(--border))]">
                  <div className="flex items-center gap-2 text-[hsl(var(--muted))] text-xs uppercase tracking-widest mb-1.5">
                    <Target className="w-3.5 h-3.5" />
                    Ideal For
                  </div>
                  <p className="text-[hsl(var(--muted))] text-sm">{service.idealFor}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={onClose}
                  className="block w-full bg-foreground text-[hsl(var(--background))] text-center px-6 py-3.5 rounded-lg font-medium text-sm hover:bg-white transition-all duration-300"
                >
                  Discuss This With Our Team
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs text-[hsl(var(--muted))] uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-3">
            How We Help
          </h2>
          <p className="text-[hsl(var(--muted))] text-sm max-w-xl leading-relaxed">
            From embedded AI talent to production-grade systems — we do the work, not just the advising.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onLearnMore={() => handleLearnMore(service)}
            />
          ))}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
