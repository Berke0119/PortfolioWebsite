import ThemeLanguageToggle from "../components/ThemeLanguageToggle";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <ThemeLanguageToggle />
        <Navbar />
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <Header />
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <Skills />
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <Profile />
      </div>
      <div className="w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default Home;