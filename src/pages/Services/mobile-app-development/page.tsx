import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import PageIllustration from "../../../components/page-illustration";
import Mobile from "../../../components/Mobile";
import Footer from "../../../components/ui/footer";

export default function Mobileappdevelopment() {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <Header />

      <title>{t("Services.mobile-app-development.title")}</title>
      <meta
        name="description"
        content={t("Services.mobile-app-development.sub-title")}
      />
      <link
        rel="apple-touch-icon"
        href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
      />

      <PageIllustration />
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <Mobile />
      </div>
      <Footer />
    </div>
  );
}
