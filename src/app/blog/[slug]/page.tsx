import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getBlogPost, getAllBlogSlugs } from '@/lib/blog';
import { Calendar, User, ArrowLeft, Tag, FileText, Phone } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container-custom">
          <nav className="text-white/60 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-white">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white line-clamp-1">{post.title}</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/70">
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              {new Date(post.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              {post.author}
            </span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            {/* Main Content */}
            <article className="prose prose-lg max-w-none prose-headings:text-[var(--color-primary)] prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline">
              <MDXRemote source={post.content} />
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* CTA Card */}
              <div className="bg-[var(--color-primary)] text-white rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Need Expert Guidance?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Our technical team can help you select the right valves for your specific application.
                </p>
                <div className="space-y-3">
                  <Link
                    href="/enquiry"
                    className="block w-full bg-[var(--color-accent)] text-white text-center py-3 rounded-lg font-semibold hover:bg-[var(--color-accent-dark)] transition-colors"
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="tel:+919922922026"
                    className="flex items-center justify-center gap-2 w-full bg-white/10 text-white py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>
              </div>

              {/* Downloads */}
              <div className="bg-[var(--color-background-alt)] rounded-xl p-6">
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">Downloads</h3>
                <div className="space-y-3">
                  <a
                    href="/downloads/unison-ball-valves-steam-traps-catalog.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <FileText className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="text-sm">Ball Valves Catalog (PDF)</span>
                  </a>
                  <a
                    href="/downloads/unison-industrial-valves-catalog.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors"
                  >
                    <FileText className="w-5 h-5 text-[var(--color-accent)]" />
                    <span className="text-sm">Industrial Valves Catalog (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Back to Blog */}
              <Link
                href="/blog"
                className="flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-accent)] font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-background-alt)]">
        <div className="container-custom text-center">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
            Looking for Industrial Valves?
          </h2>
          <p className="text-[var(--color-text-muted)] mb-6 max-w-2xl mx-auto">
            Explore our complete range of ball valves, butterfly valves, gate valves, and more.
          </p>
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </section>
    </>
  );
}

