import { useData } from "../context/DataContext";
import { getIcon } from "../utils/getButtonIcon";
import { Link } from "react-router-dom";

const Header = () => {
  const { data } = useData();
  const header = data?.headerInfo;

  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-8 sm:py-12 md:py-20 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full md:w-[40%]">
        <div className="flex items-center gap-2">
          <span className="w-[60px] sm:w-[80px] md:w-[100px] h-[1px] bg-[#3730A3] dark:bg-[#B7AAFF]"></span>
          <span className="text-[#4338CA] text-base sm:text-lg md:text-xl leading-7 font-medium dark:text-[#B7AAFF]">
            {header?.name}
          </span>
        </div>

        <div>
          <h1 className="text-lightHeading text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-none font-bold dark:text-darkHeading">
            {header?.titleLine1}
          </h1>
          <h1 className="text-lightHeading text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight md:leading-none font-bold dark:text-darkHeading">
            {header?.titleLine2}
          </h1>
        </div>

        <p className="text-lightDescription text-base sm:text-lg leading-7 font-medium break-words dark:text-white max-w-[90%] sm:max-w-[85%] md:max-w-full">
          {header?.description}
        </p>

        <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4">
          {header?.buttons.map((button) => {
            const Icon = getIcon(button.icon);

            // Butonun içeriğine göre yönlendirme
            if (button.label === "Hire me") {
              return (
                <Link
                  to="/contact"
                  key={button.label}
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded border border-[#3730A3] text-base sm:text-lg leading-7 font-medium flex items-center gap-2 dark:border-[#E1E1FF] min-w-[120px] sm:min-w-fit justify-center
                 bg-[#3730A3] text-white hover:bg-[#3730A3]/80 hover:text-white transition-colors dark:bg-[#E1E1FF] dark:text-black dark:hover:bg-[#B7AAFF]/80"
                >
                  {Icon && <Icon className="text-lg sm:text-xl" />}
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
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded border border-[#3730A3] text-base sm:text-lg leading-7 font-medium flex items-center gap-2 dark:border-[#E1E1FF] min-w-[120px] sm:min-w-fit justify-center bg-white text-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors dark:bg-[#383838] dark:text-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#383838]"
                >
                  {Icon && <Icon className="text-lg sm:text-xl" />}
                  {button.label}
                </a>
              );
            }

            // LinkedIn için şimdilik buton göster ama yönlendirme yapma
            if (button.label === "LinkedIn") {
              return (
                <a
                  key={button.label}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded border border-[#3730A3] text-base sm:text-lg leading-7 font-medium flex items-center gap-2 dark:border-[#E1E1FF] min-w-[120px] sm:min-w-fit justify-center bg-white text-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors dark:bg-[#383838] dark:text-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#383838]"
                >
                  {Icon && <Icon className="text-lg sm:text-xl" />}
                  {button.label}
                </a>
              );
            }
          })}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={header?.image}
          alt="profile"
          className="w-[80%] sm:w-[70%] md:w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
};

export default Header;
