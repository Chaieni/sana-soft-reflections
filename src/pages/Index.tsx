import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '@/components/NavigationBar';
import { MessageCircle, CalendarDays, Book, ArrowRight, Heart, Brain, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5DEFF] via-[#F9E3DD] to-[#E6D5E6] pb-24">
      {/* Header Section */}
      <header className="pt-8 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3E3F44]">Sana</h1>
          <p className="text-sm text-[#3E3F44]/70">Soft Reflections</p>
        </div>
        <Button 
          onClick={() => navigate('/home')}
          variant="ghost" 
          className="bg-white/30 backdrop-blur-md hover:bg-white/40 text-[#3E3F44] rounded-full px-5 shadow-sm"
        >
          Sign In
        </Button>
      </header>

      {/* Hero Section */}
      <section className="px-6 mt-12 md:mt-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-4 text-[#3E3F44] leading-tight">
            A Gentle Connection to Your Inner World
          </h2>
          <p className="text-lg text-[#3E3F44]/80 mb-8 max-w-lg mx-auto">
            Navigate your emotional journey with mindfulness, reflection, and personalized support.
          </p>
          
          <div className="relative w-64 h-64 mx-auto my-8 animate-float">
            <img 
              src="/lovable-uploads/09513a48-2ea8-4dd8-9932-e8927a3eb98a.png" 
              alt="Sana" 
              className="w-full h-full object-contain"
            />
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <Button 
              onClick={() => navigate('/home')}
              className="bg-white/40 hover:bg-white/50 backdrop-blur-md text-[#3E3F44] py-6 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105 w-full md:w-auto"
            >
              Start My Journey
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              onClick={() => navigate('/chat')}
              variant="outline"
              className="bg-transparent hover:bg-white/20 backdrop-blur-md text-[#3E3F44] border-[#3E3F44]/30 py-6 px-8 rounded-full text-lg shadow-sm w-full md:w-auto"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 mt-16 md:mt-24">
        <h3 className="text-2xl font-medium text-center mb-8 text-[#3E3F44]">How Sana Helps You</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-white/30 backdrop-blur-md border-white/20 shadow-lg">
            <CardHeader>
              <Heart className="text-mysana-blush h-10 w-10 mb-2" />
              <CardTitle className="text-[#3E3F44] text-xl">Emotional Wellness</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#3E3F44]/70 text-base">
                Track your moods and emotional patterns to gain insights and improve well-being.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-white/30 backdrop-blur-md border-white/20 shadow-lg">
            <CardHeader>
              <Brain className="text-mysana-lavender h-10 w-10 mb-2" />
              <CardTitle className="text-[#3E3F44] text-xl">Mindful Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#3E3F44]/70 text-base">
                Journal your thoughts and experiences with guided prompts for deeper self-awareness.
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="bg-white/30 backdrop-blur-md border-white/20 shadow-lg">
            <CardHeader>
              <Sparkles className="text-mysana-softBlue h-10 w-10 mb-2" />
              <CardTitle className="text-[#3E3F44] text-xl">Personalized Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-[#3E3F44]/70 text-base">
                Discover tailored routines and exercises to support your unique wellness journey.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="px-6 mt-16 md:mt-24 mb-20">
        <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto border border-white/20 shadow-lg text-center">
          <h3 className="text-2xl font-medium mb-4 text-[#3E3F44]">Begin Your Reflection Journey Today</h3>
          <p className="text-[#3E3F44]/80 mb-8">
            Connect with yourself in a meaningful way and cultivate a more mindful, balanced life.
          </p>
          <Button 
            onClick={() => navigate('/home')}
            className="bg-[#3E3F44] hover:bg-[#3E3F44]/90 text-white py-6 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
          >
            Start Free
          </Button>
        </div>
      </section>

      {/* Navigation Bar */}
      <NavigationBar activeScreen="" />
    </div>
  );
};

export default Index;
