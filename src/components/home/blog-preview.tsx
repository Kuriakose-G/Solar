"use client";

import React from 'react';
import Link from 'next/link';
import { products } from '@/app/data/products';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogPreview = () => {
    const featuredPosts = [
        {
            title: "The Beginner's Guide to Solar Panels",
            excerpt: "Everything you need to know to get started with solar energy.",
            slug: "beginners-guide-to-solar",
            image: "/case-study-1.jpg"
        },
        {
            title: "How to Choose the Right Solar Inverter",
            excerpt: "A deep dive into the different types of inverters and how to choose the best one for you.",
            slug: "choosing-a-solar-inverter",
            image: "/case-study-2.jpg"
        },
        {
            title: "Understanding Solar Panel Efficiency",
            excerpt: "Learn what efficiency ratings mean and how they impact your energy production.",
            slug: "solar-panel-efficiency",
            image: "/case-study-3.jpg"
        }
    ]
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              className="border border-green-500/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:border-green-500/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={post.image} alt={post.title} width={400} height={250} className="hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-green-400 hover:text-green-300 transition-colors font-medium">
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

export default BlogPreview;
