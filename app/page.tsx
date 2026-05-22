import React from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OpenSourceSection from '../components/OpenSourceSection';
import FeaturesSection from '../components/FeaturesSection';
import MultiChainSection from '../components/MultiChainSection';
import DeploymentSection from '../components/DeploymentSection';
import ApiShowcase from '../components/ApiShowcase';
import DevExperience from '../components/DevExperience';
import UseCases from '../components/UseCases';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import { translations } from '../lib/translations';

export const metadata: Metadata = {
  title: translations.en.meta.title,
  description: translations.en.meta.description,
  keywords: translations.en.meta.keywords,
  alternates: {
    canonical: 'https://www.xpaylabs.com/',
    languages: {
      'en-US': 'https://www.xpaylabs.com/',
      'zh-CN': 'https://www.xpaylabs.com/zh',
    }
  },
  openGraph: {
    title: translations.en.meta.title,
    description: translations.en.meta.description,
    type: 'website',
    url: 'https://www.xpaylabs.com/',
    siteName: 'XPay Labs',
    images: [{ url: 'https://picsum.photos/seed/xpay/1200/630' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.en.meta.title,
    description: translations.en.meta.description,
    images: ['https://picsum.photos/seed/xpay/1200/630'],
  }
};

export default function EnglishHomePage() {
  return (
    <NextIntlClientProvider locale="en" messages={translations.en}>
      <div className="relative overflow-hidden selection:bg-brand-blue/30 text-gray-200">
        
        {/* Dynamic Header */}
        <Header />

        {/* Main Structural Layout items */}
        <main className="min-h-screen relative gradient-bg pt-16">
          
          {/* Core Hero Landing segment containing mockup */}
          <HeroSection />

          {/* Cryptographic sovereignty positioning */}
          <OpenSourceSection />

          {/* 6 responsive features grid layout */}
          <FeaturesSection />

          {/* Multi-chain visual layout networks */}
          <MultiChainSection />

          {/* Topology nodes structure workflows */}
          <DeploymentSection />

          {/* API Sandbox curl block snippets */}
          <ApiShowcase />

          {/* Sandbox workspace game panel */}
          <DevExperience />

          {/* Business cases overview cards */}
          <UseCases />

          {/* Client collapsible questions & Answers */}
          <FaqSection />

          {/* High converting final call block */}
          <CtaSection />

        </main>

        {/* Corporate compliant metadata foot layout */}
        <Footer />

      </div>
    </NextIntlClientProvider>
  );
}
