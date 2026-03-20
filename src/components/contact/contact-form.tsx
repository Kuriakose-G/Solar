"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [status, setStatus] = useState<string>("");
  const [error, setError] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Please fill in all required fields.");
      setStatus("");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const result = await response.json();
        setError(result?.error || "Failed to send message.");
        setStatus("");
        return;
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch {
      setError("Network error, please try again.");
      setStatus("");
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit} aria-live="polite">
      {error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-md border border-red-400 bg-red-100 p-3 text-sm text-red-700">
          {error}
        </motion.div>
      )}
      {status === "success" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="rounded-md border border-emerald-400 bg-emerald-100 p-3 text-sm text-emerald-700">
          Thanks! We received your request.
        </motion.div>
      )}

      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input id="name" required name="name" type="text" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary" />
      </div>

      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input id="email" required name="email" type="email" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary" />
      </div>

      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
        <input id="phone" name="phone" type="tel" className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary" />
      </div>

      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea id="message" required name="message" rows={4} className="mt-1 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"></textarea>
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
