import Image from "next/image";
import Link from "next/link";

const reasons = [
  "How digital products drive revenue",
  "How user experience affects conversions",
  "How technology choices impact long-term costs",
  "How products can scale as companies grow",
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
      <div className="container-pad">
        {/* Why businesses choose us */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          <div className="max-w-3xl">
            <p className="section-label">Why Turkidd Devs</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Why Businesses Continue To Choose Turkidd Devs.
            </h2>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Businesses work with us because we focus on real business outcomes,
              not just pretty code. We understand:
            </p>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <div
                  key={reason}
                  className="flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-xl"
                >
                  <span className="text-gold-400 font-bold text-lg shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-600">{reason}</span>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-500 mt-8 leading-relaxed">
              Our goal is simple:{" "}
              <span className="text-gold-500 font-semibold">
                Make it easier for you to grow your business online.
              </span>
            </p>
          </div>

          <div className="relative hidden lg:block pt-12">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60">
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Business professional thinking about digital strategy"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -top-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 hidden xl:block">
              <p className="text-sm font-semibold text-gray-900">
                Trusted by growing businesses
              </p>
              <p className="text-xs text-gray-500">
                Design, development & strategy
              </p>
            </div>
          </div>
        </div>

        {/* The Transformation */}
        <div className="max-w-3xl">
          <p className="section-label">The Transformation</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            What Changes When You Have The Right Digital Product
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed mb-8">
            Instead of losing customers to slow websites and clunky apps, you
            can immediately see your visitors engaging, converting, and coming
            back so you always know how your business is performing online.
          </p>
          <Link href="/contact" className="btn-gold">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
