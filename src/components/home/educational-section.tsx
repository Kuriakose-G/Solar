"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const EducationalSection = () => {
  const articles = [
    {
      title: "The Beginner's Guide to Solar Panels",
      excerpt: "Everything you need to know to get started with solar energy.",
      slug: "beginners-guide-to-solar"
    },
    {
      title: "How to Choose the Right Solar Inverter",
      excerpt: "A deep dive into the different types of inverters and how to choose the best one for you.",
      slug: "choosing-a-solar-inverter"
    },
    {
      title: "Understanding Solar Panel Efficiency",
      excerpt: "Learn what efficiency ratings mean and how they impact your energy production.",
      slug: "solar-panel-efficiency"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Learn About Solar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-background p-6 rounded-lg border border-green-500/20 shadow-md hover:shadow-lg hover:border-green-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="text-green-400 hover:text-green-300 transition-colors font-medium">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
