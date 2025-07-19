import { useTranslation } from "react-i18next";

import Header from "../../../components/Header";
import PageIllustration from "../../../components/page-illustration";
import Desktop from "../../../components/desktop";
import Footer from "../../../components/ui/footer";

export default function Desktopdevelopment() {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <Header />

      <title>{t("Services.Desktop-App-Development.title")}</title>
      <meta
        name="description"
        content={t("Services.Desktop-App-Development.sub-title")}
      />
      <link
        rel="apple-touch-icon"
        href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
      />

      <PageIllustration />
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <Desktop />
      </div>
      <Footer />
    </div>
  );
}
