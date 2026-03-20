"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SolarHero3D } from "@/components/3d/solar-hero";

export default function HeroSection() {
  return (
    // make section relative so we can place the 3D canvas behind content
    <section className="relative w-full py-20 md:py-32 lg:py-40 xl:py-48 overflow-hidden">
      {/* background animation */}
      <SolarHero3D background />

      <div className="container px-4 md:px-6 relative z-10">
        {/* subtle overlay for text readability */}
        <div className="pointer-events-none absolute inset-0 -z-10" />
        <div className="grid gap-8 lg:grid-cols-1 lg:gap-16">
          <motion.div 
            className="flex flex-col justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl/none text-white">
                Future of Green Energy
              </h1>
              <p className="max-w-[600px] text-gray-300 md:text-xl">
                Top-tier solar panels and renewable energy solutions for your home and business. Join the green revolution today.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Link
                className="inline-flex h-14 items-center justify-center rounded-lg bg-green-500 px-10 text-lg font-semibold text-black shadow-lg transition-transform transform hover:scale-105 hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 disabled:pointer-events-none disabled:opacity-60"
                href="/contact"
              >
                Get a Quote
              </Link>
              <Link
                className="inline-flex h-14 items-center justify-center rounded-lg border border-green-400 bg-transparent text-green-400 px-10 text-lg font-semibold shadow-md transition-all hover:bg-green-400 hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 disabled:pointer-events-none disabled:opacity-60"
                href="/products"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
