"use client";

import React, { useState } from 'react';

const SavingsCalculator = () => {
  const [bill, setBill] = useState(100);
  const savings = bill * 0.7;

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Calculate Your Savings</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <label htmlFor="bill" className="text-lg">
              My average monthly electricity bill is:
            </label>
            <div className="flex items-center">
              <span className="text-lg font-semibold">£</span>
              <input
                id="bill"
                type="number"
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-32 p-2 text-lg font-semibold border-b-2 border-primary bg-transparent focus:outline-none"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-xl">You could save up to</p>
            <p className="text-6xl font-bold text-primary my-4">
              £{savings.toFixed(2)}
            </p>
            <p className="text-xl">per month with solar!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
