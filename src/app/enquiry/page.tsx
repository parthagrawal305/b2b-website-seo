import Link from 'next/link';
import { Metadata } from 'next';
import { COMPANY } from '@/lib/constants';

export const metadata: Metadata = {
  title: "Request a Quote - Industrial Valve Enquiry | Unison Valves",
  description: "Get a quick quote for ball valves, butterfly valves, gate valves, and other industrial valves. Fast response within 24 hours. Pan-India delivery.",
  keywords: ["valve quote request", "industrial valve price", "ball valve quote", "valve enquiry India"],
};

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
                      required
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
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      Quantity
                    </label>
                    <input
                      type="text"
                      id="quantity"
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
                </div>
              </div>

              {/* Detailed Requirements */}
              <div>
                <label htmlFor="details" className="block text-sm font-medium text-[var(--color-text)] mb-2">
                  Detailed Requirements
                </label>
                <textarea
                  id="details"
                  rows={5}
                  placeholder="Please describe your application, material preferences, end connections, actuator requirements, or any other specifications..."
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

