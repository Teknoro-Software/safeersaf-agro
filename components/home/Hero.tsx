"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={ref} className="relative h-screen overflow-hidden">

            {/* 🌿 PARALLAX BG (SPICES) */}
            <motion.img
                style={{ y }}
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1600&auto=format&fit=crop"
                className="absolute inset-0 w-full h-[120%] object-cover"
            />

            {/* 🌑 OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#6C5547]/70 to-black/90" />

            {/* CONTENT */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* 🌍 BRAND */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs tracking-[0.4em] text-[#F4C47C] mb-4"
                >
                    SAFEER SAF AGRO
                </motion.p>

                {/* 🌶️ TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight max-w-4xl"
                >
                    Premium Indian <br />
                    Spice Export
                </motion.h1>

                {/* ✨ SUBTEXT */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 text-gray-300 max-w-xl text-sm md:text-base leading-relaxed"
                >
                    Delivering high-quality Indian spices and natural products to international markets with strict quality standards and seamless global logistics.
                </motion.p>

                {/* 🌿 SPICE TAGS */}
                <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-[#F4C47C]">
                    <span>Black Pepper</span>
                    <span>Cardamom</span>
                    <span>Turmeric</span>
                    <span>Clove</span>
                    <span>Cinnamon</span>
                    <span>Nutmeg</span>
                    <span>Rudraksha</span>
                </div>

                {/* 🚀 CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    <button
                        onClick={() => router.push("/shop")}
                        className="bg-[#A02D27] px-8 py-3 text-white text-sm hover:scale-[1.03] active:scale-[0.97] transition"
                    >
                        View Products
                    </button>

                    <button
                        onClick={() => router.push("/contact")}
                        className="border border-[#F4C47C] px-8 py-3 text-[#F4C47C] text-sm hover:bg-[#F4C47C] hover:text-black transition"
                    >
                        Enquiry
                    </button>
                </motion.div>

            </div>

            {/* 📊 STATS BAR */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md border-t border-white/10">

                <div className="grid grid-cols-3 text-center py-6 text-white">

                    <div>
                        <p className="text-2xl font-semibold">100+</p>
                        <p className="text-xs text-gray-300 mt-1">Global Clients</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">15+</p>
                        <p className="text-xs text-gray-300 mt-1">Countries Exported</p>
                    </div>

                    <div>
                        <p className="text-2xl font-semibold">100%</p>
                        <p className="text-xs text-gray-300 mt-1">Quality Assured</p>
                    </div>

                </div>

            </div>

        </section>
    );
}