import React from 'react';
import { REVIEWS_DATA } from '../../data/reviews';
import { Star, Trophy } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20 relative bg-zinc-950/70 border-b border-white/[0.06] overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4">
            <Trophy className="w-3.5 h-3.5 text-emerald-400" />
            <span>REAL RESULTS • VERIFIED ALUMNI</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            From Tier-3 Colleges to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">
              FAANG &amp; High-Growth Startups
            </span>
          </h2>

          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Read how disciplined engineers transformed their careers with Strike's first principles curriculum.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-3xl bg-[#0b0b0e] border border-zinc-800 hover:border-purple-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Top Profile & Company Info */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/40"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white">{review.name}</h4>
                      <p className="text-xs text-slate-400">{review.role}</p>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold shrink-0">
                    {review.package}
                  </span>
                </div>

                {/* Rating stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{review.content}"
                </p>
              </div>

              {/* Footer Course Badge */}
              <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] font-mono text-purple-300 font-medium">
                  {review.courseTaken}
                </span>
                <span className="font-bold font-mono text-[10px] text-slate-400 uppercase">
                  {review.companyLogoText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
