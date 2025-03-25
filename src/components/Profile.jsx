import { useData } from "../context/DataContext";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useState } from 'react';

export default function Profile() {
  const { data } = useData();
  const { language } = useLanguage();
  const profile = data?.profile || {};
  const personalInfo = profile?.personalInfo || [];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="profile" className="py-10 sm:py-12 md:py-16 border-b border-[#BAB2E7] px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl md:text-5xl leading-none font-semibold tracking-normal mb-6 sm:mb-8 md:mb-10 text-[#1F2937] dark:text-[#AEBCCF] transform transition-all duration-300 hover:translate-x-2">
        {language === "tr" ? "Profil" : "Profile"}
      </h2>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="transform transition-all duration-500 hover:translate-x-2">
          <h3 className="text-2xl sm:text-2xl md:text-3xl leading-7 font-semibold tracking-normal mb-4 sm:mb-5 text-[#4338CA] dark:text-[#B7AAFF]">
            {language === "tr" ? "Profil" : "Profile"}
          </h3>

          <ul className="space-y-2 sm:space-y-3">
            {personalInfo.map((item, index) => (
              <li 
                key={index} 
                className="flex flex-col sm:flex-row sm:items-center transform transition-all duration-300 hover:translate-x-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="w-full sm:w-[160px] font-semibold text-base sm:text-lg text-black dark:text-white mb-1 sm:mb-0">{item.label}:</span>
                <span className="text-black font-normal text-base sm:text-lg dark:text-white">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="transform transition-all duration-500 hover:translate-x-2">
          <h3 className="text-2xl sm:text-2xl md:text-3xl leading-7 font-semibold tracking-normal mb-4 sm:mb-5 text-[#4338CA] dark:text-[#B7AAFF]">
            {language === "tr" ? "Hakkımda" : "About Me"}
          </h3>

          <p className="max-w-[500px] text-base sm:text-lg text-black font-normal leading-relaxed whitespace-pre-line dark:text-white relative overflow-hidden group">
            <span className="relative z-10">{profile?.aboutMe}</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#4338CA]/5 to-transparent dark:from-[#B7AAFF]/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          </p>
        </div>
      </div>
    </section>
  )
}
