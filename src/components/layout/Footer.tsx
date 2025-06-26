
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-naval-DEFAULT text-white">
      {/* Main Footer Content */}
      <div className="section-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-white">Naval Architecture & Marine Engineering</h3>
            <p className="text-gray-300 leading-relaxed">
              Official platform of the Naval Architecture and Marine Engineering 
              Department, Andhra University - connecting students, alumni, and faculty 
              for academic excellence and professional growth.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-white transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/study-resources" className="text-gray-300 hover:text-white transition-colors">
                  Study Resources
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Department */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-white">Department</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Department
                </Link>
              </li>
              <li>
                <Link to="/faculty" className="text-gray-300 hover:text-white transition-colors">
                  Faculty Directory
                </Link>
              </li>
              <li>
                <Link to="/clubs" className="text-gray-300 hover:text-white transition-colors">
                  Clubs & Organizations
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                  Latest News
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-white transition-colors">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-naval-light flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">
                  Naval Architecture Dept., Andhra University, Visakhapatnam, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-naval-light flex-shrink-0" />
                <a href="tel:+918912844000" className="text-gray-300 hover:text-white transition-colors">
                  +91 891 284 4000
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-naval-light flex-shrink-0" />
                <a href="mailto:navalarch@andhrauniversity.edu.in" className="text-gray-300 hover:text-white transition-colors">
                  navalarch@andhrauniversity.edu.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-naval-dark/50">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>© {currentYear} Naval Architecture & Marine Engineering Department, Andhra University. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
