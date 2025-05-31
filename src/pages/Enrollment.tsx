
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { CheckCircle, CreditCard, Calendar, User } from 'lucide-react';

const Enrollment = () => {
  const enrollmentSteps = [
    "Complete Application",
    "Choose Payment Plan",
    "Receive Welcome Package",
    "Start Learning"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Enroll Now</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Take the first step towards your cybersecurity career. Complete your enrollment 
            and join thousands of successful graduates
          </p>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-12 bg-[#F8FFFE]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#0A2540]">Enrollment Process</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {enrollmentSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-[#00A693] text-white rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">{step}</span>
                </div>
                {index < enrollmentSteps.length - 1 && (
                  <div className="hidden md:block w-8 h-px bg-gray-300 ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg border border-[#0A2540]/10">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Enrollment Application</h2>
                  
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A2540] mb-4 flex items-center">
                        <User className="w-5 h-5 mr-2" />
                        Personal Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                          <Input placeholder="Your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                          <Input placeholder="Your last name" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <Input type="email" placeholder="your.email@example.com" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <Input type="tel" placeholder="(555) 123-4567" />
                        </div>
                      </div>
                    </div>

                    {/* Program Selection */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A2540] mb-4 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Program Selection
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Choose Program</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ccdfe">Certified Cyber & Digital Forensic Examiner (CCDFE) - ₹24,999</SelectItem>
                              <SelectItem value="mobile">Mobile Forensics Module - ₹14,999</SelectItem>
                              <SelectItem value="network">Network Forensics Module - ₹14,999</SelectItem>
                              <SelectItem value="email">Email & Cloud Forensics Module - ₹14,999</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Learning Mode</label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select learning mode" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="online">Online</SelectItem>
                              <SelectItem value="offline">In-Person</SelectItem>
                              <SelectItem value="hybrid">Hybrid</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Payment Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-[#0A2540] mb-4 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Payment Plan
                      </h3>
                      
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <Checkbox />
                          <span className="text-gray-700">Full Payment (10% discount) - ₹22,499</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <Checkbox />
                          <span className="text-gray-700">2 Installments - ₹12,999 each</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <Checkbox />
                          <span className="text-gray-700">4 Installments - ₹6,999 each</span>
                        </label>
                      </div>
                    </div>

                    {/* Terms and Conditions */}
                    <div className="space-y-4">
                      <label className="flex items-start space-x-3">
                        <Checkbox className="mt-1" />
                        <span className="text-sm text-gray-600">
                          I agree to the Terms and Conditions and Privacy Policy
                        </span>
                      </label>
                      
                      <label className="flex items-start space-x-3">
                        <Checkbox className="mt-1" />
                        <span className="text-sm text-gray-600">
                          I would like to receive updates about new courses and programs
                        </span>
                      </label>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#0A2540] to-[#00A693] hover:from-[#0A2540]/90 hover:to-[#00A693]/90 text-white">
                      Complete Enrollment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Summary Sidebar */}
            <div>
              <Card className="shadow-lg sticky top-8 border border-[#0A2540]/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#0A2540] mb-4">Enrollment Summary</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Program:</span>
                      <span className="font-medium">CCDFE</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">8 weeks</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mode:</span>
                      <span className="font-medium">Online</span>
                    </div>
                    
                    <hr className="my-4" />
                    
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total:</span>
                      <span className="text-[#00A693]">₹24,999</span>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <div className="flex items-center text-sm text-[#00C851]">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Certification included
                      </div>
                      <div className="flex items-center text-sm text-[#00C851]">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Job placement assistance
                      </div>
                      <div className="flex items-center text-sm text-[#00C851]">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Lifetime access to materials
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Enrollment;
