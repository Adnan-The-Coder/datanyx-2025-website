"use client";

import React, { useState, useRef, useEffect } from "react";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: "Hi! What can I help you with?",
        isUser: false,
        timestamp: new Date(),
      },
    ]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const mockResponses = [
    "That's a great question! Let me help you with that.",
    "I understand what you're looking for. Here's what I can suggest...",
    "Interesting! Based on your query, I'd recommend checking out our hackathon resources.",
    "I'd be happy to assist you with that. Let me provide some guidance.",
    "That's a common question during hackathons. Here's what you should know...",
    "Great! I can help you navigate through the Datanyx hackathon experience.",
    "I'm here to help! What specific aspect would you like to explore?",
    "Perfect! Let me guide you through the best practices for hackathon success.",
  ];

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;
    const newMessage: Message = {
      id: messages.length + 1,
      text: inputValue.trim(),
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const randomResponse =
        mockResponses[Math.floor(Math.random() * mockResponses.length)];
      const aiMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1500 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-[1000]">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          aria-label="Open chat"
          className="w-14 h-14 bg-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center transition-all duration-300 sm:w-16 sm:h-16 z-[1001]"
          style={{ pointerEvents: "auto" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div
          className={`fixed bottom-0 right-0 flex flex-col bg-black border border-gray-900 shadow-2xl transition-all duration-300 z-[1002] w-full h-full rounded-none sm:w-[380px] sm:h-[500px] sm:rounded-xl`}
          style={{ pointerEvents: "auto" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 bg-gray-900 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-9 h-9 rounded-full bg-gray-800 p-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-lg">Chatbot</h3>
                <p className="text-gray-400 text-xs">Online</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              aria-label="Close chat"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full bg-black hover:bg-gray-800"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black text-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                {!message.isUser && (
                  <div className="w-9 h-9 flex items-center justify-center mr-2 flex-shrink-0 rounded-full bg-gray-800 text-white font-bold">
                    Bot
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                    message.isUser
                      ? "bg-white text-black rounded-br-md"
                      : "bg-gray-800 text-white rounded-bl-md"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start items-center space-x-2">
                <div className="w-9 h-9 flex shrink-0 rounded-full bg-gray-800 text-white font-bold flex items-center justify-center">
                  Bot
                </div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded-2xl rounded-bl-md">
                  <span className="text-sm animate-pulse">...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-gray-900 border-t border-gray-800">
            <div className="flex items-center space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-black text-white placeholder-gray-400 px-4 py-3 rounded-2xl border border-gray-700 focus:outline-none focus:border-white transition-colors duration-200 pr-12"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === "" || isTyping}
                className="bg-white text-black p-2 rounded-xl hover:bg-gray-300 disabled:opacity-50 transition-all duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22,2 15,22 11,13 2,9" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-xs text-center mt-3 opacity-70">
              Powered by Datanyx
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
