import { helpLinks, iconCreditCard, iconsLink, information, shopWithUsLinks } from "../../data";
import Container from "./Container";

function ContactInformation() {
  return (
    <div className="flex flex-col gap-4 items-start justify-start w-full">
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
    <div className="flex flex-col gap-4 items-start justify-start w-full sm:w-auto">
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
    <div className="flex flex-col gap-4 items-start justify-start w-full sm:w-auto">
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
      <div className="font-['Cairo',_sans-serif] font-medium text-sm sm:text-base text-[#eeeeee] w-full">
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
    <div className="flex flex-col gap-4 items-start justify-start w-full sm:w-auto">
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

export default function FooterDarkSection() {
  return (
    <Container className="bg-[#0e0e0e] w-full py-16">
      <div className="relative size-full">
            <FooterMainContent />
            <FooterSocialAndPayment />
        </div>
    </Container>
  );
}