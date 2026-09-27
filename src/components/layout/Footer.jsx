import React from 'react';
import { Zap, Heart, Send, Shield, Sparkles } from 'lucide-react';
import { useSale } from '../../context/SaleContext';
import { YoutubeIcon, LinkedinIcon, InstagramIcon } from '../ui/SocialIcons';

export const Footer = () => {
  const { openSaleModal } = useSale();

  return (
    <footer className="border-t border-white/[0.08] bg-[#000000] relative overflow-hidden text-slate-400">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-400 via-purple-600 to-indigo-600 flex items-center justify-center text-slate-950 font-black shadow-md">
                <Zap className="w-4 h-4 fill-current text-slate-950 stroke-[2.5]" />
              </div>
              <span className="font-display font-black text-2xl tracking-wider text-white">
                STRIKE<span className="text-amber-400">.</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Strike by Rohit Negi (Ex-Uber, AIR 202). Learn Data Structures, Full Stack Web Development, Distributed System Design, and Autonomous AI Agents from First Principles.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://youtube.com/@CoderArmy9"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
                aria-label="YouTube Channel"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/rohit-negi9"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/coder_army9"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Telegram Community"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4 font-mono">
              Bootcamps
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#courses" className="hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  <span className="text-amber-400">⚡</span> Thunder 100 Days
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-cyan-300 transition-colors">
                  Generative AI Engineering
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-emerald-300 transition-colors">
                  DSA Mastery in C++
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-purple-300 transition-colors">
                  System Design (HLD + LLD)
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-300 transition-colors">
                  DevOps &amp; Cloud Deploy
                </a>
              </li>
            </ul>
          </div>

          {/* Memberships */}
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4 font-mono">
              Memberships
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Strike Plus (All Tracks)
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-300 transition-colors font-semibold">
                  Strike Ultra (Live + Mocks)
                </a>
              </li>
              <li>
                <a href="#terminal" className="hover:text-white transition-colors">
                  Coder Arena Pro
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Placement Wall
                </a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* Trust & Guarantees */}
          <div>
            <h4 className="font-semibold text-sm text-white uppercase tracking-wider mb-4 font-mono">
              Trust &amp; Support
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2 text-slate-300">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>One-Time Payment</span>
              </li>
              <li className="text-slate-400">No recurring renewals</li>
              <li className="text-slate-400">Lifetime community discord</li>
              <li className="text-slate-400">Official ISO 9001 certification</li>
              <li>
                <a href="#faq" className="text-purple-400 hover:text-purple-300">
                  Read FAQs →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Strike (strikes.in). Powered by Coder Army.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with First Principles &amp;</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for Developers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
