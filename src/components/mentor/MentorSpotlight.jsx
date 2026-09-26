import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';
import { YoutubeIcon, LinkedinIcon } from '../ui/SocialIcons';

export const MentorSpotlight = () => {
  return (
    <section id="mentor" className="py-20 relative bg-zinc-950/60 border-b border-white/[0.06] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0b0b0e] border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Image / Profile Visual */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group">
                {/* Glowing Aura Ring */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-amber-500 via-purple-600 to-cyan-400 opacity-60 blur-xl group-hover:opacity-90 transition duration-500" />

                {/* Profile Card Container */}
                <div className="relative w-64 sm:w-72 h-80 sm:h-96 rounded-2xl bg-zinc-900 border border-zinc-700 overflow-hidden flex flex-col justify-end p-6 shadow-2xl">
                  {/* Rohit Negi Photo */}
                  <img
                    src="https://coderamry-strike-courses-assets.s3.ap-south-1.amazonaws.com/strike/Strike.jpg"
                    alt="Rohit Negi - Founder of Strike"
                    onError={(e) => {
                      // Fallback image if S3 asset is restricted
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80";
                    }}
                    className="absolute inset-0 w-full h-full object-cover object-top filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/70 to-transparent" />

                  <div className="relative z-10">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold uppercase tracking-wider">
                      Founder &amp; Lead Instructor
                    </span>
                    <h3 className="font-display text-2xl font-black text-white mt-1.5">
                      Rohit Negi
                    </h3>
                    <p className="text-xs text-purple-300 font-medium">Ex-Uber SDE • AIR 202 GATE CS</p>
                  </div>
                </div>
              </div>

              {/* Social Badges */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  href="https://youtube.com/@CoderArmy9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-slate-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
                >
                  <YoutubeIcon className="w-3.5 h-3.5 text-rose-500" />
                  <span>500k+ on YouTube</span>
                </a>
                <a
                  href="https://linkedin.com/in/rohit-negi9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            {/* Right Column: Credentials & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>ABOUT YOUR INSTRUCTOR</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
                Learn from someone who has{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">
                  cracked it at the highest level.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                From securing an all-India rank of <strong className="text-white">AIR 202 in GATE CS</strong>, graduating with an M.Tech from <strong className="text-white">IIT Guwahati</strong>, bagging an international offer of <strong className="text-amber-400 font-bold">₹2.05 Crore</strong>, to engineering core distributed services at <strong className="text-white">Uber</strong>.
              </p>

              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-4 border-l-purple-500">
                "We don't teach shortcuts or rote-memorization. If you understand how the CPU, memory pointers, operating system syscalls, and network sockets communicate, solving any hard algorithmic puzzle or architecting a 100-million user distributed system becomes natural intuition."
              </div>

              {/* Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct 100% Live Instruction</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>First Principles Problem Solving</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Real Uber/FAANG Architecture Case Studies</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1-on-1 Code Audits &amp; Mocks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
