import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeLanguageToggle() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-4 text-sm font-medium select-none justify-end py-10">
      {/* Dark Mode Toggle */}
      <div
        onClick={toggleDarkMode}
        className={`relative w-14 h-6 rounded-full flex items-center cursor-pointer px-1 transition-colors ${darkMode ? "bg-[#3A3A3A]" : "bg-[#4731D3]"
          }`}
      >
        {/* Toggle Circle or Icon */}
        <div
          className={`w-4 h-4 rounded-full bg-[#FFE86E] transition-all duration-300 ${darkMode ? "translate-x-0" : "translate-x-8"
            } flex items-center justify-center`}
        >
          {darkMode && <FaMoon className="text-xs text-gray-800" />}
        </div>
      </div>

      {/* Mode Label */}
      <span className="text-[#777777] dark:text-[#D9D9D9] uppercase tracking-wide">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </span>

      {/* Divider */}
      <span className="text-gray-400">|</span>

      {/* Language Button */}
      <button
        onClick={toggleLanguage}
        className="text-[#777777] hover:underline"
      >
        {language === "en" ? (
          <>
            <span className="font-semibold text-[#3730A3] dark:text-[#B7AAFF]">TÜRKÇE</span>
            ’YE GEÇ
          </>
        ) : (
          <>
            SWITCH TO <span className="font-semibold text-[#3730A3] dark:text-[#B7AAFF]">ENGLISH</span>
          </>
        )}
      </button>
    </div>
  );

}
