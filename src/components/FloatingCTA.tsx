'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, X, Mail, MessageSquare } from 'lucide-react';
import { COMPANY } from '@/lib/constants';

export default function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="flex flex-col gap-3 animate-fade-in">
          {/* Contact Form */}
          <Link
            href="/enquiry"
            className="floating-btn bg-[var(--color-primary)] text-white group relative"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Contact Form
            </span>
          </Link>

          {/* Email */}
          <a
            href={`mailto:${COMPANY.email.sales}`}
            className="floating-btn bg-blue-600 text-white group relative"
          >
            <Mail className="w-6 h-6" />
            <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {COMPANY.email.sales}
            </span>
          </a>

          {/* Phone */}
          <a
            href={`tel:${COMPANY.phone.primary.replace(/\s/g, '')}`}
            className="floating-btn bg-[var(--color-accent)] text-white group relative"
          >
            <Phone className="w-6 h-6" />
            <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {COMPANY.phone.primary}
            </span>
          </a>

          {/* WhatsApp - Most prominent */}
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hi, I'm interested in Unison Valves products.`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn bg-[#25D366] text-white group relative"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              WhatsApp
            </span>
          </a>
        </div>
      )}

      {/* Main Toggle Button - WhatsApp icon when closed, X when open */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`floating-btn ${isExpanded ? 'bg-gray-600' : 'bg-[#25D366]'} text-white shadow-xl`}
        aria-label={isExpanded ? 'Close contact options' : 'Contact us'}
      >
        {isExpanded ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
