import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ArrowRight, FileText, Phone, Shield, Award, BadgeCheck, Flame } from 'lucide-react';
import { PRODUCTS, CERTIFICATIONS } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Industrial Valves - Ball, Butterfly, Gate, Globe, Check Valves",
  description: "Explore our comprehensive range of industrial valves including ball valves, butterfly valves, gate valves, globe valves, check valves, and steam traps. ISO 9001:2015 certified manufacturing in Pune, India.",
  keywords: ["industrial valves", "ball valves", "butterfly valves", "gate valves", "globe valves", "check valves", "steam traps", "valve manufacturer India"],
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="text-white/60 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Products</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Industrial Valve Solutions
            </h1>
            <p className="text-xl text-white/80">
              Comprehensive range of high-quality industrial valves manufactured to international standards. 
              From ball valves to steam traps, we deliver precision flow control solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Bar */}
      <section className="bg-white border-b py-6">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-8">
            {CERTIFICATIONS.map((cert) => {
              const IconComponent = cert.icon === 'iso' ? Shield : cert.icon === 'fire' ? Flame : cert.icon === 'api' ? Award : BadgeCheck;
              return (
                <div key={cert.name} className="flex items-center gap-2 text-[var(--color-text-muted)]">
                  <IconComponent className="w-6 h-6 text-[var(--color-primary)]" />
                  <span className="font-medium">{cert.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PRODUCTS.categories.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Product Image */}
                <div className="aspect-square bg-white relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 right-3 bg-[var(--color-primary)] text-white text-xs font-medium px-2 py-1 rounded-lg">
                    {product.count}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center text-[var(--color-accent)] font-medium text-sm">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Download Catalog CTA */}
          <div className="mt-12 text-center">
            <p className="text-[var(--color-text-muted)] mb-4">
              Looking for complete specifications? Download our product catalogs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/downloads/unison-ball-valves-steam-traps-catalog.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <FileText className="w-5 h-5" />
                Ball Valves Catalog (PDF)
              </a>
              <a 
                href="/downloads/unison-industrial-valves-catalog.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FileText className="w-5 h-5" />
                Industrial Valves Catalog (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[var(--color-primary)]">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Help Selecting the Right Valve?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Our technical team can help you choose the perfect valve for your specific application. 
            Get expert advice and custom solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/enquiry" className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold hover:bg-[var(--color-accent-dark)] transition-colors inline-flex items-center gap-2">
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+919922922026" className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

