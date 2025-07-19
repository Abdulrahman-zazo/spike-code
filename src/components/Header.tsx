import { useState, useEffect } from "react";
import Logo from "./ui/logo";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

const Header = () => {
  const [top, setTop] = useState<boolean>(true);

  const scrollHandler = () => {
    return window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const { t } = useTranslation();

  return (
    <header className="fixed top-2 z-30 w-full md:top-6  [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai  ">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex  h-16 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          <div className="flex flex-1 items-center   ">
            <Logo width={75} />
          </div>

          <div className="flex justify-between items-center">
            <div className="md:hidden sm:hidden lg:hidden xl:hidden">
              <LocaleSwitcherSelect />
            </div>
            <button
              title={isOpen ? "close" : "open"}
              onClick={toggleMenu}
              className="m-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 lg:hidden md:hidden sm:hidden "
            >
              {isOpen ? <IoClose /> : <FaBars />}
            </button>
            <div
              className={`flex flex-col lg:flex-row items-center justify-end gap-3 ${
                isOpen ? "block" : "hidden"
              } transition-all duration-300 md:block
              max-[600px]:hidden
              `}
            >
              <ul
                aria-label="Global"
                className="mx-auto m-2 flex max-w-full items-center justify-between p-6 lg:px-8 "
              >
                <li>
                  <NavLink
                    title="Home"
                    to={`/`}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="m-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {t("header.Home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    title="our Services"
                    to={`/our-services`}
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="m-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {t("header.ourServices")}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    title="blog"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    className="m-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    to={`/blog`}
                  >
                    {t("header.blog")}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    title="contact"
                    onClick={() =>
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      })
                    }
                    to={`/contact`}
                    className="m-2 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {t("header.contact")}
                  </NavLink>
                </li>

                <LocaleSwitcherSelect />
              </ul>
            </div>
          </div>
          <div
            className={`
              md:hidden sm:hidden lg:hidden xl:hidden
              flex flex-col lg:flex-row items-center justify-end gap-3 ${
                isOpen ? "block" : "hidden"
              } transition-all duration-300 md:block  max-[600px]:absolute top-20  
              max-[600px]:p-2 left-0 w-full max-[600px]:m-auto 
              rounded-2xl bg-gray-100 px-3 shadow-lg shadow-black/[0.03]  max-[600px]:animate-fade-down  animate-duration-[800ms];
               
              `}
          >
            <ul
              aria-label="Global"
              className="mx-auto m-2 flex max-w-full items-center justify-between p-2 lg:px-8 max-[600px]:flex-col "
            >
              <li>
                <NavLink
                  title="Home"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  to={``}
                  className=" m-2 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {t("header.Home")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="our Services"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  to={`/our-services`}
                  className=" m-2 block px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                >
                  {t("header.ourServices")}
                </NavLink>
              </li>

              <li>
                <NavLink
                  title="blog"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  className=" m-2 block  px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                  to={`/blog`}
                >
                  {t("header.blog")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  title="contact"
                  onClick={() =>
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    })
                  }
                  to={`/contact`}
                  className="m-2 block  px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50   "
                >
                  {t("header.contact")}
                </NavLink>
              </li>
            </ul>
            <div className="space-y-2 sm:col-span-6 md:col-span-6 lg:col-span-1 flex flex-col items-center p-4 border-t-2">
              <ul className="flex gap-1">
                <li>
                  <a
                    title="instagram"
                    target="_blank"
                    className="text-xl flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                    href="https://www.instagram.com/spike.code1/"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    title="linnkedin"
                    target="_blank"
                    className="text-xl flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                    href="https://www.linkedin.com/company/spikecode-modern-software-solutions"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    title="facebook"
                    target="_blank"
                    className="text-xl flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                    href="https://www.facebook.com/profile.php?id=61566742430080"
                    rel="noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </li>
              </ul>
              <div className="space-y-2 sm:col-span-12 lg:col-span-3">
                <div className="text-xs text-gray-600">
                  <p>{t("footer.allright")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
