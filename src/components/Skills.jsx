import SkillItem from "./SkillItem";
import { useData } from "../context/DataContext";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { data } = useData();
  const { language } = useLanguage();
  const skills = data?.skills || [];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 border-b border-[#BAB2E7] px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl md:text-5xl leading-none font-semibold tracking-normal mb-6 sm:mb-8 md:mb-10 text-[#1F2937] dark:text-[#AEBCCF] transform transition-all duration-300 hover:translate-x-2">
        {language === "tr" ? "Yetenekler" : "Skills"}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 md:gap-x-16 gap-y-8 sm:gap-y-10 md:gap-y-12">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            name={skill.name}
            description={skill.description}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
}
