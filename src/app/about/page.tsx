"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const team = [
    { name: "John Doe", role: "CEO & Founder", image: "/team-1.jpg" },
    { name: "Jane Smith", role: "Chief Engineer", image: "/team-2.jpg" },
    { name: "Peter Jones", role: "Head of Sales", image: "/team-3.jpg" },
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
          <h1 className="text-4xl font-bold">About Solar Inc</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            We are a passionate team of renewable energy experts dedicated to making solar power accessible and affordable for everyone in the UK.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <div>
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded in 2010, Solar Inc started with a mission to combat climate change and reduce reliance on fossil fuels. From a small team of three, we have grown into a leading provider of solar solutions, having helped thousands of homes and businesses make the switch to clean energy.
            </p>
          </div>
          <div>
            <Image src="/about-us.jpg" alt="Our team" width={600} height={400} className="rounded-lg" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            Our mission is to accelerate the UK's transition to a sustainable future. We envision a world where clean energy is the primary source of power for every home and business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto" />
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
