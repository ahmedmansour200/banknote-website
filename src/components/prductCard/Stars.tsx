export default function Stars({ rating }: { rating: number }) {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-start relative shrink-0" data-name="Stars">
      {[...Array(5)].map((_, i) => (
         <div className="relative shrink-0 size-[16px]" data-name="ic:round-star">
        <img src={i < rating ? './icons/ic_round-star1.svg' : './icons/ic_round-star.svg'} alt="star" className="block size-full" />
    </div>
      ))}
    </div>
  );
}
