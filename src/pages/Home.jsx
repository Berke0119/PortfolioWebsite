import ThemeLanguageToggle from "../components/ThemeLanguageToggle";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
function Home() {
  return (
      <div className="w-[80%] mx-auto">
          <ThemeLanguageToggle />
          <Navbar />
          <Header />
      </div>
  )
}

export default Home;