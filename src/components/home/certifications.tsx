"use client";

import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: "MCS Certified",
      description: "Microgeneration Certification Scheme"
    },
    {
      name: "RECC Member",
      description: "Renewable Energy Consumer Code"
    },
    {
      name: "NICEIC Approved",
      description: "National Inspection Council"
    },
    {
      name: "Tesla Powerwall",
      description: "Certified Installer"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Certifications & Memberships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-background rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center mb-3">
                <FaCheck className="text-green-400 text-lg" />
              </div>
              <h3 className="text-lg font-semibold text-white text-center mb-1">{cert.name}</h3>
              <p className="text-sm text-gray-400 text-center">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
