"use client";

import ContactForm from "@/components/contact/contact-form";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
            We'd love to hear from you. Fill out the form below and our UK team will respond within one business day.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold">Contact Form</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold">Contact Details</h2>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p><strong>Address:</strong> 123 Solar Street, London, UK</p>
              <p><strong>Email:</strong> contact@solarinc.co.uk</p>
              <p><strong>Phone:</strong> 0800 123 4567</p>
            </div>
            <div className="mt-8 h-64 bg-muted rounded-lg">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center">Map will be here</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
