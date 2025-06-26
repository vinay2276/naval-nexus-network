
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, PenTool, Calendar, User, Heart, MessageCircle, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'My Internship Experience at Cochin Shipyard Limited',
      excerpt: 'A detailed account of my summer internship working on ship design projects and learning from industry experts.',
      author: 'Priya Sharma',
      date: '2024-12-20',
      category: 'Career',
      tags: ['Internship', 'Shipyard', 'Experience'],
      likes: 24,
      comments: 8,
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Understanding CFD Analysis in Naval Architecture',
      excerpt: 'A comprehensive guide to Computational Fluid Dynamics and its applications in ship design and marine engineering.',
      author: 'Raj Malhotra',
      date: '2024-12-18',
      category: 'Academic',
      tags: ['CFD', 'Research', 'Technical'],
      likes: 35,
      comments: 12,
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Career Opportunities in Offshore Engineering',
      excerpt: 'Exploring the vast career opportunities in offshore oil and gas industry for marine engineers.',
      author: 'Ananya Reddy',
      date: '2024-12-15',
      category: 'Career',
      tags: ['Offshore', 'Career', 'Industry'],
      likes: 19,
      comments: 6,
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Student Life at Naval Architecture Department',
      excerpt: 'A freshman\'s perspective on the exciting student life and opportunities in our department.',
      author: 'Karan Singh',
      date: '2024-12-12',
      category: 'Student Life',
      tags: ['Student Life', 'Department', 'Freshman'],
      likes: 28,
      comments: 15,
      readTime: '4 min read'
    }
  ];

  const categories = ['all', 'Academic', 'Career', 'Student Life', 'Research'];

  const filteredBlogs = blogPosts.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="heading-lg text-gray-900 mb-2">Department Blogs</h1>
                <p className="text-gray-600">
                  Share experiences, insights, and knowledge with the department community
                </p>
              </div>
              <Button className="bg-naval-DEFAULT hover:bg-naval-dark text-white">
                <PenTool className="mr-2 h-4 w-4" />
                Write a Blog
              </Button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-naval-DEFAULT hover:bg-naval-dark" : ""}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBlogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {blog.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-naval-DEFAULT transition-colors">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {blog.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {blog.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mt-4 pt-4 border-t">
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <Heart className="h-4 w-4" />
                      <span>{blog.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <MessageCircle className="h-4 w-4" />
                      <span>{blog.comments}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 mb-4">No blogs found matching your criteria.</p>
              <Button variant="outline">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
