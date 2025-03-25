import { useState, useEffect } from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import ChatBotModal from "./ChatBotModal";
import { useLanguage } from "../context/LanguageContext";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const [showAttention, setShowAttention] = useState(true);
    const { language } = useLanguage();

    // Tooltip'i 5 saniye sonra gizle
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTooltip(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    // Dikkat çekme animasyonunu her 10 saniyede bir tekrarla
    useEffect(() => {
        if (!isOpen) {
            const interval = setInterval(() => {
                setShowAttention(true);
                setTimeout(() => setShowAttention(false), 2000);
            }, 10000);

            return () => clearInterval(interval);
        }
    }, [isOpen]);

    return (
        <>
            <div className="fixed bottom-6 right-6 z-50">
                {/* Tooltip */}
                {showTooltip && !isOpen && (
                    <div className="absolute bottom-full right-0 mb-2 bg-white dark:bg-[#1E1E1E] text-gray-800 dark:text-white text-sm py-2 px-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 whitespace-nowrap animate-bounce">
                        {language === "tr" ? "Berke hakkında soru sor!" : "Ask about Berke!"}
                        <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-[#1E1E1E] border-r border-b border-gray-200 dark:border-gray-700"></div>
                    </div>
                )}

                {/* Attention Animation Ring */}
                {showAttention && !isOpen && (
                    <div className="absolute inset-[-8px] rounded-full border-4 border-[#4338CA] animate-[attention_2s_ease-in-out]"></div>
                )}

                {/* Main Button */}
                <button 
                    onClick={() => {
                        setIsOpen(!isOpen);
                        setShowTooltip(false);
                        setShowAttention(false);
                    }}
                    className="relative bg-[#4338CA] dark:bg-[#4338CA] p-2 rounded-full shadow-lg w-14 h-14 md:w-16 md:h-16 flex items-center justify-center hover:bg-[#4338CA]/90 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-[#4338CA]/20"
                >
                    <IoChatbubblesSharp className="w-6 h-6 md:w-7 md:h-7 text-white transform hover:rotate-12 transition-transform" />
                </button>
            </div>

            {isOpen && <ChatBotModal onClose={() => setIsOpen(false)} />}
        </>
    )
}
