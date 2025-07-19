import { useTranslation } from "react-i18next";
import { Link } from "react-router";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800 [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            {" "}
            {t("NotFoundPage.title")}
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            {t("NotFoundPage.description")}
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-blue-600 dark:text-gray-50"
          >
            {t("NotFoundPage.Home")}
          </Link>
        </div>
      </div>
    </section>
  );
}
