
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { 
  CalendarDays, 
  Users, 
  Clock, 
  MapPin, 
  Search, 
  Filter, 
  Calendar as CalendarIcon,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

const Events = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  // Sample upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Naval Architects Symposium",
      date: new Date(2023, 6, 15),
      time: "09:00 AM - 05:00 PM",
      location: "Main Auditorium, Andhra University",
      attendees: 120,
      type: "Conference",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Marine Propulsion Systems Workshop",
      date: new Date(2023, 6, 22),
      time: "10:30 AM - 03:30 PM",
      location: "Engineering Block, Cochin Shipyard",
      attendees: 45,
      type: "Workshop",
      image: "https://images.unsplash.com/photo-1572443490709-e57384fdd772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Networking Mixer: Naval Industry Professionals",
      date: new Date(2023, 7, 5),
      time: "06:00 PM - 09:00 PM",
      location: "Vizag Harbor View Hotel",
      attendees: 80,
      type: "Networking",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
  ];

  // Sample past events
  const pastEvents = [
    {
      id: 4,
      title: "Hydrodynamics in Ship Design Lecture Series",
      date: new Date(2023, 5, 10),
      location: "Online Webinar",
      type: "Webinar",
      recordingAvailable: true
    },
    {
      id: 5,
      title: "Alumni Reunion 2023",
      date: new Date(2023, 4, 25),
      location: "University Grounds",
      type: "Social",
      recordingAvailable: false
    },
    {
      id: 6,
      title: "Career Fair: Maritime Industry",
      date: new Date(2023, 3, 12),
      location: "University Convention Center",
      type: "Career Fair",
      recordingAvailable: false
    },
  ];

  // Upcoming workshops
  const workshops = [
    {
      id: 7,
      title: "CFD Analysis for Naval Architects",
      instructor: "Dr. Amit Patel",
      date: new Date(2023, 6, 28),
      duration: "2 days",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 8,
      title: "Introduction to Ship Stability",
      instructor: "Prof. Sarah Johnson",
      date: new Date(2023, 7, 10),
      duration: "1 day",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A2463] to-[#3E92CC] text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-6">Events & Workshops</h1>
              <p className="text-lg md:text-xl mb-8 text-gray-100">
                Stay connected with the naval architecture community through conferences, workshops, webinars, and networking events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-[#0A2463] hover:bg-gray-100">
                  Browse All Events
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Submit an Event
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Search and Filter */}
        <section className="py-8 bg-[#F2F5F9]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search events by title, keyword, or location..." 
                  className="pl-10 py-6 bg-white"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filters
              </Button>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="heading-md text-[#0A2463] mb-8">Upcoming Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-[#0A2463]">{event.title}</CardTitle>
                      <Badge className="bg-[#3E92CC]">{event.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <CalendarDays className="h-4 w-4 mr-2 text-[#3E92CC]" />
                        <span>{format(event.date, "MMMM d, yyyy")}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-[#3E92CC]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-[#3E92CC]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-[#3E92CC]" />
                        <span>{event.attendees} attending</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="ghost" className="text-[#0A2463]">
                      More Details
                    </Button>
                    <Button className="bg-[#0A2463] hover:bg-[#051440]">
                      Register
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
                View All Upcoming Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* Calendar Section */}
        <section className="py-12 bg-[#F2F5F9]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <h2 className="heading-md text-[#0A2463] mb-6">Event Calendar</h2>
                <p className="text-gray-600 mb-6">
                  Browse our event calendar to find upcoming events, workshops, and networking opportunities in the naval architecture community.
                </p>
                
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="p-3 pointer-events-auto"
                  />
                </div>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="heading-sm text-[#0A2463] mb-6">
                  {date ? (
                    <>Events on {format(date, "MMMM d, yyyy")}</>
                  ) : (
                    <>Select a date</>
                  )}
                </h3>
                
                <div className="space-y-4">
                  {date ? (
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-[#0A2463]">No events on this date</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          There are no events scheduled for this date. Try selecting a different date or browse all upcoming events.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
                          Browse All Events
                        </Button>
                      </CardFooter>
                    </Card>
                  ) : (
                    <Card>
                      <CardContent className="pt-6">
                        <p className="text-gray-600">
                          Please select a date to view events.
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Workshop Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="heading-md text-[#0A2463] mb-8">Upcoming Workshops</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {workshops.map((workshop) => (
                <Card key={workshop.id} className="flex flex-col md:flex-row overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                    <img 
                      src={workshop.image} 
                      alt={workshop.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-xl font-semibold text-[#0A2463] mb-2">{workshop.title}</h3>
                    <p className="text-gray-600 mb-4">
                      Instructor: {workshop.instructor}
                    </p>
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarDays className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span>{format(workshop.date, "MMMM d, yyyy")}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <Clock className="h-4 w-4 mr-2 text-[#3E92CC]" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <Badge className="bg-[#3E92CC]">{workshop.level}</Badge>
                      <Badge variant="outline">Workshop</Badge>
                    </div>
                    <Button className="bg-[#0A2463] hover:bg-[#051440]">
                      Register Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Past Events Section */}
        <section className="py-12 bg-[#F2F5F9]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="heading-md text-[#0A2463] mb-8">Past Events</h2>
            
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6 bg-white rounded-lg p-1">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="conferences">Conferences</TabsTrigger>
                <TabsTrigger value="workshops">Workshops</TabsTrigger>
                <TabsTrigger value="webinars">Webinars</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {pastEvents.map((event) => (
                  <Card key={event.id} className="overflow-hidden shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0A2463] mb-1">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                            <div className="flex items-center">
                              <CalendarDays className="h-4 w-4 mr-1 text-[#3E92CC]" />
                              <span>{format(event.date, "MMMM d, yyyy")}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-[#3E92CC]" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className="bg-gray-200 text-gray-800">{event.type}</Badge>
                          {event.recordingAvailable && (
                            <Button variant="outline" size="sm" className="text-[#0A2463] text-xs">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View Recording
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="conferences" className="space-y-4">
                <Card>
                  <CardContent className="p-6 text-center py-12">
                    <p className="text-gray-600">No past conferences to display.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="workshops" className="space-y-4">
                <Card>
                  <CardContent className="p-6 text-center py-12">
                    <p className="text-gray-600">No past workshops to display.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="webinars" className="space-y-4">
                {pastEvents.filter(e => e.type === "Webinar").map((event) => (
                  <Card key={event.id} className="overflow-hidden shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0A2463] mb-1">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                            <div className="flex items-center">
                              <CalendarDays className="h-4 w-4 mr-1 text-[#3E92CC]" />
                              <span>{format(event.date, "MMMM d, yyyy")}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-[#3E92CC]" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className="bg-gray-200 text-gray-800">{event.type}</Badge>
                          {event.recordingAvailable && (
                            <Button variant="outline" size="sm" className="text-[#0A2463] text-xs">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              View Recording
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="social" className="space-y-4">
                {pastEvents.filter(e => e.type === "Social").map((event) => (
                  <Card key={event.id} className="overflow-hidden shadow-sm">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#0A2463] mb-1">{event.title}</h3>
                          <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
                            <div className="flex items-center">
                              <CalendarDays className="h-4 w-4 mr-1 text-[#3E92CC]" />
                              <span>{format(event.date, "MMMM d, yyyy")}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1 text-[#3E92CC]" />
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className="bg-gray-200 text-gray-800">{event.type}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[#0A2463] text-[#0A2463]">
                View All Past Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
