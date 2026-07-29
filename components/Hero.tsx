"use client";

import Image from "next/image";
import Link from "next/link";
import TypeWriter from "@/components/TypeWriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background gradient + dot grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white" />
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[120px]" />

      <div className="container-pad relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-3xl">
            <p className="section-label animate-fade-in">
              Web &amp; App Development Studio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 animate-fade-up">
              We Help Businesses{" "}
              <span className="gradient-text">
                <TypeWriter
                  words={["Build Websites", "Launch Apps", "Grow Online", "Scale Fast"]}
                  typingSpeed={80}
                  deletingSpeed={50}
                  pauseDuration={1800}
                />
              </span>
            </h1>
            <p
              className="text-lg md:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              Many businesses struggle with outdated websites, clunky apps, and
              poor user experiences. We design and build fast, clean, reliable
              digital products — so you stop losing customers and start growing
              online.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link href="/contact" className="btn-gold">
                Book a Consultation
              </Link>
              <Link href="/services" className="btn-outline">
                See What We Do
              </Link>
            </div>
          </div>

          <div
            className="relative hidden lg:block animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="African tech team collaborating on a project"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100 hidden xl:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-gold-500"
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
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Projects delivered
                  </p>
                  <p className="text-xs text-gray-500">
                    Fast, reliable & ready to grow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-gold-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
