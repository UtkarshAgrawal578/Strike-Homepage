import React from 'react';

const COMPANIES = [
  { name: 'Google', tier: 'FAANG' },
  { name: 'Microsoft', tier: 'Big Tech' },
  { name: 'Uber', tier: 'Tier-1 Tech' },
  { name: 'Amazon', tier: 'FAANG' },
  { name: 'Atlassian', tier: 'Top Product' },
  { name: 'Adobe', tier: 'Enterprise' },
  { name: 'Swiggy', tier: 'High Scale Unicorn' },
  { name: 'Zomato', tier: 'High Scale Unicorn' },
  { name: 'Razorpay', tier: 'FinTech Titan' },
  { name: 'Oracle', tier: 'Enterprise Cloud' },
  { name: 'Flipkart', tier: 'E-Commerce' },
  { name: 'Morgan Stanley', tier: 'FinTech Quant' }
];

export const PlacementMarquee: React.FC = () => {
  return (
    <div className="w-full py-8 border-y border-white/[0.06] bg-slate-950/40 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex items-center justify-between">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 font-semibold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-indigo-500" />
          Our Alumni Build Infrastructure At Top Tech Giants:
        </p>
        <span className="text-xs text-amber-400 font-mono font-bold hidden sm:inline-block">
          ₹2.05 CR HIGHEST PACKAGE • 500+ HIRING PARTNERS
        </span>
      </div>

      {/* Marquee Continuous Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07090e] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07090e] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-8 sm:gap-12 animate-marquee whitespace-nowrap">
          {[...COMPANIES, ...COMPANIES].map((company, index) => (
            <div
              key={`${company.name}-${index}`}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/40 transition-colors"
            >
              <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-slate-200">
                {company.name}
              </span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                {company.tier}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
