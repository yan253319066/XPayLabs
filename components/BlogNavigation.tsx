'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavLink {
  href: string;
  title: string;
}

interface BlogNavigationProps {
  prev: NavLink | null;
  next: NavLink | null;
  prevLabel?: string;
  nextLabel?: string;
}

export default function BlogNavigation({ prev, next, prevLabel = 'Previous Post', nextLabel = 'Next Post' }: BlogNavigationProps) {
  if (!prev && !next) return null;

  return (
    <section className="mb-16">
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        {prev ? (
          <Link
            href={prev.href}
            className="glass-panel rounded-2xl p-6 sm:p-8 flex-1 hover:bg-white/[0.04] transition-all group text-left"
          >
            <div className="flex items-center gap-2 text-xs text-gray-500 font-mono mb-2">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{prevLabel}</span>
            </div>
            <p className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors line-clamp-2">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {next ? (
          <Link
            href={next.href}
            className="glass-panel rounded-2xl p-6 sm:p-8 flex-1 hover:bg-white/[0.04] transition-all group text-right"
          >
            <div className="flex items-center justify-end gap-2 text-xs text-gray-500 font-mono mb-2">
              <span>{nextLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
            <p className="text-sm font-display font-medium text-white group-hover:text-brand-blue transition-colors line-clamp-2">
              {next.title}
            </p>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </section>
  );
}
