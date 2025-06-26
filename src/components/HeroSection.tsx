
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Lock, Shield, Smartphone, Laptop, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import ParticleNetwork from '@/components/ParticleNetwork';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/CDFII Course Package.pdf';
    link.download = 'CDFII Course Package.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#002b36] via-[#003847] to-[#002b36]">
      {/* Particle Network Background */}
      <ParticleNetwork />
      
      {/* Enhanced Animated Elements */}
      <div className="absolute inset-0 z-10">
        {/* Binary Code Animation */}
        <div className="absolute top-10 left-10 text-[#00c2a8] font-mono text-xs opacity-60 animate-pulse">
          01001000 01100001 01100011 01100011 01101011<br/>
          01000011 01111001 01100010 01100101<br/>
          01110010 00100000 01000110 01101111
        </div>
        <div className="absolute top-20 right-20 text-[#00c2a8] font-mono text-xs opacity-60 animate-pulse delay-1000">
          {"<forensics>digital</forensics>"}<br/>
          {"<security>cyber</security>"}<br/>
          {"<investigation>evidence</investigation>"}
        </div>
        <div className="absolute bottom-32 left-20 text-[#00c2a8] font-mono text-xs opacity-60 animate-pulse delay-2000">
          rm -rf /threats/*<br/>
          chmod 755 /security<br/>
          sudo investigate --deep
        </div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Smartphone className="w-8 h-8 text-[#00c2a8] opacity-70" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-float delay-1000">
          <Laptop className="w-10 h-10 text-[#00c2a8] opacity-70" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float delay-2000">
          <Book className="w-8 h-8 text-[#00c2a8] opacity-70" />
        </div>
        <div className="absolute top-1/2 right-1/4 animate-float delay-500">
          <Shield className="w-9 h-9 text-[#00c2a8] opacity-70" />
        </div>
      </div>
      
      {/* CDFII Logo */}
      <div className="absolute top-28 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          <img 
            src="/lovable-uploads/15ea19b8-68ce-4c20-955d-e09b133de5fd.png" 
            alt="CDFII Logo" 
            className="h-20 w-auto shadow-lg rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00c2a8]/20 to-[#00c2a8]/10 rounded-lg animate-pulse"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className={`relative z-20 text-center px-4 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00c2a8] via-white to-[#00c2a8] bg-clip-text text-transparent animate-fade-in">
          UNLOCK THE TRUTH
          <br />
          <span className="text-3xl md:text-5xl">OF THE DIGITAL WORLD</span>
        </h1>
        <div className="relative mb-8">
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Hands-on <span className="text-[#00c2a8] font-semibold">Cyber & Digital Forensic</span> Training from Industry Experts
          </p>
          <div className="absolute -inset-4 bg-gradient-to-r from-[#00c2a8]/10 to-[#00c2a8]/5 blur-lg rounded-lg animate-pulse"></div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/courses">
            <Button className="relative bg-gradient-to-r from-[#00c2a8] to-[#008f7a] hover:from-[#00c2a8]/90 hover:to-[#008f7a]/90 text-white px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#00c2a8]/25">
              <Lock className="mr-2 w-5 h-5" />
              Browse Courses
              <div className="absolute inset-0 bg-gradient-to-r from-[#00c2a8]/40 to-[#008f7a]/40 rounded-lg blur opacity-30 animate-pulse"></div>
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="border-[#00c2a8] text-[#00c2a8] hover:bg-[#00c2a8] hover:text-white px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
            onClick={downloadBrochure}
          >
            <Shield className="mr-2 w-5 h-5" />
            Download Brochure
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="text-[#00c2a8] w-8 h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
