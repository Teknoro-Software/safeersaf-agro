"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CartPage() {
  const { cart, removeItem, updateQty } = useCart();
  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="bg-[#F4C47C]/20 min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="mb-16 flex justify-between items-end">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
          Your Inquiry Cart
        </h1>

        <p className="text-sm text-[#6C5547]">
          {cart.length} items
        </p>
      </div>

      {/* EMPTY */}
      {cart.length === 0 ? (
        <div className="text-center mt-40">
          <p className="text-[#6C5547] mb-6">
            No products added yet
          </p>

          <button
            onClick={() => router.push("/shop")}
            className="px-6 py-3 bg-[#A02D27] text-white text-sm rounded-md hover:opacity-90 transition"
          >
            Browse Products
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-16">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-8">

            {cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex gap-6 items-center bg-white/70 backdrop-blur-md border border-white/40 rounded-xl p-4 shadow-sm"
              >

                {/* IMAGE */}
                <img
                  src={item.image || "/images/fallback.jpg"}
                  onError={(e) => {
                    e.currentTarget.src = "/images/fallback.jpg";
                  }}
                  className="w-24 h-28 object-cover rounded-md"
                />

                {/* DETAILS */}
                <div className="flex-1">

                  <h3 className="text-sm font-medium text-[#2A1A17]">
                    {item.name}
                  </h3>

                  <p className="text-[11px] text-[#6C5547] mt-1 uppercase">
                    Export Product
                  </p>

                  <p className="text-sm mt-2">
                    ₹{item.price.toLocaleString()}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-4 mt-4">

                    <div className="flex items-center border border-[#e5c2c8] rounded-md overflow-hidden">

                      <button
                        onClick={() => updateQty(item.id, "dec")}
                        className="px-3 py-1 hover:bg-[#f5e6e0]"
                      >
                        −
                      </button>

                      <span className="px-4 text-sm">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => updateQty(item.id, "inc")}
                        className="px-3 py-1 hover:bg-[#f5e6e0]"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-[#6C5547] hover:text-[#A02D27]"
                    >
                      Remove
                    </button>

                  </div>

                </div>

                {/* PRICE */}
                <div className="text-sm font-semibold text-[#2A1A17]">
                  ₹{(item.price * item.qty).toLocaleString()}
                </div>

              </motion.div>
            ))}

          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl p-8 h-fit shadow-md"
          >

            <h3 className="text-sm tracking-wide mb-8 text-[#2A1A17]">
              Order Summary
            </h3>

            <div className="flex justify-between text-sm mb-4">
              <span className="text-[#6C5547]">Subtotal</span>
              <span>₹{total.toLocaleString()}</span>
            </div>

            <div className="flex justify-between text-sm mb-6">
              <span className="text-[#6C5547]">Shipping</span>
              <span>Free</span>
            </div>

            <div className="border-t border-[#e5c2c8] pt-4 flex justify-between text-sm mb-8">
              <span>Total</span>
              <span className="font-semibold">
                ₹{total.toLocaleString()}
              </span>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-[#A02D27] text-white py-3 rounded-md text-sm hover:scale-[1.02] active:scale-[0.98] transition"
            >
              Proceed to Inquiry
            </button>

          </motion.div>

        </div>
      )}
    </div>
  );
}