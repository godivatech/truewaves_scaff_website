"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0 opacity-100"
      >
        {/* Overall black overlay for total readability */}
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image 
          src="/images/section%20images/hero%20section.png" 
          alt="True Waves Scaffolding" 
          fill 
          className="object-cover object-center transition-all duration-1000"
          priority
        />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-[20%] left-10 w-[1px] h-[40%] bg-gradient-to-b from-[var(--primary-400)] to-transparent opacity-60 hidden md:block" />
      
      <div className="container relative z-20 mx-auto px-4 md:px-6">
        <div className="max-w-5xl lg:max-w-6xl backdrop-blur-[2px] py-8 rounded-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="h-[1px] w-12 bg-[var(--primary-400)]" />
            <span className="text-xs md:text-sm font-black tracking-[0.4em] uppercase text-[var(--primary-300)] drop-shadow-md">
              ESTABLISHED 2024
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-[6rem] font-bold tracking-tight text-white leading-[1] mb-8 drop-shadow-2xl"
            >
              YOUR TRUSTED <br />
              <span className="text-[var(--primary-400)] relative inline-block">
                PARTNER
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-4 left-0 h-[12px] bg-[var(--primary-500)]/30 -z-10"
                />
              </span> <br />
              IN SCAFFOLDING & FORMWORK
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 xl:grid-cols-[1fr_auto] gap-8 xl:gap-24 items-end"
          >
            <div className="bg-black/20 backdrop-blur-md p-6 xl:p-0 xl:bg-transparent xl:backdrop-blur-none rounded-2xl">
              <p className="text-lg md:text-xl text-white font-medium mb-10 leading-relaxed drop-shadow-lg max-w-3xl">
                From small projects to large developments, we provide safe, reliable, and easy-to-manage scaffolding and material solutions so you can focus on building, not worrying.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="success" className="rounded-full px-8 h-14 text-sm md:text-base font-black shadow-2xl shadow-[var(--primary-500)]/60 hover:scale-105 transition-transform uppercase tracking-wider">
                  Apply for Scaffolding Rental
                </Button>
                <Button size="lg" variant="default" className="rounded-full px-8 h-14 text-sm md:text-base font-black border-2 border-white/40 text-white hover:bg-white hover:text-black transition-all uppercase tracking-wider bg-transparent">
                  Request Material Supply
                </Button>
              </div>
            </div>

            <div className="hidden md:flex flex-row xl:flex-col gap-12 xl:gap-8 border-t-2 xl:border-t-0 xl:border-l-2 border-[var(--primary-500)]/30 pt-8 xl:pt-0 xl:pl-12 pb-2">
              <div className="space-y-1">
                <span className="block text-4xl xl:text-5xl font-black text-white drop-shadow-lg">100%</span>
                <span className="block text-xs uppercase tracking-[0.3em] text-[var(--primary-200)] font-black">Safety Record</span>
              </div>
              <div className="space-y-1">
                <span className="block text-4xl xl:text-5xl font-black text-white drop-shadow-lg">24/7</span>
                <span className="block text-xs uppercase tracking-[0.3em] text-[var(--primary-200)] font-black">Support Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500">SCROLL</span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-[var(--primary-500)] to-transparent" />
      </motion.div>

      {/* Side Label */}
      <div className="absolute right-10 bottom-[20%] rotate-90 origin-right hidden xl:block">
        <span className="text-xs uppercase tracking-[0.8em] font-bold text-white/30">
          TRUE WAVES GROUP • SCAFFOLDING & FORMWORK
        </span>
      </div>
    </section>
  );
}
