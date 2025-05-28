
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
      title: "Certified Cyber & Digital Forensic Examiner (CCDFE)",
      duration: "8 weeks",
      mode: "Online/Offline",
      description: "Our flagship 8-week professional program covering everything from forensic fundamentals to advanced evidence analysis",
      highlights: ["Hands-on Labs", "Industry Tools", "Real Case Studies", "Certification Included"],
      price: "₹24,999"
    },
    {
      title: "Digital Forensics Essentials - Modular Courses",
      duration: "2 weeks per module",
      mode: "Modular",
      description: "Choose from specialized 2-week modules: Mobile Forensics, Network Forensics, Email & Cloud Forensics, and more",
      highlights: ["Flexible Learning", "Expert Instructors", "Practical Approach", "Certificate per Module"],
      price: "₹14,999 per module"
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
      
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #3b82f6 0%, transparent 2px)`,
          backgroundSize: '50px 50px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Elements */}
        <div className="absolute inset-0">
          <div className="white-matrix-bg opacity-20"></div>
          {/* Floating Code Blocks */}
          <div className="absolute top-20 left-10 text-blue-500 font-mono text-xs opacity-60 animate-pulse">
            01001000 01100001 01100011 01101011
          </div>
          <div className="absolute top-40 right-20 text-purple-500 font-mono text-xs opacity-60 animate-pulse delay-1000">
            {"<script>alert('SECURED')</script>"}
          </div>
          <div className="absolute bottom-32 left-20 text-indigo-500 font-mono text-xs opacity-60 animate-pulse delay-2000">
            rm -rf /threats/*
          </div>
        </div>
        
        {/* Animated Logo */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-10">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold text-xl animate-pulse shadow-lg">
              CDFII
            </div>
            <div className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-300 to-purple-300 rounded-lg flex items-center justify-center text-white font-bold text-xl opacity-0 animate-ping">
              CDFII
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
            UNLOCK THE TRUTH
            <br />
            <span className="text-3xl md:text-5xl">OF THE DIGITAL WORLD</span>
          </h1>
          <div className="relative mb-8">
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Hands-on <span className="text-blue-600 font-semibold">Cyber & Digital Forensic</span> Training from Industry Experts
            </p>
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 blur-lg rounded-lg animate-pulse"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/courses">
              <Button className="relative bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25">
                <Lock className="mr-2 w-5 h-5" />
                Browse Courses
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </Button>
            </Link>
            <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg rounded-lg font-semibold transform hover:scale-105 transition-all duration-300">
              <Shield className="mr-2 w-5 h-5" />
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-blue-500 w-8 h-8" />
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
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 opacity-10">
          <div className="white-matrix-bg"></div>
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
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose CDFII?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="bg-white border-blue-200 shadow-lg backdrop-blur-sm hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
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
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to start your journey in cyber forensics?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Download our brochure or enroll today and join thousands of successful graduates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg shadow-blue-500/25">
              Download Brochure
            </Button>
            <Link to="/enrollment">
              <Button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg shadow-purple-500/25">
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
