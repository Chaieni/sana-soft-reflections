
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import MoodSelector from '@/components/MoodSelector';
import NavigationBar from '@/components/NavigationBar';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-gradient-to-br from-white to-mysana-softGray/20 pb-20">
      <div className="pt-12 px-6">
        <h1 className="text-2xl font-medium mb-1">{getGreeting()}, Emma</h1>
        <p className="text-gray-500">How are you feeling today?</p>
        
        <div className="mt-8">
          <MoodSelector 
            selectedMood={selectedMood}
            onMoodSelect={(mood) => setSelectedMood(mood.label)}
          />
        </div>
        
        <div className="mt-8 glass-card p-6">
          <p className="text-sm text-gray-400 mb-2">Daily Insight</p>
          <p className="text-gray-700 mb-2 italic">"{dailyQuote.text}"</p>
          <p className="text-right text-sm text-gray-500">— {dailyQuote.author}</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <Button 
            onClick={() => navigate('/chat')}
            className="w-full bg-mysana-peach hover:bg-mysana-peach/90 text-gray-800 rounded-xl h-16 text-lg font-normal"
          >
            Talk with MySana
          </Button>
          
          <div className="grid grid-cols-2 gap-4">
            <Button 
              onClick={() => navigate('/routines')}
              variant="outline" 
              className="bg-white hover:bg-gray-50 text-gray-800 rounded-xl h-16 text-base font-normal border-gray-100"
            >
              My Routines
            </Button>
            
            <Button 
              onClick={() => navigate('/journal')}
              variant="outline" 
              className="bg-white hover:bg-gray-50 text-gray-800 rounded-xl h-16 text-base font-normal border-gray-100"
            >
              Reflection Journal
            </Button>
          </div>
        </div>
      </div>
      
      <NavigationBar activeScreen="home" />
    </div>
  );
};

export default Home;
