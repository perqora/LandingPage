import './globals.css';

export const metadata = {
  title: 'Perqora - AI-Native Infrastructure Engineering',
  description:
    'Perqora helps startups build scalable Kubernetes platforms, cloud infrastructure, Terraform automation, observability systems, and AI-native DevOps workflows.',
  metadataBase: new URL('https://perqora.in'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Perqora - AI-Native Infrastructure Engineering',
    description:
      'Scalable Kubernetes platforms, cloud infrastructure, Terraform automation, observability systems, and AI-native DevOps workflows for startups.',
    url: 'https://perqora.in',
    siteName: 'Perqora',
    images: [
      {
        url: '/og/perqora-og.png',
        width: 1200,
        height: 630,
        alt: 'Perqora - AI-Native Infrastructure Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perqora - AI-Native Infrastructure Engineering',
    description:
      'Kubernetes consulting, platform engineering, Terraform automation, observability, and cloud cost optimization for startups.',
    images: ['/og/perqora-og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
