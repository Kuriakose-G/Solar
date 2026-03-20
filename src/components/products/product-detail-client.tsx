"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/app/data/products";
import { products } from "@/app/data/products";

interface ProductDetailClientProps {
  product: Product;
}

const ProductImageGallery = ({ images, name }: { images: string[]; name: string }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div>
      <div className="mb-4">
        <Image src={selectedImage} alt={name} width={740} height={420} className="rounded-2xl object-cover" />
      </div>
      <div className="flex gap-4">
        {images.map((img, index) => (
          <div key={index} onClick={() => setSelectedImage(img)} className="cursor-pointer">
            <Image
              src={img}
              alt={`${name} thumbnail ${index}`}
              width={100}
              height={100}
              className="rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProductTabs = ({ product }: { product: Product }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div>
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-4 py-2 ${activeTab === "description" ? "border-b-2 border-primary" : ""}`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("specs")}
          className={`px-4 py-2 ${activeTab === "specs" ? "border-b-2 border-primary" : ""}`}
        >
          Specifications
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`px-4 py-2 ${activeTab === "reviews" ? "border-b-2 border-primary" : ""}`}
        >
          Reviews
        </button>
      </div>
      <div className="py-4">
        {activeTab === "description" && <p>{product.description}</p>}
        {activeTab === "specs" && (
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        )}
        {activeTab === "reviews" && <div>No reviews yet.</div>}
      </div>
    </div>
  );
};

const RelatedProducts = ({ currentProduct }: { currentProduct: Product }) => {
  const related = products.filter((p) => p.category === currentProduct.category && p.slug !== currentProduct.slug).slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-4">Related Products</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((product) => (
          <article
            key={product.slug}
            className="rounded-2xl border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-44 w-full overflow-hidden rounded-t-lg">
              <Image alt={product.name} src={product.image} width={480} height={240} className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <h2 className="mt-2 text-xl font-semibold">{product.name}</h2>
              <p className="mt-3 text-lg font-bold">£{product.priceGBP.toFixed(0)}</p>
              <Link
                href={`/products/${product.slug}`}
                className="mt-5 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                View details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      url: `https://www.solar-example.co.uk/products/${product.slug}`,
      priceCurrency: "GBP",
      price: product.priceGBP.toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <ProductImageGallery images={product.images} name={product.name} />
            <div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{product.category}</p>
              <h1 className="mt-2 text-3xl font-bold">{product.name}</h1>
              <p className="mt-6 text-2xl font-bold">£{product.priceGBP.toFixed(0)} GBP</p>
              <div className="mt-6">
                <ProductTabs product={product} />
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="w-full inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
          <RelatedProducts currentProduct={product} />
        </div>
      </section>
    </>
  );
}
