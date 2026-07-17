import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Understand",
    short: "We study your business, users, and workflows.",
  },
  {
    number: "02",
    title: "Design",
    short: "We create wireframes, prototypes, and a design system.",
  },
  {
    number: "03",
    title: "Build",
    short: "We develop the product with modern, scalable tech.",
  },
  {
    number: "04",
    title: "Launch",
    short: "We deploy, train your team, and make it live.",
  },
  {
    number: "05",
    title: "Improve",
    short: "We iterate based on feedback and real usage.",
  },
];

const stepIcons = [
  <path key="1" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
  <path key="2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />,
  <path key="3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />,
  <path key="4" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />,
  <path key="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />,
];

export default function HowWeWork() {
  return (
    <section id="process" className="py-24 md:py-32 bg-white">
      <div className="container-pad">
        <div className="max-w-3xl mb-16">
          <p className="section-label">How We Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            From Idea To Launch In <span className="gradient-text">5 Steps</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            A simple, proven process. No surprises, no guesswork.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {steps.map((step, i) => (
            <div key={step.number} className="card text-center group">
              <div className="w-12 h-12 rounded-xl bg-gold-400/10 flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-6 h-6 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {stepIcons[i]}
                </svg>
              </div>
              <span className="text-2xl font-black text-gold-400/40 block mb-2">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {step.short}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/process" className="btn-outline">
            See The Full Process
          </Link>
        </div>
      </div>
    </section>
  );
}
