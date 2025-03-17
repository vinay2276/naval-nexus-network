
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProfileCard from '@/components/ui/ProfileCard';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, Filter, GraduationCap, Briefcase, MapPin, X, ChevronDown 
} from 'lucide-react';

// Mock data for alumni profiles
const alumniData = [
  {
    id: '1',
    name: 'Dr. Priya Sharma',
    role: 'Lead Naval Architect',
    company: 'Cochin Shipyard Ltd',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Ship Design', 'CFD Analysis', 'Project Management'],
    available: true,
    featured: true,
    year: '2005',
    location: 'Kochi',
    industry: 'Shipbuilding',
  },
  {
    id: '2',
    name: 'Raj Malhotra',
    role: 'Marine Engineer',
    company: 'Maersk Line',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Engine Systems', 'Maritime Operations', 'HVAC Systems'],
    available: false,
    featured: true,
    year: '2010',
    location: 'Singapore',
    industry: 'Shipping',
  },
  {
    id: '3',
    name: 'Ananya Reddy',
    role: 'Offshore Engineer',
    company: 'L&T Hydrocarbon Engineering',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Platform Design', 'Structural Analysis', 'Hydrodynamics'],
    available: true,
    featured: true,
    year: '2012',
    location: 'Mumbai',
    industry: 'Offshore',
  },
  {
    id: '4',
    name: 'Vikram Singh',
    role: 'Project Manager',
    company: 'Mazagon Dock Shipbuilders',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Project Management', 'Naval Architecture', 'Quality Control'],
    available: true,
    year: '2008',
    location: 'Mumbai',
    industry: 'Shipbuilding',
  },
  {
    id: '5',
    name: 'Sanjay Kumar',
    role: 'Structural Engineer',
    company: 'Hindustan Shipyard',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Structural Analysis', 'FEA', 'CAD'],
    available: false,
    year: '2015',
    location: 'Visakhapatnam',
    industry: 'Shipbuilding',
  },
  {
    id: '6',
    name: 'Meera Patel',
    role: 'Marine Systems Designer',
    company: 'ABB Marine & Ports',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
    skills: ['Power Systems', 'Automation', 'Green Technologies'],
    available: true,
    year: '2017',
    location: 'Bengaluru',
    industry: 'Marine Equipment',
  },
];

// Filter options
const industries = ['Shipbuilding', 'Shipping', 'Offshore', 'Marine Equipment', 'Oil & Gas', 'Defense'];
const locations = ['Mumbai', 'Visakhapatnam', 'Kochi', 'Singapore', 'Bengaluru', 'Chennai'];
const graduationYears = ['2000-2005', '2006-2010', '2011-2015', '2016-2020', '2021-Present'];

const Directory = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<{
    industry: string[];
    location: string[];
    year: string[];
    mentorship: boolean;
  }>({
    industry: [],
    location: [],
    year: [],
    mentorship: false,
  });
  
  const [showFilters, setShowFilters] = useState(false);
  const [filteredAlumni, setFilteredAlumni] = useState(alumniData);
  
  // Apply filters and search
  useEffect(() => {
    let result = alumniData;
    
    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (alumni) =>
          alumni.name.toLowerCase().includes(query) ||
          alumni.role.toLowerCase().includes(query) ||
          alumni.company?.toLowerCase().includes(query) ||
          alumni.skills.some((skill) => skill.toLowerCase().includes(query))
      );
    }
    
    // Apply filters
    if (filters.industry.length > 0) {
      result = result.filter((alumni) => filters.industry.includes(alumni.industry));
    }
    
    if (filters.location.length > 0) {
      result = result.filter((alumni) => filters.location.includes(alumni.location));
    }
    
    if (filters.year.length > 0) {
      // This is a simplified approach - in a real app, you'd parse the year ranges
      result = result.filter((alumni) => {
        const year = parseInt(alumni.year);
        return filters.year.some((range) => {
          if (range === '2000-2005') return year >= 2000 && year <= 2005;
          if (range === '2006-2010') return year >= 2006 && year <= 2010;
          if (range === '2011-2015') return year >= 2011 && year <= 2015;
          if (range === '2016-2020') return year >= 2016 && year <= 2020;
          if (range === '2021-Present') return year >= 2021;
          return false;
        });
      });
    }
    
    if (filters.mentorship) {
      result = result.filter((alumni) => alumni.available);
    }
    
    setFilteredAlumni(result);
  }, [searchQuery, filters]);
  
  // Toggle filter selection
  const toggleFilter = (category: 'industry' | 'location' | 'year', value: string) => {
    setFilters((prev) => {
      const current = [...prev[category]];
      const index = current.indexOf(value);
      
      if (index === -1) {
        current.push(value);
      } else {
        current.splice(index, 1);
      }
      
      return { ...prev, [category]: current };
    });
  };
  
  // Toggle mentorship filter
  const toggleMentorshipFilter = () => {
    setFilters((prev) => ({
      ...prev,
      mentorship: !prev.mentorship,
    }));
  };
  
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      industry: [],
      location: [],
      year: [],
      mentorship: false,
    });
    setSearchQuery('');
  };
  
  // Get active filter count
  const getActiveFilterCount = () => {
    return (
      filters.industry.length +
      filters.location.length +
      filters.year.length +
      (filters.mentorship ? 1 : 0)
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16 animate-fade-in">
        {/* Header */}
        <section className="bg-naval-DEFAULT text-white py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-lg mb-4">Alumni Directory</h1>
              <p className="text-naval-light/80 text-lg">
                Connect with alumni from the Naval Architecture and Marine Engineering Department 
                working across the maritime industry.
              </p>
            </div>
          </div>
        </section>
        
        {/* Search and Filters */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-auto md:flex-1 max-w-xl">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name, role, company, or skills..."
                  className="pl-9 py-6 bg-white"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
              
              {/* Filter Toggle Button */}
              <Button
                variant={showFilters ? "default" : "outline"}
                className={`flex items-center ${showFilters ? 'bg-naval-DEFAULT text-white' : 'border-naval-DEFAULT text-naval-DEFAULT'}`}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-4 w-4" />
                Filters {getActiveFilterCount() > 0 && `(${getActiveFilterCount()})`}
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
              
              {/* Clear Filters Button */}
              {getActiveFilterCount() > 0 && (
                <Button variant="ghost" onClick={clearFilters} className="text-naval-DEFAULT">
                  Clear All
                </Button>
              )}
            </div>
            
            {/* Filter Panel */}
            {showFilters && (
              <div className="mt-4 p-6 bg-white rounded-lg border animate-scale-up">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Industry Filter */}
                  <div>
                    <div className="flex items-center mb-4 text-naval-DEFAULT">
                      <Briefcase className="mr-2 h-4 w-4" />
                      <h3 className="font-medium">Industry</h3>
                    </div>
                    <div className="space-y-2">
                      {industries.map((industry) => (
                        <label key={industry} className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2 rounded text-naval-DEFAULT focus:ring-naval-light"
                            checked={filters.industry.includes(industry)}
                            onChange={() => toggleFilter('industry', industry)}
                          />
                          {industry}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Location Filter */}
                  <div>
                    <div className="flex items-center mb-4 text-naval-DEFAULT">
                      <MapPin className="mr-2 h-4 w-4" />
                      <h3 className="font-medium">Location</h3>
                    </div>
                    <div className="space-y-2">
                      {locations.map((location) => (
                        <label key={location} className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2 rounded text-naval-DEFAULT focus:ring-naval-light"
                            checked={filters.location.includes(location)}
                            onChange={() => toggleFilter('location', location)}
                          />
                          {location}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Graduation Year Filter */}
                  <div>
                    <div className="flex items-center mb-4 text-naval-DEFAULT">
                      <GraduationCap className="mr-2 h-4 w-4" />
                      <h3 className="font-medium">Graduation Year</h3>
                    </div>
                    <div className="space-y-2">
                      {graduationYears.map((year) => (
                        <label key={year} className="flex items-center">
                          <input
                            type="checkbox"
                            className="mr-2 rounded text-naval-DEFAULT focus:ring-naval-light"
                            checked={filters.year.includes(year)}
                            onChange={() => toggleFilter('year', year)}
                          />
                          {year}
                        </label>
                      ))}
                    </div>
                    
                    {/* Mentorship Availability */}
                    <div className="mt-6">
                      <label className="flex items-center text-naval-DEFAULT">
                        <input
                          type="checkbox"
                          className="mr-2 rounded text-naval-DEFAULT focus:ring-naval-light"
                          checked={filters.mentorship}
                          onChange={toggleMentorshipFilter}
                        />
                        <span className="font-medium">Available for Mentorship</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Directory Results */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-gray-600">
                Showing <span className="font-medium text-naval-DEFAULT">{filteredAlumni.length}</span> alumni
                {getActiveFilterCount() > 0 && ' with applied filters'}
              </p>
            </div>
            
            {/* Results Grid */}
            {filteredAlumni.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAlumni.map((alumni) => (
                  <ProfileCard key={alumni.id} {...alumni} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-gray-50 rounded-lg">
                <p className="text-lg text-gray-600">No alumni found matching your criteria.</p>
                <Button 
                  variant="link" 
                  onClick={clearFilters} 
                  className="mt-2 text-naval-DEFAULT"
                >
                  Clear filters and try again
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Directory;
