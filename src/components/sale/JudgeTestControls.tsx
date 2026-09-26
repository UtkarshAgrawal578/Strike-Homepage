import React, { useState } from 'react';
import { useSale } from '../../context/SaleContext';
import { Settings2, RotateCcw, Clock, Zap, CheckCircle, ChevronUp, ChevronDown } from 'lucide-react';

export const JudgeTestControls: React.FC = () => {
  const {
    remainingTime,
    forceExpireTimer,
    resetTimer,
    openSaleModal,
    isCouponApplied,
    copyAndApplyCoupon,
    removeCoupon
  } = useSale();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 left-5 z-[9990] flex flex-col items-start font-mono text-xs select-none">
      {isOpen && (
        <div className="mb-2 p-3.5 rounded-2xl bg-slate-900/95 border border-indigo-500/40 text-slate-200 shadow-2xl shadow-black/80 backdrop-blur-xl w-72 sm:w-80 animate-scaleUp">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2.5">
            <span className="font-bold text-amber-300 flex items-center gap-1.5 text-[11px]">
              <Settings2 className="w-3.5 h-3.5 text-amber-400" />
              HACKATHON JUDGE CONTROLS
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">
              Live Testing Mode
            </span>
          </div>

          <p className="text-[10px] text-slate-400 mb-3 leading-tight font-sans">
            Use these shortcuts to verify timer persistence, coupon discount math across pricing cards, and expired state handling.
          </p>

          <div className="space-y-2">
            {/* Force Expire vs Reset */}
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={forceExpireTimer}
                className="px-2.5 py-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-[10px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                title="Sets timer to 0 to test expired offer condition"
              >
                <Clock className="w-3 h-3 text-rose-400" />
                <span>Force Expire (0s)</span>
              </button>

              <button
                onClick={() => resetTimer(48)}
                className="px-2.5 py-2 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-indigo-300 text-[10px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                title="Resets persistent countdown to 48 Hours"
              >
                <RotateCcw className="w-3 h-3 text-indigo-400" />
                <span>Reset 48h Timer</span>
              </button>
            </div>

            {/* Toggle Coupon */}
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={openSaleModal}
                className="px-2.5 py-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 text-[10px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Open Sale HUD</span>
              </button>

              <button
                onClick={isCouponApplied ? removeCoupon : copyAndApplyCoupon}
                className={`px-2.5 py-2 rounded-lg border text-[10px] font-bold flex items-center justify-center gap-1 transition-colors cursor-pointer ${
                  isCouponApplied
                    ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300 hover:bg-rose-500/20 hover:border-rose-500/40 hover:text-rose-300'
                    : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <CheckCircle className="w-3 h-3" />
                <span>{isCouponApplied ? 'Remove 40% Code' : 'Apply 40% Code'}</span>
              </button>
            </div>

            {/* Status readouts */}
            <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-400 space-y-1">
              <div className="flex justify-between">
                <span>Timer Status:</span>
                <span className={remainingTime.isExpired ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                  {remainingTime.isExpired ? 'EXPIRED' : 'ACTIVE (Saved in localStorage)'}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Coupon Applied:</span>
                <span className={isCouponApplied ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                  {isCouponApplied ? 'YES (THUNDER40: -40%)' : 'NO'}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-slate-700/80 text-slate-300 hover:text-white shadow-lg backdrop-blur-md transition-all cursor-pointer text-xs"
        aria-label="Toggle Judge Test Dashboard"
      >
        <Settings2 className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="font-sans font-semibold text-[11px]">Judge Test Controls</span>
        {isOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
      </button>
    </div>
  );
};
