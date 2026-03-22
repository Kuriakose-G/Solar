import React from 'react';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Saving 34% on energy costs in the first year. The investment has already paid for itself. Couldn't be happier with the team!",
      author: "Will S., Property Manager",
      location: "London, UK",
      rating: 5
    },
    {
      quote: "The installation process was seamless and the team was incredibly professional. Highly recommended!",
      author: "Ayesha K., SME Owner",
      location: "Manchester, UK",
      rating: 5
    },
    {
      quote: "System performance has exceeded our expectations, even during the cloudy winter months. Fantastic!",
      author: "Dominic F., Farm Owner",
      location: "Devon, UK",
      rating: 5
    },
    {
      quote: "Great team, great service. The consultation was thorough and they explained everything clearly.",
      author: "Sarah L., Homeowner",
      location: "Bristol, UK",
      rating: 5
    },
    {
      quote: "Our energy independence journey started here. Best decision we made for our business.",
      author: "James K., Business Owner",
      location: "Edinburgh, Scotland",
      rating: 5
    },
    {
      quote: "Professional, reliable, and genuinely care about solving your energy needs. Highly trusted.",
      author: "Emma R., Teacher",
      location: "Oxford, UK",
      rating: 5
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg shadow-md border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-green-400 text-sm" />
                ))}
              </div>
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <p className="text-right mt-4 font-semibold text-green-400">- {testimonial.author}</p>
              <p className="text-right text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
