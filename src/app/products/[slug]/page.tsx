import { notFound } from "next/navigation";
import { getProductBySlug, products, Product } from "@/app/data/products";
import ProductDetailClient from "@/components/products/product-detail-client";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product: Product | undefined = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
