import React from 'react';
import { Course } from '../../types';
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
  FileText
} from 'lucide-react';

interface CourseCardProps {
  course: Course;
  onViewSyllabus: (course: Course) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, onViewSyllabus }) => {
  const { isCouponApplied, openSaleModal, discountPercentage } = useSale();

  // Price calculations
  const originalPrice = course.originalPrice;
  const regularPrice = course.currentPrice;
  const discountedPrice = isCouponApplied
    ? Math.round(originalPrice * (1 - discountPercentage / 100))
    : regularPrice;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-sky-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="flex flex-col rounded-3xl bg-[#090d16] border border-slate-800/90 hover:border-indigo-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-950/40 relative overflow-hidden group">
      {/* Background subtle gradient top */}
      <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${course.thumbnailGradient} pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity`} />

      <div className="p-6 sm:p-7 flex-1 flex flex-col relative z-10">
        {/* Top Header info */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center shadow-md">
            {getIcon(course.iconName)}
          </div>

          {course.badge && (
            <span className={`text-[10px] font-mono px-2.5 py-1 rounded-full uppercase tracking-wider ${course.badgeColor}`}>
              {course.badge}
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1 mb-2">
          {course.title}
        </h3>

        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
          {course.subtitle}
        </p>

        {/* Instructor & Ratings info */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 text-xs text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">By</span>
            <span className="font-semibold text-white">{course.instructor}</span>
          </div>

          <div className="flex items-center gap-2">
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
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-2 pb-4">
          {course.tags.slice(0, 3).map((tag, tIdx) => (
            <span
              key={tIdx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Price & CTA Area */}
        <div className="pt-4 border-t border-slate-800/80 mt-auto">
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[10px] font-mono text-slate-400 block">ENROLLMENT FEE</span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-display font-black text-white">
                  ₹{discountedPrice.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500 line-through">
                  ₹{originalPrice.toLocaleString()}
                </span>
              </div>
            </div>

            {isCouponApplied ? (
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[11px] font-mono font-bold border border-emerald-500/30">
                -40% APPLIED
              </span>
            ) : (
              <button
                onClick={openSaleModal}
                className="text-[11px] font-mono text-amber-400 hover:text-amber-300 underline cursor-pointer"
              >
                ⚡ Get 40% OFF
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onViewSyllabus(course)}
              className="px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Syllabus</span>
            </button>

            <a
              href="#pricing"
              className="px-3 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-bold text-xs transition-all flex items-center justify-center gap-1 cursor-pointer"
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
