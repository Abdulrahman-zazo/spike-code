import i18next from "i18next";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import rtlDetect from "rtl-detect";
interface LanguageContextType {
  locale: string;
  langDir: string;
  changeLanguage: (languageCode: string) => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface Iprops {
  children?: ReactNode;
}
export const LanguageProvider = ({ children }: Iprops) => {
  const [langDir, setLangDir] = useState<string>("rtl");
  const [locale, setLocale] = useState<string>(() => {
    return localStorage.getItem("language") || "ar";
  }); // القيمة الافتراضية

  useEffect(() => {
    const newLangDir = rtlDetect.getLangDir(locale);
    setLangDir(newLangDir);
  }, [locale]);

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
    i18next.changeLanguage(newLocale);
    localStorage.setItem("language", newLocale);
  };

  return (
    <LanguageContext.Provider value={{ langDir, locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};

// LanguageContext.js
