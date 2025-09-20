import { helpLinks, iconCreditCard, iconsLink, information, shopWithUsLinks } from "../data";

function ContactInformation() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full lg:w-[287px] xl:w-[320px]">
      <div className="flex flex-col gap-6 items-start justify-start w-full">
        {information.map((info) => (
          <div key={info.id} className="flex gap-4 items-start justify-start w-full">
            <img
              src={info.icon}
              alt={info.alt}
              className="w-6 h-6 flex-shrink-0 mt-0.5"
            />
            <div className="font-['Cairo',_sans-serif] font-medium text-base text-white flex-1 min-w-0">
              <p className="leading-6 break-words">
                {info.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ShopWithUsLinks() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full sm:w-auto lg:w-[143px] xl:w-[160px]">
      <div className="font-['Cairo',_sans-serif] font-bold text-xl text-white w-full">
        <p className="leading-6">
          Shop With Us
        </p>
      </div>
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        {shopWithUsLinks.map((link) => (
          <div key={link.id} className="w-full">
            <p className="font-['Cairo',_sans-serif] font-medium text-base text-white leading-6 hover:text-[#c39c45] cursor-pointer transition-colors">
              {link.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HelpSection() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full sm:w-auto lg:w-[143px] xl:w-[160px]">
      <div className="font-['Cairo',_sans-serif] font-bold text-xl text-white w-full">
        <p className="leading-6">
          Let us Help you
        </p>
      </div>
      <div className="flex flex-col gap-4 items-start justify-start w-full">
        {helpLinks.map((link) => (
          <div key={link.id} className="w-full">
            <p className="font-['Cairo',_sans-serif] font-medium text-base text-white leading-6 hover:text-[#c39c45] cursor-pointer transition-colors">
              {link.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterSubscription() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full">
      <div className="font-['Cairo',_sans-serif] font-medium text-sm sm:text-base text-[#eeeeee] w-full max-w-[352px]">
        <p className="leading-5 sm:leading-6">
          Subscribe to the mailing list to receive updates on the new arrivals and other discounts
        </p>
      </div>
      <div className="relative w-full max-w-[400px]">
        <div className="flex flex-col sm:flex-row h-auto sm:h-12 border border-[#c5c5c3] rounded bg-black overflow-hidden">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-3 sm:px-4 py-3 sm:py-2 text-sm font-['Cairo',_sans-serif] text-white bg-transparent border-none outline-none placeholder-gray-400 w-full"
          />
          <button className="bg-[#c39c45] hover:bg-[#b0893e] transition-colors px-4 py-3 sm:py-2 rounded-b sm:rounded-b-none sm:rounded-r font-['Cairo',_sans-serif] font-bold text-sm sm:text-base text-white whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>
      <div className="font-['Cairo',_sans-serif] font-medium text-sm sm:text-base text-[#eeeeee] w-full max-w-[352px]">
        <p className="leading-5 sm:leading-6">
          I would like to receive news and special offers
        </p>
      </div>
    </div>
  );
}

function NewsletterSection() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full lg:w-[352px] xl:w-[400px]">
      <div className="font-['Cairo',_sans-serif] font-bold text-xl text-white w-full">
        <p className="leading-6">
          Our Newsletter
        </p>
      </div>
      <NewsletterSubscription />
    </div>
  );
}

function FooterGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2  w-full">
      <div className="sm:col-span-2 lg:col-span-1">
        <ContactInformation />
      </div>
      <div className="lg:col-span-1">
        <ShopWithUsLinks />
      </div>
      <div className="lg:col-span-1">
        <HelpSection />
      </div>
      <div className="sm:col-span-2 lg:col-span-1">
        <NewsletterSection />
      </div>
    </div>
  );
}

function FooterMainContent() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-start lg:items-center justify-start relative shrink-0 w-full">
      <div className="bg-center bg-cover bg-no-repeat shrink-0 size-[170px] mx-auto lg:mx-0" data-name="IMG_3270 2">
        <img src="./images/logo.png" alt="HomeStore Logo" className="w-full h-full object-cover" />
      </div>
      <FooterGrid />
    </div>
  );
}

function SocialMediaSection() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start sm:items-center justify-start relative shrink-0" data-name="Follow Us">
      <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[16px]">
        <p className="leading-[24px]" dir="auto">
          Follow Us:
        </p>
      </div>
      <div className="content-stretch flex flex-wrap gap-[8px] sm:gap-[12px] md:gap-[16px] items-center justify-start relative shrink-0 w-full max-w-[240px]" data-name="Social Media">
        {iconsLink.map((icon, index) => (
          <div key={index} className="bg-[#4e4e4e] box-border content-stretch flex gap-[10px] items-center justify-center p-[8px] sm:p-[10px] relative rounded-[22px] shrink-0 size-[36px] sm:size-[40px]" data-name="Icon background">
            <img src={icon.svgPath} alt={icon.alt} className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        ))}
      </div>
    </div>
  );
}

function PaymentMethodsSection() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start sm:items-center justify-start relative shrink-0" data-name="Payment Accepts">
      <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#eeeeee] text-[16px]">
        <p className="leading-[normal]" dir="auto">
          Payment Accepts:
        </p>
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-start justify-start relative shrink-0 w-full max-w-[376px]">
        <div className="content-start flex flex-wrap gap-[8px] sm:gap-[16px] items-start justify-start relative shrink-0 w-full">
          {iconCreditCard.map((icon, index) => (
            <div key={index} className="h-[27.429px] relative shrink-0 w-[40px]" data-name={icon.alt}>
              <img className="block max-w-none size-full" height="27.429" src={icon.svgPath} width="40" alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FooterSocialAndPayment() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start justify-start relative shrink-0 w-full">
      <div className="h-px bg-[#C5C5C3] relative shrink-0 w-full" data-name="Line 3 (Stroke)" />
      <div className="content-stretch flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center justify-between relative shrink-0 w-full">
        <SocialMediaSection />
        <PaymentMethodsSection />
      </div>
    </div>
  );
}

function FooterDarkSection() {
  return (
    <div className="bg-[#0e0e0e] w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-start px-4 md:px-8 lg:px-[108px] py-[64px] relative w-full">
          <div className="content-stretch flex flex-col gap-[72px] items-start justify-start relative shrink-0 w-full mx-auto">
            <FooterMainContent />
            <FooterSocialAndPayment />
          </div>
        </div>
      </div>
    </div>
  );
}

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

function FooterBottomSection() {
  return (
    <div className="bg-white min-h-[96px] relative shrink-0 w-full" data-name="Footer Buttom">
      <div className="flex flex-col justify-center relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start justify-center px-4 md:px-8 lg:px-[69px] py-[32px] relative w-full">
          <CopyrightAndDownloadSection />
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start" data-name="Footer">
      <FooterDarkSection />
      <FooterBottomSection />
    </div>
  );
}