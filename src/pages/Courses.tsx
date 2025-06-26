
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Award, Monitor, CheckCircle, Globe, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const flagshipProgram = {
    title: "Certified Cyber & Digital Forensic Examiner (CCDFE)",
    duration: "8 weeks",
    mode: "Online/Offline",
    totalHours: "80 Hours",
    description: "Our flagship 8-week professional program covering everything from forensic fundamentals to advanced evidence analysis. Through intensive hands-on labs and real-life case simulations, you'll learn to image and analyze digital devices, uncover hidden or deleted data, trace network intrusions, and document evidence for legal proceedings.",
    highlights: [
      "Hands-on laboratory sessions with industry-standard tools",
      "Work with EnCase, FTK, Autopsy and Wireshark",
      "Real-world case study analysis and mock investigations",
      "Expert instructor guidance from certified examiners",
      "Professional CCDFE certification upon completion",
      "Job placement assistance and career support"
    ],
    price: "₹24,999",
    whoShouldAttend: [
      "Aspiring Cyber Forensic Investigators and Analysts",
      "IT/Network professionals seeking to specialize",
      "Law enforcement officers and legal experts",
      "Security enthusiasts and computer science graduates"
    ]
  };

  const modularCourses = [
    {
      title: "Digital Forensics Essentials",
      duration: "2 weeks",
      description: "Foundation course covering essential digital forensics concepts and methodologies",
      price: "₹14,999"
    },
    {
      title: "Mobile Device Forensics", 
      duration: "2 weeks",
      description: "Specialized training in mobile device forensics for iOS and Android platforms",
      price: "₹14,999"
    },
    {
      title: "Network Intrusion Forensics",
      duration: "2 weeks",
      description: "Advanced techniques for network traffic analysis and intrusion investigation",
      price: "₹14,999"
    },
    {
      title: "Email & Cloud Forensics",
      duration: "2 weeks",
      description: "Investigation techniques for email systems and cloud-based evidence",
      price: "₹14,999"
    },
    {
      title: "Disk & File System Forensics",
      duration: "2 weeks",
      description: "Deep dive into hard disk analysis and file system investigation methods",
      price: "₹14,999"
    },
    {
      title: "Computer Forensics",
      duration: "2 weeks",
      description: "Comprehensive computer system analysis and evidence recovery techniques",
      price: "₹14,999"
    },
    {
      title: "Cyber Law & Ethics",
      duration: "2 weeks",
      description: "Legal aspects of digital forensics and ethical considerations in cyber investigations",
      price: "₹9,999"
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
        <div className="absolute inset-0 opacity-20">
          <div className="cyber-matrix-bg"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">Explore Our Cyber & Digital Forensics Courses</h1>
          <p className="text-xl text-[#E8F4F8] max-w-3xl mx-auto">
            Choose from our comprehensive range of certification programs and modular courses 
            designed to meet every level of expertise in cyber forensics
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            CDFII offers a range of certification and skill-based courses for every level of learner. Whether you're starting out or looking to specialize, 
            our curriculum is designed in collaboration with industry leaders and aligned with global best practices. All courses are available in flexible 
            formats (online, offline, instructor-led) to fit your schedule.
          </p>
        </div>
      </section>

      {/* Flagship Program */}
      <section className="py-20 bg-[#F8FFFE] relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(10,37,64,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">Flagship Program</h2>
          
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white shadow-xl border-2 border-[#0A2540]/20 hover:border-[#00A693] transition-all duration-300 hover:shadow-2xl hover:shadow-[#0A2540]/25">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Main Course Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-lg flex items-center justify-center animate-pulse shadow-lg">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-[#00A693]">{flagshipProgram.price}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{flagshipProgram.title}</h3>
                    <p className="text-gray-600 mb-6">{flagshipProgram.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        {flagshipProgram.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Monitor className="w-4 h-4 mr-2" />
                        {flagshipProgram.mode}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <BookOpen className="w-4 h-4 mr-2" />
                        {flagshipProgram.totalHours}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Users className="w-4 h-4 mr-2" />
                        Instructor-led
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <Link to="/courses/detail">
                        <Button className="w-full bg-gradient-to-r from-[#0A2540] to-[#00A693] hover:from-[#0A2540]/90 hover:to-[#00A693]/90 text-white transform hover:scale-105 transition-all duration-300 shadow-lg shadow-[#0A2540]/25">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Course Highlights */}
                  <div>
                    <h4 className="text-lg font-bold text-[#0A2540] mb-4">Key Highlights</h4>
                    <ul className="space-y-3 mb-6">
                      {flagshipProgram.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#00C851] mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="text-lg font-bold text-[#0A2540] mb-4">Who Should Attend</h4>
                    <ul className="space-y-2">
                      {flagshipProgram.whoShouldAttend.map((person, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-[#00A693] rounded-full mr-3 mt-2"></div>
                          <span className="text-sm text-gray-600">{person}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Modular Courses */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">Digital Forensics Essentials</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Modular 2-week courses that can be taken independently or combined. Each module focuses on a specific area of digital forensics.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modularCourses.map((course, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border-2 border-[#0A2540]/20 hover:bg-[#E0F2E6] hover:scale-105 hover:border-[#00A693]">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse shadow-lg">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {course.duration}
                    </div>
                    <span className="text-lg font-bold text-[#00A693]">{course.price}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/courses/detail">
                      <Button className="w-full bg-gradient-to-r from-[#0A2540] to-[#00A693] hover:from-[#0A2540]/90 hover:to-[#00A693]/90 text-white transform hover:scale-105 transition-all duration-300">
                        Learn More
                      </Button>
                    </Link>
                    <div className="text-center p-2 bg-[#E0F2E6] rounded-lg">
                      <span className="text-lg font-bold text-[#0A2540]">{course.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Sidebar */}
      <section className="py-20 bg-[#F8FFFE] relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(10,37,64,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-[#0A2540] to-[#00A693] text-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Courses?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Globe className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">Flexible Learning</h4>
                    <p className="text-[#E8F4F8]">Online and offline options to suit your schedule with live instructor-led sessions</p>
                  </div>
                  
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">Professional Certification</h4>
                    <p className="text-[#E8F4F8]">Industry-recognized certificates and preparation for international certifications</p>
                  </div>
                  
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">Expert Instructors</h4>
                    <p className="text-[#E8F4F8]">Learn from certified examiners, former investigators, and cybersecurity professionals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
