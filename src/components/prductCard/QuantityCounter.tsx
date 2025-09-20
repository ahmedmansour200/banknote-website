
export default function QuantityCounter({
  quantity,
  onIncrease,
  onDecrease
}: {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] h-[30px] items-start justify-start px-[7px] py-[5px] relative rounded-[4px] shrink-0 w-[72px]" data-name="Quantity Counter">
      <div className="content-stretch flex gap-[12px] items-center justify-start relative shrink-0">
        <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[16px] text-[darkgrey] text-center text-nowrap">
          <p className="leading-[20px] whitespace-pre">{quantity}</p>
        </div>
        <div className="h-[20px] relative shrink-0 w-[37px]">
           <div className="w-[37px] flex justify-center items-center h-5 rounded border border-[#a9a9a9]">
                                    <button
                                      onClick={onIncrease}
                                      className="w-[18px] h-[18px] flex items-center justify-center hover:bg-[#c39c45] transition-colors"
                                      title="Decrease quantity"
                                    >
                                      <img alt="decrease" className="w-[18px] h-[18px] rotate-180 filter hover:brightness-0 invert" src="./icons/weui_arrow-outlined.svg" />
                                    </button>
                                    <div className="w-0 h-4 rotate-180 outline outline-offset-[-0.50px] outline-[#a9a9a9]" />
                                    <button
                                        onClick={onDecrease}
                                        className="w-[18px] h-[18px] flex items-center justify-center hover:bg-[#c39c45] transition-colors"
                                        title="Increase quantity"
                                    >
                                        <img alt="increase" className="w-[18px] h-[18px]  filter hover:brightness-0 invert" src="./icons/weui_arrow-outlined.svg" />
                                    </button>
                                </div>
        </div>
      </div>
    </div>
  );
}
