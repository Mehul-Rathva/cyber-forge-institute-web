
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Cyber Forensic Investigator, Delhi Police",
      content: "CDFII's training transformed my career. The hands-on approach and real case studies prepared me perfectly for my role in law enforcement.",
      rating: 5
    },
    {
      name: "Rahul Verma",
      role: "Digital Evidence Analyst, TCS",
      content: "The expert faculty and state-of-the-art labs at CDFII provided me with industry-relevant skills that I use daily in my corporate role.",
      rating: 5
    },
    {
      name: "Anjali Patel",
      role: "Incident Response Analyst, Wipro",
      content: "Best investment in my career! The certification from CDFII opened doors to amazing opportunities in cybersecurity.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">What Our Alumni Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-12 h-12 text-blue-500" />
              </div>
              
              <div className="text-center">
                <p className="text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 mr-1">★</div>
                  ))}
                </div>
                
                <h4 className="text-lg font-bold text-gray-900">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
