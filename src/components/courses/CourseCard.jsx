import React from 'react';
import { useSale } from '../../context/SaleContext';
import {
  Star,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Bot,
  Code2,
  Layers,
  Server,
  FileText,
  Clock
} from 'lucide-react';

export const CourseCard = ({ course, onViewSyllabus }) => {
  const { isCouponApplied, openSaleModal, discountPercentage } = useSale();

  // Individual standalone course standard tuition
  const originalPrice = course.originalPrice;
  const standardPrice = course.currentPrice;

  return (
    <div className="flex flex-col rounded-3xl bg-[#0b0b0e] border border-zinc-800/90 hover:border-purple-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-950/40 relative overflow-hidden group">
      {/* Course Thumbnail Image */}
      <div className="relative h-48 w-full overflow-hidden bg-zinc-900">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-transparent to-black/40" />

        {/* Badge Overlay */}
        {course.badge && (
          <div className="absolute top-3 left-3">
            <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider ${course.badgeColor}`}>
              {course.badge}
            </span>
          </div>
        )}

        {/* Duration / Module Pill */}
        {course.duration && (
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300 flex items-center gap-1">
            <Clock className="w-3 h-3 text-purple-400" />
            <span>{course.duration}</span>
          </div>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col relative z-10">
        {/* Title & Subtitle */}
        <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-2">
          {course.title}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
          {course.subtitle}
        </p>

        {/* Instructor & Ratings info */}
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-500">By</span>
            <span className="font-semibold text-white">{course.instructor}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="flex items-center gap-1 font-bold text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              {course.rating}
            </span>
            <span className="text-slate-500">({course.reviewsCount})</span>
          </div>
        </div>

        {/* Course Features Bullets */}
        <div className="py-4 space-y-2 flex-1">
          {course.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 pb-4">
          {course.tags.slice(0, 3).map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Price & CTA Area */}
        <div className="pt-4 border-t border-zinc-800 mt-auto">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[10px] font-mono text-slate-500 block">INDIVIDUAL ENROLLMENT</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-black text-white">
                  ₹{standardPrice.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            <a
              href="#pricing"
              className="px-2 py-0.5 rounded bg-purple-500/15 hover:bg-purple-500/25 text-purple-300 text-[10px] font-mono font-bold border border-purple-500/30 transition-colors"
              title="Included in Strike Plus & Ultra with 15% OFF"
            >
              In Strike Plus &amp; Ultra →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewSyllabus(course)}
              className="px-3 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              <span>Syllabus</span>
            </button>

            <a
              href="#pricing"
              className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-purple-600 hover:from-amber-400 hover:to-purple-500 text-white font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Enroll Now</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[3]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
