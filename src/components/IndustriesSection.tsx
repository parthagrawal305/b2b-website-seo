import Link from 'next/link';
import { INDUSTRIES } from '@/lib/constants';

export default function IndustriesSection() {
  return (
    <section className="section-padding bg-[var(--color-background-alt)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mt-3 mb-6">
            Solutions for Every Industry
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            From oil refineries to pharmaceutical plants, our valves power critical operations across India&apos;s most demanding industries.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <Link
              key={industry.name}
              href={`/industries/${industry.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-[var(--color-accent)] group-hover:scale-110 transition-all">
                {industry.icon}
              </div>
              <h3 className="font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                {industry.name}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)]">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/industries" className="btn-outline">
            View All Industries
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

