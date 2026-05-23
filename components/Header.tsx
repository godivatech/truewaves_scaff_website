"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass border-b-0">
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-[240px] h-[60px] md:w-[360px] md:h-[90px]">
            <Image 
              src="/images/Logo.png" 
              alt="True Waves Scaff" 
              fill 
              className="object-contain" 
              priority 
            />
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Services</Link>
          <Link href="/about" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden md:inline-flex h-10 items-center justify-center rounded-xl bg-[var(--primary-500)] px-6 text-sm font-medium text-[var(--foreground)] shadow-md shadow-[var(--primary-500)]/20 hover:bg-[var(--primary-400)] transition-colors">
            Get Quote
          </Link>
          
          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/50 border border-white/80 text-[var(--foreground)] hover:text-[var(--primary-500)] hover:bg-white transition-all shadow-sm cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 glass border-t border-[var(--surface-4)] px-6 py-8 md:hidden flex flex-col gap-6 shadow-2xl z-40"
          >
            <nav className="flex flex-col gap-4">
              <Link 
                href="/services" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[var(--foreground)] hover:text-[var(--primary-500)] transition-colors py-2 border-b border-[var(--surface-3)]/30"
              >
                Services
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[var(--foreground)] hover:text-[var(--primary-500)] transition-colors py-2 border-b border-[var(--surface-3)]/30"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-[var(--foreground)] hover:text-[var(--primary-500)] transition-colors py-2"
              >
                Contact
              </Link>
            </nav>
            
            <Link 
              href="/contact" 
              onClick={() => setIsOpen(false)}
              className="h-12 flex items-center justify-center rounded-xl bg-[var(--primary-500)] px-6 text-sm font-bold text-[var(--foreground)] shadow-md shadow-[var(--primary-500)]/20 hover:bg-[var(--primary-400)] transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
