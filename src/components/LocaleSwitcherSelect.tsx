import { useLanguage } from "./LanguageContext";

// 2. Use with type assertion

const LocaleSwitcherSelect = () => {
  interface LanguageContextType {
    locale: string;
    langDir: "ltr" | "rtl";
    changeLanguage: (languageCode: string) => void;
  }
  const { locale, changeLanguage } = useLanguage() as LanguageContextType;

  return (
    <div className="flex space-x-2 bg-gray-200 shadow-inner px-3 py-1 rounded-2xl">
      {locale === "ar" ? (
        <button title="english" onClick={() => changeLanguage("en")}>
          <div className="flex items-center justify-around space-x-2">
            <img
              src={"https://blogsbackend.spikecode.net/website/img/en.webp"}
              alt="English"
              width={20}
              height={20}
              className="mx-1"
            />
            <span className="text-sm font-medium text-slate-950 ">En</span>
          </div>
        </button>
      ) : (
        <button title="arabic" onClick={() => changeLanguage("ar")}>
          <div className="flex items-center justify-around space-x-2">
            <img
              src={"https://blogsbackend.spikecode.net/website/img/ar.webp"}
              alt="Arabic"
              width={20}
              height={20}
            />
            <span className="text-sm font-medium text-slate-950">Ar</span>
          </div>
        </button>
      )}
    </div>
  );
};
export default LocaleSwitcherSelect;
