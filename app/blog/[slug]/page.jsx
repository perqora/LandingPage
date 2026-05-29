import Link from 'next/link';
import { blogPosts, getBlogPost } from '../../blogData';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return {
      title: 'Blog | Perqora',
    };
  }

  return {
    title: `${post.title} | Perqora`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Perqora`,
      description: post.description,
      url: `https://perqora.in/blog/${post.slug}`,
      images: [
        {
          url: '/og/perqora-og.png',
          width: 1200,
          height: 630,
          alt: 'Perqora - AI-Native Infrastructure Engineering',
        },
      ],
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f4f0e7] px-5 py-16 text-[#18201d]">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold">Article not found</h1>
          <Link href="/blog" className="mt-6 inline-flex text-sm font-semibold text-[#1f7568]">
            Back to blog
          </Link>
        </div>
      </main>
    );
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Organization',
      name: 'Perqora',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Perqora',
      logo: {
        '@type': 'ImageObject',
        url: 'https://perqora.in/brand/perqora-mark.png',
      },
    },
    mainEntityOfPage: `https://perqora.in/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#18201d]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <article>
        <header className="border-b border-[#ded7c8] bg-[#f8f5ee]">
          <div className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:py-24">
            <Link href="/blog" className="text-sm font-semibold text-[#1f7568]">
              Blog
            </Link>
            <p className="mt-5 text-sm font-semibold text-[#53605c]">{post.category}</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight text-[#111827] sm:text-6xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#53605c]">{post.description}</p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:py-16">
          <div className="grid gap-6">
            {post.sections.map((section) => (
              <section key={section.heading} className="rounded-3xl border border-[#ded7c8] bg-white p-6">
                <h2 className="text-2xl font-semibold text-[#111827]">{section.heading}</h2>
                <p className="mt-4 text-base leading-8 text-[#53605c]">{section.body}</p>
              </section>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-[#111827] p-6 text-white">
            <h2 className="text-2xl font-semibold">Need this reviewed in your environment?</h2>
            <p className="mt-3 text-sm leading-7 text-[#c7d2cc]">
              Perqora can turn this topic into an infrastructure audit, architecture review,
              migration readiness review, platform sprint, or ongoing engineering support.
            </p>
            <a
              href="https://calendly.com/admin-perqora/30-minute-meeting-clone"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111827]"
            >
              Book Infrastructure Audit
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
