import React, { createContext, useState, useEffect } from "react";
import frTranslations from "../translations/fr.json";
import enTranslations from "../translations/en.json";

export const LanguageContext = createContext();

const translations = {
  fr: frTranslations,
  en: enTranslations,
};

export const LanguageProvider = ({ children }) => {
  const getInitialLanguage = () => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) return storedLanguage;
    const browserLanguage = navigator.language.split("-")[0];
    return browserLanguage === "fr" ? "fr" : "en";
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  const [texts, setTexts] = useState(translations[getInitialLanguage()]);

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setTexts(translations[newLanguage]);
    localStorage.setItem("language", newLanguage);
    document.documentElement.setAttribute("lang", newLanguage);
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
