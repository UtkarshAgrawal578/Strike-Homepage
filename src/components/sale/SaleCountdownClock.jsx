import React, { useState, useEffect } from 'react';
import { useSale } from '../../context/SaleContext';
import { Clock, AlertCircle } from 'lucide-react';

export const SaleCountdownClock = ({ compact = false, showMs = false }) => {
  const { remainingTime, targetEndTime } = useSale();
  const [ms, setMs] = useState(99);

  useEffect(() => {
    if (remainingTime.isExpired) return;
    const interval = setInterval(() => {
      const remainingMs = Math.max(0, targetEndTime - Date.now());
      const hundredths = Math.floor((remainingMs % 1000) / 10);
      setMs(hundredths);
    }, 45);
    return () => clearInterval(interval);
  }, [remainingTime.isExpired, targetEndTime]);

  if (remainingTime.isExpired) {
    return (
      <div className={`flex items-center gap-2 font-mono ${compact ? 'text-xs text-rose-400 font-semibold' : 'px-4 py-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm'}`}>
        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 animate-pulse" />
        <span>OFFER WINDOW EXPIRED (00:00:00)</span>
      </div>
    );
  }

  const pad = (n) => n.toString().padStart(2, '0');

  if (compact) {
    return (
      <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
        <Clock className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
        <span>{pad(remainingTime.hours)}:{pad(remainingTime.minutes)}:{pad(remainingTime.seconds)}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none">
      {/* Hours */}
      <div className="flex flex-col items-center">
        <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-zinc-900/90 border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-950/40">
          <span className="font-mono text-2xl sm:text-3xl font-black text-white text-glow-purple">
            {pad(remainingTime.hours)}
          </span>
        </div>
        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">Hours</span>
      </div>

      <span className="font-mono text-2xl font-bold text-purple-400/80 -mt-5">:</span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-zinc-900/90 border border-purple-500/30 flex items-center justify-center shadow-lg shadow-purple-950/40">
          <span className="font-mono text-2xl sm:text-3xl font-black text-white text-glow-purple">
            {pad(remainingTime.minutes)}
          </span>
        </div>
        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">Mins</span>
      </div>

      <span className="font-mono text-2xl font-bold text-purple-400/80 -mt-5">:</span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-zinc-900/90 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-950/40">
          <span className="font-mono text-2xl sm:text-3xl font-black text-amber-300 text-glow-amber">
            {pad(remainingTime.seconds)}
          </span>
        </div>
        <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 mt-1 font-medium">Secs</span>
      </div>

      {showMs && (
        <>
          <span className="font-mono text-xl font-bold text-zinc-600 -mt-5">.</span>
          {/* Milliseconds */}
          <div className="flex flex-col items-center">
            <div className="w-11 sm:w-12 h-14 sm:h-16 rounded-xl bg-zinc-900/60 border border-zinc-700/40 flex items-center justify-center">
              <span className="font-mono text-lg sm:text-xl font-bold text-slate-400">
                {pad(ms)}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-500 mt-1 font-medium">MS</span>
          </div>
        </>
      )}
    </div>
  );
};
