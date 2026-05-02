"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Building, Package } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SplitCTA() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <section className="relative min-h-[80vh] w-full flex flex-col overflow-hidden bg-[var(--surface-0)] py-12">
      <div className="text-center mb-12 relative z-20">
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)]">What Do You Need Today?</h2>
      </div>
      <div className="flex flex-col md:flex-row flex-1 relative z-20">
        {/* Left Side: Rental */}
      <motion.div 
        className={cn(
          "relative flex-1 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 z-10 group overflow-hidden",
          "border-b md:border-b-0 md:border-r border-[var(--surface-4)]",
          hovered === "left" ? "flex-[1.2]" : hovered === "right" ? "opacity-50" : ""
        )}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        layout
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30 transition-transform duration-700 group-hover:scale-105">
          <Image src="/images/section%20images/Rental.png" alt="Rental" fill className="object-cover" />
          <div className="absolute inset-0 bg-[var(--surface-0)]/80 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-md relative z-10">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-[var(--success)]/20 flex items-center justify-center mb-6 backdrop-blur-md">
            <Building className="w-10 h-10 text-[var(--success)]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Scaffolding Rental</h2>
          <ul className="text-[var(--text-muted)] mb-8 space-y-3 font-medium">
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" /> Flexible rental plans
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" /> Quick delivery
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--success)]" /> Ready-to-use systems
            </li>
          </ul>
          <Button variant="success" size="lg" className="w-full sm:w-auto shadow-lg shadow-[var(--success)]/20">
            Apply for Rental
          </Button>
        </div>
      </motion.div>

      {/* Right Side: Trading */}
      <motion.div 
        className={cn(
          "relative flex-1 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 z-10 group overflow-hidden",
          hovered === "right" ? "flex-[1.2]" : hovered === "left" ? "opacity-50" : ""
        )}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        layout
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-30 transition-transform duration-700 group-hover:scale-105">
          <Image src="/images/section%20images/Material%20Supply.png" alt="Material Supply" fill className="object-cover" />
          <div className="absolute inset-0 bg-[var(--surface-0)]/80 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-md relative z-10">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-[var(--primary-500)]/20 flex items-center justify-center mb-6 backdrop-blur-md">
            <Package className="w-10 h-10 text-[var(--primary-500)]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Material Trading</h2>
          <ul className="text-[var(--text-muted)] mb-8 space-y-3">
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)]" /> Bulk supply
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)]" /> Competitive pricing
            </li>
            <li className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary-500)]" /> Reliable quality
            </li>
          </ul>
          <Button variant="default" size="lg" className="w-full sm:w-auto">
            Request Materials
          </Button>
        </div>
      </motion.div>
      </div>
    </section>
  );
}
