
import React from 'react';
import { cn } from '@/lib/utils';
import { Home, MessageCircle, Calendar, Book } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavigationBarProps {
  activeScreen: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeScreen }) => {
  const navItems = [
    { icon: <Home size={24} />, label: 'Home', path: '/home' },
    { icon: <MessageCircle size={24} />, label: 'Chat', path: '/chat' },
    { icon: <Calendar size={24} />, label: 'Routines', path: '/routines' },
    { icon: <Book size={24} />, label: 'Journal', path: '/journal' },
  ];

  return (
    <nav aria-label="Main Navigation" className="fixed bottom-0 left-0 right-0 bg-[#F1F0FB]/90 backdrop-blur-md border-t border-[#E5E5E6] soft-shadow rounded-t-3xl">
      <div className="flex justify-around items-center py-3 px-6">
        {navItems.map((item) => {
          const isActive = activeScreen === item.label.toLowerCase();
          return (
            <Link
              key={item.label}
              to={item.path}
              aria-current={isActive ? "page" : undefined}
              aria-label={`${item.label} page`}
              className={cn(
                "flex flex-col items-center min-w-[44px] min-h-[44px] p-2 transition-all",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-md",
                isActive
                  ? "text-primary"
                  : "text-[#3E3F44] hover:text-[#3E3F44]/90"
              )}
            >
              <div className="mb-1" aria-hidden="true">{item.icon}</div>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavigationBar;
