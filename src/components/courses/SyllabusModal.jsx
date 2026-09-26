import React from 'react';
import { X, CheckCircle, BookOpen, Sparkles } from 'lucide-react';
import { useSale } from '../../context/SaleContext';

export const SyllabusModal = ({ course, onClose }) => {
  const { isCouponApplied, discountPercentage } = useSale();

  if (!course) return null;

  const originalPrice = course.originalPrice;
  const regularPrice = course.currentPrice;
  const finalPrice = isCouponApplied
    ? Math.round(originalPrice * (1 - discountPercentage / 100))
    : regularPrice;

  return (
    <div className="fixed inset-0 z-[99995] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#0b0b0e] border border-purple-500/30 rounded-2xl sm:rounded-3xl shadow-2xl shadow-purple-950/80 overflow-hidden my-auto text-slate-100 z-10 animate-scaleUp">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-start justify-between gap-4 bg-zinc-900/50">
          <div>
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-1">
              Curriculum &amp; Learning Roadmap
            </span>
            <h3 className="text-xl font-bold text-white leading-tight">
              {course.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1">Instructor: {course.instructor} • {course.instructorRole}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-800 text-slate-400 hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6 custom-scrollbar">
          <div>
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-400" />
              Syllabus Modules Breakdown
            </h4>

            <div className="space-y-4">
              {course.syllabusHighlights.map((mod, i) => (
                <div key={i} className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-purple-400">
                      {mod.week}
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {mod.title}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-zinc-800/80">
                    {mod.topics.map((topic, tIdx) => (
                      <div key={tIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
            <h5 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2.5">
              Course Inclusions:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
              {course.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2">
                  <span className="text-amber-400">⚡</span>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-5 border-t border-zinc-800 bg-zinc-900/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-slate-400 font-mono block">ENROLLMENT TUITION</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-white">₹{finalPrice.toLocaleString()}</span>
              <span className="text-xs text-slate-500 line-through">₹{originalPrice.toLocaleString()}</span>
              {isCouponApplied && (
                <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  THUNDER40 Applied
                </span>
              )}
            </div>
          </div>

          <a
            href="#pricing"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-purple-600 text-white font-bold text-sm hover:brightness-110 transition-all cursor-pointer"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};
