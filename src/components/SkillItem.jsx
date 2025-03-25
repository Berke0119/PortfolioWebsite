import { useEffect, useState } from 'react';

export default function SkillItem({ name, description, delay }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`flex flex-col gap-1 sm:gap-2 transform transition-all duration-500 hover:translate-y-[-8px] ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-2xl sm:text-2xl md:text-3xl font-semibold leading-7 tracking-normal text-[#4338CA] dark:text-[#B7AAFF] group-hover:text-[#3730A3] transition-colors duration-300">
        {name}
      </h3>

      <p className="text-xs sm:text-sm leading-4 sm:leading-5 font-normal max-w-[250px] text-[#6B7280] dark:text-white relative overflow-hidden">
        <span className="relative z-10">{description}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-[#4338CA]/10 to-transparent dark:from-[#B7AAFF]/10 transform -translate-x-full hover:translate-x-0 transition-transform duration-300"></span>
      </p>
    </div>
  );
}
