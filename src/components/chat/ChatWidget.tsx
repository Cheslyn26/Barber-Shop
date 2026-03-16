import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Welcome to Elegant Edge! How can I help you with your grooming needs today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are a helpful assistant for Elegant Edge Barbershop. You know about our services: Classic Haircut (R150), Beard Grooming (R100), Royal Treatment (R250), and Line Up (R120). We are located at MBT 5th Avenue Fuel Station, Parow. Hours: Mon-Sat 9am-6pm. Be professional, stylish, and concise.",
        },
      });

      const response = await chat.sendMessage({ message: userMessage });
      setMessages(prev => [...prev, { role: 'model', text: response.text || "I'm sorry, I couldn't process that. Please call us at 074 863 3574." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having some trouble connecting. Feel free to WhatsApp us at 074 863 3574!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[350px] h-[500px] bg-[#1A1A1A] border border-white/10 shadow-2xl flex flex-col overflow-hidden rounded-lg"
          >
            {/* Header */}
            <div className="bg-[#E63946] p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Scissors className="w-5 h-5 text-white" />
                <span className="text-white font-bold text-sm tracking-widest">ELEGANT ASSISTANT</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-sm text-sm ${
                    msg.role === 'user' 
                      ? 'bg-[#E63946] text-white' 
                      : 'bg-[#0A0A0A] text-gray-300 border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#0A0A0A] p-3 rounded-sm border border-white/5 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-[#E63946] rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-[#E63946] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-[#E63946] rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-[#0A0A0A] border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-[#1A1A1A] border border-white/10 px-4 py-2 text-white text-sm outline-none focus:border-[#E63946]"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-[#E63946] p-2 text-white hover:bg-[#C12E39] transition-colors disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#D4B483] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform text-[#0A0A0A]"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
}
