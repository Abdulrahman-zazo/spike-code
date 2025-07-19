import { BiSupport } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiPhoneCallThin } from "react-icons/pi";
import { useTranslation } from "react-i18next";
import Cta from "./cta";
import { NavLink } from "react-router";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <div className="pb-2 text-center sm:pb-1 [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai max-[600px]:pt-28">
        <h1
          className="mb-6 border-y max-[600px]:py-2 text-2xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai leading-4"
          data-aos="zoom-y-out"
          data-aos-delay={150}
        >
          {t("contactComponent.titleContact")}
        </h1>
        <div className="mb-8 mx-auto max-w-3xl [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai">
          <div className="relative before:absolute before:inset-0 ">
            <div
              className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay={450}
            >
              <p
                className=" text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {t("contactComponent.subtitleContact")}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mx-auto max-[600px]:flex-col items-center mb-14 [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai [&:lang(en)]:text-left [&:lang(ar)]:text-right">
          <div className="px-10 py-6 border border-spacing-1 border-gray-300 rounded-md m-4 max-[600px]:w-80 mb-4 max-[600px]:mb-6">
            <div>
              <IoChatbubblesOutline className="p-2 border border-spacing-1 border-gray-300 rounded-md text-4xl mb-8" />
            </div>
            <h1
              className="text-xl text-gray-900 font-semibold"
              data-aos="zoom-y-out"
            >
              {t("contactComponent.sales")}
            </h1>
            <span className="text-sm text-gray-500" data-aos="zoom-y-out">
              {t("contactComponent.textsales")}
            </span>
            <br />
            <NavLink
              title="sales@spikecode.net"
              className="text-md text-gray-800 text underline"
              to="mailto:sales@spikecode.net"
            >
              sales@spikecode.net
            </NavLink>
          </div>
          <div className="px-10 py-6 border border-spacing-1 border-gray-300 rounded-md m-4 max-[600px]:w-80 mb-4 max-[600px]:mb-6">
            <div>
              <BiSupport className="p-2 border border-spacing-1 border-gray-300 rounded-md text-4xl mb-8" />
            </div>
            <h1
              className="text-xl text-gray-900 font-semibold"
              data-aos="zoom-y-out"
            >
              {t("contactComponent.support")}
            </h1>
            <span className="text-sm text-gray-500" data-aos="zoom-y-out">
              {t("contactComponent.textsupport")}
            </span>
            <br />
            <NavLink
              title=" support@spikecode.net"
              className="text-md text-gray-800 text underline"
              to="mailto:support@spikecode.net"
            >
              support@spikecode.net
            </NavLink>
          </div>
          <div className="px-10 py-6 border border-spacing-1 border-gray-300 rounded-md m-4 max-[600px]:w-80 mb-4 max-[600px]:mb-6">
            <div>
              <CiLocationOn className="p-2 border border-spacing-1 border-gray-300 rounded-md text-4xl mb-8" />
            </div>
            <h1
              className="text-xl text-gray-900 font-semibold"
              data-aos="zoom-y-out"
            >
              {t("contactComponent.visit")}
            </h1>
            <span className="text-sm text-gray-500" data-aos="zoom-y-out">
              {t("contactComponent.textvisit")}
            </span>
            <br />
            <NavLink
              title="  view on Google Maps"
              className="text-md text-gray-800 text underline"
              target="_blank"
              rel="noreferrer"
              to="https://www.google.com/maps/place/Spike+Code/@36.2063229,37.1398701,21z/data=!4m6!3m5!1s0x152ff90001c4e143:0xd5723a19166d8649!8m2!3d36.2063036!4d37.1397411!16s%2Fg%2F11ln_15ny0?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
            >
              view on Google Maps
            </NavLink>
          </div>
          <div className="px-10 py-6 border border-spacing-1 border-gray-300 rounded-md m-4 max-[600px]:w-80 mb-4 max-[600px]:mb-6">
            <div>
              <PiPhoneCallThin className="p-2 border border-spacing-1 border-gray-300 rounded-md text-4xl mb-8" />
            </div>
            <h1
              className="text-xl text-gray-900 font-semibold"
              data-aos="zoom-y-out"
            >
              {t("contactComponent.call")}
            </h1>
            <span
              className="text-sm text-gray-500"
              data-aos="zoom-y-out"
              // dangerouslySetInnerHTML={{ __html: t.raw("textcall") }}
            ></span>
            <br />
            <NavLink
              title="call now"
              className="text-md text-gray-800 text underline"
              to="tel:+963930180758"
            >
              {t("contactComponent.number")}
            </NavLink>
          </div>
        </div>

        <Cta bg={"bg-gray-900"} />
      </div>
    </>
  );
}
