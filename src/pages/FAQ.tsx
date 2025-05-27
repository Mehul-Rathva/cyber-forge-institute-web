
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Shield, Lock, Eye, Zap } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What prerequisites are needed for the CCDFE program?",
      answer: "Basic computer knowledge and understanding of operating systems is helpful, but no prior forensics experience is required. We start with fundamentals and build up to advanced concepts.",
      icon: Shield
    },
    {
      question: "Are the courses available online?",
      answer: "Yes, we offer both online and offline options for all our courses. Online students receive the same quality instruction and hands-on lab access as in-person students.",
      icon: Eye
    },
    {
      question: "What tools and software will I learn to use?",
      answer: "You'll learn industry-standard tools including EnCase, FTK, Autopsy, Wireshark, and various open-source forensics tools. All software is provided during the course.",
      icon: Lock
    },
    {
      question: "Is job placement assistance really provided?",
      answer: "Yes, we provide comprehensive career support including resume review, interview preparation, and connections to our network of hiring partners in the cybersecurity industry.",
      icon: Zap
    },
    {
      question: "How long does it take to complete the certification?",
      answer: "The flagship CCDFE program takes 8 weeks for full-time study. Part-time options are available that extend the duration to 12-16 weeks.",
      icon: Shield
    },
    {
      question: "What is the success rate of your students?",
      answer: "Over 95% of our students successfully complete their chosen program, and 87% find employment in cybersecurity roles within 6 months of graduation.",
      icon: Eye
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="white-matrix-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 relative">
        <div className="absolute inset-0 white-grid opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6 animate-text-glow">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our courses, certification programs, 
            and career opportunities in <span className="text-blue-600">cybersecurity</span>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4 animate-pulse shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Common Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-blue-200 bg-white shadow-lg backdrop-blur-sm rounded-lg px-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <faq.icon className="w-4 h-4 text-white" />
                  </div>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4 ml-11 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(59,130,246,0.05)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our <span className="text-blue-600">elite</span> admissions team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-lg backdrop-blur-sm hover:bg-blue-50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600">
                <strong className="text-blue-600">Email:</strong><br />
                admissions@cyberforensics.edu
              </p>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-lg backdrop-blur-sm hover:bg-blue-50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600">
                <strong className="text-blue-600">Phone:</strong><br />
                (555) 123-4567
              </p>
            </div>
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-lg backdrop-blur-sm hover:bg-blue-50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <p className="text-gray-600">
                <strong className="text-blue-600">Hours:</strong><br />
                Monday - Friday, 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
