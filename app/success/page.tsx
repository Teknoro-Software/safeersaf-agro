"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

export default function SuccessPage() {
    const router = useRouter();

    const [requestId] = useState(() =>
        Math.floor(100000 + Math.random() * 900000)
    );

    return (
        <div className="relative bg-[#F4C47C]/20 min-h-screen flex items-center justify-center px-6 overflow-hidden">

            {/* 🌿 BACKGROUND GLOW */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A02D27]/10 blur-3xl rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="relative z-10 text-center max-w-md w-full bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-10 shadow-lg"
            >

                {/* ✅ ICON */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-8 rounded-full bg-[#A02D27]/10 flex items-center justify-center"
                >
                    <Check className="w-7 h-7 text-[#A02D27]" />
                </motion.div>

                {/* TITLE */}
                <h1 className="text-2xl md:text-3xl font-semibold text-[#2A1A17]">
                    Inquiry Submitted
                </h1>

                {/* SUBTEXT */}
                <p className="text-sm text-[#6C5547] mt-4 leading-relaxed">
                    Thank you for your interest. Our team will review your request and
                    get back to you with pricing and export details shortly.
                </p>

                {/* REQUEST ID */}
                <div className="mt-8 text-sm text-[#6C5547]">
                    Request ID:
                    <span className="ml-2 text-[#2A1A17] font-medium">
                        #{requestId}
                    </span>
                </div>

                {/* DIVIDER */}
                <div className="h-px bg-[#e5c2c8] my-10"></div>

                {/* ACTIONS */}
                <div className="space-y-3">

                    <button
                        onClick={() => router.push("/shop")}
                        className="w-full bg-[#A02D27] text-white py-3 rounded-md text-sm hover:scale-[1.02] active:scale-[0.98] transition"
                    >
                        Browse More Products
                    </button>

                    <button
                        onClick={() => router.push("/")}
                        className="w-full text-sm text-[#6C5547] hover:text-[#2A1A17] transition"
                    >
                        Back to Home
                    </button>

                </div>

            </motion.div>
        </div>
    );
}