import { useData } from "../context/DataContext";
import { getIcon } from "../utils/getButtonIcon";

const Header = () => {
  const { data } = useData();
  const header = data?.headerInfo;

  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-20">
      <div className="flex flex-col gap-8 w-full md:w-[40%]">
        <div className="flex items-center gap-2">
          <span className="w-[100px] h-[1px] bg-[#3730A3] dark:bg-[#B7AAFF]"></span>
          <span className="text-[#4338CA] text-xl leading-7 font-medium dark:text-[#B7AAFF]">{header?.name}</span>
        </div>

        <div>
          <h1 className="text-lightHeading text-5xl md:text-7xl leading-none font-bold dark:text-darkHeading">{header?.titleLine1}</h1>
          <h1 className="text-lightHeading text-5xl md:text-7xl leading-none font-bold dark:text-darkHeading">{header?.titleLine2}</h1>
        </div>

        <p className="text-lightDescription text-lg leading-7 font-medium break-words dark:text-white">{header?.description}</p>

        <div className="flex gap-4">
          {header?.buttons.map((button) => {
            const Icon = getIcon(button.icon);
            return (
              <button
                key={button.label}
                className={`px-5 py-2 rounded border border-[#3730A3] text-lg leading-7 font-medium flex items-center gap-2 dark:border-[#E1E1FF]
                  ${
                    button.type === "primary"
                      ? "bg-[#3730A3] text-white hover:bg-[#3730A3]/80 hover:text-white transition-colors dark:bg-[#E1E1FF] dark:text-black dark:hover:bg-[#B7AAFF]/80"
                      : "bg-white text-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors dark:bg-[#383838] dark:text-[#E1E1FF] dark:hover:bg-[#E1E1FF] dark:hover:text-[#383838]"
                  }`}
              >
                {Icon && <Icon />}
                {button.label}
              </button>
            );
          })}
        </div>

      </div>

      <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={header?.image}
            alt="profile"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
      </div>

    </section>
  );
};

export default Header;
