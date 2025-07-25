
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
    <div className="min-h-screen bg-gradient-to-b from-[#E6D5E6] to-[#F9E3DD] pb-24">
      <div className="pt-12 px-6">
        <h1 className="text-2xl font-medium mb-1 text-[#3E3F44]">{getGreeting()}, Emma</h1>
        <p className="text-[#3E3F44]/80">How are you feeling today?</p>
        
        <div className="mt-8">
          <MoodSelector 
            selectedMood={selectedMood}
            onMoodSelect={(mood) => setSelectedMood(mood.label)}
          />
        </div>
        
        <div className="mt-8 bg-white/30 backdrop-blur-md rounded-3xl p-6 border border-white/20 shadow-lg">
          <p className="text-sm text-[#3E3F44]/70 mb-2">Daily Insight</p>
          <p className="text-[#3E3F44] mb-2 italic">"{dailyQuote.text}"</p>
          <p className="text-right text-sm text-[#3E3F44]/70">— {dailyQuote.author}</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <Button 
            onClick={() => navigate('/chat')}
            className="w-full bg-white/30 hover:bg-white/40 backdrop-blur-md text-[#3E3F44] rounded-xl h-16 text-lg font-normal shadow-lg border border-white/20"
          >
            <MessageCircle className="mr-2" size={20} />
            Talk with MySana
          </Button>
          
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => navigate('/routines')}
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#3E3F44] rounded-xl h-16 text-base font-normal border-white/20 shadow-lg flex flex-col items-center justify-center"
            >
              <CalendarDays size={20} className="mb-1" />
              <span>My Routines</span>
            </Button>
            
            <Button 
              onClick={() => navigate('/journal')}
              variant="outline" 
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#3E3F44] rounded-xl h-16 text-base font-normal border-white/20 shadow-lg flex flex-col items-center justify-center"
            >
              <Book size={20} className="mb-1" />
              <span>Journal</span>
            </Button>
          </div>
        </div>
      </div>
      
      <NavigationBar activeScreen="home" />
    </div>
  );
};

export default Home;
