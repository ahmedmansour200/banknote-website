import React from "react";
import type { Product } from "../../interfaces";

interface ProductCardProps {
    product: Product;
    quantity?: number;
    onQuantityChange?: (productId: string, quantity: number) => void;
    onAddToCart?: (productId: string) => void;
    onWishlistClick?: (productId: string) => void;
    onCompareClick?: (productId: string) => void;
    onQuickAddToCart?: (productId: string) => void;
}
const ProductCard = ({
    product,
    quantity = 0,
    onQuantityChange,
    onAddToCart,
    onWishlistClick,
    onCompareClick,
    onQuickAddToCart
}: ProductCardProps) => {

    const handleWishlistClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onWishlistClick?.(product.id);
    };

    const handleCompareClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onCompareClick?.(product.id);
    };

    const handleQuickAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        onQuickAddToCart?.(product.id);
    };

    const handleIncreaseQuantity = () => {
        onQuantityChange?.(product.id, quantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (quantity > 0) {
            onQuantityChange?.(product.id, quantity - 1);
        }
    };

    const handleAddToCartClick = () => {
        onAddToCart?.(product.id);
    };

    return (
        <div data-property-1="Default" className="w-[184px] h-[280px] px-3 py-4 bg-[#FBF3D9] rounded inline-flex justify-start items-center gap-2.5">
            <div className="w-40 inline-flex flex-col justify-start items-start gap-2">
                <div className="w-40 h-[130px] px-9 py-[15px] rounded inline-flex justify-center items-center gap-2.5 relative group" style={{ backgroundImage: `url(./bgCard.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div data-image-type="baby oil" className="w-20 h-20 relative" >
                        <img alt="imagCart" className="w-[70.40px] h-20 left-[4.80px] top-0 absolute" src={product.image} />
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded flex justify-center items-end pb-4">
                        <div className="w-[120px] h-10 px-2.5 py-2 bg-[#c39c45] rounded-tl rounded-tr inline-flex flex-col justify-center items-center gap-2.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="inline-flex justify-center items-center gap-2">
                                {/* Heart/Wishlist Button */}
                                <button
                                    onClick={handleWishlistClick}
                                    className="w-6 h-6 p-1 rounded-xl border border-white flex justify-center items-center border-dotted gap-2.5 hover:bg-white hover:bg-opacity-20 transition-colors"
                                    title="Add to wishlist"
                                >
                                    <div className="w-3.5 h-3.5 flex justify-center items-center">
                                        <img src="./icons/iconoir_heart.svg" className="w-[14px] h-[14px]" alt="heart" />
                                    </div>
                                </button>

                                {/* Compare Button */}
                                <button
                                    onClick={handleCompareClick}
                                    className="w-6 h-6 p-1 rounded-xl border border-white flex justify-center items-center border-dotted gap-2.5 hover:bg-white hover:bg-opacity-20 transition-colors"
                                    title="Compare product"
                                >
                                    <div className="w-3.5 h-3.5 flex justify-center items-center">
                                        <img src="./icons/ion_git-compare-outline.svg" className="w-[14px] h-[14px]" alt="icon"/>
                                    </div>
                                </button>

                                {/* Cart Button */}
                                <button
                                    onClick={handleQuickAddToCart}
                                    className="w-6 h-6 p-1 rounded-xl border border-white border-dotted flex justify-center items-center gap-2.5 hover:bg-white hover:bg-opacity-20 transition-colors"
                                    title="Add to cart"
                                >
                                    <div className="w-3.5 h-3.5 flex justify-center items-center">
                                        <img src="./icons/carbon_view.svg" className="w-[14px] h-[14px]" alt="icon" />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <p className="self-stretch justify-start text-[#1e1e1e] text-base font-semibold font-['Cairo']">{product.name}</p>
                    <div className="self-stretch inline-flex justify-start items-center gap-5">
                        <div className="flex justify-start items-center gap-1">
                            <p className="text-center justify-start text-[#ff6506] text-xs font-bold font-['Cairo']">EGP</p>
                            <p className="text-center justify-start text-[#FF6606] text-xl font-bold font-['Cairo'] leading-normal">{product.price}</p>
                        </div>
                        <div data-star="4" className="h-4 flex justify-start items-center">
                            <img className="w-4 h-4" alt="start" src='./icons/ic_round-star1.svg' />
                            <img className="w-4 h-4" alt="start" src='./icons/ic_round-star1.svg' />
                            <img className="w-4 h-4" alt="start" src='./icons/ic_round-star1.svg' />
                            <img className="w-4 h-4" alt="start" src='./icons/ic_round-star2.svg' />
                        </div>
                    </div>
                    <div className="self-stretch inline-flex justify-start items-center gap-4">
                        <div data-property-1="Default" className="w-[72px] h-[30px] px-[7px] py-[5px] bg-white rounded inline-flex flex-col justify-start items-start gap-2.5">
                            <div className="inline-flex justify-start items-center gap-3">
                                <div className="text-center justify-start text-[#a9a9a9] text-base font-semibold font-['Cairo'] leading-tight">{quantity}</div>
                                <div className="w-[37px] flex justify-center items-center h-5 rounded border border-[#a9a9a9]">
                                    <button
                                        onClick={handleDecreaseQuantity}
                                        className="w-[18px] h-[18px] flex items-center justify-center hover:bg-gray-100 transition-colors"
                                        title="Decrease quantity"
                                    >
                                        <img alt="decrease" className="w-[18px] h-[18px] rotate-180" src="./icons/weui_arrow-outlined.svg" />
                                    </button>
                                    <div className="w-0 h-4 rotate-180 outline outline-offset-[-0.50px] outline-[#a9a9a9]" />
                                    <button
                                        onClick={handleIncreaseQuantity}
                                        className="w-[18px] h-[18px] flex items-center justify-center hover:bg-gray-100 transition-colors"
                                        title="Increase quantity"
                                    >
                                        <img alt="increase" className="w-[18px] h-[18px]" src="./icons/weui_arrow-outlined.svg" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div onClick={handleAddToCartClick}
                            data-add-cart="Default" className="w-[72px] px-3 py-1 rounded outline-1 outline-offset-[-1px] outline-[#c39c45] flex justify-center items-center gap-1 cursor-pointer hover:bg-[var(--main-color)] transition-colors group">
                            <div className="text-center justify-start text-[#c39c45] text-xs font-bold font-['Cairo'] group-hover:text-white">Add </div>
                            <img alt="cart" className="w-[18px] h-[18px]  saturate-100 hue-rotate-[45deg] group-hover:brightness-0 group-hover:saturate-100 group-hover:invert" src="./icons/ion_cart-outline.svg " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
