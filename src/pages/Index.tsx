
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import TestimonialSlider from '@/components/TestimonialSlider';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import FeaturedCoursesSection from '@/components/FeaturedCoursesSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navigation />
      
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <WhyChooseSection />
      <FeaturedCoursesSection />
      <TestimonialSlider />
      <CTASection />

      {/* Back to Top Button */}
      {showBackToTop && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00A693] to-[#0A2540] hover:scale-110 transition-all duration-300 shadow-lg"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Index;
