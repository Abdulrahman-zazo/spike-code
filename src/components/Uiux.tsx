import ReadyComponent from "./readyComponent";
import { useTranslation } from "react-i18next";

function Uiux() {
  const { t } = useTranslation();
  return (
    <div className=" max-[600px]:pb-4 sm:pb-2 sm:pt-40 md:pt-40">
      <div className="relative overflow-hidden  p-10 max-[600px]:pt-16 [&:lang(ar)]:font-almarai [&:lang(en)]:font-inter">
        <div className="m-auto my-10 w-5/6  max-[600px]:w-full ">
          <h1 className="mb-6 border-y text-center text-xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] max-[600px]:text-2xl md:text-5xl md:leading-snug [&:lang(ar)]:font-almarai  [&:lang(en)]:font-inter">
            {t("Services.UI/UX-Design.title")}
          </h1>
          <p className="p-1 text-center ">
            {t("Services.UI/UX-Design.sub-title")}
          </p>
        </div>
        {/* <div className=" lg:block lg:absolute lg:top-0 lg:left-0 lg:w-1/2 lg:h-full lg:bg-gray-50"></div> */}
        <div className="px-6 py-4 max-[600px]:w-full max-[600px]:p-0">
          <p className="border-gray-900d m-auto w-1/2 border-b-2 border-gray-800 p-2 text-center text-xl font-semibold text-gray-900  max-[600px]:w-full ">
            {t("Services.UI/UX-Design.questions")}
          </p>
        </div>
        <div
          className=" grid grid-cols-2 max-[600px]:w-80 max-[600px]:grid-cols-1 max-[600px]:py-8   
      lg:pt-8 "
        >
          {/* custom desgin */}
          <div
            className="relative p-4  "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className=" flex place-items-start gap-4 rounded-full text-sm font-bold text-white">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/UI-UX/Mask group-4.webp"
                }
                width={35}
              />

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.UI/UX-Design.timeline-elements.Deep-User-Understanding"
                )}
              </h3>
            </div>

            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.UI/UX-Design.timeline-elements.textDeep-User-Understanding"
              )}
            </p>
          </div>
          <div />

          {/* Responsive Development */}
          <div />
          <div
            className="relative p-4 "
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className=" flex place-items-start gap-4 rounded-full text-sm font-bold text-white">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/UI-UX/Mask group-3.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.UI/UX-Design.timeline-elements.Beautiful-and-Functional-Design"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.UI/UX-Design.timeline-elements.textBeautiful-and-Functional-Design"
              )}
            </p>
          </div>
          {/* Modern-Technologies */}
          <div
            className="relative p-4 "
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className=" flex place-items-start gap-4 rounded-full text-sm font-bold text-white">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/UI-UX/Mask group-6.webp"
                }
                width={35}
              />

              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.UI/UX-Design.timeline-elements.Seamless-User-Journeys"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.UI/UX-Design.timeline-elements.textSeamless-User-Journeys"
              )}
            </p>
          </div>
          <div />
          <div />
          {/* Search-Engine-Optimization" */}
          <div
            className="relative p-4 "
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className=" flex place-items-start gap-4 rounded-full text-sm font-bold text-white">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/UI-UX/Mask group-1.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.UI/UX-Design.timeline-elements.Continuous-Testing-and-Refinement"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.UI/UX-Design.timeline-elements.textContinuous-Testing-and-Refinement"
              )}
            </p>
          </div>
          <div />
          <div />

          {/* Data-Security */}

          <div
            className="relative p-4 "
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className=" flex place-items-start gap-4 rounded-full text-sm font-bold text-white">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/UI-UX/Mask group-2.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t("Services.UI/UX-Design.timeline-elements.Responsive-Design")}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.UI/UX-Design.timeline-elements.textResponsive-Design"
              )}
            </p>
          </div>

          {/* Support-and-Maintenance */}
          <div />
          <div />

          <div
            className="relative p-4 "
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <div className=" flex place-items-start gap-4 rounded-full text-sm font-bold text-white">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/UI-UX/Mask group.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.UI/UX-Design.timeline-elements.Close-Collaboration"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.UI/UX-Design.timeline-elements.textClose-Collaboration"
              )}
            </p>
          </div>
          {/* Performance-Analysis */}
          <div />
          <div />
          <div
            className="relative p-4 "
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <div className=" flex place-items-start gap-4 rounded-full text-sm font-bold text-white">
              <img
                alt="coustom desgin"
                height={35}
                src={
                  "https://blogsbackend.spikecode.net/website/img/icons/UI-UX/Mask group-5.webp"
                }
                width={35}
              />
              <h3 className="mt-1 text-lg font-semibold text-gray-900">
                {t(
                  "Services.UI/UX-Design.timeline-elements.Innovative-Solutions"
                )}
              </h3>
            </div>
            <p className="mt-2 text-base text-gray-500">
              {t(
                "Services.UI/UX-Design.timeline-elements.textInnovative-Solutions"
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

export default Uiux;
