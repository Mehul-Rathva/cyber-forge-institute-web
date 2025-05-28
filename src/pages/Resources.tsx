
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
          <h1 className="text-5xl font-bold text-white mb-6">Learning Resources</h1>
          <p className="text-xl text-[#E8F4F8] max-w-3xl mx-auto">
            Access our comprehensive library of guides, tools, and materials to enhance 
            your digital forensics knowledge
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-[#0A2540]/20 hover:border-[#00A693]">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full flex items-center justify-center mr-3">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-[#00A693] font-semibold">{resource.type}</span>
                      <h3 className="text-xl font-bold text-[#0A2540]">{resource.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  
                  <Button className="w-full bg-gradient-to-r from-[#0A2540] to-[#00A693] hover:from-[#0A2540]/90 hover:to-[#00A693]/90 text-white">
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
      <section className="py-20 bg-[#F8FFFE] relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(10,37,64,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">External Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-lg border-2 border-[#0A2540]/20 hover:border-[#00A693] transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">SANS Institute</h3>
                <p className="text-gray-600 mb-4">Industry-leading cybersecurity training</p>
                <Button variant="outline" className="w-full border-[#00A693] text-[#00A693] hover:bg-[#00A693] hover:text-white">Visit Site</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-2 border-[#0A2540]/20 hover:border-[#00A693] transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#00A693] to-[#00C851] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">NIST Guidelines</h3>
                <p className="text-gray-600 mb-4">Official cybersecurity frameworks</p>
                <Button variant="outline" className="w-full border-[#00A693] text-[#00A693] hover:bg-[#00A693] hover:text-white">Visit Site</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg border-2 border-[#0A2540]/20 hover:border-[#00A693] transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0A2540] to-[#00C851] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">DFIR Community</h3>
                <p className="text-gray-600 mb-4">Digital forensics community forum</p>
                <Button variant="outline" className="w-full border-[#00A693] text-[#00A693] hover:bg-[#00A693] hover:text-white">Visit Site</Button>
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
