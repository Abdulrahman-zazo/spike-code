import { useTranslation } from "react-i18next";

import ReadyComponent from "./readyComponent";

function ItSupport() {
  const { t } = useTranslation();

  return (
    <div className=" max-[600px]:pb-4 sm:pb-2 sm:pt-40 md:pt-40">
      <div className="relative overflow-hidden  p-10 max-[600px]:pt-16   ">
        <div className="m-auto my-10 md:my-2 w-5/6  max-[600px]:w-full ">
          <h1 className="mb-6  text-center text-xl font-bold leading-4  max-[600px]:text-2xl md:text-5xl">
            {t("Services.IT-Support-Service.title")}
          </h1>
          <p className="p-1 text-center ">
            {t("Services.IT-Support-Service.sub-title")}
          </p>
        </div>
        {/* <div className=" lg:block lg:absolute lg:top-0 lg:left-0 lg:w-1/2 lg:h-full lg:bg-gray-50"/> */}
        <div className="px-6 py-4 max-[600px]:w-full max-[600px]:p-0">
          <p className="border-gray-900d m-auto w-1/2 border-b-2 border-gray-800 p-2 text-center text-xl font-semibold text-gray-900  max-[600px]:w-full ">
            {t("Services.IT-Support-Service.questions")}
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
                  "https://blogsbackend.spikecode.net/website/img/icons/IT Support Service/IT Support Service 03.webp"
                }
                width={35}
              />

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.IT-Support-Service.timeline-elements.Technical-Issue-Resolution"
                )}
              </h3>
            </div>

            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.IT-Support-Service.timeline-elements.textTechnical-Issue-Resolution"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/IT Support Service/IT Support Service 01.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.IT-Support-Service.timeline-elements.Maintenance-and-Support"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.IT-Support-Service.timeline-elements.textMaintenance-and-Support"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/IT Support Service/IT Support Service 07.webp"
                }
                width={35}
              />

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.IT-Support-Service.timeline-elements.Network-Management"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.IT-Support-Service.timeline-elements.textNetwork-Management"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/IT Support Service/IT Support Service 04.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.IT-Support-Service.timeline-elements.User-Training"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.IT-Support-Service.timeline-elements.textUser-Training"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/IT Support Service/IT Support Service 08.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.IT-Support-Service.timeline-elements.Data-Recovery"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.IT-Support-Service.timeline-elements.textData-Recovery"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/IT Support Service/IT Support Service 06.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.IT-Support-Service.timeline-elements.Remote-Support"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.IT-Support-Service.timeline-elements.textRemote-Support"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/IT Support Service/IT Support Service 02.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.IT-Support-Service.timeline-elements.Information-Systems-Management"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.IT-Support-Service.timeline-elements.textInformation-Systems-Management"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/IT Support Service/IT Support Service 05.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.IT-Support-Service.timeline-elements.Incident-Handling"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.IT-Support-Service.timeline-elements.textIncident-Handling"
              )}
            </p>
          </div>
          {/* Performance-Analysis */}
          <div />
          <div />
        </div>
      </div>
      <ReadyComponent />
    </div>
  );
}

export default ItSupport;
