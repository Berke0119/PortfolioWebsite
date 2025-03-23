import {useLanguage} from "../context/LanguageContext";

export default function Footer() {
    const {language} = useLanguage();
    return (
      <footer className="py-16 flex flex-col md:flex-row justify-between items-start gap-8 bg-[#F9F9F9] dark:bg-[#141414]">
      
      {/* Sol taraf */}
      <div className="space-y-6">
        <h2 className="text-5xl font-semibold leading-snug text-[#1F2937] dark:text-[#AEBCCF]">
          {language === "en"
            ? "Let’s work together on your next product."
            : "Bir sonraki projenizde birlikte çalışalım."}
        </h2>

        <p className="text-xl font-medium leading-relaxed tracking-[5%]">
          👉{" "}
          <a
            href="mailto:almilasucode@gmail.com"
            className="underline text-[#AF0C48] dark:text-[#BAB2E7] hover:opacity-90"
          >
            almilasucode@gmail.com
          </a>
        </p>
      </div>

      {/* Sağ taraf */}
      <div className="flex flex-col gap-2 md:items-end text-lg font-medium leading-relaxed">
        <span className="text-[#0A0A14] dark:text-[#E1E1FF]">
          {language === "en" ? "Personal Blog" : "Kişisel Blog"}
        </span>
        <div className="flex gap-4">
          <a
            href="https://github.com/Berke0119"
            target="_blank"
            rel="noreferrer"
            className="text-[#00AB6B] dark:text-[#17D18B] hover:underline"
          >
            Github
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="text-[#0077B5] dark:text-[#0BA6F6] hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
    )
}
