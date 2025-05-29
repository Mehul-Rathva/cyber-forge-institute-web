
import { useEffect, useRef, useState } from 'react';
import { Calendar, Award, Users, Building } from 'lucide-react';

const TimelineMilestones = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const milestones = [
    {
      year: "2014",
      title: "Institute Founded",
      description: "CDFII established with a vision to bridge the gap in cyber forensics education",
      icon: Building
    },
    {
      year: "2016", 
      title: "First Batch Graduated",
      description: "100% placement rate for our inaugural batch of certified forensic experts",
      icon: Users
    },
    {
      year: "2019",
      title: "Industry Recognition",
      description: "Awarded 'Best Cyber Forensics Training Institute' by National Cyber Security Board",
      icon: Award
    },
    {
      year: "2024",
      title: "10 Years of Excellence",
      description: "Celebrating a decade of training over 5,000 cybersecurity professionals",
      icon: Calendar
    }
  ];

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => [...prev, index]);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(ref);
        return observer;
      }
      return null;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FFFE]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">Our Journey</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0A2540] to-[#00A693] transform md:-translate-x-1/2"></div>
            
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              const isVisible = visibleItems.includes(index);
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={el => refs.current[index] = el}
                  className={`relative flex items-center mb-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full transform md:-translate-x-1/2 z-10 transition-all duration-500 ${
                    isVisible ? 'scale-100' : 'scale-0'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 transition-all duration-700 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : `${isEven ? '-translate-x-10' : 'translate-x-10'} opacity-0`
                  }`}>
                    <div className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-[#0A2540]/10 ${
                      isEven ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-[#00A693]">{milestone.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540] mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineMilestones;
