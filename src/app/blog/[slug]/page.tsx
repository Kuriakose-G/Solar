import { notFound } from "next/navigation";
import PostPageClient, { PostData } from "@/components/blog/post-page-client";

const posts = [
    {
        slug: "uk-solar-incentives-2026",
        title: "UK Solar Incentives in 2026",
        excerpt: "Government incentives and new schemes to help you afford solar power.",
        image: "/blog-1.jpg",
        featured: true,
        author: "John Doe",
        date: "2024-07-22",
        content: `
<p>The UK government has announced a new set of incentives for solar power adoption in 2026, aiming to accelerate the country's transition to renewable energy. These incentives include enhanced feed-in tariffs, grants for low-income households, and tax credits for businesses.</p>
<p>For homeowners, the most significant change is the introduction of a new Smart Export Guarantee (SEG) tariff, which will pay them for any excess energy they export back to the grid. This will make solar power more financially attractive than ever before.</p>
        `
    },
    {
        slug: "battery-storage-best-practices",
        title: "Battery Storage Best Practices for UK Homes",
        excerpt: "How to size, manage and maintain your solar storage system.",
        image: "/blog-2.jpg",
        featured: false,
        author: "Jane Smith",
        date: "2024-07-15",
        content: `
<p>Battery storage is a crucial component of any modern solar power system. It allows you to store excess energy generated during the day and use it at night or during power outages. However, to get the most out of your battery, it's important to follow some best practices.</p>
<p>Firstly, make sure your battery is correctly sized for your needs. A battery that is too small won't be able to store enough energy, while a battery that is too large will be a waste of money. Secondly, use a smart battery management system to optimize charging and discharging cycles. This will help to extend the lifespan of your battery and maximize your savings.</p>
        `
    },
    {
        slug: "beginners-guide-to-solar",
        title: "The Beginner's Guide to Solar Panels",
        excerpt: "Everything you need to know to get started with solar energy.",
        image: "/blog-3.jpg",
        featured: false,
        author: "Peter Jones",
        date: "2024-07-08",
        content: `
<p>Solar power is a clean, renewable, and abundant source of energy. It's also becoming increasingly affordable, making it a great option for homeowners and businesses alike. But if you're new to solar, you may be wondering where to start.</p>
<p>This guide will walk you through the basics of solar power, from how it works to the different types of solar panels available. We'll also cover the benefits of solar power and what to look for when choosing a solar installer.</p>
        `
    },
];

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  const postData = post as PostData;
  
  return <PostPageClient post={postData} />;
}

