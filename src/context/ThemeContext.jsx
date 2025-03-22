import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
   const [darkMode, setDarkMode] = useState(false);

   const toggleDarkMode = () => setDarkMode((prev) => !prev);
    

   useEffect(() => {
    const theme = localStorage.getItem('darkMode');
    if (theme !== null) {
      setDarkMode(theme === "true");
    }
   },[])

   useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }

    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

   return (
    <ThemeContext.Provider value={{darkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
   )
    
}

export const useTheme = () => useContext(ThemeContext);
