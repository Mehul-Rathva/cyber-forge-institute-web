
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Award, BookOpen, Users, Star } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Director of Cyber Forensics",
      credentials: "Ph.D. Computer Science, CISSP, GCFA",
      experience: "15+ years",
      specialization: "Digital Forensics, Incident Response",
      image: "/placeholder.svg",
      bio: "Dr. Mitchell leads our forensics program with extensive experience in law enforcement and corporate investigations."
    },
    {
      name: "Prof. Michael Chen",
      title: "Senior Forensics Instructor",
      credentials: "M.S. Cybersecurity, EnCE, GCIH",
      experience: "12+ years",
      specialization: "Mobile Forensics, Network Analysis",
      image: "/placeholder.svg",
      bio: "Prof. Chen specializes in mobile device investigations and has worked on high-profile cybercrime cases."
    },
    {
      name: "Dr. Amanda Rodriguez",
      title: "Legal & Ethics Instructor",
      credentials: "J.D., Ph.D. Digital Law, CIPP",
      experience: "10+ years",
      specialization: "Cyber Law, Digital Evidence",
      image: "/placeholder.svg",
      bio: "Dr. Rodriguez brings legal expertise to ensure our students understand the legal framework of digital investigations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Our Faculty</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn from industry experts and seasoned professionals with real-world experience 
            in cybersecurity and digital forensics
          </p>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-3">{member.credentials}</p>
                  
                  <div className="flex items-center justify-center mb-3">
                    <Award className="w-4 h-4 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-600">{member.experience}</span>
                  </div>
                  
                  <p className="text-sm text-gray-700 mb-4">{member.specialization}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Faculty Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-600">Advanced degrees from top universities</p>
            </div>
            
            <div className="text-center">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Experience</h3>
              <p className="text-gray-600">Real-world forensics investigations</p>
            </div>
            
            <div className="text-center">
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Certifications</h3>
              <p className="text-gray-600">Industry-recognized credentials</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Mentorship</h3>
              <p className="text-gray-600">Dedicated to student success</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;
