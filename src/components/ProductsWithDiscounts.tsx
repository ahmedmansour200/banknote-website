import { useState, useEffect } from 'react';

import imgBackgroundCardProduct from "../assets/card-background.png";
import type { Product } from '../interfaces';
import AddToCartButton from './prductCard/AddToCartButton';
import QuantityCounter from './prductCard/QuantityCounter';
import Stars from './prductCard/Stars';
import { products } from '../data';
import { useCart } from '../context/CarContext';


function Timer() {
  const [time, setTime] = useState({
    days: 50,
    hours: 20,
    minutes: 53,
    seconds: 57
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="content-stretch flex gap-2 sm:gap-4 lg:gap-[24px] items-center justify-start relative shrink-0" data-name="Timer">
      <div className="bg-[#c39c45] box-border content-stretch flex gap-[10px] h-[32px] sm:h-[36px] items-center justify-center px-2 sm:px-[15px] py-[5px] relative rounded-[4px] shrink-0 w-[60px] sm:w-[80px]">
        <div className="font-['Cairo:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black text-nowrap">
          <p className="leading-[normal] whitespace-pre">{time.days} Days</p>
        </div>
      </div>
      <div className="bg-[#c39c45] box-border content-stretch flex gap-[10px] h-[32px] sm:h-[36px] items-center justify-center px-2 sm:px-[15px] py-[5px] relative rounded-[4px] shrink-0 w-[60px] sm:w-[80px]">
        <div className="font-['Cairo:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black text-nowrap">
          <p className="leading-[normal] whitespace-pre">{time.hours} Hour</p>
        </div>
      </div>
      <div className="bg-[#c39c45] box-border content-stretch flex gap-[10px] h-[32px] sm:h-[36px] items-center justify-center px-2 sm:px-[15px] py-[5px] relative rounded-[4px] shrink-0 w-[60px] sm:w-[80px]">
        <div className="font-['Cairo:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black text-nowrap">
          <p className="leading-[normal] whitespace-pre">{time.minutes} Min</p>
        </div>
      </div>
      <div className="bg-[#c39c45] box-border content-stretch flex gap-[10px] h-[32px] sm:h-[36px] items-center justify-center px-2 sm:px-[15px] py-[5px] relative rounded-[4px] shrink-0 w-[60px] sm:w-[80px]">
        <div className="font-['Cairo:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[12px] sm:text-[14px] text-black text-nowrap">
          <p className="leading-[normal] whitespace-pre">{time.seconds} Sec</p>
        </div>
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row items-center justify-between relative shrink-0 w-full gap-4 sm:gap-0">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[20px] sm:text-[24px] lg:text-[28px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Products With Discounts</p>
      </div>
      <Timer />
    </div>
  );
}

interface ProductCardProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
 onAddToCart?: (productId: string) => void;
}



function ProductCard({
  product,
  quantity,
  onQuantityChange,
  onAddToCart
}: ProductCardProps) {
  const handleIncrease = () => onQuantityChange(quantity + 1);
  const handleDecrease = () => onQuantityChange(Math.max(0, quantity - 1));
const handleAddToCartClick = () => {
        onAddToCart?.(product.id);
    };
  return (
    <div className="bg-[#fbf3d9] box-border content-stretch flex gap-[10px] h-[154px] items-center justify-start p-[8px] sm:p-[12px] relative rounded-[4px] shrink-0 w-full max-w-[382px] min-w-[370px]" data-name="Product Card width">
      <div className="content-stretch flex gap-[12px] sm:gap-[16px] items-start justify-start relative shrink-0 w-full" data-name="Card info">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
          <div className="[grid-area:1_/_1] bg-bottom bg-no-repeat bg-size-[100.06%_135.94%] box-border content-stretch flex gap-[10px] h-[130px] items-center justify-center ml-0 mt-0 px-[36px] py-[15px] relative rounded-[4px] w-[160px]" data-name="Background card product" style={{ backgroundImage: `url('${imgBackgroundCardProduct}')` }}>
            <div className="relative shrink-0 size-[80px]" data-name="card image">
              <div className="absolute bg-center bg-cover bg-no-repeat inset-0" style={{ backgroundImage: `url('${product.image}')` }} />
            </div>
          </div>
          <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[12px] mt-0 place-items-start relative" data-name="Discount Cart">
            <div className="[grid-area:1_/_1] h-[50px] ml-0 mt-0 relative w-[40px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 50">
                <path d="M0 0H40V50L20 35.5L0 50V0Z" fill="var(--fill-0, #C39C45)" id="Rectangle 18" />
              </svg>
            </div>
            <div className="[grid-area:1_/_1] font-['Cairo:Bold',_sans-serif] font-bold leading-[14px] ml-[11px] mt-[4px] not-italic relative text-[10px] text-black text-nowrap whitespace-pre">
              <p className="mb-0">20%</p>
              <p>OFF</p>
            </div>
          </div>
        </div>
        <div className="basis-0 content-stretch flex flex-col gap-[8px] grow items-start justify-start min-h-px min-w-px relative shrink-0" data-name="card data">
          <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-full">
            <p className="leading-[24px]">{product.name}</p>
          </div>
          <div className="content-stretch flex gap-[20px] items-center justify-start relative shrink-0 w-full" data-name="Price & Stars">
            <div className="content-stretch flex font-['Cairo:Bold',_sans-serif] font-bold gap-[4px] items-center justify-start leading-[0] not-italic relative shrink-0 text-[#ff6606] text-center text-nowrap" data-name="Price">
              <div className="relative shrink-0 text-[12px]">
                <p className="leading-[normal] text-nowrap whitespace-pre">EGP</p>
              </div>
              <div className="relative shrink-0 text-[20px]">
                <p className="leading-[24px] text-nowrap whitespace-pre">{product.price}</p>
              </div>
            </div>
            <Stars rating={product.rating} />
          </div>
          <div className="content-stretch flex gap-[16px] items-center justify-start relative shrink-0 w-full" data-name="Buttons">
            <QuantityCounter
              quantity={quantity}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
            />
            <AddToCartButton onClick={handleAddToCartClick} />
          </div>
        </div>
      </div>
    </div>
  );
}


export default function ProductsWithDiscounts() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const { addToCart } = useCart();

  const handleQuantityChange = (productId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const handleAddToCart = (productId: string) => {
    const product = products.find(p => p.id === productId);


    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        rating: product.rating
      });

      setQuantities(prev => ({
        ...prev,
        [productId]: 0
      }));
    }
  };

  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="content-stretch flex flex-col gap-[24px] sm:gap-[32px] items-start justify-start relative size-full">
          <SectionHeader />

          <div className="bg-white min-h-[400px] relative rounded-[4px] shrink-0 w-full">
            <div aria-hidden="true" className="absolute border border-[#c39c45] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="relative size-full">
              <div className="box-border content-stretch flex flex-col gap-[16px] sm:gap-[20px] items-start justify-start p-[16px] sm:p-[23px] relative w-full">

                <div className="w-full">
                  <div className="content-start flex flex-col gap-[20px] items-start justify-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[16px] items-center justify-start relative shrink-0 w-full overflow-x-auto">
                      <img src='images/prodectdisc1.png' alt="prodectdisc1" />
                      <ProductCard
                        product={products[0]}
                        quantity={quantities[products[0].id] || 0}
                        onQuantityChange={(quantity) => handleQuantityChange(products[0].id, quantity)}
                        onAddToCart={() => handleAddToCart(products[0].id)}
                      />
                      <ProductCard
                        product={products[1]}
                        quantity={quantities[products[1].id] || 0}
                        onQuantityChange={(quantity) => handleQuantityChange(products[1].id, quantity)}
                        onAddToCart={() => handleAddToCart(products[1].id)}
                      />
                    </div>

                    <div className="content-stretch flex gap-[16px] items-center justify-start relative shrink-0 w-full overflow-x-auto">
                      <img src='images/prodectdisc2.png' alt="prodectdisc2" />
                      <ProductCard
                        product={products[2]}
                        quantity={quantities[products[2].id] || 0}
                        onQuantityChange={(quantity) => handleQuantityChange(products[2].id, quantity)}
                        onAddToCart={() => handleAddToCart(products[2].id)}
                      />
                      <ProductCard
                        product={products[3]}
                        quantity={quantities[products[3].id] || 0}
                        onQuantityChange={(quantity) => handleQuantityChange(products[3].id, quantity)}
                        onAddToCart={() => handleAddToCart(products[3].id)}
                      />
                    </div>

                    <div className="content-stretch flex gap-[16px] items-center justify-start relative shrink-0 w-full overflow-x-auto">
                      <img src='images/prodectdisc3.png' alt="prodectdisc3" />
                      <ProductCard
                        product={products[4]}
                        quantity={quantities[products[4].id] || 0}
                        onQuantityChange={(quantity) => handleQuantityChange(products[4].id, quantity)}
                        onAddToCart={() => handleAddToCart(products[4].id)}
                      />
                      <ProductCard
                        product={products[5]}
                        quantity={quantities[products[5].id] || 0}
                        onQuantityChange={(quantity) => handleQuantityChange(products[5].id, quantity)}
                        onAddToCart={() => handleAddToCart(products[5].id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}