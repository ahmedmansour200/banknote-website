import { ChevronRight } from 'lucide-react';
import ProductCard from './prductCard';
import { useCart } from '../context/CarContext';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating?: number;
  image: string;
  discount?: string;
  category?: string;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  showViewAll?: boolean;
  backgroundColor?: string;
}

export default function ProductSection({
  title,
  subtitle,
  products,
  showViewAll = true,
  backgroundColor = "bg-gray-50"
}: ProductSectionProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image || '',
        rating: product.rating || 0
      });
    }
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    console.log(`Quantity changed for ${productId}: ${quantity}`);
  };

  return (
    <section className={`py-12 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            {subtitle && <p className="text-gray-600">{subtitle}</p>}
          </div>
          {showViewAll && (
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              View All
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image || '',
                rating: product.rating || 0
              }}
              quantity={0}
              onQuantityChange={handleQuantityChange}
              onAddToCart={handleAddToCart}
              onWishlistClick={() => console.log('Added to wishlist:', product.id)}
              onCompareClick={() => console.log('Added to compare:', product.id)}
              onQuickAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}