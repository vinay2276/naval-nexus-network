
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, GraduationCap, Briefcase } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-20 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-naval-subtle/50 rounded-bl-[100px] -z-10 transform translate-x-1/4 -translate-y-1/4 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-naval-light/10 rounded-tr-[100px] -z-10 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block animate-fade-in">
              <span className="inline-flex items-center rounded-full bg-naval-subtle px-3 py-1 text-sm font-medium text-naval-DEFAULT">
                <GraduationCap className="mr-1 h-4 w-4" />
                Andhra University
              </span>
            </div>
            
            <h1 className="mt-6 heading-xl animate-fade-up" style={{ animationDelay: '200ms' }}>
              <span className="text-gradient">Naval Nexus</span> <br />
              <span>Network</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
              Connecting students and alumni from the Naval Architecture and Marine 
              Engineering Department for collaboration, mentorship, and career growth.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '600ms' }}>
              <Link to="/register">
                <Button size="lg" className="bg-naval-DEFAULT hover:bg-naval-dark text-white">
                  Join the Network
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/directory">
                <Button variant="outline" size="lg" className="border-naval-DEFAULT text-naval-DEFAULT hover:bg-naval-subtle">
                  Explore Directory
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
              <div className="text-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="font-display font-bold text-2xl text-naval-DEFAULT">2000+</div>
                <div className="text-sm text-gray-600">Alumni</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="font-display font-bold text-2xl text-naval-DEFAULT">500+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-white/80 backdrop-blur-sm shadow-sm">
                <div className="font-display font-bold text-2xl text-naval-DEFAULT">150+</div>
                <div className="text-sm text-gray-600">Mentors</div>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className="flex-1 w-full md:w-auto animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-naval-DEFAULT/5 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1611505908502-5b67e53e3a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Naval Architecture Students" 
                className="relative z-10 rounded-3xl shadow-elevation object-cover w-full h-[400px]"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 z-20 glassmorphism px-4 py-3 rounded-xl flex items-center animate-float shadow-soft">
                <Users className="h-5 w-5 text-naval-DEFAULT mr-2" />
                <span className="font-medium text-naval-DEFAULT">Alumni Network</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 z-20 glassmorphism px-4 py-3 rounded-xl flex items-center animate-float shadow-soft" style={{ animationDelay: '1s' }}>
                <Briefcase className="h-5 w-5 text-naval-DEFAULT mr-2" />
                <span className="font-medium text-naval-DEFAULT">Career Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
