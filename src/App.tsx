import React from 'react';
import { SaleProvider } from './context/SaleContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/hero/HeroSection';
import { PlacementMarquee } from './components/hero/PlacementMarquee';
import { ThunderSpotlight } from './components/thunder/ThunderSpotlight';
import { CourseGrid } from './components/courses/CourseGrid';
import { MentorSpotlight } from './components/mentor/MentorSpotlight';
import { PricingSection } from './components/pricing/PricingSection';
import { TestimonialsSection } from './components/reviews/TestimonialsSection';
import { FAQSection } from './components/faq/FAQSection';
import { ThunderSaleExperience } from './components/sale/ThunderSaleExperience';
import { FloatingSaleDock } from './components/sale/FloatingSaleDock';
import { JudgeTestControls } from './components/sale/JudgeTestControls';
import { Toast } from './components/ui/Toast';

export const App: React.FC = () => {
  return (
    <SaleProvider>
      <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col relative selection:bg-indigo-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection />
          <PlacementMarquee />
          <ThunderSpotlight />
          <CourseGrid />
          <MentorSpotlight />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Sale Experience Overlays & Floating Hubs */}
        <ThunderSaleExperience />
        <FloatingSaleDock />
        <JudgeTestControls />
        <Toast />
      </div>
    </SaleProvider>
  );
};

export default App;
