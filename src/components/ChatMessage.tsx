
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
        "flex mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "bg-mysana-peach rounded-tr-none"
            : "bg-white rounded-tl-none border border-mysana-softGray/30"
        )}
      >
        <p className="text-gray-800">{message}</p>
        {timestamp && (
          <p className={cn(
            "text-xs mt-1",
            isUser ? "text-gray-600" : "text-gray-400"
          )}>
            {timestamp}
          </p>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
