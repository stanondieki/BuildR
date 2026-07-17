const businesses = [
  "Startups & SaaS companies",
  "E-commerce & retail brands",
  "Restaurants & hospitality",
  "Real estate & property firms",
  "Healthcare & wellness providers",
  "Education & training centers",
  "Logistics & distribution companies",
  "Professional services & agencies",
];

export default function BusinessesWeHelp() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
      <div className="container-pad">
        <div className="max-w-3xl mb-16">
          <p className="section-label">Who We Work With</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            The Types Of Businesses We Help
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We work with organizations that need a stronger digital presence and
            better tools for their customers. These include:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {businesses.map((biz) => (
            <div
              key={biz}
              className="flex items-center gap-3 p-5 bg-white border border-gray-200 rounded-xl transition-all duration-300 hover:border-gold-400/40"
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
              <span className="text-gray-600 text-sm">{biz}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-lg text-gray-500 mt-12 max-w-2xl mx-auto">
          If your business has a digital presence that needs work, this is the
          problem we exist to solve.
        </p>
      </div>
    </section>
  );
}
