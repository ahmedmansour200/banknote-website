import TopHeader from "./components/TopHeader";
import HeroSection from "./components/HeroSection";
import FeaturedCategories from "./components/FeaturedCategories";
import ProductsWithDiscounts from "./components/ProductsWithDiscounts";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CarContext";
import CategoriesSectionGroup from "./components/CategoriesSection";



export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <TopHeader />
        <HeroSection />

        <FeaturedCategories />

        <ProductsWithDiscounts />

        <CategoriesSectionGroup />


        <Footer />
      </div>
    </CartProvider>
  );
}