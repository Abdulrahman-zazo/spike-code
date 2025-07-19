import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import productanimation from "../productanimation.json";
import { Suspense } from "react";
import Loader from "./Loader";

export default function Product() {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<Loader />}>
      <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900 shadow-xl md:p-10 sm:p-10 pt-10  [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai">
        <h2 className="text-3xl font-bold text-gray-200 md:text-4xl text-center py-6">
          {t("Products.title")}
          <div className="text-center mx-auto max-w-3xl ">
            <p className="text-xl font-medium text-gray-400 md:text-base px-5 max-[600px]:text-sm">
              {t("Products.sub-title")}
            </p>
          </div>
        </h2>

        <div className="min-w-full sm:w-full md:px-20 before:bg-gray-900">
          <div
            className="relative overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:bg-gray-900 flex-2"
            data-aos="zoom-y-out"
          >
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
    </Suspense>
  );
}
