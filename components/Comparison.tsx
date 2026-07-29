const beforeItems = [
  "Slow, outdated websites",
  "Apps that crash and frustrate users",
  "Designs that look like they're from 2010",
  "No mobile experience",
  "Confusing user flows",
  "Paying for tools that don't integrate",
];

const afterItems = [
  "Fast, modern websites that convert",
  "Stable apps users actually enjoy",
  "Clean, professional design",
  "Fully responsive on every device",
  "Simple, intuitive user journeys",
  "Everything connected and working together",
];

export default function Comparison() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
      <div className="container-pad">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="section-label">The Difference</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            What Changes When You Work With Turkidd Devs
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Before */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-400">
                Without Turkidd Devs
              </h2>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-400"
                >
                  <span className="text-gray-300 mt-0.5">•</span>
                  <span className="line-through decoration-gray-300">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-gold-400/30 bg-white p-8 md:p-10 shadow-lg shadow-gold-400/5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center">
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
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                With Turkidd Devs
              </h2>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <svg
                    className="w-5 h-5 shrink-0 mt-0.5 text-gold-500"
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
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-lg text-gray-500 mt-16 max-w-2xl mx-auto">
          A professional, reliable digital presence that works for your
          business every day.
        </p>
      </div>
    </section>
  );
}
