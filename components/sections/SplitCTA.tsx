"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Building, Package } from "lucide-react";
import { cn } from "@/lib/utils";

export function SplitCTA() {
  const [hovered, setHovered] = useState<"left" | "right" | null>(null);

  return (
    <section className="relative h-[80vh] min-h-[600px] w-full flex flex-col md:flex-row overflow-hidden bg-[var(--surface-0)]">
      {/* Left Side: Rental */}
      <motion.div 
        className={cn(
          "relative flex-1 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 z-10",
          "border-b md:border-b-0 md:border-r border-[var(--surface-4)]",
          hovered === "left" ? "bg-[var(--success)]/10" : hovered === "right" ? "opacity-50" : "bg-[var(--success)]/5"
        )}
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
        layout
      >
        <div className="max-w-md">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-[var(--success)]/20 flex items-center justify-center mb-6">
            <Building className="w-10 h-10 text-[var(--success)]" />
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">Scaffolding Rental</h2>
          <ul className="text-[var(--text-muted)] mb-8 space-y-3">
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
          <Button variant="success" size="lg" className="w-full sm:w-auto">
            Apply for Rental
          </Button>
        </div>
      </motion.div>

      {/* Right Side: Trading */}
      <motion.div 
        className={cn(
          "relative flex-1 flex flex-col justify-center items-center text-center p-8 transition-all duration-500 z-10",
          hovered === "right" ? "bg-[var(--primary-500)]/10" : hovered === "left" ? "opacity-50" : "bg-[var(--primary-500)]/5"
        )}
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
        layout
      >
        <div className="max-w-md">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-[var(--primary-500)]/20 flex items-center justify-center mb-6">
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
    </section>
  );
}
