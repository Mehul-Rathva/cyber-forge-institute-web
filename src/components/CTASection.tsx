
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/CDFII Course Package.pdf';
    link.download = 'CDFII Course Package.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#F8FFFE] via-[#E0F2E6] to-[#F8FFFE] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,37,64,0.1)_0%,transparent_70%)]"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl font-bold text-[#0A2540] mb-6">Ready to start your journey in cyber forensics?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Choose from our comprehensive programs and join thousands of successful graduates!
        </p>
        
        {/* Course Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <Card className="bg-white border-[#0A2540]/20 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#0A2540] mb-2">CCDFE Program</h3>
              <p className="text-sm text-gray-600 mb-3">8-week comprehensive program</p>
              <p className="text-2xl font-bold text-[#00A693]">₹24,999</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-[#0A2540]/20 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#0A2540] mb-2">Mobile Forensics</h3>
              <p className="text-sm text-gray-600 mb-3">2-week specialized module</p>
              <p className="text-2xl font-bold text-[#00A693]">₹14,999</p>
            </CardContent>
          </Card>
          <Card className="bg-white border-[#0A2540]/20 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold text-[#0A2540] mb-2">Network Forensics</h3>
              <p className="text-sm text-gray-600 mb-3">2-week specialized module</p>
              <p className="text-2xl font-bold text-[#00A693]">₹14,999</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-gradient-to-r from-[#0A2540] to-[#00A693] hover:from-[#0A2540]/90 hover:to-[#00A693]/90 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg shadow-[#0A2540]/25"
            onClick={downloadBrochure}
          >
            Download Brochure
          </Button>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-[#00A693] to-[#00C851] hover:from-[#00A693]/90 hover:to-[#00C851]/90 text-white px-8 py-4 text-lg rounded-lg font-semibold shadow-lg shadow-[#00A693]/25">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
