import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Users, Star, Shield, Lock, Eye, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Faculty = () => {
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

  const teamMembers = [
    {
      name: "Viral Shah",
      title: "CEO of CDFII",
      image: "/lovable-uploads/a71336b3-4fab-46c9-a4b7-bce9ce882ae8.png",
      quote: "Leadership is not about being in charge. It's about taking care of those in your charge.",
      description: "Visionary founder and leader of CDFII. With a passion for digital integrity, Viral Shah champions hands-on, ethical training in cyber forensics to build a safer digital future.",
      icon: Shield
    },
    {
      name: "Harsh Patel",
      title: "Cyber & Digital Forensic Expert",
      image: "/lovable-uploads/23dabe31-f886-4475-a8a4-bc9a8ce83c63.png",
      quote: "The truth is in the data—our job is to uncover it with accuracy and integrity.",
      description: "A seasoned investigator with years of experience in advanced evidence analysis, Harsh specializes in malware tracking and system forensics.",
      icon: Lock
    },
    {
      name: "Manan Patil",
      title: "Cyber & Digital Forensic Expert",
      image: "/lovable-uploads/042c2d10-68a3-46d1-8bb8-1cd10f0d1f0b.png",
      quote: "In the world of zeros and ones, we find answers that protect and serve justice.",
      description: "Manan specializes in binary-level analysis and data recovery. His work bridges deep tech and investigative logic in forensic environments.",
      icon: Award
    },
    {
      name: "Nakshatra Thakkar",
      title: "Social Media Investigator",
      image: "/lovable-uploads/c615536e-4f8e-4c7e-bb86-434cd018d232.png",
      quote: "Every post tells a story. I connect the dots to reveal the truth.",
      description: "Expert in OSINT and digital footprint tracing, Nakshatra leads the way in social media forensics, uncovering evidence across online platforms.",
      icon: Eye
    }
  ];

  const expertise = [
    {
      icon: BookOpen,
      title: "Innovative Leadership",
      description: "Guiding the future of cyber forensics education with cutting-edge methodologies"
    },
    {
      icon: Star,
      title: "Industry Excellence",
      description: "Real-world expertise from investigations and corporate security environments"
    },
    {
      icon: Award,
      title: "Educational Innovation",
      description: "Pioneering hands-on training approaches that bridge theory and practice"
    },
    {
      icon: Users,
      title: "Student Success",
      description: "Dedicated to empowering the next generation of digital investigators"
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
      <section className="pt-24 pb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] relative">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">Our Creative Team</h1>
          <p className="text-xl text-[#E8F4F8] max-w-4xl mx-auto">
            At CDFII, our team of visionary leaders and forensic experts is dedicated to innovation, 
            precision, and integrity in the world of cyber and digital forensics. Their expertise 
            drives our mission to empower and educate the next generation of investigators.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group perspective-1000">
                <div className="relative h-96 transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-180">
                  {/* Front of Card */}
                  <Card className="absolute inset-0 backface-hidden bg-white shadow-lg border-2 border-[#0A2540]/20 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden shadow-lg border-4 border-gradient-to-r from-[#0A2540] to-[#00A693] rounded-lg">
                          <Avatar className="w-full h-full rounded-lg">
                            <AvatarImage 
                              src={member.image} 
                              alt={member.name}
                              className="object-cover w-full h-full rounded-lg"
                            />
                            <AvatarFallback className="bg-gradient-to-r from-[#0A2540] to-[#00A693] text-white text-2xl rounded-lg">
                              {member.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <h3 className="text-xl font-bold text-[#0A2540] mb-2">{member.name}</h3>
                        <p className="text-[#00A693] font-semibold mb-4">{member.title}</p>
                      </div>
                      <div className="italic text-gray-600 text-sm">
                        "{member.quote}"
                      </div>
                    </CardContent>
                  </Card>

                  {/* Back of Card */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#0A2540] to-[#00A693] text-white shadow-lg">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                      <h3 className="text-lg font-bold mb-4">{member.name}</h3>
                      <p className="text-sm leading-relaxed">{member.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-[#F8FFFE] relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(10,37,64,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">Team Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="bg-white border-2 border-[#0A2540]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#E8F4F8]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">Our Mission</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-[#0A2540]/20">
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to advancing the field of cyber and digital forensics through innovative education, 
                cutting-edge research, and hands-on training. Our team combines deep technical expertise with a 
                passion for justice, ensuring that every student graduates with the skills and integrity needed 
                to make a meaningful impact in the digital security landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <div className="fixed bottom-6 left-6 z-50">
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

export default Faculty;
