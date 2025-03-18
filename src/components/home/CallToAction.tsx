
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-naval-DEFAULT">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-naval-accent/10 rounded-l-full"></div>
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-naval-accent/5 rounded-tr-full"></div>
          
          <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col items-center text-center">
            <AnimatedSection animation="fade-up">
              <span className="text-sm font-medium text-naval-light uppercase tracking-wider">
                Join Our Community
              </span>
              <h2 className="heading-lg mt-3 mb-6 text-white">
                Ready to Connect, Learn, and Grow?
              </h2>
              <p className="text-naval-light/80 max-w-2xl mx-auto text-lg mb-8">
                Whether you're a student looking for mentorship or an alumnus wanting 
                to give back, Naval Nexus Network provides the platform for meaningful 
                connections and professional growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-naval-DEFAULT hover:bg-gray-100">
                    Join the Network
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-white bg-transparent text-white hover:bg-naval-dark">
                    Learn More
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
