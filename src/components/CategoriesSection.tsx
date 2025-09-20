import CategorySection from "./ui/CategorySection";
import { beautyCategories, furnitureCategories, householdSuppliesCategories, products } from "../data";


export default function CategoriesSectionGroup() {
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