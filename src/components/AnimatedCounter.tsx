
import { useState, useEffect, useRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface AnimatedCounterProps {
  icon: LucideIcon;
  number: number;
  label: string;
  suffix?: string;
}

const AnimatedCounter = ({ icon: Icon, number, label, suffix = '' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const stepTime = 50;
      const steps = duration / stepTime;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div 
      ref={ref} 
      className="relative text-center p-6 bg-white border border-[#0A2540]/20 rounded-lg shadow-lg backdrop-blur-sm hover:bg-[#E0F2E6] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0A2540]/25 group"
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 white-grid opacity-10 rounded-lg"></div>
      
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#0A2540]/10 to-[#00A693]/10 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full flex items-center justify-center mx-auto mb-4 relative animate-pulse shadow-lg">
          <Icon className="w-8 h-8 text-white" />
          {/* Icon Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/40 to-[#00A693]/40 rounded-full blur opacity-30 animate-pulse"></div>
        </div>
        
        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text mb-2 font-mono">
          {count.toLocaleString()}{suffix}
        </div>
        
        <div className="text-gray-600 font-medium tracking-wide">{label}</div>
        
        {/* Scanning Line Effect */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[#00A693] to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
