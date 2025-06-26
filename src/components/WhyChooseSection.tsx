
import { Card, CardContent } from '@/components/ui/card';
import { Lock, Shield, Eye, Zap } from 'lucide-react';

const WhyChooseSection = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Hands-On Training",
      description: "We emphasize practical exercises with real evidence analysis and simulation of cyberattacks"
    },
    {
      icon: Shield,
      title: "Expert Faculty",
      description: "Learn from certified examiners, former investigators, and cybersecurity analysts"
    },
    {
      icon: Eye,
      title: "Cutting-Edge Infrastructure",
      description: "Digital Forensics Lab, Network Attack Simulation Environment, and mock courtroom"
    },
    {
      icon: Zap,
      title: "Global Standards",
      description: "Prepare for international certifications and rigorous certification paths"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FFFE] relative">
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(10,37,64,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">
          Why Choose CDFII?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="bg-white border-[#0A2540]/20 shadow-lg backdrop-blur-sm hover:bg-[#E0F2E6] transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#0A2540]/25">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
