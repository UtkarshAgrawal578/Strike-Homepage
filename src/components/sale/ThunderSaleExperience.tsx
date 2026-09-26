import React, { useState } from 'react';
import { useSale } from '../../context/SaleContext';
import { SaleCountdownClock } from './SaleCountdownClock';
import { ThunderCircuitUnlock } from './ThunderCircuitUnlock';
import { triggerSaleCelebration } from '../ui/Confetti';
import {
  Zap,
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
  Layers,
  Percent
} from 'lucide-react';

export const ThunderSaleExperience: React.FC = () => {
  const {
    isModalOpen,
    closeSaleModal,
    isUnlocked,
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

  const handleApplyToPlan = (planTarget: string) => {
    handleCopy();
    closeSaleModal();
    // Smooth scroll to pricing section
    const targetElement = document.getElementById(planTarget || 'pricing');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-fadeIn"
        onClick={closeSaleModal}
      />

      {/* Cyberpunk HUD Window */}
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-indigo-500/40 rounded-2xl sm:rounded-3xl shadow-2xl shadow-indigo-950/80 overflow-hidden my-auto text-slate-100 z-10 animate-scaleUp">
        {/* Glowing Top Ambient Beam */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-indigo-500 to-cyan-400" />
        
        {/* Background Ambient Glows */}
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-amber-600/20 rounded-full blur-[100px] pointer-events-none" />

        {/* Modal Header */}
        <div className="px-6 py-5 sm:px-8 border-b border-slate-800/80 flex items-center justify-between relative bg-slate-900/50 backdrop-blur-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-indigo-600 flex items-center justify-center text-black font-black shadow-lg shadow-indigo-500/30 shrink-0">
              <Zap className="w-5 h-5 fill-current text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-black text-base sm:text-lg tracking-wide text-white">
                  THUNDER OVERDRIVE 6.0
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30 animate-pulse">
                  LIMITED FLASH EVENT
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Official Hackathon Exclusive Grant for STRIKE Learning Batches
              </p>
            </div>
          </div>

          <button
            onClick={closeSaleModal}
            className="w-9 h-9 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close sale modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto custom-scrollbar">
          {/* If NOT Unlocked yet: Interactive Unlock Stage */}
          {!isUnlocked && !remainingTime.isExpired ? (
            <div>
              <div className="text-center max-w-xl mx-auto mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-mono mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>INTERACTIVE OVERDRIVE ACCESS</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                  Unlock <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-indigo-300 to-cyan-400">40% Instant Grant</span> on All Plans
                </h3>
                <p className="text-sm text-slate-300">
                  Connect the 3 core pillars of modern engineering to synthesize your verified VIP coupon code and discounted tuition.
                </p>
              </div>

              <ThunderCircuitUnlock />
            </div>
          ) : (
            /* Unlocked Offer State */
            <div className="space-y-6">
              {/* Expired vs Active Banner */}
              {remainingTime.isExpired ? (
                <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-center">
                  <p className="font-bold text-rose-300 text-base">⚠️ This Thunder Flash Sale Has Ended</p>
                  <p className="text-xs text-rose-400/80 mt-1">The countdown has reached zero. Standard pricing has been restored.</p>
                </div>
              ) : (
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900/90 to-purple-950/50 border border-indigo-500/30">
                  <div>
                    <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/20 mb-2">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>OFFER GRANTED • {discountPercentage}% OFF UNLOCKED</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-display font-black text-white">
                      Flat <span className="text-amber-300">40% Instant Discount</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1">
                      Applicable on <strong className="text-white">Strike Ultra</strong>, <strong className="text-white">Strike Plus</strong> & <strong className="text-white">Thunder 100 Batch</strong>.
                    </p>
                  </div>

                  {/* Countdown Clock */}
                  <div className="flex flex-col items-center md:items-end">
                    <span className="text-[11px] font-mono text-slate-400 mb-1 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-400" />
                      COUNTDOWN LOCK
                    </span>
                    <SaleCountdownClock showMs={true} />
                  </div>
                </div>
              )}

              {/* Coupon Box */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                    <Percent className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-mono">Verified Coupon Code</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-mono text-xl sm:text-2xl font-black text-amber-300 tracking-wider">
                        {couponCode}
                      </span>
                      {isCouponApplied && (
                        <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                          Active & Applied
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopy}
                    disabled={remainingTime.isExpired}
                    className={`flex-1 sm:flex-none px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      copied || isCouponApplied
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-950/60'
                    } ${remainingTime.isExpired ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Code Copied & Applied!</span>
                      </>
                    ) : isCouponApplied ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Coupon Active (-40%)</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy & Apply 40% OFF</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Discounted Product Showcase Cards */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-orange-400" />
                    Applicable Programs with Slashed Tuition
                  </h4>
                  <span className="text-xs text-slate-400">Click to inspect plan</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Card 1 */}
                  <div
                    onClick={() => handleApplyToPlan('thunder-section')}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-amber-400 font-bold">⚡ THUNDER 100</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold">SAVE ₹4,800</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium line-clamp-1">100 Days Full Stack + HLD/LLD</p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-lg font-black text-white">₹7,199</span>
                      <span className="text-xs text-slate-500 line-through">₹11,999</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div
                    onClick={() => handleApplyToPlan('pricing')}
                    className="p-4 rounded-xl bg-slate-900/60 border border-indigo-500/40 hover:border-indigo-400 transition-all cursor-pointer group relative overflow-hidden"
                  >
                    <div className="absolute -right-8 top-2 bg-indigo-500 text-black text-[9px] font-black px-8 py-0.5 rotate-45">
                      BEST VALUE
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-indigo-300 font-bold">💎 STRIKE ULTRA</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">SAVE ₹6,400</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium line-clamp-1">All Live Bootcamps + Mentorship</p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-lg font-black text-indigo-200">₹9,599</span>
                      <span className="text-xs text-slate-500 line-through">₹15,999</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div
                    onClick={() => handleApplyToPlan('pricing')}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono text-cyan-400 font-bold">📦 STRIKE PLUS</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold">SAVE ₹4,000</span>
                    </div>
                    <p className="text-xs text-slate-300 font-medium line-clamp-1">All Courses + Arena Pro (1 Yr)</p>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-lg font-black text-white">₹5,999</span>
                      <span className="text-xs text-slate-500 line-through">₹9,999</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bonus Benefits */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5 text-amber-400" />
                  Additional Bonuses Included Free With Thunder Grant:
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

              {/* Bottom Nav CTA */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={closeSaleModal}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Continue browsing website & explore courses →
                </button>

                <button
                  onClick={() => handleApplyToPlan('pricing')}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-indigo-950/60 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Go to Checkout with Discount</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
