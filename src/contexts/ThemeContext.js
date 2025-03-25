// src/contexts/ThemeContext.js
import React, { createContext, useState, useEffect } from "react";

// Création du contexte
export const ThemeContext = createContext();

// Fournisseur du contexte
export const ThemeProvider = ({ children }) => {
  // Vérifier si un thème est déjà stocké dans le localStorage
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "dark");

  // Fonction pour basculer entre les thèmes
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Appliquer le thème au chargement
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
