"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Phone, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[var(--surface-0)] border-t border-[var(--surface-4)]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-[var(--primary-500)]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6">
            Let’s Make Your Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FD4] to-[#38BDF8]">Easier</span>
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-10">
            Fast Response. Fair Pricing. Reliable Support.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Button size="lg" variant="success" className="text-base">
              Apply for Rental
            </Button>
            <Button size="lg" variant="default" className="text-base">
              Request Materials
            </Button>
            <Button size="lg" variant="outline" className="text-base gap-2">
              <Phone className="w-5 h-5" /> Call Now
            </Button>
            <Button size="lg" variant="secondary" className="text-base gap-2 bg-[#25D366] hover:bg-[#1da851] text-[var(--foreground)] border-transparent shadow-lg shadow-[#25D366]/20">
              <MessageCircle className="w-5 h-5" /> WhatsApp Us
            </Button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-[var(--surface-4)]">
            <p className="text-[var(--text-muted)]">
              "Need urgent scaffolding or materials? Chat with us directly."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
