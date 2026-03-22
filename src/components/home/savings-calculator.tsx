"use client";

import React, { useState } from 'react';

const SavingsCalculator = () => {
  const [bill, setBill] = useState(100);
  const [systemSize, setSystemSize] = useState(4);
  const [location, setLocation] = useState("average");

  // More realistic calculations based on system size and location
  const locationMultipliers = {
    "south": 1.15,
    "average": 1.0,
    "north": 0.85
  };

  const baseAnnualGeneration = systemSize * 1000; // kWh per year base
  const adjustedGeneration = baseAnnualGeneration * locationMultipliers[location as keyof typeof locationMultipliers];
  const monthlyGeneration = adjustedGeneration / 12;
  const monthlySavings = (monthlyGeneration / 1000) * (bill * 12 / 12); // More realistic: based on generation vs bill
  const annualSavings = monthlySavings * 12;
  const savings25Year = annualSavings * 25;

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Calculate Your Savings</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Estimate your potential savings with a custom solar system</p>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-lg p-8 shadow-lg border border-green-500/20">
            {/* Input controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              {/* Monthly bill input */}
              <div>
                <label htmlFor="bill" className="text-sm font-semibold text-gray-300 mb-2 block">
                  Monthly Electricity Bill
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-semibold text-green-400">£</span>
                  <input
                    id="bill"
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(Number(e.target.value))}
                    min="20"
                    max="500"
                    className="w-full pl-8 pr-4 py-3 text-lg font-semibold border-2 border-green-500/30 rounded-lg bg-gray-800/50 text-white focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all"
                  />
                </div>
              </div>

              {/* System size input */}
              <div>
                <label htmlFor="system" className="text-sm font-semibold text-gray-300 mb-2 block">
                  System Size (kW)
                </label>
                <input
                  id="system"
                  type="range"
                  min="2"
                  max="10"
                  step="0.5"
                  value={systemSize}
                  onChange={(e) => setSystemSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-400/50"
                />
                <div className="text-center mt-2">
                  <p className="text-lg font-semibold text-white">{systemSize}kW</p>
                  <p className="text-sm text-gray-400">({Math.floor(systemSize / 0.4)} panels approx)</p>
                </div>
              </div>

              {/* Location input */}
              <div>
                <label htmlFor="location" className="text-sm font-semibold text-gray-300 mb-2 block">
                  Roof Orientation
                </label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-green-500/30 rounded-lg bg-gray-800/50 text-white focus:border-green-400 focus:outline-none focus:ring-2 focus:ring-green-400/20 transition-all"
                >
                  <option value="south">South (Best)</option>
                  <option value="average">East/West (Average)</option>
                  <option value="north">North (Lower)</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="border-t border-green-500/20 pt-10">
              <h3 className="text-2xl font-bold mb-8 text-white text-center">Your Potential Savings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Monthly savings */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-lg p-6 text-center">
                  <p className="text-gray-400 text-sm font-medium mb-2">Per Month</p>
                  <p className="text-4xl font-bold text-green-400">£{monthlySavings.toFixed(0)}</p>
                  <p className="text-xs text-gray-500 mt-2">Average savings</p>
                </div>

                {/* Annual savings */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-lg p-6 text-center">
                  <p className="text-gray-400 text-sm font-medium mb-2">Per Year</p>
                  <p className="text-4xl font-bold text-green-400">£{annualSavings.toFixed(0)}</p>
                  <p className="text-xs text-gray-500 mt-2">At today's rates</p>
                </div>

                {/* 25-year savings */}
                <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-lg p-6 text-center">
                  <p className="text-gray-400 text-sm font-medium mb-2">Over 25 Years</p>
                  <p className="text-4xl font-bold text-green-400">£{savings25Year.toFixed(0)}</p>
                  <p className="text-xs text-gray-500 mt-2">Panel warranty period</p>
                </div>
              </div>

              {/* Additional info */}
              <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-green-500/10">
                <p className="text-sm text-gray-300">
                  💡 Your {systemSize}kW system will generate approximately <strong className="text-green-400">{adjustedGeneration.toFixed(0)} kWh</strong> annually. 
                  These estimates are based on typical UK weather patterns and don't include energy inflation. Actual savings may vary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
