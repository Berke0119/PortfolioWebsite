export default function Footer() {
    return (
      <footer className="w-full bg-[#F9FAFB] dark:bg-[#171717] py-16">
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex flex-col gap-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] dark:text-[#CBD5E1] transform transition-all duration-300 hover:translate-x-2">
              Let's work together on<br />
              your next product.
            </h2>
          </div>

          <div className="flex flex-col gap-8 md:flex-row justify-between items-start md:items-center">
            <div
              className="group inline-flex items-center gap-2 text-xl font-semibold text-[#AF0C48] dark:text-[#BAB2E7] transform transition-all duration-300 hover:-translate-y-1"
            >
              <span className="transition-transform duration-300 group-hover:rotate-45">👉</span>
              <span className="underline transition-colors duration-300 hover:text-[#8F0A3C] dark:hover:text-[#9E97D0]">berkeserin2001@gmail.com</span>
            </div>

            <div className="flex gap-8 text-lg font-medium leading-relaxed">
              <div className="relative group">
                <span className="text-[#0A0A14] dark:text-[#E1E1FF] transition-colors duration-300">Personal Blog</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0A0A14] dark:bg-[#E1E1FF] transition-all duration-300 group-hover:w-full"></span>
              </div>
              <a
                href="https://github.com/Berke0119"
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <span className="text-[#00AB6B] dark:text-[#17D18B] transition-colors duration-300 group-hover:text-[#008F59] dark:group-hover:text-[#14B377]">Github</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00AB6B] dark:bg-[#17D18B] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="relative group"
              >
                <span className="text-[#0077B5] dark:text-[#0BA6F6] transition-colors duration-300 group-hover:text-[#005885] dark:group-hover:text-[#0990D8]">Linkedin</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0077B5] dark:bg-[#0BA6F6] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}
