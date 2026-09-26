import React, { useState } from 'react';
import { useSale } from '../../context/SaleContext';
import { Play, Sparkles, Check, Copy, Zap, Terminal, RefreshCw } from 'lucide-react';

const SNIPPETS = [
  {
    id: 'dsa',
    tab: 'DSA (C++)',
    code: `// Strike First Principles: Binary Search & Two Pointers
int findPeakElement(vector<int>& nums) {
    int low = 0, high = nums.size() - 1;
    while (low < high) {
        int mid = low + (high - low) / 2;
        if (nums[mid] > nums[mid + 1]) high = mid;
        else low = mid + 1;
    }
    return low; // Peak found in O(log N) time, O(1) space!
}`,
    output: `✓ Test Case 1: [1, 2, 3, 1] -> Peak index: 2 (value: 3)\n✓ Memory consumed: 1.2 MB | 0ms runtime (Beats 100% FAANG submissions)`
  },
  {
    id: 'genai',
    tab: 'GenAI Agent',
    code: `# Autonomous Strike Multi-Agent Swarm
from strike_ai import AgentSwarm, ToolRegistry

researcher = AgentSwarm.create(
    role="Market Analyst",
    tools=[ToolRegistry.scrape_orderbook, ToolRegistry.calc_rsi]
)

# Execute Autonomous Loop
decision = researcher.orchestrate("Analyze breakout & find alpha")
print(f"Signal: {decision.recommendation} | Confidence: 99.4%")`,
    output: `⚡ Initializing Strike Autonomous Swarm...\n[Agent 1: Researcher] Reading real-time market stream...\n[Agent 2: Risk Engine] Verified VaR & Position Sizing.\nSignal: STRONG BUY | Confidence: 99.4%`
  },
  {
    id: 'surge',
    tab: '⚡ Secret Surge Code',
    easterEgg: true,
    code: `# STRIKE THUNDER OVERDRIVE MATRIX PROTOCOL
# Execute to unlock Hackathon 6.0 Grant Voucher
$ strike surge --grant-level=MAX_DISCOUNT --batch=THUNDER_6.0

[SYSTEM]: Analyzing eligibility... PASS
[SYSTEM]: Synthesizing coupon token: "THUNDER40" (40% OFF)
[SYSTEM]: Ready to claim!`,
    output: `⚡ >>> THUNDER OVERDRIVE MATRIX DETECTED! <<<\nCoupon: THUNDER40 | Discount: Flat 40% OFF All Strike Batches.\nClick "CLAIM GRANT" to activate discount!`
  }
];

export const InteractiveTerminal = () => {
  const [activeTab, setActiveTab] = useState('dsa');
  const [isRunning, setIsRunning] = useState(false);
  const [runOutput, setRunOutput] = useState(null);
  const [copied, setCopied] = useState(false);

  const { openSaleModal, isCouponApplied } = useSale();

  const currentSnippet = SNIPPETS.find((s) => s.id === activeTab) || SNIPPETS[0];

  const handleRun = () => {
    setIsRunning(true);
    setRunOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setRunOutput(currentSnippet.output);
      if (currentSnippet.easterEgg) {
        openSaleModal();
      }
    }, 500);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="terminal" className="w-full rounded-2xl bg-[#09090b] border border-purple-500/30 shadow-2xl shadow-purple-950/60 overflow-hidden font-mono text-xs">
      {/* Terminal Bar */}
      <div className="px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-[11px] text-slate-400 ml-2 flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-purple-400" />
            strike_sandbox.sh
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1">
          {SNIPPETS.map((snip) => (
            <button
              key={snip.id}
              onClick={() => {
                setActiveTab(snip.id);
                setRunOutput(null);
                if (snip.easterEgg) {
                  openSaleModal();
                }
              }}
              className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all cursor-pointer ${
                activeTab === snip.id
                  ? snip.easterEgg
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {snip.tab}
            </button>
          ))}
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-5 text-slate-300 leading-relaxed overflow-x-auto bg-[#040405]">
        <pre className="font-mono text-xs text-slate-200 selection:bg-purple-500/30">
          <code>{currentSnippet.code}</code>
        </pre>

        {/* Run Output Area */}
        {runOutput && (
          <div className="mt-4 p-3 rounded-xl bg-zinc-950 border border-emerald-500/30 text-emerald-400 text-xs font-mono whitespace-pre-line animate-fadeIn">
            {runOutput}
          </div>
        )}
      </div>

      {/* Terminal Footer Controls */}
      <div className="px-4 py-3 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={`px-4 py-1.5 rounded-lg font-bold text-xs flex items-center gap-1.5 transition-all shadow-md cursor-pointer ${
              currentSnippet.easterEgg
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:brightness-110 shadow-amber-500/20'
                : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-500/20'
            }`}
          >
            {isRunning ? (
              <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            ) : currentSnippet.easterEgg ? (
              <Zap className="w-3.5 h-3.5 fill-current" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-current" />
            )}
            <span>{isRunning ? 'Compiling...' : currentSnippet.easterEgg ? 'Claim Grant (40% OFF)' : 'Run Snippet'}</span>
          </button>

          <button
            onClick={handleCopyCode}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-zinc-800 transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="hidden sm:inline">Coder Arena Online</span>
          {isCouponApplied && (
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30">
              40% Coupon Active
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
