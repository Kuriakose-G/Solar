import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Make the Switch to Solar?
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Get a free, no-obligation quote today and find out how much you could save.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-lg font-medium text-green-600 shadow-lg shadow-white/30 transition-all hover:bg-gray-100 hover:shadow-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
        >
          Get Your Free Quote
        </Link>
      </div>
    </section>
  );
};

export default CTA;
