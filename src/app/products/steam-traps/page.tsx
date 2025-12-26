import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thermodynamic Steam Traps | Steam Trap Manufacturers India",
  description: "High-efficiency thermodynamic steam traps for condensate removal. All stainless steel construction. Sizes 15-25mm NB. Up to 44 bar pressure. Energy-saving solutions for steam systems.",
  keywords: ["steam trap manufacturers India", "thermodynamic steam trap", "condensate removal", "steam system efficiency"],
};

export default function SteamTrapsPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Steam Traps</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Thermodynamic Steam Traps</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Energy-efficient thermodynamic steam traps for removing condensate without losing valuable steam. 
            Essential for maintaining steam system efficiency.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Technical Specifications</h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Size Range</span>
                  <span className="font-semibold">15, 20, 25 MM/NB</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Range (Screwed Ends)</span>
                  <span className="font-semibold">Max. 32 BAR @ 425°C</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Range (Socket Welded)</span>
                  <span className="font-semibold">Max. 44 BAR @ 465°C</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Connections</span>
                  <span className="font-semibold">BSPT, NPT, Socket Weld</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Body Material</span>
                  <span className="font-semibold">AISI 420</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Strainer</span>
                  <span className="font-semibold">AISI 304</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Product Features</h2>
              <ul className="space-y-3">
                {[
                  "Streamlined & compact design",
                  "All stainless steel construction for corrosion resistance",
                  "High resistance to waterhammer",
                  "Long life due to hardwear/wearing parts",
                  "Only one moving part - minimal maintenance",
                  "Efficient operation under varying loads",
                  "Discharges condensate at steam temperatures",
                  "Metal to metal seating - no sealing material required",
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-text-muted)]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Steam Traps for Your System?</h2>
          <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold">
            Request Quote
          </Link>
        </div>
      </section>
    </>
  );
}

