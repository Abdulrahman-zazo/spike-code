import { useTranslation } from "react-i18next";

function TermsComponent() {
  const { t } = useTranslation();
  return (
    <div className="w-5/6 m-auto my-10 max-[600px]:pt-40 ">
      <h1 className=" mb-6 text-center  border-y text-xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-2xl [&:lang(en)]:font-inter [&:lang(ar)]:font-almarai  ">
        {t("terms.title")}
      </h1>
      <p>{t("terms.introduction")}</p>
      <ul className="list-disc m-4 ">
        <li>{t("terms.definitions.terms_and_conditions")}</li>
        <li>{t("terms.definitions.social_media_service")}</li>
        <li>{t("terms.definitions.website")}</li>
        <li>{t("terms.definitions.you")}</li>
      </ul>

      <p>{t("terms.body")}</p>

      <h2 className="font-semibold my-2">{t("terms.contact_us")}</h2>
    </div>
  );
}

export default TermsComponent;
