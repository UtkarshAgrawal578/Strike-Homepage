import React from 'react';
import { Award, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import { YoutubeIcon, LinkedinIcon } from '../ui/SocialIcons';
import { ScrollReveal } from '../ui/ScrollReveal';

export const MentorSpotlight = () => {
  const mentors = [
    {
      id: 'rohit-negi',
      name: 'Rohit Negi',
      role: 'Founder & Lead Instructor',
      subtitle: 'Ex-Uber Software Engineer • AIR 202 GATE CS • IIT Guwahati',
      avatarBg: 'bg-gradient-to-tr from-emerald-500/20 to-teal-500/20',
      borderColor: 'border-emerald-500/40',
      highlights: [
        'Ex-Uber Distributed Systems Engineer',
        'AIR 202 in GATE CS (All India Rank)',
        'M.Tech from IIT Guwahati',
        '₹2.05 Crore Highest International Offer',
        '500k+ YouTube Community at Coder Army'
      ],
      youtube: 'https://youtube.com/@CoderArmy9',
      linkedin: 'https://linkedin.com/in/rohit-negi9',
      imageSrc: '/mentors/rohit_negi.png'
    },
    {
      id: 'aditya-tandon',
      name: 'Aditya Tandon',
      role: 'Co-Founder & Senior Instructor',
      subtitle: 'Senior Distributed Systems Architect & High-Scale DevOps Specialist',
      avatarBg: 'bg-gradient-to-tr from-purple-500/20 to-indigo-500/20',
      borderColor: 'border-purple-500/40',
      highlights: [
        'Architected Systems Handling 100k+ RPS',
        'Senior Full Stack & Distributed Cloud Specialist',
        'Lead Mentor for Thunder: 100 Days of Code',
        'Docker, Kubernetes & Production CI/CD Veteran',
        '10,000+ Students Mentored in System Design'
      ],
      youtube: 'https://youtube.com/@CoderArmy9',
      linkedin: 'https://linkedin.com',
      imageSrc: '/mentors/aditya_tandon.png'
    }
  ];

  return (
    <section id="mentors" className="py-20 relative bg-[#000000] border-b border-white/[0.06] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>INDUSTRY-VET LEADERSHIP</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Learn Directly from{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">
                Industry Veterans
              </span>
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              No theoretical shortcuts or rote memorization. Master data structures, distributed architectures, and autonomous AI agents directly from experienced practitioners.
            </p>
          </div>
        </ScrollReveal>

        {/* 2 Mentors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <ScrollReveal key={mentor.id} delay={index * 0.15}>
              <div className="rounded-3xl bg-[#08080a] border border-zinc-800/90 hover:border-purple-500/40 transition-all duration-300 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative group overflow-hidden">
                {/* Top Subtle Ambient Glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Circular Avatar Container with Individual Mentor Image */}
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-1 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 shadow-2xl group-hover:scale-105 transition-transform duration-300 mb-4">
                      {/* Inner clipping ring */}
                      <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-zinc-950 bg-black flex items-center justify-center">
                        <img
                          src={mentor.imageSrc}
                          alt={mentor.name}
                          className="w-full h-full object-cover object-center rounded-full"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="font-display text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {mentor.name}
                    </h3>
                    <p className="text-sm font-semibold text-purple-400 mt-1">
                      {mentor.role}
                    </p>
                    <p className="text-xs text-slate-400 mt-1.5 max-w-sm">
                      {mentor.subtitle}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 pt-4 border-t border-zinc-800/80">
                    <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      Credentials &amp; Track Record:
                    </p>
                    {mentor.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-between pt-6 mt-6 border-t border-zinc-800/80">
                  <div className="flex items-center gap-3">
                    <a
                      href={mentor.youtube}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-slate-400 hover:text-rose-400 transition-colors"
                      aria-label={`${mentor.name} YouTube`}
                    >
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-slate-400 hover:text-blue-400 transition-colors"
                      aria-label={`${mentor.name} LinkedIn`}
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </div>

                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified Instructor</span>
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Teaching Philosophy Quote */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-zinc-950 border border-zinc-800/80 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Our Core Teaching Standard
              </span>
              <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed">
                "We don't teach shortcuts or template-memorization. If you understand how the CPU, memory pointers, operating system syscalls, and network sockets communicate, solving any hard algorithmic problem or architecting a 100-million user distributed system becomes natural intuition."
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
