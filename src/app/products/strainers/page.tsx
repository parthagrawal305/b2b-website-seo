import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Y-Strainers - Cast Steel Strainer Class 150 | Manufacturers India",
  description: "Cast steel Y-strainers for pipeline protection. Class 150. Removable screen for easy cleaning. Flanged connections. ISO certified manufacturing in Pune.",
  keywords: ["y strainer manufacturers India", "cast steel strainer", "pipeline strainer", "industrial strainer", "strainer valve"],
};

export default function StrainersPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Y-Strainers</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cast Steel &quot;Y&quot; Strainer - Class 150
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mb-8">
            Protect your valves, pumps, and other equipment from debris. Our Y-strainers provide 
            reliable filtration for industrial pipelines with easy maintenance access.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/enquiry" className="btn-primary">
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="/downloads/unison-industrial-valves-catalog.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <FileText className="w-5 h-5" />
              Download Catalog
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Product Features
              </h2>
              <ul className="space-y-4">
                {[
                  "Cast steel construction for durability",
                  "Y-pattern design for compact installation",
                  "Removable strainer basket for easy cleaning",
                  "Bolted cover for quick access",
                  "Flanged end connections per ASME B16.5",
                  "Perforated or mesh screen options",
                  "Blow-off connection available",
                  "Horizontal or vertical installation",
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

            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Technical Specifications
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Design Standard</span>
                  <span className="font-semibold">As per requirement</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Flange Dimensions</span>
                  <span className="font-semibold">ASME B 16.5</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Pressure Class</span>
                  <span className="font-semibold">#150</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Body Material</span>
                  <span className="font-semibold">WCB / CF8 / CF8M</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Screen Material</span>
                  <span className="font-semibold">SS 304 / SS 316</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Y-Strainers for Your Pipeline?</h2>
          <Link href="/enquiry" className="bg-white text-[var(--color-accent)] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Request Quote
          </Link>
        </div>
      </section>
    </>
  );
}

