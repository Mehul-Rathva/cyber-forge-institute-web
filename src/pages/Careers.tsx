
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, TrendingUp } from 'lucide-react';

const Careers = () => {
  const careerPaths = [
    {
      title: "Digital Forensics Investigator",
      growth: "22% growth",
      description: "Investigate cybercrimes and recover digital evidence for legal proceedings"
    },
    {
      title: "Incident Response Specialist",
      growth: "18% growth",
      description: "Respond to security breaches and coordinate containment efforts"
    },
    {
      title: "Cybersecurity Analyst",
      growth: "28% growth",
      description: "Monitor networks for security threats and implement protective measures"
    },
    {
      title: "Forensic Consultant",
      growth: "15% growth",
      description: "Provide expert forensics services to organizations and law enforcement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="cyber-matrix-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] via-white to-[#E0F2E6]"></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-28 pb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] relative">
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-matrix-bg"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">Career Opportunities</h1>
          <p className="text-xl text-[#E8F4F8] max-w-3xl mx-auto">
            Discover exciting career paths in the rapidly growing field of cybersecurity 
            and digital forensics
          </p>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">Career Paths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-[#0A2540]/20 hover:border-[#00A693]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full flex items-center justify-center mr-3">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2540]">{career.title}</h3>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-[#00A693] mr-2" />
                      <span className="text-sm text-gray-600">{career.growth}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Market Stats */}
      <section className="py-20 bg-[#F8FFFE] relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(10,37,64,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">Industry Outlook</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#0A2540]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-[#0A2540] mb-4 animate-fade-in">3.5M</div>
              <div className="text-gray-600">Unfilled cybersecurity jobs globally</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#0A2540]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-[#00A693] mb-4 animate-fade-in">22%</div>
              <div className="text-gray-600">Expected job growth through 2030</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#0A2540]/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-4xl font-bold text-[#00C851] mb-4 animate-fade-in">103K</div>
              <div className="text-gray-600">Average annual salary</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
