
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
      className="relative text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-green-400/30 rounded-lg backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25 group"
    >
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-20 rounded-lg"></div>
      
      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/20 to-cyan-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 relative animate-cyber-pulse">
          <Icon className="w-8 h-8 text-black" />
          {/* Icon Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full blur opacity-50 animate-pulse"></div>
        </div>
        
        <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-2 font-mono">
          {count.toLocaleString()}{suffix}
        </div>
        
        <div className="text-gray-300 font-medium tracking-wide">{label}</div>
        
        {/* Scanning Line Effect */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
