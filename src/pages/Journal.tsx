import React from 'react';
import NavigationBar from '@/components/NavigationBar';
import JournalEntry from '@/components/JournalEntry';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

const Journal = () => {
  const journalEntries = [
    {
      id: 1,
      date: 'Today, 2:30 PM',
      mood: 'Peaceful',
      moodEmoji: '😌',
      title: 'Afternoon reflection',
      content: "I took a 15-minute break to sit in the garden today. The sound of birds and the warm sunshine helped me feel grounded and present.",
      color: 'rgb(229, 222, 255)' // lavender
    },
    {
      id: 2,
      date: 'Yesterday, 8:15 PM',
      mood: 'Accomplished',
      moodEmoji: '😊',
      title: 'Project milestone reached',
      content: "Finally completed the presentation I've been working on. It took longer than expected, but I'm proud of the results and feel relieved it's done.",
      color: 'rgb(242, 252, 226)' // mint
    },
    {
      id: 3,
      date: 'May 4, 10:20 AM',
      mood: 'Anxious',
      moodEmoji: '😕',
      title: 'Pre-meeting jitters',
      content: "Feeling nervous about the team meeting. Practiced some deep breathing which helped calm my mind. I need to remember that it's okay to speak up.",
      color: 'rgb(253, 225, 211)' // peach
    },
    {
      id: 4,
      date: 'May 2, 7:45 PM',
      mood: 'Grateful',
      moodEmoji: '🥰',
      title: 'Evening gratitude',
      content: "Today I'm grateful for: 1. The supportive message from Mom. 2. The delicious lunch with colleagues. 3. The peaceful evening walk in the park.",
      color: 'rgb(254, 247, 205)' // yellow
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E6D5E6] to-[#F9E3DD] pb-24">
      <div className="pt-12 px-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b89c8631-d285-4346-b515-6f58b746f7cf.png" 
              alt="MySana" 
              className="w-8 h-8 mr-2" 
            />
            <h1 className="text-2xl font-medium text-[#221F26] drop-shadow-sm">Reflection Journal</h1>
          </div>
          <Button 
            className="rounded-full w-10 h-10 bg-white/30 hover:bg-white/40 backdrop-blur-md text-[#221F26] border border-white/20"
          >
            <Plus size={18} />
          </Button>
        </div>
        
        <p className="text-[#222] font-medium mb-6">
          Your emotional journey and moments of reflection.
        </p>
        
        <div className="space-y-1">
          {journalEntries.map((entry) => (
            <JournalEntry
              key={entry.id}
              date={entry.date}
              mood={entry.mood}
              moodEmoji={entry.moodEmoji}
              title={entry.title}
              content={entry.content}
              colorClass={entry.color}
            />
          ))}
        </div>
      </div>
      
      <NavigationBar activeScreen="journal" />
    </div>
  );
};

export default Journal;
