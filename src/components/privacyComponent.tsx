import { useTranslation } from "react-i18next";

function PrivacyComponent() {
  const { t } = useTranslation();
  return (
    <div className="w-5/6 m-auto my-10 ">
      <h1 className=" mb-6 text-center  border-y text-xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-2xl    ">
        {t("Priv.Privacy")}
      </h1>
      <p>{t("Priv.textPrivacy1")}</p>
      <h2 className="font-semibold my-2">{t("Priv.Collect")}</h2>
      <p>{t("Priv.text2")}</p>
      <ul className="list-disc m-4 ">
        <li>
          <strong>{t("Priv.Personal")}</strong> {t("Priv.text3")}
        </li>
        <li>
          <strong>{t("Priv.data")}</strong> {t("Priv.text4")}
        </li>
        <li>
          <strong>{t("Priv.Device")}</strong> {t("Priv.text5")}
        </li>
        <li>
          <strong>{t("Priv.Location")}</strong> {t("Priv.text6")}
        </li>
      </ul>
      <h2 className="font-semibold my-2">{t("Priv.Use")}</h2>
      <p>{t("Priv.text7")}</p>
      <ul className="list-disc m-4 ">
        <li>
          <strong>{t("Priv.Providing")}</strong>
          {t("Priv.text8")}
        </li>
        <li>
          <strong>{t("Priv.Improving")}</strong> {t("Priv.text9")}
        </li>
        <li>
          <strong>{t("Priv.Communicating")}</strong> {t("Priv.text10")}
        </li>
        <li>
          <strong>{t("Priv.Marketing")}</strong> {t("Priv.text11")}
        </li>
      </ul>
      {/* .............................. */}
      <h2 className="font-semibold my-2">{t("Priv.Sharing")}</h2>
      <p>{t("Priv.text12")}</p>
      <ul className="list-disc m-4">
        <li>
          <strong>{t("Priv.Suppliers")}</strong>
          {t("Priv.text13")}
        </li>
        <li>
          <strong>{t("Priv.Legal")}</strong> {t("Priv.text14")}
        </li>
        <li>
          <strong>{t("Priv.Merger")}</strong> {t("Priv.text15")}
        </li>
      </ul>
      <h2 className="font-semibold my-2"> {t("Priv.Security")}</h2>
      <p>{t("Priv.text16")}</p>

      <h2 className="font-semibold my-2">{t("Priv.cookies")}</h2>
      <p>{t("Priv.text17")}</p>

      <h2 className="font-semibold my-2">{t("Priv.Links")}</h2>
      <p>{t("Priv.text18")}</p>

      <h2 className="font-semibold my-2">{t("Priv.Changes")}</h2>
      <p>{t("Priv.text19")}</p>

      <h2 className="font-semibold my-2">{t("Priv.Contactus")}</h2>
      <p>{t("Priv.text20")}</p>
    </div>
  );
}

export default PrivacyComponent;
