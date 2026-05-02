"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, HardHat, Package, Truck, ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Scaffolding Rental",
    desc: "Need scaffolding for your site? We’ve got you covered with strong, safe, and ready-to-use systems — delivered when you need them.",
    highlight: "Builders, contractors, site engineers",
    image: "/images/section%20images/Scaffolding%20Rental.png",
    icon: Building2,
  },
  {
    title: "Formwork Solutions",
    desc: "We provide shuttering systems that help you build faster, cleaner, and with better finish quality.",
    highlight: "Columns, slabs, beams, and full structures",
    image: "/images/section%20images/Formwork%20Solutions.png",
    icon: HardHat,
  },
  {
    title: "Material Trading & Supply",
    desc: "Looking for reliable materials? We supply quality-tested scaffolding components in bulk or as per your requirement.",
    highlight: "Pipes, planks, couplers & accessories",
    image: "/images/section%20images/Material%20Supply.png",
    icon: Package,
  },
  {
    title: "Site Support",
    desc: "We don’t just deliver — we support you on-site to ensure everything runs smoothly and safely.",
    highlight: "24/7 technical and site assistance",
    image: "/images/section%20images/Site%20Support.png",
    icon: Truck,
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="py-24 bg-[var(--surface-1)] relative z-10">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-4xl md:text-6xl font-bold text-[var(--foreground)] mb-6"
            >
              Our <span className="text-[var(--primary-500)]">Services</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-[var(--text-muted)] max-w-xl"
            >
              End-to-end scaffolding and formwork solutions designed to keep your site moving safely and efficiently.
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Side: Sticky Image Gallery (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32 h-[600px] w-full rounded-[2.5rem] overflow-hidden bg-[var(--surface-0)] border border-[var(--surface-4)] shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image 
                  src={services[activeIndex].image} 
                  alt={services[activeIndex].title} 
                  fill 
                  className="object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface-0)]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary-500)] text-[var(--surface-0)] text-sm font-bold mb-4 shadow-lg shadow-[var(--primary-500)]/30">
                    {(() => {
                      const ActiveIcon = services[activeIndex].icon;
                      return <ActiveIcon className="w-4 h-4" />;
                    })()} Perfect For
                  </div>
                  <p className="text-xl font-medium text-[var(--foreground)] drop-shadow-md">
                    {services[activeIndex].highlight}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Interactive List */}
          <div className="lg:col-span-7 flex flex-col gap-4 md:gap-6">
            {services.map((service, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative p-6 md:p-10 rounded-[2rem] cursor-pointer transition-all duration-500 overflow-hidden border",
                    isActive 
                      ? "bg-[var(--surface-0)] border-[var(--primary-500)]/30 shadow-2xl shadow-[var(--primary-500)]/5" 
                      : "bg-transparent border-[var(--surface-4)] hover:bg-[var(--surface-0)]/50"
                  )}
                >
                  {/* Mobile Image (Only visible on small screens when active) */}
                  <div className={cn(
                    "lg:hidden w-full overflow-hidden transition-all duration-500 rounded-2xl mb-6 relative",
                    isActive ? "h-48 md:h-64 opacity-100" : "h-0 opacity-0 mb-0"
                  )}>
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  <div className="flex items-start gap-6 relative z-10">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 transition-colors duration-500",
                      isActive ? "bg-[var(--primary-500)]" : "bg-[var(--surface-2)]"
                    )}>
                      {(() => {
                        const ServiceIcon = service.icon;
                        return <ServiceIcon className={cn(
                          "w-8 h-8 transition-colors duration-500",
                          isActive ? "text-[var(--surface-0)]" : "text-[var(--text-muted)]"
                        )} />;
                      })()}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className={cn(
                        "text-2xl md:text-3xl font-bold font-heading mb-4 transition-colors duration-500",
                        isActive ? "text-[var(--primary-500)]" : "text-[var(--foreground)]"
                      )}>
                        {service.title}
                      </h3>
                      
                      <div className={cn(
                        "overflow-hidden transition-all duration-500",
                        isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0 lg:max-h-40 lg:opacity-100"
                      )}>
                        <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-6">
                          {service.desc}
                        </p>
                        
                        <div className="flex items-center text-[var(--foreground)] font-medium group w-max">
                          Explore Service 
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform text-[var(--primary-500)]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
