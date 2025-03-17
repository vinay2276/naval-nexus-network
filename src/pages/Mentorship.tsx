
import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { UserCircle, Users, Calendar, GraduationCap, Briefcase, Award, ArrowRight } from 'lucide-react';

const Mentorship = () => {
  // Sample mentor data
  const featuredMentors = [
    {
      id: 1,
      name: "Capt. Rajesh Kumar",
      title: "Naval Architect, Indian Navy (Retd.)",
      expertise: ["Ship Design", "Naval Operations", "Defense Contracting"],
      yearsExperience: 22,
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      available: true
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      title: "Senior Research Scientist, Maritime Institute",
      expertise: ["Hydrodynamics", "CFD Simulation", "Research Methodology"],
      yearsExperience: 14,
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      available: true
    },
    {
      id: 3,
      name: "Eng. Vikram Singh",
      title: "Project Manager, Mazagon Dock Shipbuilders",
      expertise: ["Project Management", "Shipyard Operations", "Regulatory Compliance"],
      yearsExperience: 18,
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      available: false
    }
  ];

  // Sample program data
  const programTypes = [
    {
      title: "One-on-One Mentorship",
      description: "Get personalized guidance tailored to your career goals and challenges from experienced professionals.",
      icon: <UserCircle className="h-12 w-12 text-[#0A2463]" />,
      duration: "3-6 months",
      commitment: "2 hours weekly"
    },
    {
      title: "Group Mentorship",
      description: "Join a small group of peers with similar interests and learn collectively from industry leaders.",
      icon: <Users className="h-12 w-12 text-[#0A2463]" />,
      duration: "4 months",
      commitment: "1.5 hours weekly"
    },
    {
      title: "Workshop Series",
      description: "Participate in skills-focused workshops conducted by specialists across different naval architecture domains.",
      icon: <Calendar className="h-12 w-12 text-[#0A2463]" />,
      duration: "8 weeks",
      commitment: "3 hours weekly"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-[#EBF2FA] to-[#D4E5F9]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-[#0A2463]">
              Mentorship Program
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Connect with experienced professionals and alumni who can guide your career in Naval Architecture and Marine Engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#0A2463] hover:bg-[#051440]">
                Find a Mentor
              </Button>
              <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Program Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">How Our Mentorship Works</h2>
            <p className="text-gray-600">
              Choose the mentorship format that works best for your learning style and schedule
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {programTypes.map((program, index) => (
              <Card key={index} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    {program.icon}
                  </div>
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span>{program.commitment}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full text-[#0A2463]">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Mentors */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Featured Mentors</h2>
            <p className="text-gray-600">
              Our mentors are accomplished professionals with extensive experience in various domains of Naval Architecture
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredMentors.map((mentor) => (
              <Card key={mentor.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-[#0A2463]">
                  <img 
                    src={mentor.imageUrl} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" 
                  />
                  {mentor.available && (
                    <Badge className="absolute top-4 right-4 bg-green-500">
                      Available
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle>{mentor.name}</CardTitle>
                  <CardDescription>{mentor.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Briefcase className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span className="text-sm text-gray-600">{mentor.yearsExperience} years experience</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span className="text-sm text-gray-600">Andhra University Alumni</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#0A2463] text-[#0A2463]">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-[#0A2463] hover:bg-[#051440]">
              Browse All Mentors
            </Button>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">How to Get Started</h2>
            <p className="text-gray-600">
              Follow these simple steps to begin your mentorship journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Create Profile",
                description: "Sign up and complete your profile with your background, interests, and goals.",
                icon: <User className="h-10 w-10 text-[#0A2463]" />
              },
              {
                step: 2,
                title: "Browse Mentors",
                description: "Explore our directory of mentors and find professionals aligned with your aspirations.",
                icon: <Search className="h-10 w-10 text-[#0A2463]" />
              },
              {
                step: 3,
                title: "Send Request",
                description: "Reach out to mentors with a personalized message explaining your mentorship goals.",
                icon: <Send className="h-10 w-10 text-[#0A2463]" />
              },
              {
                step: 4,
                title: "Start Learning",
                description: "Begin your mentorship journey with regular sessions and guided development.",
                icon: <Award className="h-10 w-10 text-[#0A2463]" />
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#EBF2FA] flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-[#0A2463] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Success Stories</h2>
            <p className="text-gray-300">
              Hear from students and professionals who have benefited from our mentorship program
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "The mentorship program connected me with a senior naval architect who guided me through my final year project and helped me secure my first job at a leading shipyard.",
                author: "Aditya Patel",
                role: "Naval Architecture Graduate, 2021",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              },
              {
                quote: "As someone transitioning from traditional naval architecture to offshore renewable energy, my mentor's industry insights were invaluable in helping me navigate this career shift.",
                author: "Meera Nair",
                role: "Marine Renewable Energy Engineer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#051440] border-none shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <svg className="h-8 w-8 text-[#3E92CC] mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                    </svg>
                    <p className="italic text-gray-300">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full mr-4 object-cover" 
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-md mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our mentorship program
              </p>
            </div>
            
            <Tabs defaultValue="mentees" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="mentees">For Mentees</TabsTrigger>
                <TabsTrigger value="mentors">For Mentors</TabsTrigger>
              </TabsList>
              
              <TabsContent value="mentees" className="space-y-4">
                {[
                  {
                    question: "Is the mentorship program free?",
                    answer: "Our core mentorship program is offered at no cost to current students. For alumni seeking professional mentorship, we offer both free community-based options and premium one-on-one mentorship packages."
                  },
                  {
                    question: "How much time commitment is required?",
                    answer: "The time commitment varies by program type. One-on-one mentorships typically require 2 hours weekly, while group programs may require 1-3 hours weekly. All schedules are flexible and arranged between mentors and mentees."
                  },
                  {
                    question: "Can I change my mentor if it's not a good fit?",
                    answer: "Yes, we understand that not all mentorship matches work out. You can request a change through your dashboard, and our team will help facilitate a transition to a new mentor."
                  },
                  {
                    question: "How are mentors vetted?",
                    answer: "All mentors go through an application process, credential verification, and interview with our program coordinators. We also collect feedback from mentees to ensure quality mentorship."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-white">
                    <h3 className="text-lg font-semibold mb-2 text-[#0A2463]">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="mentors" className="space-y-4">
                {[
                  {
                    question: "What qualifications do I need to become a mentor?",
                    answer: "Mentors should have at least 5 years of professional experience in naval architecture, marine engineering, or related fields. A degree from Andhra University is preferred but not required if you have relevant industry expertise."
                  },
                  {
                    question: "How much time will I need to commit?",
                    answer: "Most mentor relationships require 2-4 hours per month, depending on the program type. You can specify your availability when creating your mentor profile."
                  },
                  {
                    question: "Is there compensation for mentors?",
                    answer: "While our standard mentorship program is volunteer-based, we do offer honorariums for mentors participating in specialized workshops, intensive career coaching, and premium mentorship tiers."
                  },
                  {
                    question: "How do I maintain boundaries with mentees?",
                    answer: "We provide all mentors with guidelines on establishing healthy boundaries. The platform also facilitates scheduling and communication tools to help maintain professional relationships."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border rounded-lg p-6 bg-white">
                    <h3 className="text-lg font-semibold mb-2 text-[#0A2463]">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Ready to Grow Your Career?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Join our mentorship community today and take the next step in your professional journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#0A2463] hover:bg-gray-100">
                Find a Mentor
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Become a Mentor
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Mentorship;
