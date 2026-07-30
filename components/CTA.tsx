import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background glow + dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[100px]" />

      <div className="container-pad relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative hidden lg:block animate-fade-up">
            <div className="relative aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-gray-200/60">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                alt="Professional consultant ready to discuss your project"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Book a free call
                  </p>
                  <p className="text-xs text-gray-500">
                    No pressure, just a conversation
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl lg:max-w-none">
            <p className="section-label">Let&apos;s Talk</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Let&apos;s Talk About Your <span className="gradient-text">Project</span>
            </h2>
            <p className="text-lg text-gray-500 mb-10 leading-relaxed">
              If your business needs a better digital presence a new website, a
              mobile app, or a complete product redesign this is where it
              starts. Book a consultation and let&apos;s discuss how we can build
              something that works for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/contact" className="btn-gold">
                Start a Project
              </Link>
              <a href="tel:+254716040462" className="btn-outline">
                Book a Call
              </a>
            </div>

            {/* Contact info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 min-w-0">
                <svg
                  className="w-5 h-5 text-gold-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:turkiddyoung@gmail.com"
                  className="text-gray-600 hover:text-gold-500 transition-colors text-sm truncate"
                >
                  turkiddyoung@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <svg
                  className="w-5 h-5 text-gold-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+254716040462"
                  className="text-gray-600 hover:text-gold-500 transition-colors text-sm"
                >
                  0716 040 462
                </a>
              </div>
              <div className="flex items-center gap-3 min-w-0">
                <svg
                  className="w-5 h-5 text-gold-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-600 text-sm">Remote · Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
