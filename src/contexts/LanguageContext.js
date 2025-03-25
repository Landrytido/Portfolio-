// src/contexts/LanguageContext.js
import React, { createContext, useState, useEffect } from "react";
import { translations } from "../translations"; // Nous allons créer ce fichier

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Vérifier la langue stockée ou détecter la langue du navigateur
  const getInitialLanguage = () => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) return storedLanguage;

    // Détection automatique basée sur la langue du navigateur
    const browserLanguage = navigator.language.split("-")[0];
    return browserLanguage === "fr" ? "fr" : "en"; // Par défaut en anglais si ce n'est pas français
  };

  const [language, setLanguage] = useState(getInitialLanguage);
  const [texts, setTexts] = useState(translations[getInitialLanguage()]);

  // Fonction pour changer de langue
  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setTexts(translations[newLanguage]);
    localStorage.setItem("language", newLanguage);
    document.documentElement.setAttribute("lang", newLanguage);
  };

  // Mettre à jour l'attribut lang au chargement
  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};
