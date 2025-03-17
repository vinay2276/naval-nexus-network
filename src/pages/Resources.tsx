
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, BookOpen, Download, ExternalLink, Search, Tag, Clock, Calendar, ThumbsUp, Filter } from 'lucide-react';

const Resources = () => {
  // Sample resources data
  const resources = {
    technical: [
      {
        id: 1,
        title: "Hydrodynamic Analysis of Marine Structures",
        type: "Research Paper",
        author: "Dr. K. Ramesh",
        date: "2023-05-15",
        tags: ["Hydrodynamics", "CFD", "Structural Analysis"],
        downloadUrl: "#",
        description: "A comprehensive study on hydrodynamic analysis techniques for offshore structures."
      },
      {
        id: 2,
        title: "Advances in Ship Propulsion Systems",
        type: "Technical Report",
        author: "Prof. S. Sharma & Team",
        date: "2022-11-30",
        tags: ["Propulsion", "Efficiency", "Innovation"],
        downloadUrl: "#",
        description: "Overview of recent advancements in marine propulsion technologies focusing on efficiency and environmental impact."
      },
      {
        id: 3,
        title: "Stability Analysis for Naval Vessels",
        type: "Tutorial",
        author: "Capt. V. Rao",
        date: "2023-01-22",
        tags: ["Stability", "Naval Design", "Safety"],
        downloadUrl: "#",
        description: "Step-by-step guide to stability calculations and analysis for various naval vessel types."
      }
    ],
    courses: [
      {
        id: 1,
        title: "Introduction to Ship Design",
        instructor: "Prof. Anil Kumar",
        duration: "8 weeks",
        level: "Beginner",
        tags: ["Design Principles", "Naval Architecture Basics"],
        enrollUrl: "#",
        description: "Foundational course covering basic principles of ship design and naval architecture."
      },
      {
        id: 2,
        title: "Advanced Marine CFD Applications",
        instructor: "Dr. Priya Mehta",
        duration: "10 weeks",
        level: "Advanced",
        tags: ["CFD", "Simulation", "Hydrodynamics"],
        enrollUrl: "#",
        description: "Advanced course on computational fluid dynamics applications in marine engineering."
      },
      {
        id: 3,
        title: "Offshore Structure Engineering",
        instructor: "Eng. Rajiv Singh",
        duration: "12 weeks",
        level: "Intermediate",
        tags: ["Offshore", "Structural Design", "Environmental Loads"],
        enrollUrl: "#",
        description: "Comprehensive course on design and analysis of offshore structures."
      }
    ],
    software: [
      {
        id: 1,
        title: "NavalCAD Student Edition",
        developer: "MarineSoft Technologies",
        compatibility: "Windows, macOS",
        tags: ["CAD", "Design", "Modeling"],
        downloadUrl: "#",
        description: "Computer-aided design software specifically for naval architecture applications."
      },
      {
        id: 2,
        title: "HydroSim Pro",
        developer: "FluidTech Solutions",
        compatibility: "Windows",
        tags: ["Simulation", "Hydrodynamics", "Analysis"],
        downloadUrl: "#",
        description: "Simulation software for hydrodynamic analysis and visualization."
      },
      {
        id: 3,
        title: "StructAnalysis Marine",
        developer: "EngineerTools Inc.",
        compatibility: "Windows, Linux",
        tags: ["Structural Analysis", "FEA", "Design Validation"],
        downloadUrl: "#",
        description: "Specialized tool for structural analysis of marine vessels and components."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-[#EBF2FA] to-[#D4E5F9]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-[#0A2463]">
              Naval Engineering Resources
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Access a comprehensive collection of technical papers, tutorials, software, and educational materials to support your academic and professional growth.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input 
                type="text" 
                placeholder="Search for resources..." 
                className="pl-10 pr-4 py-6 rounded-lg w-full" 
              />
              <Button className="absolute right-1 top-1 bg-[#0A2463]">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Explore Resources</h2>
            <p className="text-gray-600">
              Find the materials you need to excel in your naval architecture and marine engineering endeavors
            </p>
          </div>
          
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full md:w-fit md:mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="technical">Technical Papers</TabsTrigger>
              <TabsTrigger value="courses">Courses & Tutorials</TabsTrigger>
              <TabsTrigger value="software">Software & Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Technical Papers & Research</h3>
                <Button variant="outline" size="sm" className="text-[#0A2463]">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.technical.map((resource) => (
                  <Card key={resource.id} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge className="bg-[#3E92CC] hover:bg-[#2176FF]">{resource.type}</Badge>
                        <Button variant="ghost" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                      <CardTitle className="mt-2">{resource.title}</CardTitle>
                      <CardDescription>{resource.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {resource.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>{new Date(resource.date).toLocaleDateString()}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-[#0A2463] text-[#0A2463]">
                        Download Paper
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-[#0A2463] hover:bg-[#051440]">
                  Browse All Papers
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="courses" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Courses & Tutorials</h3>
                <Button variant="outline" size="sm" className="text-[#0A2463]">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.courses.map((course) => (
                  <Card key={course.id} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge className="bg-[#0A2463]">{course.level}</Badge>
                      </div>
                      <CardTitle className="mt-2">{course.title}</CardTitle>
                      <CardDescription>Instructor: {course.instructor}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {course.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-3.5 w-3.5 mr-1" />
                        <span>Duration: {course.duration}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-[#0A2463] text-[#0A2463]">
                        Enroll Now
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-[#0A2463] hover:bg-[#051440]">
                  Browse All Courses
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="software" className="space-y-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Software & Tools</h3>
                <Button variant="outline" size="sm" className="text-[#0A2463]">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.software.map((software) => (
                  <Card key={software.id} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <Badge className="bg-[#3E92CC]">{software.compatibility}</Badge>
                      </div>
                      <CardTitle className="mt-2">{software.title}</CardTitle>
                      <CardDescription>Developer: {software.developer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{software.description}</p>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {software.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-[#0A2463] text-[#0A2463]">
                        Download Software
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Button className="bg-[#0A2463] hover:bg-[#051440]">
                  Browse All Software
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Featured Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Featured Resources</h2>
            <p className="text-gray-600">
              Handpicked materials to jumpstart your learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md">
              <CardHeader className="bg-[#0A2463] text-white">
                <Badge className="bg-white text-[#0A2463] self-start">Featured</Badge>
                <CardTitle className="mt-2">Complete Ship Design Handbook</CardTitle>
                <CardDescription className="text-gray-200">By Naval Architecture Department, Andhra University</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">A comprehensive guide covering all aspects of ship design from concept to detailed engineering.</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>PDF, 450 pages</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>4.9/5 (120 reviews)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Ship Design</Badge>
                  <Badge variant="outline">Naval Architecture</Badge>
                  <Badge variant="outline">Engineering</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0A2463]">Download Now</Button>
              </CardFooter>
            </Card>
            
            <Card className="shadow-md">
              <CardHeader className="bg-[#3E92CC] text-white">
                <Badge className="bg-white text-[#3E92CC] self-start">New</Badge>
                <CardTitle className="mt-2">Marine Engineering Video Series</CardTitle>
                <CardDescription className="text-gray-200">By Prof. Rajesh Kumar & Industry Experts</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-4">A 10-part video series exploring advanced concepts in marine engineering with practical demonstrations.</p>
                <div className="flex justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>10 hours total</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>4.8/5 (85 reviews)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Video Tutorials</Badge>
                  <Badge variant="outline">Marine Engineering</Badge>
                  <Badge variant="outline">Practical</Badge>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#3E92CC]">Watch Series</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Resource Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Resource Categories</h2>
            <p className="text-gray-600">
              Browse our collection by topic areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Ship Design", icon: <BookOpen className="h-8 w-8 mb-2 text-[#0A2463]" />, count: 45 },
              { name: "Hydrodynamics", icon: <FileText className="h-8 w-8 mb-2 text-[#0A2463]" />, count: 32 },
              { name: "Propulsion Systems", icon: <FileText className="h-8 w-8 mb-2 text-[#0A2463]" />, count: 28 },
              { name: "Offshore Structures", icon: <FileText className="h-8 w-8 mb-2 text-[#0A2463]" />, count: 36 },
              { name: "Marine Safety", icon: <FileText className="h-8 w-8 mb-2 text-[#0A2463]" />, count: 24 },
              { name: "Naval Materials", icon: <FileText className="h-8 w-8 mb-2 text-[#0A2463]" />, count: 19 },
              { name: "Regulations & Standards", icon: <FileText className="h-8 w-8 mb-2 text-[#0A2463]" />, count: 42 },
              { name: "Sustainability", icon: <FileText className="h-8 w-8 mb-2 text-[#0A2463]" />, count: 21 }
            ].map((category, index) => (
              <Link to={`/resources/${category.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <div className="border rounded-lg p-6 text-center hover:shadow-md transition-shadow hover:border-[#0A2463]">
                  {category.icon}
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.count} resources</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Submit Resource */}
      <section className="py-16 bg-[#EBF2FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-md mb-4">Contribute to Our Resource Library</h2>
              <p className="text-gray-600">
                Share your research papers, projects, or tutorials with the Naval Nexus community
              </p>
            </div>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Submit a Resource</CardTitle>
                <CardDescription>Fill out the form below to contribute to our resource collection</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Resource Title</label>
                      <Input type="text" placeholder="Enter title" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Resource Type</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Select type</option>
                        <option value="paper">Research Paper</option>
                        <option value="tutorial">Tutorial</option>
                        <option value="software">Software</option>
                        <option value="book">Book</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <textarea 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows={4}
                      placeholder="Provide a brief description"
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tags (comma separated)</label>
                    <Input type="text" placeholder="e.g., ship design, hydrodynamics" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Upload File</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                      <p className="text-gray-500">Drag and drop your file here, or click to browse</p>
                      <input type="file" className="hidden" />
                      <Button variant="outline" className="mt-4">Select File</Button>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0A2463]">Submit Resource</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Need Specialized Resources?</h2>
            <p className="text-xl mb-8 text-gray-100">
              Our team can help you find specific materials for your research or project needs.
            </p>
            <Button className="bg-white text-[#0A2463] hover:bg-gray-100">
              Request Resources
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Resources;
