
import React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface RoutineItemProps {
  icon: string;
  title: string;
  description: string;
  completed?: boolean;
  colorClass?: string;
  onToggle?: () => void;
}

const RoutineItem: React.FC<RoutineItemProps> = ({
  icon,
  title,
  description,
  completed = false,
  colorClass = 'bg-mysana-lavender',
  onToggle
}) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl transition-all",
        "glass-card",
        completed && "opacity-70"
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center text-xl",
        colorClass
      )}>
        {icon}
      </div>
      
      <div className="flex-1">
        <h3 className={cn(
          "font-medium",
          completed && "line-through text-gray-400"
        )}>
          {title}
        </h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      
      <button
        onClick={onToggle}
        className={cn(
          "w-6 h-6 rounded-full border transition-all flex items-center justify-center",
          completed 
            ? "bg-mysana-mint border-mysana-mint" 
            : "border-gray-300"
        )}
      >
        {completed && <Check size={14} className="text-white" />}
      </button>
    </div>
  );
};

export default RoutineItem;
