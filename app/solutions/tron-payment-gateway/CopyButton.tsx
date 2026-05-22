'use client';

import React from 'react';
import { Copy, Check } from 'lucide-react';

export default function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-xs font-mono flex items-center space-x-1.5 transition-all"
    >
      {copied ? (
        <><Check className="w-3.5 h-3.5 text-emerald-400" /><span>Copied</span></>
      ) : (
        <><Copy className="w-3.5 h-3.5" /><span>Copy</span></>
      )}
    </button>
  );
}
