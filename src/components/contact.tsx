import { useTranslation } from "react-i18next";
import Cta from "./cta";
import { NavLink } from "react-router";
import {
  MapPin,
  MessageSquareText,
  PhoneCall,
  UserRoundCog,
} from "lucide-react";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <div className="pb-2 text-center sm:pb-1   max-[600px]:pt-28">
        <h1 className="mb-6 border-y p-8 text-2xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl leading-4">
          {t("contactComponent.titleContact")}
        </h1>
        <div className="max-w-3xl mx-auto mb-8 ">
          <div className="relative before:absolute before:inset-0 ">
            <div className="max-w-xs mx-auto sm:flex sm:max-w-none sm:justify-center">
              <p className="text-lg text-gray-700 ">
                {t("contactComponent.subtitleContact")}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto max-[600px]:flex-col items-center mb-14 w-[80%]  [&:lang(en)]:text-left [&:lang(ar)]:text-right">
          <div className="px-4 py-6 border border-spacing-1 border-gray-300 rounded-md  max-[600px]:w-80 mb-4 max-[600px]:mb-6">
            <div className="p-2 ">
              <MessageSquareText size={24} className="mb-4 " />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              {t("contactComponent.sales")}
            </h1>
            <span className="text-sm text-gray-500">
              {t("contactComponent.textsales")}
            </span>
            <br />
            <NavLink
              title="sales@spikecode.net"
              className="text-gray-800 underline text-md text"
              to="mailto:sales@spikecode.net"
            >
              sales@spikecode.net
            </NavLink>
          </div>
          <div className="px-4 py-6 border border-spacing-1 border-gray-300 rounded-md  max-[600px]:w-80 mb-4 max-[600px]:mb-6">
            <div>
              <UserRoundCog size={24} className="mb-4 " />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              {t("contactComponent.support")}
            </h1>
            <span className="text-sm text-gray-500">
              {t("contactComponent.textsupport")}
            </span>
            <br />
            <NavLink
              title=" support@spikecode.net"
              className="text-gray-800 underline text-md text"
              to="mailto:support@spikecode.net"
            >
              support@spikecode.net
            </NavLink>
          </div>
          <div className="px-4 py-6 border border-spacing-1 border-gray-300 rounded-md  max-[600px]:w-80 mb-4 max-[600px]:mb-6">
            <div>
              <MapPin size={24} className="mb-4 " />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              {t("contactComponent.visit")}
            </h1>
            <span className="text-sm text-gray-500">
              {t("contactComponent.textvisit")}
            </span>
            <br />
            <NavLink
              title="  view on Google Maps"
              className="text-gray-800 underline text-md text"
              target="_blank"
              rel="noreferrer"
              to="https://www.google.com/maps/place/Spike+Code/@36.2063229,37.1398701,21z/data=!4m6!3m5!1s0x152ff90001c4e143:0xd5723a19166d8649!8m2!3d36.2063036!4d37.1397411!16s%2Fg%2F11ln_15ny0?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
            >
              view on Google Maps
            </NavLink>
          </div>
          <div className="px-4 py-6 border border-spacing-1 border-gray-300 rounded-md  max-[600px]:w-80 mb-4 max-[600px]:mb-6">
            <div>
              <PhoneCall size={24} className="mb-4 " />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              {t("contactComponent.call")}
            </h1>
            <span
              className="text-sm text-gray-500"

              // dangerouslySetInnerHTML={{ __html: t.raw("textcall") }}
            ></span>
            <br />
            <NavLink
              title="call now"
              className="text-gray-800 underline text-md text"
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
