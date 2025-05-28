
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Users, BookOpen, Trophy, TrendingUp, Lock, Shield, Eye, Zap, ArrowUp, Smartphone, Laptop, Book } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedCounter from '@/components/AnimatedCounter';
import CourseCard from '@/components/CourseCard';
import TestimonialSlider from '@/components/TestimonialSlider';
import TimelineMilestones from '@/components/TimelineMilestones';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  const stats = [
    { icon: Users, number: 5000, label: "Students Trained", suffix: "+" },
    { icon: BookOpen, number: 20, label: "Courses Offered", suffix: "+" },
    { icon: Trophy, number: 10, label: "Years of Excellence", suffix: "+" },
    { icon: TrendingUp, number: 95, label: "Placement Rate", suffix: "%" }
  ];

  const featuredCourses = [
    {
      title: "Certified Cyber & Digital Forensic Examiner (CCDFE)",
      duration: "8 weeks",
      mode: "Online/Offline",
      description: "Our flagship 8-week professional program covering everything from forensic fundamentals to advanced evidence analysis",
      highlights: ["Hands-on Labs", "Industry Tools", "Real Case Studies", "Certification Included"],
      price: "₹49,999"
    },
    {
      title: "Digital Forensics Essentials - Mobile Forensics",
      duration: "2 weeks",
      mode: "Modular",
      description: "Specialized module focusing on mobile device forensics, data extraction, and analysis techniques",
      highlights: ["Mobile Tools", "Expert Instructors", "Practical Labs", "Certificate Included"],
      price: "₹14,999"
    }
  ];

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
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <Navigation />
      
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #0A2540 0%, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] via-white to-[#E0F2E6]"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Enhanced Animated Elements */}
        <div className="absolute inset-0">
          <div className="cyber-matrix-bg opacity-20"></div>
          
          {/* Binary Code Animation */}
          <div className="absolute top-10 left-10 text-[#0A2540] font-mono text-xs opacity-60 animate-pulse">
            01001000 01100001 01100011 01101011<br/>
            01000011 01111001 01100010 01100101<br/>
            01110010 00100000 01000110 01101111
          </div>
          <div className="absolute top-20 right-20 text-[#00A693] font-mono text-xs opacity-60 animate-pulse delay-1000">
            {"<forensics>digital</forensics>"}<br/>
            {"<security>cyber</security>"}<br/>
            {"<investigation>evidence</investigation>"}
          </div>
          <div className="absolute bottom-32 left-20 text-[#0A2540] font-mono text-xs opacity-60 animate-pulse delay-2000">
            rm -rf /threats/*<br/>
            chmod 755 /security<br/>
            sudo investigate --deep
          </div>
          
          {/* Floating Tech Icons */}
          <div className="absolute top-1/4 left-1/4 animate-float">
            <Smartphone className="w-8 h-8 text-[#00C851] opacity-70" />
          </div>
          <div className="absolute top-1/3 right-1/3 animate-float delay-1000">
            <Laptop className="w-10 h-10 text-[#0A2540] opacity-70" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-float delay-2000">
            <Book className="w-8 h-8 text-[#00A693] opacity-70" />
          </div>
          <div className="absolute top-1/2 right-1/4 animate-float delay-500">
            <Shield className="w-9 h-9 text-[#00C851] opacity-70" />
          </div>
        </div>
        
        {/* Animated Logo */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-lg flex items-center justify-center text-white font-bold text-xl animate-float shadow-lg">
              CDFII
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-[#00A693] to-[#00C851] rounded-lg flex items-center justify-center text-white font-bold text-xl opacity-0 animate-ping">
              CDFII
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0A2540] via-[#00A693] to-[#00C851] bg-clip-text text-transparent animate-fade-in">
            UNLOCK THE TRUTH
            <br />
            <span className="text-3xl md:text-5xl">OF THE DIGITAL WORLD</span>
          </h1>
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hands-on <span className="text-[#0A2540] font-semibold">Cyber & Digital Forensic</span> Training from Industry Experts
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-[#E8F4F8] to-[#E0F2E6] blur-lg rounded-lg animate-pulse"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/courses">
              <Button className="relative bg-gradient-to-r from-[#0A2540] to-[#00A693] hover:from-[#0A2540]/90 hover:to-[#00A693]/90 text-white px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0A2540]/25">
                <Lock className="mr-2 w-5 h-5" />
                Browse Courses
                <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/40 to-[#00A693]/40 rounded-lg blur opacity-30 animate-pulse"></div>
              </Button>
            </Link>
            <Button variant="outline" className="border-[#00A693] text-[#00A693] hover:bg-[#00A693] hover:text-white px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
              <Shield className="mr-2 w-5 h-5" />
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-[#0A2540] w-8 h-8" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-lg text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Cyber & Digital Forensics Institute of India (CDFII) is a premier training academy empowering the next generation of cyber investigators. 
            We combine cutting-edge technology with real-world case simulations so you learn by doing, not just by watching. With industry-standard 
            labs and certified instructors, we turn beginners into highly skilled forensic analysts ready to uncover digital evidence in any scenario.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F8FFFE] relative">
        <div className="absolute inset-0 opacity-10">
          <div className="cyber-matrix-bg"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedCounter
                key={index}
                icon={stat.icon}
                number={stat.number}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose CDFII Section */}
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

      {/* Featured Courses */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">
            Featured Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {featuredCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Milestones */}
      <TimelineMilestones />

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Enhanced CTA Banner with Course Information */}
      <section className="py-20 bg-gradient-to-r from-[#F8FFFE] via-[#E0F2E6] to-[#F8FFFE] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,37,64,0.1)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Ready to start your journey in cyber forensics?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Choose from our comprehensive programs and join thousands of successful graduates!
          </p>
          
          {/* Course Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <Card className="bg-white border-[#0A2540]/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">CCDFE Program</h3>
                <p className="text-sm text-gray-600 mb-3">8-week comprehensive program</p>
                <p className="text-2xl font-bold text-[#00A693]">₹49,999</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#0A2540]/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Mobile Forensics</h3>
                <p className="text-sm text-gray-600 mb-3">2-week specialized module</p>
                <p className="text-2xl font-bold text-[#00A693]">₹14,999</p>
              </CardContent>
            </Card>
            <Card className="bg-white border-[#0A2540]/20 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">Network Forensics</h3>
                <p className="text-sm text-gray-600 mb-3">2-week specialized module</p>
                <p className="text-2xl font-bold text-[#00A693]">₹14,999</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-[#0A2540] to-[#00A693] hover:from-[#0A2540]/90 hover:to-[#00A693]/90 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg shadow-[#0A2540]/25">
              Download Brochure
            </Button>
            <Link to="/enrollment">
              <Button className="bg-gradient-to-r from-[#00A693] to-[#00C851] hover:from-[#00A693]/90 hover:to-[#00C851]/90 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg shadow-[#00A693]/25">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

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
