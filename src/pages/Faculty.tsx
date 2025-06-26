
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Globe, Clock, BookOpen } from 'lucide-react';

const Faculty = () => {
  const facultyMembers = [
    {
      id: 1,
      name: 'Dr. Rajesh Kumar',
      designation: 'Professor & Head of Department',
      profilePicture: '/placeholder.svg',
      researchInterests: ['Ship Stability', 'Naval Architecture', 'Marine Structures'],
      officeHours: 'Mon/Wed 10:00 AM - 12:00 PM',
      email: 'rajesh.kumar@andhrauniv.edu.in',
      phone: '+91-863-2344555',
      personalPage: 'https://andhrauniv.edu.in/faculty/rajesh-kumar'
    },
    {
      id: 2,
      name: 'Dr. Anitha Devi',
      designation: 'Associate Professor',
      profilePicture: '/placeholder.svg',
      researchInterests: ['Marine Propulsion', 'Offshore Engineering', 'CFD Analysis'],
      officeHours: 'Tue/Thu 2:00 PM - 4:00 PM',
      email: 'anitha.devi@andhrauniv.edu.in',
      phone: '+91-863-2344556',
      personalPage: 'https://andhrauniv.edu.in/faculty/anitha-devi'
    },
    {
      id: 3,
      name: 'Dr. Suresh Babu',
      designation: 'Assistant Professor',
      profilePicture: '/placeholder.svg',
      researchInterests: ['Marine Materials', 'Corrosion Engineering', 'Ship Design'],
      officeHours: 'Mon/Fri 11:00 AM - 1:00 PM',
      email: 'suresh.babu@andhrauniv.edu.in',
      phone: '+91-863-2344557',
      personalPage: 'https://andhrauniv.edu.in/faculty/suresh-babu'
    },
    {
      id: 4,
      name: 'Prof. Lakshmi Prasad',
      designation: 'Professor',
      profilePicture: '/placeholder.svg',
      researchInterests: ['Ocean Engineering', 'Underwater Vehicles', 'Marine Robotics'],
      officeHours: 'Wed/Fri 9:00 AM - 11:00 AM',
      email: 'lakshmi.prasad@andhrauniv.edu.in',
      phone: '+91-863-2344558',
      personalPage: 'https://andhrauniv.edu.in/faculty/lakshmi-prasad'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="heading-lg text-gray-900 mb-2">Faculty Directory</h1>
            <p className="text-gray-600">
              Meet our distinguished faculty members in Naval Architecture and Marine Engineering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {facultyMembers.map((faculty) => (
              <Card key={faculty.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <img
                      src={faculty.profilePicture}
                      alt={faculty.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-1">{faculty.name}</CardTitle>
                      <CardDescription className="text-base font-medium text-naval-DEFAULT">
                        {faculty.designation}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Research Interests
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {faculty.researchInterests.map((interest, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      Office Hours
                    </h4>
                    <p className="text-sm text-gray-600">{faculty.officeHours}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <a 
                        href={`mailto:${faculty.email}`}
                        className="text-sm text-naval-DEFAULT hover:underline"
                      >
                        {faculty.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{faculty.phone}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <a 
                        href={faculty.personalPage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-naval-DEFAULT hover:underline"
                      >
                        Faculty Page
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle>Department Contact Information</CardTitle>
                <CardDescription>
                  General contact details for the Naval Architecture and Marine Engineering Department
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Office Address</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Department of Naval Architecture and Marine Engineering<br />
                      College of Engineering<br />
                      Andhra University<br />
                      Visakhapatnam - 530003<br />
                      Andhra Pradesh, India
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Contact Details</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>+91-863-2344555</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        <span>name@andhrauniv.edu.in</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Faculty;
