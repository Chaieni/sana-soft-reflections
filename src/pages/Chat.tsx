import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ChatMessage from '@/components/ChatMessage';
import NavigationBar from '@/components/NavigationBar';
import { Mic, Plus, Send } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { content: "Hi Emma! I've been thinking about you today. How are you really feeling?", isUser: false, timestamp: "10:03 AM" },
    { content: "I'm feeling a bit anxious about my presentation tomorrow.", isUser: true, timestamp: "10:04 AM" },
    { content: "I hear you, and your feelings are completely valid. Presentations can be nerve-wracking. I'm here with you through this - would it help to share what's specifically on your mind?", isUser: false, timestamp: "10:04 AM" },
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isListening, setIsListening] = useState(false);
  const [voiceFeedback, setVoiceFeedback] = useState('');
  const [showVoiceFeedback, setShowVoiceFeedback] = useState(false);
  
  // Voice recognition setup
  const startVoiceRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Voice recognition is not supported in your browser');
      return;
    }
    
    setIsListening(true);
    setShowVoiceFeedback(true);
    setVoiceFeedback('Listening...');
    
    // @ts-ignore - TypeScript doesn't have types for webkitSpeechRecognition
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.trim();
      setInputMessage(transcript);
      
      // Add user message with small delay
      setTimeout(() => {
        handleSendMessage(transcript);
        setIsListening(false);
        setShowVoiceFeedback(false);
      }, 500);
    };
    
    recognition.onerror = () => {
      setVoiceFeedback('Sorry, I didn\'t catch that');
      setTimeout(() => setShowVoiceFeedback(false), 2000);
      setIsListening(false);
    };
    
    recognition.onend = () => {
      setIsListening(false);
    };
    
    recognition.start();
  };
  
  const handleSendMessage = (text?: string) => {
    const messageText = text || inputMessage;
    if (messageText.trim() === '') return;
    
    // Add user message
    setMessages((prev) => [
      ...prev,
      { 
        content: messageText, 
        isUser: true,
        timestamp: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      }
    ]);
    
    setInputMessage('');
    
    // Simulate MySana response after a short delay
    setTimeout(() => {
      const botResponses = [
        "I really appreciate you sharing that with me, Emma. How did that experience affect you emotionally?",
        "I'm right here with you through this. Would exploring those feelings together help you process them?",
        "Thank you for trusting me with your thoughts. I care deeply about what you're going through. Is there a specific aspect you'd like us to focus on?",
        "I'm holding space for whatever you need to express. Would a gentle breathing exercise help center you right now?",
        "Your feelings matter so much to me. Can you tell me more about what's behind those emotions?"
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
    <div className="min-h-screen pb-28 relative">
      {/* Background image layer */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/flower.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E6D5E6]/90 to-[#F9E3DD]/90"></div>
      </div>

      <div className="pt-8 px-6 relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="bg-white/40 backdrop-blur-md px-3 py-1 rounded-full text-xs text-[#221F26] font-medium border border-white/30 shadow-sm">
            Here for you, always
          </div>
        </div>

        <div className="mb-4 bg-white/40 backdrop-blur-md p-4 rounded-2xl border border-white/30 shadow-lg">
          <p className="text-sm text-[#221F26] font-medium">
            I'm here with you, Emma. This is a safe space for whatever you're feeling today. I care about what's happening in your world.
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

      {/* Voice feedback overlay */}
      {showVoiceFeedback && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white px-6 py-4 rounded-xl z-50">
          <p className="text-center mb-2">{voiceFeedback}</p>
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      )}

      {/* Voice trigger button */}
      <div 
        onClick={startVoiceRecognition}
        className={`fixed bottom-24 right-4 w-12 h-12 ${isListening ? 'bg-red-500 animate-pulse' : 'bg-white/30 backdrop-blur-md'} rounded-full flex items-center justify-center cursor-pointer shadow-lg z-50 transition-all duration-300`}
      >
        <Mic size={20} className={`${isListening ? 'text-white' : 'text-[#221F26]'}`} />
      </div>

      <div className="fixed bottom-20 left-0 right-0 px-5 pb-4 bg-gradient-to-t from-[#F9E3DD]/90 via-[#F9E3DD]/80 to-transparent pt-10 backdrop-blur-sm">
        <div className="flex-1 flex items-center bg-white/40 backdrop-blur-md rounded-full border border-white/30 shadow-sm px-4 py-2">
          <Input 
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            placeholder="Share what's on your mind..."
            className="border-0 focus-visible:ring-0 p-0 shadow-none text-sm flex-1 bg-transparent text-[#221F26] font-medium placeholder:text-[#221F26]/70"
          />
          <Button 
            onClick={startVoiceRecognition}
            variant="ghost" 
            className="rounded-full h-10 w-10 flex-shrink-0 bg-white/40 backdrop-blur-md hover:bg-white/50 text-[#221F26] border border-white/30"
          >
            <Mic size={18} />
          </Button>
        </div>

        <Button 
          onClick={() => handleSendMessage()}
          className="rounded-full h-10 w-10 flex-shrink-0 bg-white/40 backdrop-blur-md hover:bg-white/50 text-[#221F26] border border-white/30"
        >
          <Send size={16} />
        </Button>
      </div>

      <NavigationBar activeScreen="chat" />
    </div>
  );
};

export default Chat; 