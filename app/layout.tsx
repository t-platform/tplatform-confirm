import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TplatForm - Secure Currency Exchange',
  description: 'Complete your TplatForm email verification to access your secure currency exchange account.',
  keywords: ['TplatForm', 'currency exchange', 'fintech', 'email verification', 'secure'],
  authors: [{ name: 'TplatForm Team' }],
  creator: 'TplatForm',
  publisher: 'TplatForm',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tplatform-confirm.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TplatForm - Secure Currency Exchange',
    description: 'Complete your TplatForm email verification to access your secure currency exchange account.',
    url: 'https://tplatform-confirm.vercel.app',
    siteName: 'TplatForm',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TplatForm - Secure Currency Exchange',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TplatForm - Secure Currency Exchange',
    description: 'Complete your TplatForm email verification to access your secure currency exchange account.',
    images: ['/og-image.png'],
    creator: '@tplatform',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
