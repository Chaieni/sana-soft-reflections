
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Mic } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-[#E6D5E6] to-[#F9E3DD] flex flex-col items-center justify-between px-6 py-12">
      <div className="w-full flex justify-between">
        <Button variant="ghost" className="bg-white/30 backdrop-blur-md text-white py-2 px-6 rounded-full text-sm shadow-lg">
          Help with job
        </Button>
        <Button variant="ghost" className="bg-white/30 backdrop-blur-md text-white py-2 px-6 rounded-full text-sm shadow-lg">
          Breathing exercise
        </Button>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-8">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-full"></div>
          <div className="absolute inset-2 bg-white/30 backdrop-blur-md rounded-full"></div>
          <div className="absolute inset-4 bg-white/40 backdrop-blur-md rounded-full"></div>
          <div className="absolute inset-6 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center">
            <img src="/lovable-uploads/b89c8631-d285-4346-b515-6f58b746f7cf.png" alt="MySana" className="w-16 h-16" />
          </div>
        </div>
        <h1 className="text-[#221F26] text-3xl font-medium mb-4 text-center leading-tight drop-shadow-sm">
          Welcome to MySana<br/>Your wellness companion
        </h1>
        <p className="text-[#403E43] text-center mb-8 font-medium">
          I'm here to support your emotional wellbeing
        </p>
        <Button
          onClick={() => navigate('/home')}
          className="bg-white/30 backdrop-blur-md text-[#221F26] font-medium px-8 py-3 rounded-full text-lg shadow-lg"
        >
          Get Started
        </Button>
      </div>
      
      {/* Voice trigger button */}
      <div 
        onClick={() => navigate('/chat')}
        className="fixed bottom-24 right-6 w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg z-50 animate-pulse"
      >
        <Mic size={24} className="text-white" />
      </div>
    </div>
  );
};

export default Welcome;
