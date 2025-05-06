
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
  colorClass = 'bg-white/30',
  onToggle
}) => {
  return (
    <div 
      className={cn(
        "flex items-center gap-4 p-4 rounded-2xl transition-all",
        "bg-white/30 backdrop-blur-md border border-white/20 shadow-lg",
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
          "font-medium text-white",
          completed && "line-through text-white/50"
        )}>
          {title}
        </h3>
        <p className="text-sm text-white/70">{description}</p>
      </div>
      
      <button
        onClick={onToggle}
        className={cn(
          "w-6 h-6 rounded-full border transition-all flex items-center justify-center",
          completed 
            ? "bg-white/50 border-white/50" 
            : "border-white/50"
        )}
      >
        {completed && <Check size={14} className="text-white" />}
      </button>
    </div>
  );
};

export default RoutineItem;
