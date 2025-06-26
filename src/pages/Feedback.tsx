
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send, CheckCircle } from 'lucide-react';

const Feedback = () => {
  const [formData, setFormData] = useState({
    type: 'Suggestion',
    subject: '',
    message: '',
    contactPreference: 'Yes'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1 pt-24 pb-12 flex items-center justify-center">
          <Card className="max-w-md mx-auto">
            <CardContent className="pt-6 text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-4">
                Your feedback has been submitted successfully. We appreciate your input and will review it soon.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                Submit Another Feedback
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <div className="mb-8 text-center">
            <h1 className="heading-lg text-gray-900 mb-2">Feedback & Suggestions</h1>
            <p className="text-gray-600">
              Help us improve the platform by sharing your thoughts and suggestions
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Submit Feedback
              </CardTitle>
              <CardDescription>
                Your feedback is valuable to us. Please share your thoughts, suggestions, or report any issues.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Feedback
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-naval-DEFAULT focus:border-transparent"
                  >
                    <option value="Suggestion">Suggestion</option>
                    <option value="Bug Report">Bug Report</option>
                    <option value="General Feedback">General Feedback</option>
                    <option value="Question">Question</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Brief summary of your feedback"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide detailed feedback..."
                    rows={6}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="contactPreference" className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Preference
                  </label>
                  <select
                    id="contactPreference"
                    name="contactPreference"
                    value={formData.contactPreference}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-naval-DEFAULT focus:border-transparent"
                  >
                    <option value="Yes">Yes, contact me by email</option>
                    <option value="No">No, anonymous feedback</option>
                  </select>
                </div>

                <Button type="submit" className="w-full bg-naval-DEFAULT hover:bg-naval-dark text-white">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Feedback
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Guidelines for Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Be specific and detailed in your feedback</li>
                  <li>• For bug reports, include steps to reproduce the issue</li>
                  <li>• Provide suggestions for improvement when possible</li>
                  <li>• Use respectful and constructive language</li>
                  <li>• Check if your issue hasn't been reported before</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Feedback;
