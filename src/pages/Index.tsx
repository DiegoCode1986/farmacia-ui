
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import ProductsSection from "@/components/ProductsSection";
import OffersSection from "@/components/OffersSection";
import HygieneSection from "@/components/HygieneSection";
import BeautySection from "@/components/BeautySection";
import ChildrenSection from "@/components/ChildrenSection";
import NutritionSection from "@/components/NutritionSection";
import FirstAidSection from "@/components/FirstAidSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <CategoriesSection />
      <ProductsSection />
      <HygieneSection />
      <BeautySection />
      <ChildrenSection />
      <NutritionSection />
      <FirstAidSection />
      <ServicesSection />
      <OffersSection />
      <Footer />
    </div>
  );
};

export default Index;
