"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <section id="contact" className="relative mb-20 min-h-screen py-20">
      <div className="mb-20 lg:mx-auto mx-6 ">
        <h2 className="relative text-brand text-6xl text-center font-medium mb-2 lg:tracking-widest">
          Contact
        </h2>
        <p className="text-white/50 lg:text-lg text-center">
          Have any questions about my work?
          <br />
          Reach out any time - I&apos;m always happy to chat :)
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-[#2f2f2f]/30 p-4 rounded max-w-xl lg:mx-auto mx-6"
      >
        <Field label="Full Name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full rounded bg-[#424242]/30 px-4 py-3 text-white placeholder:text-white/30 outline-none"
            placeholder="John Smith"
          />
        </Field>
        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded bg-[#424242]/30 px-4 py-3 text-white placeholder:text-white/30 outline-none"
            placeholder="john@email.com"
          />
        </Field>

        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded bg-[#424242]/30 px-4 py-3 text-white placeholder:text-white/30 outline-none"
            placeholder="(555) 555-0123 (optional)"
          />
        </Field>

        <Field label="Message" htmlFor="message">
          <textarea
            id="message"
            name="message"
            required
            className="w-full rounded bg-[#424242]/30 px-4 py-3 text-white placeholder:text-white/30 outline-none"
            placeholder="What would you like to know?"
          />
        </Field>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded bg-brand px-4 py-3 font-bold text-lg text-black transition hover:opacity-90 cursor-pointer disabled:opacity-60"
        >
          {loading ? "Sending..." : "Submit"}
        </button>

        {/* Success message */}
        {success && (
          <p className="mt-4 text-green-400 text-center">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}

function Field({ label, htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="block mb-4">
      <span className="mb-2 block lg:text-lg text-md font-medium text-left text-white">
        {label}
      </span>
      {children}
    </label>
  );
}
