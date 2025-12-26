import Link from 'next/link';
import { Metadata } from 'next';
import { INDUSTRIES } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Industries We Serve - Oil & Gas, Pharma, Chemicals, Water | Unison Valves",
  description: "Unison Valves serves diverse industries: Oil & Gas, Pharmaceuticals, Chemicals, Food Processing, Power, Water Treatment, Engineering, and more. Custom valve solutions for every sector.",
  keywords: ["industrial valves for oil gas", "pharmaceutical valve supplier", "chemical industry valves", "food processing valves", "power plant valves"],
};

export default function IndustriesPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Industries</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Industries We Serve</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            With 40+ years of experience, we&apos;ve delivered flow control solutions across 700+ 
            industrial applications. From oil refineries to pharmaceutical plants, 
            our valves are trusted across India.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <div key={industry.name} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow">
                <div className="text-5xl mb-6">{industry.icon}</div>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">{industry.name}</h2>
                <p className="text-[var(--color-text-muted)] mb-6">
                  {getIndustryDescription(industry.name)}
                </p>
                <Link href="/contact" className="btn-outline text-sm">
                  Request Industry-Specific Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[var(--color-primary)] rounded-3xl p-8 sm:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              We manufacture custom valve solutions for specialized applications. 
              Contact our technical team to discuss your requirements.
            </p>
            <Link href="/contact" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold inline-block">
              Contact Technical Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function getIndustryDescription(name: string): string {
  const descriptions: Record<string, string> = {
    "Oil & Gas": "Critical flow control for upstream, midstream, and downstream operations. Fire-safe certified valves for hazardous environments.",
    "Pharmaceuticals": "High-purity valve solutions meeting FDA requirements. Suitable for sterile processing and clean room applications.",
    "Chemicals": "Corrosion-resistant valves for aggressive media. Specialized materials including Hastelloy, Monel, and PTFE-lined options.",
    "Food & Beverage": "Hygienic designs with tri-clover ends. FDA-approved materials for food-contact applications.",
    "Water Treatment": "Reliable valves for municipal and industrial water systems. Suitable for corrosive and high-flow applications.",
    "Power Generation": "High-pressure and high-temperature rated valves. Designed for steam systems and cooling water circuits.",
    "Engineering": "Versatile valve solutions for general manufacturing and process applications.",
    "Paper & Pulp": "Valves designed for fibrous and abrasive media. Suitable for high-temperature pulping processes.",
    "Sugar & Distillery": "Solutions for viscous media and high-temperature processing.",
    "Textile": "Reliable flow control for dyeing, washing, and finishing processes.",
  };
  return descriptions[name] || "Custom valve solutions tailored to your industry requirements.";
}

