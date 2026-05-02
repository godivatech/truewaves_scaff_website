"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Building2, HardHat, Package, Truck } from "lucide-react";

const services = [
  {
    title: "Scaffolding Rental",
    desc: "Need scaffolding for your site? We’ve got you covered with strong, safe, and ready-to-use systems — delivered when you need them.",
    highlight: "👉 Perfect for: Builders, contractors, site engineers",
    icon: Building2,
  },
  {
    title: "Formwork Solutions",
    desc: "We provide shuttering systems that help you build faster, cleaner, and with better finish quality.",
    highlight: "👉 Ideal for: Columns, slabs, beams, and full structures",
    icon: HardHat,
  },
  {
    title: "Material Trading & Supply",
    desc: "Looking for reliable materials? We supply quality-tested scaffolding components in bulk or as per your requirement.",
    highlight: "👉 Includes: Pipes, planks, couplers & accessories",
    icon: Package,
  },
  {
    title: "Site Support",
    desc: "We don’t just deliver — we support you on-site to ensure everything runs smoothly and safely.",
    highlight: "",
    icon: Truck,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-[var(--surface-1)] relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "80px" }}
            viewport={{ once: true }}
            className="h-1 bg-[var(--primary-500)] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="group hover:-translate-y-2 transition-transform duration-300 border-[var(--surface-4)] hover:shadow-[var(--primary-500)]/10">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="h-12 w-12 rounded-xl bg-[var(--surface-2)] flex items-center justify-center group-hover:bg-[var(--primary-500)]/20 transition-colors">
                    <service.icon className="h-6 w-6 text-[var(--foreground)] group-hover:text-[var(--primary-400)] transition-colors" />
                  </div>
                  <CardTitle className="text-xl text-[var(--foreground)]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="pl-16 space-y-3">
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      {service.desc}
                    </p>
                    {service.highlight && (
                      <p className="text-sm font-semibold text-[var(--primary-500)]">
                        {service.highlight}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
