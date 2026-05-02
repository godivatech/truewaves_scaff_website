"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Intro() {
  return (
    <section className="py-20 bg-[var(--surface-0)] relative overflow-hidden border-b border-[var(--surface-4)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)] leading-tight">
              Materials Delivered <br />
              <span className="text-[var(--primary-500)]">Right to Your Site</span>
            </h2>
            <p className="text-lg text-[var(--text-muted)] leading-relaxed">
              True Waves Scaff ensures you get what you need, when you need it. Our dedicated fleet is equipped to deliver bulk scaffolding and formwork materials directly to your project location, eliminating delays and keeping your build on track.
            </p>
            <div className="pt-4">
              <Button size="lg" variant="default" className="text-base">
                Learn About Logistics
              </Button>
            </div>
          </motion.div>

          {/* Truck Image */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 relative w-full"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-video">
              <Image 
                src="/images/section%20images/truck%20png.png" 
                alt="Material Delivery Truck" 
                fill 
                className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            {/* Speed Lines / Decor */}
            <div className="absolute top-1/2 -left-20 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary-500)]/30 to-transparent blur-[1px] transform -translate-y-1/2 -z-10" />
            <div className="absolute top-1/2 left-0 w-full h-40 bg-[var(--primary-500)]/5 blur-[50px] transform -translate-y-1/2 -z-10 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
