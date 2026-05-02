"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Clock, ShieldCheck, ThumbsUp, Zap } from "lucide-react";

const trustItems = [
  { icon: Zap, title: "We respond fast", desc: "Quick quotes and rapid deployment" },
  { icon: Clock, title: "We deliver on time", desc: "Strict adherence to project schedules" },
  { icon: ThumbsUp, title: "We keep things simple", desc: "Hassle-free rental and supply process" },
  { icon: ShieldCheck, title: "We prioritize safety", desc: "High-quality materials meeting safety standards" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
};

export function Trust() {
  return (
    <section className="py-20 bg-[var(--surface-0)] relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)]">
            Why clients choose us again and again:
          </h2>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-[var(--surface-4)] hover:border-[var(--primary-500)]/50 transition-colors duration-300">
                <CardContent className="p-6 flex flex-col items-center text-center pt-6">
                  <div className="h-16 w-16 rounded-full bg-[var(--primary-500)]/10 flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8 text-[var(--primary-500)]" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-[var(--foreground)] mb-2">{item.title}</h3>
                  <p className="text-[var(--text-muted)] text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
