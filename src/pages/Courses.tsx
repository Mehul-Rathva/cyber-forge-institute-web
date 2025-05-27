
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Award, Monitor, CheckCircle, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const flagshipProgram = {
    title: "Certified Cyber & Digital Forensic Examiner (CCDFE)",
    duration: "8 weeks",
    mode: "Online/Offline",
    description: "Comprehensive certification program that covers all aspects of digital forensics from basic concepts to advanced investigation techniques.",
    highlights: [
      "Hands-on laboratory sessions",
      "Industry-standard forensic tools",
      "Real case study analysis",
      "Expert instructor guidance",
      "Certification included",
      "Job placement assistance"
    ],
    price: "₹49,999"
  };

  const modularCourses = [
    {
      title: "Digital Forensics Essentials",
      duration: "2 weeks",
      description: "Foundation course covering essential digital forensics concepts and methodologies"
    },
    {
      title: "Mobile Forensics",
      duration: "2 weeks", 
      description: "Specialized training in mobile device forensics for iOS and Android platforms"
    },
    {
      title: "Network Forensics",
      duration: "2 weeks",
      description: "Advanced techniques for network traffic analysis and intrusion investigation"
    },
    {
      title: "Email & Cloud Forensics",
      duration: "2 weeks",
      description: "Investigation techniques for email systems and cloud-based evidence"
    },
    {
      title: "Disk & File System Forensics",
      duration: "2 weeks",
      description: "Deep dive into hard disk analysis and file system investigation methods"
    },
    {
      title: "Computer Forensics",
      duration: "2 weeks",
      description: "Comprehensive computer system analysis and evidence recovery techniques"
    },
    {
      title: "Cyber Law & Ethics",
      duration: "2 weeks",
      description: "Legal aspects of digital forensics and ethical considerations in cyber investigations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of certification programs and modular courses 
            designed to meet every level of expertise in cyber forensics
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our curriculum is designed by industry experts and regularly updated to reflect 
            the latest trends in cybersecurity and digital forensics. Whether you're a beginner 
            or an experienced professional, we have the right program to advance your career.
          </p>
        </div>
      </section>

      {/* Flagship Program */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Flagship Program</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl border-2 border-blue-200 hover:border-blue-400 transition-colors duration-300">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-blue-600">{flagshipProgram.price}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{flagshipProgram.title}</h3>
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
                    </div>
                    
                    <div className="space-y-3">
                      <Link to="/courses/detail">
                        <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                          Learn More
                        </Button>
                      </Link>
                      <Link to="/enrollment">
                        <Button className="w-full bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50">
                          Enroll Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h4>
                    <ul className="space-y-3">
                      {flagshipProgram.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-600">{highlight}</span>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Digital Forensics Essentials - Modular Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modularCourses.map((course, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <Clock className="w-4 h-4 mr-2" />
                    {course.duration}
                  </div>
                  
                  <div className="space-y-3">
                    <Link to="/courses/detail">
                      <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                        Learn More
                      </Button>
                    </Link>
                    <Link to="/enrollment">
                      <Button className="w-full bg-white text-blue-600 border border-blue-600 hover:bg-blue-50">
                        Enroll
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Sidebar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Our Courses?</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Globe className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">Flexible Learning</h4>
                    <p className="text-blue-100">Online and offline options to suit your schedule</p>
                  </div>
                  
                  <div className="text-center">
                    <Award className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">Accredited Certification</h4>
                    <p className="text-blue-100">Industry-recognized certificates upon completion</p>
                  </div>
                  
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="text-lg font-bold mb-2">Expert Instructors</h4>
                    <p className="text-blue-100">Learn from seasoned cybersecurity professionals</p>
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
