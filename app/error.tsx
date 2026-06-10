'use client';

import React from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-[#060816] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
          <span className="text-red-400 text-2xl font-bold">!</span>
        </div>
        <h1 className="text-2xl font-display font-medium text-white mb-2">
          Something went wrong
        </h1>
        <p className="text-sm text-gray-400 font-sans mb-8">
          An unexpected error occurred. Please try again or contact support.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center px-6 py-3 rounded-xl bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold text-sm transition-all"
          >
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 rounded-xl glass-panel hover:bg-white/5 text-gray-300 font-semibold text-sm transition-all"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
