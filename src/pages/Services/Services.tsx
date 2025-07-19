// import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import FeaturesPlanet from "../../components/features-planet";
import Footer from "../../components/ui/footer";

function Services() {
  const { t } = useTranslation();

  return (
    <div className="mt-20 before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <Header />

      <title>{t("Services.title-Meta")}</title>
      <meta name="description" content={t("Services.description-Meta")} />
      <link
        rel="apple-touch-icon"
        href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
      />

      <FeaturesPlanet />
      <Footer />
    </div>
  );
}

export default Services;
