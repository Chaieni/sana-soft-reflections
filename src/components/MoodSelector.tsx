
import React from 'react';
import { cn } from '@/lib/utils';

type Mood = {
  emoji: string;
  label: string;
  color: string;
  glowColor: string;
};

const moods: Mood[] = [
  { emoji: '😊', label: 'Happy', color: 'bg-white/40', glowColor: 'bg-white/20' },
  { emoji: '😌', label: 'Calm', color: 'bg-white/40', glowColor: 'bg-white/20' },
  { emoji: '😐', label: 'Neutral', color: 'bg-white/40', glowColor: 'bg-white/20' },
  { emoji: '😕', label: 'Anxious', color: 'bg-white/40', glowColor: 'bg-white/20' },
  { emoji: '😢', label: 'Sad', color: 'bg-white/40', glowColor: 'bg-white/20' },
];

interface MoodSelectorProps {
  onMoodSelect?: (mood: Mood) => void;
  selectedMood?: string;
}

const MoodSelector: React.FC<MoodSelectorProps> = ({ onMoodSelect, selectedMood }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full">
      {moods.map((mood) => (
        <div
          key={mood.label}
          onClick={() => onMoodSelect?.(mood)}
          className={cn(
            "flex flex-col items-center transition-all duration-300 cursor-pointer",
            "transform hover:scale-110"
          )}
        >
          <div 
            className={cn(
              "w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-md backdrop-blur-md",
              "relative",
              mood.color,
              selectedMood === mood.label && "ring-4 ring-white/50"
            )}
          >
            <div className="absolute inset-0 rounded-full blur-md opacity-50 bg-white/10"></div>
            <span className="z-10">{mood.emoji}</span>
          </div>
          <span className="mt-2 text-sm font-medium text-[#3E3F44]">{mood.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MoodSelector;
