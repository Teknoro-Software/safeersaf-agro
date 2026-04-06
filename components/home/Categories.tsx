"use client";

import { motion } from "framer-motion";

const categories = [
    {
        name: "Black Pepper",
        image: "/images/blackpep.jpg",
    },
    {
        name: "Cardamom",
        image: "/images/carda.jpg",
    },
    {
        name: "Turmeric",
        image: "/images/tur.jpg",
    },
    {
        name: "Clove",
        image: "/images/clove.jpg",
    },
    {
        name: "Cinnamon",
        image: "/images/cinna.jpg",
    },
    {
        name: "Nutmeg",
        image: "/images/nut.jpg",
    },
    {
        name: "Rudraksha",
        image: "/images/Rudraksha.jpg",
    },
];

export default function Categories() {
    return (
        <section className="py-20 bg-gradient-to-r from-[#E1A49A]/50 via-transparent to-[#F4C47C]/40 overflow-hidden">

            {/* TITLE */}
            <div className="px-6 md:px-20 mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Our Product Categories
                </h2>
                <p className="text-sm text-[#6C5547] mt-2">
                    Export-quality spices and natural products
                </p>
            </div>

            {/* SCROLL ROW */}
            <div className="relative">

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-6 w-max px-6 md:px-20"
                >

                    {[...categories, ...categories].map((cat, i) => (
                        <div
                            key={i}
                            className="min-w-[260px] group cursor-pointer"
                        >

                            {/* IMAGE CARD */}
                            <div className="relative overflow-hidden rounded-xl">

                                <img
                                    src={cat.image}
                                    className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                                    <span className="text-white text-sm">
                                        View →
                                    </span>
                                </div>

                            </div>

                            {/* TEXT */}
                            <h3 className="mt-3 text-[#2A1A17] font-medium text-sm">
                                {cat.name}
                            </h3>

                        </div>
                    ))}

                </motion.div>

            </div>
        </section>
    );
}