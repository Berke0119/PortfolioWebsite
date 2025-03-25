import { useState } from "react";
import { IoChatbubblesSharp } from "react-icons/io5";
import ChatBotModal from "./ChatBotModal";

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="fixed bottom-6 right-6 bg-[#4338CA] p-2 rounded-full shadow-lg w-14 h-14 md:w-20 md:h-20 flex items-center justify-center hover:bg-[#4338CA]/80 transition-colors duration-300"
            >
              <IoChatbubblesSharp className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </button>
            {isOpen && <ChatBotModal onClose={() => setIsOpen(false)} />}
        </>
    )
}
