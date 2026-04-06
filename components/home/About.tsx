"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="px-6 md:px-20 py-24 bg-gradient-to-r from-[#E1A49A]/40 via-transparent to-[#F4C47C]/30 relative overflow-hidden">

            {/* 🌿 BACKGROUND GLOW */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#A02D27]/10 rounded-full blur-3xl"></div>

            <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

                {/* LEFT - IMAGE STACK */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >

                    {/* MAIN IMAGE */}
                    <img
                        src="/images/spices.jpg"
                        className="w-full h-[420px] object-cover rounded-xl shadow-lg"
                    />

                    {/* FLOAT CARD */}
                    <div className="absolute -bottom-6 left-6 bg-white/80 backdrop-blur-md px-6 py-4 rounded-lg shadow-lg text-sm">
                        🌿 Trusted Spice Export Partner
                    </div>

                    {/* SMALL IMAGE */}
                    <img
                        src="/images/rudraksha.jpg"
                        className="absolute -top-10 -right-6 w-32 h-32 object-cover rounded-lg shadow-md border-4 border-white"
                    />

                </motion.div>

                {/* RIGHT - CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    {/* BADGE */}
                    <p className="text-xs tracking-[0.3em] text-[#A02D27] mb-4">
                        ABOUT US
                    </p>

                    {/* TITLE */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17] leading-snug">
                        Exporting Nature’s Finest <br />
                        To Global Markets
                    </h2>

                    {/* TEXT */}
                    <p className="mt-6 text-[#6C5547] text-sm md:text-base leading-relaxed max-w-md">
                        Safeer Safa Agro specializes in exporting premium Indian spices
                        and natural products to international markets. With a strong focus
                        on quality, sourcing, and logistics, we ensure every shipment meets
                        global standards.
                    </p>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-3 text-sm text-[#2A1A17]">
                        <div>✔ Direct farm sourcing</div>
                        <div>✔ Strict quality inspection</div>
                        <div>✔ Global export network</div>
                    </div>

                    {/* STATS (FLOAT STYLE) */}
                    <div className="flex gap-6 mt-10">

                        <div className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#A02D27]">100+</h3>
                            <p className="text-xs text-[#6C5547]">Clients</p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#A02D27]">15+</h3>
                            <p className="text-xs text-[#6C5547]">Countries</p>
                        </div>

                        <div className="bg-white/70 backdrop-blur-md px-6 py-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-[#A02D27]">100%</h3>
                            <p className="text-xs text-[#6C5547]">Quality</p>
                        </div>

                    </div>

                    {/* CTA */}
                    <button className="mt-8 bg-[#A02D27] text-white px-6 py-3 text-sm hover:bg-[#7c201c] transition rounded-md">
                        Learn More
                    </button>

                </motion.div>
            </div>
        </section>
    );
}