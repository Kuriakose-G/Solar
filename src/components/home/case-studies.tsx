"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Residential Solar Installation in London",
      image: "/case-study-1.jpg",
      excerpt: "A family in London is now saving over £1,200 a year on their electricity bills.",
      slug: "residential-solar-london"
    },
    {
      title: "Commercial Solar for a Manchester Warehouse",
      image: "/case-study-2.jpg",
      excerpt: "A warehouse in Manchester reduced its carbon footprint by 80% with our solar solution.",
      slug: "commercial-solar-manchester"
    },
    {
      title: "Rural Solar Power for a Farm in Devon",
      image: "/case-study-3.jpg",
      excerpt: "A farm in Devon is now energy independent thanks to our off-grid solar system.",
      slug: "rural-solar-devon"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              className="border border-green-500/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:border-green-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={study.image} alt={study.title} width={400} height={250} className="hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{study.title}</h3>
                <p className="text-muted-foreground mb-4">{study.excerpt}</p>
                <Link href={`/case-studies/${study.slug}`} className="text-green-400 hover:text-green-300 transition-colors font-medium">
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
