import Link from 'next/link';
import { TRUST_STATS } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[var(--color-accent)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Trusted by 5000+ Customers Across India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up delay-100">
              India&apos;s Premier
              <span className="block text-[var(--color-accent)]">Industrial Valve</span>
              Manufacturer
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl animate-fade-in-up delay-200">
              40+ years of excellence in manufacturing ball valves, butterfly valves, and industrial flow control solutions. ISO 9001:2015 certified with DNV fire safety certification.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up delay-300">
              <Link href="/products" className="btn-primary text-lg">
                Explore Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-secondary text-lg">
                Get a Quote
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 animate-fade-in-up delay-400">
              {TRUST_STATS.map((stat, index) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-white animate-count-up" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    {stat.number}
                    <span className="text-[var(--color-accent)]">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative hidden lg:block animate-slide-in-right delay-200">
            {/* Placeholder for hero image - will be replaced with actual product image */}
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20">
                <div className="aspect-square bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center">
                  {/* Valve Illustration Placeholder */}
                  <svg className="w-3/4 h-3/4 text-white/40" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="45" strokeWidth="3" stroke="currentColor" fill="none" />
                    <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.3" />
                    <rect x="45" y="5" width="10" height="20" rx="2" fill="currentColor" />
                    <rect x="45" y="75" width="10" height="20" rx="2" fill="currentColor" />
                    <circle cx="50" cy="50" r="10" fill="currentColor" />
                  </svg>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 -right-4 bg-[var(--color-accent)] text-white px-4 py-2 rounded-xl font-bold shadow-lg animate-pulse">
                  ISO 9001:2015
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-[var(--color-primary)] px-4 py-2 rounded-xl font-bold shadow-lg">
                  🔥 DNV Certified
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-white/10 rounded-3xl" />
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-sm">Scroll to explore</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

