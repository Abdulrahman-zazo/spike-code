import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router";

export default function FeaturesPlanet() {
  const { t, i18n } = useTranslation();

  const nav = useNavigate();
  const langDir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20 ">
            <h1
              className="mb-6 border-y text-2xl font-bold  text-gray-50 md:text-5xl [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai leading-8  [border-image:linear-gradient(to_right,transparent,theme(colors.slate.500/.8),transparent)1] "
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {t("Services.title")}
            </h1>
            <p
              className="text-lg text-gray-400"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            ></p>
            <div className="relative before:absolute before:inset-0 ">
              <div
                className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <p
                  className=" text-lg text-gray-400"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  {t("Services.sub-title")}
                </p>
              </div>
            </div>
          </div>

          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-20 before:scale-[.85] before:animate-[pulse_2s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
                <img
                  className="rounded-full bg-gray-900 w-[400px] h-[400px]  max-[600px]:w-[300px] max-[600px]:h-[300px]"
                  src={
                    "https://blogsbackend.spikecode.net/website/img/planet.png"
                  }
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div>
                  <img
                    className="absolute -right-64 -top-20 -z-20 max-w-none w-[789px] h-[755px]  max-[600px]:w-[650px] max-[600px]:h-[600px]"
                    src={
                      "https://blogsbackend.spikecode.net/website/img/planet-overlay.svg"
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
                            ? "https://blogsbackend.spikecode.net/website/img/planet-tag-01.webp"
                            : "https://blogsbackend.spikecode.net/website/img/planet-tag-01ar.webp"
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
                            ? "https://blogsbackend.spikecode.net/website/img/planet-tag-02.webp"
                            : "https://blogsbackend.spikecode.net/website/img/planet-tag-02ar.webp"
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
                            ? "https://blogsbackend.spikecode.net/website/img/planet-tag-03.webp"
                            : "https://blogsbackend.spikecode.net/website/img/planet-tag-03ar.webp"
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
                            ? "https://blogsbackend.spikecode.net/website/img/planet-tag-04.webp"
                            : "https://blogsbackend.spikecode.net/website/img/planet-tag-04ar.webp"
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
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute  [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10 [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai ">
            <div>
              <NavLink
                title="web development"
                to={`/our-services/web-development`}
              >
                <span>
                  <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200 w-full">
                    <img
                      src={
                        "https://blogsbackend.spikecode.net/website/img/Mask group.webp"
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
                className="my-4 btn group p-3 w-full rounded-lg outline-[0.2px] outline text-gray-50 md:hidden sm:hidden lg:hidden xl:hidden"
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
                  <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://blogsbackend.spikecode.net/website/img/mobile.webp"
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
                className="my-4 btn group  btn group p-3 w-full  rounded-lg outline-[0.2px] outline text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
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
                  <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://blogsbackend.spikecode.net/website/img/host.webp"
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
                className="my-4 btn group  btn group p-3 w-full  rounded-lg outline-[0.2px] outline text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
                href={`/our-services/web-app-hosting`}
              >
                <span className="relative inline-flex items-center">
                  {t("Services.more")}
                </span>
              </button>
            </div>
            <div>
              <NavLink
                title="ui ux design"
                to={`/our-services/ui-ux-design`}
                onClick={window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })}
              >
                <span>
                  <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://blogsbackend.spikecode.net/website/img/ux.webp"
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
                className="my-4 btn group  btn group p-3 w-full  rounded-lg  outline-[0.2px] outline text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
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
                  <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://blogsbackend.spikecode.net/website/img/Desktop-App-04.webp"
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
                className="my-4 btn group  btn group p-3 w-full  rounded-lg outline-[0.2px] outline text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
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
                  <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://blogsbackend.spikecode.net/website/img/IT Support Service 05.webp"
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
                className="my-4 btn group  btn group p-3 w-full  rounded-lg  outline-[0.2px] outline text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
              >
                <span className="relative inline-flex items-center">
                  {t("Services.more")}
                </span>
              </button>
            </div>
            <article className=" md:hidden sm:hidden lg:hidden xl:hidden "></article>
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
                  <h3 className="mb-2 flex  items-center space-x-2 font-medium text-gray-200">
                    <img
                      src={
                        "https://blogsbackend.spikecode.net/website/img/Electronic Systems 02.webp"
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
                className="my-4 btn group p-3  w-full rounded-lg outline-[0.2px] outline text-gray-50    md:hidden sm:hidden lg:hidden xl:hidden"
              >
                <span className="relative m-auto inline-flex items-center">
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
