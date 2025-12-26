import Link from 'next/link';
import { Metadata } from 'next';
import { getAllBlogPosts } from '@/lib/blog';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: "Blog - Industrial Valve Knowledge & Insights",
  description: "Expert insights on industrial valves, ball valves, butterfly valves, steam traps, and flow control solutions. Technical guides, application notes, and industry best practices from Unison Valves.",
  keywords: ["valve blog", "industrial valve guide", "ball valve technical", "valve selection guide", "fire safe valve", "valve standards"],
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Knowledge Hub
          </h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Expert insights on industrial valves, selection guides, and industry best practices. 
            Stay updated with the latest in flow control technology.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                Blog posts coming soon!
              </h2>
              <p className="text-[var(--color-text-muted)]">
                We&apos;re working on bringing you expert insights on industrial valves and flow control solutions.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  {/* Post Image */}
                  <div className="aspect-video bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-16 h-16 text-white/30" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="40" strokeWidth="3" stroke="currentColor" fill="none" />
                        <circle cx="50" cy="50" r="20" fill="currentColor" opacity="0.3" />
                        <circle cx="50" cy="50" r="8" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  {/* Post Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)] mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </span>
                    </div>
                    
                    <h2 className="text-lg font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-[var(--color-text-muted)] text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-2 py-1 bg-[var(--color-background-alt)] text-xs text-[var(--color-text-muted)] rounded-lg"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center text-[var(--color-accent)] font-medium text-sm">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-[var(--color-text-muted)] mb-8 max-w-2xl mx-auto">
            Get expert articles on valve selection, maintenance tips, and industry standards delivered to your inbox.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us for Expert Advice
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
