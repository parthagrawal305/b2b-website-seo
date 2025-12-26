import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Butterfly Valves - Wafer, Centric, Lever & Gear Operated | India",
  description: "High-quality butterfly valves from Unison Valves. Wafer centric design, PN10/PN16 pressure ratings. Lever and gear operated options. Ideal for HVAC, water treatment, and process industries.",
  keywords: ["butterfly valve manufacturers India", "wafer butterfly valve", "centric butterfly valve", "gear operated butterfly valve", "HVAC butterfly valve"],
};

export default function ButterflyValvesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <nav className="text-white/60 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Butterfly Valves</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Butterfly Valves
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Efficient flow control for large volume applications. Our butterfly valves offer 
              excellent throttling capabilities with minimal pressure drop, making them ideal for 
              HVAC, water treatment, and industrial process applications.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lever Operated */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-300" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                  <ellipse cx="50" cy="50" rx="5" ry="40" fill="currentColor" opacity="0.3" transform="rotate(45 50 50)" />
                </svg>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  Wafer Centric Butterfly Valve - Lever Operated
                </h2>
                <div className="space-y-3 text-[var(--color-text-muted)] mb-6">
                  <div className="flex justify-between">
                    <span>Pressure Rating:</span>
                    <span className="font-semibold text-[var(--color-primary)]">PN10 / PN16</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Design:</span>
                    <span className="font-semibold text-[var(--color-primary)]">Bonded Seat, Wafer Centric</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operation:</span>
                    <span className="font-semibold text-[var(--color-primary)]">Manual Lever</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Body Materials:</span>
                    <span className="font-semibold text-[var(--color-primary)]">CI, SGI, WCB</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-outline w-full justify-center">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Gear Operated */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-300" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
                  <ellipse cx="50" cy="50" rx="5" ry="40" fill="currentColor" opacity="0.3" transform="rotate(45 50 50)" />
                  <rect x="45" y="5" width="10" height="20" fill="currentColor" rx="2" />
                </svg>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  Wafer Centric Butterfly Valve - Gear Operated
                </h2>
                <div className="space-y-3 text-[var(--color-text-muted)] mb-6">
                  <div className="flex justify-between">
                    <span>Pressure Rating:</span>
                    <span className="font-semibold text-[var(--color-primary)]">PN10 / PN16</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Design:</span>
                    <span className="font-semibold text-[var(--color-primary)]">Bonded Seat, Wafer Centric</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Operation:</span>
                    <span className="font-semibold text-[var(--color-primary)]">Gear Box</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ideal For:</span>
                    <span className="font-semibold text-[var(--color-primary)]">Large Sizes</span>
                  </div>
                </div>
                <Link href="/contact" className="btn-outline w-full justify-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-12">
            Common Applications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💨", title: "HVAC Systems", desc: "Heating, ventilation, air conditioning" },
              { icon: "💧", title: "Water Treatment", desc: "Municipal and industrial water" },
              { icon: "🏭", title: "Process Industry", desc: "Chemical and food processing" },
              { icon: "⚡", title: "Power Plants", desc: "Cooling water systems" },
            ].map((app) => (
              <div key={app.title} className="bg-[var(--color-background-alt)] rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{app.icon}</div>
                <h3 className="font-bold text-[var(--color-primary)] mb-2">{app.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Butterfly Valves for Your Project?
          </h2>
          <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Contact Us for Quote
          </Link>
        </div>
      </section>
    </>
  );
}

