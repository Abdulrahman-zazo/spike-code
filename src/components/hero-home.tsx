import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

import PageIllustration from "./page-illustration";

export default function HeroHome() {
  const { t } = useTranslation();

  const nav = useNavigate();
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              // data-aos="zoom-y-out"
            >
              <div className=" flex justify-center -space-x-2 " dir="ltr">
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://blogsbackend.spikecode.net/website/img/avatar-01.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 01"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://blogsbackend.spikecode.net/website/img/avatar-02.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 02"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://blogsbackend.spikecode.net/website/img/avatar-03.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 03"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://blogsbackend.spikecode.net/website/img/avatar-04.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 04"
                />
                <img
                  className="box-content rounded-full border-2 border-gray-50"
                  src={
                    "https://blogsbackend.spikecode.net/website/img/avatar-05.webp"
                  }
                  width={40}
                  height={40}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai leading-4 max-[600px]:text-2xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {t("HeroHome.title")} <br className="" />
              {t("HeroHome.Today")}
            </h1>
            <div className="mx-auto max-w-3xl [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {t("HeroHome.sub-title")}
              </p>

              <div
                className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay={450}
              >
                <button
                  title="Contact"
                  onClick={() => {
                    nav(`/contact`);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  className="  mb-4 p-3 rounded-lg w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
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
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1] [&:lang(en)]:font-mono [&:lang(ar)]:font-almarai">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  SpikeCode.Net
                </span>
              </div>
              <div className=" text-gray-500 [&_span]:opacity-0 [&:lang(ar)]:pr-4  leading-relaxed max-[600px]:text-sm max-[600px]:p-4">
                <span className="animate-[code-1_25s_forwards] delay-0 text-gray-200 ">
                  {t("HeroHome.withSpikeCode.text0")}
                </span>{" "}
                <span className="animate-[code-2_25s_forwards] delay-0">
                  {t("HeroHome.withSpikeCode.text1")}
                </span>
                <br />
                <span className="animate-[code-3_25s_forwards]  delay-0">
                  {t("HeroHome.withSpikeCode.text2")}

                  <br />
                </span>{" "}
                <span className="animate-[code-4_25s_forwards] ">
                  {t("HeroHome.withSpikeCode.text3")}
                </span>
                <br />
                <br />
                <span className="animate-[code-5_25s_forwards]  text-gray-200">
                  {t("HeroHome.withSpikeCode.text4")}
                </span>
                <br />
                <span className="animate-[code-6_25s_forwards] ">
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
