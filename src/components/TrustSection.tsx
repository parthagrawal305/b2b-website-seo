import { CERTIFICATIONS, TRUST_STATS } from '@/lib/constants';

export default function TrustSection() {
  return (
    <section className="section-padding gradient-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10v20h10V20z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Trust Content */}
          <div>
            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6">
              40+ Years of Manufacturing Excellence
            </h2>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Since 1984, Unison Valves has been delivering superior flow control solutions. Our commitment to quality, innovation, and customer satisfaction has made us one of India&apos;s most trusted valve manufacturers.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Consistent Quality</h3>
                  <p className="text-white/70">ISO 9001:2015 certified processes ensuring every valve meets the highest standards.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Fire Safety Certified</h3>
                  <p className="text-white/70">DNV certified fire-safe valves for critical applications in hazardous environments.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Fast Delivery</h3>
                  <p className="text-white/70">Extensive inventory and efficient production for quick turnaround times.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats & Certifications */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {TRUST_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur rounded-2xl p-6 text-center trust-badge"
                >
                  <div className="text-4xl sm:text-5xl font-bold mb-2">
                    {stat.number}
                    <span className="text-[var(--color-accent)]">{stat.suffix}</span>
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
              <h3 className="font-bold text-lg mb-4 text-center">Our Certifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-3 bg-white/5 rounded-xl p-4"
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{cert.name}</div>
                      <div className="text-white/60 text-xs">{cert.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

