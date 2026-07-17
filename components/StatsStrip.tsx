import Link from "next/link";

const stats = [
  { value: "3", label: "Core Services" },
  { value: "5", label: "Step Process" },
  { value: "100%", label: "Custom Built" },
  { value: "24/7", label: "Support" },
];

export default function StatsStrip() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="container-pad">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative">
              {i > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gray-200" />
              )}
              <p className="text-4xl md:text-5xl font-black gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
