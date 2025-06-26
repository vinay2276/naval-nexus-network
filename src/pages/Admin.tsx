
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Calendar, MessageSquare, Settings, Shield, UserPlus, Eye } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const pendingVerifications = [
    { id: 1, name: 'Arjun Patel', email: 'arjun.patel@email.com', role: 'Student', registrationNumber: 'AU21NAME001', submittedDate: '2024-12-20' },
    { id: 2, name: 'Priya Sharma', email: 'priya.sharma@email.com', role: 'Alumni', passedOutYear: '2020', submittedDate: '2024-12-19' },
    { id: 3, name: 'Vikram Singh', email: 'vikram.singh@email.com', role: 'Student', registrationNumber: 'AU21NAME002', submittedDate: '2024-12-18' }
  ];

  const systemStats = {
    totalUsers: 156,
    pendingApprovals: 3,
    totalBlogs: 42,
    totalResources: 78,
    totalClubs: 6,
    totalEvents: 15,
    newFeedback: 8
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-naval-DEFAULT" />
              <div>
                <p className="text-2xl font-bold">{systemStats.totalUsers}</p>
                <p className="text-sm text-gray-600">Total Users</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold">{systemStats.pendingApprovals}</p>
                <p className="text-sm text-gray-600">Pending Approvals</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-green-500" />
              <div>
                <p className="text-2xl font-bold">{systemStats.totalBlogs}</p>
                <p className="text-sm text-gray-600">Total Blogs</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-8 w-8 text-red-500" />
              <div>
                <p className="text-2xl font-bold">{systemStats.newFeedback}</p>
                <p className="text-sm text-gray-600">New Feedback</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Pending User Verifications
          </CardTitle>
          <CardDescription>
            New user accounts awaiting admin approval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingVerifications.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                    </div>
                    <Badge variant="outline" className="ml-2">
                      {user.role}
                    </Badge>
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {user.role === 'Student' ? `Reg. No: ${user.registrationNumber}` : `Passed out: ${user.passedOutYear}`}
                    {' • '}
                    Submitted: {new Date(user.submittedDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                    Approve
                  </Button>
                  <Button size="sm" variant="destructive">
                    Reject
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">User Management</h3>
        <Button className="bg-naval-DEFAULT hover:bg-naval-dark text-white">
          <UserPlus className="mr-2 h-4 w-4" />
          Add New User
        </Button>
      </div>
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-600">User management interface will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderSystemSettings = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">System Settings</h3>
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-600">System configuration options will be implemented here.</p>
        </CardContent>
      </Card>
    </div>
  );

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Shield className="h-4 w-4" /> },
    { id: 'users', label: 'User Management', icon: <Users className="h-4 w-4" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-4 w-4" /> }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="heading-lg text-gray-900 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">
              Manage users, content, and system settings
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Sidebar */}
            <div className="lg:w-64">
              <Card>
                <CardContent className="p-4">
                  <nav className="space-y-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? 'bg-naval-DEFAULT text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {tab.icon}
                        {tab.label}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'overview' && renderOverview()}
              {activeTab === 'users' && renderUserManagement()}
              {activeTab === 'settings' && renderSystemSettings()}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
