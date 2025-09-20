interface AddToCartButtonProps {
  onClick: () => void;
}

export default function AddToCartButton({ onClick }: AddToCartButtonProps) {
  return (
    <button
      onClick={onClick}
      className="box-border content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[4px] relative rounded-[4px] shrink-0 w-[72px] cursor-pointer hover:bg-[#d4a53a] transition-colors"
      data-name="Add to cart"
    >
      <div aria-hidden="true" className="absolute border border-[#c39c45] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="font-['Cairo:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[#c39c45] text-[12px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Add</p>
      </div>
      <div className="relative shrink-0 size-[18px]" data-name="ion:cart-outline">
        <img src='icons/ion_cart-outline.svg' alt="cart" className="block size-full" />
      </div>
    </button>
  );
}