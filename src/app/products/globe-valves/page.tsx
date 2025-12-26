import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Globe Valves - Flanged & Socket Weld | Manufacturers in India",
  description: "Precision globe valves for throttling and flow control. Stationary ring seat design. Flanged end and socket weld options. Class 150, 800. High-quality manufacturing in Pune.",
  keywords: ["globe valve manufacturers India", "throttling valve", "flow control valve", "flanged globe valve"],
};

export default function GlobeValvesPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Globe Valves</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Globe Valves</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Globe valves are excellent for throttling applications and offer precise flow control. 
            Our globe valves feature stationary ring seats for reliable sealing and long service life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Globe Valve - Flanged End / Butt Weld - Class 150
              </h2>
              <div className="space-y-3 text-[var(--color-text-muted)] mb-6">
                <div className="flex justify-between py-2 border-b">
                  <span>Design Standard:</span>
                  <span className="font-semibold text-[var(--color-primary)]">BS 1873 / API 623</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Flanged Dimensions:</span>
                  <span className="font-semibold text-[var(--color-primary)]">ASME B 16.5</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Testing Standard:</span>
                  <span className="font-semibold text-[var(--color-primary)]">API 598</span>
                </div>
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center">Get Quote</Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Globe Valve - SE/SW - Class 800
              </h2>
              <div className="space-y-3 text-[var(--color-text-muted)] mb-6">
                <div className="flex justify-between py-2 border-b">
                  <span>Design Standard:</span>
                  <span className="font-semibold text-[var(--color-primary)]">BS 5352 / API 602</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Connection:</span>
                  <span className="font-semibold text-[var(--color-primary)]">Socket Weld / Screwed</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Pressure Class:</span>
                  <span className="font-semibold text-[var(--color-primary)]">#800</span>
                </div>
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center">Get Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Globe Valves?</h2>
          <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold">
            Request Quote
          </Link>
        </div>
      </section>
    </>
  );
}

