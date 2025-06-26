
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Award, Monitor, CheckCircle, Shield, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const CourseDetail = () => {
  const courseInfo = {
    title: "Certified Cyber & Digital Forensic Examiner (CCDFE)",
    duration: "8 weeks",
    schedule: "Monday - Friday, 6:00 PM - 8:00 PM",
    mode: "Online/Offline",
    fee: "₹49,999"
  };

  const highlights = [
    "Hands-on laboratory sessions with real forensic tools",
    "Industry-standard software training (EnCase, FTK, Autopsy)",
    "Real case studies and practical scenarios", 
    "Expert instruction from certified forensic professionals",
    "Comprehensive certification upon completion",
    "Job placement assistance and career guidance",
    "Access to exclusive alumni network",
    "Lifetime access to course materials and updates"
  ];

  const targetAudience = [
    "Law enforcement officers and investigators",
    "IT security professionals and analysts", 
    "Legal professionals handling cybercrime cases",
    "Corporate security managers and consultants",
    "Fresh graduates seeking career in cybersecurity",
    "Anyone interested in digital forensics field"
  ];

  const downloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/CDFII Course Package.pdf';
    link.download = 'CDFII Course Package.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {courseInfo.title}
            </h1>
            <p className="text-xl text-blue-100">
              Become a certified digital forensics expert with comprehensive hands-on training
            </p>
          </div>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-center">
                  <div>
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Duration</h3>
                    <p className="text-gray-600">{courseInfo.duration}</p>
                  </div>
                  <div>
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Schedule</h3>
                    <p className="text-gray-600 text-sm">{courseInfo.schedule}</p>
                  </div>
                  <div>
                    <Monitor className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Mode</h3>
                    <p className="text-gray-600">{courseInfo.mode}</p>
                  </div>
                  <div>
                    <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Certification</h3>
                    <p className="text-gray-600">Included</p>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-bold text-gray-900">Investment</h3>
                    <p className="text-2xl font-bold text-blue-600">{courseInfo.fee}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Overview</h2>
            <div className="prose prose-lg max-w-none text-gray-600 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                The Certified Cyber & Digital Forensic Examiner (CCDFE) program is a comprehensive 
                8-week certification course designed to provide students with advanced knowledge and 
                practical skills in digital forensics and cyber investigation techniques.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                This intensive program combines theoretical knowledge with extensive hands-on practice 
                using industry-standard forensic tools and real-world case studies. Students will learn 
                to investigate various types of digital crimes, preserve digital evidence, and present 
                findings in legal proceedings.
              </p>
              <p className="text-lg leading-relaxed">
                Upon successful completion, graduates will be equipped with the skills needed to work 
                as digital forensic investigators, incident response analysts, or cybersecurity 
                consultants in both law enforcement and corporate environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights & Target Audience */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Key Highlights */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Highlights</h2>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Who Should Attend */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Who Should Attend</h2>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-8">
                    <ul className="space-y-4">
                      {targetAudience.map((audience, index) => (
                        <li key={index} className="flex items-start">
                          <Users className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{audience}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main CTA */}
              <div className="lg:col-span-2">
                <Card className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                    <p className="text-blue-100 mb-6">
                      Join thousands of successful graduates and become a certified digital forensics expert. 
                      Secure your spot in our next batch today!
                    </p>
                    <div className="text-center mb-6">
                      <span className="text-4xl font-bold text-white">{courseInfo.fee}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="flex-1 bg-white text-blue-600 hover:bg-gray-100 py-3"
                        onClick={downloadBrochure}
                      >
                        Download Brochure
                      </Button>
                      <Link to="/contact" className="flex-1">
                        <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3">
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                    <p className="text-sm text-blue-100 mt-4">
                      <Shield className="w-4 h-4 inline mr-1" />
                      Secure payment processing with industry-standard encryption
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Sidebar */}
              <div>
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Questions? Contact Admissions</h4>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Call us</p>
                          <p className="font-semibold text-gray-900">+91-9876543210</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-blue-600 mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Email us</p>
                          <p className="font-semibold text-gray-900">admissions@cdfii.in</p>
                        </div>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white">
                        Contact Admissions
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetail;
