import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import PageIllustration from "../../../components/page-illustration";
import ItSupport from "../../../components/ItSupport";
import Footer from "../../../components/ui/footer";

export default function Itsupport() {
  const { t } = useTranslation();

  return (
    <div className="relative">
      <Header />

      <title>{t("Services.IT-Support-Service.title")}</title>
      <meta
        name="description"
        content={t("Services.IT-Support-Service.sub-title")}
      />
      <link
        rel="apple-touch-icon"
        href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
      />

      <PageIllustration />
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <ItSupport />
      </div>
      <Footer />
    </div>
  );
}
