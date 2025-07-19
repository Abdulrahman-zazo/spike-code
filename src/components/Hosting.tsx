import ReadyComponent from "./readyComponent";
import { useTranslation } from "react-i18next";

function Hosting() {
  const { t } = useTranslation();
  return (
    <div className=" max-[600px]:pb-4 sm:pb-2 sm:pt-40 md:pt-40">
      <div className="relative overflow-hidden  p-10 max-[600px]:pt-16   ">
        <div className="m-auto my-10 md:my-2 w-5/6  max-[600px]:w-full ">
          <h1 className="mb-6  text-center text-xl font-bold leading-4 max-[600px]:text-2xl md:text-5xl">
            {t("Services.Web-Application-Hosting.title")}
          </h1>
          <p className="p-1 text-center ">
            {t("Services.Web-Application-Hosting.sub-title")}
          </p>
        </div>
        {/* <div className=" lg:block lg:absolute lg:top-0 lg:left-0 lg:w-1/2 lg:h-full lg:bg-gray-50"></div> */}
        <div className="px-6 py-4 max-[600px]:w-full max-[600px]:p-0">
          <p className="border-gray-900d m-auto w-1/2 border-b-2 border-gray-800 p-2 text-center text-xl font-semibold text-gray-900  max-[600px]:w-full ">
            {t("Services.Web-Application-Hosting.questions")}
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
                  "https://blogsbackend.spikecode.net/website/img/icons/hosting/hosting 03.webp"
                }
                width={35}
              />

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.Web-Application-Hosting.timeline-elements.High-Performance-and-Reliability"
                )}
              </h3>
            </div>

            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.Web-Application-Hosting.timeline-elements.textHigh-Performance-and-Reliability"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/hosting/hosting 06.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.Web-Application-Hosting.timeline-elements.Advanced-Security"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.Web-Application-Hosting.timeline-elements.textAdvanced-Security"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/hosting/hosting 01.webp"
                }
                width={35}
              />

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.Web-Application-Hosting.timeline-elements.Technical-Support"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.Web-Application-Hosting.timeline-elements.textTechnical-Support"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/hosting/hosting 04.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.Web-Application-Hosting.timeline-elements.Scalability"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.Web-Application-Hosting.timeline-elements.textScalability"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/hosting/hosting 05.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.Web-Application-Hosting.timeline-elements.Easy-Management"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.Web-Application-Hosting.timeline-elements.textEasy-Management"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/hosting/hosting 02.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.Web-Application-Hosting.timeline-elements.Integration-with-Other-Services"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.Web-Application-Hosting.timeline-elements.textIntegration-with-Other-Services"
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
                  "https://blogsbackend.spikecode.net/website/img/icons/hosting/hosting 07.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.Web-Application-Hosting.timeline-elements.Advanced-Analytics"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.Web-Application-Hosting.timeline-elements.textAdvanced-Analytics"
              )}
            </p>
          </div>
          <div />
        </div>
      </div>
      <ReadyComponent />
    </div>
  );
}

export default Hosting;
