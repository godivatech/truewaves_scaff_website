"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[var(--surface-1)]">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-6 leading-tight">
              We Don't Just Supply — <br />
              <span className="text-[var(--primary-500)]">We Support Your Build</span>
            </h2>
            <div className="space-y-6 text-lg text-[var(--text-muted)] leading-relaxed">
              <p>
                True Waves Scaff is a leading provider of premium scaffolding and formwork solutions in Madurai and across Tamil Nadu. We understand that strong foundations are built on reliable support.
              </p>
              <p>
                Our mission is to ensure every construction site operates safely and efficiently. Whether you need to rent scaffolding for a short-term project or require bulk material supply for a large-scale development, we deliver with speed and uncompromised quality.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-4xl font-heading font-bold text-[var(--primary-400)] mb-2">500+</h4>
                <p className="text-[var(--text-muted)]">Projects Supported</p>
              </div>
              <div>
                <h4 className="text-4xl font-heading font-bold text-[var(--primary-400)] mb-2">100%</h4>
                <p className="text-[var(--text-muted)]">Safety Compliance</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-dark p-2 border-[var(--surface-4)]">
              <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-[var(--surface-1)] to-[var(--primary-500)]/20 relative flex items-center justify-center">
                {/* Fallback image/placeholder since we don't have construction images */}
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 opacity-50 relative">
                     <Image src="/images/Logo.png" alt="True Waves Scaff" fill className="object-contain" />
                  </div>
                  <p className="text-[var(--text-muted)] font-heading font-medium tracking-widest uppercase">Premium Quality</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[var(--primary-500)]/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-[var(--primary-400)]/20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
