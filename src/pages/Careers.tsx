
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, TrendingUp, DollarSign, Users } from 'lucide-react';

const Careers = () => {
  const careerPaths = [
    {
      title: "Digital Forensics Investigator",
      salary: "$65,000 - $95,000",
      growth: "22% growth",
      description: "Investigate cybercrimes and recover digital evidence for legal proceedings"
    },
    {
      title: "Incident Response Specialist",
      salary: "$70,000 - $110,000",
      growth: "18% growth",
      description: "Respond to security breaches and coordinate containment efforts"
    },
    {
      title: "Cybersecurity Analyst",
      salary: "$60,000 - $90,000",
      growth: "28% growth",
      description: "Monitor networks for security threats and implement protective measures"
    },
    {
      title: "Forensic Consultant",
      salary: "$80,000 - $150,000",
      growth: "15% growth",
      description: "Provide expert forensics services to organizations and law enforcement"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Career Opportunities</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover exciting career paths in the rapidly growing field of cybersecurity 
            and digital forensics
          </p>
        </div>
      </section>

      {/* Career Paths */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Career Paths</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {careerPaths.map((career, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-600">{career.salary}</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-600">{career.growth}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600">{career.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Market Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Industry Outlook</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">3.5M</div>
              <div className="text-gray-600">Unfilled cybersecurity jobs globally</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">22%</div>
              <div className="text-gray-600">Expected job growth through 2030</div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-4">$103K</div>
              <div className="text-gray-600">Average annual salary</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
