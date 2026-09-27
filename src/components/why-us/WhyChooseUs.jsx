import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import {
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Flame,
  GitBranch,
  Layers,
  MessageSquareCode,
  Sparkles,
  Target,
  Trophy,
  Users,
  Video,
  Zap
} from 'lucide-react';

export const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState('dsa');
  const [solvedCount, setSolvedCount] = useState(482);

  return (
    <section id="why-choose-us" className="py-24 relative bg-[#000000] border-b border-white/[0.07] overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>THE STRIKE ADVANTAGE</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">Choose Us</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Learn smarter with modern tools, guided mentors, and a platform built to help you grow your skills faster, setting a new benchmark for modern coding excellence.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Interview Preparation */}
          <ScrollReveal delay={0.1}>
            <div className="rounded-3xl bg-[#09090c] border border-zinc-800/90 hover:border-purple-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group h-full">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shadow-lg">
                    <Users className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold">
                    1-on-1 Mentorship
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Inter<span className="text-purple-400 font-extrabold">view</span> Preparation
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-8">
                  Learn faster with hands-on tracks, mock bar-raiser rounds, and direct line-by-line mentor feedback from top engineers.
                </p>
              </div>

              {/* Interactive Interview Visual Widget */}
              <div className="p-5 rounded-2xl bg-black/80 border border-zinc-800/90 space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono font-bold text-emerald-300">Live Mock Session</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">FAANG Bar-Raiser</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 block mb-1">CANDIDATE SCORE</span>
                    <span className="text-xl font-bold text-white font-display">96.8 / 100</span>
                    <span className="text-[10px] text-emerald-400 block mt-0.5">Top 2% Percentile</span>
                  </div>
                  <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                    <span className="text-[10px] font-mono text-zinc-400 block mb-1">MOCK FEEDBACK</span>
                    <span className="text-xs font-semibold text-purple-300 block">Strong HLD &amp; DP</span>
                    <span className="text-[10px] text-zinc-400 block mt-0.5">Ready for L4/L5 Roles</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-xs text-slate-300">
                  <span className="flex items-center gap-1 text-[11px] text-zinc-400 font-mono">
                    <Video className="w-3.5 h-3.5 text-purple-400" />
                    Recorded with line-by-line notes
                  </span>
                  <span className="text-[11px] font-bold text-amber-400">ATS Resume Verified ✓</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: AI Support */}
          <ScrollReveal delay={0.2}>
            <div className="rounded-3xl bg-[#09090c] border border-zinc-800/90 hover:border-cyan-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group h-full">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg">
                    <Bot className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold">
                    24/7 Intelligent Tutor
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  AI <span className="text-cyan-400 font-extrabold">Support</span>
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-8">
                  Get instant error diagnostics, time-complexity visualizations, and step-by-step hints without spoiling complete solutions.
                </p>
              </div>

              {/* Interactive AI Bot Assistant Visual Widget */}
              <div className="p-5 rounded-2xl bg-black/80 border border-zinc-800/90 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black shrink-0 shadow-md">
                    <BrainCircuit className="w-5 h-5 text-slate-950" />
                  </div>
                  <div className="flex-1 p-3 rounded-xl bg-zinc-900 border border-cyan-500/30 text-xs text-slate-200">
                    <p className="font-mono text-[11px] text-cyan-300 font-bold mb-1">⚡ Strike AI Code Assistant:</p>
                    <p className="leading-relaxed">
                      "Your dynamic programming matrix is using O(N²) space. You can optimize space to O(N) by storing only the previous 2 rows!"
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-[10px] flex items-center gap-1 font-semibold">
                    <Zap className="w-3 h-3 text-amber-400" /> Space: O(N²) → O(N)
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-[10px] flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> 0 Syntax Errors
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-zinc-900 text-zinc-400 font-mono text-[10px]">
                    Instant Response (&lt;50ms)
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Projects Based Learning */}
          <ScrollReveal delay={0.3}>
            <div className="rounded-3xl bg-[#09090c] border border-zinc-800/90 hover:border-amber-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group h-full">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-lg">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 font-semibold">
                    Real Microservices
                  </span>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Projects <span className="text-amber-400 font-extrabold">Based Learning</span>
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-8">
                  Never build toy apps. Build and deploy enterprise distributed architectures with Kafka streams, Redis clusters, and Docker orchestration.
                </p>
              </div>

              {/* Interactive Architecture Flow Widget */}
              <div className="p-5 rounded-2xl bg-black/80 border border-zinc-800/90 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-amber-400" />
                    Distributed System Capstone
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                    DEPLOYED ON AWS
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono pt-1">
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 block">GATEWAY</span>
                    <span className="font-bold text-white text-[11px]">Reverse Proxy</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 block">STREAMING</span>
                    <span className="font-bold text-amber-300 text-[11px]">Kafka Queue</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                    <span className="text-[10px] text-zinc-500 block">CACHE</span>
                    <span className="font-bold text-cyan-300 text-[11px]">Redis Cluster</span>
                  </div>
                </div>

                <p className="text-[11px] text-zinc-400 pt-1 flex items-center justify-between">
                  <span>Tested with 50,000 Concurrent WebSockets</span>
                  <span className="text-amber-400 font-mono font-bold">Production Ready →</span>
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Track Your Progress */}
          <ScrollReveal delay={0.4}>
            <div className="rounded-3xl bg-[#09090c] border border-zinc-800/90 hover:border-emerald-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group h-full">
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Live Progress Tracking</span>
                  </div>
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  Track Your <span className="text-emerald-400 font-extrabold">Progress</span>
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-md mb-8">
                  Stay disciplined with daily coding streaks, automated topic analytics, and leaderboard ranks on Coder Arena.
                </p>
              </div>

              {/* Interactive Contribution Heatmap & Streak Widget */}
              <div className="p-5 rounded-2xl bg-black/80 border border-zinc-800/90 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-emerald-400 block">GROW WITH STRIKE</span>
                    <span className="text-sm font-bold text-white mt-0.5 block">100% Milestone Progress</span>
                  </div>
                  <div className="flex items-center gap-1 font-mono text-xs text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20 font-bold">
                    <Flame className="w-3.5 h-3.5 fill-amber-400" />
                    <span>48 Days Streak</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-zinc-800 overflow-hidden p-0.5">
                  <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 w-full shadow-lg shadow-emerald-500/50" />
                </div>

                {/* Simulated Activity Heatmap Grid */}
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mb-1.5">
                    <span>DAILY PRACTICE HEATMAP</span>
                    <span className="text-emerald-400">{solvedCount} Problems Mastered</span>
                  </div>
                  <div className="grid grid-cols-16 gap-1">
                    {[...Array(32)].map((_, i) => {
                      const level = i % 5;
                      const bgClass =
                        level === 0
                          ? 'bg-zinc-800/60'
                          : level === 1
                          ? 'bg-emerald-900/60'
                          : level === 2
                          ? 'bg-emerald-700/80'
                          : level === 3
                          ? 'bg-emerald-500'
                          : 'bg-emerald-400 shadow-sm shadow-emerald-400/50';

                      return (
                        <div
                          key={i}
                          onClick={() => setSolvedCount((prev) => prev + 1)}
                          className={`w-full aspect-square rounded-[3px] ${bgClass} transition-transform hover:scale-125 cursor-pointer`}
                          title={`Day ${i + 1}: Click to practice`}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
