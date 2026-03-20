import React from 'react';
import { FaUserShield, FaCheckCircle, FaTools } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
            <FaUserShield className="text-green-400 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Expertise</h3>
            <p className="text-gray-400">
              Our team has over 20 years of combined experience in the solar industry.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
            <FaCheckCircle className="text-green-400 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Quality</h3>
            <p className="text-gray-400">
              We use only the highest-quality, certified products for all our installations.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl border border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
            <FaTools className="text-green-400 text-5xl mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-white">Support</h3>
            <p className="text-gray-400">
              We offer lifetime support and a robust warranty for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
