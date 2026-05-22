'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Terminal, Github, Twitter, ShieldCheck } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const tFooter = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const locale = useLocale();
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const homePath = locale === 'zh' ? '/zh' : '/';
  const isDocsPage = pathname ? pathname.includes('/docs') : false;

  return (
    <footer className="border-t border-white/5 bg-[#060816] text-slate-400 py-12 lg:py-16 relative overflow-hidden">
      {/* Decorative Blur Background Precisely matching theme details */}
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-white/5">
          {/* Slogan details */}
          <div className="space-y-4 col-span-1 md:col-span-2">
            <Link href={locale === 'zh' ? '/zh' : '/'} className="flex items-center space-x-1.5">
              <Image src="/logo.png" alt="XPay Labs" width={64} height={64} className="w-16 h-16 object-contain" />
              <span className="text-white font-display font-extrabold text-base tracking-tight italic">
                XPAY <span className="text-[#5B8CFF]">LABS</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm font-sans leading-relaxed">
              {tFooter('slogan')}
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://github.com/yan253319066" target="_blank" rel="noreferrer" className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors" title="yan253319066 GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://x.com/getciteflow" target="_blank" rel="noreferrer" className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors" title="getciteflow on X / Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://t.me/OS_Blockchain" target="_blank" rel="noreferrer" className="p-1.5 rounded-md hover:bg-white/5 text-slate-400 hover:text-white transition-colors" title="Telegram: @OS_Blockchain">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4Z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-mono mb-4 grayscale opacity-80">
              {tFooter('product')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 hover:text-slate-300 transition-colors">
              <li><a href={isDocsPage ? `${homePath}#features` : '#features'} className="hover:text-white transition-colors">{tNav('features')}</a></li>
              <li><a href={isDocsPage ? `${homePath}#chains` : '#chains'} className="hover:text-white transition-colors">{tNav('chains')}</a></li>
              <li><a href={isDocsPage ? `${homePath}#architecture` : '#architecture'} className="hover:text-white transition-colors">{tNav('architecture')}</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-mono mb-4 grayscale opacity-80">
              {tFooter('developers')}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400 hover:text-slate-300 transition-colors">
              <li><Link href={locale === 'zh' ? '/zh/docs' : '/docs'} className="hover:text-white transition-colors">{tNav('docs')}</Link></li>
              <li><a href={isDocsPage ? `${homePath}#api` : '#api'} className="hover:text-white transition-colors">REST API Spec</a></li>
              <li><a href={isDocsPage ? `${homePath}#dev-experience` : '#dev-experience'} className="hover:text-white transition-colors">Container Sandboxing</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Metadata & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 text-xs">
          <div className="space-y-1">
            <p className="text-slate-500 font-sans">
              &copy; {currentYear} XPay Labs. {tFooter('allRights')}
            </p>
            <p className="text-slate-400 font-sans flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#5B8CFF] shrink-0" />
              <span>{tFooter('disclaimer')}</span>
            </p>
          </div>

          <div className="flex space-x-6 text-slate-400 font-sans">
            <Link href={locale === 'zh' ? '/zh/terms' : '/terms'} className="hover:text-white transition-colors">{tFooter('termsOfService')}</Link>
            <Link href={locale === 'zh' ? '/zh/privacy' : '/privacy'} className="hover:text-white transition-colors">{tFooter('privacyPolicy')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
