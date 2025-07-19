// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
import Header from "../../../components/Header";
import PageIllustration from "../../../components/page-illustration";
import ReadyComponent from "../../../components/readyComponent";
import Timeline from "../../../components/timeline";
import Footer from "../../../components/ui/footer";

export default function Webdevelopment() {
  // const { t } = useTranslation();
  return (
    <div className="relative">
      <Header />
      {/* <Helmet>
        <title>{t("Services.web-development.title")}</title>
        <meta
          name="description"
          content={t("Services.web-development.sub-title")}
        />
        <link
          rel="apple-touch-icon"
          href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
        />
      </Helmet> */}
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className=" max-[600px]:pb-4 sm:pt-40 sm:pb-2 md:pt-40">
          <Timeline />
          <ReadyComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}
