'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TRUST_STATS, CERTIFICATIONS, INDUSTRIES, COMPANY } from '@/lib/constants';
import { Play, X } from 'lucide-react';

export default function AboutPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <nav className="text-white/60 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About Us</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Unison Valves
            </h1>
            <p className="text-xl text-white/80 italic">
              &ldquo;Change for the better&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview with Video */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mt-3 mb-6">
                4 Decades of Excellence in Flow Control
              </h2>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  UNISON has delivered superior flow control solutions over the past 4 decades. Whether it&apos;s ball & butterfly valves, thermodynamic steam traps, or other industrial valves, we&apos;ve stayed true to our unswerving ethos of delivering high quality with exemplary performance through our product offerings over time.
                </p>
                <p>
                  We have seamlessly catered to a host of diverse industries including Engineering, Pharmaceutical, Chemicals, Food Processing, Oil & Gas, Water Resource Management & various other specialty sectors.
                </p>
                <p>
                  Having garnered a growing market presence PAN-India, we strive towards expanding our footprint across various geographies and markets.
                </p>
              </div>
            </div>
            
            {/* Video Section */}
            <div className="relative">
              {!isVideoPlaying ? (
                <div 
                  className="relative aspect-video rounded-2xl overflow-hidden cursor-pointer group shadow-xl"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Image
                    src="/images/about-video-thumbnail.jpg"
                    alt="About Unison Valves - Watch our company video"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Play className="w-8 h-8 text-[var(--color-primary)] ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded text-sm">
                    Watch Our Story
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
                  <video
                    src="/videos/about-unison-valves.mp4"
                    autoPlay
                    controls
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                    aria-label="Close video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center shadow-sm">
                <div className="text-4xl sm:text-5xl font-bold text-[var(--color-primary)]">
                  {stat.number}<span className="text-[var(--color-accent)]">{stat.suffix}</span>
                </div>
                <div className="text-[var(--color-text-muted)] mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Quality Policy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-[var(--color-background-alt)] rounded-2xl p-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Our Vision</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                UNISON&apos;s long-term vision of embracing &ldquo;Change for the better&rdquo; is fostered by a formidable leadership backed by a capable team. We aim to be the preferred choice for industrial valve solutions across India and beyond.
              </p>
            </div>

            {/* Quality Policy */}
            <div className="bg-[var(--color-background-alt)] rounded-2xl p-8">
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-accent)]/10 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Quality Policy</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                &ldquo;Optimum customer satisfaction by integrating Quality Systems and Continuously developing Industrial Valves and related products to meet enhanced markets.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider">
              Certifications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mt-3 mb-6">
              Certified for Quality & Safety
            </h2>
            <p className="text-[var(--color-text-muted)]">
              As an ISO 9001:2015 certified entity, we&apos;ve consistently upheld our quality policy with a commitment to endorse applicable requirements as per international standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold text-[var(--color-primary)] mb-2">{cert.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)]">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-[var(--color-primary)]">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider">
              Industries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Serving Diverse Industries Across India
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {INDUSTRIES.map((industry) => (
              <div key={industry.name} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center text-white hover:bg-white/20 transition-colors">
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="font-semibold">{industry.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[var(--color-background-alt)] rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
                  Visit Our Manufacturing Facility
                </h2>
                <p className="text-[var(--color-text-muted)] mb-6">
                  We welcome plant visits from our customers and partners. See our manufacturing processes firsthand.
                </p>
                <address className="not-italic text-[var(--color-text-muted)]">
                  <strong className="text-[var(--color-primary)]">Unison Valves Pvt. Ltd.</strong><br />
                  {COMPANY.address.street}<br />
                  {COMPANY.address.area}<br />
                  {COMPANY.address.city}, {COMPANY.address.state} {COMPANY.address.pincode}
                </address>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary justify-center">
                  Contact Us
                </Link>
                <a 
                  href={COMPANY.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline justify-center"
                >
                  View on Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
