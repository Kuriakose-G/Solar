"use client";

import { useState } from "react";
import { products, Product } from "@/app/data/products";
import Link from "next/link";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => (
  <article className="rounded-2xl border bg-card text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
    <div className="h-44 w-full overflow-hidden rounded-t-lg">
      <Image
        alt={product.name}
        src={product.image}
        width={480}
        height={240}
        className="h-full w-full object-cover"
      />
    </div>
    <div className="p-6">
      <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">{product.category}</p>
      <h2 className="mt-2 text-xl font-semibold">{product.name}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{product.shortDescription}</p>
      <p className="mt-3 text-lg font-bold">£{product.priceGBP.toFixed(0)}</p>
      <Link
        href={`/products/${product.slug}`}
        className="mt-5 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
      >
        View details
      </Link>
    </div>
  </article>
);


export default function ProductsPage() {
  const [filters, setFilters] = useState({
    category: "all",
    price: 5000,
    efficiency: 25,
    brand: "all",
  });
  const [sort, setSort] = useState("popularity");

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    // keep numbers as numbers for price/efficiency
    const parsedValue = name === "price" || name === "efficiency" ? Number(value) : value;
    setFilters((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  // This is a placeholder for a more complex filtering and sorting logic
  // In a real application, this would be handled by a backend or a more sophisticated client-side search library
  const sortedAndFilteredProducts = products
    .filter((p) => {
      return (
        (filters.category === "all" || p.category.toLowerCase() === filters.category) &&
        p.priceGBP <= filters.price &&
        p.efficiency >= filters.efficiency / 100 &&
        (filters.brand === "all" || p.brand.toLowerCase() === filters.brand)
      );
    })
    .sort((a, b) => {
      if (sort === "price-asc") return a.priceGBP - b.priceGBP;
      if (sort === "price-desc") return b.priceGBP - a.priceGBP;
      if (sort === "efficiency") return b.efficiency - a.efficiency;
      return 0; // popularity is default
    });
    
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-2xl font-bold mb-4">Filters</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-muted-foreground">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={filters.category}
                    onChange={handleFilterChange}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All</option>
                    <option value="solar panels">Solar Panels</option>
                    <option value="inverters">Inverters</option>
                    <option value="batteries">Batteries</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-muted-foreground">Price Range</label>
                  <input
                    type="range"
                    id="price"
                    name="price"
                    min="0"
                    max="5000"
                    value={filters.price}
                    onChange={handleFilterChange}
                    className="w-full h-2 bg-muted rounded-lg appearance-none"
                  />
                  <div className="text-sm text-muted-foreground">Up to £{filters.price}</div>
                </div>
                <div>
                  <label htmlFor="efficiency" className="block text-sm font-medium text-muted-foreground">Efficiency</label>
                  <input
                    type="range"
                    id="efficiency"
                    name="efficiency"
                    min="0"
                    max="25"
                    value={filters.efficiency}
                    onChange={handleFilterChange}
                    className="w-full h-2 bg-muted rounded-lg appearance-none"
                  />
                  <div className="text-sm text-muted-foreground">Up to {filters.efficiency}%</div>
                </div>
                <div>
                  <label htmlFor="brand" className="block text-sm font-medium text-muted-foreground">Brand</label>
                  <select
                    id="brand"
                    name="brand"
                    value={filters.brand}
                    onChange={handleFilterChange}
                    className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="all">All</option>
                    <option value="brand-a">Brand A</option>
                    <option value="brand-b">Brand B</option>
                    <option value="brand-c">Brand C</option>
                  </select>
                </div>
              </div>
              <h2 className="text-2xl font-bold mt-8 mb-4">Sort by</h2>
              <select
                onChange={handleSortChange}
                value={sort}
                className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="popularity">Popularity</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="efficiency">Efficiency</option>
              </select>
            </div>
          </aside>
          <main className="md:col-span-3">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedAndFilteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
