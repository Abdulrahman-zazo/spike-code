import { useTranslation } from "react-i18next";
import CircleContact from "./circleContact";
import { NavLink } from "react-router";

function ReadyComponent() {
  const { t } = useTranslation();

  return (
    <div className="relative my-8 overflow-hidden text-center bg-gray-900 shadow-sm rounded-2xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl">
      <div className=" p-8 md:my-8 max-[600px]:my-10 sm:h-[500px]  w-full text-center md:pb-16    ">
        <div className="relative sm:w-80 ">
          <div className=" bg-gray-900  sm:absolute sm:-top-16  md:h-[500px] md:w-[900px] max-[600px]:h-72  max-[600px]:w-full max-[600px]:m-auto  [&:lang(en)]:-right-[500px] sm:[&:lang(ar)]:-left-[500px]  z-10 flex flex-col  items-center justify-center sm:p-10  max-[600px]:p-4 m-10 rounded-lg ">
            <h1 className="mb-6 p-4  max-[600px]:leading-8 border-y text-xl font-bold text-gray-50 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-4xl   sm:leading-4">
              {t("contactComponent.ready")}
            </h1>
            <div className="max-w-3xl mx-auto mb-8 ">
              <div className="relative before:absolute before:inset-0 ">
                <div className="max-w-xs mx-auto sm:flex sm:max-w-none sm:justify-center">
                  <p className="text-lg text-gray-200 ">
                    {t("contactComponent.ready1")}
                  </p>
                </div>
              </div>
            </div>
            <NavLink
              title="contact"
              to={`/contact`}
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
            >
              <span className="relative inline-flex items-center w-full p-4 font-semibold text-gray-800 bg-white rounded-lg shadow btn hover:bg-gray-200 sm:ml-4 sm:w-auto">
                {t("HeroHome.contact")}
              </span>
            </NavLink>
          </div>
          <div className="absolute  top-52 max-[600px]:hidden  [&:lang(en)]:-right-[500px] [&:lang(ar)]:-left-[500px] ">
            <CircleContact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyComponent;
