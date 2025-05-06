
import React from 'react';
import { cn } from '@/lib/utils';

interface JournalEntryProps {
  date: string;
  mood: string;
  moodEmoji: string;
  title: string;
  content: string;
  colorClass?: string;
}

const JournalEntry: React.FC<JournalEntryProps> = ({
  date,
  mood,
  moodEmoji,
  title,
  content,
  colorClass = 'bg-mysana-lavender'
}) => {
  return (
    <div className="glass-card p-5 mb-6 relative">
      <div className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-sm" style={{ backgroundColor: colorClass }}>
        {moodEmoji}
      </div>
      
      <div className="mb-4">
        <p className="text-xs text-gray-400 mb-1">{date}</p>
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-sm text-gray-500">{mood}</p>
      </div>
      
      <p className="text-gray-700 text-sm">
        {content}
      </p>
    </div>
  );
};

export default JournalEntry;
