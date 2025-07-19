import { Calendar, Loader } from "lucide-react";
import useBlogPosts from "./useBlogPosts";

import { useTranslation } from "react-i18next";

type Posts = {
  id: string;
  date: string;
  images: { url: string };
  text: { en: string; ar: string };
  title: { en: string; ar: string };
};
function Posts() {
  const { t, i18n } = useTranslation();
  const { data, isLoading, error } = useBlogPosts();

  if (error) {
    <div>something went wrong</div>;
  }
  const langDir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <section className="px-4 py-4">
      <h2 className="mb-4 text-3xl font-bold text-center">{t("blog.title")}</h2>
      <p className="mb-12 text-center">{t("blog.subtitle")}</p>
      {isLoading ? (
        <div className="flex items-center justify-center p-20 m-auto">
          <Loader className="animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data?.map(({ id, date, images, text, title }: Posts) => {
            return (
              <div
                key={id}
                className="relative overflow-hidden bg-center bg-cover rounded-lg"
              >
                <img
                  src={images.url}
                  alt={date}
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
                <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-gray-900/40 max-[600px]:hidden">
                  <div className="absolute bottom-0 p-4">
                    <p className="text-sm text-gray-100">{date}</p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      {langDir === "ltr" ? title.en : title.ar}
                    </h3>
                  </div>
                  <div className=" max-[600px]:hidden relative  hover:relative hover:z-10 transition-all duration-300  h-full w-full ">
                    <div className="absolute w-full h-full p-4 transition-opacity duration-300 opacity-0 bg-gray-50 hover:opacity-100 backdrop-blur-sm">
                      <div className="flex items-center gap-1 text-gray-500">
                        <span className="m-2">
                          <Calendar />
                        </span>
                        <span>{date}</span>
                      </div>
                      <h1 className="mb-4 text-xl font-bold">
                        {langDir === "ltr" ? title.en : title.ar}
                      </h1>
                      <p className="text-gray-800 text-sm max-[600px]:text-lg">
                        {langDir === "ltr" ? text.en : text.ar}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:hidden lg:hidden max-[600px]:m-4">
                  <div className="flex items-center gap-1 text-gray-500">
                    <span className="m-2">
                      <Calendar />
                    </span>
                    <span>{date}</span>
                  </div>
                  <h1 className="mb-4 text-2xl font-bold">
                    {langDir === "ltr" ? title.en : title.ar}
                  </h1>
                  <p className="text-gray-800 text-xl max-[600px]:text-lg">
                    {langDir === "ltr" ? text.en : text.ar}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Posts;
