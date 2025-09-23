import Container from "./Container";

function AppDownloadSection() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[24px] items-center justify-start relative shrink-0" data-name="Download App">
      <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-black text-center sm:text-left">
      <p className="leading-[20px] sm:leading-[24px]" dir="auto">
        Download App
      </p>
      </div>
      <div className="flex gap-3 sm:gap-[24px] items-center justify-center sm:justify-start">
      <div className="h-[30px] sm:h-[35px] relative shrink-0 w-[92px] sm:w-[107px]" data-name="image google">
        <img className="block max-w-none size-full" src='./images/google-play-store.png' alt="Google Play Store" />
      </div>
      <div className="h-[30px] sm:h-[35px] relative shrink-0 w-[92px] sm:w-[107px]" data-name="image App store">
        <img className="block max-w-none size-full" src='images/apple-app-store.png' alt="Apple App Store" />
      </div>
      </div>
    </div>
  );
}

function CopyrightAndDownloadSection() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-center justify-between relative shrink-0 w-full" data-name="copyright & download app">
      <div className="content-stretch flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-between relative shrink-0 w-full max-w-7xl mx-auto">
        <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#616161] text-[16px] text-center lg:text-left">
          <p className="leading-[24px]" dir="auto">
            <span>{`Copyright 2025 `}</span>
            <span className="text-[#c39c45]">HomeStore</span>
            <span>{` All rights reserved.`}</span>
          </p>
        </div>
        <AppDownloadSection />
      </div>
      <div className="fixed bg-[#c39c45] box-border content-stretch flex gap-[10px] items-center justify-center p-[11px] rounded-[23px] bottom-4 right-4 cursor-pointer hover:bg-[#b0893e] transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title="Back to top">
        <img src='icons/weui_arrow-outlined.svg' className="font-bold w-8 h-8 brightness-0 rotate-180" alt="topPage" />
      </div>
    </div>
  );
}

export default function FooterBottomSection() {
  return (
    <Container className="bg-white min-h-[96px] relative flex justify-between items-center py-7 w-full">
          <CopyrightAndDownloadSection />
    </Container>
  );
}
