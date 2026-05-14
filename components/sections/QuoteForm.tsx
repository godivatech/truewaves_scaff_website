"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { db, collection, addDoc } from "@/lib/firebase";

type FormData = {
  requirement: string;
  name: string;
  phone: string;
  location: string;
  type: string;
  quantity: string;
  timeline: string;
  message: string;
};

export function QuoteForm() {
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<FormData>({
    defaultValues: {
      requirement: "Scaffolding Rental"
    }
  });
  const watchRequirement = watch("requirement");
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h1 className="text-xl md:text-2xl font-bold text-[var(--foreground)] mb-8 opacity-90">Get a quick quote lead form</h1>
              <div className="bg-[var(--primary-500)] py-4 px-6 rounded-t-2xl inline-block mb-[-1px] w-full max-w-2xl">
                <span className="text-white/80 font-semibold tracking-wider text-xs uppercase block mb-1">Scaffolding Services</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase">
                  Get a Quick Quote
                </h2>
              </div>
            </motion.div>

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
                    {/* Requirement Selection */}
                    <div className="space-y-3 mb-8">
                      <label className="text-sm font-semibold text-[var(--foreground)]">Select your requirement</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <label 
                          className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                            watchRequirement === "Scaffolding Rental" 
                              ? "bg-[var(--primary-500)]/10 border-[var(--primary-500)] shadow-sm" 
                              : "bg-[var(--surface-2)] border-[var(--surface-4)] hover:border-[var(--surface-5)]"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            watchRequirement === "Scaffolding Rental" ? "border-[var(--primary-500)]" : "border-[var(--surface-5)]"
                          }`}>
                            {watchRequirement === "Scaffolding Rental" && (
                              <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary-500)]" />
                            )}
                          </div>
                          <input 
                            type="radio" 
                            {...register("requirement")} 
                            value="Scaffolding Rental" 
                            className="hidden"
                          />
                          <span className="text-[var(--foreground)] font-medium">Scaffolding Rental</span>
                        </label>

                        <label 
                          className={`cursor-pointer flex items-center gap-3 p-4 rounded-xl border transition-all duration-200 ${
                            watchRequirement === "Material Purchase / Trading" 
                              ? "bg-[var(--primary-500)]/10 border-[var(--primary-500)] shadow-sm" 
                              : "bg-[var(--surface-2)] border-[var(--surface-4)] hover:border-[var(--surface-5)]"
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                            watchRequirement === "Material Purchase / Trading" ? "border-[var(--primary-500)]" : "border-[var(--surface-5)]"
                          }`}>
                            {watchRequirement === "Material Purchase / Trading" && (
                              <div className="w-2.5 h-2.5 rounded-full bg-[var(--primary-500)]" />
                            )}
                          </div>
                          <input 
                            type="radio" 
                            {...register("requirement")} 
                            value="Material Purchase / Trading" 
                            className="hidden"
                          />
                          <span className="text-[var(--foreground)] font-medium">Material Purchase / Trading</span>
                        </label>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Name</label>
                        <input 
                          {...register("name", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="Your full name"
                        />
                        {errors.name && <span className="text-red-400 text-xs">This field is required</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Phone number</label>
                        <input 
                          {...register("phone", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="+91 98765 43210"
                        />
                        {errors.phone && <span className="text-red-400 text-xs">This field is required</span>}
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Project location</label>
                        <input 
                          {...register("location", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="City, site address or area"
                        />
                        {errors.location && <span className="text-red-400 text-xs">This field is required</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Requirement type</label>
                        <select 
                          {...register("type", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                        >
                          <option value="">Select type</option>
                          <option value="Residential construction">Residential construction</option>
                          <option value="Commercial building">Commercial building</option>
                          <option value="Industrial plant">Industrial plant</option>
                          <option value="Bridge / infrastructure">Bridge / infrastructure</option>
                          <option value="Maintenance / repair">Maintenance / repair</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.type && <span className="text-red-400 text-xs">This field is required</span>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Timeline</label>
                        <select 
                          {...register("timeline", { required: true })} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                        >
                          <option value="">When do you need it?</option>
                          <option value="Within 1 week">Within 1 week</option>
                          <option value="Within 2 weeks">Within 2 weeks</option>
                          <option value="Within a month">Within a month</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                        {errors.timeline && <span className="text-red-400 text-xs">This field is required</span>}
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium text-[var(--text-muted)]">Quantity / details</label>
                        <input 
                          {...register("quantity")} 
                          className="w-full h-12 px-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all"
                          placeholder="e.g. 500 sq ft, 3 floors, pipe scaffolding"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-[var(--text-muted)]">Message</label>
                      <textarea 
                        {...register("message")} 
                        rows={4}
                        className="w-full p-4 rounded-xl bg-[var(--surface-2)] border border-[var(--surface-4)] text-[var(--foreground)] focus:outline-none focus:border-[var(--primary-500)] focus:ring-1 focus:ring-[var(--primary-500)] transition-all resize-none"
                        placeholder="Any additional details about your project..."
                      />
                    </div>

                    {error && <p className="text-red-400 text-sm text-center">{error}</p>}

                    <div className="pt-4 flex flex-col items-center gap-4">
                      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto min-w-[240px] h-14 text-lg">
                        {isSubmitting ? "Sending..." : "Get My Quote"}
                      </Button>
                      <p className="text-[var(--text-muted)] text-sm">
                        We'll respond as soon as possible. No spam, ever.
                      </p>
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
