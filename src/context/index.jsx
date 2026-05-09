import { createContext, useState, useContext } from "react";
import { SAYONAR_LANGUAGE, LANGUANGE } from "../locale";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(LANGUANGE);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem(SAYONAR_LANGUAGE, newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
