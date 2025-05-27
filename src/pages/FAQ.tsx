
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
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Cyber Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="matrix-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20"></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-gray-900 via-green-900 to-cyan-900 relative">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-6 animate-text-glow">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our courses, certification programs, 
            and career opportunities in <span className="text-green-400">cybersecurity</span>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="flex items-center justify-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 animate-cyber-pulse">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">
              Common Questions
            </h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-green-400/30 bg-gray-900/50 backdrop-blur-sm rounded-lg px-6 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:text-green-400 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <faq.icon className="w-4 h-4 text-black" />
                  </div>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 pt-2 pb-4 ml-11 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,255,65,0.1)_50%,transparent_75%)] bg-[length:60px_60px] animate-pulse"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our <span className="text-green-400">elite</span> admissions team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-6 h-6 text-black" />
              </div>
              <p className="text-gray-300">
                <strong className="text-green-400">Email:</strong><br />
                admissions@cyberforensics.edu
              </p>
            </div>
            <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <p className="text-gray-300">
                <strong className="text-green-400">Phone:</strong><br />
                (555) 123-4567
              </p>
            </div>
            <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-black" />
              </div>
              <p className="text-gray-300">
                <strong className="text-green-400">Hours:</strong><br />
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
