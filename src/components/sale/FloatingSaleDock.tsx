import React from 'react';
import { useSale } from '../../context/SaleContext';
import { Zap, Sparkles, Clock, AlertTriangle } from 'lucide-react';

export const FloatingSaleDock: React.FC = () => {
  const {
    openSaleModal,
    isModalOpen,
    remainingTime,
    isCouponApplied,
    isUnlocked
  } = useSale();

  if (isModalOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9990] flex items-center gap-2">
      <button
        onClick={openSaleModal}
        className={`group relative flex items-center gap-3 px-4 py-2.5 rounded-full border transition-all duration-300 shadow-2xl backdrop-blur-xl cursor-pointer ${
          remainingTime.isExpired
            ? 'bg-slate-900/90 border-slate-700 text-slate-400 hover:border-slate-600'
            : 'bg-slate-900/90 hover:bg-slate-850 border-amber-500/50 hover:border-amber-400 text-white shadow-amber-500/20 hover:scale-105'
        }`}
        aria-label="Open Thunder Sale offer"
      >
        {/* Pulsing Aura */}
        {!remainingTime.isExpired && (
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-500 to-indigo-500 opacity-40 blur-sm group-hover:opacity-75 transition duration-500 animate-pulse" />
        )}

        <div className="relative flex items-center gap-2.5">
          {/* Icon */}
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
              remainingTime.isExpired
                ? 'bg-slate-800 text-slate-400'
                : 'bg-gradient-to-tr from-amber-400 to-orange-500 text-black shadow-md'
            }`}
          >
            {remainingTime.isExpired ? (
              <AlertTriangle className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <Zap className="w-4 h-4 fill-current" />
            )}
          </div>

          {/* Text & Timer */}
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold tracking-tight text-white flex items-center gap-1">
                {remainingTime.isExpired ? (
                  'Sale Expired'
                ) : isCouponApplied ? (
                  <>
                    <span className="text-emerald-400 font-mono">40% APPLIED</span>
                    <Sparkles className="w-3 h-3 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                  </>
                ) : isUnlocked ? (
                  <>
                    <span className="text-amber-300 font-mono">40% CODE READY</span>
                  </>
                ) : (
                  <>
                    <span className="text-amber-300 font-mono">⚡ 40% THUNDER SURGE</span>
                  </>
                )}
              </span>
            </div>

            {!remainingTime.isExpired && (
              <div className="flex items-center gap-1 font-mono text-[10px] text-slate-300">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>
                  {remainingTime.hours.toString().padStart(2, '0')}:
                  {remainingTime.minutes.toString().padStart(2, '0')}:
                  {remainingTime.seconds.toString().padStart(2, '0')} left
                </span>
              </div>
            )}
          </div>

          <span className="hidden sm:inline-block text-[11px] font-semibold text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded-full border border-indigo-500/30">
            {remainingTime.isExpired ? 'View Details' : 'Claim Grant →'}
          </span>
        </div>
      </button>
    </div>
  );
};
