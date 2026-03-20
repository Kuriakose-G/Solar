import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-warm-gradient">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Make the Switch to Solar?
        </h2>
        <p className="text-xl text-gray-200 mb-8">
          Get a free, no-obligation quote today and find out how much you could save.
        </p>
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-lg font-medium text-primary shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Get Your Free Quote
        </Link>
      </div>
    </section>
  );
};

export default CTA;
