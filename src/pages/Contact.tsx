
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
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
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-[#E8F4F8] max-w-3xl mx-auto">
            Get in touch with our team to learn more about our programs or to discuss 
            your cybersecurity education goals
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-2 border-[#0A2540]/20 hover:border-[#00A693] transition-colors duration-300">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Send us a Message</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <Input placeholder="Your first name" className="border-[#0A2540]/20 focus:border-[#00A693]" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <Input placeholder="Your last name" className="border-[#0A2540]/20 focus:border-[#00A693]" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="border-[#0A2540]/20 focus:border-[#00A693]" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input type="tel" placeholder="(555) 123-4567" className="border-[#0A2540]/20 focus:border-[#00A693]" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <Input placeholder="What would you like to discuss?" className="border-[#0A2540]/20 focus:border-[#00A693]" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea placeholder="Tell us more about your inquiry..." className="min-h-32 border-[#0A2540]/20 focus:border-[#00A693]" />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-[#0A2540] to-[#00A693] hover:from-[#0A2540]/90 hover:to-[#00A693]/90 text-white shadow-lg shadow-[#0A2540]/25">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We're here to help you start your journey in cybersecurity and digital forensics. 
                  Reach out to us for admissions information, course details, or any questions about our programs.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#00A693] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1">Head Office Address</h3>
                    <p className="text-gray-600">
                      Cyber & Digital Forensics Institute of India<br />
                      4th Floor, 402, Onyx Business Center<br />
                      Above Achieve Honda, Akshar Chowk<br />
                      Old Padra Road, Vadodara<br />
                      Gujarat, INDIA - 390012
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#00A693] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1">Phone</h3>
                    <p className="text-gray-600">
                      Main: (555) 123-4567<br />
                      Admissions: (555) 123-4568
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#00A693] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@cyberforensics.edu<br />
                      admissions@cyberforensics.edu
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#00A693] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[#0A2540] mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F8FFFE] relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-[#0A2540] to-[#00A693] bg-clip-text text-transparent">Find Us</h2>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg border-2 border-[#0A2540]/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full h-96">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7383.795029003658!2d73.15749663872545!3d22.281871713722065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc797b627f2f9%3A0xfa37b61378bac3a8!2sViral%20Shah!5e0!3m2!1sen!2sin!4v1748585995118!5m2!1sen!2sin"
                    width="100%" 
                    height="100%" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="CDFII Location Map"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-5 h-5 text-[#00A693] mr-2" />
                <span className="text-lg font-semibold text-[#0A2540]">Our Location</span>
              </div>
              <p className="text-gray-600">
                4th Floor, 402, Onyx Business Center, Above Achieve Honda,<br />
                Akshar Chowk, Old Padra Road, Vadodara, Gujarat, INDIA - 390012
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
