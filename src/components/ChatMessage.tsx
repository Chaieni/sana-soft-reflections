
import React from 'react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, timestamp }) => {
  return (
    <div
      className={cn(
        "flex items-start",
        isUser && "justify-end"
      )}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center mr-2 flex-shrink-0">
          <span className="text-white text-xs font-medium">M</span>
        </div>
      )}
      
      <div
        className={cn(
          "p-3 max-w-[75%] shadow-sm",
          isUser 
            ? "bg-white/30 backdrop-blur-md rounded-2xl rounded-tr-none text-white border border-white/20" 
            : "bg-white/30 backdrop-blur-md rounded-2xl rounded-tl-none text-white border border-white/20"
        )}
      >
        <p className="text-white">{message}</p>
        {timestamp && (
          <span className={cn(
            "text-xs mt-1 block",
            isUser ? "text-white text-opacity-70" : "text-white text-opacity-70"
          )}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
