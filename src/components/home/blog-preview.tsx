import React from 'react';
import Link from 'next/link';
import { products } from '@/app/data/products';
import Image from 'next/image';

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
        <h2 className="text-3xl font-bold text-center mb-8">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <div key={post.slug} className="border rounded-lg overflow-hidden soft-shadow hover:shadow-lg transition-shadow">
              <Image src={post.image} alt={post.title} width={400} height={250} />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
