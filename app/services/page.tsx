import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Approach from "@/components/Approach";
import BusinessesWeHelp from "@/components/BusinessesWeHelp";

export const metadata: Metadata = {
  title: "Services — Buildr",
  description:
    "Web & app development, UI/UX design, and tech consulting. We build fast, reliable digital products that help businesses grow.",
};

const services = [
  {
    title: "Web & App Development",
    description:
      "We build fast, reliable websites and mobile apps using modern technologies. From landing pages to full SaaS platforms — everything your business needs to operate online.",
    features: [
      "Custom websites & web apps",
      "Mobile apps (iOS & Android)",
      "E-commerce platforms",
      "API development & integrations",
      "Performance optimization",
      "Ongoing maintenance & support",
    ],
    image:
      "/images/developer.jpg",
    alt: "Developer working on code",
  },
  {
    title: "UI/UX Design",
    description:
      "We design interfaces that users love. Clean layouts, intuitive flows, and pixel-perfect visuals that make your product look premium and trustworthy.",
    features: [
      "User research & wireframing",
      "Interface & interaction design",
      "Design systems & prototypes",
      "Usability testing",
      "Brand identity & visual direction",
      "Responsive design for all devices",
    ],
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    alt: "Designer working on UI design",
  },
  {
    title: "Tech Consulting",
    description:
      "We help you make the right technology decisions. From choosing the right stack to planning your product roadmap — we guide you through the technical landscape.",
    features: [
      "Technology stack selection",
      "Product roadmap planning",
      "Code audits & optimization",
      "Team training & support",
      "Cloud infrastructure strategy",
      "Security & compliance review",
    ],
    image:
      "/images/tech-consulting.jpg",
    alt: "Team in a consulting meeting",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          label="Our Services"
          breadcrumb="Services"
          title="What We Build For You"
          description="We offer three core services that cover everything from design to development to strategy. Pick one, or let us handle the full package."
        />

        {/* Service detail sections */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container-pad space-y-24 md:space-y-32">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`relative ${
                    i % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>

                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="section-label">
                    {String(i + 1).padStart(2, "0")} — Service
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-600"
                      >
                        <span className="w-5 h-5 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="btn-gold">
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Approach />
        <BusinessesWeHelp />

        {/* CTA */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px]" />
          <div className="container-pad relative z-10 text-center max-w-3xl mx-auto">
            <p className="section-label text-center">Ready to Start?</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Let&apos;s Build Something That Works
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              Whether you need a single service or the full package, we&apos;re
              ready to help. Book a consultation and let&apos;s discuss your
              project.
            </p>
            <Link href="/contact" className="btn-gold">
              Start a Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
