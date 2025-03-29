import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export const useTranslation = () => {
  const { texts, language, switchLanguage } = useContext(LanguageContext);

  const t = (path) => {
    const keys = path.split(".");
    return keys.reduce(
      (obj, key) => (obj && obj[key] !== undefined ? obj[key] : path),
      texts
    );
  };

  return { t, language, switchLanguage };
};
