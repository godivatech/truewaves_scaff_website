"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { User2 } from "lucide-react";

export function Leadership() {
  return (
    <section className="py-24 bg-[var(--surface-0)] relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4"
          >
            Our Leadership
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-[var(--primary-500)] mx-auto rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="overflow-hidden border-[var(--surface-4)] relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--primary-500)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-0 text-center">
                <div className="h-48 bg-gradient-to-tr from-[var(--surface-1)] to-[var(--primary-500)]/30 flex items-center justify-center">
                   <div className="w-24 h-24 rounded-full bg-[var(--surface-3)] flex items-center justify-center backdrop-blur-md border border-white/20">
                     <User2 className="w-12 h-12 text-[var(--text-muted)]" />
                   </div>
                </div>
                <div className="p-8 relative z-10">
                  <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-1 group-hover:text-[var(--primary-400)] transition-colors">
                    J. Swarnalatha
                  </h3>
                  <p className="text-[var(--primary-500)] font-medium tracking-wider text-sm mb-6 uppercase">Director – True Waves Scaff</p>
                  <div className="text-[var(--text-muted)] leading-relaxed text-[15px] space-y-4 text-left">
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
      </div>
    </section>
  );
}
