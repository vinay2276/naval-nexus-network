
import React from 'react';
import { BookOpen, Users, Briefcase, Award } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
}

const Stat: React.FC<StatProps> = ({ icon, value, label, delay = 0 }) => {
  return (
    <AnimatedSection
      animation="fade-up"
      delay={delay}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="p-3 rounded-full bg-naval-DEFAULT text-white mb-4 w-14 h-14 flex items-center justify-center">
        {icon}
      </div>
      <div className="font-display font-bold text-4xl text-gray-900 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </AnimatedSection>
  );
};

const Stats = () => {
  const stats = [
    {
      icon: <Users className="h-6 w-6" />,
      value: "2,500+",
      label: "Alumni Network",
      delay: 100,
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "150+",
      label: "Active Mentors",
      delay: 200,
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      value: "500+",
      label: "Job Opportunities",
      delay: 300,
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      value: "1,000+",
      label: "Technical Resources",
      delay: 400,
    },
  ];

  return (
    <section className="py-24 bg-naval-DEFAULT text-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center mb-16">
          <h2 className="heading-lg mb-4">Our Growing Community</h2>
          <p className="text-naval-light/80 max-w-2xl mx-auto text-lg">
            Join a thriving ecosystem of naval architecture and marine engineering 
            professionals making waves in the industry.
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
