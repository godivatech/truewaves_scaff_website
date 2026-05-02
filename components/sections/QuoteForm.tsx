"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { db, collection, addDoc } from "@/lib/firebase";

type FormData = {
  name: string;
  phone: string;
  location: string;
  type: string;
  quantity: string;
  timeline: string;
  message: string;
};

export function QuoteForm() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: FormData) => {
    try {
      setError("");
      // Add a new document with a generated id.
      await addDoc(collection(db, "leads"), {
        ...data,
        createdAt: new Date()
      });
      setSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (e) {
      console.error("Error adding document: ", e);
      setError("Something went wrong. Please try again or contact us via WhatsApp.");
    }
  };

  return (
    <section id="quote" className="py-24 relative z-10 bg-[var(--surface-0)]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4"
            >
              Get a Quick Quote
            </motion.h2>
            <p className="text-[var(--text-muted)]">Fill out the details below and our team will get back to you immediately.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-[var(--surface-4)] glass-dark">
              <CardContent className="p-6 md:p-10">
                {success ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-[var(--success)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-[var(--success)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-[var(--foreground)] mb-2">Quote Request Sent!</h3>
                    <p className="text-[var(--text-muted)]">Thank you for your interest. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Full Name *</label>
                        <input 
                          {...register("name", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="John Doe"
                        />
                        {errors.name && <span className="text-red-400 text-xs">This field is required</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Phone Number *</label>
                        <input 
                          {...register("phone", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && <span className="text-red-400 text-xs">This field is required</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Location (City/Area) *</label>
                        <input 
                          {...register("location", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="Madurai"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Requirement Type *</label>
                        <select 
                          {...register("type", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                        >
                          <option value="">Select an option</option>
                          <option value="Rental">Scaffolding Rental</option>
                          <option value="Material">Material Supply</option>
                          <option value="Both">Both Rental & Supply</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Approximate Quantity</label>
                        <input 
                          {...register("quantity")} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="E.g., 500 sq ft / 200 pipes"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Project Timeline</label>
                        <input 
                          {...register("timeline")} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="E.g., Immediate / Next Month"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--text-muted)]">Additional Message</label>
                      <textarea 
                        {...register("message")} 
                        rows={4}
                        className="w-full p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all resize-none"
                        placeholder="Tell us more about your project requirements..."
                      />
                    </div>

                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                    <div className="pt-4 flex justify-center">
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto min-w-[200px]">
                        {isSubmitting ? "Sending..." : "Get My Quote"}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
