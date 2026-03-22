"use client";

import React from 'react';
import { FaUserShield, FaCheckCircle, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaUserShield,
      title: "Expertise",
      description: "Our team has over 20 years of combined experience in the solar industry.",
      delay: 0
    },
    {
      icon: FaCheckCircle,
      title: "Quality",
      description: "We use only the highest-quality, certified products for all our installations.",
      delay: 0.2
    },
    {
      icon: FaTools,
      title: "Support",
      description: "We offer lifetime support and a robust warranty for your peace of mind.",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:border-green-500/60"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: reason.delay }}
                viewport={{ once: true }}
              >
                <Icon className="text-green-400 text-5xl mb-4" />
                <h3 className="text-2xl font-bold mb-3 text-white">{reason.title}</h3>
                <p className="text-gray-400">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
