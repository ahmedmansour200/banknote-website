import imgImg61671 from "../assets/product-img-1.png";
import imgDeliciousCoffeeCupsWithFoamAssortment1 from "../assets/coffee-cups-foam.png";
import imgImg61721 from "../assets/product-img-2.png";
import imgScreenshot202508171722431 from "../assets/screenshot-product.png";
import imgImg61731 from "../assets/product-img-4.png";
import imgImg61711 from "../assets/product-img-5.png";
import imgHighAngleEcoFriendlyProductsArrangement1 from "../assets/eco-friendly-products.png";
import imgNaturalArganOilComposition1 from "../assets/argan-oil-composition.png";
import imgNaturalSelfCareProductsComposition1 from "../assets/self-care-products.png";
import imgImg61621 from "../assets/product-img-3.png";
import imgImg61631 from "../assets/product-img-6.png";
import imgCloseUpBottlesWithOilPillsTable1 from "../assets/bottles-oil-pills.png";
import imgImage from "../assets/category-img-1.png";
import imgImage1 from "../assets/category-img-2.png";
import imgImage2 from "../assets/category-img-3.png";
import imgImage3 from "../assets/category-img-4.png";
import imgRectangle from "../assets/rectangle-element.png";
import imgImage4 from "../assets/category-img-5.png";
import CategorySection from "./ui/CategorySection";
import type { Category } from "../interfaces";
import { products } from "../data";




const householdSuppliesCategories: Category[] = [
  {
    name: "Dinner Sets",
    image: imgImg61671
  },
  {
    name: "Drinkware",
    image: imgDeliciousCoffeeCupsWithFoamAssortment1
  },
  {
    name: "Kitchen Items",
    image: imgImg61721
  },
  {
    name: "Dutch Oven",
    image: imgScreenshot202508171722431
  },
  {
    name: "Hanging Fork Knife",
    image: imgImg61731
  },
  {
    name: "Storage Boxes",
    image: imgImg61711
  }
];

const beautyCategories: Category[] = [
  {
    name: "Skin Care",
    image: imgHighAngleEcoFriendlyProductsArrangement1
  },
  {
    name: "Perfumes",
    image: imgNaturalArganOilComposition1
  },
  {
    name: "Hair Care",
    image: imgNaturalSelfCareProductsComposition1
  },
  {
    name: "Body Care",
    image: imgImg61621
  },
  {
    name: "Health & Personal Care",
    image: imgImg61631
  },
  {
    name: "Natural & Essential",
    image: imgCloseUpBottlesWithOilPillsTable1
  }
];

const furnitureCategories: Category[] = [
  {
    name: "Coffee Table",
    image: imgImage
  },
  {
    name: "Sofa",
    image: imgImage1
  },
  {
    name: "TV Tables",
    image: imgImage2
  },
  {
    name: "Bedroom",
    image: imgImage3
  },
  {
    name: "Desks & Chairs",
    image: imgRectangle
  },
  {
    name: "Wardrobe",
    image: imgImage4
  }
];

export default function CategoriesSection() {
  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="content-stretch flex flex-col gap-[48px] sm:gap-[56px] lg:gap-[64px] items-start justify-start relative w-full">
          <CategorySection title="Household Supplies" categories={householdSuppliesCategories} />
          <CategorySection title="Beauty" categories={beautyCategories} isProducts/>
          <CategorySection title="Furniture" categories={furnitureCategories} />
          <CategorySection title="Beauty Picks" categories={products} isProducts/>
          <CategorySection title="Cleaning Supplies" categories={furnitureCategories} />
          <CategorySection title="Featured Grocery Products" categories={products} isProducts/>
        </div>
      </div>
    </div>
  );
}