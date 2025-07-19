import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

import Logo from "./logo";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer({ border = true }) {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="max-w-6xl px-4 pb-4 mx-auto sm:px-6 ">
        {/* Top area: Blocks */}
        <div
          className={`grid grid-cols-2 gap-x-4 gap-y-8  py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]"
              : ""
          } `}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-3 max-[600px]:col-span-2  max-[600px]:hidden ">
            <Logo width={150} />
            <p className="text-sm text-gray-600">{t("footer.allright")}</p>
          </div>

          {/* 2rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-6 lg:col-span-2 ">
            <h3 className="text-sm font-medium">{t("footer.company")}</h3>
            <ul className="space-y-2 text-sm ">
              <li>
                <NavLink
                  title="blog"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/blog`}
                >
                  {t("footer.blog")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="career"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/contact`}
                >
                  {t("footer.career")}
                </NavLink>
              </li>
            </ul>
          </div>

          {/* 3th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-6 lg:col-span-2 ">
            <h3 className="text-sm font-medium ">{t("Services.title")}</h3>
            <ul className="space-y-2 text-sm ">
              <li className="">
                <NavLink
                  title="web development"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/our-services/web-development`}
                >
                  {t("Services.ourServicesGrid.WebDevelopment")}
                </NavLink>
              </li>

              <li className="">
                <NavLink
                  title="Mobile App "
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/our-services/mobile-app-development`}
                >
                  {t("Services.ourServicesGrid.MobileApp")}
                </NavLink>
              </li>

              <li className="">
                <NavLink
                  title="Desktop App "
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/our-services/desktop-development`}
                >
                  {t("Services.ourServicesGrid.Desktop")}
                </NavLink>
              </li>
            </ul>
          </div>
          {/* 4rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-6 lg:col-span-2 ">
            <h3 className="text-sm font-medium ">{t("Services.title2")}</h3>
            <ul className="space-y-2 text-sm ">
              <li className="">
                <NavLink
                  title="hosting  "
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/our-services/web-app-hosting`}
                >
                  {t("Services.ourServicesGrid.hosting")}
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  title="UI UX"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/our-services/ui-ux-design`}
                >
                  {t("Services.ourServicesGrid.UIUX")}
                </NavLink>
              </li>

              <li className="">
                <NavLink
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/our-services/it-support`}
                >
                  {t("Services.ourServicesGrid.ITSupport")}
                </NavLink>
              </li>
              <li className="">
                <NavLink
                  title="electronic-Systems"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/our-services/electronic-Systems`}
                >
                  {t("Services.ourServicesGrid.AdministrativeSystems")}
                </NavLink>
              </li>
              {/*  */}
            </ul>
          </div>
          {/* 4rd block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-6 lg:col-span-2 ">
            <h3 className="text-sm font-medium">{t("footer.Resources")}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink
                  title="Terms"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/terms`}
                >
                  {t("footer.Terms")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="privacy policy"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className="text-gray-600 transition hover:text-gray-900"
                  to={`/privacy-policy`}
                >
                  {t("footer.Privacy")}
                </NavLink>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-6 lg:col-span-1  max-[600px]:hidden">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <a
                  title="Instagram"
                  target="_blank"
                  className="flex items-center justify-center text-xl text-blue-500 transition hover:text-blue-600"
                  href="https://www.instagram.com/spike.code1/"
                  rel="noreferrer"
                >
                  <Instagram size={16} />
                </a>
              </li>
              <li>
                <a
                  title="Linkedin"
                  target="_blank"
                  className="flex items-center justify-center text-xl text-blue-500 transition hover:text-blue-600"
                  href="https://www.linkedin.com/company/spikecode-modern-software-solutions"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                </a>
              </li>
              <li>
                <a
                  title="Facebook"
                  target="_blank"
                  className="flex items-center justify-center text-xl text-blue-500 transition hover:text-blue-600"
                  href="https://www.facebook.com/profile.php?id=61566742430080"
                  rel="noreferrer"
                >
                  <Facebook size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-4 md:hidden sm:hidden lg:hidden xl:hidden">
          <div className="space-y-2 ">
            <Logo width={150} />
          </div>
          <div className="space-y-2 ">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <a
                  title="Instagram"
                  target="_blank"
                  className="flex items-center justify-center text-xl text-blue-500 transition hover:text-blue-600"
                  href="https://www.instagram.com/spike.code1/"
                  rel="noreferrer"
                >
                  <Instagram size={16} />
                </a>
              </li>
              <li>
                <a
                  title="Linkedin"
                  target="_blank"
                  className="flex items-center justify-center text-xl text-blue-500 transition hover:text-blue-600"
                  href="https://www.linkedin.com/company/spikecode-modern-software-solutions"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                </a>
              </li>
              <li>
                <a
                  title="Facebook "
                  target="_blank"
                  className="flex items-center justify-center text-xl text-blue-500 transition hover:text-blue-600"
                  href="https://www.facebook.com/profile.php?id=61566742430080"
                  rel="noreferrer"
                >
                  <Facebook size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative w-full -mt-16 h-60">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center md:text-[348px] max-[600px]:text-[150px] max-[600px]:bottom-0  font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['SPIKE'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['SPIKE'] after:[text-shadow:0_1px_0_white]  spike"></div>
        {/* Glow */}

        <div className="absolute bottom-0 -translate-x-1/2 left-1/2 translate-y-2/3">
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div>
    </footer>
  );
}
