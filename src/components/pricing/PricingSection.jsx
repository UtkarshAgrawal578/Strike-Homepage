import React, { useState } from 'react';
import { PRICING_PLANS } from '../../data/courses';
import { useSale } from '../../context/SaleContext';
import {
  Sparkles,
  Zap,
  ArrowRight,
  ShieldCheck,
  Tag,
  CheckCircle2
} from 'lucide-react';
import { triggerSaleCelebration } from '../ui/Confetti';

export const PricingSection = () => {
  const [selectedDurationIndex, setSelectedDurationIndex] = useState(0);
  const [inputCode, setInputCode] = useState('');
  const {
    isCouponApplied,
    copyAndApplyCoupon,
    removeCoupon,
    couponCode,
    discountPercentage,
    openSaleModal,
  } = useSale();

  const durations = ['1 Year', '2 Years', '3 Years', '4 Years'];

  const handleApplyInputCoupon = (e) => {
    e.preventDefault();
    if (inputCode.trim().toUpperCase() === couponCode) {
      copyAndApplyCoupon();
      setInputCode('');
    } else {
      alert(`Invalid code. Try entering "${couponCode}" or click the Thunder Surge button.`);
    }
  };

  return (
    <section id="pricing" className="py-20 relative bg-[#000000] border-b border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>STRIKE MEMBERSHIPS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Invest in your engineering future.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">
              No recurring auto-debits.
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300">
            One-time payment unlocks extensive course archives, live bootcamps, and career referrals.
          </p>

          {/* Duration Selector Tabs */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
            {durations.map((dur, index) => (
              <button
                key={dur}
                onClick={() => setSelectedDurationIndex(index)}
                className={`px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedDurationIndex === index
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {dur}
              </button>
            ))}
          </div>
        </div>

        {/* Live Coupon Bar */}
        <div className="max-w-xl mx-auto mb-12 p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Tag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-mono block">HACKATHON COUPON PORTAL</span>
              <span className="text-sm font-bold text-white">
                {isCouponApplied ? `"${couponCode}" Applied (40% OFF)` : 'Have a discount code?'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {isCouponApplied ? (
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/30">
                  40% Slashed!
                </span>
                <button
                  onClick={removeCoupon}
                  className="px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-slate-400 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyInputCoupon} className="flex items-center gap-1.5 w-full">
                <input
                  type="text"
                  placeholder="e.g. THUNDER40"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="px-3 py-1.5 rounded-xl bg-black border border-zinc-700 text-xs font-mono text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 w-32 uppercase"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors cursor-pointer"
                >
                  Apply
                </button>
                <button
                  type="button"
                  onClick={openSaleModal}
                  className="p-1.5 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-500/40 text-xs"
                  title="Unlock Secret Code"
                >
                  <Zap className="w-4 h-4 fill-current" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => {
            const currentDurationData = plan.durations[selectedDurationIndex];
            const originalPrice = currentDurationData.originalPrice;
            const standardSalePrice = currentDurationData.salePrice;

            // Apply -40% on original price if coupon is active
            const finalPrice = isCouponApplied
              ? Math.round(originalPrice * (1 - discountPercentage / 100))
              : standardSalePrice;

            const savings = originalPrice - finalPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#13121f] to-[#0b0b0e] border-2 border-purple-500/80 shadow-2xl shadow-purple-950/60 lg:-translate-y-2'
                    : 'bg-[#0b0b0e] border border-zinc-800 hover:border-zinc-700 shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs font-mono shadow-md flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 fill-current" />
                    <span>{plan.badge || 'RECOMMENDED FOR FULL CAREER SHIFT'}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-2xl font-extrabold text-white">
                      {plan.name}
                    </h3>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-zinc-800 text-slate-300">
                      {currentDurationData.duration} Access
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mt-6 p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl font-display font-black text-white">
                            ₹{finalPrice.toLocaleString()}
                          </span>
                          <span className="text-sm text-slate-500 line-through">
                            ₹{originalPrice.toLocaleString()}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 mt-1 block">
                          ≈ ₹{Math.round(finalPrice / (parseInt(currentDurationData.duration) * 12)).toLocaleString()}/month • One-Time Payment
                        </span>
                      </div>

                      {isCouponApplied && (
                        <div className="text-right">
                          <span className="text-[11px] font-mono px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 block">
                            SAVE ₹{savings.toLocaleString()}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-8 space-y-3">
                    <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                      Included In This Plan:
                    </p>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? 'text-amber-400' : 'text-purple-400'
                          }`}
                        />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-10 pt-6 border-t border-zinc-800">
                  <button
                    onClick={() => {
                      triggerSaleCelebration();
                      alert(`Redirecting to Strike Checkout for ${plan.name} (${currentDurationData.duration}) with Tuition: ₹${finalPrice.toLocaleString()}`);
                    }}
                    className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer ${
                      plan.popular
                        ? 'bg-gradient-to-r from-amber-500 via-purple-600 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white shadow-purple-500/20 font-black'
                        : 'bg-purple-600 hover:bg-purple-500 text-white shadow-purple-950/60'
                    }`}
                  >
                    <span>Get Instant Access to {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-center text-slate-500 mt-2.5 flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Instant Discord &amp; Platform Access Granted</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
