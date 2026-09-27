import React, { useState } from 'react';
import { useSale } from '../../context/SaleContext';
import { Clock, AlertTriangle, Sparkles, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingSaleDock = () => {
  const {
    openSaleModal,
    isModalOpen,
    remainingTime,
    isCouponApplied,
    discountPercentage,
  } = useSale();

  const [isLaunching, setIsLaunching] = useState(false);

  if (isModalOpen) return null;

  const handleLaunchClick = (e) => {
    e.preventDefault();
    if (isLaunching) return;

    if (remainingTime.isExpired) {
      openSaleModal();
      return;
    }

    // Trigger rocket fly launch animation
    setIsLaunching(true);

    setTimeout(() => {
      openSaleModal();
      setIsLaunching(false);
    }, 650);
  };

  const pad = (n) => n.toString().padStart(2, '0');

  return (
    <>
      {/* High-Velocity Rocket Launch Flying Overlay */}
      <AnimatePresence>
        {isLaunching && (
          <motion.div
            initial={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: -45 }}
            animate={{
              opacity: [1, 1, 0.8, 0],
              y: '-110vh',
              x: '-20vw',
              scale: [1, 1.4, 1.8, 2.2],
              rotate: -45,
            }}
            transition={{ duration: 0.7, ease: [0.12, 0, 0.39, 0] }}
            className="fixed bottom-10 right-10 z-[99999] pointer-events-none flex flex-col items-center justify-center"
          >
            {/* Rocket Head */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-amber-500/80 border-2 border-white/60">
                <Rocket className="w-9 h-9 fill-white text-slate-950" />
              </div>

              {/* Flame Thrust & Particle Exhaust */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                <div className="w-4 h-12 bg-gradient-to-b from-amber-300 via-orange-500 to-transparent rounded-full blur-[2px] animate-pulse" />
                <div className="w-8 h-16 bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent rounded-full blur-[6px] -mt-10 opacity-80" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Rocket Feature Pod */}
      <div className="fixed bottom-5 right-5 z-[9990] flex items-center gap-2 select-none">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleLaunchClick}
          className={`group relative flex items-center gap-3.5 px-4 sm:px-5 py-3 rounded-full border transition-all duration-300 shadow-2xl backdrop-blur-2xl cursor-pointer ${
            remainingTime.isExpired
              ? 'bg-zinc-950/90 border-zinc-800 text-slate-400 hover:border-zinc-700'
              : 'bg-gradient-to-r from-[#0d131f]/95 via-[#150f24]/95 to-[#1c1214]/95 border-cyan-500/50 hover:border-amber-400 text-white shadow-cyan-500/20'
          }`}
          aria-label="Launch 15% End of Monsoon Sale offer"
        >
          {/* Pulsing Aura Border */}
          {!remainingTime.isExpired && (
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-500 opacity-40 blur-md group-hover:opacity-80 transition duration-500 animate-pulse" />
          )}

          <div className="relative flex items-center gap-3">
            {/* Rocket Pod Icon with Animated Thruster Glow */}
            <div className="relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg transition-transform group-hover:rotate-12 duration-300 ${
                  remainingTime.isExpired
                    ? 'bg-zinc-800 text-slate-400 border border-zinc-700'
                    : 'bg-gradient-to-tr from-cyan-400 via-purple-500 to-amber-400 text-slate-950 shadow-purple-500/40 border border-white/40'
                }`}
              >
                {remainingTime.isExpired ? (
                  <AlertTriangle className="w-4 h-4 text-slate-400" />
                ) : (
                  <Rocket className="w-5 h-5 fill-slate-950 text-slate-950 transform -rotate-45" />
                )}
              </div>

              {/* Ambient Thruster Sparks */}
              {!remainingTime.isExpired && (
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-amber-400 animate-ping opacity-75" />
              )}
            </div>

            {/* Headline and Countdown Timer */}
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold tracking-wide text-white flex items-center gap-1 font-mono uppercase">
                  {remainingTime.isExpired ? (
                    <span className="text-slate-400">Sale Expired</span>
                  ) : isCouponApplied ? (
                    <>
                      <span className="text-emerald-400">15% MONSOON APPLIED</span>
                      <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
                    </>
                  ) : (
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-amber-300">
                      15% MONSOON CODE READY
                    </span>
                  )}
                </span>
              </div>

              {/* Countdown Below */}
              {!remainingTime.isExpired && (
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-slate-300 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 animate-spin" style={{ animationDuration: '8s' }} />
                  <span className="font-semibold text-amber-300 tracking-wider">
                    {pad(remainingTime.hours)}:{pad(remainingTime.minutes)}:{pad(remainingTime.seconds)} left
                  </span>
                </div>
              )}
            </div>

            {/* Action CTA Button */}
            <div className="hidden sm:flex items-center pl-2">
              <span className="px-3.5 py-1.5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 group-hover:text-white border border-cyan-500/40 text-xs font-bold tracking-wide font-mono flex items-center gap-1 transition-colors shadow-sm">
                <span>{remainingTime.isExpired ? 'Details' : 'Claim Grant →'}</span>
              </span>
            </div>
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default FloatingSaleDock;
