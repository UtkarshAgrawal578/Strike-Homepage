import React from 'react';
import { useSale } from '../../context/SaleContext';
import { InteractiveTerminal } from './InteractiveTerminal';
import { Zap, Sparkles, ArrowRight, ShieldCheck, Star, Users, Trophy, PlayCircle } from 'lucide-react';

export const HeroSection = () => {
  const { openSaleModal, remainingTime, isCouponApplied } = useSale();

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background Neon Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Batch Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 p-1.5 pr-4 rounded-full bg-zinc-900/90 border border-purple-500/30 backdrop-blur-md shadow-lg shadow-black/50">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-mono font-black text-xs">
                <Zap className="w-3.5 h-3.5 fill-current" />
                THUNDER 100 DAYS LIVE
              </span>
              <span className="text-xs text-slate-300 font-medium">
                Live Interactive Batch with Rohit Negi
              </span>
              {!remainingTime.isExpired && (
                <button
                  onClick={openSaleModal}
                  className="text-amber-400 font-mono text-xs font-bold hover:underline ml-1 cursor-pointer flex items-center gap-1"
                >
                  <span>{isCouponApplied ? '✓ 40% Applied' : '⚡ 40% Grant'}</span>
                </button>
              )}
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
              Learn DSA, Web Development &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">
                Gen AI Courses
              </span>{' '}
              by Rohit Negi.
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Master core computer science, distributed full-stack systems, system design (HLD &amp; LLD), and autonomous AI agents with guided practice and live production projects on Strike.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#thunder-section"
                className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-black text-base shadow-xl shadow-purple-500/20 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <Zap className="w-5 h-5 fill-current text-amber-300" />
                <span>Explore Thunder 100 Days</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </a>

              <button
                onClick={openSaleModal}
                className="px-6 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-850 border border-purple-500/40 hover:border-purple-400 text-purple-200 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-950/40 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{isCouponApplied ? 'View Active 40% Grant' : '⚡ Claim Thunder Sale (-40%)'}</span>
              </button>
            </div>

            {/* Social Proof Metric Cards */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-zinc-800/80">
              <div>
                <div className="font-display font-black text-2xl text-white">50,000+</div>
                <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <Users className="w-3.5 h-3.5 text-purple-400" />
                  <span>Students Mentored</span>
                </div>
              </div>

              <div>
                <div className="font-display font-black text-2xl text-amber-400">₹2.05 Cr</div>
                <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400" />
                  <span>Highest CTC Grabbed</span>
                </div>
              </div>

              <div>
                <div className="font-display font-black text-2xl text-white">AIR 202</div>
                <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GATE CS (Rohit Negi)</span>
                </div>
              </div>

              <div>
                <div className="font-display font-black text-2xl text-emerald-400">4.98 ⭐</div>
                <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                  <span>18k+ Verified Reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive REPL */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Floating Highlight Badge */}
              <div className="absolute -top-4 -right-4 z-20 hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl bg-zinc-900/95 border border-purple-500/50 shadow-xl shadow-purple-950/80 text-[11px] font-mono text-purple-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Interactive Sandbox</span>
              </div>

              <InteractiveTerminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
