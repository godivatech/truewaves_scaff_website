"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Phone, MessageCircle } from "lucide-react";
import Image from "next/image";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-black border-t border-[var(--surface-4)]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/section%20images/flatbed_scaffolding_truck.png"
          alt="Scaffolding Delivery"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-[var(--primary-500)]/20 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-heading text-[clamp(1rem,5.5vw,3.75rem)] font-bold text-white mb-6 whitespace-nowrap tracking-tighter">
            Let’s Make Your Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FD4] to-[#38BDF8]">Easier</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Whether you need scaffolding on rent or materials for purchase, we’re here to help you move forward without delays.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className="text-base gap-2 bg-transparent text-white border-white/30 hover:bg-white hover:text-black transition-colors min-w-[200px]">
              <Phone className="w-5 h-5" /> Call Now
            </Button>
            <Button size="lg" variant="secondary" className="text-base gap-2 bg-[#25D366] hover:bg-[#1da851] text-white border-transparent shadow-lg shadow-[#25D366]/20 transition-colors min-w-[200px]">
              <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
            </Button>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-2xl font-heading font-bold text-gray-200 tracking-wide drop-shadow-md">
              "Fast Response. Fair Pricing. Reliable Support."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
