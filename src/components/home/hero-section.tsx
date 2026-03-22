"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SolarHero3D } from "@/components/3d/solar-hero";

export default function HeroSection() {
  return (
    // make section relative so we can place the 3D canvas behind content
    // center everything vertically and horizontally (including the 3D canvas)
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* background animation - centered */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <SolarHero3D background />
      </div>

      <div className="container px-4 md:px-6 relative z-10 flex items-center justify-center">
  {/* subtle overlay for text readability (between 3D canvas and content) */}
  {/* Use a light gradient so the 3D background remains visible but text keeps contrast */}
  <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-black/10 to-black/20 backdrop-blur-sm" />
        <div className="w-full max-w-4xl">
          <motion.div 
            className="flex flex-col items-center text-center justify-center space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl xl:text-8xl text-white drop-shadow-xl">
                Future of Green Energy
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-100 md:text-xl drop-shadow">
                Top-tier solar panels and renewable energy solutions for your home and business. Join the green revolution today.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Link
                className="inline-flex h-14 items-center justify-center rounded-lg bg-green-500 px-10 text-lg font-semibold text-black shadow-lg shadow-green-500/40 transition-all transform hover:scale-105 hover:bg-green-400 hover:shadow-green-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 disabled:pointer-events-none disabled:opacity-60"
                href="/contact"
              >
                Get a Quote
              </Link>
              <Link
                className="inline-flex h-14 items-center justify-center rounded-lg border border-green-400 bg-transparent text-white/90 px-10 text-lg font-semibold shadow-md shadow-green-400/20 transition-all hover:bg-green-400 hover:text-black hover:shadow-green-400/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 disabled:pointer-events-none disabled:opacity-60"
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
