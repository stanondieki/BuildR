import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import WhyChooseUs from "@/components/WhyChooseUs";
import Benefits from "@/components/Benefits";
import Comparison from "@/components/Comparison";
import BusinessesWeHelp from "@/components/BusinessesWeHelp";

export const metadata: Metadata = {
  title: "Why Us — Buildr",
  description:
    "Businesses choose Buildr because we focus on real business outcomes. We understand how digital products drive revenue, improve conversions, and scale with growth.",
};

const stats = [
  { value: "100%", label: "Custom-built", sub: "No templates, ever" },
  { value: "24/7", label: "Uptime monitoring", sub: "Issues caught early" },
  { value: "5+", label: "Years experience", sub: "Modern tech stacks" },
  { value: "∞", label: "Iterations", sub: "We grow with you" },
];

export default function WhyUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Why Buildr"
          breadcrumb="Why Us"
          title="Why Businesses Continue To Choose Buildr"
          description="Businesses work with us because we focus on real business outcomes, not just pretty code. We understand how digital products drive revenue and how technology choices impact long-term costs."
        />

        {/* Stats */}
        <section className="py-16 md:py-20 bg-white border-b border-gray-200">
          <div className="container-pad">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-black text-gold-400 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {stat.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image section */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-pad">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60">
                  <Image
                    src="/images/team2.jpg"
                    alt="Team working together on a digital product"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100 hidden xl:block">
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Outcome-focused
                      </p>
                      <p className="text-xs text-gray-500">
                        Not just pretty code
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="section-label">Our Promise</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  We build products that solve real business problems.
                </h2>
                <p className="text-lg text-gray-500 mb-6 leading-relaxed">
                  Every project starts with understanding your business. We
                  don't just build what looks good — we build what works. That
                  means studying your workflows, understanding your customers,
                  and creating a product that fits naturally into how you
                  operate.
                </p>
                <ul className="space-y-3">
                  {[
                    "How digital products drive revenue",
                    "How user experience affects conversions",
                    "How technology choices impact long-term costs",
                    "How products can scale as companies grow",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="w-5 h-5 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 text-gold-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Comparison />
        <Benefits />
        <BusinessesWeHelp />
        <WhyChooseUs />

        {/* CTA */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px]" />
          <div className="container-pad relative z-10 text-center max-w-3xl mx-auto">
            <p className="section-label text-center">Let&apos;s Talk</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Ready To Work With A Team That Gets It?
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Book a free consultation. We&apos;ll learn about your business and
              show you exactly how we can help.
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
