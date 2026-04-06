"use client";

import { motion } from "framer-motion";
import { RiGlobalFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Footer() {
    const router = useRouter();

    return (
        <footer className="bg-[#2A1A17] text-white mt-20">

            {/* 🔔 CTA STRIP */}
            <div className="mx-6 md:mx-20 -mt-16 mb-14 bg-[#A02D27] rounded-xl px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">

                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Looking for Reliable Export Partner?
                    </h2>
                    <p className="text-sm text-white/80 mt-1">
                        We supply premium spices and natural products to global markets
                    </p>
                </div>

                <button
                    onClick={() => router.push("/contact")}
                    className="bg-white text-[#2A1A17] px-6 py-3 text-sm rounded-md hover:opacity-90 transition"
                >
                    Get in Touch
                </button>
            </div>

            {/* 🧊 MAIN FOOTER */}
            <div className="px-6 md:px-20 py-14 border-t border-white/10">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* BRAND */}
                    <div>
                        <h3 className="text-xl font-semibold">
                            Safeer Saf Agro
                        </h3>
                        <p className="mt-3 text-sm text-white/70 leading-relaxed">
                            Exporting premium Indian spices and natural products to UAE, Europe,
                            and the USA with a focus on quality and reliability.
                        </p>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h4 className="font-medium text-[#F4C47C] mb-3">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li onClick={() => router.push("/")} className="cursor-pointer hover:text-white">Home</li>
                            <li onClick={() => router.push("/services")} className="cursor-pointer hover:text-white">Services</li>
                            <li onClick={() => router.push("/shop")} className="cursor-pointer hover:text-white">Products</li>
                            <li onClick={() => router.push("/contact")} className="cursor-pointer hover:text-white">Contact</li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="font-medium text-[#F4C47C] mb-3">
                            Services
                        </h4>
                        <ul className="space-y-2 text-sm text-white/70">
                            <li>Spice Export</li>
                            <li>Bulk Orders</li>
                            <li>Global Shipping</li>
                            <li>Quality Assurance</li>
                        </ul>
                    </div>

                    {/* SOCIAL */}
                    <div>
                        <h4 className="font-medium text-[#F4C47C] mb-3">
                            Connect
                        </h4>

                        <div className="flex gap-4 text-white/70 text-lg">

                            <motion.div whileHover={{ scale: 1.2 }}>
                                <RiGlobalFill className="cursor-pointer hover:text-white" />
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.2 }}>
                                <FaFacebook className="cursor-pointer hover:text-white" />
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.2 }}>
                                <FaInstagram className="cursor-pointer hover:text-white" />
                            </motion.div>

                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/50">
                    © 2026 Safeer Safa Agro. All rights reserved.
                </div>

            </div>
        </footer>
    );
}