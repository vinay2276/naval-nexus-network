
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Users, Calendar, Mail, Plus } from 'lucide-react';

const Clubs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const clubs = [
    {
      id: 1,
      name: 'Naval Architecture Society',
      about: 'Promoting excellence in naval architecture through technical discussions and industry connections.',
      members: 45,
      representative: 'Arjun Patel',
      contact: 'naval.society@andhrauniv.edu.in',
      logo: '/placeholder.svg'
    },
    {
      id: 2,
      name: 'Marine Engineering Club',
      about: 'Hands-on learning and innovation in marine propulsion and machinery systems.',
      members: 38,
      representative: 'Priya Sharma',
      contact: 'marine.club@andhrauniv.edu.in',
      logo: '/placeholder.svg'
    },
    {
      id: 3,
      name: 'Offshore Technology Group',
      about: 'Exploring cutting-edge technologies in offshore oil and gas industry.',
      members: 29,
      representative: 'Dr. Rajesh Kumar',
      contact: 'offshore.tech@andhrauniv.edu.in',
      logo: '/placeholder.svg'
    }
  ];

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    club.about.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="heading-lg text-gray-900 mb-2">Clubs & Organizations</h1>
                <p className="text-gray-600">
                  Join departmental clubs and participate in student organizations
                </p>
              </div>
              <Button className="bg-naval-DEFAULT hover:bg-naval-dark text-white">
                <Plus className="mr-2 h-4 w-4" />
                Suggest New Club
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search clubs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClubs.map((club) => (
              <Card key={club.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <img 
                      src={club.logo} 
                      alt={club.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg">{club.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Users className="h-4 w-4" />
                        <span>{club.members} members</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription>
                    {club.about}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-600">Representative:</span>
                      <p className="text-gray-900">{club.representative}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Mail className="h-4 w-4" />
                      <span>{club.contact}</span>
                    </div>
                    <div className="flex gap-2 pt-3">
                      <Button size="sm" className="bg-naval-DEFAULT hover:bg-naval-dark text-white flex-1">
                        Join Club
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredClubs.length === 0 && (
            <div className="text-center py-12">
              <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">No clubs found matching your criteria.</p>
              <Button variant="outline" onClick={() => setSearchTerm('')}>
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Clubs;
