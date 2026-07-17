import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Web & App Development",
    short: "Fast, reliable websites and mobile apps built for scale.",
    image:
      "/images/developer.jpg",
    features: [
      "Custom websites & web apps",
      "Mobile apps (iOS & Android)",
      "E-commerce platforms",
      "API development",
    ],
  },
  {
    title: "UI/UX Design",
    short: "Interfaces that look premium and feel effortless to use.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    features: [
      "User research & wireframing",
      "Interface design",
      "Design systems",
      "Prototyping",
    ],
  },
  {
    title: "Tech Consulting",
    short: "Smart technology decisions that save time and money.",
    image:
      "/images/tech-consulting.jpg",
    features: [
      "Stack selection",
      "Roadmap planning",
      "Code audits",
      "Team training",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container-pad">
        <div className="max-w-3xl mb-16">
          <p className="section-label">Our Main Areas Of Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            What We <span className="gradient-text">Build</span> For You
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We offer three core services that cover everything from design to
            development to strategy. Pick one, or let us handle the full
            package.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="card group overflow-hidden">
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">
                {service.short}
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/services"
                className="text-sm font-semibold text-gold-500 hover:text-gold-600 transition-colors inline-flex items-center gap-1 group-hover:gap-2"
              >
                View Details
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
