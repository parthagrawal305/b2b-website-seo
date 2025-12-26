import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gate Valves - Flanged & Socket Weld | Manufacturers in India",
  description: "High-quality gate valves for on/off service applications. Flanged end and socket weld options. Class 150, 800. Cast and forged steel construction. ISO certified manufacturing.",
  keywords: ["gate valve manufacturers India", "flanged gate valve", "socket weld gate valve", "industrial gate valve"],
};

export default function GateValvesPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Gate Valves</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Gate Valves</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Gate valves are primarily designed for on/off service applications. 
            They provide a straight-through flow path with minimal pressure drop when fully open.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Gate Valve - Flanged End / Butt Weld - Class 150
              </h2>
              <div className="space-y-3 text-[var(--color-text-muted)] mb-6">
                <div className="flex justify-between py-2 border-b">
                  <span>Design Standard:</span>
                  <span className="font-semibold text-[var(--color-primary)]">BS 1414 / API 600</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Flanged Dimensions:</span>
                  <span className="font-semibold text-[var(--color-primary)]">ASME B 16.5</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Testing Standard:</span>
                  <span className="font-semibold text-[var(--color-primary)]">API 598</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span>Pressure Class:</span>
                  <span className="font-semibold text-[var(--color-primary)]">#150</span>
                </div>
              </div>
              <Link href="/contact" className="btn-primary w-full justify-center">Get Quote</Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Gate Valve - SE/SW - Class 800
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
                  <span>Testing Standard:</span>
                  <span className="font-semibold text-[var(--color-primary)]">API 598</span>
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

      <section className="section-padding gradient-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Gate Valves?</h2>
          <Link href="/contact" className="bg-white text-[var(--color-accent)] px-8 py-4 rounded-xl font-bold">
            Request Quote
          </Link>
        </div>
      </section>
    </>
  );
}

