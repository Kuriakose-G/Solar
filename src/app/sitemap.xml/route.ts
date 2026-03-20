import { NextResponse } from "next/server";
import { products } from "@/app/data/products";

const blogPosts = [
    { slug: "uk-solar-incentives-2026" },
    { slug: "battery-storage-best-practices" },
    { slug: "beginners-guide-to-solar" },
];

export async function GET() {
  const baseUrl = "https://www.solar-example.co.uk";
  const staticRoutes = [
    "",
    "products",
    "about",
    "contact",
    "blog",
    "calculator",
    "testimonials",
  ];

  const productRoutes = products.map(product => `products/${product.slug}`);
  const blogRoutes = blogPosts.map(post => `blog/${post.slug}`);

  const allRoutes = [...staticRoutes, ...productRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes
    .map(
      (route) =>
        `<url><loc>${baseUrl}/${route}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
    )
    .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
