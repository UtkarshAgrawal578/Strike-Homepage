import React, { useState } from 'react';
import { useSale } from '../../context/SaleContext';
import { Zap, Menu, X, ArrowUpRight, Sparkles, BookOpen, Layers, Users, HelpCircle } from 'lucide-react';

export const Navbar = () => {
  const { openSaleModal, remainingTime, isCouponApplied } = useSale();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Thunder 100', href: '#thunder-section', badge: 'LIVE' },
    { name: 'Strike Plus', href: '#pricing' },
    { name: 'Coder Arena', href: '#terminal' },
    { name: 'Instructor', href: '#mentor' },
    { name: 'FAQs', href: '#faq' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#000000]/85 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Strike Logo Mark */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 via-purple-600 to-indigo-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 fill-current text-slate-950 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-wider text-white flex items-center gap-1">
                STRIKE<span className="text-amber-400">.</span>
              </span>
              <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 -mt-1 uppercase">
                by Rohit Negi
              </span>
            </div>
          </a>

          {/* Hackathon / Thunder Flash Sale Discovery Badge */}
          {!remainingTime.isExpired && (
            <button
              onClick={openSaleModal}
              className="hidden lg:flex items-center gap-2 ml-4 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/15 via-purple-500/15 to-cyan-500/15 border border-amber-500/40 hover:border-amber-400 text-xs text-amber-300 font-mono transition-all cursor-pointer group animate-pulse"
              title="Click to discover Thunder Hackathon 6.0 Grant"
            >
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>⚡ THUNDER 6.0 FLASH GRANT</span>
              <span className="px-1.5 py-0.2 rounded bg-amber-400 text-slate-950 font-bold text-[10px]">
                {isCouponApplied ? '40% APPLIED' : '40% OFF'}
              </span>
            </button>
          )}
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors relative flex items-center gap-1.5 cursor-pointer"
            >
              <span>{link.name}</span>
              {link.badge && (
                <span className="text-[9px] font-mono font-extrabold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  {link.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={openSaleModal}
            className="px-3.5 py-2 rounded-xl text-xs font-mono text-purple-300 hover:text-white hover:bg-purple-500/10 border border-purple-500/30 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Overdrive Terminal</span>
          </button>

          <a
            href="#pricing"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl font-medium group cursor-pointer"
          >
            <span className="w-full h-full bg-gradient-to-br from-amber-500 via-purple-600 to-indigo-600 group-hover:from-amber-400 group-hover:to-indigo-500 absolute"></span>
            <span className="relative px-4 py-2 transition-all ease-out bg-slate-950 rounded-[10px] group-hover:bg-opacity-0 text-white text-sm font-semibold flex items-center gap-1.5">
              <span>Explore Batches</span>
              <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
            </span>
          </a>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={openSaleModal}
            className="p-2 rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/40"
            aria-label="Thunder sale"
          >
            <Zap className="w-4 h-4 fill-current" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 bg-[#09090b] border-b border-zinc-800 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-left text-sm font-medium text-slate-200 flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 font-bold">
                    {link.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openSaleModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-purple-600 text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4" />
              <span>Explore Thunder 6.0 Grant (-40%)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
