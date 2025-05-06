
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
        <div className="w-8 h-8 rounded-full bg-mysana-lavender flex items-center justify-center mr-2 flex-shrink-0">
          <span className="text-white text-xs font-medium">M</span>
        </div>
      )}
      
      <div
        className={cn(
          "p-3 max-w-[75%] shadow-sm",
          isUser 
            ? "bg-mysana-lavender rounded-2xl rounded-tr-none text-white" 
            : "bg-white rounded-2xl rounded-tl-none text-gray-800"
        )}
      >
        <p className={isUser ? "text-white" : "text-gray-800"}>{message}</p>
        {timestamp && (
          <span className={cn(
            "text-xs mt-1 block",
            isUser ? "text-white text-opacity-70" : "text-gray-400"
          )}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
