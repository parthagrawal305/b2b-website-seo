import Link from 'next/link';
import Image from 'next/image';
import { TRUST_STATS } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Trusted by 5000+ Customers Across India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              India&apos;s Premier
              <span className="block text-[var(--color-accent)]">Industrial Valve</span>
              Manufacturer
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl">
              40+ years of excellence in manufacturing ball valves, butterfly valves, and industrial flow control solutions. ISO 9001:2015 certified with DNV fire safety certification.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Link href="/products" className="btn-primary text-lg">
                Explore Products
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/enquiry" className="btn-secondary text-lg">
                Get a Quote
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-3xl sm:text-4xl font-bold text-white">
                    {stat.number}
                    <span className="text-[var(--color-accent)]">{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image - Real Product Image */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Main Product Image */}
              <div className="relative bg-white/10 backdrop-blur rounded-3xl p-4 border border-white/20">
                <Image
                  src="/images/products/c574b8_c777a03250d84b01905cb8d0f4aa603f~mv2.png"
                  alt="Three Piece Design Long Stem Flanged End Ball Valve - Premium Industrial Ball Valve by Unison Valves"
                  width={500}
                  height={500}
                  className="rounded-2xl object-contain w-full h-auto"
                  priority
                />
              </div>

              {/* Floating Badges */}
              <div className="absolute -top-4 -right-4 bg-[var(--color-accent)] text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                ISO 9001:2015
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-[var(--color-primary)] px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                DNV Certified
              </div>
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
