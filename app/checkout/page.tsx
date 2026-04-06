/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CheckoutPage() {
    const { cart } = useCart();
    const router = useRouter();

    const total = cart.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
    );

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        pin: "",
        phone: "",
        email: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        localStorage.setItem("quoteRequest", JSON.stringify({ cart, form }));
        localStorage.removeItem("cart");
        router.push("/success");
    };

    return (
        <div className="bg-[#F4C47C]/20 min-h-screen px-6 md:px-20 py-24">

            {/* HEADER */}
            <div className="mb-14">
                <h1 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
                    Request Export Quote
                </h1>
                <p className="text-sm text-[#6C5547] mt-2">
                    Fill your details and we’ll contact you within 24 hours
                </p>
            </div>

            {cart.length === 0 ? (
                <div className="text-center mt-40">
                    <p className="text-[#6C5547] mb-6">
                        No products selected
                    </p>

                    <button
                        onClick={() => router.push("/shop")}
                        className="px-6 py-3 bg-[#A02D27] text-white rounded-md"
                    >
                        Browse Products
                    </button>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 gap-16">

                    {/* LEFT - FORM */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/70 backdrop-blur-xl border border-white/40 rounded-xl p-8 shadow-md"
                    >

                        <h2 className="text-lg font-medium text-[#2A1A17] mb-6">
                            Customer Details
                        </h2>

                        <div className="space-y-5">

                            {/* NAME */}
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    name="firstName"
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className="input4"
                                />
                                <input
                                    name="lastName"
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className="input4"
                                />
                            </div>

                            {/* ADDRESS */}
                            <input
                                name="address"
                                onChange={handleChange}
                                placeholder="Delivery / Project Location"
                                className="input4"
                            />

                            {/* CITY */}
                            <div className="grid grid-cols-3 gap-4">
                                <input name="city" onChange={handleChange} placeholder="City" className="input4" />
                                <input name="state" onChange={handleChange} placeholder="State" className="input4" />
                                <input name="pin" onChange={handleChange} placeholder="PIN" className="input4" />
                            </div>

                            {/* CONTACT */}
                            <input name="phone" onChange={handleChange} placeholder="Phone" className="input4" />
                            <input name="email" onChange={handleChange} placeholder="Email" className="input4" />

                            <textarea
                                rows={4}
                                placeholder="Additional requirements (optional)"
                                className="input4"
                            />

                        </div>

                    </motion.div>

                    {/* RIGHT - SUMMARY */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl p-8 shadow-md h-fit"
                    >

                        <h2 className="text-lg font-medium text-[#2A1A17] mb-6">
                            Order Summary
                        </h2>

                        {/* ITEMS */}
                        <div className="space-y-4 mb-6">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between text-sm">
                                    <span className="text-[#6C5547]">
                                        {item.name} × {item.qty}
                                    </span>
                                    <span>
                                        ₹{(item.price * item.qty).toLocaleString()}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* TOTAL */}
                        <div className="border-t border-[#e5c2c8] pt-4 flex justify-between mb-8">
                            <span className="text-[#6C5547]">Total Estimate</span>
                            <span className="font-semibold text-[#2A1A17]">
                                ₹{total.toLocaleString()}
                            </span>
                        </div>

                        {/* CTA */}
                        <button
                            onClick={handleSubmit}
                            className="w-full bg-[#A02D27] text-white py-3 rounded-md hover:scale-[1.02] active:scale-[0.98] transition"
                        >
                            Submit Inquiry
                        </button>

                    </motion.div>

                </div>
            )}
        </div>
    );
}