
import React from 'react';
import { Button } from '@/components/ui/button';
import GlowingIcon from '@/components/GlowingIcon';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-white to-mysana-softGray/30">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <GlowingIcon 
          size="lg" 
          color="bg-mysana-lavender" 
          glowColor="bg-mysana-lavender/50"
          animate={true}
          className="mb-8"
        >
          <span className="text-4xl">🌸</span>
        </GlowingIcon>
        
        <h1 className="text-3xl font-medium mb-2">Welcome to MySana</h1>
        <p className="text-gray-600 mb-6">Your gentle companion for mindful wellbeing</p>
        
        <div className="glass-card p-6 mb-8 w-full">
          <p className="text-gray-700 leading-relaxed">
            MySana grows with you, learning your rhythms and offering support when you need it most. 
            Think of me as a friend who's always there to listen, remind, and reflect with you.
          </p>
        </div>
        
        <Button 
          onClick={() => navigate('/home')}
          className="bg-mysana-lavender hover:bg-mysana-lavender/90 text-gray-800 rounded-full px-8 py-6"
        >
          Get Started
        </Button>
        
        <p className="text-xs text-gray-400 mt-8">
          Daily moments of care lead to profound change
        </p>
      </div>
    </div>
  );
};

export default Welcome;
