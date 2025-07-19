import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router";

export default function FeaturesPlanet() {
  const { t, i18n } = useTranslation();

  const nav = useNavigate();
  const langDir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 ">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl pb-16 mx-auto text-center md:pb-20 ">
            <h2 className="mb-6 text-2xl font-bold leading-8 text-gray-50 md:text-5xl ">
              {t("Services.title")}
            </h2>
            <p className="text-lg text-gray-400"></p>
            <div className="relative before:absolute before:inset-0 ">
              <div className="max-w-xs mx-auto sm:flex sm:max-w-none sm:justify-center">
                <p className="text-lg text-gray-400 ">
                  {t("Services.sub-title")}
                </p>
              </div>
            </div>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-20 before:scale-[.85] before:animate-[pulse_2s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <img
                  className="rounded-full bg-gray-900 w-[400px] h-[400px]  max-[600px]:w-[300px] max-[600px]:h-[300px]"
                  src={
                    "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937894/planet_nyxyhc.png"
                  }
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div>
                  <img
                    className="absolute -right-64 -top-20 -z-20 max-w-none w-[789px] h-[755px]  max-[600px]:w-[650px] max-[600px]:h-[600px]"
                    src={
                      "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937894/planet-overlay_ymh1uy.svg"
                    }
                    alt="Planet decoration"
                  />
                  <div>
                    <NavLink
                      title="our service"
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      to={`/our-services/ui-ux-design`}
                      className="cursor-pointer"
                    >
                      <img
                        className="absolute -left-28 top-16 z-10 animate-[float_2s_ease-in-out_infinite_both] duration-500 w-[253px]    max-[600px]:w-[250px] max-[600px]:object-contain max-[600px]:-left-4 max-[600px]:top-20 rounded-md"
                        src={
                          langDir === "ltr"
                            ? "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937895/planet-tag-01_onxk4l.webp"
                            : "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937896/planet-tag-01ar_vudbdu.webp"
                        }
                        alt="Tag 01"
                        width={253}
                        height={56}
                      />
                    </NavLink>
                    <NavLink
                      title="our service"
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      to={`/our-services/web-development`}
                      className="cursor-pointer"
                    >
                      <img
                        className="absolute left-56 top-7 z-10 animate-[float_2s_ease-in-out_infinite_1s_both] duration-500
                        w-[253px]   max-[600px]:w-[250px] max-[600px]:object-contain max-[600px]:left-16 max-[600px]:top-2 rounded-md"
                        src={
                          langDir === "ltr"
                            ? "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937899/planet-tag-02_dvg8lq.webp"
                            : "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937901/planet-tag-02ar_lmalx1.webp"
                        }
                        alt="Tag 02"
                        width={253}
                        height={56}
                      />
                    </NavLink>
                    <NavLink
                      title="our service"
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      to={`/our-services/web-app-hosting`}
                      className="cursor-pointer"
                    >
                      <img
                        className="absolute -left-20 bottom-24 z-10 animate-[float_2s_ease-in-out_infinite_2s_both] duration-500
                                      w-[253px]   max-[600px]:w-[250px] max-[600px]:object-contain max-[600px]:left-16 max-[600px]:top-40 rounded-md
                        "
                        src={
                          langDir === "ltr"
                            ? "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937908/planet-tag-03_n3j84b.webp"
                            : "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937902/planet-tag-03ar_blprzu.webp"
                        }
                        alt="Tag 03"
                        width={253}
                        height={56}
                      />
                    </NavLink>

                    <NavLink
                      title="our service"
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      to={`/our-services/mobile-app-development`}
                      className="cursor-pointer"
                    >
                      <img
                        className="absolute bottom-32 left-64 z-10 animate-[float_2s_ease-in-out_infinite_3s_both] duration-500
                                      w-[253px]   max-[600px]:w-[250px] max-[600px]:object-contain max-[600px]:-left-4 max-[600px]:top-60 rounded-md

                        "
                        src={
                          langDir === "ltr"
                            ? "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937906/planet-tag-04_are2zz.webp"
                            : "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937908/planet-tag-04ar_jnbkam.webp"
                        }
                        alt="Tag 04"
                        width={253}
                        height={56}
                      />
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <></>
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute  [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10   ">
            <div>
              <NavLink
                title="web development"
                to={`/our-services/web-development`}
              >
                <span>
                  <h3 className="flex items-center w-full mb-2 space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937890/Mask_group_hpbz1b.webp"
                      }
                      alt="1"
                      width={20}
                      height={20}
                      className="m-2"
                    />
                    <p>{t("Services.ourServicesGrid.WebDevelopment")}</p>
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    {t("Services.ourServicesGrid.WebDevelopmentText")}
                  </p>
                </span>
              </NavLink>

              <button
                title="see more"
                onClick={() => {
                  nav(`/our-services/web-development`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="my-4 btn group p-3 w-full rounded-lg outline-[0.2px]  text-gray-50 md:hidden sm:hidden lg:hidden xl:hidden"
              >
                {/* Fix 1: Remove unnecessary nested anchor */}
                <span className="relative inline-flex items-center">
                  {t("Services.more")}
                </span>
              </button>
            </div>

            <div>
              <NavLink
                title="mobile app development"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                to={`/our-services/mobile-app-development`}
              >
                <span>
                  <h3 className="flex items-center mb-2 space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937892/mobile_xi3qmi.webp"
                      }
                      alt="1"
                      width={20}
                      height={20}
                      className="m-2"
                    />
                    {t("Services.ourServicesGrid.MobileApp")}
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    {t("Services.ourServicesGrid.MobileAppText")}
                  </p>
                </span>
              </NavLink>

              <button
                title="see more"
                onClick={() => {
                  nav(`/our-services/mobile-app-development`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="my-4 btn group  btn group p-3 w-full  rounded-lg outline-[0.2px]  text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
              >
                <span className="relative inline-flex items-center">
                  {t("Services.more")}
                </span>
              </button>
            </div>
            <div>
              <NavLink
                title="web app hosting"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                to={`/our-services/web-app-hosting`}
              >
                <span>
                  <h3 className="flex items-center mb-2 space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937895/host_ofju2l.webp"
                      }
                      alt="1"
                      width={20}
                      height={20}
                      className="m-2"
                    />
                    {t("Services.ourServicesGrid.hosting")}
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    {t("Services.ourServicesGrid.hostingText")}
                  </p>
                </span>
              </NavLink>

              <button
                title="see more"
                onClick={() => {
                  nav(`/our-services/web-app-hosting`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="my-4 btn group  btn group p-3 w-full  rounded-lg outline-[0.2px]  text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
              >
                <span className="relative inline-flex items-center">
                  {t("Services.more")}
                </span>
              </button>
            </div>
            <div>
              <NavLink title="ui ux design" to={`/our-services/ui-ux-design`}>
                <span>
                  <h3 className="flex items-center mb-2 space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937910/ux_hpive5.webp"
                      }
                      alt="1"
                      width={20}
                      height={20}
                      className="m-2"
                    />
                    {t("Services.ourServicesGrid.UIUX")}
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    {t("Services.ourServicesGrid.UIUXText")}
                  </p>
                </span>
              </NavLink>

              <button
                title="see more"
                onClick={() => {
                  nav(`/our-services/ui-ux-design`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="my-4 btn group  btn group p-3 w-full  rounded-lg  outline-[0.2px] text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
              >
                <span className="relative inline-flex items-center">
                  {t("Services.more")}
                </span>
              </button>
            </div>
            <div>
              <NavLink
                title="desktop development"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                to={`/our-services/desktop-development`}
              >
                <span>
                  <h3 className="flex items-center mb-2 space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937891/Desktop-App-04_dsefvj.webp"
                      }
                      alt="1"
                      height={20}
                      width={20}
                      className="m-2"
                    />
                    {t("Services.ourServicesGrid.Desktop")}
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    {t("Services.ourServicesGrid.DesktopText")}
                  </p>
                </span>
              </NavLink>

              <button
                title="see more"
                onClick={() => {
                  nav(`/our-services/desktop-development`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="my-4 btn group  btn group p-3 w-full  rounded-lg outline-[0.2px]  text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
              >
                <span className="relative inline-flex items-center">
                  {t("Services.more")}
                </span>
              </button>
            </div>
            <div>
              <NavLink
                title="it support"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                to={`/our-services/it-support`}
              >
                <span>
                  <h3 className="flex items-center mb-2 space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937900/IT_Support_Service_05_ygsl4e.webp"
                      }
                      alt="1"
                      width={20}
                      height={20}
                      className="m-2"
                    />{" "}
                    {t("Services.ourServicesGrid.ITSupport")}
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    {t("Services.ourServicesGrid.ITSupportText")}
                  </p>
                </span>
              </NavLink>

              <button
                title="see more"
                onClick={() => {
                  nav(`/our-services/it-support`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="my-4 btn group  btn group p-3 w-full  rounded-lg  outline-[0.2px]  text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
              >
                <span className="relative inline-flex items-center">
                  {t("Services.more")}
                </span>
              </button>
            </div>
            <article className=" md:hidden sm:hidden lg:hidden xl:hidden"></article>
          </div>

          <div className=" mx-10 mt-10 max-[600px]:mx-6 max-[600px]:mt-0 ">
            <div>
              <NavLink
                title="electronic Systems"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
                to={`/our-services/electronic-Systems`}
              >
                <span>
                  <h3 className="flex items-center mb-2 space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937892/Electronic_Systems_02_pk1sjb.webp"
                      }
                      alt="1"
                      height={20}
                      width={20}
                      className="m-2"
                    />
                    {t("Services.ourServicesGrid.AdministrativeSystems")}
                  </h3>
                  <p className="text-[14px] text-gray-400">
                    {t("Services.ourServicesGrid.AdministrativeSystemsText")}
                  </p>
                </span>
              </NavLink>

              <button
                title="see more"
                onClick={() => {
                  nav(`/our-services/mobile-app-development`);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="my-4 btn group p-3  w-full rounded-lg outline-[0.2px]  text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
              >
                <span className="relative inline-flex items-center m-auto">
                  {t("Services.more")}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
