
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
          <img 
            src="/lovable-uploads/b89c8631-d285-4346-b515-6f58b746f7cf.png" 
            alt="MySana" 
            className="w-5 h-5"
          />
        </div>
      )}
      
      <div
        className={cn(
          "p-3 max-w-[75%] shadow-sm",
          isUser 
            ? "bg-white/30 backdrop-blur-md rounded-2xl rounded-tr-none text-[#3E3F44] border border-white/20" 
            : "bg-white/30 backdrop-blur-md rounded-2xl rounded-tl-none text-[#3E3F44] border border-white/20"
        )}
      >
        <p className="text-[#3E3F44] font-medium text-shadow-sm">{message}</p>
        {timestamp && (
          <span className={cn(
            "text-xs mt-1 block",
            isUser ? "text-[#3E3F44] text-opacity-80" : "text-[#3E3F44] text-opacity-80"
          )}>
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
