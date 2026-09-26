import React, { useState } from 'react';
import { FAQS_DATA } from '../../data/reviews';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#000000] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
            Everything you need to know about{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">
              STRIKE
            </span>
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Have more questions? Reach out directly on our Discord community.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIdx === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#0b0b0e] border border-zinc-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-zinc-900/60 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-100">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-zinc-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Discord Box */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-zinc-900 to-indigo-950/40 border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">Still have questions?</h4>
              <p className="text-xs text-slate-400">Join 35,000+ engineers on our official Discord server</p>
            </div>
          </div>

          <a
            href="https://discord.gg"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs transition-colors shrink-0 cursor-pointer"
          >
            Join Discord Community
          </a>
        </div>
      </div>
    </section>
  );
};
