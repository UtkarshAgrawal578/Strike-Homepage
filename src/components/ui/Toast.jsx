import React, { useEffect } from 'react';
import { useSale } from '../../context/SaleContext';
import { Sparkles, X } from 'lucide-react';

export const Toast = () => {
  const { toastMessage, clearToast } = useSale();

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        clearToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage, clearToast]);

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[99999] max-w-md animate-bounce-short">
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-slate-900/95 border border-purple-500/40 text-white shadow-2xl shadow-purple-950/60 backdrop-blur-xl">
        <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
          <Sparkles className="w-4 h-4" />
        </div>
        <p className="text-sm font-medium pr-2 text-slate-100">{toastMessage}</p>
        <button
          onClick={clearToast}
          className="p-1 text-slate-400 hover:text-white rounded-md hover:bg-slate-800/80 transition-colors shrink-0 cursor-pointer"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
