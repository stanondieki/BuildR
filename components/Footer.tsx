import Link from "next/link";

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
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-gold-400">B</span>
              <span className="text-xl font-bold text-gray-900">uildr</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              We build websites, apps, and digital products that help businesses
              grow. Design, development, and consulting — all in one place.
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
                  href="mailto:hello@buildr.dev"
                  className="text-gray-500 hover:text-gold-500 transition-colors"
                >
                  hello@buildr.dev
                </a>
              </li>
              <li>
                <a
                  href="tel:+0000000000"
                  className="text-gray-500 hover:text-gold-500 transition-colors"
                >
                  +00 000 000 000
                </a>
              </li>
              <li className="text-gray-500">Remote · Worldwide</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Buildr. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with precision. Designed to grow.
          </p>
        </div>
      </div>
    </footer>
  );
}
