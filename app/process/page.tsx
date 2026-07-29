import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import HowWeWork from "@/components/HowWeWork";
import Approach from "@/components/Approach";

export const metadata: Metadata = {
  title: "Our Process — Turkidd Devs",
  description:
    "A clear, step-by-step process from idea to launch. No surprises, no guesswork — just a straightforward path to building your digital product.",
};

const principles = [
  {
    title: "Transparency First",
    description:
      "You always know what's happening, why it's happening, and what's coming next. No black boxes.",
  },
  {
    title: "Built Around Your Workflow",
    description:
      "We study how your business actually runs before writing a single line of code. The product fits your team, not the other way around.",
  },
  {
    title: "Iterate & Improve",
    description:
      "We don't just build and leave. As your business grows, the product grows with it based on real user feedback.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="How We Work"
          breadcrumb="Process"
          title="A Clear Process From Start To Finish"
          description="No surprises. No guesswork. Just a straightforward path from idea to launch — and beyond."
        />

        {/* Process image */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-pad">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60 max-w-5xl mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                alt="African team collaborating on a project plan"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Timeline */}
        <HowWeWork />

        {/* Principles */}
        <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
          <div className="container-pad">
            <div className="max-w-3xl mb-16">
              <p className="section-label">Our Principles</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                What Guides Every Project
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Three core principles shape how we work with every client, from
                first call to final launch.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {principles.map((principle, i) => (
                <div key={principle.title} className="card">
                  <span className="text-3xl font-black text-gold-400/40 block mb-4">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Approach />

        {/* CTA */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px]" />
          <div className="container-pad relative z-10 text-center max-w-3xl mx-auto">
            <p className="section-label text-center">Ready to Begin?</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Let&apos;s Start With Step One
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              The first step is simple: we sit down, learn about your business,
              and figure out what you need. No pressure, no obligation.
            </p>
            <Link href="/contact" className="btn-gold">
              Book a Consultation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
