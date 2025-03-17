
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare, 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Building, 
  Calendar, 
  Phone, 
  Mail, 
  Globe, 
  FileText, 
  Award, 
  BookOpen,
  Users,
  Ship
} from 'lucide-react';

// Mock data for the profile
const profileData = {
  id: '1',
  name: 'Dr. Priya Sharma',
  role: 'Lead Naval Architect',
  company: 'Cochin Shipyard Ltd',
  yearGraduated: '2005',
  location: 'Kochi, Kerala',
  email: 'priya.sharma@example.com',
  phone: '+91 98765 43210',
  website: 'priyasharma.com',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80',
  coverImage: 'https://images.unsplash.com/photo-1581922819941-6ab31ab79afc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
  bio: 'Lead Naval Architect with 15+ years of experience in ship design and marine engineering. Specialized in hydrodynamics and structural analysis of naval vessels. PhD from IIT Madras with research focus on computational fluid dynamics for ship design optimization.',
  skills: [
    'Ship Design', 'CFD Analysis', 'Project Management', 'Hydrodynamics', 
    'Structural Analysis', 'Marine Engineering', 'AutoCAD', 'ANSYS', 'Rhinoceros 3D'
  ],
  education: [
    {
      degree: 'Ph.D. in Naval Architecture',
      institution: 'IIT Madras',
      year: '2005',
      description: 'Research on computational methods for ship hydrodynamics'
    },
    {
      degree: 'M.Tech in Ocean Engineering',
      institution: 'Andhra University',
      year: '2000',
      description: 'Specialized in offshore structures'
    },
    {
      degree: 'B.Tech in Naval Architecture',
      institution: 'Andhra University',
      year: '1998',
      description: 'First class with distinction'
    }
  ],
  experience: [
    {
      role: 'Lead Naval Architect',
      company: 'Cochin Shipyard Ltd',
      duration: '2016 - Present',
      description: 'Leading a team of 15 naval architects for design and development of indigenous aircraft carriers and other naval vessels.'
    },
    {
      role: 'Senior Naval Architect',
      company: 'L&T Shipbuilding',
      duration: '2010 - 2016',
      description: 'Responsible for structural design and analysis of offshore patrol vessels and commercial ships.'
    },
    {
      role: 'Naval Architect',
      company: 'Mazagon Dock Shipbuilders',
      duration: '2005 - 2010',
      description: 'Involved in design modifications and performance analysis of frigates and submarines.'
    }
  ],
  projects: [
    {
      title: 'Indigenous Aircraft Carrier (IAC-1)',
      year: '2018-2021',
      description: 'Led the hydrodynamic optimization team for India\'s first indigenous aircraft carrier.'
    },
    {
      title: 'Offshore Patrol Vessels',
      year: '2014-2016',
      description: 'Designed hull structure for a series of offshore patrol vessels for the Indian Coast Guard.'
    },
    {
      title: 'LNG Carrier Design',
      year: '2011-2013',
      description: 'Developed computational models for structural analysis of membrane-type LNG carriers.'
    }
  ],
  publications: [
    {
      title: 'Computational Analysis of Wave Resistance for High-Speed Naval Vessels',
      journal: 'Journal of Ship Research',
      year: '2019'
    },
    {
      title: 'Structural Optimization of Ship Hulls Using Genetic Algorithms',
      journal: 'Marine Structures',
      year: '2016'
    },
    {
      title: 'Experimental Study on Slamming Loads for Naval Vessels',
      journal: 'Applied Ocean Research',
      year: '2012'
    }
  ],
  awards: [
    {
      title: 'Excellence in Maritime Innovation Award',
      organization: 'Indian Maritime Foundation',
      year: '2020'
    },
    {
      title: 'Best Naval Architect',
      organization: 'Society of Naval Architects and Marine Engineers, India',
      year: '2017'
    }
  ],
  available: true
};

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 animate-fade-in">
        {/* Cover Image and Profile Section */}
        <section>
          {/* Cover Image */}
          <div 
            className="h-64 md:h-80 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${profileData.coverImage})` }}
          >
            <div className="container mx-auto h-full flex items-end">
              <div className="bg-gradient-to-t from-black/70 to-transparent w-full h-1/2 absolute bottom-0 left-0"></div>
            </div>
          </div>
          
          {/* Profile Info */}
          <div className="container mx-auto px-4 md:px-6">
            <div className="relative -mt-24 bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Image */}
                <div className="md:w-1/4">
                  <div className="relative">
                    <img 
                      src={profileData.image} 
                      alt={profileData.name} 
                      className="w-36 h-36 md:w-48 md:h-48 rounded-xl object-cover border-4 border-white mx-auto md:mx-0"
                    />
                    {profileData.available && (
                      <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4 w-6 h-6 bg-green-500 border-4 border-white rounded-full" title="Available for mentorship"></div>
                    )}
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="md:w-3/4">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <div>
                      <h1 className="heading-lg text-[#0A2463] mb-1">{profileData.name}</h1>
                      <p className="text-lg text-gray-600 mb-2">
                        {profileData.role} at {profileData.company}
                      </p>
                      <div className="flex items-center flex-wrap gap-3">
                        <div className="flex items-center text-sm text-gray-600">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          <span>Class of {profileData.yearGraduated}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{profileData.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-3 mt-4 md:mt-0">
                      <Button className="bg-[#0A2463] hover:bg-[#051440]">
                        <MessageSquare className="mr-2 w-4 h-4" />
                        Message
                      </Button>
                      <Button variant="outline" className="border-[#0A2463] text-[#0A2463] hover:bg-[#F2F5F9]">
                        <FileText className="mr-2 w-4 h-4" />
                        Resume
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {profileData.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-[#F2F5F9] text-[#0A2463]">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Tabs Section */}
        <section className="container mx-auto px-4 md:px-6 pb-16">
          <Tabs defaultValue="about" className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-[#F2F5F9] p-1 rounded-lg">
              <TabsTrigger value="about" className="text-sm md:text-base">About</TabsTrigger>
              <TabsTrigger value="experience" className="text-sm md:text-base">Experience</TabsTrigger>
              <TabsTrigger value="projects" className="text-sm md:text-base">Projects</TabsTrigger>
              <TabsTrigger value="publications" className="text-sm md:text-base">Publications</TabsTrigger>
            </TabsList>
            
            {/* About Tab */}
            <TabsContent value="about" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Info Card */}
                <Card className="md:col-span-1">
                  <CardContent className="p-6">
                    <h3 className="heading-sm text-[#0A2463] mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-[#0A2463] mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{profileData.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-[#0A2463] mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{profileData.phone}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-[#0A2463] mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Website</p>
                          <p className="font-medium">{profileData.website}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-[#0A2463] mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Company</p>
                          <p className="font-medium">{profileData.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 text-[#0A2463] mr-3" />
                        <div>
                          <p className="text-sm text-gray-500">Location</p>
                          <p className="font-medium">{profileData.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Education Card */}
                <Card className="md:col-span-2">
                  <CardContent className="p-6">
                    <h3 className="heading-sm text-[#0A2463] mb-4 flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Education
                    </h3>
                    <div className="space-y-6">
                      {profileData.education.map((edu, index) => (
                        <div key={index} className="border-l-2 border-[#3E92CC] pl-4 pb-6">
                          <h4 className="font-bold text-lg">{edu.degree}</h4>
                          <p className="text-[#0A2463] font-medium">{edu.institution}</p>
                          <p className="text-gray-500 text-sm mb-2">{edu.year}</p>
                          <p className="text-gray-600">{edu.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Awards Card */}
                <Card className="md:col-span-3">
                  <CardContent className="p-6">
                    <h3 className="heading-sm text-[#0A2463] mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Awards & Recognition
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {profileData.awards.map((award, index) => (
                        <div key={index} className="bg-[#F2F5F9] p-4 rounded-lg">
                          <h4 className="font-bold text-lg text-[#0A2463]">{award.title}</h4>
                          <p className="text-gray-600">{award.organization}</p>
                          <p className="text-sm text-gray-500">{award.year}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Experience Tab */}
            <TabsContent value="experience" className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <h3 className="heading-sm text-[#0A2463] mb-6 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Professional Experience
                  </h3>
                  <div className="space-y-8">
                    {profileData.experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-[#3E92CC] pl-6 pb-8 relative">
                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#3E92CC] flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <h4 className="font-bold text-xl text-[#0A2463]">{exp.role}</h4>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.duration}
                        </div>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Projects Tab */}
            <TabsContent value="projects" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {profileData.projects.map((project, index) => (
                  <Card key={index} className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-lg text-[#0A2463]">{project.title}</h4>
                        <Badge variant="outline" className="bg-[#F2F5F9]">{project.year}</Badge>
                      </div>
                      <div className="space-y-4">
                        <p className="text-gray-600">{project.description}</p>
                        <div className="flex justify-end">
                          <Button variant="ghost" size="sm" className="text-[#3E92CC]">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Add Project Card */}
                <Card className="h-full border-dashed border-2 border-gray-300 bg-gray-50">
                  <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <Ship className="w-12 h-12 text-gray-400 mb-4" />
                    <h4 className="font-bold text-lg text-gray-600 mb-2">Add New Project</h4>
                    <p className="text-gray-500 mb-4">Share your naval architecture or marine engineering projects</p>
                    <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
                      Add Project
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Publications Tab */}
            <TabsContent value="publications" className="animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <h3 className="heading-sm text-[#0A2463] mb-6 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Research Publications
                  </h3>
                  <div className="space-y-6">
                    {profileData.publications.map((pub, index) => (
                      <div key={index} className="p-4 border-b last:border-b-0">
                        <h4 className="font-bold text-lg text-[#0A2463] mb-2">{pub.title}</h4>
                        <div className="flex items-center justify-between">
                          <p className="text-gray-600">{pub.journal}</p>
                          <Badge className="bg-[#3E92CC]">{pub.year}</Badge>
                        </div>
                        <div className="mt-4 flex gap-4">
                          <Button variant="outline" size="sm" className="text-[#0A2463] border-[#0A2463]">
                            View Paper
                          </Button>
                          <Button variant="ghost" size="sm" className="text-[#0A2463]">
                            Cite
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Similar Profiles Section */}
        <section className="bg-[#F2F5F9] py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="heading-md text-[#0A2463]">Similar Profiles</h2>
              <Button variant="ghost" className="text-[#0A2463]">
                View All
                <Users className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* This would typically be a component that shows other profiles, 
                  but for now we'll just add placeholder cards */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0A2463]">Similar Alumni {i}</h3>
                      <p className="text-gray-600 text-sm">Naval Architect</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-4">
                    {[...Array(3)].map((_, j) => (
                      <Badge key={j} variant="secondary" className="bg-[#F2F5F9] text-[#0A2463]">
                        Skill {j + 1}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-[#0A2463] text-[#0A2463]">
                    View Profile
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
