import type { Category, Product } from "../../interfaces";
import ProductCard from "../prductCard";
import { useCart } from "../../context/CarContext";

function ShopAllButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[6px] relative rounded-[4px] shrink-0 border border-black hover:bg-gray-50 transition-colors cursor-pointer"
      data-name="Shop All Button"
    >
      <div className="font-['Cairo:Medium',_sans-serif] font-medium leading-[0] not-italic relative shrink-0 text-[14px] text-black text-center text-nowrap">
        <p className="leading-[22px] whitespace-pre">SHOP ALL</p>
      </div>
    </button>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-start relative shrink-0 w-full min-w-[150px] max-w-[220px] cursor-pointer group" data-name="Category Card">
      <div
        className="bg-center bg-cover bg-no-repeat h-[200px] rounded-[4px] shrink-0 w-full group-hover:scale-105 transition-transform duration-300"
        style={{ backgroundImage: `url('${category.image}')` }}
      />
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black w-full">
        <p className="leading-[24px]">{category.name}</p>
      </div>
    </div>
  );
}
interface CategorySectionProps {
  title: string;
  categories: Category[] | Product[];
  isProducts?: boolean;
}
export default function CategorySection({ title, categories, isProducts = false }: CategorySectionProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    if (isProducts) {
      const product = (categories as Product[]).find(p => p.id === productId);
      if (product) {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          rating: product.rating
        });
      }
    }
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    console.log(`Quantity changed for ${productId}: ${quantity}`);
  };

  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-start relative shrink-0 w-full" data-name="Category Section">
      <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between relative shrink-0 w-full" data-name="Section Header">
        <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] sm:text-[24px] lg:text-[28px] text-black text-center text-nowrap">
          <p className="leading-[normal] whitespace-pre">{title}</p>
        </div>
        <ShopAllButton />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full" data-name="Categories Grid">
        {categories.map((ele, index) => (
          isProducts ?
            <ProductCard
              key={index}
              product={ele as Product}
              quantity={1}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
              onWishlistClick={() => {
                console.log('Added to wishlist:', (ele as Product).id);
              }}
              onCompareClick={() => {
                console.log('Added to compare:', (ele as Product).id);
              }}
              onQuickAddToCart={handleAddToCart}
            /> :
            <CategoryCard key={index} category={ele as Category} />
        ))
        }
      </div>
    </div>
  );
}