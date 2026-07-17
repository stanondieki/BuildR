import Image from "next/image";
import Link from "next/link";

const problems = [
  "Website turning visitors away",
  "App crashing and frustrating users",
  "Design looking outdated vs. competitors",
  "Users dropping off at checkout",
];

const solutionPoints = [
  "Fast, modern websites that convert",
  "Stable apps users love to use",
  "Clean design that builds trust",
  "Smooth flows that keep users moving",
];

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-pad">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
                alt="Business analytics dashboard showing growth challenges"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100 hidden xl:block">
              <p className="text-sm font-semibold text-gray-900">
                Sound familiar?
              </p>
              <p className="text-xs text-gray-500">You&apos;re not alone.</p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="section-label">The Problem</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Your digital presence is holding your business back.
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              As you grow, a slow website and clunky app stop being small
              annoyances. They become real costs.
            </p>
            <ul className="space-y-3 mb-10">
              {problems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-600"
                >
                  <span className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="section-label">The Solution</p>
            <ul className="space-y-3 mb-8">
              {solutionPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-gray-600"
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
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/services" className="btn-gold">
              See How We Fix It
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
