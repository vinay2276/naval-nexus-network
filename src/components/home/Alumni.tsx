
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import ProfileCard from '../ui/ProfileCard';
import AnimatedSection from '../ui/AnimatedSection';

// Mock data for alumni profiles
const featuredAlumni = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    role: 'Lead Naval Architect',
    company: 'Cochin Shipyard Ltd',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Ship Design', 'CFD Analysis', 'Project Management'],
    available: true,
    featured: true,
  },
  {
    id: '2',
    name: 'Raj Malhotra',
    role: 'Marine Engineer',
    company: 'Maersk Line',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Engine Systems', 'Maritime Operations', 'HVAC Systems'],
    available: false,
    featured: true,
  },
  {
    id: '3',
    name: 'Ananya Reddy',
    role: 'Offshore Engineer',
    company: 'L&T Hydrocarbon Engineering',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Platform Design', 'Structural Analysis', 'Hydrodynamics'],
    available: true,
    featured: true,
  }
];

const Alumni = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text Content */}
          <AnimatedSection animation="slide-in-left" className="flex-1">
            <span className="text-sm font-medium text-naval-accent uppercase tracking-wider">
              Alumni Spotlight
            </span>
            <h2 className="heading-lg mt-2 mb-4">
              Learn from Industry Leaders
            </h2>
            <p className="text-gray-600 mb-6 text-lg">
              Our network includes distinguished alumni working at leading 
              maritime organizations around the world. Connect with mentors who 
              can guide your career journey and provide valuable industry insights.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you're looking for advice on specialization, seeking internship 
              opportunities, or exploring research collaborations, our alumni 
              community is here to support you.
            </p>
            
            <Link to="/directory">
              <Button className="bg-naval-DEFAULT hover:bg-naval-dark mt-4">
                Explore All Alumni
              </Button>
            </Link>
          </AnimatedSection>
          
          {/* Alumni Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
            {featuredAlumni.map((alumni, index) => (
              <AnimatedSection key={alumni.id} animation="fade-up" delay={index * 200}>
                <ProfileCard {...alumni} />
              </AnimatedSection>
            ))}
            
            {/* View more card for mobile - only shows on md breakpoint */}
            <AnimatedSection 
              animation="fade-up" 
              delay={600} 
              className="hidden md:block lg:hidden"
            >
              <div className="border-2 border-dashed border-naval-DEFAULT/30 rounded-xl flex items-center justify-center min-h-[200px]">
                <Link to="/directory">
                  <Button variant="ghost" className="text-naval-DEFAULT hover:bg-naval-subtle">
                    View All Alumni
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

export default Alumni;
