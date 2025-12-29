'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { COMPANY } from '@/lib/constants';

// Product type mapping for dropdown
const PRODUCT_TYPE_MAP: Record<string, string> = {
  'Ball Valves': 'ball-valve',
  'Butterfly Valves': 'butterfly-valve',
  'Gate Valves': 'gate-valve',
  'Globe Valves': 'globe-valve',
  'Check Valves': 'check-valve',
  'Steam Traps': 'steam-trap',
  'Limit Switch Box': 'limit-switch',
  'Y-Strainers': 'strainer',
};

function EnquiryForm() {
  const searchParams = useSearchParams();
  const [productType, setProductType] = useState('');
  const [productName, setProductName] = useState('');

  useEffect(() => {
    const product = searchParams.get('product');
    if (product) {
      setProductName(product);
      // Try to match to a dropdown value
      for (const [name, value] of Object.entries(PRODUCT_TYPE_MAP)) {
        if (product.toLowerCase().includes(name.toLowerCase().replace(' valves', '').replace(' ', ''))) {
          setProductType(value);
          break;
        }
      }
      // If it's a specific product name (like "Two Piece Design..."), set ball-valve as type
      if (product.includes('Ball Valve') || product.includes('Flanged') || product.includes('Screwed')) {
        setProductType('ball-valve');
      } else if (product.includes('Butterfly')) {
        setProductType('butterfly-valve');
      } else if (product.includes('Gate')) {
        setProductType('gate-valve');
      } else if (product.includes('Globe')) {
        setProductType('globe-valve');
      } else if (product.includes('Check')) {
        setProductType('check-valve');
      } else if (product.includes('Steam') || product.includes('Trap')) {
        setProductType('steam-trap');
      } else if (product.includes('Limit Switch')) {
        setProductType('limit-switch');
      } else if (product.includes('Strainer')) {
        setProductType('strainer');
      }
    }
  }, [searchParams]);

  return (
    <form className="space-y-8">
      {/* Personal Information */}
      <div>
        <h2 className="text-xl font-bold text-[var(--color-primary)] mb-6">Contact Information</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      {/* Product Requirements */}
      <div>
        <h2 className="text-xl font-bold text-[var(--color-primary)] mb-6">Product Requirements</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Product Type *
            </label>
            <select
              id="product"
              name="product"
              required
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent bg-white"
            >
              <option value="">Select a product</option>
              <option value="ball-valve">Ball Valves</option>
              <option value="butterfly-valve">Butterfly Valves</option>
              <option value="gate-valve">Gate Valves</option>
              <option value="globe-valve">Globe Valves</option>
              <option value="check-valve">Check Valves</option>
              <option value="steam-trap">Steam Traps</option>
              <option value="limit-switch">Limit Switch Box</option>
              <option value="strainer">Y-Strainers</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="product-name" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Specific Product / Variant
            </label>
            <input
              type="text"
              id="product-name"
              name="product-name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="e.g., Two Piece Design Flanged Ball Valve"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              name="quantity"
              placeholder="e.g., 10 units"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Size (if known)
            </label>
            <input
              type="text"
              id="size"
              name="size"
              placeholder="e.g., 2 inch, DN50"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="pressure" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Pressure Class
            </label>
            <select
              id="pressure"
              name="pressure"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent bg-white"
            >
              <option value="">Select pressure class</option>
              <option value="150">Class 150</option>
              <option value="300">Class 300</option>
              <option value="600">Class 600</option>
              <option value="800">Class 800</option>
              <option value="1500">Class 1500</option>
              <option value="other">Other/Not Sure</option>
            </select>
          </div>
          <div>
            <label htmlFor="material" className="block text-sm font-medium text-[var(--color-text)] mb-2">
              Material Preference
            </label>
            <select
              id="material"
              name="material"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent bg-white"
            >
              <option value="">Select material</option>
              <option value="wcb">WCB (Carbon Steel)</option>
              <option value="ss304">SS304</option>
              <option value="ss316">SS316</option>
              <option value="cf8m">CF8M</option>
              <option value="a105">A105 (Forged)</option>
              <option value="other">Other/Not Sure</option>
            </select>
          </div>
        </div>
      </div>

      {/* Detailed Requirements */}
      <div>
        <label htmlFor="details" className="block text-sm font-medium text-[var(--color-text)] mb-2">
          Additional Requirements (Optional)
        </label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="Describe your application, end connections, actuator requirements, or any other specifications..."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full btn-primary justify-center py-4 text-lg"
      >
        Submit Quote Request
      </button>
    </form>
  );
}

export default function EnquiryPage() {
  return (
    <>
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Request a Quote</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Request a Quote</h1>
          <p className="text-xl text-white/80">
            Fill out the form below and our team will respond within 24 business hours.
          </p>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg">
            <Suspense fallback={<div>Loading form...</div>}>
              <EnquiryForm />
            </Suspense>
          </div>

          {/* Quick Contact */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <p className="text-[var(--color-text-muted)] mb-2">Need urgent response?</p>
              <a href={`tel:${COMPANY.phone.primary.replace(/\s/g, '')}`} className="text-xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)]">
                {COMPANY.phone.primary}
              </a>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <p className="text-[var(--color-text-muted)] mb-2">Email us directly</p>
              <a href={`mailto:${COMPANY.email.sales}`} className="text-xl font-bold text-[var(--color-primary)] hover:text-[var(--color-accent)]">
                {COMPANY.email.sales}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
