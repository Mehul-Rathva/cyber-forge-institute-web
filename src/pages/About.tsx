
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Users, BookOpen, Microscope, Scale, Link } from 'lucide-react';

const About = () => {
  const visionMission = [
    {
      icon: Target,
      title: "Our Mission",
      content: "To provide world-class education and training in cyber forensics, empowering professionals with cutting-edge skills to combat digital crimes and secure the cyber landscape."
    },
    {
      icon: Eye,
      title: "Our Vision", 
      content: "To be the leading institute globally for cyber forensics education, creating a new generation of ethical hackers and digital investigators who protect society's digital infrastructure."
    }
  ];

  const infrastructure = [
    {
      icon: Microscope,
      title: "Digital Forensics Lab",
      description: "State-of-the-art lab with latest forensic tools and equipment for hands-on training"
    },
    {
      icon: Scale,
      title: "Mock Courtroom",
      description: "Realistic courtroom setup for legal proceedings and evidence presentation training"
    },
    {
      icon: BookOpen,
      title: "Research Center",
      description: "Dedicated space for advanced research in emerging cyber threats and forensic techniques"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">About CDFII</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            "Bridging the gap between technology and justice through comprehensive cyber forensics education"
          </p>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <Users className="w-16 h-16 text-white" />
                </div>
              </div>
              <div>
                <blockquote className="text-2xl text-gray-700 italic mb-6">
                  "At CDFII, we believe that the future of cybersecurity lies in the hands of well-trained forensic experts. 
                  Our mission is to bridge the critical gap between technology and justice, ensuring that every digital crime 
                  leaves a trail that can be followed and justice can be served."
                </blockquote>
                <cite className="text-lg font-semibold text-gray-900">
                  - Dr. Rajesh Kumar, Founder & CEO
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {visionMission.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
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

      {/* Hands-on Training */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Hands-on Training Excellence</h2>
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
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full">
                    Explore Our Courses
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {infrastructure.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Expert Faculty</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our faculty comprises seasoned professionals with decades of experience in cybersecurity, 
            law enforcement, and digital forensics. Each instructor brings real-world expertise and 
            industry insights to the classroom, ensuring students learn from the best in the field.
          </p>
          <Link to="/faculty">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full">
              Meet Our Faculty
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
