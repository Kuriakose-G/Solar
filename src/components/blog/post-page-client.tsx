"use client";

import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export interface PostData {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  featured: boolean;
  author: string;
  date: string;
  content: string;
}

export default function PostPageClient({ post }: { post: PostData }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center">{post.title}</h1>
          <div className="mt-4 text-center text-muted-foreground">
            <span>By {post.author}</span> | <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <Image
            src={post.image}
            alt={post.title}
            width={800}
            height={400}
            className="rounded-lg my-8"
          />
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold">Share this post</h3>
            <div className="flex justify-center gap-4 mt-4">
              <Link
                href={`https://twitter.com/intent/tweet?url=https://solarinc.co.uk/blog/${post.slug}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                className="text-primary hover:underline"
              >
                Twitter
              </Link>
              <Link
                href={`https://www.facebook.com/sharer/sharer.php?u=https://solarinc.co.uk/blog/${post.slug}`}
                target="_blank"
                className="text-primary hover:underline"
              >
                Facebook
              </Link>
              <Link
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://solarinc.co.uk/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                className="text-primary hover:underline"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
