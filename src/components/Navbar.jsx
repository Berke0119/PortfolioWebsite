import { useData } from "../context/DataContext";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { data } = useData();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return(
    <nav className="relative flex justify-between items-center py-4">
      <div className="bg-[#EEEBFF] dark:bg-[#4731D3] text-[#7B61FF] dark:text-[#8F88FF] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl leading-8 font-semibold shadow-sm rotate-45">
        B
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden text-2xl text-[#3730A3] dark:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Nav Items */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:static top-full left-0 right-0 bg-white md:bg-transparent z-50 py-4 md:py-0 gap-4 md:gap-16 items-center shadow-lg md:shadow-none`}>
        {data?.navbarItems?.map((item) => item.id !== "hire" ? (
          <button 
            key={item.id} 
            onClick={() => scrollToSection(item.id)} 
            className="text-lightDescription text-base sm:text-lg leading-7 font-medium hover:text-[#3730A3] transition-colors w-full md:w-auto text-center"
          >
            {item.label}
          </button>
        ) : null)}

        <button 
          onClick={() => scrollToSection("hire")}
          className="text-base sm:text-lg leading-7 font-medium text-[#3730A3] px-4 py-1.5 rounded border border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors dark:bg-white dark:text-[#3730A3] dark:hover:bg-[#3730A3] dark:hover:text-white w-[80%] md:w-auto"
        >
          {data?.navbarItems?.find((item) => item.id === "hire")?.label}
        </button>
      </div>
    </nav>
  )
}


