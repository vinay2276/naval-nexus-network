
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, ExternalLink, Newspaper } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsArticles = [
    {
      id: 1,
      title: 'New Offshore Wind Farm Project Announced in Bay of Bengal',
      summary: 'Major renewable energy initiative to boost India\'s maritime industry with cutting-edge technology.',
      source: 'Maritime Executive',
      publishedDate: '2024-12-20',
      category: 'Offshore',
      url: '#',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Advanced Ship Design Technologies Revolutionizing Naval Architecture',
      summary: 'Latest developments in computational fluid dynamics and AI-driven design optimization.',
      source: 'Naval Technology',
      publishedDate: '2024-12-18',
      category: 'Technology',
      url: '#',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: 'Indian Shipbuilding Industry Sees Record Growth in 2024',
      summary: 'Domestic shipyards report unprecedented orders with focus on green shipping solutions.',
      source: 'Shipping Today',
      publishedDate: '2024-12-15',
      category: 'Industry',
      url: '#',
      image: '/placeholder.svg'
    },
    {
      id: 4,
      title: 'Marine Propulsion Systems: Hydrogen Fuel Cell Breakthrough',
      summary: 'New hydrogen fuel cell technology promises zero-emission maritime transport.',
      source: 'Marine Engineering',
      publishedDate: '2024-12-12',
      category: 'Technology',
      url: '#',
      image: '/placeholder.svg'
    }
  ];

  const categories = ['all', 'Technology', 'Industry', 'Offshore', 'Research'];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technology': return 'bg-blue-100 text-blue-800';
      case 'Industry': return 'bg-green-100 text-green-800';
      case 'Offshore': return 'bg-purple-100 text-purple-800';
      case 'Research': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="heading-lg text-gray-900 mb-2">Latest Industry News</h1>
            <p className="text-gray-600">
              Stay updated with the latest developments in maritime industry and naval architecture
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search news articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 'bg-naval-DEFAULT hover:bg-naval-dark text-white' : ''}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredNews.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={`text-xs ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(article.publishedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-naval-DEFAULT cursor-pointer">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {article.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-medium">
                      {article.source}
                    </span>
                    <Button size="sm" variant="outline" className="hover:bg-naval-DEFAULT hover:text-white">
                      <ExternalLink className="mr-2 h-3 w-3" />
                      Read Full Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <Newspaper className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-4">No news articles found matching your criteria.</p>
              <Button variant="outline" onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}>
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

export default News;
