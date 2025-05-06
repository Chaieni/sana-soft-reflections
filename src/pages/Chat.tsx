
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ChatMessage from '@/components/ChatMessage';
import NavigationBar from '@/components/NavigationBar';
import { Mic, Plus } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { content: "Hi Emma! How are you feeling today?", isUser: false, timestamp: "10:03 AM" },
    { content: "I'm feeling a bit anxious about my presentation tomorrow.", isUser: true, timestamp: "10:04 AM" },
    { content: "It's completely normal to feel anxious before a presentation. Would you like to talk about what's worrying you the most?", isUser: false, timestamp: "10:04 AM" },
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;
    
    // Add user message
    setMessages((prev) => [
      ...prev,
      { 
        content: inputMessage, 
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }
    ]);
    
    setInputMessage('');
    
    // Simulate MySana response after a short delay
    setTimeout(() => {
      const botResponses = [
        "That makes perfect sense. How did that make you feel?",
        "I understand. Would it help to explore that a bit more?",
        "Thanks for sharing that with me. Is there anything specific you'd like guidance with?",
        "I'm here to listen whenever you need. Would you like to try a quick breathing exercise?",
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      setMessages((prev) => [
        ...prev,
        { 
          content: randomResponse, 
          isUser: false,
          timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
        }
      ]);
    }, 1000);
  };
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-mysana-softGray/20 pb-28">
      <div className="pt-8 px-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-medium">MySana</h1>
          <div className="glass-card px-3 py-1 rounded-full text-xs text-gray-500">
            Always here for you
          </div>
        </div>
        
        <div className="mb-4 glass-card p-4 rounded-2xl">
          <p className="text-sm text-gray-500">
            I'm here to listen and support you. Feel free to share what's on your mind.
          </p>
        </div>
        
        <div className="space-y-2 mb-6">
          {messages.map((msg, index) => (
            <ChatMessage 
              key={index}
              message={msg.content}
              isUser={msg.isUser}
              timestamp={msg.timestamp}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <div className="fixed bottom-20 left-0 right-0 px-5 pb-4 bg-gradient-to-t from-white via-white to-transparent pt-10">
        <div className="flex items-center space-x-3">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-10 w-10 flex-shrink-0 border-gray-200"
          >
            <Plus size={20} className="text-gray-500" />
          </Button>
          
          <div className="flex-1 flex items-center bg-white rounded-full border border-gray-200 shadow-sm px-4 py-2">
            <Input 
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Message MySana..."
              className="border-0 focus-visible:ring-0 p-0 shadow-none text-sm flex-1"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full text-gray-500 hover:text-primary hover:bg-transparent"
            >
              <Mic size={18} />
            </Button>
          </div>
          
          <Button 
            onClick={handleSendMessage}
            className="rounded-full h-10 w-10 flex-shrink-0 bg-mysana-lavender hover:bg-mysana-lavender/90 text-gray-700"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>
      </div>
      
      <NavigationBar activeScreen="chat" />
    </div>
  );
};

export default Chat;
