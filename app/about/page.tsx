"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ShieldAlert, 
  Clock, 
  ThumbsUp, 
  Wrench, 
  User2, 
  Target, 
  Award,
  CheckSquare
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const coreValues = [
  {
    icon: ShieldAlert,
    title: "Safety as a Mandate",
    desc: "Safety is not a checkbox; it is the core of our business. We enforce strict multi-stage inspection routines before any material is loaded for transport."
  },
  {
    icon: Clock,
    title: "Logistical Punctuality",
    desc: "Construction downtime is expensive. We sync closely with your site supervisors to deliver and retrieve scaffold materials exactly when planned."
  },
  {
    icon: ThumbsUp,
    title: "Absolute Transparency",
    desc: "We stand for clear, upfront agreements. No surprise handling fees, transparent rental extensions, and accurate inventory counts."
  },
  {
    icon: Wrench,
    title: "Engineering Rigor",
    desc: "All our couplers, ledgers, standards, H-frames, and planks conform strictly to standard loads, featuring corrosion-resistant treatments."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--surface-0)] text-[var(--foreground)]">
      
      {/* 1. Header Hero section */}
      <section className="relative overflow-hidden bg-[var(--primary-950)] text-white pt-36 pb-20 border-b border-white/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[300px] bg-[var(--primary-500)]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[var(--primary-300)] mb-6">
              Our Foundations
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Engineering Trust <br />
              <span className="text-[var(--primary-400)]">Supporting Progress</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              True Waves Scaff supplies high-quality, tested scaffolding and formwork systems that keep construction projects safe, orderly, and on schedule.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Brand Story / Mission */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--primary-500)]">
              Who We Are
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              A Partner Dedicated to <br />
              <span className="text-[var(--primary-500)]">Your Erection Safety</span>
            </h2>
            <div className="space-y-6 text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                Founded in 2024, True Waves Scaff emerged with a clear goal: to bring premium safety standards, reliable material trading, and transparent scaffolding hire solutions to builders across Tamil Nadu.
              </p>
              <p>
                We recognize that site engineers and contractors work under demanding timelines. A missing bracket or delayed delivery can stall an entire concrete pour. That is why we built a responsive support cycle — guaranteeing tested components, prompt dispatch, and dedicated site support.
              </p>
              <p>
                From massive commercial structures to custom residential layouts, we maintain an extensive inventory of Cuplock systems, heavy-duty H-Frames, adjustable props, and grade-A shuttering plywood.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="border border-[var(--surface-3)] rounded-3xl p-8 bg-[var(--surface-1)] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--primary-500)]/5 rounded-bl-[4rem]" />
              
              <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2.5">
                <Target className="w-6 h-6 text-[var(--primary-500)]" /> Our Mission
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                To simplify vertical staging and concrete shuttering by providing fully tested, premium construction gear on time, enabling our clients to build securely and efficiently.
              </p>
              
              <hr className="border-[var(--surface-3)] mb-6" />
              
              <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-6 flex items-center gap-2.5">
                <Award className="w-6 h-6 text-[var(--primary-500)]" /> Our vision
              </h3>
              <p className="text-[var(--text-muted)] leading-relaxed">
                To become Tamil Nadu’s first choice for integrated scaffolding rentals and trading, recognized for technical safety audit support and flawless operational integrity.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-24 bg-[var(--surface-1)] border-y border-[var(--surface-3)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              Every scaffold system loaded onto our logistics trucks carries our reputation. We operate under four simple principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-[var(--surface-2)] border border-[var(--surface-3)] rounded-[2rem] p-8 hover:border-[var(--primary-500)]/40 hover:shadow-2xl hover:shadow-[var(--primary-500)]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[var(--primary-500)]/10 text-[var(--primary-500)] flex items-center justify-center mb-6">
                    <ValIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[var(--foreground)] mb-4">
                    {val.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
              Our Leadership
            </h2>
            <div className="h-1 w-20 bg-[var(--primary-500)] mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-[var(--surface-3)] relative group bg-[var(--surface-1)] rounded-[2.5rem] shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--primary-500)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-0 text-center">
                
                {/* Visual Header */}
                <div className="h-52 bg-gradient-to-tr from-[var(--surface-2)] to-[var(--primary-500)]/20 flex items-center justify-center border-b border-[var(--surface-3)]">
                  <div className="w-28 h-28 rounded-full bg-[var(--surface-1)] flex items-center justify-center shadow-lg border border-[var(--surface-3)]">
                    <User2 className="w-14 h-14 text-[var(--primary-500)]" />
                  </div>
                </div>

                <div className="p-8 md:p-12 relative z-10">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--primary-400)] transition-colors">
                    J. Swarnalatha
                  </h3>
                  <p className="text-[var(--primary-500)] font-semibold tracking-wider text-sm mb-8 uppercase">
                    Director – True Waves Scaff
                  </p>
                  
                  <div className="text-[var(--text-muted)] leading-relaxed text-base space-y-6 text-left max-w-2xl mx-auto">
                    <p>
                      J. Swarnalatha is a dynamic leader shaping the growth of True Waves Scaff with a strong focus on safety, reliability, and execution excellence.
                    </p>
                    <p>
                      With deep expertise in scaffolding rental and material trading, she ensures every project is delivered with precision, timely coordination, and dependable systems. Her leadership is rooted in discipline, attention to detail, and a commitment to consistent performance.
                    </p>
                    <p>
                      She believes that true success lies in building strong foundations — not just in structures, but in client relationships, trust, and long-term value.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* 5. Metrics Panel */}
      <section className="py-20 bg-[var(--primary-950)] text-white border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { num: "500+", label: "Projects Supported", desc: "Commercial & housing builds" },
              { num: "100%", label: "Safety Compliance", desc: "Rigid standard inspections" },
              { num: "24/7", label: "Operations Support", desc: "Ready to load and dispatch" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl md:text-5xl font-black font-heading text-[var(--primary-400)]">
                  {stat.num}
                </div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider">{stat.label}</h4>
                <p className="text-sm text-white/50">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="py-24 bg-[var(--surface-1)] text-center border-t border-[var(--surface-3)]">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6">
            Work With True Waves
          </h2>
          <p className="text-lg text-[var(--text-muted)] mb-10 leading-relaxed max-w-xl mx-auto">
            Experience our safety-first supply logistics. Contact our team to request load calculations, rental quotes, or accessory inventories.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
              <Button size="lg" variant="success" className="rounded-full px-8 h-14 font-black uppercase tracking-wider">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
