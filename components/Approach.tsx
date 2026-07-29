import Image from "next/image";
import Link from "next/link";

const painPoints = [
  "The system can't do that.",
  "We track that outside the system.",
  "Let's just use a template for this part.",
];

const approachItems = [
  "User behavior",
  "Data flow",
  "Team workflows",
  "Approval processes",
  "Common mistakes",
  "Money and time drains",
];

export default function Approach() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 border-y border-gray-200">
      <div className="container-pad">
        <div className="max-w-3xl mb-16">
          <p className="section-label">Our Approach</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Built Around How Your Business Actually Works
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            We don't force you into generic software. We study your workflow and
            build the product around it.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Pain point card */}
          <div className="card bg-white">
            <div className="flex items-center gap-3 mb-6">
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
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                The problem with off-the-shelf software
              </h3>
            </div>
            <div className="space-y-3 mb-6">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 text-gray-500 italic"
                >
                  <span className="text-gold-400/50">—</span>
                  {point}
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Before long, the software becomes another problem instead of a
              solution.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="African team mapping out a custom workflow"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-5 border border-gray-100 hidden xl:block">
              <p className="text-sm font-semibold text-gray-900">
                Custom workflows
              </p>
              <p className="text-xs text-gray-500">No forced templates</p>
            </div>
          </div>
        </div>

        {/* Our different approach */}
        <div className="max-w-3xl mt-20">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            We take a different approach.
          </h3>
          <p className="text-gray-500 mb-6 leading-relaxed">
            Before we build anything, we study how your business actually runs.
            We look at:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {approachItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl text-sm text-gray-600"
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
              </div>
            ))}
          </div>
          <p className="text-lg text-gold-500 font-semibold mb-6">
            A product that supports how your business runs — and makes it easier
            to grow.
          </p>
          <Link href="/process" className="btn-outline">
            See How We Work
          </Link>
        </div>
      </div>
    </section>
  );
}
