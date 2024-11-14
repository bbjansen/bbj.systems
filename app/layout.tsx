import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bbj.systems'),
  title: {
    default: 'bbj.systems | Software Engineer & Data Analyst',
    template: '%s | bbj.systems',
  },
  description: 'Software Engineer & Data Analyst specializing in Economics and System Design. Expert in building scalable solutions and data-driven applications.',
  keywords: ['Software Engineer', 'Data Analyst', 'Economics', 'System Design', 'Full Stack Developer', 'Data Science'],
  authors: [{ name: 'BBJ Systems' }],
  creator: 'BBJ Systems',
  publisher: 'BBJ Systems',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bbj.systems',
    title: 'bbj.systems | Software Engineer & Data Analyst',
    description: 'Software Engineer & Data Analyst specializing in Economics and System Design. Expert in building scalable solutions and data-driven applications.',
    siteName: 'bbj.systems',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'bbj.systems | Software Engineer & Data Analyst',
    description: 'Software Engineer & Data Analyst specializing in Economics and System Design',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://bbj.systems" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://bbj.systems/#organization",
              "name": "BBJ Systems",
              "url": "https://bbj.systems",
              "logo": "https://bbj.systems/logo.png",
              "description": "Software Engineer & Data Analyst specializing in Economics and System Design",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL"
              },
              "foundingDate": "2020",
              "vatID": "81678924",
              "sameAs": [
                "https://github.com/bbjansen",
                "https://www.linkedin.com/company/bbj-systems/"
              ]
            }
          `}
        </Script>
      </body>
    </html>
  );
}