import Link from "next/link";

type PageHeaderProps = {
  label: string;
  title: string;
  description?: string;
  breadcrumb: string;
};

export default function PageHeader({
  label,
  title,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gray-50 border-b border-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-30" />
      <div className="container-pad relative z-10">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-gold-500 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-600">{breadcrumb}</span>
        </nav>
        <p className="section-label">{label}</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
