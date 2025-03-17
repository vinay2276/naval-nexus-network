
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Anchor, AnchorIcon, Award, BookOpen, Clock, Compass, GraduationCap, Heart, Ship, Users } from 'lucide-react';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-naval-subtle py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg text-naval-DEFAULT mb-6">About Naval Nexus</h1>
              <p className="text-lg text-gray-700 mb-8">
                Connecting the maritime engineering community through collaboration, mentorship, and knowledge sharing.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center text-naval-DEFAULT">
                  <Ship className="h-5 w-5 mr-2" />
                  <span className="font-medium">Founded in 2024</span>
                </div>
                <div className="flex items-center text-naval-DEFAULT">
                  <Users className="h-5 w-5 mr-2" />
                  <span className="font-medium">5,000+ Members</span>
                </div>
                <div className="flex items-center text-naval-DEFAULT">
                  <GraduationCap className="h-5 w-5 mr-2" />
                  <span className="font-medium">25+ Partner Universities</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-md text-naval-DEFAULT mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Naval Nexus was founded with a simple mission: to create a dedicated platform where naval architects, marine engineers, and industry professionals could connect, collaborate, and grow together.
                </p>
                <p className="text-gray-700 mb-4">
                  What began as a small alumni network for a single university has evolved into a global community spanning dozens of institutions and companies across the maritime sector.
                </p>
                <p className="text-gray-700">
                  Today, Naval Nexus serves as the premier professional network for the naval architecture and marine engineering community, offering mentorship, career resources, technical knowledge sharing, and networking opportunities.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" 
                  alt="Naval engineering team" 
                  className="rounded-xl shadow-elevation w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-card p-4 flex items-center">
                  <Clock className="text-naval-DEFAULT h-8 w-8 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Est.</p>
                    <p className="text-xl font-bold text-naval-DEFAULT">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="bg-naval-subtle py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="heading-md text-naval-DEFAULT mb-2 text-center">Our Core Values</h2>
            <p className="text-gray-700 mb-12 text-center max-w-2xl mx-auto">
              The principles that guide our community and shape everything we do
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-none shadow-card transition-all hover:shadow-elevation hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-naval-DEFAULT/10 p-3 rounded-lg w-fit mb-4">
                    <Compass className="h-6 w-6 text-naval-DEFAULT" />
                  </div>
                  <h3 className="text-xl font-semibold text-naval-DEFAULT mb-2">Innovation</h3>
                  <p className="text-gray-700">
                    We embrace forward-thinking approaches and new technologies that advance the maritime industry.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-card transition-all hover:shadow-elevation hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-naval-DEFAULT/10 p-3 rounded-lg w-fit mb-4">
                    <Anchor className="h-6 w-6 text-naval-DEFAULT" />
                  </div>
                  <h3 className="text-xl font-semibold text-naval-DEFAULT mb-2">Integrity</h3>
                  <p className="text-gray-700">
                    We maintain the highest standards of professionalism, transparency, and ethical conduct.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-card transition-all hover:shadow-elevation hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-naval-DEFAULT/10 p-3 rounded-lg w-fit mb-4">
                    <Heart className="h-6 w-6 text-naval-DEFAULT" />
                  </div>
                  <h3 className="text-xl font-semibold text-naval-DEFAULT mb-2">Community</h3>
                  <p className="text-gray-700">
                    We foster an inclusive environment where collaboration and mutual support thrives.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-none shadow-card transition-all hover:shadow-elevation hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="bg-naval-DEFAULT/10 p-3 rounded-lg w-fit mb-4">
                    <BookOpen className="h-6 w-6 text-naval-DEFAULT" />
                  </div>
                  <h3 className="text-xl font-semibold text-naval-DEFAULT mb-2">Knowledge</h3>
                  <p className="text-gray-700">
                    We believe in lifelong learning and the free exchange of ideas and expertise.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Leadership Team */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="heading-md text-naval-DEFAULT mb-2 text-center">Leadership Team</h2>
            <p className="text-gray-700 mb-12 text-center max-w-2xl mx-auto">
              Meet the dedicated professionals guiding Naval Nexus
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Thomas Reynolds" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
                />
                <h3 className="text-xl font-semibold text-naval-DEFAULT">Dr. Thomas Reynolds</h3>
                <p className="text-naval-light font-medium mb-2">Founder & President</p>
                <p className="text-gray-700 text-sm max-w-xs mx-auto">
                  Former Naval Architect with 25+ years of experience in shipbuilding and maritime education.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Dr. Sarah Chen" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
                />
                <h3 className="text-xl font-semibold text-naval-DEFAULT">Dr. Sarah Chen</h3>
                <p className="text-naval-light font-medium mb-2">Chief Technology Officer</p>
                <p className="text-gray-700 text-sm max-w-xs mx-auto">
                  Expert in marine hydrodynamics and computational fluid dynamics with a passion for mentoring.
                </p>
              </div>
              
              <div className="text-center">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="Capt. James Williams" 
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4 border-4 border-white shadow-md"
                />
                <h3 className="text-xl font-semibold text-naval-DEFAULT">Capt. James Williams</h3>
                <p className="text-naval-light font-medium mb-2">Director of Industry Relations</p>
                <p className="text-gray-700 text-sm max-w-xs mx-auto">
                  Retired Navy Captain with extensive experience in vessel operations and maritime leadership.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recognition & Partners */}
        <section className="bg-naval-subtle py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="heading-sm text-naval-DEFAULT mb-6">Recognition & Awards</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <Award className="h-6 w-6 text-naval-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-naval-DEFAULT">2024 Innovation in Maritime Education</h3>
                      <p className="text-gray-700 text-sm">International Maritime Organization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <Award className="h-6 w-6 text-naval-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-naval-DEFAULT">2023 Best Industry Network Platform</h3>
                      <p className="text-gray-700 text-sm">Maritime Technology Conference</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                      <Award className="h-6 w-6 text-naval-DEFAULT" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-naval-DEFAULT">2023 Excellence in Professional Development</h3>
                      <p className="text-gray-700 text-sm">Society of Naval Architects and Marine Engineers</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="heading-sm text-naval-DEFAULT mb-6">Our Partners</h2>
                <p className="text-gray-700 mb-6">
                  We collaborate with leading universities, professional societies, and maritime organizations around the world:
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
                    <AnchorIcon className="h-10 w-10 text-naval-DEFAULT" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
                    <Ship className="h-10 w-10 text-naval-DEFAULT" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
                    <GraduationCap className="h-10 w-10 text-naval-DEFAULT" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
                    <Compass className="h-10 w-10 text-naval-DEFAULT" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
                    <BookOpen className="h-10 w-10 text-naval-DEFAULT" />
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-20">
                    <Users className="h-10 w-10 text-naval-DEFAULT" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-[#0A2463] rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="heading-md mb-4">Join the Naval Nexus Community</h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Connect with fellow naval architects, marine engineers, and maritime professionals. 
                Expand your network, advance your career, and contribute to the future of maritime engineering.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/register" className="px-6 py-3 bg-white text-[#0A2463] rounded-lg font-medium transition-all hover:bg-gray-100">
                  Create an Account
                </a>
                <a href="/about#contact" className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium transition-all hover:bg-white/10">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
