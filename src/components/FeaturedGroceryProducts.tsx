import { products } from "../data"
import CategorySection from "./ui/CategorySection"

const FeaturedGroceryProducts = () => {

  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="content-stretch flex flex-col gap-[48px] sm:gap-[56px] lg:gap-[64px] items-start justify-start relative w-full">

         <CategorySection title="Featured Grocery Products" categories={products} isProducts/>
    </div>
    </div>
        </div>
  )
}

export default FeaturedGroceryProducts
