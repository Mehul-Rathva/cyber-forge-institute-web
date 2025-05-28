
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Users, Star, Shield, Lock, Eye, MessageCircle, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
      quote: "Leadership is not about being in charge. It's about taking care of those in your charge.",
      description: "Visionary founder and leader of CDFII. With a passion for digital integrity, Viral Shah champions hands-on, ethical training in cyber forensics to build a safer digital future.",
      icon: Shield
    },
    {
      name: "Harsh Patel",
      title: "Cyber & Digital Forensic Expert",
      quote: "The truth is in the data—our job is to uncover it with accuracy and integrity.",
      description: "A seasoned investigator with years of experience in advanced evidence analysis, Harsh specializes in malware tracking and system forensics.",
      icon: Lock
    },
    {
      name: "Nakshatra Thakkar",
      title: "Social Media Investigator",
      quote: "Every post tells a story. I connect the dots to reveal the truth.",
      description: "Expert in OSINT and digital footprint tracing, Nakshatra leads the way in social media forensics, uncovering evidence across online platforms.",
      icon: Eye
    },
    {
      name: "Manan Patil",
      title: "Cyber & Digital Forensic Expert",
      quote: "In the world of zeros and ones, we find answers that protect and serve justice.",
      description: "Manan specializes in binary-level analysis and data recovery. His work bridges deep tech and investigative logic in forensic environments.",
      icon: Award
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50"></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[#1F4E79] to-[#00C2A8] relative">
        <div className="absolute inset-0 cyber-grid opacity-20"></div>
        
        {/* Animated CDFII Logo */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-[#1F4E79] to-[#00C2A8] rounded-lg flex items-center justify-center text-white font-bold text-xl animate-float shadow-lg">
              CDFII
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-300 to-teal-300 rounded-lg flex items-center justify-center text-white font-bold text-xl opacity-0 animate-ping">
              CDFII
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10 mt-16">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">Our Creative Team</h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
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
                  <Card className="absolute inset-0 backface-hidden bg-white shadow-lg border-2 border-[#1F4E79]/20 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="w-20 h-20 bg-gradient-to-r from-[#1F4E79] to-[#00C2A8] rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse shadow-lg">
                          <member.icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1F4E79] mb-2">{member.name}</h3>
                        <p className="text-[#00C2A8] font-semibold mb-4">{member.title}</p>
                      </div>
                      <div className="italic text-gray-600 text-sm">
                        "{member.quote}"
                      </div>
                    </CardContent>
                  </Card>

                  {/* Back of Card */}
                  <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[#1F4E79] to-[#00C2A8] text-white shadow-lg">
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
      <section className="py-20 bg-[#F0F8FF] relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(31,78,121,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#1F4E79] to-[#00C2A8] bg-clip-text text-transparent">Team Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="bg-white border-2 border-[#1F4E79]/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-[#E0F7FA]">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#1F4E79] to-[#00C2A8] rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F4E79] mb-2">{item.title}</h3>
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
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[#1F4E79] to-[#00C2A8] bg-clip-text text-transparent">Our Mission</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-[#1F4E79]/20">
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

      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1F4E79] to-[#00C2A8] hover:scale-110 transition-all duration-300 shadow-lg animate-pulse">
          <MessageCircle className="w-8 h-8 text-white" />
        </Button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <div className="fixed bottom-6 left-6 z-50">
          <Button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00C2A8] to-[#1F4E79] hover:scale-110 transition-all duration-300 shadow-lg"
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
