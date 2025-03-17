
import React from 'react';
import AnimatedSection from '../ui/AnimatedSection';
import { Users, BookOpen, Award, Calendar, MessageSquare, Briefcase } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay = 0 }) => {
  return (
    <AnimatedSection
      animation="fade-up"
      delay={delay}
      className="flex flex-col items-center p-6 text-center rounded-xl bg-white shadow-card hover:shadow-elevation transition-all duration-300"
    >
      <div className="p-3 rounded-full bg-naval-subtle text-naval-DEFAULT mb-5">
        {icon}
      </div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </AnimatedSection>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Alumni Network",
      description: "Connect with graduates working in leading maritime companies worldwide.",
      delay: 100,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Mentorship",
      description: "Gain guidance from experienced professionals in your field of interest.",
      delay: 200,
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Job Opportunities",
      description: "Access exclusive job postings and internships from industry partners.",
      delay: 300,
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Resource Library",
      description: "Access technical papers, case studies, and industry standards.",
      delay: 400,
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Events & Workshops",
      description: "Participate in industry workshops, seminars, and networking events.",
      delay: 500,
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Discussion Forums",
      description: "Engage in technical discussions and knowledge sharing with peers.",
      delay: 600,
    },
  ];

  return (
    <section className="py-20 bg-naval-subtle/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-naval-accent uppercase tracking-wider">
            Our Platform
          </span>
          <h2 className="heading-lg mt-2 mb-4">
            Discover What We Offer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our platform provides everything you need to advance your career in 
            naval architecture and marine engineering.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
