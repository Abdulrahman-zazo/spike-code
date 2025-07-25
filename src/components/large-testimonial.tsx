import { useTranslation } from "react-i18next";

export default function LargeTestimonial() {
  const { t } = useTranslation();

  return (
    <section>
      <div className="max-w-3xl px-4 mx-auto sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            <div className="relative inline-flex">
              <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <img
                src={
                  "https://res.cloudinary.com/dmn6uzy82/image/upload/v1752937893/Group_48_1_nkolyf.webp"
                }
                width={48}
                height={48}
                alt="Large testimonial"
              />
            </div>

            <p className="text-lg font-semibold text-gray-900    max-[600px]:text-base">
              {t("testiminals.letter")}
            </p>

            <div className="text-sm font-medium text-gray-500">
              <span className="text-gray-700">Spike Code Team</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
