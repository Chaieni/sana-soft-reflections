
import React from 'react';
import { cn } from '@/lib/utils';

type Mood = {
  emoji: string;
  label: string;
  color: string;
  glowColor: string;
};

const moods: Mood[] = [
  { emoji: '😊', label: 'Happy', color: 'bg-mysana-yellow', glowColor: 'bg-mysana-yellow/60' },
  { emoji: '😌', label: 'Calm', color: 'bg-mysana-mint', glowColor: 'bg-mysana-mint/60' },
  { emoji: '😐', label: 'Neutral', color: 'bg-mysana-softGray', glowColor: 'bg-mysana-softGray/60' },
  { emoji: '😕', label: 'Anxious', color: 'bg-mysana-softBlue', glowColor: 'bg-mysana-softBlue/60' },
  { emoji: '😢', label: 'Sad', color: 'bg-mysana-lavender', glowColor: 'bg-mysana-lavender/60' },
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
              "w-16 h-16 flex items-center justify-center rounded-full text-3xl shadow-md",
              "relative",
              mood.color,
              selectedMood === mood.label && "ring-4 ring-white/50"
            )}
          >
            <div className="absolute inset-0 rounded-full blur-md opacity-50" style={{ backgroundColor: mood.color }}></div>
            <span className="z-10">{mood.emoji}</span>
          </div>
          <span className="mt-2 text-sm font-medium text-gray-600">{mood.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MoodSelector;
