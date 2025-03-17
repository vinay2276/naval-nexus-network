
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Users,
  Send,
  Paperclip,
  Clock,
  MoreHorizontal,
  PhoneCall,
  Video,
  ChevronLeft,
  ChevronRight,
  Plus
} from 'lucide-react';

// Sample data for messages
const conversations = [
  {
    id: '1',
    user: {
      id: '101',
      name: 'Capt. Rajesh Kumar',
      role: 'Naval Architect, Indian Navy (Retd.)',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      status: 'online'
    },
    lastMessage: {
      text: 'Certainly! I can help with your questions about fluid dynamics in naval vessel design.',
      time: '09:32 AM',
      isRead: true,
      unreadCount: 0
    }
  },
  {
    id: '2',
    user: {
      id: '102',
      name: 'Dr. Priya Sharma',
      role: 'Senior Research Scientist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      status: 'offline'
    },
    lastMessage: {
      text: 'I reviewed your project proposal and have some suggestions. Let me know when you're free to discuss.',
      time: 'Yesterday',
      isRead: false,
      unreadCount: 2
    }
  },
  {
    id: '3',
    user: {
      id: '103',
      name: 'Eng. Vikram Singh',
      role: 'Project Manager',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      status: 'away'
    },
    lastMessage: {
      text: 'The shipyard visit is confirmed for next Tuesday at 10 AM. Don't forget to bring your ID and safety gear.',
      time: 'Mon',
      isRead: true,
      unreadCount: 0
    }
  },
  {
    id: '4',
    user: {
      id: '104',
      name: 'Prof. Arun Mehta',
      role: 'Department Head',
      avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      status: 'online'
    },
    lastMessage: {
      text: 'Your research paper has been accepted for the International Maritime Conference. Congratulations!',
      time: 'Last week',
      isRead: true,
      unreadCount: 0
    }
  },
  {
    id: '5',
    user: {
      id: '105',
      name: 'Dr. Ananya Desai',
      role: 'Hydrodynamics Specialist',
      avatar: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
      status: 'offline'
    },
    lastMessage: {
      text: 'I'd like to collaborate on the wave resistance study you mentioned. Do you have time this week to discuss the approach?',
      time: 'Aug 25',
      isRead: true,
      unreadCount: 0
    }
  }
];

// Sample messages for the current conversation
const sampleMessages = [
  {
    id: 'm1',
    senderId: '101',
    text: 'Hello! I saw your profile and I think I could help with your naval architecture project.',
    timestamp: '09:15 AM',
    isRead: true
  },
  {
    id: 'm2',
    senderId: 'user',
    text: 'Thank you for reaching out! I'm working on a project related to fluid dynamics in naval vessel design and could use some guidance.',
    timestamp: '09:20 AM',
    isRead: true
  },
  {
    id: 'm3',
    senderId: '101',
    text: 'That's an interesting area. I spent several years working on similar projects during my time with the Navy. What specific aspects are you focusing on?',
    timestamp: '09:25 AM',
    isRead: true
  },
  {
    id: 'm4',
    senderId: 'user',
    text: 'I'm particularly interested in how computational fluid dynamics can be used to optimize hull shapes for reduced drag and improved fuel efficiency.',
    timestamp: '09:30 AM',
    isRead: true
  },
  {
    id: 'm5',
    senderId: '101',
    text: 'Certainly! I can help with your questions about fluid dynamics in naval vessel design.',
    timestamp: '09:32 AM',
    isRead: true
  }
];

const Messages = () => {
  const [activeConversation, setActiveConversation] = useState(conversations[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [messageInput, setMessageInput] = useState('');
  
  // Status indicator color mapping
  const statusColors = {
    online: 'bg-green-500',
    offline: 'bg-gray-400',
    away: 'bg-yellow-500'
  };
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageInput.trim()) {
      // This would normally add the message to the conversation
      console.log('Sending message:', messageInput);
      setMessageInput('');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-16 flex flex-col">
        <div className="container mx-auto px-4 md:px-6 py-6 flex-1 flex flex-col">
          <h1 className="heading-md text-[#0A2463] mb-6">Messages</h1>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden flex-1 flex flex-col md:flex-row">
            {/* Sidebar - Conversations List */}
            <div className="md:w-80 border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search messages" 
                    className="pl-9"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              
              <Tabs defaultValue="all" className="flex-1 flex flex-col">
                <div className="px-2 border-b border-gray-200">
                  <TabsList className="w-full justify-start">
                    <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                    <TabsTrigger value="unread" className="flex-1">Unread</TabsTrigger>
                    <TabsTrigger value="mentors" className="flex-1">Mentors</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="all" className="flex-1 overflow-y-auto">
                  <div className="divide-y divide-gray-100">
                    {conversations.map((conversation) => (
                      <div 
                        key={conversation.id}
                        className={`p-3 hover:bg-gray-50 cursor-pointer ${
                          activeConversation.id === conversation.id ? 'bg-gray-50' : ''
                        }`}
                        onClick={() => setActiveConversation(conversation)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <img 
                              src={conversation.user.avatar} 
                              alt={conversation.user.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <span className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[conversation.user.status]} border-2 border-white rounded-full`}></span>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <h3 className="font-medium text-[#0A2463] truncate">{conversation.user.name}</h3>
                              <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{conversation.lastMessage.time}</span>
                            </div>
                            <p className="text-xs text-gray-500 truncate mb-1">{conversation.user.role}</p>
                            <p className="text-sm text-gray-600 truncate">{conversation.lastMessage.text}</p>
                          </div>
                          
                          {conversation.lastMessage.unreadCount > 0 && (
                            <Badge className="bg-[#0A2463] ml-1">{conversation.lastMessage.unreadCount}</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="unread" className="flex-1 overflow-y-auto">
                  <div className="divide-y divide-gray-100">
                    {conversations.filter(c => c.lastMessage.unreadCount > 0).map((conversation) => (
                      <div 
                        key={conversation.id}
                        className="p-3 hover:bg-gray-50 cursor-pointer"
                        onClick={() => setActiveConversation(conversation)}
                      >
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <img 
                              src={conversation.user.avatar} 
                              alt={conversation.user.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <span className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[conversation.user.status]} border-2 border-white rounded-full`}></span>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <h3 className="font-medium text-[#0A2463] truncate">{conversation.user.name}</h3>
                              <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{conversation.lastMessage.time}</span>
                            </div>
                            <p className="text-xs text-gray-500 truncate mb-1">{conversation.user.role}</p>
                            <p className="text-sm text-gray-600 truncate">{conversation.lastMessage.text}</p>
                          </div>
                          
                          <Badge className="bg-[#0A2463] ml-1">{conversation.lastMessage.unreadCount}</Badge>
                        </div>
                      </div>
                    ))}
                    
                    {conversations.filter(c => c.lastMessage.unreadCount > 0).length === 0 && (
                      <div className="p-8 text-center">
                        <p className="text-gray-500">No unread messages</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="mentors" className="flex-1 overflow-y-auto">
                  <div className="divide-y divide-gray-100">
                    {conversations.filter(c => c.user.role.includes('Mentor') || c.user.role.includes('Professor')).length === 0 ? (
                      <div className="p-8 text-center">
                        <p className="text-gray-500">No mentor conversations</p>
                        <Button variant="outline" className="mt-4 border-[#0A2463] text-[#0A2463]">
                          <Users className="mr-2 h-4 w-4" />
                          Find a Mentor
                        </Button>
                      </div>
                    ) : (
                      conversations.filter(c => c.user.role.includes('Mentor') || c.user.role.includes('Professor')).map((conversation) => (
                        <div 
                          key={conversation.id}
                          className="p-3 hover:bg-gray-50 cursor-pointer"
                          onClick={() => setActiveConversation(conversation)}
                        >
                          <div className="flex items-start gap-3">
                            <div className="relative">
                              <img 
                                src={conversation.user.avatar} 
                                alt={conversation.user.name}
                                className="w-12 h-12 rounded-full object-cover"
                              />
                              <span className={`absolute bottom-0 right-0 w-3 h-3 ${statusColors[conversation.user.status]} border-2 border-white rounded-full`}></span>
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-baseline">
                                <h3 className="font-medium text-[#0A2463] truncate">{conversation.user.name}</h3>
                                <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{conversation.lastMessage.time}</span>
                              </div>
                              <p className="text-xs text-gray-500 truncate mb-1">{conversation.user.role}</p>
                              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage.text}</p>
                            </div>
                            
                            {conversation.lastMessage.unreadCount > 0 && (
                              <Badge className="bg-[#0A2463] ml-1">{conversation.lastMessage.unreadCount}</Badge>
                            )}
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="p-4 border-t border-gray-200">
                <Button className="w-full bg-[#0A2463]">
                  <Plus className="mr-2 h-4 w-4" />
                  New Message
                </Button>
              </div>
            </div>
            
            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col">
              {activeConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="relative mr-3">
                        <img 
                          src={activeConversation.user.avatar} 
                          alt={activeConversation.user.name}
                          className="w-10 h-10 rounded-full object-cover"
                        />
                        <span className={`absolute bottom-0 right-0 w-2.5 h-2.5 ${statusColors[activeConversation.user.status]} border-2 border-white rounded-full`}></span>
                      </div>
                      
                      <div>
                        <h3 className="font-medium text-[#0A2463]">{activeConversation.user.name}</h3>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{activeConversation.user.status === 'online' ? 'Online' : 'Last seen recently'}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <PhoneCall className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Video className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Messages Area */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {sampleMessages.map((message) => (
                      <div 
                        key={message.id}
                        className={`flex ${message.senderId === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        {message.senderId !== 'user' && (
                          <img 
                            src={activeConversation.user.avatar}
                            alt={activeConversation.user.name}
                            className="w-8 h-8 rounded-full object-cover mr-2 mt-1"
                          />
                        )}
                        
                        <div className="max-w-[70%]">
                          <div 
                            className={`p-3 rounded-xl ${
                              message.senderId === 'user'
                                ? 'bg-[#0A2463] text-white rounded-br-none'
                                : 'bg-white text-gray-800 rounded-bl-none shadow-sm border border-gray-100'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                          </div>
                          <div className={`text-xs mt-1 flex items-center ${
                            message.senderId === 'user' ? 'justify-end text-gray-500' : 'justify-start text-gray-500'
                          }`}>
                            <Clock className="h-3 w-3 mr-1" />
                            {message.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Message Input Area */}
                  <div className="p-4 border-t border-gray-200">
                    <form onSubmit={handleSendMessage} className="flex gap-2">
                      <Button 
                        type="button"
                        variant="ghost" 
                        size="icon"
                        className="rounded-full text-gray-500"
                      >
                        <Paperclip className="h-5 w-5" />
                      </Button>
                      <Textarea 
                        placeholder="Type your message..." 
                        className="flex-1 min-h-10 py-2"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                      />
                      <Button 
                        type="submit"
                        className="bg-[#0A2463]"
                        disabled={!messageInput.trim()}
                      >
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                  <Users className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-[#0A2463] mb-2">No conversation selected</h3>
                  <p className="text-gray-500 mb-6 max-w-md">
                    Select a conversation from the sidebar or start a new message to connect with alumni and mentors.
                  </p>
                  <Button className="bg-[#0A2463]">
                    <Plus className="mr-2 h-4 w-4" />
                    Start New Conversation
                  </Button>
                </div>
              )}
            </div>
          </div>
          
          {/* Pagination - for larger screens with many conversations */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="h-8 w-8 text-[#0A2463]">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-[#0A2463] bg-gray-100">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-[#0A2463]">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8 text-[#0A2463]">
                3
              </Button>
              <Button variant="outline" size="icon" className="h-8 w-8 text-[#0A2463]">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Messages;
