
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, BookOpen, Video, FileText, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      type: "Guide",
      title: "Digital Forensics Best Practices",
      description: "Comprehensive guide covering industry standards and methodologies",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      type: "Video",
      title: "Introduction to Mobile Forensics",
      description: "Video tutorial covering mobile device investigation techniques",
      icon: Video,
      downloadUrl: "#"
    },
    {
      type: "Whitepaper",
      title: "Cyber Law and Evidence Handling",
      description: "Legal considerations for digital forensics professionals",
      icon: BookOpen,
      downloadUrl: "#"
    },
    {
      type: "Tool",
      title: "Forensics Toolkit Demo",
      description: "Trial version of professional forensics software",
      icon: Download,
      downloadUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Learning Resources</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Access our comprehensive library of guides, tools, and materials to enhance 
            your digital forensics knowledge
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <resource.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div>
                      <span className="text-sm text-blue-600 font-semibold">{resource.type}</span>
                      <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">External Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <ExternalLink className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">SANS Institute</h3>
                <p className="text-gray-600 mb-4">Industry-leading cybersecurity training</p>
                <Button variant="outline" className="w-full">Visit Site</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <ExternalLink className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">NIST Guidelines</h3>
                <p className="text-gray-600 mb-4">Official cybersecurity frameworks</p>
                <Button variant="outline" className="w-full">Visit Site</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <ExternalLink className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">DFIR Community</h3>
                <p className="text-gray-600 mb-4">Digital forensics community forum</p>
                <Button variant="outline" className="w-full">Visit Site</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
