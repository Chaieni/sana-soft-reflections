
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import MoodSelector from '@/components/MoodSelector';
import NavigationBar from '@/components/NavigationBar';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, CalendarDays, Book } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [selectedMood, setSelectedMood] = useState('');
  
  // Current time-based greeting
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };
  
  // Random daily quote
  const dailyQuote = {
    text: "The quieter you become, the more you can hear.",
    author: "Ram Dass"
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E9D8E9] to-[#F9E3DD] pb-24">
      <div className="pt-12 px-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b89c8631-d285-4346-b515-6f58b746f7cf.png" 
              alt="MySana" 
              className="w-10 h-10 mr-3" 
            />
            <h1 className="text-2xl font-medium text-[#3E3F44]">Your Space</h1>
          </div>
        </div>
        
        <div className="bg-white/30 backdrop-blur-md p-5 rounded-2xl border border-white/20 shadow-lg mb-8">
          <h2 className="text-xl font-medium mb-2 text-[#3E3F44]">✨ {getGreeting()}, Emma</h2>
          <p className="text-[#3E3F44]/90">I'm here to support you today. Whatever you're feeling is welcome here.</p>
        </div>
        
        <p className="text-[#3E3F44] font-medium mb-3 text-center">How are you feeling right now? <span className="text-sm">(It's okay to be honest)</span></p>
        
        <div className="mt-4">
          <MoodSelector 
            selectedMood={selectedMood}
            onMoodSelect={(mood) => setSelectedMood(mood.label)}
          />
        </div>
        
        <div className="mt-8 bg-white/40 backdrop-blur-md rounded-3xl p-6 border border-white/30 shadow-lg">
          <p className="text-sm text-[#3E3F44]/80 mb-2 font-medium">🌱 Your Daily Inspiration</p>
          <p className="text-[#3E3F44] mb-3 italic text-lg">"{dailyQuote.text}"</p>
          <p className="text-right text-sm text-[#3E3F44]/70">— {dailyQuote.author}</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <Button 
            onClick={() => navigate('/chat')}
            className="w-full bg-white/40 hover:bg-white/50 backdrop-blur-md text-[#3E3F44] rounded-xl h-16 text-lg font-medium shadow-lg border border-white/30"
          >
            <MessageCircle className="mr-2" size={22} />
            Chat with MySana
          </Button>
          
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => navigate('/routines')}
              variant="outline" 
              className="bg-white/30 hover:bg-white/40 backdrop-blur-md text-[#3E3F44] rounded-xl h-16 text-base font-medium border-white/30 shadow-lg flex flex-col items-center justify-center"
            >
              <CalendarDays size={20} className="mb-1" />
              <span>My Routines</span>
            </Button>
            
            <Button 
              onClick={() => navigate('/journal')}
              variant="outline" 
              className="bg-white/30 hover:bg-white/40 backdrop-blur-md text-[#3E3F44] rounded-xl h-16 text-base font-medium border-white/30 shadow-lg flex flex-col items-center justify-center"
            >
              <Book size={20} className="mb-1" />
              <span>My Journal</span>
            </Button>
          </div>
        </div>
      </div>
      
      <NavigationBar activeScreen="home" />
    </div>
  );
};

export default Home;
