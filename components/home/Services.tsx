"use client";

import { motion } from "framer-motion";
import { Globe, Package, Truck } from "lucide-react";

const services = [
    {
        title: "Spice Export",
        desc: "Exporting premium Indian spices to UAE, Europe, and USA markets.",
        icon: Globe,
    },
    {
        title: "Bulk Orders",
        desc: "Large-scale supply for wholesalers, distributors, and global buyers.",
        icon: Package,
    },
    {
        title: "Global Shipping",
        desc: "Reliable logistics ensuring fast and secure international delivery.",
        icon: Truck,
    },
];

export default function Services() {
    return (
        <section className="py-20 bg-gradient-to-r from-[#F4C47C]/30 via-transparent to-[#92333C]/30 overflow-hidden">

            {/* TITLE */}
            <div className="px-6 md:px-20 mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Our Services
                </h2>
                <p className="text-sm text-[#6C5547] mt-2">
                    End-to-end export solutions for global markets
                </p>
            </div>

            {/* SCROLL ROW */}
            <div className="relative">

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-6 w-max px-6 md:px-20"
                >

                    {[...services, ...services].map((service, i) => (
                        <div
                            key={i}
                            className="min-w-[300px] group"
                        >

                            {/* GLASS CARD */}
                            <div className="bg-white/70 backdrop-blur-xl border border-white/40 p-6 rounded-xl shadow-md hover:shadow-xl transition">

                                {/* ICON */}
                                <div className="mb-4 text-[#A02D27]">
                                    <service.icon className="w-7 h-7" />
                                </div>

                                {/* TITLE */}
                                <h3 className="text-lg font-semibold text-[#2A1A17]">
                                    {service.title}
                                </h3>

                                {/* DESC */}
                                <p className="text-sm text-[#6C5547] mt-2 leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* CTA */}
                                <button className="mt-4 text-[#A02D27] text-sm font-medium">
                                    Learn More →
                                </button>

                            </div>

                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}