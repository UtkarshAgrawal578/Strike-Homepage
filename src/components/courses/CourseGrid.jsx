import React, { useState } from 'react';
import { COURSES_DATA } from '../../data/courses';
import { CourseCard } from './CourseCard';
import { SyllabusModal } from './SyllabusModal';
import { BookOpen, Sparkles } from 'lucide-react';
import { useSale } from '../../context/SaleContext';

export const CourseGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState(null);
  const { isCouponApplied } = useSale();

  const categories = [
    { id: 'all', label: 'All Courses' },
    { id: 'bootcamp', label: 'Live Bootcamps ⚡' },
    { id: 'dsa', label: 'DSA & C++' },
    { id: 'genai', label: 'Generative AI & Agents' },
    { id: 'systemdesign', label: 'System Design & DevOps' },
  ];

  const filteredCourses = selectedCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-20 relative bg-[#000000] border-b border-white/[0.06]">
      {/* Syllabus Modal Container */}
      <SyllabusModal
        course={selectedCourseForSyllabus}
        onClose={() => setSelectedCourseForSyllabus(null)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-3">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>PRODUCTION-READY COURSES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">
              Explore All <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-purple-300 to-cyan-400">Strike Courses</span>
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              From zero programming to distributed backend architectures and autonomous agent swarms. Every line of code written live from first principles.
            </p>
          </div>

          {isCouponApplied && (
            <div className="px-4 py-2 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-bold flex items-center gap-2 shrink-0">
              <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>THUNDER40 ACTIVE: -40% AUTO-APPLIED</span>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-950/60'
                  : 'bg-zinc-900/80 hover:bg-zinc-800 text-slate-400 hover:text-slate-200 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onViewSyllabus={(c) => setSelectedCourseForSyllabus(c)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
