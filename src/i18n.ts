import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 1. تعريف واجهة للموارد اللغوية

// 2. استيراد الملفات اللغوية مع تحديد النوع
import enTranslations from "./messages/en.json";
import arTranslations from "./messages/ar.json";

// 3. تعريف الموارد مع تحديد النوع
const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

// 4. تحديد نوع اللغة الافتراضية
const defaultLanguage: string = localStorage.getItem("language") || "ar";

// 5. تهيئة i18n مع تحديد أنواع الخيارات
i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "ar",
});

export default i18n;
