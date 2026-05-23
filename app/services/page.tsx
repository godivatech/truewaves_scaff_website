"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Building2, 
  HardHat, 
  Package, 
  Truck, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const services = [
  {
    icon: Building2,
    title: "Scaffolding Rental",
    description: "Strong, safe, and ready-to-use scaffolding systems on hire. We deliver flexible rental plans tailored to your project timeline.",
    bullets: ["Cuplock systems & standard pipes", "Rigid H-Frames for masonry", "Walkway planks & safety boards"]
  },
  {
    icon: HardHat,
    title: "Formwork Solutions",
    description: "Robust shuttering materials designed to speed up your concrete slab, column, and beam casting while ensuring smooth alignments.",
    bullets: ["Shuttering plywood sheets", "Adjustable props & beam spans", "U-Head & base plates"]
  },
  {
    icon: Package,
    title: "Material Trading & Supply",
    description: "Sourcing and supply of high-quality scaffolding components in bulk or custom volumes directly to contractors and developers.",
    bullets: ["Standard MS structural pipes", "Right-angle & swivel couplers", "Essential joint pins & accessories"]
  },
  {
    icon: Truck,
    title: "On-Site Support",
    description: "Technical coordination and site assistance to ensure safe erection, reliable load capacity, and compliance with construction guidelines.",
    bullets: ["Erection layout consults", "Safety inspections & audits", "Fast technical troubleshooting"]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--surface-0)] text-[var(--foreground)] overflow-x-hidden">
      
      {/* Header section */}
      <section className="relative overflow-hidden bg-[var(--primary-950)] text-white pt-36 pb-20 border-b border-white/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[250px] bg-[var(--primary-500)]/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-wider text-[var(--primary-300)] mb-4">
              What We Do
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
              Safe, certified, and dependable scaffolding and formwork systems to support your construction project from start to finish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -120 : 120, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  type: "spring",
                  stiffness: 60,
                  damping: 15,
                  mass: 1,
                  delay: (index % 2) * 0.15 
                }}
                className="bg-[var(--surface-1)] border border-[var(--surface-3)] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between hover:border-[var(--primary-500)]/30 hover:shadow-xl hover:shadow-[var(--primary-500)]/5 transition-all duration-300 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[var(--primary-500)]/10 text-[var(--primary-500)] flex items-center justify-center mb-6 group-hover:bg-[var(--primary-500)] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-[var(--text-muted)] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm text-[var(--text-muted)] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)] shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-sm font-bold text-[var(--primary-500)] hover:text-[var(--primary-600)] transition-colors group/link mt-auto"
                >
                  Get details and rates
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--surface-1)] border-t border-[var(--surface-3)] text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-[var(--foreground)] mb-4">
            Need Scaffolding or Formwork Support?
          </h2>
          <p className="text-[var(--text-muted)] mb-8 max-w-lg mx-auto">
            Get in touch for custom pricing plans, rental periods, or component trading requirements.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="success" className="rounded-full px-8 h-12 font-bold uppercase tracking-wider">
                Request Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
