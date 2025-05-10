import React, { useState } from 'react';
import NavigationBar from '@/components/NavigationBar';
import RoutineItem from '@/components/RoutineItem';

const Routines = () => {
  const [routines, setRoutines] = useState([
    { id: 1, icon: '💧', title: 'Drink water', description: 'Stay hydrated throughout the day', completed: false, color: 'bg-white/30' },
    { id: 2, icon: '🧘‍♀️', title: 'Mindful breathing', description: '5 minutes of focused breathing', completed: true, color: 'bg-white/30' },
    { id: 3, icon: '🌿', title: 'Go for a walk', description: 'Enjoy nature for 15 minutes', completed: false, color: 'bg-white/30' },
    { id: 4, icon: '✍️', title: 'Journal', description: 'Write down today\'s thoughts', completed: false, color: 'bg-white/30' },
    { id: 5, icon: '🌙', title: 'Evening reflection', description: 'Reflect on 3 good things', completed: false, color: 'bg-white/30' },
  ]);
  
  const toggleRoutine = (id: number) => {
    setRoutines(routines.map(routine => 
      routine.id === id ? { ...routine, completed: !routine.completed } : routine
    ));
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6D5E6] to-[#F9E3DD] pb-20">
      <div className="pt-12 px-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium text-[#3E3F44]">Your Routines</h1>
          <div className="bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#3E3F44] border border-white/20">
            {new Date().toLocaleDateString('en-US', { weekday: 'long' })}
          </div>
        </div>
        
        <p className="text-[#3E3F44]/80 mb-6">
          Gentle reminders to support your wellbeing today.
        </p>
        
        <div className="space-y-4 mb-6">
          {routines.map((routine) => (
            <RoutineItem
              key={routine.id}
              icon={routine.icon}
              title={routine.title}
              description={routine.description}
              completed={routine.completed}
              colorClass={routine.color}
              onToggle={() => toggleRoutine(routine.id)}
            />
          ))}
        </div>
        
        <div className="bg-white/30 backdrop-blur-md p-4 rounded-2xl mt-8 border border-white/20">
          <p className="text-center text-sm text-[#3E3F44]/80">
            "Small habits compound into remarkable results."
          </p>
        </div>
      </div>
      
      <NavigationBar activeScreen="routines" />
    </div>
  );
};

export default Routines;
