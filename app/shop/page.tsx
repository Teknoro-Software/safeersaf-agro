"use client";

import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Black Pepper",
    price: "₹899 / kg",
    category: "Spices",
    image: "/images/blackpep.jpg",
  },
  {
    id: 2,
    name: "Green Cardamom",
    price: "₹1,299 / kg",
    category: "Spices",
    image: "/images/carda.jpg",
  },
  {
    id: 3,
    name: "Turmeric",
    price: "₹499 / kg",
    category: "Spices",
    image: "/images/tur.jpg",
  },
  {
    id: 4,
    name: "Clove",
    price: "₹799 / kg",
    category: "Spices",
    image: "/images/clove.jpg",
  },
  {
    id: 5,
    name: "Cinnamon",
    price: "₹699 / kg",
    category: "Spices",
    image: "/images/cinna.jpg",
  },
  {
    id: 6,
    name: "Rudraksha",
    price: "₹999 / piece",
    category: "Natural",
    image: "/images/Rudraksha.jpg",
  },
  {
    id: 7,
    name: "Nutmeg",
    price: "₹899 / piece",
    category: "Spices",
    image: "/images/nut.jpg",
  },
];

export default function ShopPage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const categories = ["ALL", "Spices", "Natural"];

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#F4C47C]/20 min-h-screen px-6 md:px-20 py-24">

      {/* HEADER */}
      <div className="mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#2A1A17]">
          Our Products
        </h1>
        <p className="text-sm text-[#6C5547] mt-2">
          Premium export-quality spices and natural products
        </p>
      </div>

      {/* FILTER */}
      <div className="flex gap-3 flex-wrap mb-12">
        {categories.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveCategory(item)}
            className={`px-5 py-2 text-sm rounded-full border transition ${activeCategory === item
                ? "bg-[#A02D27] text-white border-[#A02D27]"
                : "border-[#e5c2c8] text-[#2A1A17] hover:border-[#A02D27]"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group"
          >

            {/* CARD */}
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  className="w-full h-[220px] object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-[10px] text-[#A02D27] uppercase">
                  {product.category}
                </p>

                <h3 className="text-sm font-medium text-[#2A1A17]">
                  {product.name}
                </h3>

                <p className="text-sm mt-1 text-[#6C5547]">
                  {product.price}
                </p>

                {/* BUTTON */}
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: Number(product.price.replace(/[^0-9]/g, "")),
                      image: product.image,
                    })
                  }
                  className="mt-4 w-full bg-[#A02D27] text-white py-2 rounded-md text-sm hover:scale-[1.03] active:scale-[0.97] transition"
                >
                  Add to Inquiry
                </button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}