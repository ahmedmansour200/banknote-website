
import svgPaths from "../../imports/svg-v19dzg38pm";
function WeuiArrowFilled1() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, #0E0E0E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Mode1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-start relative shrink-0 cursor-pointer" data-name="Mode">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e0e0e] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">White Mode</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <WeuiArrowFilled1 />
        </div>
      </div>
    </div>
  );
}

function WeuiArrowFilled2() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, #0E0E0E)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
function Language() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-start relative shrink-0 cursor-pointer" data-name="Language">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e0e0e] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">English</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <WeuiArrowFilled2 />
        </div>
      </div>
    </div>
  );
}
export default function TopLinksLikeWhiteModeLanguage() {
  return (
    <div className="content-stretch flex flex-wrap gap-[16px] lg:gap-[32px] items-center justify-start relative shrink-0" data-name="Top links like White mode & Language">
      <Mode1 />
      <Language />
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e0e0e] text-[16px] text-nowrap cursor-pointer hover:text-[#c39c45] transition-colors">
        <p className="leading-[24px] whitespace-pre">Track Order</p>
      </div>
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e0e0e] text-[16px] text-nowrap cursor-pointer hover:text-[#c39c45] transition-colors">
        <p className="leading-[24px] whitespace-pre">Become a supplier</p>
      </div>
    </div>
  );
}
