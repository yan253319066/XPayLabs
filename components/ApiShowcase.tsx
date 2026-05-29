'use client';

import React, { useState } from 'react';
import { Terminal, Copy, Check, Lock, Code2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

type TabType = 'curl' | 'json' | 'node';

export default function ApiShowcase() {
  const t = useTranslations('apiShowcase');
  const [activeTab, setActiveTab] = useState<TabType>('curl');
  const [copiedCode, setCopiedCode] = useState(false);

  const codeBlocks: Record<TabType, string> = {
    curl: `curl -X POST "https://gateway.yourdomain.com/v1/payments" \\
  -H "Authorization: Bearer xpay_live_8f3a9d7219bc" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": "100.00",
    "currency": "USDT",
    "chain": "TRON",
    "order_id": "order_783120",
    "callback_url": "https://api.merchant.com/v1/webhooks/xpay"
  }'`,
    json: `{
  "amount": "100.00",
  "currency": "USDT",
  "chain": "TRON",
  "data": {
    "invoice_id": "inv_trc20_3a8b2df9",
    "deposit_address": "TYpSq7f8MubE8bK6vG7m8F7WbA9c3DxE1F",
    "expired_at": 1747833120,
    "callback_payload_sign": "sha256_hmac_signature_proof"
  }
}`,
    node: `import { XPayGateway } from '@xpaylabs/sdk';
 
 const gateway = new XPayGateway({
   secretKey: 'xpay_live_8f3a9d7219bc',
   endpoint: 'https://gateway.yourdomain.com'
 });
 
 const invoice = await gateway.payments.create({
   amount: 100.00,
   currency: 'USDT',
   chain: 'TRON',
   orderId: 'order_783120'
 });
 
 console.log(\`Deposit target generated: \${invoice.depositAddress}\`);`
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
          <span className="text-brand-purple">curl</span> <span className="text-brand-blue">-X</span> <span className="text-brand-cyan">POST</span> <span className="text-teal-400">{"\"https://gateway.yourdomain.com/v1/payments\""}</span> \<br />
          &nbsp;&nbsp;<span className="text-brand-blue">-H</span> <span className="text-teal-400">{"\"Authorization: Bearer xpay_live_8f3a9d7219bc\""}</span> \<br />
          &nbsp;&nbsp;<span className="text-brand-blue">-H</span> <span className="text-teal-400">{"\"Content-Type: application/json\""}</span> \<br />
          &nbsp;&nbsp;<span className="text-brand-blue">-d</span> <span className="text-gray-400">{"'{"}</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"amount\""}</span>: <span className="text-teal-300">{"\"100.00\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"currency\""}</span>: <span className="text-teal-300">{"\"USDT\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"chain\""}</span>: <span className="text-teal-300">{"\"TRON\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"order_id\""}</span>: <span className="text-teal-300">{"\"order_783120\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"callback_url\""}</span>: <span className="text-teal-300">{"\"https://api.merchant.com/v1/webhooks/xpay\""}</span><br />
          &nbsp;&nbsp;<span className="text-gray-400">{"}'"}</span>
        </code>
      );
    }
    if (activeTab === 'json') {
      return (
        <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
          <span className="text-gray-500">{"{"}</span><br />
          &nbsp;&nbsp;<span className="text-brand-cyan">{"\"amount\""}</span>: <span className="text-teal-300">{"\"100.00\""}</span>,<br />
          &nbsp;&nbsp;<span className="text-brand-cyan">{"\"currency\""}</span>: <span className="text-teal-300">{"\"USDT\""}</span>,<br />
          &nbsp;&nbsp;<span className="text-brand-cyan">{"\"chain\""}</span>: <span className="text-teal-300">{"\"TRON\""}</span>,<br />
          &nbsp;&nbsp;<span className="text-brand-cyan">{"\"data\""}</span>: <span className="text-gray-500">{"{"}</span><br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"invoice_id\""}</span>: <span className="text-teal-300">{"\"inv_trc20_3a8b2df9\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"deposit_address\""}</span>: <span className="text-teal-300">{"\"TYpSq7f8MubE8bK6vG7m8F7WbA9c3DxE1F\""}</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"expired_at\""}</span>: <span className="text-purple-400">1747833120</span>,<br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-brand-cyan">{"\"callback_payload_sign\""}</span>: <span className="text-teal-300">{"\"sha256_hmac_signature_proof\""}</span><br />
          &nbsp;&nbsp;<span className="text-gray-500">{"}"}</span><br />
          <span className="text-gray-500">{"}"}</span>
        </code>
      );
    }
    return (
      <code className="text-gray-300 font-mono text-[11px] sm:text-xs leading-relaxed block whitespace-pre overflow-x-auto">
        <span className="text-brand-purple">import</span> <span className="text-gray-300">{"{"}</span> <span className="text-brand-cyan">XPayGateway</span> <span className="text-gray-300">{"}"}</span> <span className="text-brand-purple">from</span> <span className="text-teal-400">{"'@xpaylabs/sdk'"}</span>;<br /><br />
        <span className="text-brand-purple">const</span> <span className="text-gray-300">gateway</span> = <span className="text-brand-purple">new</span> <span className="text-blue-400">XPayGateway</span><span className="text-gray-500">({"{"})</span><br />
        &nbsp;&nbsp;<span className="text-brand-cyan">secretKey</span>: <span className="text-teal-400">{"'xpay_live_8f3a9d7219bc'"}</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">endpoint</span>: <span className="text-teal-400">{"'https://gateway.yourdomain.com'"}</span><br />
        <span className="text-gray-500">{"});"}</span><br /><br />
        <span className="text-brand-purple">const</span> <span className="text-gray-300">invoice</span> = <span className="text-brand-purple">await</span> <span className="text-gray-300">gateway</span>.<span className="text-blue-400">payments</span>.<span className="text-blue-400">create</span><span className="text-gray-500">({"{"})</span><br />
        &nbsp;&nbsp;<span className="text-brand-cyan">amount</span>: <span className="text-purple-400">100.00</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">currency</span>: <span className="text-teal-400">{"'USDT'"}</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">chain</span>: <span className="text-teal-400">{"'TRON'"}</span>,<br />
        &nbsp;&nbsp;<span className="text-brand-cyan">orderId</span>: <span className="text-teal-400">{"'order_783120'"}</span><br />
        <span className="text-gray-500">{"});"}</span><br /><br />
        <span className="text-gray-400">{"console.log(`Deposit target generated: ${invoice.depositAddress}`);"}</span>
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
                    title="Copy payload block"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
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
                  <span>SSL SECURED TLS_AES_256_GCM_SHA384 CLIENT AUTHORIZATION</span>
                </span>
                <span className="hidden sm:inline font-bold">PROD READY API CLIENT</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
