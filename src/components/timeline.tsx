import "../css/additional-styles/timeline.css";
import { useTranslation } from "react-i18next";

function Timeline() {
  const { t } = useTranslation();

  return (
    <div className="relative p-10  max-[600px]:pt-16 overflow-hidden  ">
      <div className="w-5/6 m-auto my-10  max-[600px]:w-full ">
        <h1 className="mb-6 text-center  border-y text-xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-5xl   leading-4  max-[600px]:text-2xl">
          {t("Services.web-development.title")}
        </h1>
        <p className="p-1 text-center ">
          {t("Services.web-development.sub-title")}
        </p>
      </div>
      {/* <div className=" lg:block lg:absolute lg:top-0 lg:left-0 lg:w-1/2 lg:h-full lg:bg-gray-50"></div> */}
      <div className="px-6 py-4 max-[600px]:w-full max-[600px]:p-0">
        <p className="text-gray-900 font-semibold text-center text-xl border-b-2 border-gray-800 p-2 w-1/2 m-auto border-gray-900d  max-[600px]:w-full ">
          {t("Services.web-development.questions")}
        </p>
      </div>
      <div
        className=" lg:pt-8 grid grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:py-8   
      max-[600px]:w-80 "
      >
        {/* custom desgin */}
        <div className="relative p-4 ">
          <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
            <img
              src={
                "https://blogsbackend.spikecode.net/website/img/icons/custom.webp"
              }
              alt="coustom desgin"
              width={35}
              height={35}
            />

            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {t("Services.web-development.timeline-elements.Custom-Design")}
            </h3>
          </div>

          <p className="mt-2 text-base text-gray-500">
            {t("Services.web-development.timeline-elements.textCustom-Design")}
          </p>
        </div>
        <div></div>

        {/* Responsive Development */}
        <div></div>
        <div className="relative p-4 ">
          <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
            <img
              src={
                "https://blogsbackend.spikecode.net/website/img/icons/Responsive.webp"
              }
              alt="coustom desgin"
              width={35}
              height={35}
            />
            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {t(
                "Services.web-development.timeline-elements.Responsive-Development"
              )}
            </h3>
          </div>
          <p className="mt-2 text-base text-gray-500">
            {t(
              "Services.web-development.timeline-elements.textResponsive-Development"
            )}
          </p>
        </div>
        {/* Modern-Technologies */}
        <div className="relative p-4 ">
          <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
            <img
              src={
                "https://blogsbackend.spikecode.net/website/img/icons/Modern-Technologies.webp"
              }
              alt="coustom desgin"
              width={35}
              height={35}
            />

            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {t(
                "Services.web-development.timeline-elements.Modern-Technologies"
              )}
            </h3>
          </div>
          <p className="mt-2 text-base text-gray-500">
            {t(
              "Services.web-development.timeline-elements.textModern-Technologies"
            )}
          </p>
        </div>
        <div></div>
        <div></div>
        {/* Search-Engine-Optimization" */}
        <div className="relative p-4 ">
          <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
            <img
              src={
                "https://blogsbackend.spikecode.net/website/img/icons/Search-Engine-Optimization.webp"
              }
              alt="coustom desgin"
              width={35}
              height={35}
            />
            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {t(
                "Services.web-development.timeline-elements.Search-Engine-Optimization"
              )}
            </h3>
          </div>
          <p className="mt-2 text-base text-gray-500">
            {t(
              "Services.web-development.timeline-elements.textSearch-Engine-Optimization"
            )}
          </p>
        </div>
        <div></div>
        <div></div>

        {/* Data-Security */}

        <div className="relative p-4 ">
          <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
            <img
              src={
                "https://blogsbackend.spikecode.net/website/img/icons/Data-Security.webp"
              }
              alt="coustom desgin"
              width={35}
              height={35}
            />
            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {t("Services.web-development.timeline-elements.Data-Security")}
            </h3>
          </div>
          <p className="mt-2 text-base text-gray-500">
            {t("Services.web-development.timeline-elements.textData-Security")}
          </p>
        </div>

        {/* Support-and-Maintenance */}
        <div></div>
        <div></div>

        <div className="relative p-4 ">
          <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
            <img
              src={
                "https://blogsbackend.spikecode.net/website/img/icons/Support-and-Maintenance.webp"
              }
              alt="coustom desgin"
              width={35}
              height={35}
            />
            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {t(
                "Services.web-development.timeline-elements.Support-and-Maintenance"
              )}
            </h3>
          </div>
          <p className="mt-2 text-base text-gray-500">
            {t(
              "Services.web-development.timeline-elements.textSupport-and-Maintenance"
            )}
          </p>
        </div>
        {/* Performance-Analysis */}
        <div></div>
        <div></div>

        <div className="relative p-4 ">
          <div className="flex gap-4 text-sm font-bold text-white rounded-full place-items-start">
            <img
              src={
                "https://blogsbackend.spikecode.net/website/img/icons/Performance-Analysis.webp"
              }
              alt="coustom desgin"
              width={35}
              height={35}
            />
            <h3 className="mt-1 text-lg font-semibold text-gray-900">
              {t(
                "Services.web-development.timeline-elements.Performance-Analysis"
              )}
            </h3>
          </div>
          <p className="mt-2 text-base text-gray-500">
            {t(
              "Services.web-development.timeline-elements.textPerformance-Analysis"
            )}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Timeline;
