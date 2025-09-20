import svgPaths from "../../imports/svg-v19dzg38pm";
import TopLinksLikeWhiteModeLanguage from "./TopLinksLikeWhiteModeLanguage";

function Group() {
  return (
    <div className="absolute inset-[4.17%_12.5%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g id="Group">
          <path d={svgPaths.p34a0d00} fill="var(--fill-0, black)" id="Vector (Stroke)" />
          <path d={svgPaths.p1304f000} fill="var(--fill-0, black)" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function AkarIconsLocation() {
  return (
    <div className="overflow-clip relative shrink-0 size-[26px]" data-name="akar-icons:location">
      <Group />
    </div>
  );
}

function WeuiArrowFilled() {
  return (
    <div className="h-[24px] relative w-[12px]" data-name="weui:arrow-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 24">
        <g id="weui:arrow-filled">
          <path clipRule="evenodd" d={svgPaths.p1093a180} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}
function Mode() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-start relative shrink-0 w-full cursor-pointer" data-name="Mode">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Egypt</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none rotate-[90deg] scale-y-[-100%]">
          <WeuiArrowFilled />
        </div>
      </div>
    </div>
  );
}

function Frame1376() {
  return (
    <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Deliver to:</p>
      </div>
      <Mode />
    </div>
  );
}
function DeliverTo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0" data-name="Deliver to">
      <AkarIconsLocation />
      <Frame1376 />
    </div>
  );
}

export default function TopNav() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-center justify-between relative shrink-0 w-full max-w-7xl mx-auto" data-name="TOP NAV">
      <DeliverTo />
      <TopLinksLikeWhiteModeLanguage />
    </div>
  );
}
