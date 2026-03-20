import React from 'react';
import Link from 'next/link';
import { products } from '@/app/data/products';
import Image from 'next/image';

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featured.map((product) => (
            <div key={product.id} className="bg-gray-900 border border-green-500/30 rounded-xl overflow-hidden group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="relative w-full h-56">
                <Image src={product.images[0]} alt={product.name} layout="fill" objectFit="cover" className="transition-transform duration-300 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
                <p className="text-green-400 text-xl font-semibold mb-4">£{product.priceGBP.toFixed(2)}</p>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-green-400"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
