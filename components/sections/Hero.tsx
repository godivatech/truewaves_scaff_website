"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import dynamic from "next/dynamic";

// Dynamically import the 3D scene to prevent SSR issues and reduce initial load time
const HeroScene = dynamic(() => import("@/components/HeroScene").then(mod => mod.HeroScene), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-transparent" />
});

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* 3D Background */}
      <HeroScene />
      
      {/* Content overlay */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-6 leading-tight">
              Your Trusted Partner in <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008FD4] to-[#38BDF8]">
                Scaffolding & Formwork
              </span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg md:text-xl text-[var(--text-muted)] mb-10 max-w-2xl leading-relaxed">
              From small projects to large developments, we provide safe, reliable, and easy-to-manage scaffolding and material solutions — so you can focus on building, not worrying.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" variant="success" className="text-base font-semibold">
              Apply for Scaffolding Rental
            </Button>
            <Button size="lg" variant="default" className="text-base font-semibold">
              Request Material Supply
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface-1)] via-[var(--surface-0)]/80 to-transparent pointer-events-none" />
    </section>
  );
}
