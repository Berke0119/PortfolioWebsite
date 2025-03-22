import { useData } from "../context/DataContext";

export default function Navbar() {

  const { data } = useData();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return(
    <nav className="flex justify-between items-center">
      <div className="bg-[#EEEBFF] dark:bg-[#4731D3] text-[#7B61FF] dark:text-[#8F88FF] w-16 h-16 rounded-full flex items-center justify-center text-2xl leading-8 font-semibold shadow-sm rotate-45">
        B
      </div>

      {/* Nav itemslarda kaldım */}
      <div className="flex items-center gap-16">
        {data?.navbarItems?.map((item) => item.id !== "hire" ? (
          <button key={item.id} onClick={() => scrollToSection(item.id)} className="text-lightDescription text-lg leading-7 font-medium hover:text-[#3730A3]
          transition-colors">{item.label}</button>
        ) : null)}

        <button 
        onClick={() => scrollToSection("hire")}
        className="text-lg leading-7 font-medium text-[#3730A3] px-4 py-1.5 rounded border border-[#3730A3] hover:bg-[#3730A3] hover:text-white transition-colors dark:bg-white dark:text-[#3730A3] dark:hover:bg-[#3730A3] dark:hover:text-white"
        >
           {data?.navbarItems?.find((item) => item.id === "hire")?.label}
        </button> 
          
        
      </div>

    
    </nav>
  )
}


