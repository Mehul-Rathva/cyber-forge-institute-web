
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Users, Star, Shield, Lock, Eye } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. A. Kumar",
      title: "Founder & Head of Forensics",
      credentials: "Ex-Law Enforcement, 20+ years experience",
      experience: "20+ years",
      specialization: "Digital Investigations, Cybercell Operations",
      image: "/placeholder.svg",
      bio: "Ex-Law Enforcement Cybercell leader with 20 years in digital investigations. Author of 5 published forensic research papers and expert in criminal cyber investigations."
    },
    {
      name: "Ms. Neha Singh",
      title: "Senior Digital Forensics Trainer",
      credentials: "Corporate Security Consultant, Malware Expert",
      experience: "15+ years",
      specialization: "Malware Analysis, Incident Response",
      image: "/placeholder.svg",
      bio: "Former corporate security consultant specializing in malware analysis and incident response training. Expert in advanced threat detection and forensic analysis."
    },
    {
      name: "Mr. Raj Patel",
      title: "Network Forensics Expert",
      credentials: "Network Security Veteran, Ethical Hacking Expert",
      experience: "12+ years",
      specialization: "Network Security, Intrusion Analysis",
      image: "/placeholder.svg",
      bio: "Network security veteran from a Tier-1 tech firm. Expert in intrusion tracing, ethical hacking, and network forensics investigation techniques."
    },
    {
      name: "Prof. L. Mehta",
      title: "Cyber Law & Ethics Specialist",
      credentials: "Legal Consultant, IT Law Expert",
      experience: "10+ years",
      specialization: "Cyber Law, Digital Evidence",
      image: "/placeholder.svg",
      bio: "Legal consultant in IT law with expertise in digital evidence handling and courtroom procedures. Guides students on legal aspects of forensic investigations."
    }
  ];

  const expertise = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Advanced degrees from top universities and continuous research in emerging cyber threats"
    },
    {
      icon: Star,
      title: "Industry Experience",
      description: "Real-world forensics investigations experience from law enforcement and corporate sectors"
    },
    {
      icon: Award,
      title: "Professional Certifications",
      description: "Industry-recognized credentials including EnCE, CFCE, CISSP, and other specialized certifications"
    },
    {
      icon: Users,
      title: "Dedicated Mentorship",
      description: "Committed to student success with personalized guidance and career development support"
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
          <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">Meet Our Expert Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn from industry experts and seasoned professionals with real-world experience 
            in cybersecurity and digital forensics
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our instructors are the heart of CDFII's success. They are seasoned professionals with real-world experience in cyber investigations 
            and security. Each faculty member combines academic knowledge with field expertise to ensure you learn current best practices and 
            emerging techniques.
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-200 hover:bg-blue-50 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.credentials}</p>
                  
                  <div className="flex items-center justify-center mb-3">
                    <Award className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-600">{member.experience}</span>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4 font-medium">{member.specialization}</p>
                  
                  {/* Bio appears on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Faculty Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <Card key={index} className="bg-white border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Qualifications */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">What Makes Our Faculty Special</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Real Investigation Experience</h3>
                  <p className="text-gray-600">Faculty members have handled actual cybercrime cases and corporate security incidents</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
                <CardContent className="p-6 text-center">
                  <Lock className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Connections</h3>
                  <p className="text-gray-600">Strong networks in law enforcement, corporate security, and cybersecurity firms</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-blue-50">
                <CardContent className="p-6 text-center">
                  <Eye className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">Regular training on latest tools, techniques, and emerging cyber threats</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-gray-600 mb-8">
              Our faculty's combination of academic excellence and practical field experience ensures that students receive training 
              that is both theoretically sound and immediately applicable in real-world scenarios.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
