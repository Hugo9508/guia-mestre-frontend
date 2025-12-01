import React, { useState, useEffect, useRef } from 'react';
import { Bot, User, Send } from 'lucide-react';

export const ChatInterface = ({ currentCode, currentContext, onAskAI }) => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: `Olá! Sou seu mentor virtual. Estou aqui para ajudar com o exercício "${currentContext.title}".` }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    setMessages([{ role: 'ai', text: `Olá! Vamos resolver o exercício "${currentContext.title}"?` }]);
  }, [currentContext.id, currentContext.title]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);
    try {
      const response = await onAskAI(currentCode, input, currentContext);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } catch {
      setMessages(prev => [...prev, { role: 'ai', text: "Erro de conexão." }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-slate-50 p-3 border-b flex items-center gap-2">
        <Bot className="w-4 h-4 text-indigo-600" />
        <span className="font-bold text-xs text-gray-700 uppercase tracking-wide">AI Mentor</span>
      </div>
      
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-indigo-100 text-indigo-700' : 'bg-green-100 text-green-700'}`}>
              {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div className={`p-3 rounded-xl text-sm max-w-[85%] ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-700 rounded-tl-none shadow-sm'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isThinking && (
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center"><Bot className="w-4 h-4 text-green-700" /></div>
            <div className="bg-white border border-gray-200 p-3 rounded-xl rounded-tl-none shadow-sm flex gap-1">
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
              <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-3 bg-white border-t flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Pergunte algo..."
          className="flex-1 bg-gray-100 border-0 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
        />
        <button onClick={handleSend} disabled={isThinking || !input.trim()} className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
