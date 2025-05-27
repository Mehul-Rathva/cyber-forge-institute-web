
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, Users, BookOpen, Trophy, TrendingUp, Lock, Shield, Eye, Zap } from 'lucide-react';
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

  const stats = [
    { icon: Users, number: 5000, label: "Students Trained", suffix: "+" },
    { icon: BookOpen, number: 20, label: "Courses Offered", suffix: "+" },
    { icon: Trophy, number: 10, label: "Years of Excellence", suffix: "+" },
    { icon: TrendingUp, number: 95, label: "Placement Rate", suffix: "%" }
  ];

  const featuredCourses = [
    {
      title: "Certified Cyber & Digital Forensic Examiner",
      duration: "8 weeks",
      mode: "Online/Offline",
      description: "Comprehensive certification program covering all aspects of digital forensics",
      highlights: ["Hands-on Labs", "Industry Tools", "Real Case Studies", "Certification Included"],
      price: "₹49,999"
    },
    {
      title: "Digital Forensics Essentials",
      duration: "2 weeks",
      mode: "Modular",
      description: "Foundation course covering essential digital forensics concepts",
      highlights: ["Beginner Friendly", "Practical Approach", "Expert Instructors", "Certificate"],
      price: "₹14,999"
    },
    {
      title: "Mobile Forensics Specialist",
      duration: "3 weeks",
      mode: "Online/Offline",
      description: "Specialized training in mobile device forensics and analysis",
      highlights: ["Latest Tools", "iOS & Android", "Case Studies", "Hands-on Practice"],
      price: "₹24,999"
    }
  ];

  const securityFeatures = [
    {
      icon: Lock,
      title: "Advanced Encryption",
      description: "Learn cutting-edge encryption techniques used by security professionals"
    },
    {
      icon: Shield,
      title: "Threat Detection",
      description: "Master the art of identifying and neutralizing cyber threats"
    },
    {
      icon: Eye,
      title: "Digital Investigation",
      description: "Uncover digital evidence with precision and forensic accuracy"
    },
    {
      icon: Zap,
      title: "Rapid Response",
      description: "Develop skills for immediate incident response and mitigation"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navigation />
      
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #00ff41 0%, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Cyber Elements */}
        <div className="absolute inset-0">
          <div className="matrix-bg opacity-30"></div>
          {/* Floating Code Blocks */}
          <div className="absolute top-20 left-10 text-green-400 font-mono text-xs opacity-60 animate-pulse">
            01001000 01100001 01100011 01101011
          </div>
          <div className="absolute top-40 right-20 text-cyan-400 font-mono text-xs opacity-60 animate-pulse delay-1000">
            {"<script>alert('SECURED')</script>"}
          </div>
          <div className="absolute bottom-32 left-20 text-blue-400 font-mono text-xs opacity-60 animate-pulse delay-2000">
            rm -rf /threats/*
          </div>
        </div>
        
        {/* Glitch Effect Logo */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 rounded-lg flex items-center justify-center text-black font-bold text-xl animate-pulse">
              CDFII
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-red-400 to-pink-400 rounded-lg flex items-center justify-center text-black font-bold text-xl opacity-0 animate-ping">
              CDFII
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
            UNLOCK THE TRUTH
            <br />
            <span className="text-3xl md:text-5xl">OF THE DIGITAL WORLD</span>
          </h1>
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Master the art of <span className="text-green-400 font-semibold">cyber forensics</span> with hands-on training from industry experts
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-lg rounded-lg animate-pulse"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/courses">
              <Button className="relative bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25">
                <Lock className="mr-2 w-5 h-5" />
                Browse Courses
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </Button>
            </Link>
            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
              <Shield className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-green-400 w-8 h-8" />
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,65,0.1)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Advanced Security Training
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-gray-900/50 border-green-400/30 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/25">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="matrix-bg"></div>
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

      {/* Featured Courses */}
      <section className="py-20 bg-black relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Elite Training Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-green-900 to-cyan-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.1)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Cyber Forensics Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates and become a certified digital forensics expert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-black px-8 py-4 text-lg rounded-lg font-semibold shadow-lg shadow-green-500/25">
              Download Brochure
            </Button>
            <Link to="/enrollment">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg shadow-cyan-500/25">
                Enroll Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
