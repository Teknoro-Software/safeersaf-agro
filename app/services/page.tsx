"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Package,
  Truck,
  ShieldCheck,
  Leaf,
  Warehouse,
} from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Spice Export",
    desc: "Exporting premium Indian spices to UAE, Europe, and USA.",
    icon: Globe,
    image: "/images/export.jpg",
  },
  {
    title: "Bulk Orders",
    desc: "Large-scale supply for wholesalers and international buyers.",
    icon: Package,
    image: "/images/bulk.jpg",
  },
  {
    title: "Global Shipping",
    desc: "Reliable logistics ensuring safe and timely delivery worldwide.",
    icon: Truck,
    image: "/images/shipping.jpg",
  },
  {
    title: "Quality Assurance",
    desc: "Strict quality checks ensuring export-grade products.",
    icon: ShieldCheck,
    image: "/images/quality.jpg",
  },
  {
    title: "Farm Sourcing",
    desc: "Direct sourcing from trusted farms for authenticity.",
    icon: Leaf,
    image: "/images/farm.jpg",
  },
  {
    title: "Storage & Distribution",
    desc: "Efficient warehousing and distribution system.",
    icon: Warehouse,
    image: "/images/ex.jpg",
  },
];

export default function ServicesPage() {
  const router = useRouter();

  return (
    <div className="bg-[#F4C47C]/20 text-[#2A1A17]">

      {/* 🔥 HERO */}
      <section className="relative h-[60vh] flex items-center px-6 md:px-20 text-white overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1400&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-2xl">
          <p className="text-sm text-white/70">Home / Services</p>

          <h1 className="text-4xl md:text-5xl font-semibold mt-3">
            Export Solutions <br /> For Global Markets
          </h1>

          <p className="mt-4 text-sm text-white/80">
            End-to-end spice and natural product export services with
            quality assurance and reliable logistics.
          </p>
        </div>

      </section>

      {/* 💎 SERVICES GRID (PREMIUM CARDS) */}
      <section className="px-6 md:px-20 py-20">

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >

              {/* CARD */}
              <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">

                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-44 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div className="mb-3 text-[#A02D27]">
                    <item.icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#6C5547] mt-2">
                    {item.desc}
                  </p>

                  <button className="mt-4 text-[#A02D27] text-sm font-medium">
                    Learn More →
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </section>

      {/* 🌿 FEATURE SPLIT */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/spices.jpg"
          className="w-full h-[400px] object-cover rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold">
            Trusted Export Partner Worldwide
          </h2>

          <p className="mt-4 text-[#6C5547] text-sm leading-relaxed">
            We specialize in exporting premium spices and natural products
            with a strong focus on sourcing, quality, and logistics.
            Our global network ensures smooth and reliable delivery.
          </p>

          <button
            onClick={() => router.push("/contact")}
            className="mt-6 bg-[#A02D27] text-white px-6 py-3 text-sm rounded-md hover:bg-[#7c201c] transition"
          >
            Contact Us
          </button>
        </div>

      </section>

      {/* 💼 TRUST STRIP */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-3 gap-6">

        {[
          "Premium Quality Products",
          "Global Export Network",
          "Trusted by International Clients",
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`p-8 text-center rounded-lg ${i === 1
                ? "bg-[#A02D27] text-white"
                : "bg-white border border-white/40"
              }`}
          >
            <h3 className="font-medium">{item}</h3>
          </motion.div>
        ))}

      </section>

    </div>
  );
}