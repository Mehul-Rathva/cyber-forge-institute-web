
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#0A2540]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/360e0c9c-cfef-4b11-80cd-2ab5dabea33c.png" 
                alt="CDFII Logo" 
                className="h-14 w-auto"
              />
              <span className="text-xl font-bold text-[#0A2540]">
                Cyber & Digital Forensics Institute of India
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Leading institute for cyber forensics and digital investigation training. 
              Empowering the next generation of cybersecurity professionals.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/197WuS1wkh/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-gray-400 hover:text-[#00A693] cursor-pointer transition-colors" />
              </a>
              <a 
                href="https://youtube.com/@cdfii-p3l?si=NPUbcXwFhnKNKrAr" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 text-gray-400 hover:text-[#00A693] cursor-pointer transition-colors" />
              </a>
              <a 
                href="https://www.instagram.com/cdfii_in?igsh=ZjN2ODF3emh3dXdn" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-[#00A693] cursor-pointer transition-colors" />
              </a>
              <a 
                href="http://linkedin.com/in/cdfii-067762369/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#00A693] cursor-pointer transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#0A2540] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-600 hover:text-[#00A693] transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-600 hover:text-[#00A693] transition-colors">Courses</Link></li>
              <li><Link to="/faculty" className="text-gray-600 hover:text-[#00A693] transition-colors">Faculty</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-[#00A693] transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#0A2540] mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#00A693]" />
                <span className="text-gray-600">+91-9876543210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#00A693]" />
                <span className="text-gray-600">info@cdfii.in</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#00A693] mt-1" />
                <span className="text-gray-600 text-sm">
                  4th Floor, 402, Onyx Business Center,<br />
                  Above Achieve Honda, Akshar Chowk,<br />
                  Old Padra Road, Vadodara,<br />
                  Gujarat, INDIA - 390012
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#0A2540]/20 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2024 Cyber & Digital Forensics Institute of India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
