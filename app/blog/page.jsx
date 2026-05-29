import Link from 'next/link';
import { blogPosts } from '../blogData';

export const metadata = {
  title: 'DevOps, AI, Kubernetes, and Cloud Infrastructure Blog | Perqora',
  description:
    'Technical articles from Perqora on Kubernetes consulting, Terraform automation, cloud cost optimization, AI-native DevOps, SRE consulting, and cloud migration.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'DevOps, AI, Kubernetes, and Cloud Infrastructure Blog | Perqora',
    description:
      'Practical infrastructure articles for CTOs and engineering teams building reliable cloud platforms.',
    url: 'https://perqora.in/blog',
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

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-[#f4f0e7] text-[#18201d]">
      <section className="border-b border-[#ded7c8] bg-[#f8f5ee]">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-6 lg:py-24">
          <p className="text-sm font-semibold text-[#1f7568]">Blog</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[#111827] sm:text-6xl">
            Practical infrastructure thinking for CTOs and cloud teams.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#53605c]">
            Articles on Kubernetes consulting, Terraform automation, cloud cost optimization,
            AI-native DevOps, SRE consulting, and cloud migration.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-3xl border border-[#ded7c8] bg-white p-6">
              <p className="text-sm font-semibold text-[#1f7568]">{post.category}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#111827]">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#1f7568]">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#53605c]">{post.description}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-6 inline-flex text-sm font-semibold text-[#111827] hover:text-[#1f7568]"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
