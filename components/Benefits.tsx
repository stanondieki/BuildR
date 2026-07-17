const benefits = [
  {
    title: "More conversions",
    short: "Your site works 24/7 turning visitors into leads.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 0c-2.21 0-4 1.79-4 4v1h8v-1c0-2.21-1.79-4-4-4zm-7 9h14M5 21h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z",
  },
  {
    title: "Happier users",
    short: "People stay longer, explore more, and come back.",
    icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Saved time",
    short: "Automation replaces manual work and guesswork.",
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Premium brand",
    short: "Professional design builds instant trust.",
    icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z",
  },
  {
    title: "Fewer surprises",
    short: "Catch issues before users ever notice them.",
    icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "Competitive edge",
    short: "Modern tech keeps you ahead, not catching up.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-pad">
        <div className="max-w-3xl mb-16">
          <p className="section-label">What This Means For You</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            The Results You Can Expect
          </h2>
          <p className="text-lg text-gray-500">
            Better design and solid technology lead to real business outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="card">
              <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center mb-5">
                <svg
                  className="w-5 h-5 text-gold-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d={benefit.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {benefit.short}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
