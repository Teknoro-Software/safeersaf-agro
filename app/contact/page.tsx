"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#F4C47C]/20 min-h-screen px-6 md:px-20 py-24 relative overflow-hidden">

      {/* 🌿 BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A02D27]/10 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16 relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2A1A17] leading-tight">
          Let’s Connect for{" "}
          <span className="text-[#A02D27]">Global Export</span>
        </h1>

        <p className="mt-6 text-[#6C5547] text-base">
          Looking for premium spices and natural products?
          Get in touch for bulk supply, export inquiries, and partnerships.
        </p>
      </motion.div>

      {/* MAIN */}
      <div className="grid md:grid-cols-2 gap-16 items-start relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >

          {/* LOCATION */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#A02D27]/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-[#A02D27]" />
            </div>
            <div>
              <h4 className="font-medium text-[#2A1A17]">
                Location
              </h4>
              <p className="text-[#6C5547] text-sm mt-1">
                Kerala, India
              </p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#A02D27]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#A02D27]" />
            </div>
            <div>
              <h4 className="font-medium text-[#2A1A17]">
                Email
              </h4>
              <p className="text-[#6C5547] text-sm mt-1">
                support@safeersafaagro.com
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[#A02D27]/10 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#A02D27]" />
            </div>
            <div>
              <h4 className="font-medium text-[#2A1A17]">
                Phone
              </h4>
              <p className="text-[#6C5547] text-sm mt-1">
                +91 9544250000
              </p>
            </div>
          </div>

          {/* INFO BOX */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-white/40 shadow-sm">
            <p className="text-sm text-[#6C5547]">
              We typically respond within 24 hours for all export inquiries and bulk orders.
            </p>
          </div>

        </motion.div>

        {/* RIGHT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/70 backdrop-blur-xl p-8 rounded-2xl border border-white/40 shadow-lg"
        >

          <h2 className="text-xl font-semibold text-[#2A1A17] mb-6">
            Send Inquiry
          </h2>

          <form className="space-y-5">

            {/* NAME */}
            <div className="grid grid-cols-2 gap-4">
              <input className="input4" placeholder="First Name" />
              <input className="input4" placeholder="Last Name" />
            </div>

            {/* EMAIL + PHONE */}
            <div className="grid grid-cols-2 gap-4">
              <input className="input4" placeholder="Email" />
              <input className="input4" placeholder="Phone" />
            </div>

            {/* MESSAGE */}
            <textarea
              rows={5}
              className="input4 resize-none"
              placeholder="Enter your requirement..."
            />

            {/* BUTTON */}
            <button className="w-full bg-[#A02D27] text-white py-3 rounded-md hover:scale-[1.02] active:scale-[0.98] transition">
              Send Inquiry
            </button>

          </form>

        </motion.div>

      </div>
    </div>
  );
}