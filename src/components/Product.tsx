import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import productanimation from "../productanimation.json";

export default function Product() {
  const { t } = useTranslation();
  return (
    <section className="relative pt-10 shadow-xl before:absolute before:inset-0 before:-z-20 before:bg-gray-900 md:p-10 sm:p-10 ">
      <h2 className="py-6 text-3xl font-bold text-center text-gray-200 md:text-4xl">
        {t("Products.title")}
        <div className="max-w-3xl mx-auto text-center ">
          <p className="text-xl font-medium text-gray-400 md:text-base px-5 max-[600px]:text-sm">
            {t("Products.sub-title")}
          </p>
        </div>
      </h2>

      <div className="min-w-full sm:w-full md:px-20 before:bg-gray-900">
        <div className="relative overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-gray-900 flex-2">
          <div className="lg:w-full lg:h-full  max-[600px]:pb-4">
            <Lottie
              animationData={productanimation}
              loop={true}
              autoplay={true}
              style={{}} // Adjust size as needed
            />
          </div>
        </div>
      </div>
    </section>
  );
}
