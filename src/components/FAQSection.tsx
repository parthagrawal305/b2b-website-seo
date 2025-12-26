'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/constants';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Header & CTA */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mt-3 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--color-text-muted)] text-lg mb-8">
              Get answers to common questions about our industrial valves, certifications, and ordering process.
            </p>
            
            <div className="bg-[var(--color-background-alt)] rounded-2xl p-6">
              <h3 className="font-bold text-[var(--color-primary)] mb-3">
                Still have questions?
              </h3>
              <p className="text-[var(--color-text-muted)] mb-4">
                Our technical team is ready to help you find the right solution.
              </p>
              <a
                href="tel:+919922922026"
                className="btn-primary w-full justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-xl overflow-hidden transition-all ${
                  openIndex === index
                    ? 'border-[var(--color-accent)] shadow-lg'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-[var(--color-primary)] pr-4">
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index
                      ? 'bg-[var(--color-accent)] text-white rotate-180'
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}>
                  <div className="px-6 pb-6 text-[var(--color-text-muted)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

