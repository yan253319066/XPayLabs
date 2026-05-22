import type {Metadata} from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'XPay Labs — Self-hosted Crypto Payment Infrastructure',
  description: 'Open-source and self-hosted crypto payment infrastructure supporting TRON, EVM chains, and SUI. Merchant-first, non-custodial gateway with Webhooks and API hooks.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark antialiased`}>
      <body className="bg-[#060816] text-gray-200 min-h-screen selection:bg-indigo-500/30 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
