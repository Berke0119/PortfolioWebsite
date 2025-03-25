import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useGemini } from "../hooks/useGemini"; 
import ChatMessage from "./ChatMessage";
import { useLanguage } from "../context/LanguageContext";

const ChatbotModal = ({ onClose }) => {
  const { chatHistory, sendMessage, loading } = useGemini();
  const [input, setInput] = useState("");
  const { language } = useLanguage();

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput(""); 
  };

  return (
    <div className="fixed md:bottom-24 bottom-0 md:right-6 right-0 w-full md:w-96 lg:w-[450px] h-[500px] md:h-auto md:max-h-[600px] bg-white dark:bg-[#1E1E1E] border-t md:border border-gray-300 dark:border-gray-700 md:rounded-lg shadow-lg flex flex-col z-50">
      
      {/* Üst Bar */}
      <div className="flex justify-between items-center px-4 py-3 md:py-2 border-b dark:border-gray-700 bg-white dark:bg-[#1E1E1E] sticky top-0 z-10">
        <h2 className="font-semibold text-gray-700 dark:text-gray-100 text-base md:text-sm">{language === "tr" ? "Berke Serin AI Asistan" : "Berke Serin AI Assistant"}</h2>
        <button 
          onClick={onClose}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <IoClose className="text-gray-600 dark:text-gray-300" size={20} />
        </button>
      </div>

      {/* Mesajlar Alanı */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth">
        {chatHistory.map((msg, index) => (
          <ChatMessage key={index} sender={msg.role} text={msg.text} />
        ))}
        {loading && (
          <div className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
            {language === "tr" ? "Yazıyor..." : "Typing..."}
          </div>
        )}
      </div>

      {/* Input Alanı */}
      <div className="p-3 md:p-2 border-t dark:border-gray-700 flex gap-2 bg-white dark:bg-[#1E1E1E] sticky bottom-0">
        <input
          className="flex-1 px-4 py-2.5 md:py-2 rounded-full md:rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2a2a2a] text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#4338CA] dark:focus:ring-[#372fc3] transition-shadow"
          placeholder={language === "tr" ? "Bir soru yazın..." : "Ask a question..."}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="bg-[#4338CA] text-white px-6 md:px-4 py-2.5 md:py-2 rounded-full md:rounded text-sm font-medium hover:bg-[#372fc3] transition-colors duration-200 flex items-center justify-center min-w-[80px]"
          onClick={handleSend}
          disabled={loading}
        >
          {language === "tr" ? "Gönder" : "Send"}
        </button>
      </div>
    </div>
  );
};

export default ChatbotModal;
