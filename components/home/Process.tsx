"use client";

import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Truck } from "lucide-react";

const steps = [
    {
        title: "Farm Sourcing",
        desc: "Carefully sourced from trusted farms ensuring authenticity and purity.",
        icon: Leaf,
    },
    {
        title: "Quality Inspection",
        desc: "Each batch is tested and processed to meet global export standards.",
        icon: ShieldCheck,
    },
    {
        title: "Global Delivery",
        desc: "Efficient logistics ensure safe and timely delivery worldwide.",
        icon: Truck,
    },
];

export default function Process() {
    return (
        <section className="px-6 md:px-20 py-24 bg-gradient-to-r from-[#F4C47C]/30 via-transparent to-[#92333C]/30 relative overflow-hidden">

            {/* 🌿 BACKGROUND GLOW */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#A02D27]/10 rounded-full blur-3xl"></div>

            {/* TITLE */}
            <div className="mb-20 text-center relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Our Process
                </h2>
                <p className="text-sm text-[#6C5547] mt-2">
                    From sourcing to global delivery with precision
                </p>
            </div>

            {/* TIMELINE */}
            <div className="relative z-10">

                {/* LINE */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-[#A02D27]/20"></div>

                {/* STEPS */}
                <div className="grid md:grid-cols-3 gap-10">

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                            viewport={{ once: true }}
                            className="text-center relative"
                        >

                            {/* ICON CIRCLE */}
                            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-[#A02D27] text-white shadow-lg mb-6">
                                <step.icon className="w-6 h-6" />
                            </div>

                            {/* STEP NUMBER */}
                            <p className="text-xs tracking-widest text-[#A02D27] mb-2">
                                STEP {i + 1}
                            </p>

                            {/* CARD */}
                            <div className="bg-white/70 backdrop-blur-md border border-white/40 p-6 rounded-xl shadow">

                                <h3 className="text-lg font-semibold text-[#2A1A17]">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-[#6C5547] mt-2">
                                    {step.desc}
                                </p>

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
}