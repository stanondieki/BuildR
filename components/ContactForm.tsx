"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-gold-400/20 flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-7 h-7 text-gold-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Thank you for reaching out!
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          We&apos;ve received your message and will get back to you within 24
          hours. In the meantime, feel free to explore our services.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-900 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Your Company Ltd."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          What do you need help with?
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue=""
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all"
        >
          <option value="" disabled>
            Select a service...
          </option>
          <option value="web-app">Web & App Development</option>
          <option value="ui-ux">UI/UX Design</option>
          <option value="consulting">Tech Consulting</option>
          <option value="full-package">Full Package (All of the above)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-900 mb-2"
        >
          Tell us about your project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="What are you trying to build? What problems are you facing? The more detail, the better."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-all resize-none"
        />
      </div>

      <button type="submit" className="btn-gold w-full sm:w-auto">
        Send Message
      </button>
    </form>
  );
}
