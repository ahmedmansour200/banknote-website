import { useState } from 'react';
import { products } from '../data';
import ProductCard from './prductCard';
import { useCart } from '../context/CarContext';
import Container from './ui/Container';

function LeftArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      title='Previous'
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[9px] py-px relative rounded-[4px] size-[34px] cursor-pointer hover:bg-gray-50 transition-colors"
      data-name="left arrow"
    >
      <div aria-hidden="true" className="absolute border border-[#c39c45] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex items-center justify-center relative shrink-0">
        <img src="./icons/weui_arrow-outlined.svg" className="rotate-90 w-4 h-4" alt="Previous" style={{ filter: 'brightness(0) saturate(100%) invert(46%) sepia(0%) saturate(0%) hue-rotate(173deg) brightness(95%) contrast(88%)' }} />
      </div>
    </button>
  );
}

function RightArrow({ onClick }: { onClick: () => void }) {
  return (
    <button
      title='Next'
      onClick={onClick}
      className="box-border content-stretch flex gap-[10px] items-center justify-center px-[9px] py-px relative rounded-[4px] shrink-0 size-[34px] cursor-pointer hover:bg-gray-50 transition-colors"
      data-name="right arrow"
    >
      <div aria-hidden="true" className="absolute border border-[#c39c45] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex items-center justify-center relative shrink-0">
        <img src="./icons/weui_arrow-outlined.svg" className="-rotate-90 w-4 h-4" alt="Next" style={{ filter: 'brightness(0) saturate(100%) invert(46%) sepia(0%) saturate(0%) hue-rotate(173deg) brightness(95%) contrast(88%)' }} />
      </div>
    </button>
  );
}

function Arrows({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="content-stretch flex gap-[11px] items-center justify-start relative shrink-0 w-[79px]" data-name="arrows">
      <LeftArrow onClick={onPrev} />
      <RightArrow onClick={onNext} />
    </div>
  );
}

function SectionHeader({ onPrev, onNext }: { onPrev: () => void; onNext: () => void }) {
  return (
    <div className="flex  items-center justify-between relative shrink-0 w-full gap-4 sm:gap-0">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] sm:text-[24px] lg:text-[28px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Featured Grocery</p>
      </div>
      <Arrows onPrev={onPrev} onNext={onNext} />
    </div>
  );
}




export default function FeaturedCategories() {
  const [startIndex, setStartIndex] = useState(0);


  // convenience to add the product at startIndex
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addToCart } = useCart();

  const getVisibleProducts = () => {
    if (window.innerWidth < 768) return 2; 
    if (window.innerWidth < 1024) return 3; 
    return 6; 
  };

  const [visibleProducts, setVisibleProducts] = useState(getVisibleProducts());

  useState(() => {
    const handleResize = () => setVisibleProducts(getVisibleProducts());
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  });

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(products.length - visibleProducts, prev + 1));
  };

  const handleQuantityChange = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const visibleProductsList = products.slice(startIndex, startIndex + visibleProducts);

  const handleAddToCart = (productId: string) => {
    const quantity = quantities[productId] || 0;
    if (quantity > 0) {
      const product = products.find(p => p.id === productId);
      if (product) {
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          rating: product.rating
        });
      }
    } else {
      setQuantities(prev => ({
        ...prev,
        [productId]: quantity + 1
      }));
    }
  };

  const handleWishlistClick = (productId: string) => {
    console.log('Added to wishlist:', productId);
  };

  const handleCompareClick = (productId: string) => {
    console.log('Added to compare:', productId);
  };

  const handleQuickAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        rating: product.rating
      });
    }
  };

  return (
      <Container className="w-full py-8 sm:py-16 gap-8 flex flex-col items-start justify-start">
        <SectionHeader onPrev={handlePrev} onNext={handleNext} />

        <div className="flex gap-4 lg:gap-[24px] w-full overflow-hidden">
            {visibleProductsList.map((product) => (
          <ProductCard
          key={product.id}
          product={product}
          quantity={quantities[product.id] || 0}
          onQuantityChange={handleQuantityChange}
          onAddToCart={handleAddToCart}
          onWishlistClick={handleWishlistClick}
          onCompareClick={handleCompareClick}
          onQuickAddToCart={handleQuickAddToCart}
          />
        ))}
        </div>
    </Container>
  );
}