import { useTranslation } from "react-i18next";
import Footer from "../../components/ui/footer";
import Contact from "../../components/contact";
import PageIllustration from "../../components/page-illustration";
import Header from "../../components/Header";

export default function Webdevelopment() {
  const { t } = useTranslation();
  return (
    <>
      <title>{t("contactComponent.title-Meta")}</title>
      <meta
        name="description"
        content={t("contactComponent.description-Meta")}
      />
      <link
        rel="apple-touch-icon"
        href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
      />

      <div className="relative">
        <PageIllustration />
        <Header />
        <div className="px-4 m-auto sm:px-6">
          <div className=" max-[600px]:pb-4 sm:pt-40 md:pt-40">
            <Contact />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
