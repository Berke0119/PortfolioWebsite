import { useData } from "../context/DataContext";
import { getIcon } from "../utils/getButtonIcon";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const { data } = useData();
  const header = data?.headerInfo;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-8">
      <div className={`flex flex-col gap-4 sm:gap-6 md:gap-8 w-full md:w-[40%] transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}>
        <div className="flex items-center gap-2">
          <span className="w-[60px] sm:w-[80px] md:w-[100px] h-[1px] bg-[#3730A3] dark:bg-[#B7AAFF] transition-all duration-300"></span>
          <span className="text-[#4338CA] text-base sm:text-lg md:text-xl leading-7 font-medium dark:text-[#B7AAFF] transform transition-all duration-300 hover:translate-x-1">
            {header?.name}
          </span>
        </div>

        <div>
          <h1 className="text-lightHeading text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-none font-bold dark:text-darkHeading transform transition-all duration-300 hover:translate-x-2">
            {header?.titleLine1}
          </h1>
          <h1 className="text-lightHeading text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-none font-bold dark:text-darkHeading transform transition-all duration-300 hover:translate-x-2">
            {header?.titleLine2}
          </h1>
        </div>

        <p className="text-lightDescription text-base sm:text-lg leading-7 font-medium break-words dark:text-white max-w-[90%] sm:max-w-[85%] md:max-w-full">
          {header?.description}
        </p>

        <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4">
          {header?.buttons.map((button) => {
            const Icon = getIcon(button.icon);

            if (button.label === "Hire me" || button.label === "Bana ulaş") {
              return (
                <Link
                  to="/contact"
                  key={button.label}
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded border border-[#3730A3] text-base sm:text-lg leading-7 font-medium flex items-center gap-2 dark:border-[#E1E1FF] min-w-[120px] sm:min-w-fit justify-center bg-[#3730A3] text-white hover:bg-[#3730A3]/80 hover:text-white transition-all duration-300 dark:bg-[#E1E1FF] dark:text-black dark:hover:bg-[#B7AAFF]/80 transform hover:scale-105"
                >
                  {Icon && <Icon className="text-lg sm:text-xl transition-transform duration-300 group-hover:rotate-12" />}
                  {button.label}
                </Link>
              );
            }

            if (button.label === "Github") {
              return (
                <a
                  key={button.label}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded border border-[#3730A3] text-base sm:text-lg leading-7 font-medium flex items-center gap-2 dark:border-[#E1E1FF] min-w-[120px] sm:min-w-fit justify-center bg-white text-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-all duration-300 dark:bg-[#383838] dark:text-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#383838] transform hover:scale-105"
                >
                  {Icon && <Icon className="text-lg sm:text-xl transition-transform duration-300 group-hover:rotate-12" />}
                  {button.label}
                </a>
              );
            }

            if (button.label === "LinkedIn") {
              return (
                <a
                  key={button.label}
                  href={button.link}
                  onClick={(e) => e.preventDefault()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded border border-[#3730A3] text-base sm:text-lg leading-7 font-medium flex items-center gap-2 dark:border-[#E1E1FF] min-w-[120px] sm:min-w-fit justify-center bg-white text-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-all duration-300 dark:bg-[#383838] dark:text-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#383838] transform hover:scale-105"
                >
                  {Icon && <Icon className="text-lg sm:text-xl transition-transform duration-300 group-hover:rotate-12" />}
                  {button.label}
                </a>
              );
            }
          })}
        </div>
      </div>

      <div className={`w-full md:w-1/2 flex justify-center mt-8 md:mt-0 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}>
        <div className="relative w-[80%] sm:w-[70%] md:w-full max-w-md">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4338CA] via-[#5E52F3] to-[#B7AAFF] rounded-[60px] rotate-[-5deg] transform hover:rotate-0 transition-transform duration-500 opacity-75 dark:opacity-90 blur-[32px]"></div>
          
          <div className="absolute inset-0 bg-gradient-to-tr from-[#3730A3] via-[#4338CA] to-[#B7AAFF] rounded-[60px] rotate-[5deg] transform hover:rotate-0 transition-transform duration-500 opacity-75 dark:opacity-90 blur-[24px]"></div>
          
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 dark:from-black/10 dark:to-black/5 rounded-[48px] p-6 backdrop-blur-sm border border-white/20 dark:border-white/10 shadow-xl transform transition-all duration-500 hover:scale-[1.02]">
            <img
              src={header?.image}
              alt="profile"
              className="w-full h-auto rounded-[36px] transform hover:scale-[1.02] transition-transform duration-500 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
