
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Home, LayoutGrid, MessageCircle, User, Mic, X } from 'lucide-react';

const Welcome = () => {
  const navigate = useNavigate();
  
  return (
    <div className="h-full min-h-screen w-full bg-gradient-to-b from-[#f3d1d1] via-[#e5d4ef] to-[#fddbcf] flex flex-col items-center px-6 py-12">
      {/* Quick action buttons */}
      <div className="w-full flex justify-between mb-8">
        <Button variant="ghost" className="bg-white/30 backdrop-blur-md text-[#3E3F44] py-2 px-6 rounded-full text-sm shadow-lg flex items-center gap-2">
          Help with job
          <X size={16} />
        </Button>
        <Button variant="ghost" className="bg-white/30 backdrop-blur-md text-[#3E3F44] py-2 px-6 rounded-full text-sm shadow-lg flex items-center gap-2">
          Breathing exercise
          <X size={16} />
        </Button>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col items-center text-center max-w-md mx-auto">
        <h2 className="text-[#3E3F44] text-xl mt-4 mb-1">Hi, Jess</h2>
        <h1 className="text-[#3E3F44] text-2xl font-medium mb-8">A Gentle Connection to Your Inner World</h1>
        
        {/* Flower Image */}
        <div className="relative w-64 h-64 mb-8">
          <img 
            src="/lovable-uploads/2c3129cc-39db-4ed1-872b-b9f58e12264d.png" 
            alt="Sanv" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Message */}
        <div className="text-center mb-10">
          <p className="text-[#3E3F44] text-xl font-medium leading-relaxed">
            Let's celebrate the small wins.
            <br />
            Want to check your job search progress?
          </p>
        </div>

        {/* Call to action button */}
        <Button 
          onClick={() => navigate('/home')}
          className="mt-8 bg-white/40 hover:bg-white/50 backdrop-blur-md text-[#3E3F44] py-6 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
        >
          Start My Journey
        </Button>
      </div>
      
      {/* Voice trigger button */}
      <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg z-50">
        <Mic size={24} className="text-[#3E3F44]" />
      </div>
      
      {/* Navigation bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#2C2C2E]/70 backdrop-blur-md h-20 flex justify-around items-center px-12">
        <button className="text-[#F9E3DD] flex flex-col items-center">
          <Home size={24} />
        </button>
        <button className="text-[#F9E3DD] flex flex-col items-center">
          <LayoutGrid size={24} />
        </button>
        <div className="w-12"></div> {/* Spacer for mic button */}
        <button className="text-[#F9E3DD] flex flex-col items-center">
          <MessageCircle size={24} />
        </button>
        <button className="text-[#F9E3DD] flex flex-col items-center">
          <User size={24} />
        </button>
      </div>
    </div>
  );
};

export default Welcome;
