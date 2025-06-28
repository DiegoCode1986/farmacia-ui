
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import OffersSection from "@/components/OffersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <OffersSection />
      <Footer />
    </div>
  );
};

export default Index;
