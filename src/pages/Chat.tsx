
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ChatMessage from '@/components/ChatMessage';
import NavigationBar from '@/components/NavigationBar';
import { Mic, Plus, Send } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { content: "Hi Emma! How are you feeling today?", isUser: false, timestamp: "10:03 AM" },
    { content: "I'm feeling a bit anxious about my presentation tomorrow.", isUser: true, timestamp: "10:04 AM" },
    { content: "It's completely normal to feel anxious before a presentation. Would you like to talk about what's worrying you the most?", isUser: false, timestamp: "10:04 AM" },
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
        className={`fixed bottom-24 right-4 w-12 h-12 ${isListening ? 'bg-red-500 animate-pulse' : 'bg-mysana-lavender'} rounded-full flex items-center justify-center cursor-pointer shadow-lg z-50 transition-all duration-300`}
      >
        <Mic size={20} className="text-white" />
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
              onClick={startVoiceRecognition}
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-full text-gray-500 hover:text-primary hover:bg-transparent"
            >
              <Mic size={18} />
            </Button>
          </div>
          
          <Button 
            onClick={() => handleSendMessage()}
            className="rounded-full h-10 w-10 flex-shrink-0 bg-mysana-lavender hover:bg-mysana-lavender/90 text-gray-700"
          >
            <Send size={16} />
          </Button>
        </div>
      </div>
      
      <NavigationBar activeScreen="chat" />
    </div>
  );
};

export default Chat;
