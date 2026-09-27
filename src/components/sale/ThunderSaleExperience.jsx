import React, { useState } from 'react';
import { useSale } from '../../context/SaleContext';
import { SaleCountdownClock } from './SaleCountdownClock';
import { triggerSaleCelebration } from '../ui/Confetti';
import {
  X,
  Copy,
  Check,
  Sparkles,
  ShieldCheck,
  Gift,
  ArrowRight,
  Flame,
  CheckCircle,
  Clock,
  Percent,
  CloudRain,
  Rocket,
  Zap,
  Code2,
  Cpu
} from 'lucide-react';

export const ThunderSaleExperience = () => {
  const {
    isModalOpen,
    closeSaleModal,
    couponCode,
    discountPercentage,
    isCouponApplied,
    copyAndApplyCoupon,
    remainingTime,
  } = useSale();

  const [copied, setCopied] = useState(false);

  if (!isModalOpen) return null;

  const handleCopy = () => {
    if (remainingTime.isExpired) return;
    copyAndApplyCoupon();
    setCopied(true);
    triggerSaleCelebration();
    setTimeout(() => setCopied(false), 3000);
  };

  const handleApplyToPlan = (planTarget) => {
    handleCopy();
    closeSaleModal();
    const targetElement = document.getElementById(planTarget || 'pricing');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const offerCourses = [
    {
      id: 'thunder-100',
      tag: '⚡ FLAGSHIP BOOTCAMP',
      name: 'Thunder: 100 Days of Code',
      subtitle: 'Full Stack + Distributed Architectures + GenAI Agents',
      originalPrice: 11999,
      discountedPrice: 10199,
      savings: 1800,
      badge: 'POPULAR',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      target: 'courses',
    },
    {
      id: 'strike-ultra',
      tag: '💎 VIP ALL-ACCESS',
      name: 'Strike Ultra Membership',
      subtitle: 'All Live Bootcamps + 1-on-1 Mentorship + Lifetime Access',
      originalPrice: 15999,
      discountedPrice: 13599,
      savings: 2400,
      badge: 'BEST VALUE',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      target: 'pricing',
    },
    {
      id: 'strike-plus',
      tag: '📦 COMPLETE ARCHIVE',
      name: 'Strike Plus Pro Pack',
      subtitle: 'All Video Courses + Coder Arena Pro (1 Year)',
      originalPrice: 9999,
      discountedPrice: 8499,
      savings: 1500,
      badge: 'FAST TRACK',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      target: 'pricing',
    },
    {
      id: 'genai-bootcamp',
      tag: '🤖 AGENT ARCHITECTURE',
      name: 'Generative AI & Agent Swarms',
      subtitle: 'RAG Pipelines, Function Calling, Local LLMs & MCP',
      originalPrice: 7999,
      discountedPrice: 6799,
      savings: 1200,
      badge: 'NEW',
      badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      target: 'courses',
    },
    {
      id: 'dsa-mastery',
      tag: '🧠 FIRST PRINCIPLES',
      name: 'DSA Mastery in C++ & Java',
      subtitle: 'Advanced Graphs, Dynamic Programming & LLD',
      originalPrice: 6999,
      discountedPrice: 5949,
      savings: 1050,
      badge: 'ESSENTIAL',
      badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
      target: 'courses',
    },
  ];

  return (
    <div className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Deep Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl transition-opacity animate-fadeIn"
        onClick={closeSaleModal}
      />

      {/* Monsoon Offer Card HUD Window */}
      <div className="relative w-full max-w-4xl bg-[#09090c] border border-cyan-500/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/80 overflow-hidden my-auto text-slate-100 z-10 animate-scaleUp">
        {/* Glowing Top Ambient Beam */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-amber-400" />

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-cyan-600/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-purple-600/20 rounded-full blur-[110px] pointer-events-none" />

        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 border-b border-zinc-800/90 flex items-center justify-between relative bg-black/60 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-amber-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-cyan-500/30 shrink-0">
              <Rocket className="w-5 h-5 text-slate-950 transform -rotate-45" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base sm:text-lg tracking-wide text-white">
                  END OF MONSOON SALE
                </span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 text-[10px] font-mono font-bold border border-cyan-500/30 animate-pulse">
                  FLAT 15% OFF
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Official Special Batch Grant for STRIKE Learning Programs
              </p>
            </div>
          </div>

          <button
            onClick={closeSaleModal}
            className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close sale modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body - Directly Show Offer Courses */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar space-y-6">
          {/* Expired vs Active Banner */}
          {remainingTime.isExpired ? (
            <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-center">
              <p className="font-bold text-rose-300 text-base">⚠️ The End of Monsoon Sale Has Ended</p>
              <p className="text-xs text-rose-400/80 mt-1">The countdown has reached zero. Standard pricing has been restored.</p>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 rounded-2xl bg-gradient-to-br from-[#0c1424] via-[#100c1e] to-[#180f15] border border-cyan-500/30 shadow-xl">
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20 mb-2">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>OFFER ACTIVE • 15% DISCOUNT APPLIED</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                  Flat <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-300">15% Monsoon Discount</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Applicable across <strong className="text-white">Thunder 100</strong>, <strong className="text-white">Strike Ultra</strong>, <strong className="text-white">Strike Plus</strong> &amp; All Bootcamps.
                </p>
              </div>

              {/* Countdown Clock */}
              <div className="flex flex-col items-center md:items-end shrink-0">
                <span className="text-[11px] font-mono text-slate-400 mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  COUNTDOWN LOCK
                </span>
                <SaleCountdownClock showMs={true} />
              </div>
            </div>
          )}

          {/* Coupon Code Section */}
          <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800/90 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Percent className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Verified Monsoon Coupon</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-xl sm:text-2xl font-black text-amber-300 tracking-wider">
                    {couponCode}
                  </span>
                  {isCouponApplied && (
                    <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                      Active &amp; Applied
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopy}
                disabled={remainingTime.isExpired}
                className={`flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  copied || isCouponApplied
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/60'
                    : 'bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-lg shadow-purple-950/60'
                } ${remainingTime.isExpired ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Code Copied &amp; Applied!</span>
                  </>
                ) : isCouponApplied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Coupon Active (-15%)</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy &amp; Apply 15% OFF</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Offer Courses Grid - Directly Visible */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                Featured Offer Courses with Slashed 15% Tuition:
              </h4>
              <span className="text-xs font-mono text-cyan-400">Direct 1-Click Enrollment</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {offerCourses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => handleApplyToPlan(course.target)}
                  className="p-4 rounded-2xl bg-[#0d0d12] border border-zinc-800 hover:border-purple-500/50 hover:bg-[#12121a] transition-all cursor-pointer group relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-purple-300 font-bold">
                        {course.tag}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold border ${course.badgeColor}`}>
                        SAVE ₹{course.savings.toLocaleString()}
                      </span>
                    </div>

                    <h5 className="font-display text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {course.name}
                    </h5>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                      {course.subtitle}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800 flex items-baseline justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                          ₹{course.discountedPrice.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-500 line-through">
                          ₹{course.originalPrice.toLocaleString()}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">15% Discount</span>
                    </div>

                    <span className="text-xs font-bold text-purple-400 group-hover:text-white flex items-center gap-1">
                      <span>Enroll</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Benefits */}
          <div className="p-4 rounded-2xl bg-black border border-zinc-800/90">
            <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Gift className="w-3.5 h-3.5 text-amber-400" />
              Additional Free Bonuses Included With 15% Monsoon Grant:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>3x 1-on-1 Resume Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>GenAI Agent Template Kit</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Rohit Negi Private AMA Pass</span>
              </div>
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <button
              onClick={closeSaleModal}
              className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Continue browsing website &amp; explore courses →
            </button>

            <button
              onClick={() => handleApplyToPlan('pricing')}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-purple-950/60 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Go to Checkout with 15% OFF</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThunderSaleExperience;
