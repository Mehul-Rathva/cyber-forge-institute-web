
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, BookOpen, Microscope, Scale, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const visionMission = [
    {
      icon: Target,
      title: "Our Mission",
      content: "To bridge the gap between rapidly evolving cyber threats and skilled professionals through world-class education and training in cyber forensics, empowering professionals with cutting-edge skills to combat digital crimes."
    },
    {
      icon: Eye,
      title: "Our Vision", 
      content: "To unlock the truth of the digital world through education. We believe technology should work for justice, and we train you to wield it with precision as the leading institute for cyber forensics education."
    }
  ];

  const infrastructure = [
    {
      icon: Microscope,
      title: "Digital Forensics Lab",
      description: "State-of-the-art lab with EnCase, FTK workstations and latest forensic tools"
    },
    {
      icon: Scale,
      title: "Mock Courtroom",
      description: "Realistic courtroom setup for legal proceedings and evidence presentation training"
    },
    {
      icon: BookOpen,
      title: "Network Attack Simulation",
      description: "Dedicated environment for simulating cyberattacks and forensic analysis"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="white-matrix-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <div className="absolute inset-0 white-grid opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">About CDFII</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            "Bridging the gap between technology and justice through comprehensive cyber forensics education"
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 animate-pulse shadow-lg">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
              <div>
                <blockquote className="text-2xl text-gray-700 italic mb-6">
                  "In a world driven by technology, cyber crimes are on the rise. The forensic professionals of tomorrow must be prepared today. 
                  At CDFII, we go beyond theory — our focus is on real-world skills. Through immersive labs and expert mentorship, 
                  we aim to create a community of cyber defenders who can meet any challenge."
                </blockquote>
                <cite className="text-lg font-semibold text-gray-900">
                  - CEO, CDFII
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {visionMission.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200 hover:bg-blue-50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Hands-On Training</h3>
                <p className="text-sm text-gray-600">Practical exercises with real evidence analysis and cyberattack simulations</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Expert Faculty</h3>
                <p className="text-sm text-gray-600">Certified examiners, former investigators, and cybersecurity analysts</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Cutting-Edge Infrastructure</h3>
                <p className="text-sm text-gray-600">Digital labs, simulation environments, and mock courtroom facilities</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Global Standards</h3>
                <p className="text-sm text-gray-600">International certifications and rigorous certification paths</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Hands-on Training */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Hands-on Training Excellence</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our state-of-the-art digital forensics laboratory provides students with real-world experience 
                  using industry-standard tools and techniques. Students work on actual case studies and 
                  simulations that mirror real digital crime scenarios.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  From mobile device analysis to network forensics, our comprehensive lab setup ensures 
                  students graduate with practical skills that are immediately applicable in their careers.
                </p>
                <Link to="/courses">
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
                    Explore Our Courses
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infrastructure.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-200 hover:bg-blue-50">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Faculty */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Faculty</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our faculty comprises seasoned professionals with decades of experience in cybersecurity, 
            law enforcement, and digital forensics. Each instructor brings real-world expertise and 
            industry insights to the classroom, ensuring students learn from the best in the field.
          </p>
          <Link to="/faculty">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-blue-500/25 transform hover:scale-105 transition-all duration-300">
              Meet Our Faculty
            </Button>
          </Link>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Our Graduates Succeed</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            CDFII alumni have launched careers at law enforcement agencies, cybersecurity firms, IT departments, and consultancies. 
            We focus on job-oriented skills — from malware reverse-engineering to legal documentation — so our graduates are ready on day one.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
