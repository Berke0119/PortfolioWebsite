export default function Footer() {
    return (
      <footer className="w-full bg-[#F9FAFB] dark:bg-[#171717] py-16">
        <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto flex flex-col gap-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E293B] dark:text-[#CBD5E1]">
              Let's work together on<br />
              your next product.
            </h2>
          </div>

          <div className="flex flex-col gap-8 md:flex-row justify-between items-start md:items-center">
            <a
              href="mailto:almilasucode@gmail.com"
              className="text-xl font-semibold text-[#AF0C48] dark:text-[#BAB2E7] hover:opacity-90"
            >
              👉 <span className="underline">almilasucode@gmail.com</span>
            </a>

            <div className="flex gap-8 text-lg font-medium leading-relaxed">
              <a
                href="#"
                className="text-[#0A0A14] dark:text-[#E1E1FF]"
              >
                Personal Blog
              </a>
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
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
}
