"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Lightbulb,
  Brain,
  Database,
  Shield,
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
    title: "Deployed AI Researchers and Engineers",
    description:
      "Expert AI researchers and engineers integrated directly into your team, delivering production-ready solutions while building your internal AI capabilities.",
    features: ["Embedded Experts", "Knowledge Transfer", "Rapid Delivery"],
    detailedDescription: "Get immediate access to world-class AI talent without the lengthy hiring process. Our deployed AI researchers and engineers work alongside your team to deliver production systems while transferring knowledge and best practices.",
    deliverables: [
      "Dedicated AI researchers and engineers",
      "Production-ready AI systems",
      "Technical documentation and runbooks",
      "Team training and mentorship",
      "Ongoing architecture guidance"
    ],
    timeline: "Flexible (3-12+ months)",
    idealFor: "Organizations needing immediate AI expertise to accelerate projects or bridge capability gaps"
  },
  {
    icon: Lightbulb,
    title: "Product Design Workshops",
    description:
      "Accelerate product development with hands-on sessions that validate concepts and build design-driven cultures within growing organizations.",
    features: ["Rapid Prototyping", "User-Centered Design", "Team Alignment"],
    detailedDescription: "Our Product Design Workshops bring together cross-functional teams to rapidly prototype and validate product ideas. We use design thinking methodologies combined with agile practices to help you build better products faster.",
    deliverables: [
      "User journey maps and personas",
      "Interactive prototypes",
      "Validated product concepts",
      "Design system foundations",
      "Implementation roadmap"
    ],
    timeline: "2-4 weeks",
    idealFor: "Growing companies looking to establish product development best practices and accelerate time-to-market"
  },
  {
    icon: Brain,
    title: "AI Use Case Development",
    description:
      "Strategic identification and implementation of AI applications that drive measurable business value and competitive advantage.",
    features: ["ROI Analysis", "Proof of Concept", "Production Deployment"],
    detailedDescription: "We help you identify, prioritize, and implement AI use cases that deliver measurable ROI. From initial feasibility studies through production deployment, we ensure your AI investments drive real business value.",
    deliverables: [
      "AI opportunity assessment",
      "Prioritized use case portfolio",
      "Proof of concept implementation",
      "Production-ready AI models",
      "Performance monitoring dashboards"
    ],
    timeline: "3-6 months",
    idealFor: "Enterprises ready to move beyond AI experiments into production-grade implementations"
  },
  {
    icon: Database,
    title: "Data Engineering Agents",
    description:
      "Automated data pipelines and intelligent systems that scale infrastructure and deliver real-time insights at enterprise scale.",
    features: ["Pipeline Automation", "Real-Time Processing", "Data Quality"],
    detailedDescription: "Transform your data infrastructure with intelligent, self-healing pipelines that scale automatically. Our agentic approach reduces operational overhead while improving data quality and reliability.",
    deliverables: [
      "Automated ETL/ELT pipelines",
      "Real-time data streaming",
      "Data quality monitoring",
      "Self-healing mechanisms",
      "Scalable architecture"
    ],
    timeline: "4-8 weeks",
    idealFor: "Organizations struggling with data silos, quality issues, or scaling challenges"
  },
  {
    icon: Shield,
    title: "Agentic SRE Systems",
    description:
      "AI-powered reliability engineering that automates incident response, optimizes performance, and reduces operational toil.",
    features: ["Auto-Healing", "Performance Optimization", "24/7 Monitoring"],
    detailedDescription: "Reduce operational toil and improve system reliability with AI agents that monitor, diagnose, and resolve issues automatically. Our SRE systems learn from incidents to prevent future problems.",
    deliverables: [
      "Automated incident response",
      "Predictive alerting system",
      "Performance optimization",
      "Self-healing infrastructure",
      "Comprehensive monitoring"
    ],
    timeline: "6-10 weeks",
    idealFor: "Engineering teams spending too much time on operational work and incident response"
  },
  {
    icon: Sparkles,
    title: "Generative AI & LLM Solutions",
    description:
      "Custom large language models and generative AI systems that transform customer experiences, automate workflows, and unlock new business capabilities.",
    features: ["Custom LLM Fine-tuning", "RAG Systems", "AI Agents"],
    detailedDescription: "Harness the power of generative AI with custom solutions built on cutting-edge LLMs. From intelligent chatbots to document processing and content generation, we build production-grade systems that integrate seamlessly with your business.",
    deliverables: [
      "Fine-tuned language models",
      "Retrieval-augmented generation (RAG) systems",
      "Custom AI agents and assistants",
      "Prompt engineering frameworks",
      "Safety and compliance guardrails"
    ],
    timeline: "4-8 weeks",
    idealFor: "Companies looking to leverage ChatGPT-like capabilities with proprietary data and custom workflows"
  },
];

function ServiceCard({ service, index, onLearnMore }: { service: typeof services[0]; index: number; onLearnMore: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative bg-surface rounded-xl p-7 border border-[hsl(var(--border))] hover:border-[hsl(var(--muted)/0.5)] transition-all duration-500 h-full flex flex-col">
        <div className="w-10 h-10 rounded-lg bg-surface border border-[hsl(var(--border))] flex items-center justify-center mb-5">
          <service.icon className="w-5 h-5 text-[hsl(var(--muted))]" />
        </div>

        <h3 className="text-lg font-medium text-foreground mb-3">
          {service.title}
        </h3>

        <p className="text-[hsl(var(--muted))] text-sm leading-relaxed mb-5 flex-1">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {service.features.map((feature, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs text-[hsl(var(--muted))] bg-surface rounded-md border border-[hsl(var(--border))]"
            >
              {feature}
            </span>
          ))}
        </div>

        <button
          onClick={onLearnMore}
          className="inline-flex items-center gap-2 text-sm text-[hsl(var(--muted))] hover:text-foreground transition-colors duration-300 group/btn"
        >
          Learn More
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform duration-300" />
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
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-surface border border-[hsl(var(--border))] flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-5 h-5 text-[hsl(var(--muted))]" />
                  </div>
                  <h3 className="text-lg font-medium text-foreground">{service.title}</h3>
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
                <h4 className="text-xs font-medium text-foreground uppercase tracking-widest mb-3">Overview</h4>
                <p className="text-[hsl(var(--muted))] text-sm leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-medium text-foreground uppercase tracking-widest mb-3 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Deliverables
                </h4>
                <ul className="space-y-2.5">
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
                  Get Started with {service.title}
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
    <section id="services" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-xs text-[hsl(var(--muted))] uppercase tracking-widest mb-3">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-[hsl(var(--muted))] text-base max-w-2xl leading-relaxed">
            Deployed AI researchers and engineers delivering end-to-end solutions—from concept to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
