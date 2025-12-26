'use client';

import { useState } from 'react';
import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mt-3 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Trusted by industry leaders for quality, reliability, and exceptional service
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-[var(--color-background-alt)] rounded-3xl p-8 sm:p-12 mb-8 relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 text-[var(--color-accent)] opacity-20">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${i < TESTIMONIALS[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-xl sm:text-2xl text-[var(--color-text)] leading-relaxed mb-8">
              &ldquo;{TESTIMONIALS[activeIndex].content}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              {/* Avatar Placeholder */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center text-white font-bold text-xl">
                {TESTIMONIALS[activeIndex].name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-[var(--color-primary)] text-lg">
                  {TESTIMONIALS[activeIndex].name}
                </div>
                <div className="text-[var(--color-text-muted)]">
                  {TESTIMONIALS[activeIndex].designation}, {TESTIMONIALS[activeIndex].company}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex
                    ? 'bg-[var(--color-accent)] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-12 text-center">
          <a
            href="https://maps.app.goo.gl/LxVPbzDqwR5WmaEh9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow"
          >
            <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="font-medium text-[var(--color-text)]">
              Rated 4.8★ on Google
            </span>
            <span className="text-[var(--color-text-muted)]">|</span>
            <span className="text-[var(--color-accent)]">View All Reviews →</span>
          </a>
        </div>
      </div>
    </section>
  );
}

