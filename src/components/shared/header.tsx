"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSolarPanel } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="px-4 lg:px-6 h-20 flex items-center bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-green-500/20">
      <Link className="flex items-center justify-center" href="/">
        <FaSolarPanel className="h-8 w-8 text-green-400" />
        <span className="ml-3 text-2xl font-bold text-white">Solar</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            className="nav-link group text-lg font-medium text-gray-300 hover:text-green-400 transition-colors duration-300"
            href={link.href}
          >
            <span className="nav-link">{link.label}</span>
          </Link>
        ))}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-green-500 text-black font-semibold px-6 py-3 rounded-lg shadow-md shadow-green-500/40 transition-all duration-250 transform hover:-translate-y-0.5 hover:bg-green-400 hover:shadow-green-400/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300"
        >
          Get Quote
        </Link>
      </nav>
      <div className="ml-auto lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
          {isMenuOpen ? <FiX className="h-7 w-7" /> : <FiMenu className="h-7 w-7" />}
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="absolute top-20 left-0 w-full bg-black/95 backdrop-blur-lg p-6 lg:hidden z-40 border-b border-green-500/20"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  className="text-xl font-semibold text-white nav-link transition-colors duration-200"
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="nav-link">{link.label}</span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-green-500 text-black font-semibold px-6 py-4 rounded-lg text-center shadow-md shadow-green-500/40 transition-all duration-300 transform hover:scale-105 hover:bg-green-400 hover:shadow-green-400/60"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
