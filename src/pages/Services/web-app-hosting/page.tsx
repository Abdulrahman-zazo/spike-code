import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import PageIllustration from "../../../components/page-illustration";
import Hosting from "../../../components/Hosting";
import Footer from "../../../components/ui/footer";

export default function WebAppHosting() {
  // Enable static rendering

  const { t } = useTranslation();
  return (
    <div className="relative">
      <Header />

      <title>{t("Services.Web-Application-Hosting.title")}</title>
      <meta
        name="description"
        content={t("Services.Web-Application-Hosting.sub-title")}
      />
      <link
        rel="apple-touch-icon"
        href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
      />

      <PageIllustration />
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <Hosting />
      </div>
      <Footer />
    </div>
  );
}
