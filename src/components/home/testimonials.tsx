import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Saving 34% on energy costs in the first year. The investment has already paid for itself.",
      author: "Will S., Property Manager",
      location: "London, UK"
    },
    {
      quote: "The installation process was seamless and the team was incredibly professional. Highly recommended!",
      author: "Ayesha K., SME Owner",
      location: "Manchester, UK"
    },
    {
      quote: "System performance has exceeded our expectations, even during the cloudy winter months. Fantastic!",
      author: "Dominic F., Farm Owner",
      location: "Devon, UK"
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg soft-shadow">
              <p className="text-lg italic">"{testimonial.quote}"</p>
              <p className="text-right mt-4 font-semibold text-primary">- {testimonial.author}</p>
              <p className="text-right text-sm text-muted-foreground">{testimonial.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
