import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Why Us", href: "/why-us" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-pad py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/TD_logo.png"
                alt="Turkidd Devs"
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              We build websites, apps, and digital products that help businesses
              grow. Design, development, and consulting all in one place.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-gold-500 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">
              Let&apos;s Make Things Happen
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:turkiddyoung@gmail.com"
                  className="text-gray-500 hover:text-gold-500 transition-colors"
                >
                  turkiddyoung@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+254716040462"
                  className="text-gray-500 hover:text-gold-500 transition-colors"
                >
                  0716 040 462
                </a>
              </li>
              <li className="text-gray-500">Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Turkidd Devs. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with precision. Designed to grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
