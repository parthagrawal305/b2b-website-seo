'use client';

import { CLIENT_LOGOS } from '@/lib/constants';

export default function ClientLogos() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container-custom mb-10">
        <p className="text-center text-[var(--color-text-muted)] font-medium">
          Trusted by leading companies across industries
        </p>
      </div>

      {/* Logo Carousel */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling Container */}
        <div className="flex logo-carousel">
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex-shrink-0 px-8 py-4 mx-4"
            >
              {/* Logo Placeholder */}
              <div className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center group hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="text-center">
                  <div className="w-10 h-10 mx-auto bg-gray-300 rounded-lg mb-1 group-hover:bg-[var(--color-primary)] transition-colors" />
                  <span className="text-xs text-gray-500 font-medium group-hover:text-[var(--color-primary)]">
                    {client.name.length > 12 ? client.name.substring(0, 10) + '...' : client.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

