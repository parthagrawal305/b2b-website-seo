import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Check Valves - Swing, Lift, Wafer Disc | Manufacturers in India",
  description: "Non-return valves preventing backflow. Swing check, lift check, wafer disc, and flap check valve options. Class 150, 800. Quality manufacturing by Unison Valves Pune.",
  keywords: ["check valve manufacturers India", "non return valve", "swing check valve", "wafer check valve", "lift check valve"],
};

export default function CheckValvesPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Check Valves</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Check Valves</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Check valves (non-return valves) allow flow in one direction only, 
            preventing backflow and protecting equipment from damage.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              { name: "Flanged End Swing Check Valve", desc: "Traditional swing design for horizontal and vertical up-flow installations" },
              { name: "SE/SW Lift Check Valve - Class 800", desc: "Compact design for socket weld/screwed connections" },
              { name: "Wafer Disc Check Valve", desc: "Dual plate spring-loaded design for space-saving installations" },
              { name: "Wafer Flap Check Valve", desc: "Single disc design with low pressure drop" },
            ].map((product) => (
              <div key={product.name} className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-[var(--color-primary)] mb-4">{product.name}</h2>
                <p className="text-[var(--color-text-muted)] mb-6">{product.desc}</p>
                <Link href="/contact" className="btn-outline">Get Quote</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Need Check Valves?</h2>
          <Link href="/contact" className="bg-white text-[var(--color-accent)] px-8 py-4 rounded-xl font-bold">
            Request Quote
          </Link>
        </div>
      </section>
    </>
  );
}

