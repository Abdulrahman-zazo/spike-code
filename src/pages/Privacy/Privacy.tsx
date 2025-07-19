// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import PageIllustration from "../../components/page-illustration";
import PrivacyComponent from "../../components/privacyComponent";
import Footer from "../../components/ui/footer";

function Privacy() {
  // const { t } = useTranslation();

  return (
    <div className="relative">
      <Header />
      {/* <Helmet>
        <title>{t("Priv.Privacy")}</title>
        <meta name="description" content={t("Priv.textPrivacy1")} />
        <link
          rel="apple-touch-icon"
          href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
        />
      </Helmet> */}
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className=" max-[600px]:pb-4 sm:pb-2 sm:pt-40 md:pt-40">
          <div className="relative   overflow-hidden max-[600px]:pt-16 [&:lang(ar)]:font-almarai [&:lang(en)]:font-inter">
            <PrivacyComponent />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Privacy;
