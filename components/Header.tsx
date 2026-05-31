'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>('');
  const productRef = useRef<HTMLLIElement>(null);
  const compareRef = useRef<HTMLLIElement>(null);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const isZhPage = pathname.startsWith('/zh');
  const homePath = isZhPage ? '/zh' : '/';
  const isDocsPage = pathname.includes('/docs');
  const isHomePage = pathname === '/' || pathname === '/zh';

  const lh = (path: string) => isZhPage ? `/zh${path}` : path;

  const sectionHref = (hash: string) =>
    isHomePage ? hash : `${homePath}${hash}`;

  const sectionLinks = [
    { label: t('features'), href: sectionHref('#features') },
    { label: t('chains'), href: sectionHref('#chains') },
    { label: t('architecture'), href: sectionHref('#architecture') },
    { label: t('api'), href: sectionHref('#api') },
    { label: t('devXp'), href: sectionHref('#dev-experience') },
    { label: t('faq'), href: sectionHref('#faq') },
  ];

  const tF = useTranslations('footerLinks');

  const compareLinks = [
    { label: tF('review'), href: lh('/review') },
    { label: tF('bestSelfHostedGateway'), href: lh('/guides/best-self-hosted-crypto-payment-gateway') },
    { label: tF('vsBitpay'), href: lh('/alternatives/bitpay') },
    { label: tF('vsCoinbaseCommerce'), href: lh('/alternatives/coinbase-commerce') },
    { label: tF('vsNowPayments'), href: lh('/alternatives/nowpayments') },
    { label: tF('vsBtcpayserver'), href: lh('/alternatives/btcpayserver') },
    { label: tF('vsOpenNode'), href: lh('/alternatives/opennode') },
    { label: tF('vsCoinGate'), href: lh('/alternatives/coingate') },
  ];

  const isComparePage = compareLinks.some((l) => pathname === l.href);

  const getLanguageTogglePath = () => {
    if (isZhPage) return pathname.replace(/^\/zh/, '') || '/';
    if (pathname === '/blog') return '/zh';
    return `/zh${pathname}`;
  };

  useEffect(() => {
    if (isDocsPage) return;

    const sectionIds = ['features', 'chains', 'architecture', 'api', 'dev-experience', 'faq'];

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveHash('');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const initTimer = setTimeout(() => {
      handleHashChange();
      handleScroll();
    }, 0);

    return () => {
      observer.disconnect();
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(initTimer);
    };
  }, [isDocsPage]);

  const isActive = (itemHref: string) => {
    if (isDocsPage) return itemHref.includes('/docs');
    if (itemHref.startsWith('#')) return activeHash === itemHref;
    if (itemHref.includes('#')) {
      const parts = itemHref.split('#');
      return activeHash === `#${parts[parts.length - 1]}`;
    }
    return false;
  };

  const handleProductEnter = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setProductOpen(true);
  };

  const handleProductLeave = () => {
    dropdownTimer.current = setTimeout(() => setProductOpen(false), 150);
  };

  const handleCompareEnter = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setCompareOpen(true);
  };

  const handleCompareLeave = () => {
    dropdownTimer.current = setTimeout(() => setCompareOpen(false), 150);
  };

  const closeMobile = () => setMobileMenuOpen(false);

  const anySectionActive = sectionLinks.some((s) => isActive(s.href));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={homePath} className="flex items-center space-x-1.5 group">
              <Image src="/logo.png" alt="XPay Labs" width={64} height={64} className="w-16 h-16 object-contain" />
              <span className="text-white font-display font-black text-xl tracking-tight group-hover:text-brand-cyan transition-colors italic">
                XPay <span className="text-brand-blue not-italic font-bold">Labs</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Product Dropdown */}
            <ul className="flex items-center space-x-6">
              <li
                ref={productRef}
                className="relative"
                onMouseEnter={handleProductEnter}
                onMouseLeave={handleProductLeave}
              >
                <button
                  onClick={() => {
                    if (window.innerWidth < 768) setProductOpen(!productOpen);
                  }}
                  className={`relative py-1.5 px-0.5 font-sans text-sm font-medium transition-colors flex items-center space-x-1 cursor-pointer ${
                    anySectionActive
                      ? 'text-[#5B8CFF]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{t('product')}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productOpen ? 'rotate-180' : ''}`} />
                  {anySectionActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_8px_rgba(91,140,255,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {productOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-48 rounded-xl border border-white/5 bg-[#0D1026]/95 backdrop-blur-xl p-2 space-y-0.5 shadow-2xl"
                      onMouseEnter={handleProductEnter}
                      onMouseLeave={handleProductLeave}
                    >
                      {sectionLinks.map((item) => {
                        const active = isActive(item.href);
                        return (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setProductOpen(false)}
                              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                active
                                  ? 'text-[#5B8CFF] bg-[#5B8CFF]/5'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Docs */}
              <li>
                <Link
                  href={isZhPage ? '/zh/docs' : '/docs'}
                  className={`relative py-1.5 px-0.5 font-sans text-sm font-medium transition-colors ${
                    pathname.includes('/docs') ? 'text-[#5B8CFF]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{t('docs')}</span>
                  {pathname.includes('/docs') && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_8px_rgba(91,140,255,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>

              {/* Compare Dropdown */}
              <li
                ref={compareRef}
                className="relative"
                onMouseEnter={handleCompareEnter}
                onMouseLeave={handleCompareLeave}
              >
                <button
                  onClick={() => {
                    if (window.innerWidth < 768) setCompareOpen(!compareOpen);
                  }}
                  className={`relative py-1.5 px-0.5 font-sans text-sm font-medium transition-colors flex items-center space-x-1 cursor-pointer ${
                    isComparePage
                      ? 'text-[#5B8CFF]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{t('compare')}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${compareOpen ? 'rotate-180' : ''}`} />
                  {isComparePage && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_8px_rgba(91,140,255,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {compareOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-56 rounded-xl border border-white/5 bg-[#0D1026]/95 backdrop-blur-xl p-2 space-y-0.5 shadow-2xl"
                      onMouseEnter={handleCompareEnter}
                      onMouseLeave={handleCompareLeave}
                    >
                      {compareLinks.map((item) => {
                        const active = pathname === item.href;
                        return (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setCompareOpen(false)}
                              className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                                active
                                  ? 'text-[#5B8CFF] bg-[#5B8CFF]/5'
                                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Blog */}
              <li>
                <Link
                  href="/blog"
                  className={`relative py-1.5 px-0.5 font-sans text-sm font-medium transition-colors ${
                    pathname === '/blog' ? 'text-[#5B8CFF]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>Blog</span>
                  {pathname === '/blog' && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_8px_rgba(91,140,255,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>

              {/* Pricing */}
              <li>
                <Link
                  href={lh('/pricing')}
                  className={`relative py-1.5 px-0.5 font-sans text-sm font-medium transition-colors ${
                    pathname === lh('/pricing') ? 'text-[#5B8CFF]' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <span>{t('pricing')}</span>
                  {pathname === lh('/pricing') && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-[-4px] left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue to-brand-cyan shadow-[0_0_8px_rgba(91,140,255,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href={getLanguageTogglePath()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-brand-blue/30 text-xs font-medium transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-brand-blue" />
              <span>{isZhPage ? 'English' : '中文'}</span>
            </Link>

            {/* CTA Button */}
            <Link
              href={isDocsPage ? `${homePath}#dev-experience` : '#dev-experience'}
              className="px-5 py-2 bg-white text-[#060816] rounded-full text-xs font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] text-center tracking-tight"
            >
              {t('cta')}
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center space-x-2">
            <Link
              href={getLanguageTogglePath()}
              className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-brand-blue/30 text-xs font-medium transition-all"
            >
              <Globe className="w-3 h-3 text-brand-blue" />
              <span>{isZhPage ? 'EN' : '中'}</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-all"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-white/5 bg-[#090b1c]/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3 overflow-x-hidden">
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold px-3 pt-2 pb-1 font-mono">
                {t('product')}
              </div>
              {sectionLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => { setProductOpen(false); closeMobile(); }}
                    className={`block px-3 py-2 rounded-lg text-base font-medium transition-all break-words ${
                      active
                        ? 'text-[#5B8CFF] bg-[#5B8CFF]/5 font-semibold'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="border-t border-white/5 my-2" />
              <Link
                href={isZhPage ? '/zh/docs' : '/docs'}
                onClick={closeMobile}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              >
                {t('docs')}
              </Link>
              <div className="text-xs uppercase tracking-widest text-gray-500 font-bold px-3 pt-2 pb-1 font-mono">
                {t('compare')}
              </div>
              {compareLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-all break-words ${
                    pathname === item.href
                      ? 'text-[#5B8CFF] bg-[#5B8CFF]/5 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/blog"
                onClick={closeMobile}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              >
                Blog
              </Link>
              <Link
                href={lh('/pricing')}
                onClick={closeMobile}
                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5"
              >
                {t('pricing')}
              </Link>
              <div className="pt-3 border-t border-white/5 flex flex-col space-y-3 px-3">
                <Link
                  href={isDocsPage ? `${homePath}#dev-experience` : '#dev-experience'}
                  onClick={closeMobile}
                  className="w-full text-center py-2.5 px-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple text-white font-semibold text-sm transition-all break-words"
                >
                  {t('cta')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}