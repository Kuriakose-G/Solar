import React from 'react';
import { FaUserTie, FaSolarPanel, FaPowerOff } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-black rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <FaUserTie size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Consultation</h3>
            <p className="text-gray-400 max-w-xs">
              We provide a free, no-obligation quote tailored to your energy needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-black rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <FaSolarPanel size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Installation</h3>
            <p className="text-gray-400 max-w-xs">
              Our certified team installs your solar system safely and efficiently.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-green-500 text-black rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <FaPowerOff size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white">Activation</h3>
            <p className="text-gray-400 max-w-xs">
              We handle all paperwork and connect your system to the grid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
