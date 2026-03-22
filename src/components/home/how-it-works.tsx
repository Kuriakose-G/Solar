"use client";

import React from 'react';
import { FaUserTie, FaSolarPanel, FaPowerOff } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: FaUserTie,
      title: "Consultation",
      description: "We provide a free, no-obligation quote tailored to your energy needs.",
      delay: 0
    },
    {
      icon: FaSolarPanel,
      title: "Installation",
      description: "Our certified team installs your solar system safely and efficiently.",
      delay: 0.2
    },
    {
      icon: FaPowerOff,
      title: "Activation",
      description: "We handle all paperwork and connect your system to the grid.",
      delay: 0.4
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
              >
                <div className="bg-green-500 text-black rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/50 transition-transform duration-300 hover:scale-110">
                  <Icon size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
