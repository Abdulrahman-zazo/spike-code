import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import PageIllustration from "./page-illustration";

export default function HeroHome() {
  const { t } = useTranslation();

  const nav = useNavigate();
  return (
    <section className="relative">
      <PageIllustration />
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="flex justify-center -space-x-2 " dir="ltr">
                <img
                  className="box-content border-2 rounded-full border-gray-50"
                  src={
                    "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937895/avatar-01_ku36iz.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 01"
                />
                <img
                  className="box-content border-2 rounded-full border-gray-50"
                  src={
                    "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937892/avatar-05_jb7szv.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 02"
                />
                <img
                  className="box-content border-2 rounded-full border-gray-50"
                  src={
                    "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937890/avatar-02_s2k350.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 03"
                />
                <img
                  className="box-content border-2 rounded-full border-gray-50"
                  src={
                    "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937890/avatar-04_nvuktt.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 04"
                />
                <img
                  className="box-content border-2 rounded-full border-gray-50"
                  src={
                    "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937889/avatar-03_hm6uwo.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1 className="py-2 my-6 text-2xl font-extrabold leading-4 sm:text-3xl md:text-5xl ">
              {t("HeroHome.title")}
              {t("HeroHome.Today")}
            </h1>
            <div className="max-w-3xl mx-auto ">
              <p className="mb-8 text-lg text-gray-700">
                {t("HeroHome.sub-title")}
              </p>

              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <button
                  title="Contact"
                  onClick={() => {
                    nav(`/contact`);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="  mb-4 py-3 px-6 rounded-lg w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                >
                  <span
                    className="relative inline-flex items-center"
                    id="About"
                  >
                    {t("HeroHome.contact")}
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="max-w-3xl mx-auto animate-fade-up">
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1] [&:lang(en)]:font-mono   ">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  SpikeCode.Net
                </span>
              </div>
              <div className=" text-gray-500  [&:lang(ar)]:pr-4  leading-relaxed max-[600px]:text-sm max-[600px]:p-4">
                <span className="text-gray-200 ">
                  {t("HeroHome.withSpikeCode.text0")}
                </span>{" "}
                <span className="">{t("HeroHome.withSpikeCode.text1")}</span>
                <br />
                <span className="">
                  {t("HeroHome.withSpikeCode.text2")}

                  <br />
                </span>{" "}
                <span className="">{t("HeroHome.withSpikeCode.text3")}</span>
                <br />
                <br />
                <span className="text-gray-200 ">
                  {t("HeroHome.withSpikeCode.text4")}
                </span>
                <br />
                <span className="">
                  {t("HeroHome.withSpikeCode.text5")}
                  <br />
                  {t("HeroHome.withSpikeCode.text6")}
                  <br />
                  {t("HeroHome.withSpikeCode.text7")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
