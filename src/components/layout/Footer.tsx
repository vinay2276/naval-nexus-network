
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
            <h3 className="text-xl font-display font-bold">Naval Nexus</h3>
            <p className="text-gray-300 leading-relaxed">
              Connecting students and alumni from the Naval Architecture and Marine 
              Engineering Department of Andhra University for collaboration, mentorship, 
              and career growth.
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
            <h3 className="text-xl font-display font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/directory" className="text-gray-300 hover:text-white transition-colors">
                  Alumni Directory
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-white transition-colors">
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-300 hover:text-white transition-colors">
                  Events & Workshops
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources/technical-papers" className="text-gray-300 hover:text-white transition-colors">
                  Technical Papers
                </Link>
              </li>
              <li>
                <Link to="/resources/job-board" className="text-gray-300 hover:text-white transition-colors">
                  Job Board
                </Link>
              </li>
              <li>
                <Link to="/resources/project-hub" className="text-gray-300 hover:text-white transition-colors">
                  Project Hub
                </Link>
              </li>
              <li>
                <Link to="/resources/industry-standards" className="text-gray-300 hover:text-white transition-colors">
                  Industry Standards
                </Link>
              </li>
              <li>
                <Link to="/resources/tutorials" className="text-gray-300 hover:text-white transition-colors">
                  Tutorials & Guides
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold">Contact Us</h3>
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
                <a href="mailto:contact@navalnexus.edu" className="text-gray-300 hover:text-white transition-colors">
                  contact@navalnexus.edu
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
            <p>© {currentYear} Naval Nexus Network. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
