import { useData } from "../context/DataContext";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { data } = useData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return(
    <nav className="relative flex justify-between items-center py-4">
      <div className="bg-[#EEEBFF] dark:bg-[#4731D3] text-[#7B61FF] dark:text-[#8F88FF] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl leading-8 font-semibold shadow-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer hover:rotate-[135deg] rotate-45">
        B
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl text-[#3730A3] dark:text-white transform hover:scale-110 transition-transform duration-200"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes className="transform rotate-180 transition-transform duration-300" /> : <FaBars className="transform hover:rotate-180 transition-transform duration-300" />}
      </button>

      {/* Nav Items */}
      <div className={`${isMenuOpen ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2 md:translate-y-0 md:opacity-100'} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white/95 dark:bg-bodyDark/95 backdrop-blur-sm md:backdrop-blur-none md:bg-transparent z-50 py-4 md:py-0 gap-4 md:gap-16 items-center shadow-lg md:shadow-none transition-all duration-300`}>
        {data?.navbarItems?.map((item, index) => item.id !== "hire" ? (
          <button 
            key={item.id} 
            onClick={() => scrollToSection(item.id)} 
            className="text-lightDescription text-base sm:text-lg leading-7 font-medium hover:text-[#3730A3] dark:hover:text-[#8F88FF] transition-all duration-300 w-full md:w-auto text-center relative group"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#3730A3] dark:bg-[#8F88FF] transition-all duration-300 group-hover:w-full"></span>
          </button>
        ) : null)}

        <button 
          onClick={() => navigate("/contact")}
          className="text-base sm:text-lg leading-7 font-medium text-[#3730A3] px-4 py-1.5 rounded border border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-all duration-300 dark:bg-white dark:text-[#3730A3] dark:hover:bg-[#3730A3] dark:hover:text-white w-[80%] md:w-auto transform hover:scale-105 hover:shadow-md"
        >
          {data?.navbarItems?.find((item) => item.id === "hire")?.label}
        </button>
      </div>
    </nav>
  )
}


