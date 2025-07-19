import "aos/dist/aos.css";
import { Route, Routes } from "react-router";
import { LanguageProvider, useLanguage } from "./components/LanguageContext";
import Home from "./pages/Home/Home";
import Contact from "./components/contact";
import NotFoundPage from "./pages/Notfound/Notfound";
import Services from "./pages/Services/Services";
import Desktopdevelopment from "./pages/Services/desktop-development/desktop-development";
import ElectronicSystems from "./pages/Services/electronic-Systems/electronic-Systems";
import Itsupport from "./pages/Services/it-support/page";
import Mobileappdevelopment from "./pages/Services/mobile-app-development/page";
import Uiuxdesign from "./pages/Services/ui-ux-design/page";
import WebAppHosting from "./pages/Services/web-app-hosting/page";
import Webdevelopment from "./pages/Contact/Contact";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/Privacy/Privacy";
import Blogs from "./pages/Blogs/Blogs";

const App = () => {
  return (
    <LanguageProvider>
      <Main />
    </LanguageProvider>
  );
};

const Main = () => {
  const { locale, langDir } = useLanguage();
  // useEffect(() => {
  //   Aos.init({
  //     once: true,
  //     disable: "phone",
  //     duration: 500,
  //     easing: "ease-out-cubic",
  //   });
  // }, []);

  return (
    <div
      lang={locale}
      dir={langDir}
      className={`[&:lang(en)]:font-inter [&:lang(ar)]:font-almarai font-inter tracking-tight text-gray-900 antialiased`}
    >
      <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFoundPage />} />
          <Route path="/our-services" element={<Services />} />
          <Route
            path="/our-services/desktop-development"
            element={<Desktopdevelopment />}
          />
          <Route
            path="/our-services/electronic-Systems"
            element={<ElectronicSystems />}
          />
          <Route path="/our-services/it-support" element={<Itsupport />} />
          <Route
            path="/our-services/mobile-app-development"
            element={<Mobileappdevelopment />}
          />
          <Route path="/our-services/ui-ux-design" element={<Uiuxdesign />} />
          <Route
            path="/our-services/web-app-hosting"
            element={<WebAppHosting />}
          />
          <Route
            path="/our-services/web-development"
            element={<Webdevelopment />}
          />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
