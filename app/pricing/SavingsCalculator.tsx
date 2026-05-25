'use client';

import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

interface Competitor {
  name: string;
  txFee: number;
  monthlyFee: number;
  color: string;
}

const competitors: Competitor[] = [
  { name: 'BitPay', txFee: 1.0, monthlyFee: 30, color: 'text-orange-400' },
  { name: 'Coinbase Commerce', txFee: 0.8, monthlyFee: 25, color: 'text-blue-400' },
  { name: 'NowPayments', txFee: 0.5, monthlyFee: 0, color: 'text-green-400' },
];

export default function SavingsCalculator() {
  const [monthlyVolume, setMonthlyVolume] = useState(50000);
  const [avgTxSize, setAvgTxSize] = useState(500);
  const xpayServerCost = 20;

  const monthlyTxCount = Math.round(monthlyVolume / avgTxSize);

  const savings = competitors.map((c) => {
    const competitorAnnual =
      monthlyVolume * (c.txFee / 100) * 12 + c.monthlyFee * 12;
    const xpayAnnual = xpayServerCost * 12;
    return {
      ...c,
      competitorAnnual,
      xpayAnnual,
      savings: competitorAnnual - xpayAnnual,
    };
  });

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="glass-panel rounded-2xl p-8 sm:p-10 glow-cyan">
        <div className="flex items-center space-x-3 mb-6">
          <Calculator className="w-6 h-6 text-brand-cyan" />
          <h2 className="text-2xl sm:text-3xl font-display font-medium text-white tracking-tight">
            Savings Calculator
          </h2>
        </div>
        <p className="text-sm text-gray-400 font-sans leading-relaxed mb-8 max-w-2xl">
          See how much your business saves by switching from a hosted crypto payment gateway to self-hosted XPay Labs.
          Adjust your monthly volume and average transaction size below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="space-y-6">
            <div>
              <label className="text-xs uppercase font-bold tracking-wider text-gray-500 font-mono block mb-2">
                Monthly Payment Volume
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="number"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-[#04050f] border border-white/10 rounded-xl px-8 py-3 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>
              <input
                type="range"
                min={1000}
                max={1000000}
                step={1000}
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full mt-3 accent-brand-cyan"
              />
              <div className="flex justify-between text-[10px] text-gray-600 font-mono mt-1">
                <span>$1k</span>
                <span>$100k</span>
                <span>$500k</span>
                <span>$1M</span>
              </div>
            </div>

            <div>
              <label className="text-xs uppercase font-bold tracking-wider text-gray-500 font-mono block mb-2">
                Avg Transaction Size
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="number"
                  value={avgTxSize}
                  onChange={(e) => setAvgTxSize(Math.max(1, Number(e.target.value)))}
                  className="w-full bg-[#04050f] border border-white/10 rounded-xl px-8 py-3 text-white font-mono text-sm focus:outline-none focus:border-brand-cyan transition-colors"
                />
              </div>
              <input
                type="range"
                min={10}
                max={10000}
                step={10}
                value={avgTxSize}
                onChange={(e) => setAvgTxSize(Number(e.target.value))}
                className="w-full mt-3 accent-brand-cyan"
              />
              <div className="flex justify-between text-[10px] text-gray-600 font-mono mt-1">
                <span>$10</span>
                <span>$500</span>
                <span>$2,500</span>
                <span>$10k</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase font-bold tracking-wider text-gray-500 font-mono block">
              Annual Cost Comparison ({monthlyTxCount.toLocaleString()} tx/mo)
            </p>
            {savings.map((s) => (
              <div
                key={s.name}
                className="bg-[#04050f] border border-white/5 rounded-xl p-4 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-bold font-display ${s.color}`}>
                    {s.name}
                  </span>
                  <span className="text-sm text-red-400 font-mono font-bold">
                    {formatCurrency(s.competitorAnnual)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold font-display text-brand-cyan">
                    XPay Labs
                  </span>
                  <span className="text-sm text-green-400 font-mono font-bold">
                    {formatCurrency(s.xpayAnnual)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-white/5">
                  <span className="text-xs text-gray-500 font-mono">You save</span>
                  <span className="text-base font-bold text-green-400 font-mono">
                    {formatCurrency(s.savings)}
                    <span className="text-[10px] text-gray-500 ml-1">/yr</span>
                  </span>
                </div>
              </div>
            ))}

            <div className="bg-brand-cyan/5 border border-brand-cyan/10 rounded-xl p-3">
              <p className="text-[10px] text-gray-500 font-mono text-center">
                Based on {formatCurrency(monthlyVolume)}/mo volume at {formatCurrency(avgTxSize)}/tx avg.
                XPay Labs server cost estimated at {formatCurrency(xpayServerCost)}/mo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
