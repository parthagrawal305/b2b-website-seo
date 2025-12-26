import Link from 'next/link';
import { Metadata } from 'next';
import { FileText, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Limit Switch Box - Valve Position Indicator | Manufacturers India",
  description: "Valve position indicator limit switch box for pneumatic and electric actuated valves. Visual and remote indication of valve position. Weather-proof enclosure. ISO certified manufacturing.",
  keywords: ["limit switch box", "valve position indicator", "pneumatic actuator accessories", "valve automation", "limit switch manufacturer India"],
};

export default function LimitSwitchBoxPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Limit Switch Box</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Valve Position Indicator / Limit Switch Box
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mb-8">
            Reliable valve position feedback for automation systems. Our limit switch boxes provide 
            visual and remote indication of valve position for pneumatic and electric actuated valves.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/enquiry" className="btn-primary">
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="/downloads/unison-ball-valves-steam-traps-catalog.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
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
                  "Visual position indication (Open/Closed)",
                  "Remote position feedback via limit switches",
                  "Weather-proof enclosure (IP67 available)",
                  "Compatible with pneumatic and electric actuators",
                  "Easy mounting on standard actuator brackets",
                  "Optional NAMUR solenoid valve mounting",
                  "Explosion-proof versions available",
                  "Cam-operated switches for reliable operation",
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
                  <span className="text-[var(--color-text-muted)]">Enclosure Rating</span>
                  <span className="font-semibold">IP65 / IP67</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Switch Type</span>
                  <span className="font-semibold">Micro Switch / Proximity</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Mounting</span>
                  <span className="font-semibold">NAMUR / VDI/VDE 3845</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Temperature Range</span>
                  <span className="font-semibold">-20°C to +80°C</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Material</span>
                  <span className="font-semibold">Die-cast Aluminum / SS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center mb-12">
            Applications
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Process Automation", desc: "Remote valve monitoring in control systems" },
              { title: "Safety Systems", desc: "Position confirmation for ESD valves" },
              { title: "SCADA Integration", desc: "Valve status feedback to control rooms" },
              { title: "Pneumatic Actuators", desc: "Complete actuation package" },
            ].map((app) => (
              <div key={app.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
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
          <h2 className="text-3xl font-bold text-white mb-6">Need Limit Switch Box for Your Actuators?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Our team can help you select the right limit switch box for your valve automation requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/enquiry" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Request Quote
            </Link>
            <a href="tel:+919922922026" className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

