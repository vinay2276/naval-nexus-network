
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar, MessageSquare, Award, Bell, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock user role - in real app, this would come from authentication context
  const userRole = 'student'; // student, alumni, faculty, admin

  const quickStats = [
    { label: 'New Resources', value: '12', icon: BookOpen, color: 'text-blue-600' },
    { label: 'Upcoming Events', value: '5', icon: Calendar, color: 'text-green-600' },
    { label: 'New Messages', value: '3', icon: MessageSquare, color: 'text-purple-600' },
    { label: 'Active Clubs', value: '8', icon: Users, color: 'text-orange-600' },
  ];

  const recentActivities = [
    { title: 'New study material uploaded for Ship Design', time: '2 hours ago', type: 'resource' },
    { title: 'Alumni meetup scheduled for next week', time: '1 day ago', type: 'event' },
    { title: 'New blog post: My Internship at Cochin Shipyard', time: '2 days ago', type: 'blog' },
    { title: 'Robotics Club meeting reminder', time: '3 days ago', type: 'club' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Welcome Header */}
          <div className="mb-8">
            <h1 className="heading-lg text-gray-900 mb-2">
              Welcome back, Student!
            </h1>
            <p className="text-gray-600">
              Here's what's happening in the Naval Architecture & Marine Engineering department today.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {quickStats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
                <CardDescription>
                  Common tasks for students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/study-resources">
                  <Button variant="outline" className="w-full justify-start">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Study Resources
                  </Button>
                </Link>
                <Link to="/blogs">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Write a Blog Post
                  </Button>
                </Link>
                <Link to="/clubs">
                  <Button variant="outline" className="w-full justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Join a Club
                  </Button>
                </Link>
                <Link to="/event-calendar">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    View Events
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>
                  Stay updated with department activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50">
                      <div className="w-2 h-2 rounded-full bg-naval-accent mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Events Preview */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Don't miss these important department events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-naval-accent" />
                    <span className="text-sm font-medium text-naval-accent">Dec 28, 2024</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Guest Lecture on Marine Robotics</h4>
                  <p className="text-sm text-gray-600">By Dr. Smith from MIT Ocean Engineering</p>
                </div>
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-naval-accent" />
                    <span className="text-sm font-medium text-naval-accent">Jan 5, 2025</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alumni Networking Event</h4>
                  <p className="text-sm text-gray-600">Connect with successful alumni in the industry</p>
                </div>
                <div className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-naval-accent" />
                    <span className="text-sm font-medium text-naval-accent">Jan 10, 2025</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Technical Workshop</h4>
                  <p className="text-sm text-gray-600">Hands-on CFD analysis techniques</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
