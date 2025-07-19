// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import PageIllustration from "../../components/page-illustration";
import Posts from "../../components/posts";
import Footer from "../../components/ui/footer";

function Blogs() {
  // const { t } = useTranslation();
  return (
    <div className="relative">
      <Header />
      {/* <Helmet>
        <title>{t("blog.blog")}</title>
        <meta name="description" content={t("blog.subtitle")} />
        <link
          rel="apple-touch-icon"
          href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
        />
      </Helmet> */}
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className=" max-[600px]:pb-4 max-[600px]:pt-40  md:pt-40">
          <Posts />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blogs;
