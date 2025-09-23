import CategorySection from "./ui/CategorySection";
import { beautyCategories, furnitureCategories, householdSuppliesCategories, products } from "../data";
import Container from "./ui/Container";


export default function CategoriesSectionGroup() {
  return (
        <Container className="flex flex-col gap-[48px] sm:gap-[56px] lg:gap-[64px] items-start justify-start relative w-full py-16">
          <CategorySection title="Household Supplies" categories={householdSuppliesCategories} />
          <CategorySection title="Beauty" categories={beautyCategories} isProducts/>
          <CategorySection title="Furniture" categories={furnitureCategories} />
          <CategorySection title="Beauty Picks" categories={products} isProducts/>
          <CategorySection title="Cleaning Supplies" categories={furnitureCategories} />
          <CategorySection title="Featured Grocery Products" categories={products} isProducts/>
        </Container>
  );
}