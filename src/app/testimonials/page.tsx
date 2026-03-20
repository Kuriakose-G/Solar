"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsPage() {
  const testimonials = [
    {
      quote: "Saving 34% on energy costs in the first year. The investment has already paid for itself.",
      author: "Will S., Property Manager",
      location: "London, UK",
      image: "/team-1.jpg"
    },
    {
      quote: "The installation process was seamless and the team was incredibly professional. Highly recommended!",
      author: "Ayesha K., SME Owner",
      location: "Manchester, UK",
      image: "/team-2.jpg"
    },
    {
      quote: "System performance has exceeded our expectations, even during the cloudy winter months. Fantastic!",
      author: "Dominic F., Farm Owner",
      location: "Devon, UK",
      image: "/team-3.jpg"
    },
    {
      quote: "A truly first-class service from start to finish. The team were knowledgeable, friendly and efficient.",
      author: "Sarah J., Homeowner",
      location: "Birmingham, UK",
      image: "/team-1.jpg"
    },
    {
      quote: "I was hesitant at first, but the team at Solar Inc made the whole process so easy. I'm so glad I made the switch.",
      author: "David B., Homeowner",
      location: "Glasgow, UK",
      image: "/team-2.jpg"
    },
    {
        quote: "The best investment I've made in years. My energy bills have been slashed and I'm doing my bit for the planet.",
        author: "Emily R., Homeowner",
        location: "Cardiff, UK",
        image: "/team-3.jpg"
    }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">What Our Customers Say</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            We are proud to have helped thousands of customers across the UK make the switch to clean, renewable energy.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-muted p-6 rounded-lg soft-shadow"
            >
              <div className="flex items-center mb-4">
                <Image src={testimonial.image} alt={testimonial.author} width={60} height={60} className="rounded-full" />
                <div className="ml-4">
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-lg italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
