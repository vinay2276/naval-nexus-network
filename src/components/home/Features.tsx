
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
      title: "Student & Alumni Network",
      description: "Connect with current students and accomplished alumni working in leading maritime organizations.",
      delay: 100,
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Study Resources",
      description: "Access lecture notes, past papers, textbooks, and technical resources shared by faculty and peers.",
      delay: 200,
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Blogs & Experiences",
      description: "Share internship experiences, career insights, and academic knowledge through our blogging platform.",
      delay: 300,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Clubs & Organizations",
      description: "Join departmental clubs, participate in technical societies, and lead student initiatives.",
      delay: 400,
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Events & Seminars",
      description: "Stay updated on departmental events, guest lectures, workshops, and academic conferences.",
      delay: 500,
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Latest Industry News",
      description: "Stay informed with the latest developments in naval architecture, marine engineering, and maritime industry.",
      delay: 600,
    },
  ];

  return (
    <section className="py-20 bg-naval-subtle/30">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-medium text-naval-accent uppercase tracking-wider">
            Department Features
          </span>
          <h2 className="heading-lg mt-2 mb-4">
            Everything You Need for Academic Success
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our comprehensive platform supports every aspect of your academic 
            journey and professional development in naval architecture and marine engineering.
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
