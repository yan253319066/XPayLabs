import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 — Page Not Found | XPay Labs',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#060816] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
          <span className="text-amber-400 text-2xl font-bold">404</span>
        </div>
        <h1 className="text-2xl font-display font-medium text-white mb-2">
          Page not found
        </h1>
        <p className="text-sm text-gray-400 font-sans mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-sm transition-all"
          >
            Go home
          </Link>
          <Link
            href="https://docs.xpaylabs.com/"
            className="inline-flex items-center px-6 py-3 rounded-xl glass-panel hover:bg-white/5 text-gray-300 font-semibold text-sm transition-all"
          >
            View docs
          </Link>
        </div>
      </div>
    </div>
  );
}
