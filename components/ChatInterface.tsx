"use client";

import Link from "next/link";
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
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const API_ENDPOINT = "https://www.chatbot-by.adnanthecoder.com/chat/datanyx";

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

  const sendMessageToAPI = async (message: string): Promise<string> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      console.log("🚀 Sending request to:", API_ENDPOINT);
      console.log("📝 Message:", message);

      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ message }),
        signal: controller.signal,
        mode: "cors",
        credentials: "omit",
      });

      clearTimeout(timeoutId);

      console.log("✅ Response status:", response.status);
      console.log("📋 Response headers:", Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        let errorText = "Unknown error";
        try {
          const errorData = await response.json();
          errorText = errorData.error || errorData.message || JSON.stringify(errorData);
        } catch {
          errorText = await response.text().catch(() => "Unknown error");
        }
        console.error("❌ Error response:", errorText);
        throw new Error(`Server error (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      console.log("✅ Response data:", data);
      
      // Handle different possible response formats
      if (typeof data === 'string') {
        return data;
      } else if (data.response) {
        return data.response;
      } else if (data.message) {
        return data.message;
      } else if (data.reply) {
        return data.reply;
      } else if (data.error) {
        throw new Error(data.error);
      } else {
        return JSON.stringify(data);
      }
    } catch (err) {
      clearTimeout(timeoutId);
      
      if (err instanceof Error) {
        if (err.name === 'AbortError') {
          console.error("⏱️ Request timed out");
          throw new Error("Request timed out. The server took too long to respond.");
        }
        
        // Check for CORS errors
        if (err.message.includes('Failed to fetch') || err.message.includes('CORS')) {
          console.error("🚫 CORS/Network error");
          throw new Error("Cannot connect to the server. This might be a CORS issue. Please contact support.");
        }
        
        console.error("❌ API Error:", err);
        throw err;
      }
      
      throw new Error("An unexpected error occurred. Please try again.");
    }
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === "" || isTyping) return;

    const userMessageText = inputValue.trim();
    const newMessage: Message = {
      id: Date.now(),
      text: userMessageText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);
    setError(null);

    // Keep focus on input
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);

    try {
      const responseText = await sendMessageToAPI(userMessageText);
      
      const aiMessage: Message = {
        id: Date.now() + 1,
        text: responseText,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setError(null);
    } catch (err) {
      const errorText = err instanceof Error 
        ? err.message 
        : "An unexpected error occurred. Please try again.";
      
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: errorText,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, errorMessage]);
      setError("Connection error");
      console.error("💥 Chat error:", err);
    } finally {
      setIsTyping(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4 z-[1000] sm:bottom-6 sm:right-6">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          aria-label="Open chat"
          className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-[1001]"
          style={{ pointerEvents: "auto" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="black"
            className="w-8 h-8 sm:w-10 sm:h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      )}

      {/* Chat Popup */}
      {isOpen && (
        <div
          className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 flex flex-col bg-black border border-gray-900 shadow-2xl transition-all duration-300 z-[1002] w-full h-full sm:w-[380px] md:w-[420px] sm:h-[600px] md:h-[650px] sm:rounded-xl"
          style={{ pointerEvents: "auto" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 bg-gray-900 border-b border-gray-800 sm:rounded-t-xl">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-800 p-1"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">Datanyx Chatbot</h3>
                <p className="text-gray-400 text-xs">{isTyping ? "Typing..." : "Online"}</p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              aria-label="Close chat"
              className="text-gray-400 hover:text-white transition-colors duration-200 p-2 rounded-full bg-black hover:bg-gray-800 active:scale-95"
            >
              <svg
                width="20"
                height="20"
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

          {/* Error Banner */}
          {error && (
            <div className="bg-red-900 bg-opacity-50 text-red-200 px-4 py-2 text-xs sm:text-sm border-b border-red-800 flex items-center justify-between">
              <span className="font-semibold">⚠ {error}</span>
              <button 
                onClick={() => setError(null)}
                className="text-red-200 hover:text-white ml-2"
                aria-label="Dismiss error"
              >
                ✕
              </button>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-black text-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                {!message.isUser && (
                  <div className="w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center mr-2 flex-shrink-0 rounded-full bg-gray-800 text-white text-xs sm:text-sm font-bold">
                    AI
                  </div>
                )}
                <div
                  className={`max-w-[80%] sm:max-w-[75%] px-3 sm:px-4 py-2 sm:py-3 rounded-2xl ${
                    message.isUser
                      ? "bg-white text-black rounded-br-md"
                      : "bg-gray-800 text-white rounded-bl-md"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed break-words whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start items-center space-x-2">
                <div className="w-7 h-7 sm:w-9 sm:h-9 flex shrink-0 rounded-full bg-gray-800 text-white text-xs sm:text-sm font-bold items-center justify-center">
                  AI
                </div>
                <div className="bg-gray-800 text-white px-3 sm:px-4 py-2 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 bg-gray-900 border-t border-gray-800 sm:rounded-b-xl">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 bg-black text-white placeholder-gray-400 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border border-gray-700 focus:outline-none focus:border-white transition-colors duration-200 text-sm sm:text-base"
                disabled={isTyping}
                autoComplete="off"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === "" || isTyping}
                className="bg-white text-black p-2 sm:p-2.5 rounded-xl hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 flex-shrink-0"
                aria-label="Send message"
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
                  className="sm:w-5 sm:h-5"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22,2 15,22 11,13 2,9" />
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-xs text-center mt-3 opacity-70">
              {/* https://chatbot-by.AdnanTheCoder.com */}
              Powered by Datanyx 
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;