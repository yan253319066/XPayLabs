import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles
import JsonLd from '../components/JsonLd';
import I18nProvider from '../components/I18nProvider';
import ErrorBoundary from '../components/ErrorBoundary';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'XPay Labs',
  alternateName: 'xpay',
  url: 'https://www.xpaylabs.com',
  logo: 'https://www.xpaylabs.com/logo.png',
  image: 'https://www.xpaylabs.com/og-image.png',
  description: 'Self-hosted crypto payment infrastructure supporting TRON, EVM chains, and SUI.',
  foundingDate: '2026',
  sameAs: [
    'https://github.com/yan253319066',
    'https://github.com/yan253319066/XPayLabs-docker',
    'https://x.com/getciteflow',
    'https://www.linkedin.com/in/neil-yan/',
    'https://docs.xpaylabs.com',
    'https://www.npmjs.com/package/@xpaylabs/node-sdk',
    'https://central.sonatype.com/artifact/io.xpay/xpay-java-sdk',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'XPay Labs',
  alternateName: 'xpay',
  url: 'https://www.xpaylabs.com',
  description: 'Self-hosted crypto payment infrastructure for developers.',
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'XPay Labs',
  alternateName: 'xpay',
  url: 'https://www.xpaylabs.com',
  applicationCategory: 'PaymentProcessing',
  operatingSystem: 'Linux, Docker',
  description: 'Self-hosted, non-custodial crypto payment gateway supporting TRON, EVM chains, and SUI.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
};

export const metadata: Metadata = {
  title: {
    default: 'XPay Labs (xpay) — Self-hosted Crypto Payment Infrastructure',
    template: '%s | XPay Labs (xpay)',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'XPay Labs (xpay) — self-hosted crypto payment infrastructure supporting TRON, EVM chains, and SUI. Non-custodial gateway with Webhooks and API hooks.',
  metadataBase: new URL('https://www.xpaylabs.com'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    siteName: 'XPay Labs',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased`} suppressHydrationWarning>
      <body className="bg-[#060816] text-gray-200 min-h-screen selection:bg-indigo-500/30 selection:text-white" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var p=window.location.pathname;if(p.startsWith('/zh')){document.documentElement.lang='zh';}})();`
          }}
        />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={softwareAppSchema} />
        <ErrorBoundary>
          <I18nProvider>{children}</I18nProvider>
        </ErrorBoundary>
        <Analytics />
      </body>
    </html>
  );
}
