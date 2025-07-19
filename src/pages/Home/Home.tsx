// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
import Header from "../../components/Header";
import HeroHome from "../../components/hero-home";
import BusinessCategories from "../../components/business-categories";
import FeaturesPlanet from "../../components/features-planet";
import Product from "../../components/Product";
import LargeTestimonial from "../../components/large-testimonial";
import Cta from "../../components/cta";
import Footer from "../../components/ui/footer";

function Home() {
  // const { t } = useTranslation();

  return (
    <>
      <Header />
      {/* <Helmet>
        <title>{t("HeroHome.title-Meta")}</title>
        <meta name="description" content={t("HeroHome.description-Meta")} />
        <link
          rel="apple-touch-icon"
          href={"https://blogsbackend.spikecode.net/website/img/logo-ico.ico"}
        />
      </Helmet> */}
      <HeroHome />
      <BusinessCategories />
      <FeaturesPlanet />
      <Product />
      <LargeTestimonial />
      <Cta bg="bg-gray-900" />
      <Footer />
    </>
  );
}

export default Home;
