"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

export function WhatsAppConnect() {
  return (
    <section className="py-16 bg-[#25D366]/10 border-y border-[#25D366]/20 relative z-10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-left">
            <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-2 flex items-center gap-3">
              <MessageCircle className="w-8 h-8 text-[#25D366]" />
              WhatsApp Quick Connect
            </h3>
            <p className="text-[var(--text-muted)] text-lg">
              "Need urgent scaffolding or materials? Chat with us directly."
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <Button size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-black font-bold whitespace-nowrap">
              WhatsApp for Rental
            </Button>
            <Button size="lg" className="bg-[#25D366] hover:bg-[#1da851] text-black font-bold whitespace-nowrap">
              WhatsApp for Materials
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
