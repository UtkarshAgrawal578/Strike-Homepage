import React, { useState } from 'react';
import { useSale } from '../../context/SaleContext';
import { COURSES_DATA } from '../../data/courses';
import {
  Zap,
  Calendar,
  CheckCircle2,
  Users,
  Layers,
  ArrowRight,
  Shield,
  Video,
  Clock,
  Sparkles
} from 'lucide-react';

export const ThunderSpotlight: React.FC = () => {
  const { isCouponApplied, openSaleModal, discountPercentage } = useSale();
  const thunderCourse = COURSES_DATA.find((c) => c.id === 'thunder-100') || COURSES_DATA[0];

  const [activeWeekIndex, setActiveWeekIndex] = useState<number>(0);

  const modules = [
    {
      phase: 'Module 01',
      title: 'Advanced Frontend & TypeScript Engine',
      duration: 'Weeks 1 to 3',
      desc: 'Deep dive into JavaScript V8 Engine, React 19 fiber reconciliation, custom hook architectures, and production TypeScript.',
      topics: ['V8 Engine & Memory Management', 'React 19 Server Components', 'Zustand & Redux Toolkit', 'Performance Profiling & Web Vitals']
    },
    {
      phase: 'Module 02',
      title: 'Distributed Backend & Database Internals',
      duration: 'Weeks 4 to 7',
      desc: 'Build high-throughput backends with Node.js, PostgreSQL relational design, MongoDB sharding, Redis caching & Kafka pub/sub.',
      topics: ['Node Event Loop & Cluster Module', 'PostgreSQL Query Optimization & Indexing', 'Redis Distributed Locks & Caching Patterns', 'Kafka Streaming Architecture']
    },
    {
      phase: 'Module 03',
      title: 'System Design (HLD + LLD) & Security',
      duration: 'Weeks 8 to 11',
      desc: 'Architect enterprise applications to handle 100k+ RPS. Master CAP theorem, load balancers, rate limiting, and 23 GoF design patterns.',
      topics: ['HLD: Designing Uber, Netflix & WhatsApp', 'LLD: SOLID Principles & Design Patterns', 'OAuth2, JWT, Rate Limiting & Zero Trust', 'Database Sharding & Consistent Hashing']
    },
    {
      phase: 'Module 04',
      title: 'DevOps, Cloud Deploy & Production Capstone',
      duration: 'Weeks 12 to 14',
      desc: 'Containerize microservices with Docker, deploy multi-node Kubernetes clusters on AWS, and establish automated CI/CD pipelines.',
      topics: ['Docker Multi-stage Builds', 'Kubernetes Helm & Ingress', 'AWS EC2, S3, RDS & CloudFront', 'End-to-End Enterprise Capstone Deploy']
    }
  ];

  // Pricing math
  const originalPrice = thunderCourse.originalPrice; // 11999
  const regularPrice = 7199;
  const discountedPrice = isCouponApplied
    ? Math.round(originalPrice * (1 - discountPercentage / 100))
    : regularPrice;

  return (
    <section id="thunder-section" className="py-20 relative bg-slate-950/80 border-b border-white/[0.06] overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold mb-4 animate-pulse">
            <Zap className="w-3.5 h-3.5 fill-current" />
            <span>FLAGSHIP LIVE BOOTCAMP 6.0</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Thunder: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-indigo-400">100 Days of Code</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            The most intensive, zero-to-production live program designed to transform ambitious coders into top-tier distributed systems engineers.
          </p>
        </div>

        {/* 2-Column Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Curriculum Module Switcher */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090d16] border border-slate-800/90 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-amber-400" />
                    Interactive 100-Day Curriculum Roadmap
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">Click modules to explore topics and weekly milestones</p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">
                  100+ Live Hours
                </span>
              </div>

              {/* Module Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-6 pb-6">
                {modules.map((mod, idx) => (
                  <button
                    key={mod.phase}
                    onClick={() => setActiveWeekIndex(idx)}
                    className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                      activeWeekIndex === idx
                        ? 'bg-amber-500/10 border-amber-500/50 shadow-md shadow-amber-500/10'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-400'
                    }`}
                  >
                    <span className={`text-[10px] font-mono font-bold block ${activeWeekIndex === idx ? 'text-amber-400' : 'text-slate-400'}`}>
                      {mod.phase}
                    </span>
                    <span className={`text-xs font-semibold block truncate ${activeWeekIndex === idx ? 'text-white' : 'text-slate-300'}`}>
                      {mod.duration}
                    </span>
                  </button>
                ))}
              </div>

              {/* Active Module Detail Box */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    {modules[activeWeekIndex].duration} • {modules[activeWeekIndex].phase}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-indigo-400" />
                    Live Every Mon, Wed, Fri
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white">
                  {modules[activeWeekIndex].title}
                </h4>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {modules[activeWeekIndex].desc}
                </p>

                <div className="pt-2">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 font-mono">
                    Core Technical Pillars Covered:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {modules[activeWeekIndex].topics.map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live Program Specs */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Video className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>100+ Live Sessions</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Calendar className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span>Next Batch: Starts Monday</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>1-on-1 Doubt Assistance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Batch Pricing & Enrollment Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#101626] to-[#090d16] border border-amber-500/40 shadow-2xl shadow-amber-950/30 relative">
              {/* Top Pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono font-bold border border-amber-500/30">
                  🔥 LIMITED SEATS AVAILABLE
                </span>
                <span className="text-xs text-slate-400">Batch 6.0</span>
              </div>

              <h3 className="text-2xl font-display font-black text-white">
                Enroll in Thunder 100 Days
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Complete access to live lectures, recordings, notes, community discord & placement support.
              </p>

              {/* Pricing Box */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">TUITION FEE</span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl sm:text-4xl font-display font-black text-white">
                        ₹{discountedPrice.toLocaleString()}
                      </span>
                      <span className="text-sm text-slate-500 line-through">
                        ₹{originalPrice.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    {isCouponApplied ? (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold font-mono border border-emerald-500/30 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        THUNDER40 (-40%)
                      </span>
                    ) : (
                      <button
                        onClick={openSaleModal}
                        className="text-xs text-amber-400 hover:text-amber-300 font-mono font-bold underline cursor-pointer"
                      >
                        ⚡ Unlock 40% OFF
                      </button>
                    )}
                    <span className="text-[11px] text-slate-400 block mt-1">One-time payment</span>
                  </div>
                </div>

                {isCouponApplied && (
                  <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-emerald-400 font-mono">
                    <span>You save with Hackathon Grant:</span>
                    <span className="font-bold">₹{(originalPrice - discountedPrice).toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Inclusions List */}
              <div className="mt-6 space-y-3">
                <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Everything Included In This Batch:
                </p>
                {thunderCourse.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Enrollment CTA */}
              <div className="mt-8 space-y-3">
                <a
                  href="#pricing"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Claim Seat in Thunder 6.0</span>
                  <ArrowRight className="w-4 h-4 stroke-[3]" />
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Secure Payment • Instant Access to Pre-Batch Material</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
