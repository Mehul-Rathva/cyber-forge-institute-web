
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What prerequisites are needed for the CCDFE program?",
      answer: "Basic computer knowledge and understanding of operating systems is helpful, but no prior forensics experience is required. We start with fundamentals and build up to advanced concepts."
    },
    {
      question: "Are the courses available online?",
      answer: "Yes, we offer both online and offline options for all our courses. Online students receive the same quality instruction and hands-on lab access as in-person students."
    },
    {
      question: "What tools and software will I learn to use?",
      answer: "You'll learn industry-standard tools including EnCase, FTK, Autopsy, Wireshark, and various open-source forensics tools. All software is provided during the course."
    },
    {
      question: "Is job placement assistance really provided?",
      answer: "Yes, we provide comprehensive career support including resume review, interview preparation, and connections to our network of hiring partners in the cybersecurity industry."
    },
    {
      question: "How long does it take to complete the certification?",
      answer: "The flagship CCDFE program takes 8 weeks for full-time study. Part-time options are available that extend the duration to 12-16 weeks."
    },
    {
      question: "What is the success rate of your students?",
      answer: "Over 95% of our students successfully complete their chosen program, and 87% find employment in cybersecurity roles within 6 months of graduation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Find answers to common questions about our courses, certification programs, 
            and career opportunities
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Common Questions</h2>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Our admissions team is here to help.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">
              <strong>Email:</strong> admissions@cyberforensics.edu
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> (555) 123-4567
            </p>
            <p className="text-gray-700">
              <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
