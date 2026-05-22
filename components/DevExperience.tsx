'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Terminal, ShieldCheck, Key, Play, Cpu, 
  ChevronRight, ArrowRight, RefreshCw, Layers, 
  Sparkles, Code, CheckCircle, Smartphone
} from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

type StepIndex = 0 | 1 | 2 | 3;

export default function DevExperience() {
  const t = useTranslations('devXp');
  const locale = useLocale();
  const [activeStep, setActiveStep] = useState<StepIndex>(0);
  
  // Interactive variables
  const [generatedKey, setGeneratedKey] = useState<string>('');
  const [isGeneratingKey, setIsGeneratingKey] = useState(false);
  
  const [paymentAmount, setPaymentAmount] = useState<string>('150.00');
  const [paymentCurrency, setPaymentCurrency] = useState<string>('USDT');
  const [paymentChain, setPaymentChain] = useState<'TRON' | 'ETH' | 'SUI'>('TRON');
  const [paymentAddress, setPaymentAddress] = useState<string>('');
  const [isCreatingPayment, setIsCreatingPayment] = useState(false);

  const [receivedWebhook, setReceivedWebhook] = useState(false);
  const [isFiringWebhook, setIsFiringWebhook] = useState(false);

  const [settledFunds, setSettledFunds] = useState(false);
  const [isSweeping, setIsSweeping] = useState(false);
  const [sweepTx, setSweepTx] = useState('');

  const steps = t.raw('steps') as Array<{ num: string; title: string; desc: string }>;

  const handleGenerateKey = () => {
    setIsGeneratingKey(true);
    setGeneratedKey('');
    setTimeout(() => {
      setGeneratedKey(`xpay_live_${Math.random().toString(36).substring(2, 14)}_${Math.random().toString(36).substring(2, 6)}`);
      setIsGeneratingKey(false);
    }, 1000);
  };

  const handleCreatePayment = () => {
    setIsCreatingPayment(true);
    setPaymentAddress('');
    setTimeout(() => {
      const addresses = {
        TRON: 'TYpSq7f8MubE8bK6vG7m8F7WbA9c3DxE1F',
        ETH: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
        SUI: '0x6a2c2ffab3f3bc6da1d3ad8a5be7f2bc29ffb19b6623e1de1c07ee1c0a0c7edb'
      };
      setPaymentAddress(addresses[paymentChain]);
      setIsCreatingPayment(false);
      // Automatically unlock next step
      setActiveStep(2);
    }, 1200);
  };

  const handleFireWebhook = () => {
    setIsFiringWebhook(true);
    setReceivedWebhook(false);
    setTimeout(() => {
      setReceivedWebhook(true);
      setIsFiringWebhook(false);
      // Automatically unlock next step
      setActiveStep(3);
    }, 1500);
  };

  const handleSweepAssets = () => {
    setIsSweeping(true);
    setSettledFunds(false);
    setTimeout(() => {
      setSweepTx(`0x${Math.random().toString(16).substring(2, 10)}93e2b10a24194098fb${Math.random().toString(16).substring(2, 10)}fae03e`);
      setSettledFunds(true);
      setIsSweeping(false);
    }, 1800);
  };

  const handleResetSandbox = () => {
    setGeneratedKey('');
    setPaymentAddress('');
    setReceivedWebhook(false);
    setSettledFunds(false);
    setSweepTx('');
    setActiveStep(0);
  };

  // Generate webhooks payloads on-the-fly depending on user custom details
  const getDynamicWebhookJson = () => {
    return `{
  "event": "invoice.payment_received",
  "created_at": 1747833120,
  "merchant_id": "mrc_93a7f28bc",
  "data": {
    "invoice_hash": "inv_trc20_3f2b901a",
    "amount_received": "${paymentAmount}",
    "currency": "${paymentCurrency}",
    "chain": "${paymentChain}",
    "deposit_address": "${paymentAddress || 'TYpSq7f...xE1F'}",
    "tx_hash": "0xfe3b88d27cb10fc38..."
  }
}`;
  };

  return (
    <section id="dev-experience" className="py-20 bg-[#060816] relative overflow-hidden">
      {/* Background Glow Effects precisely matching theme details */}
      <div className="absolute top-[-120px] right-[-120px] w-[500px] h-[500px] bg-[#5B8CFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#7C4DFF] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title details */}
        <div className="text-center max-w-3xl mx-auto space-y-4 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5B8CFF]/10 border border-[#5B8CFF]/20 text-[#5B8CFF] text-xs font-bold uppercase tracking-widest mb-2 font-mono">
            <span className="w-1.5 h-1.5 bg-[#5B8CFF] rounded-full animate-pulse"></span>
            <span>{t('badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-slate-400 italic leading-tight">
            {t('title')}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Interactive layout side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left column: 4 phase vertical steppers */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(idx as StepIndex)}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 w-full flex items-start space-x-4 ${
                    isSelected 
                      ? 'bg-[#0A0D1F] border-brand-blue/30 shadow-[0_0_20px_rgba(91,140,255,0.1)] scale-[1.01]' 
                      : 'bg-[#0A0D1F]/30 border-white/5 hover:bg-[#0A0D1F]/50 hover:border-white/10'
                  }`}
                >
                  {/* Phase Numeric marker */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 ${
                    isSelected 
                      ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/30' 
                      : 'bg-white/5 text-gray-500'
                  }`}>
                    {step.num}
                  </div>

                  <div className="space-y-1">
                    <h3 className={`text-sm sm:text-base font-semibold font-display ${
                      isSelected ? 'text-white' : 'text-gray-400'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-xs sm:text-sm font-sans leading-relaxed ${
                      isSelected ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Sandbox reset trigger button */}
            <button
              onClick={handleResetSandbox}
              className="py-3 px-4 rounded-xl border border-white/5 bg-[#030510] hover:bg-white/5 text-gray-400 hover:text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{locale === 'zh' ? '重启交互式体验沙盒' : 'Restart Interactive Sandbox'}</span>
            </button>
          </div>

          {/* Right Column: Dynamic interactive Sandbox simulation screen */}
          <div className="lg:col-span-7 relative flex items-stretch">
            
            {/* Visual glow backdrop overlay precisely matching the double-layered cockpit in theme */}
            <div className="bg-gradient-to-b from-[#5B8CFF]/5 to-transparent rounded-3xl border border-white/5 backdrop-blur-sm p-1 w-full flex flex-col">
              <div className="w-full h-full bg-[#0A0D1F] rounded-[22px] border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden">
                
                {/* Sandbox Monitor Head tab */}
                <div className="bg-white/5 px-5 py-3 border-b border-white/5 flex items-center justify-between font-mono text-[10px]">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-gray-400 font-bold uppercase">XPAY CONSOLE V1.0_PROMPT</span>
                </div>
                <span className="text-gray-500">SANDBOX SIMULATOR</span>
              </div>

              {/* Dynamic Sandbox Display Body */}
              <div className="p-6 flex-grow flex items-center justify-center">
                <AnimatePresence mode="wait">
                  
                  {/* STEP 1: API KEYS GENERATION */}
                  {activeStep === 0 && (
                    <motion.div
                      key="step-0"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="w-full space-y-6"
                    >
                      <div className="space-y-2 text-center">
                        <Key className="w-8 h-8 text-brand-purple mx-auto animate-bounce" />
                        <h4 className="text-white text-base font-semibold font-display">
                          {t('generator.title')}
                        </h4>
                      </div>

                      {/* Code Generator Display */}
                      <div className="bg-[#040510] p-4 rounded-xl border border-white/5 space-y-3">
                        <span className="text-[10px] text-gray-500 font-bold font-mono tracking-wider block uppercase">
                          {t('generator.activeKey')}
                        </span>
                        
                        <div className="flex items-center justify-between text-xs font-mono text-gray-300 bg-[#07091d] py-2 px-3 rounded-lg border border-white/5 break-all">
                          {isGeneratingKey ? (
                            <span className="text-gray-500">Generating secure signing nodes...</span>
                          ) : generatedKey ? (
                            <span className="text-gradient-purple-blue font-bold">{generatedKey}</span>
                          ) : (
                            <span className="text-gray-600">xpay_live_************************</span>
                          )}
                        </div>

                        {!generatedKey && (
                          <button
                            onClick={handleGenerateKey}
                            disabled={isGeneratingKey}
                            className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 font-bold text-xs font-display text-white transition-all text-center flex items-center justify-center space-x-2 shadow-lg shadow-brand-blue/20"
                          >
                            {isGeneratingKey && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                            <span>{t('generator.btn')}</span>
                          </button>
                        )}
                      </div>

                      {generatedKey && (
                        <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs font-sans text-gray-400 flex items-start space-x-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{t('generator.ready')}</span>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* STEP 2: CREATE CHECKOUT SESSION */}
                  {activeStep === 1 && (
                    <motion.div
                      key="step-1"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="w-full space-y-6"
                    >
                      <div className="space-y-1.5 text-center">
                        <Terminal className="w-8 h-8 text-brand-blue mx-auto animate-pulse" />
                        <h4 className="text-white text-base font-semibold font-display">
                          {t('payment.title')}
                        </h4>
                      </div>

                      {/* Payment Interactive inputs form */}
                      <div className="bg-[#030510] p-4 rounded-xl border border-white/5 grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[9px] text-gray-500 font-bold font-mono uppercase tracking-wider block">
                            {t('payment.amount')}
                          </label>
                          <input
                            type="text"
                            value={paymentAmount}
                            onChange={(e) => setPaymentAmount(e.target.value)}
                            className="bg-[#07091d] border border-white/5 rounded-lg py-1.5 px-3 w-full text-xs font-mono font-bold text-white focus:outline-none focus:border-brand-blue"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[9px] text-gray-500 font-bold font-mono uppercase tracking-wider block">
                            {t('payment.currency')}
                          </label>
                          <select
                            value={paymentCurrency}
                            onChange={(e) => setPaymentCurrency(e.target.value)}
                            className="bg-[#07091d] border border-white/5 rounded-lg py-1.5 px-2.5 w-full text-xs font-mono font-bold text-white focus:outline-none focus:border-brand-blue"
                          >
                            <option value="USDT">USDT (Stablecoin)</option>
                            <option value="USDC">USDC (Stablecoin)</option>
                            <option value="SUI">SUI (Gas Native)</option>
                          </select>
                        </div>

                        <div className="col-span-2 space-y-1.5">
                          <label className="text-[9px] text-gray-500 font-bold font-mono uppercase tracking-wider block">
                            {t('payment.selectChain')}
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {(['TRON', 'ETH', 'SUI'] as const).map((ch) => (
                              <button
                                key={ch}
                                onClick={() => setPaymentChain(ch)}
                                className={`py-1.5 px-1 text-xs font-mono text-center rounded-lg border transition-all font-bold ${
                                  paymentChain === ch
                                    ? 'bg-brand-blue/10 border-brand-blue text-white'
                                    : 'bg-[#07091d] border-white/5 text-gray-500 hover:text-gray-300'
                                }`}
                              >
                                {ch}
                              </button>
                            ))}
                          </div>
                        </div>

                        {!paymentAddress && (
                          <button
                            onClick={handleCreatePayment}
                            disabled={isCreatingPayment}
                            className="col-span-2 py-2.5 px-4 mt-1.5 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 font-bold text-xs font-display text-white transition-all text-center flex items-center justify-center space-x-2 shadow-lg shadow-brand-blue/25"
                          >
                            {isCreatingPayment && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                            <span>{t('payment.btn')}</span>
                          </button>
                        )}
                      </div>

                      {paymentAddress && (
                        <div className="p-3.5 rounded-xl bg-brand-blue/5 border border-brand-blue/20 text-xs font-mono space-y-1 text-gray-400">
                          <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">{t('generator.ready')} — DEPOSIT_ADDRESS_LINKED</div>
                          <div className="font-bold text-white break-all">{paymentAddress}</div>
                          <div className="text-[10px] text-brand-purple pt-0.5">{t('payment.hash')}: inv_trc20_3f2b901a</div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* STEP 3: WEBHOOK EVENT RECEIVED */}
                  {activeStep === 2 && (
                    <motion.div
                      key="step-2"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="w-full space-y-6 animate-glow"
                    >
                      <div className="space-y-1.5 text-center">
                        <Smartphone className="w-8 h-8 text-emerald-400 mx-auto" />
                        <h4 className="text-white text-base font-semibold font-display">
                          {t('webhookSim.title')}
                        </h4>
                      </div>

                      {/* Code webhook preview window */}
                      <div className="bg-[#030510] p-4 rounded-xl border border-white/5 space-y-3">
                        <span className="text-[9px] text-gray-500 font-bold font-mono uppercase tracking-wider block">
                          {t('webhookSim.payload')}
                        </span>

                        <div className="p-3 rounded-lg bg-[#07091d] text-[10px] sm:text-[11px] font-mono text-gray-300 leading-normal max-h-[160px] overflow-y-auto border border-white/5">
                          <pre className="text-brand-cyan/80">
                            {getDynamicWebhookJson()}
                          </pre>
                        </div>

                        {!receivedWebhook && (
                          <button
                            onClick={handleFireWebhook}
                            disabled={isFiringWebhook}
                            className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 font-bold text-xs font-display text-white transition-all text-center flex items-center justify-center space-x-2 shadow-lg shadow-emerald-500/25 animate-pulse"
                          >
                            {isFiringWebhook && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                            <span>{locale === 'zh' ? '模拟顾客支付 & 触发 Webhook' : 'Trigger Paid Block Webhook'}</span>
                          </button>
                        )}
                      </div>

                      {receivedWebhook && (
                        <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs font-sans text-gray-400 flex items-start space-x-2.5">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{t('webhookSim.received')}</span>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* STEP 4: SOVEREIGN SETTLEMENT SWEEPER */}
                  {activeStep === 3 && (
                    <motion.div
                      key="step-3"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="w-full space-y-6"
                    >
                      <div className="space-y-1.5 text-center">
                        <Layers className="w-8 h-8 text-brand-purple mx-auto animate-bounce" />
                        <h4 className="text-white text-base font-semibold font-display">
                          {t('settleSim.title')}
                        </h4>
                      </div>

                      <div className="bg-[#030510] p-4 rounded-xl border border-white/5 space-y-3.5">
                        <div className="space-y-1 text-xs">
                          <div className="text-[9px] text-gray-500 font-bold font-mono uppercase tracking-wider block">
                            {t('settleSim.funds')}
                          </div>
                          <div className="font-mono text-emerald-400 font-bold">{paymentAmount} {paymentCurrency}</div>
                        </div>

                        <div className="space-y-1 text-xs">
                          <div className="text-[9px] text-gray-500 font-bold font-mono uppercase tracking-wider block">
                            {t('settleSim.dest')}
                          </div>
                          <div className="font-mono text-white text-[11px] break-all">{locale === 'zh' ? '商户离线多签大金库' : 'Vault Root Wallet [Secure Multi-sig Anchor]'}</div>
                        </div>

                        {sweepTx && (
                          <div className="space-y-1 text-xs">
                            <div className="text-[9px] text-gray-500 font-bold font-mono uppercase tracking-wider block">
                              {t('settleSim.txid')}
                            </div>
                            <div className="font-mono text-gradient-purple-blue font-bold text-[10px] break-all select-all">{sweepTx}</div>
                          </div>
                        )}

                        {!settledFunds && (
                          <button
                            onClick={handleSweepAssets}
                            disabled={isSweeping}
                            className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-blue/90 hover:to-brand-purple/90 font-bold text-xs font-display text-white transition-all text-center flex items-center justify-center space-x-2 shadow-lg shadow-brand-blue/20"
                          >
                            {isSweeping && <RefreshCw className="w-3.5 h-3.5 animate-spin" />}
                            <span>{locale === 'zh' ? '执行全自动资金归集 sweep' : 'Synthesize Vault Fund Sweeps'}</span>
                          </button>
                        )}
                      </div>

                      {settledFunds && (
                        <div className="p-3.5 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20 text-xs font-mono text-gray-400 flex items-start space-x-2.5">
                          <CheckCircle className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                          <span>{t('settleSim.settled')}</span>
                        </div>
                      )}
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Console Prompt guide bar */}
              <div className="bg-[#07091c] px-5 py-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                <span>Docker Sandbox Environment</span>
                <span className="text-brand-purple font-semibold hover:underline cursor-pointer flex items-center space-x-1">
                  <span>Sandbox SDK Document</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  );
}
