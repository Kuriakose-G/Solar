import React from 'react';
import Link from 'next/link';

const EducationalSection = () => {
  const articles = [
    {
      title: "The Beginner's Guide to Solar Panels",
      excerpt: "Everything you need to know to get started with solar energy.",
      slug: "beginners-guide-to-solar"
    },
    {
      title: "How to Choose the Right Solar Inverter",
      excerpt: "A deep dive into the different types of inverters and how to choose the best one for you.",
      slug: "choosing-a-solar-inverter"
    },
    {
      title: "Understanding Solar Panel Efficiency",
      excerpt: "Learn what efficiency ratings mean and how they impact your energy production.",
      slug: "solar-panel-efficiency"
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Learn About Solar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-background p-6 rounded-lg soft-shadow">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Link href={`/blog/${article.slug}`} className="text-primary hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalSection;
