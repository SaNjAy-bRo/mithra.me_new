"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  pillarColor: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  title,
  pillarColor,
}: EnquiryModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Invalid phone number (10 digits required)";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-navy/60 backdrop-blur-md p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-pale text-brand-navy transition-transform hover:scale-110"
            >
              <i className="ph-bold ph-x text-xl" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="mb-10 pr-10">
                  <div 
                    className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-wider mb-4"
                    style={{ backgroundColor: `${pillarColor}15`, color: pillarColor }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: pillarColor }} />
                    Quick Enquiry
                  </div>
                  <h3 className="text-3xl font-black text-brand-navy leading-tight">
                    Interested in <span style={{ color: pillarColor }}>{title}</span>?
                  </h3>
                  <p className="mt-4 text-brand-text/70 font-medium">
                    Fill in your details below and our media planning team will send you the latest availability and rates within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: "" });
                      }}
                      className={`w-full rounded-2xl border-2 bg-brand-pale px-6 py-4 text-brand-navy transition-all focus:bg-white focus:outline-none ${
                        errors.name ? "border-red-500" : "border-transparent focus:border-brand-navy/20"
                      }`}
                    />
                    {errors.name && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-widest ml-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="10-digit mobile"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: "" });
                        }}
                        className={`w-full rounded-2xl border-2 bg-brand-pale px-6 py-4 text-brand-navy transition-all focus:bg-white focus:outline-none ${
                          errors.phone ? "border-red-500" : "border-transparent focus:border-brand-navy/20"
                        }`}
                      />
                      {errors.phone && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-brand-navy/60 uppercase tracking-widest ml-1">Work Email</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full rounded-2xl border-2 bg-brand-pale px-6 py-4 text-brand-navy transition-all focus:bg-white focus:outline-none ${
                          errors.email ? "border-red-500" : "border-transparent focus:border-brand-navy/20"
                        }`}
                      />
                      {errors.email && <p className="text-[10px] font-bold text-red-500 ml-1">{errors.email}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="relative w-full group overflow-hidden rounded-2xl py-5 font-black text-white transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:hover:scale-100"
                    style={{ backgroundColor: pillarColor }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isLoading ? (
                        <>
                          <i className="ph-bold ph-circle-notch animate-spin text-xl" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Proposal Request
                          <i className="ph-bold ph-paper-plane-tilt text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center"
              >
                <div 
                  className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] shadow-2xl"
                  style={{ backgroundColor: pillarColor }}
                >
                  <i className="ph-bold ph-check text-5xl text-white" />
                </div>
                <h3 className="text-4xl font-black text-brand-navy leading-tight">
                  Thank You!
                </h3>
                <p className="mt-6 text-lg text-brand-text/70 max-w-sm mx-auto leading-relaxed">
                  Your enquiry for <span className="font-bold text-brand-navy">{title}</span> has been received. Our team will contact you shortly.
                </p>
                <button
                  onClick={onClose}
                  className="mt-10 rounded-2xl bg-brand-navy px-10 py-4 text-sm font-black text-white hover:bg-brand-navy/90 transition-colors"
                >
                  Close Window
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
