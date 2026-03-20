"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const blogPosts = [
    {
        slug: "uk-solar-incentives-2026",
        title: "UK Solar Incentives in 2026",
        excerpt: "Government incentives and new schemes to help you afford solar power.",
        image: "/blog-1.jpg",
        featured: true,
    },
    {
        slug: "battery-storage-best-practices",
        title: "Battery Storage Best Practices for UK Homes",
        excerpt: "How to size, manage and maintain your solar storage system.",
        image: "/blog-2.jpg",
        featured: false,
    },
    {
        slug: "beginners-guide-to-solar",
        title: "The Beginner's Guide to Solar Panels",
        excerpt: "Everything you need to know to get started with solar energy.",
        image: "/blog-3.jpg",
        featured: false,
    },
];

const BlogPostCard = ({ post }: { post: any }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-xl overflow-hidden"
    >
        <Link href={`/blog/${post.slug}`}>
            <Image src={post.image} alt={post.title} width={400} height={250} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </div>
        </Link>
    </motion.div>
);

export default function BlogPage() {
    const featuredPost = blogPosts.find(p => p.featured);
    const otherPosts = blogPosts.filter(p => !p.featured);

    return (
        <section className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
                <h1 className="text-4xl font-bold text-center mb-12">Our Blog</h1>
                {featuredPost && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <Image src={featuredPost.image} alt={featuredPost.title} width={600} height={400} className="rounded-lg" />
                                <div>
                                    <h2 className="text-3xl font-bold">{featuredPost.title}</h2>
                                    <p className="mt-4 text-muted-foreground">{featuredPost.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {otherPosts.map((post) => (
                        <BlogPostCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
}
