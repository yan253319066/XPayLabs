'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check, Lock, Code2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

type TabType = 'curl' | 'json' | 'node';

export default function ApiShowcase() {
  const t = useTranslations('apiShowcase');
  const tL = useTranslations('apiShowcaseLabels');
  const [activeTab, setActiveTab] = useState<TabType>('curl');
  const [copiedCode, setCopiedCode] = useState(false);

  const codeBlocks: Record<TabType, string> = {
    curl: `curl -X POST "http://your-gateway:3010/v1/order/createCollection" \
  -H "Content-Type: application/json" \
  -d '{
    "sign": "a1b2c3d4e5f67890abcdef1234567890abcdef1234567890abcdef1234567890",
    "timestamp": 1717000000,
    "nonce": "550e8400-e29b-41d4-a716-446655440000",
    "data": {
      "amount": "250.00",
      "symbol": "USDT",
      "chain": "TRON",
      "orderId": "merchant_order_001"
    }
  }'`,
    json: `{
  "sign": "a1b2c3d4e5f67890abcdef...",
  "timestamp": 1717000000,
  "nonce": "550e8400-e29b-41d4-a716-446655440000",
  "data": {
    "amount": "250.00",
    "symbol": "USDT",
    "chain": "TRON",
    "orderId": "merchant_order_001"
  }
}`,
    node: `import crypto from "crypto";

const GATEWAY_URL = "http://your-gateway:3010";
const MERCHANT_TOKEN = "your-merchant-token";

function signRequest(data) {
  return crypto
    .createHmac("sha256", MERCHANT_TOKEN)
    .update(JSON.stringify(data), "utf8")
    .digest("hex");
}

const data = {
  amount: "250.00",
  symbol: "USDT",
  chain: "TRON",
  orderId: "merchant_order_001",
};

const payload = {
  sign: signRequest(data),
  timestamp: Math.floor(Date.now() / 1000),
  nonce: crypto.randomUUID(),
  data,
};

const response = await fetch(
  \`\${GATEWAY_URL}/v1/order/createCollection\`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }
);

const result = await response.json();
console.log("Address:", result.data.address);
console.log("Pay URL:", result.data.paymentUrl);`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeBlocks[activeTab]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderHighlightedCode = () => {
    if (activeTab === 'curl') {
      return (
        <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
          <span className="text-brand-purple">curl</span> <span className="text-brand-blue">-X</span> <span className="text-brand-cyan">POST</span> <span className="text-teal-400">{"\"http://your-gateway:3010/v1/order/createCollection\""}</span> \<br />
          &nbsp;&nbsp;<span className="text-brand-blue">-H</span> <span className="text-teal-400">{"\"Content-Type: application/json\""}</span> \<br />
          &nbsp;&nbsp;<span className="text-brand-blue">-d</span> <span className="text-gray-400">{"'{"}</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"sign\""}</span>: <span className="text-teal-300">{"\"a1b2c3d4e5f6...\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"timestamp\""}</span>: <span className="text-purple-400">1717000000</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"nonce\""}</span>: <span className="text-teal-300">{"\"550e8400-e29b-41d4-a716-446655440000\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"data\""}</span>: <span className="text-gray-500">{"{"}</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"amount\""}</span>: <span className="text-teal-300">{"\"250.00\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"symbol\""}</span>: <span className="text-teal-300">{"\"USDT\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"chain\""}</span>: <span className="text-teal-300">{"\"TRON\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"orderId\""}</span>: <span className="text-teal-300">{"\"merchant_order_001\""}</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">{"}"}</span><br />
          &nbsp;&nbsp;<span className="text-gray-400">{"}'"}</span>
        </code>
      );
    }
    if (activeTab === 'json') {
      return (
        <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
          <span className="text-gray-500">{"{"}</span><br />
          &nbsp;&nbsp;<span className="text-brand-cyan">{"\"sign\""}</span>: <span className="text-teal-300">{"\"a1b2c3d4e5f67890abcdef...\""}</span>,<br />
          &nbsp;&nbsp;<span className="text-brand-cyan">{"\"timestamp\""}</span>: <span className="text-purple-400">1717000000</span>,<br />
          &nbsp;&nbsp;<span className="text-brand-cyan">{"\"nonce\""}</span>: <span className="text-teal-300">{"\"550e8400-e29b-41d4-a716-446655440000\""}</span>,<br />
          &nbsp;&nbsp;<span className="text-brand-cyan">{"\"data\""}</span>: <span className="text-gray-500">{"{"}</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"amount\""}</span>: <span className="text-teal-300">{"\"250.00\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"symbol\""}</span>: <span className="text-teal-300">{"\"USDT\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"chain\""}</span>: <span className="text-teal-300">{"\"TRON\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"orderId\""}</span>: <span className="text-teal-300">{"\"merchant_order_001\""}</span><br />
          &nbsp;&nbsp;<span className="text-gray-500">{"}"}</span><br />
          <span className="text-gray-500">{"}"}</span>
        </code>
      );
    }
    return (
      <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
        <span className="text-brand-purple">import</span> <span className="text-gray-300">crypto</span> <span className="text-brand-purple">from</span> <span className="text-teal-400">{"\"crypto\""}</span>;<br /><br />
        <span className="text-brand-purple">const</span> <span className="text-gray-300">GATEWAY_URL</span> = <span className="text-teal-400">{"\"http://your-gateway:3010\""}</span>;<br />
        <span className="text-brand-purple">const</span> <span className="text-gray-300">MERCHANT_TOKEN</span> = <span className="text-teal-400">{"\"your-merchant-token\""}</span>;<br /><br />
        <span className="text-brand-purple">function</span> <span className="text-blue-400">signRequest</span><span className="text-gray-500">(</span><span className="text-gray-300">data</span><span className="text-gray-500">)</span> <span className="text-gray-500">{"{"}</span><br />
        &nbsp;&nbsp;<span className="text-brand-purple">return</span> <span className="text-gray-300">crypto</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-blue-400">createHmac</span><span className="text-gray-500">(</span><span className="text-teal-400">{"\"sha256\""}</span>, <span className="text-gray-300">MERCHANT_TOKEN</span><span className="text-gray-500">)</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-blue-400">update</span><span className="text-gray-500">(</span><span className="text-blue-400">JSON</span>.<span className="text-blue-400">stringify</span><span className="text-gray-500">(</span><span className="text-gray-300">data</span><span className="text-gray-500">)</span>, <span className="text-teal-400">{"\"utf8\""}</span><span className="text-gray-500">)</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;.<span className="text-blue-400">digest</span><span className="text-gray-500">(</span><span className="text-teal-400">{"\"hex\""}</span><span className="text-gray-500">);</span><br />
        <span className="text-gray-500">{"}"}</span><br /><br />
        <span className="text-brand-purple">const</span> <span className="text-gray-300">data</span> <span className="text-gray-500">=</span> <span className="text-gray-500">{"{"}</span><br />
        &nbsp;&nbsp;<span className="text-brand-cyan">amount</span>: <span className="text-teal-400">{"\"250.00\""}</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">symbol</span>: <span className="text-teal-400">{"\"USDT\""}</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">chain</span>: <span className="text-teal-400">{"\"TRON\""}</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">orderId</span>: <span className="text-teal-400">{"\"merchant_order_001\""}</span>,<br />
        <span className="text-gray-500">{"};"}</span><br /><br />
        <span className="text-brand-purple">const</span> <span className="text-gray-300">payload</span> <span className="text-gray-500">=</span> <span className="text-gray-500">{"{"}</span><br />
        &nbsp;&nbsp;<span className="text-brand-cyan">sign</span>: <span className="text-blue-400">signRequest</span><span className="text-gray-500">(</span><span className="text-gray-300">data</span><span className="text-gray-500">)</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">timestamp</span>: <span className="text-blue-400">Math</span>.<span className="text-blue-400">floor</span><span className="text-gray-500">(</span><span className="text-blue-400">Date</span>.<span className="text-blue-400">now</span><span className="text-gray-500">()</span> / <span className="text-purple-400">1000</span><span className="text-gray-500">)</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">nonce</span>: <span className="text-gray-300">crypto</span>.<span className="text-blue-400">randomUUID</span><span className="text-gray-500">()</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">data</span>,<br />
        <span className="text-gray-500">{"};"}</span><br /><br />
        <span className="text-brand-purple">const</span> <span className="text-gray-300">response</span> <span className="text-gray-500">=</span> <span className="text-brand-purple">await</span> <span className="text-blue-400">fetch</span><span className="text-gray-500">(</span><br />
        &nbsp;&nbsp;<span className="text-teal-400">{"`${GATEWAY_URL}/v1/order/createCollection`"}</span>,<br />
        &nbsp;&nbsp;<span className="text-gray-500">{"{"}</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">method</span>: <span className="text-teal-400">{"\"POST\""}</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">headers</span>: <span className="text-gray-500">{"{"}</span> <span className="text-teal-400">{"\"Content-Type\""}</span>: <span className="text-teal-400">{"\"application/json\""}</span> <span className="text-gray-500">{"}"}</span>,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">body</span>: <span className="text-blue-400">JSON</span>.<span className="text-blue-400">stringify</span><span className="text-gray-500">(</span><span className="text-gray-300">payload</span><span className="text-gray-500">)</span>,<br />
        &nbsp;&nbsp;<span className="text-gray-500">{"}"}</span><br />
        <span className="text-gray-500">);</span><br /><br />
        <span className="text-brand-purple">const</span> <span className="text-gray-300">result</span> <span className="text-gray-500">=</span> <span className="text-brand-purple">await</span> <span className="text-gray-300">response</span>.<span className="text-blue-400">json</span><span className="text-gray-500">();</span><br />
        <span className="text-gray-400">{"console.log(\"Address:\", result.data.address);"}</span><br />
        <span className="text-gray-400">{"console.log(\"Pay URL:\", result.data.paymentUrl);"}</span>
      </code>
    );
  };

  return (
    <section id="api" className="py-20 bg-[#060816] relative overflow-hidden">
      {/* Background Glow Effects from the team theme */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Component Header text info */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest mb-2 font-mono">
            <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-pulse"></span>
            {t('badge')}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white italic bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 leading-tight">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Console Box wrapper */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Double-layered container precisely matching theme styling */}
          <div className="bg-gradient-to-b from-[#5B8CFF]/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-1">
            <div className="relative rounded-[22px] border border-white/10 bg-[#0A0D1F] overflow-hidden shadow-2xl flex flex-col">
              
              {/* Console Control Tab header */}
              <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-0">
                
                {/* Fake top bar items */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2.5 h-2.5 bg-red-500/80 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full" />
                    <span className="w-2.5 h-2.5 bg-green-500/80 rounded-full" />
                  </div>
                  {/* Visual tabs selectors */}
                  <div className="flex items-center space-x-1">
                    {(['curl', 'json', 'node'] as TabType[]).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1.5 rounded-md text-xs font-mono font-bold transition-all ${
                          activeTab === tab
                            ? 'bg-white/5 text-white border border-white/8'
                            : 'text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {tab === 'curl' && t('tabs.curl')}
                        {tab === 'json' && t('tabs.json')}
                        {tab === 'node' && t('tabs.node')}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Action Toolbar copy buttons */}
                <div className="flex items-center justify-end">
                  <button
                    onClick={handleCopyCode}
                    className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-mono flex items-center space-x-1.5 transition-all"
                    title={tL('copy')}
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{tL('copied')}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>{tL('copy')}</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* Screen layout block */}
              <div className="p-5 sm:p-7 overflow-auto custom-scrollbar select-all max-h-[400px] h-[340px] bg-[#060816]">
                {renderHighlightedCode()}
              </div>

              {/* Verification marker */}
              <div className="bg-[#050716] px-5 py-2.5 border-t border-white/5 flex items-center justify-between text-[10px] uppercase font-mono text-slate-500">
                <span className="flex items-center space-x-1.5 font-bold">
                  <Lock className="w-3.5 h-3.5 text-brand-cyan" />
                  <span>{tL('sslSecured')}</span>
                </span>
                <span className="hidden sm:inline font-bold">{tL('prodReady')}</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
