import Navbar from "./component/navbar";
import HeroSection from "./component/hero";
import CollectionsSection from "./component/CollectionsSection";
import ProductsSection from "./component/ProductsSection";
import AboutSection from "./component/about";
import ExperienceSection from "./component/ExperienceSection";
import NewsletterSection from "./component/NewsletterSection";
import Footer from "./component/footer";
import LoadingExperienceLayer from "./component/LoadingExperienceLayer";

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <LoadingExperienceLayer />
      <Navbar />
      <HeroSection />
      <CollectionsSection />
      <ProductsSection />
      <ExperienceSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </main>
  );
}


