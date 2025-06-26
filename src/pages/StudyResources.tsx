
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Upload, Download, FileText, Video, BookOpen, Users, Calendar } from 'lucide-react';

const StudyResources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Ship Stability and Hydrostatics - Lecture Notes',
      description: 'Comprehensive notes covering stability calculations, metacentric height, and load line principles.',
      type: 'Lecture Notes',
      course: 'Ship Stability',
      year: 'B.Tech 3/4',
      semester: 'Semester I',
      uploader: 'Dr. Rajesh Kumar',
      uploadDate: '2024-12-15',
      downloads: 245,
      fileSize: '5.2 MB',
      fileType: 'PDF'
    },
    {
      id: 2,
      title: 'Naval Architecture Mid-term Question Paper 2023',
      description: 'Previous year mid-term examination paper with solutions for practice.',
      type: 'Past Paper',
      course: 'Naval Architecture',
      year: 'B.Tech 2/4',
      semester: 'Semester II',
      uploader: 'Year Representative',
      uploadDate: '2024-12-10',
      downloads: 156,
      fileSize: '2.1 MB',
      fileType: 'PDF'
    },
    {
      id: 3,
      title: 'CFD Analysis Tutorial Videos',
      description: 'Step-by-step video tutorials on using ANSYS Fluent for marine applications.',
      type: 'Video Tutorial',
      course: 'Computational Fluid Dynamics',
      year: 'M.Tech 1/2',
      semester: 'Semester I',
      uploader: 'Priya Sharma',
      uploadDate: '2024-12-08',
      downloads: 89,
      fileSize: '250 MB',
      fileType: 'Video'
    },
    {
      id: 4,
      title: 'Marine Propulsion Systems Textbook',
      description: 'Digital copy of the recommended textbook for marine propulsion course.',
      type: 'Textbook',
      course: 'Marine Propulsion',
      year: 'B.Tech 4/4',
      semester: 'Semester I',
      uploader: 'Dr. Anitha Devi',
      uploadDate: '2024-12-05',
      downloads: 312,
      fileSize: '45.8 MB',
      fileType: 'PDF'
    },
    {
      id: 5,
      title: 'Offshore Structures Design Guidelines',
      description: 'Industry standards and design guidelines for offshore platform structures.',
      type: 'Reference Material',
      course: 'Offshore Engineering',
      year: 'M.Tech 2/2',
      semester: 'Semester I',
      uploader: 'Industry Expert',
      uploadDate: '2024-12-01',
      downloads: 78,
      fileSize: '12.3 MB',
      fileType: 'PDF'
    }
  ];

  const resourceTypes = ['all', 'Lecture Notes', 'Past Paper', 'Video Tutorial', 'Textbook', 'Reference Material'];
  const academicYears = ['all', 'B.Tech 1/4', 'B.Tech 2/4', 'B.Tech 3/4', 'B.Tech 4/4', 'M.Tech 1/2', 'M.Tech 2/2'];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesYear = selectedYear === 'all' || resource.year === selectedYear;
    return matchesSearch && matchesType && matchesYear;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video Tutorial': return <Video className="h-5 w-5" />;
      case 'Textbook': return <BookOpen className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Lecture Notes': return 'bg-blue-100 text-blue-800';
      case 'Past Paper': return 'bg-green-100 text-green-800';
      case 'Video Tutorial': return 'bg-purple-100 text-purple-800';
      case 'Textbook': return 'bg-orange-100 text-orange-800';
      case 'Reference Material': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="heading-lg text-gray-900 mb-2">Study Resources</h1>
                <p className="text-gray-600">
                  Access lecture notes, past papers, textbooks, and other academic materials
                </p>
              </div>
              <Button className="bg-naval-DEFAULT hover:bg-naval-dark text-white">
                <Upload className="mr-2 h-4 w-4" />
                Upload Resource
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search resources by title, course, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-3 py-2 border rounded-md bg-white text-sm"
              >
                {resourceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border rounded-md bg-white text-sm"
              >
                {academicYears.map((year) => (
                  <option key={year} value={year}>
                    {year === 'all' ? 'All Years' : year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`text-xs ${getTypeColor(resource.type)}`}>
                      {resource.type}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      {getTypeIcon(resource.type)}
                      <span>{resource.fileSize}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-600">Course:</span>
                        <p className="text-gray-900">{resource.course}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-600">Year:</span>
                        <p className="text-gray-900">{resource.year}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{resource.uploader}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(resource.uploadDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t">
                      <span className="text-sm text-gray-500">
                        {resource.downloads} downloads
                      </span>
                      <Button size="sm" className="bg-naval-DEFAULT hover:bg-naval-dark text-white">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">No resources found matching your criteria.</p>
              <Button variant="outline">
                Clear Filters
              </Button>
            </div>
          )}

          {/* My Submissions Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>My Submissions</CardTitle>
              <CardDescription>
                Track the status of resources you've uploaded
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Marine Engineering Basics - Notes</p>
                    <p className="text-sm text-gray-600">Uploaded 2 days ago</p>
                  </div>
                  <Badge className="bg-yellow-100 text-yellow-800">Pending Review</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Ship Design Project Report</p>
                    <p className="text-sm text-gray-600">Uploaded 1 week ago</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Approved</Badge>
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

export default StudyResources;
