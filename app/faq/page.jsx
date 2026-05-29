import FaqClient from './FaqClient';
import { faqItems } from '../faqData';

export const metadata = {
  title: 'FAQ | Perqora',
  description:
    'Answers about Perqora engagement models, Kubernetes consulting, Terraform automation, cloud cost optimization, AI-native DevOps, SRE, migration, pricing, and working style.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | Perqora',
    description:
      'Common questions CTOs ask before working with Perqora on DevOps, AI-native infrastructure engineering, Kubernetes, SRE, Terraform, migration, and cloud cost optimization.',
    url: 'https://perqora.in/faq',
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

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqClient />
    </>
  );
}
