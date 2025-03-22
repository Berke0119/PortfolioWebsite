import { createContext, useContext } from "react";
import { useLanguage } from "./LanguageContext";
import { useFetchData } from "../hooks/useFetchData";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const { language } = useLanguage();
  const { data, isLoading, isError } = useFetchData(language);

  return (
    <DataContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
