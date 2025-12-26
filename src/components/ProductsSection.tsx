import Link from 'next/link';
import { PRODUCTS } from '@/lib/constants';

export default function ProductsSection() {
  return (
    <section className="section-padding bg-[var(--color-background-alt)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-wider">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mt-3 mb-6">
            Industrial Valve Solutions
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg">
            Comprehensive range of high-quality industrial valves designed for demanding applications across diverse industries.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.categories.map((product, index) => (
            <Link
              key={product.id}
              href={product.href}
              className="group card hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="product-image-container bg-gradient-to-br from-gray-100 to-gray-200 aspect-[4/3] mb-6 flex items-center justify-center">
                {/* Placeholder Icon */}
                <svg className="w-24 h-24 text-gray-400 group-hover:text-[var(--color-accent)] transition-colors" viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="50" cy="50" r="40" strokeWidth="3" stroke="currentColor" fill="none" />
                  <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.3" />
                  <circle cx="50" cy="50" r="8" fill="currentColor" />
                </svg>
              </div>

              {/* Product Info */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full font-medium">
                    {product.count}
                  </span>
                </div>
                <p className="text-[var(--color-text-muted)] mb-4">
                  {product.description}
                </p>
                <div className="flex items-center text-[var(--color-accent)] font-medium group-hover:gap-3 transition-all">
                  <span>View Products</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn-outline">
            View All Products
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

