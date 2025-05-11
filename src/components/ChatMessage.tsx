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
        <div className="w-8 h-8 rounded-full bg-white/50 backdrop-blur-md flex items-center justify-center mr-2 flex-shrink-0 border border-white/30">
          <img 
            src="/lovable-uploads/b89c8631-d285-4346-b515-6f58b746f7cf.png" 
            alt="MySana" 
            className="w-5 h-5"
          />
        </div>
      )}
      
      <div
        className={cn(
          "p-3 max-w-[75%] shadow-sm backdrop-blur-md rounded-2xl border",
          isUser 
            ? "bg-[#E6D5E6]/80 rounded-tr-none border-[#E6D5E6]/30" 
            : "bg-[#F9E3DD]/80 rounded-tl-none border-[#F9E3DD]/30"
        )}
      >
        <p className="text-[#221F26] font-medium">{message}</p>
        {timestamp && (
          <span className={cn(
            "text-xs mt-1 block text-[#221F26]/70"
          )}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
