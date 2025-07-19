import ReadyComponent from "./readyComponent";
import { useTranslation } from "react-i18next";

function Mobile() {
  const { t } = useTranslation();
  return (
    <div className=" max-[600px]:pb-4 sm:pb-2 sm:pt-40 md:pt-40">
      <div className="relative overflow-hidden  p-10 max-[600px]:pt-16   ">
        <div className="m-auto my-10 md:my-2 w-5/6  max-[600px]:w-full ">
          <h1 className="mb-6   text-center text-xl font-bold leading-4  max-[600px]:text-2xl md:text-5xl      ">
            {t("Services.mobile-app-development.title")}
          </h1>
          <p className="p-1 text-center ">
            {t("Services.mobile-app-development.sub-title")}
          </p>
        </div>
        {/* <div className=" lg:block lg:absolute lg:top-0 lg:left-0 lg:w-1/2 lg:h-full lg:bg-gray-50"/> */}
        <div className="px-6 py-4 max-[600px]:w-full max-[600px]:p-0">
          <p className="border-gray-900d m-auto w-1/2 border-b-2 border-gray-800 p-2 text-center text-xl font-semibold text-gray-900  max-[600px]:w-full ">
            {t("Services.mobile-app-development.questions")}
          </p>
        </div>
        <div
          className=" grid grid-cols-2 max-[600px]:w-80 max-[600px]:grid-cols-1 max-[600px]:py-8   
      lg:pt-8 "
        >
          {/* custom desgin */}
          <div className="relative p-4 ">
            <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/mobile/mobile 03.webp"
                }
                width={35}
              />

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.mobile-app-development.timeline-elements.Attractive-User-Interface-Design"
                )}
              </h3>
            </div>

            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.mobile-app-development.timeline-elements.textAttractive-User-Interface-Design"
              )}
            </p>
          </div>
          <div />

          {/* Responsive Development */}
          <div />
          <div className="relative p-4 ">
            <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/mobile/mobile 02.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.mobile-app-development.timeline-elements.Cross-Platform-Development"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.mobile-app-development.timeline-elements.textCross-Platform-Development"
              )}
            </p>
          </div>
          {/* Modern-Technologies */}
          <div className="relative p-4 ">
            <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/mobile/mobile 01.webp"
                }
                width={35}
              />

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.mobile-app-development.timeline-elements.Modern-Technologies"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.mobile-app-development.timeline-elements.textModern-Technologies"
              )}
            </p>
          </div>
          <div />
          <div />
          {/* Search-Engine-Optimization" */}
          <div className="relative p-4 ">
            <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/mobile/Mask group (5).webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.mobile-app-development.timeline-elements.Performance-Optimization"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.mobile-app-development.timeline-elements.textPerformance-Optimization"
              )}
            </p>
          </div>
          <div />
          <div />

          {/* Data-Security */}

          <div className="relative p-4 ">
            <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/mobile/mobile 06.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.mobile-app-development.timeline-elements.Security-and-Data-Protection"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.mobile-app-development.timeline-elements.textSecurity-and-Data-Protection"
              )}
            </p>
          </div>

          {/* Support-and-Maintenance */}
          <div />
          <div />

          <div className="relative p-4 ">
            <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/mobile/mobile 04.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.mobile-app-development.timeline-elements.Support-and-Maintenance"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.mobile-app-development.timeline-elements.textSupport-and-Maintenance"
              )}
            </p>
          </div>
          {/* Performance-Analysis */}
          <div />
          <div />
          <div className="relative p-4 ">
            <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/mobile/mobile 05.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.mobile-app-development.timeline-elements.Data-Analysis"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.mobile-app-development.timeline-elements.textData-Analysis"
              )}
            </p>
          </div>

          {/* Support-and-Maintenance */}
          <div />
          <div />
        </div>
      </div>
      <ReadyComponent />
    </div>
  );
}

export default Mobile;
