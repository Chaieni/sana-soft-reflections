
import React from 'react';
import { cn } from '@/lib/utils';

interface GlowingIconProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  glowColor?: string;
  children?: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const GlowingIcon: React.FC<GlowingIconProps> = ({
  size = 'md',
  color = 'bg-mysana-lavender',
  glowColor = 'bg-mysana-lavender/30',
  children,
  className,
  animate = false
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20', 
    lg: 'w-28 h-28'
  };

  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <div 
        className={cn(
          "absolute inset-0 rounded-full blur-xl",
          animate && "animate-pulse-gentle",
          glowColor
        )}
      ></div>
      <div 
        className={cn(
          "relative z-10 flex items-center justify-center text-2xl rounded-full",
          sizeClasses[size],
          color,
          animate && "animate-float"
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default GlowingIcon;
