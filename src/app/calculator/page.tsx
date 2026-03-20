"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CalculatorPage() {
  const [bill, setBill] = useState(100);
  const [roofType, setRoofType] = useState("south");
  const [sunlight, setSunlight] = useState(4); // Average sunlight hours per day

  const savings = bill * 0.7 * (roofType === "south" ? 1 : 0.8) * (sunlight / 4);
  const roi = (10000 / (savings * 12)).toFixed(1); // Assuming an average system cost of £10,000

  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">Savings Calculator</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Estimate your potential savings with a solar panel system from Solar Inc.
          </p>
        </motion.div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="bill" className="block text-lg font-medium">Average Monthly Electricity Bill (£)</label>
                <input id="bill" type="number" value={bill} onChange={(e) => setBill(Number(e.target.value))} className="mt-2 w-full p-2 border rounded-md" />
              </div>
              <div>
                <label htmlFor="roofType" className="block text-lg font-medium">Roof Direction</label>
                <select id="roofType" value={roofType} onChange={(e) => setRoofType(e.target.value)} className="mt-2 w-full p-2 border rounded-md">
                  <option value="south">South-facing</option>
                  <option value="east-west">East/West-facing</option>
                </select>
              </div>
              <div>
                <label htmlFor="sunlight" className="block text-lg font-medium">Average Daily Sunlight (hours)</label>
                <input id="sunlight" type="range" min="1" max="8" value={sunlight} onChange={(e) => setSunlight(Number(e.target.value))} className="w-full" />
                <div className="text-sm text-muted-foreground">{sunlight} hours</div>
              </div>
            </div>
            <div className="text-center bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold">Your Estimated Savings</h2>
              <motion.div
                key={savings}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-6xl font-bold text-primary my-4">
                  £{savings.toFixed(2)}
                </p>
              </motion.div>
              <p className="text-xl">per month</p>
              <p className="text-lg mt-4">Estimated ROI: <strong>{roi} years</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
