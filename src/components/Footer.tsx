
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#0A2540]/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-[#0A2540] to-[#00A693] rounded-full flex items-center justify-center text-white font-bold">
                CDFII
              </div>
              <span className="text-xl font-bold text-[#0A2540]">
                Cyber & Digital Forensics Institute of India
              </span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              Leading institute for cyber forensics and digital investigation training. 
              Empowering the next generation of cybersecurity professionals.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#00A693] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#00A693] cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#00A693] cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#00A693] cursor-pointer transition-colors" />
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
              <li><Link to="/resources" className="text-gray-600 hover:text-[#00A693] transition-colors">Resources</Link></li>
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
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#00A693]" />
                <span className="text-gray-600">New Delhi, India</span>
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
