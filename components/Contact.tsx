"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xeoydnel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-[hsl(var(--border))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs text-[hsl(var(--muted))] uppercase tracking-widest mb-3">Contact</p>
            <h2 className="text-3xl md:text-4xl font-medium text-foreground tracking-tight mb-4">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-[hsl(var(--muted))] text-base leading-relaxed mb-8">
              Ready to transform your business with AI? Reach out to discuss strategy, transformation, or an exploratory workshop.
            </p>
            <div className="space-y-3 text-sm text-[hsl(var(--muted))]">
              <p>
                <span className="text-foreground">Response time:</span> Within 24 hours
              </p>
              <p>
                <span className="text-foreground">Email:</span>{" "}
                <a href="mailto:Nick@gettom.io" className="hover:text-foreground transition-colors underline underline-offset-4 decoration-[hsl(var(--border))]">Nick@gettom.io</a>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-surface rounded-xl p-8 border border-[hsl(var(--border))]">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-12 h-12 text-foreground mx-auto mb-5" />
                  <h3 className="text-xl font-medium text-foreground mb-3">Message Sent</h3>
                  <p className="text-[hsl(var(--muted))] text-sm mb-8">
                    Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-foreground text-[hsl(var(--background))] px-7 py-3 rounded-lg font-medium text-sm hover:bg-white transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:border-[hsl(var(--muted))] focus:ring-0 transition-all duration-200 outline-none placeholder:text-[hsl(var(--muted)/0.6)] text-sm"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:border-[hsl(var(--muted))] focus:ring-0 transition-all duration-200 outline-none placeholder:text-[hsl(var(--muted)/0.6)] text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-foreground focus:border-[hsl(var(--muted))] focus:ring-0 transition-all duration-200 outline-none resize-none placeholder:text-[hsl(var(--muted)/0.6)] text-sm"
                      placeholder="Tell us about your project or challenge..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-foreground text-[hsl(var(--background))] px-8 py-3.5 rounded-lg font-medium text-sm hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-[hsl(var(--background))] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-center text-red-400 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
