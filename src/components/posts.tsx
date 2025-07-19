// import useBlogPosts from "./useBlogPosts";
// import { Spin } from "antd";

import { useTranslation } from "react-i18next";
// import { FaRegCalendarDays } from "react-icons/fa6";

function Posts() {
  const { t } = useTranslation();
  // const { data, isLoading, error } = useBlogPosts();

  // if (error) {
  //   <div>something went wrong</div>;
  // }
  // const langDir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <section className="py-4 px-4">
      <h2 className="text-center text-3xl font-bold mb-4">{t("blog.title")}</h2>
      <p className="text-center mb-12">{t("blog.subtitle")}</p>
      {/* {isLoading ? (
        <div className="flex justify-center items-center m-auto p-20">
          <Spin />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.map((post : {url: string , images: string[], date:string , id: nu  }) => (
            <div
              key={post.id}
              className="relative rounded-lg overflow-hidden bg-cover bg-center"
            >
              <img
                src={post?.images.url}
                alt={post?.date}
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="absolute top-0 h-full w-full  bg-gradient-to-t from-gray-900/40 max-[600px]:hidden">
                <div className="absolute bottom-0 p-4">
                  <p className="text-gray-100 text-sm">{post.date}</p>
                  <h3 className="text-lg font-semibold mt-1 text-white">
                    {langDir === "ltr" ? post.title.en : post.title.ar}
                  </h3>
                </div>
                <div className=" max-[600px]:hidden relative  hover:relative hover:z-10 transition-all duration-300  h-full w-full ">
                  <div className="absolute  bg-gray-50 p-4 h-full w-full  opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                    <div className="text-gray-500 flex gap-1 items-center">
                      <span className="m-2">
                        <FaRegCalendarDays />
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h1 className="text-xl font-bold mb-4">
                      {langDir === "ltr" ? post.title.en : post.title.ar}
                    </h1>
                    <p className="text-gray-800 text-sm max-[600px]:text-lg">
                      {langDir === "ltr" ? post.text.en : post.text.ar}
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:hidden lg:hidden max-[600px]:m-4">
                <div className="text-gray-500 flex gap-1 items-center">
                  <span className="m-2">
                    <FaRegCalendarDays />
                  </span>
                  <span>{post.date}</span>
                </div>
                <h1 className="text-2xl font-bold mb-4">
                  {langDir === "ltr" ? post.title.en : post.title.ar}
                </h1>
                <p className="text-gray-800 text-xl max-[600px]:text-lg">
                  {langDir === "ltr" ? post.text.en : post.text.ar}
                </p>
              </div>
            </div>
          ))}
        </div>
      )} */}
    </section>
  );
}

export default Posts;
