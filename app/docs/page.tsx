import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Terminal, Shield, Book, Info, Copy, Check, Server, HardDrive, Key, ArrowLeft, RefreshCw, Layers } from 'lucide-react';
import { NextIntlClientProvider } from 'next-intl';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { translations } from '../../lib/translations';

export const metadata: Metadata = {
  title: 'Documentation — Developer Infrastructure Guide',
  description: 'Integrate and deploy the self-hosted XPay Labs blockchain checkout gateways. Steps, configuration scripts, Docker setup, and environment specifications.',
  alternates: {
    canonical: 'https://www.xpaylabs.com/docs',
    languages: {
      'x-default': 'https://www.xpaylabs.com/docs',
      'en-US': 'https://www.xpaylabs.com/docs',
      'zh-CN': 'https://www.xpaylabs.com/zh/docs',
    }
  },
  openGraph: {
    title: 'XPay Labs — Developer Infrastructure Documentation',
    description: 'Integrate and deploy the self-hosted XPay Labs blockchain checkout gateways. Steps, configuration scripts, Docker setup, and environment specifications.',
    url: 'https://www.xpaylabs.com/docs',
  },
};

export default function EnglishDocsPage() {
  return (
    <NextIntlClientProvider locale="en" messages={translations.en}>
      <div className="relative min-h-screen bg-[#040612] text-gray-200">
        
        {/* Shared Nav Head */}
        <Header />

        {/* Docs Layout spacing */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Sidebar Guide Links (col span 3) */}
            <aside className="lg:col-span-3 space-y-6 text-left hidden lg:block">
              <div className="space-y-1.5 p-1">
                <h3 className="text-xs uppercase font-bold tracking-wider text-gray-500 font-mono">
                  GETTING STARTED
                </h3>
                <ul className="space-y-1 text-sm font-sans">
                  <li><a href="#introduction" className="block py-1.5 text-brand-cyan font-semibold border-l-2 border-brand-cyan pl-3">Introduction</a></li>
                  <li><a href="#architecture" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">Sovereign Architecture</a></li>
                  <li><a href="#quickstart" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">Quickstart Manifesto</a></li>
                </ul>
              </div>

              <div className="space-y-1.5 p-1">
                <h3 className="text-xs uppercase font-bold tracking-wider text-gray-500 font-mono">
                  CONFIGURATION
                </h3>
                <ul className="space-y-1 text-sm font-sans">
                  <li><a href="#docker" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">Docker Deployment</a></li>
                  <li><a href="#env-vars" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">Environment Variables</a></li>
                  <li><a href="#webhooks-doc" className="block py-1.5 text-gray-500 hover:text-white hover:border-l pl-3 transition-all">HMAC Webhooks Spec</a></li>
                </ul>
              </div>
            </aside>

            {/* Main Docs content area (col span 9) */}
            <main className="lg:col-span-9 space-y-10 text-left border-l border-white/5 lg:pl-10">
              
              {/* Quick Back Header */}
              <div className="flex items-center space-x-2 text-xs font-mono text-gray-500 hover:text-white transition-colors pb-4 border-b border-white/5">
                <ArrowLeft className="w-4 h-4" />
                <Link href="/">Back to Merchant Hub</Link>
              </div>

              {/* Content: Intro */}
              <section id="introduction" className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-brand-cyan/10 border border-brand-cyan/20 px-2.5 py-1 rounded text-xs font-bold text-brand-cyan uppercase tracking-wide font-mono">
                  <Book className="w-3.5 h-3.5" />
                  <span>SPEC V1.0</span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl font-display font-medium text-white tracking-tight leading-none">
                  Developer Infrastructure Guide
                </h1>
                
                <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base">
                  Welcome to XPay Labs. This deployment documentation will guide you through spinning up the core multi-chain self-hosted payment node as a secure Docker container (compatible with VPS hosts, AWS, Google Cloud Run, and Kubernetes clusters). With our provided Docker Compose templates, you can easily launch the gateway, frontend checkout, indexing databases, and queues concurrently in a single command.
                </p>
              </section>

              {/* Quickstart segment */}
              <section id="quickstart" className="space-y-4 pt-4 border-t border-white/5">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white">
                  Sovereign Key Setup Philosophy
                </h2>
                <p className="text-[#9ea4c2] text-sm leading-relaxed font-sans">
                  XPay Labs relies on mathematical key derivation algorithms. For every created customer invoice session, our indexing process derives a unique ephemeral public address derived from your node seed file inside memory. 
                </p>
                <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 text-xs text-gray-400 space-y-1">
                  <div className="font-bold text-white flex items-center space-x-1">
                    <Shield className="w-3.5 h-3.5 text-orange-400" />
                    <span>CRITICAL INFRASTRUCTURE DIRECTION</span>
                  </div>
                  <div>XPay Labs NEVER copies keys to external datacenters. All mnemonic codes are loaded exclusively inside container boundaries. Back up your node seeds securely off-chain.</div>
                </div>
              </section>

              {/* Docker setups */}
              <section id="docker" className="space-y-4 pt-4 border-t border-white/5">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white">
                  Docker Compose Orchestration
                </h2>
                <p className="text-[#9ea4c2] text-sm font-sans">
                  Copy this microservice yaml skeleton directly to your server directory to initiate core deployment:
                </p>

                <div className="p-4 rounded-2xl bg-[#030510] border border-white/8 text-[11px] font-mono leading-relaxed text-gray-300 relative">
                  <pre>
  {`version: '3.8'
  services:
    xpay-core:
      image: xpaylabs/core:v1.0.0
      container_name: xpay_core_network
      restart: always
      ports:
        - "3010:3010"
      environment:
        - NODE_ENV=production
        - XPAY_KEY_SEED=your_private_node_generation_mnemonic
        - XPAY_TRON_PROVIDER=https://api.trongrid.io
        - XPAY_EVM_PROVIDER=https://eth-mainnet.g.alchemy.com/v2/your_key
        - XPAY_HMAC_SECRET=your_signing_secret_for_webhook_verification
      volumes:
        - ./data:/app/db`}
                  </pre>
                </div>
              </section>

              {/* Env parameters guide */}
              <section id="env-vars" className="space-y-4 pt-4 border-t border-white/5">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-white">
                  Environment Variables Reference
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border-collapse border border-white/5">
                    <thead>
                      <tr className="bg-[#0b0e25] border-b border-white/8 text-gray-400">
                        <th className="p-3">Variable Key</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Mandatory</th>
                        <th className="p-3">Functional Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-gray-300">
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">XPAY_KEY_SEED</td>
                        <td className="p-3">String</td>
                        <td className="p-3 text-red-400">YES</td>
                        <td className="p-3 font-sans">High-entropy cryptographic BIP-39 root seed used to safely derive unique invoice deposit keys.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">XPAY_HMAC_SECRET</td>
                        <td className="p-3">String</td>
                        <td className="p-3 text-red-400">YES</td>
                        <td className="p-3 font-sans">Cryptographic HMAC hash key to seal and authenticate outgoing payment payloads.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">XPAY_TRON_RPC</td>
                        <td className="p-3">URL</td>
                        <td className="p-3 text-gray-500">OPTIONAL</td>
                        <td className="p-3 font-sans">Provider link used to connect to TRON blockchain. Defaults to public Trongrid node.</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-bold text-brand-cyan">XPAY_EVM_RPC</td>
                        <td className="p-3">URL</td>
                        <td className="p-3 text-gray-500">OPTIONAL</td>
                        <td className="p-3 font-sans">Any Standard EVM network RPC node used to track ERC-20 payment flow.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

            </main>

          </div>
        </div>

        {/* Shared Foot */}
        <Footer />

      </div>
    </NextIntlClientProvider>
  );
}
