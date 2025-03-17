
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Users, CalendarDays, Filter, ChevronRight, ThumbsUp } from 'lucide-react';

const Events = () => {
  // Sample events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Naval Architecture Career Fair 2023",
      date: "2023-11-15",
      time: "10:00 AM - 4:00 PM",
      location: "Andhra University Convention Center",
      type: "Career Fair",
      description: "Connect with top employers in the marine industry and explore career opportunities in naval architecture and marine engineering.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      registrationOpen: true
    },
    {
      id: 2,
      title: "Advanced Ship Design Workshop",
      date: "2023-12-05",
      time: "9:00 AM - 5:00 PM",
      location: "Marine Engineering Building, Room 201",
      type: "Workshop",
      description: "Hands-on workshop covering advanced techniques in ship design using modern software tools.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      registrationOpen: true
    },
    {
      id: 3,
      title: "Maritime Innovation Symposium",
      date: "2024-01-20",
      time: "11:00 AM - 6:00 PM",
      location: "Virtual Event",
      type: "Conference",
      description: "Exploring cutting-edge innovations in maritime technology and their impact on the future of naval engineering.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80",
      registrationOpen: false
    }
  ];
  
  const pastEvents = [
    {
      id: 101,
      title: "Alumni Homecoming Weekend",
      date: "2023-09-23",
      location: "Andhra University Campus",
      type: "Networking",
      description: "Annual reunion event bringing together alumni from across decades to reconnect and network.",
      image: "https://images.unsplash.com/photo-1511795409834-432e50ce8840?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attendance: 180,
      highlights: "https://example.com/event-101-highlights"
    },
    {
      id: 102,
      title: "Marine Propulsion Technology Seminar",
      date: "2023-08-15",
      location: "Engineering Sciences Building",
      type: "Seminar",
      description: "Technical seminar featuring speakers from leading propulsion system manufacturers.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      attendance: 95,
      highlights: "https://example.com/event-102-highlights"
    }
  ];
  
  const workshops = [
    {
      id: 201,
      title: "Hydrostatics and Stability Calculations",
      date: "2023-11-25",
      duration: "1 day",
      instructor: "Prof. V. Subramaniam",
      level: "Intermediate",
      description: "Practical workshop on stability calculations for various vessel types with hands-on exercises.",
      seats: 25,
      registrationOpen: true
    },
    {
      id: 202,
      title: "Introduction to Marine CFD",
      date: "2023-12-10",
      duration: "2 days",
      instructor: "Dr. Anjali Patel",
      level: "Beginner",
      description: "Learn the basics of computational fluid dynamics and its applications in marine engineering.",
      seats: 20,
      registrationOpen: true
    },
    {
      id: 203,
      title: "Ship Structural Analysis",
      date: "2024-01-15",
      duration: "3 days",
      instructor: "Eng. Ravi Kumar",
      level: "Advanced",
      description: "Advanced workshop focusing on structural analysis techniques for marine vessels.",
      seats: 15,
      registrationOpen: false
    }
  ];

  // Format date
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-br from-[#EBF2FA] to-[#D4E5F9]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-6 text-[#0A2463]">
              Events & Workshops
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Stay connected with the latest conferences, workshops, and networking opportunities in the Naval Architecture and Marine Engineering community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#0A2463] hover:bg-[#051440]">
                <Calendar className="mr-2 h-5 w-5" />
                View Calendar
              </Button>
              <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
                <Users className="mr-2 h-5 w-5" />
                Host an Event
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Event */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Naval Architecture Symposium" 
                className="rounded-xl shadow-md object-cover w-full h-[400px]" 
              />
            </div>
            <div className="lg:w-1/2">
              <Badge className="mb-4 bg-[#3E92CC]">Featured Event</Badge>
              <h2 className="heading-md mb-4">Annual Naval Architecture Symposium 2023</h2>
              <p className="text-gray-600 mb-6">
                Join us for the flagship event of the year bringing together students, faculty, alumni, and industry leaders for discussions on the future of naval architecture and marine engineering.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <CalendarDays className="h-5 w-5 mr-3 text-[#0A2463] mt-0.5" />
                  <div>
                    <p className="font-medium">December 15-17, 2023</p>
                    <p className="text-sm text-gray-500">9:00 AM - 5:00 PM daily</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 text-[#0A2463] mt-0.5" />
                  <div>
                    <p className="font-medium">Andhra University Convention Center</p>
                    <p className="text-sm text-gray-500">Visakhapatnam, Andhra Pradesh</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 mr-3 text-[#0A2463] mt-0.5" />
                  <div>
                    <p className="font-medium">Expected Attendance: 200+</p>
                    <p className="text-sm text-gray-500">Students, faculty, alumni, and industry professionals</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-[#0A2463] hover:bg-[#051440]">
                  Register Now
                </Button>
                <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Event Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Upcoming Events</h2>
            <p className="text-gray-600">
              Mark your calendars for these upcoming events and workshops
            </p>
          </div>
          
          <div className="flex justify-end mb-6">
            <Button variant="outline" size="sm" className="text-[#0A2463]">
              <Filter className="mr-2 h-4 w-4" />
              Filter Events
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${event.registrationOpen ? 'bg-green-500' : 'bg-amber-500'}`}>
                      {event.registrationOpen ? 'Registration Open' : 'Coming Soon'}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-[#0A2463]">{event.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>{formatDate(event.date)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#0A2463] hover:bg-[#051440]" disabled={!event.registrationOpen}>
                    {event.registrationOpen ? 'Register Now' : 'Notify Me'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
              View All Events <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Workshops */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Technical Workshops</h2>
            <p className="text-gray-600">
              Enhance your skills with our specialized workshops led by industry experts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge className={`${
                      workshop.level === 'Beginner' ? 'bg-green-500' : 
                      workshop.level === 'Intermediate' ? 'bg-amber-500' : 
                      'bg-red-500'
                    }`}>
                      {workshop.level}
                    </Badge>
                    <Badge variant="outline">{workshop.duration}</Badge>
                  </div>
                  <CardTitle className="mt-2">{workshop.title}</CardTitle>
                  <CardDescription>Instructor: {workshop.instructor}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{workshop.description}</p>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span>{formatDate(workshop.date)}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span>{workshop.seats} seats</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    variant={workshop.registrationOpen ? "default" : "outline"}
                    disabled={!workshop.registrationOpen}
                  >
                    {workshop.registrationOpen ? 'Register' : 'Coming Soon'}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Past Events */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Past Events</h2>
            <p className="text-gray-600">
              Recap of our recent events and activities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden shadow-md">
                <div className="relative h-64">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover opacity-90" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge className="mb-2 bg-[#3E92CC]">{event.type}</Badge>
                    <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{event.attendance} attendees</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full border-[#0A2463] text-[#0A2463]">
                    View Highlights
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
              Browse Event Archives <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Event Calendar */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Event Calendar</h2>
            <p className="text-gray-600">
              Plan ahead with our comprehensive event schedule
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-4 sm:p-8 shadow-inner mb-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold">November 2023</h3>
            </div>
            
            {/* Calendar placeholder - In a real implementation, this would be an interactive calendar component */}
            <div className="grid grid-cols-7 gap-1 mb-4 text-center">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="p-2 font-semibold text-sm">
                  {day}
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center">
              {Array.from({ length: 30 }, (_, i) => {
                // Simple logic to highlight dates with events
                const hasEvent = [3, 8, 15, 22, 25].includes(i + 1);
                
                return (
                  <div 
                    key={i} 
                    className={`p-2 rounded-lg border ${
                      hasEvent ? 'bg-[#0A2463] text-white' : 'hover:bg-gray-200'
                    }`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-[#0A2463] hover:bg-[#051440]">
              Subscribe to Calendar <CalendarDays className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Host an Event */}
      <section className="py-16 bg-[#EBF2FA]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="heading-md mb-4">Host Your Own Event</h2>
              <p className="text-gray-600">
                Have an idea for a workshop, seminar, or networking event? Share it with the community!
              </p>
            </div>
            
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Event Proposal</CardTitle>
                <CardDescription>Fill out the form below to submit your event idea</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Event Title</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        placeholder="Enter event title"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Event Type</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Select type</option>
                        <option value="workshop">Workshop</option>
                        <option value="seminar">Seminar</option>
                        <option value="conference">Conference</option>
                        <option value="networking">Networking Event</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Proposed Date</label>
                      <input 
                        type="date" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Expected Duration</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Select duration</option>
                        <option value="half-day">Half Day</option>
                        <option value="full-day">Full Day</option>
                        <option value="two-days">Two Days</option>
                        <option value="three-days">Three Days</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Event Description</label>
                    <textarea 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows={4}
                      placeholder="Describe your event idea, goals, and target audience"
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Resources Needed</label>
                    <textarea 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      rows={2}
                      placeholder="What resources or assistance would you need?"
                    ></textarea>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#0A2463]">Submit Proposal</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-[#0A2463] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-md mb-4">Event Testimonials</h2>
            <p className="text-gray-300">
              Hear what participants say about our events
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "The workshop on marine CFD was incredibly informative and hands-on. I gained practical skills that I could immediately apply to my research work.",
                author: "Amit Sharma",
                role: "PhD Student, Hydrodynamics",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              },
              {
                quote: "The alumni networking night provided me with valuable connections that led to my internship. These events are truly career-changing.",
                author: "Priya Patel",
                role: "Final Year Student",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              },
              {
                quote: "The annual symposium is always a highlight. The quality of presentations and opportunities for knowledge exchange are exceptional.",
                author: "Dr. Sunil Kumar",
                role: "Faculty, Marine Engineering",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#051440] border-none shadow-xl">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <ThumbsUp className="h-5 w-5 text-[#3E92CC] mr-2 mt-1 flex-shrink-0" />
                    <p className="italic text-gray-300">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center mt-4">
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
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-6">Stay Updated on Events</h2>
            <p className="text-xl mb-8 text-gray-100">
              Subscribe to our newsletter to get regular updates on upcoming events and workshops.
            </p>
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-grow px-4 py-3 rounded-l-lg" 
              />
              <Button className="rounded-l-none bg-[#051440]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Events;
