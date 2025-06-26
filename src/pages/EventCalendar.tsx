
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users, Plus } from 'lucide-react';

const EventCalendar = () => {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('list');

  const events = [
    {
      id: 1,
      title: 'Guest Lecture: Future of Maritime Industry',
      description: 'Industry expert discusses emerging trends in shipbuilding and maritime technology.',
      date: '2024-12-28',
      time: '10:00 AM - 11:30 AM',
      location: 'Auditorium A',
      type: 'Seminar',
      organizer: 'Dr. Anitha Devi',
      attendees: 45
    },
    {
      id: 2,
      title: 'Workshop: CFD Analysis for Marine Applications',
      description: 'Hands-on workshop on computational fluid dynamics using ANSYS Fluent.',
      date: '2024-12-30',
      time: '9:00 AM - 4:00 PM',
      location: 'Computer Lab 2',
      type: 'Workshop',
      organizer: 'Marine Engineering Club',
      attendees: 25
    },
    {
      id: 3,
      title: 'Alumni Meet 2025',
      description: 'Annual gathering of department alumni for networking and knowledge sharing.',
      date: '2025-01-15',
      time: '5:00 PM - 9:00 PM',
      location: 'Department Premises',
      type: 'Alumni Event',
      organizer: 'Alumni Association',
      attendees: 120
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Seminar': return 'bg-blue-100 text-blue-800';
      case 'Workshop': return 'bg-green-100 text-green-800';
      case 'Alumni Event': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="heading-lg text-gray-900 mb-2">Event Calendar</h1>
                <p className="text-gray-600">
                  Stay updated on departmental events, seminars, and workshops
                </p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  onClick={() => setViewMode('list')}
                >
                  List View
                </Button>
                <Button 
                  variant={viewMode === 'calendar' ? 'default' : 'outline'}
                  onClick={() => setViewMode('calendar')}
                >
                  Calendar View
                </Button>
                <Button className="bg-naval-DEFAULT hover:bg-naval-dark text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Event
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className={`text-xs ${getEventTypeColor(event.type)}`}>
                          {event.type}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Users className="h-4 w-4" />
                          <span>{event.attendees} registered</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <CardDescription className="text-base">
                        {event.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Organized by: <span className="font-medium">{event.organizer}</span>
                    </span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm" className="bg-naval-DEFAULT hover:bg-naval-dark text-white">
                        Register
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {events.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">No events scheduled yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventCalendar;
