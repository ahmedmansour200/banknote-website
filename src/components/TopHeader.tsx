import imgLogo from "../assets/logo.png";
import { useCart } from "../context/CarContext";



function DeliverTo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0" data-name="Deliver to">
      <div className="overflow-clip relative shrink-0 size-[26px]" data-name="akar-icons:location">
      <img src='./icons/ep_location.svg' alt="location" />
    </div>
       <div className="content-stretch flex flex-col items-start justify-start relative shrink-0">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[14px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Deliver to:</p>
      </div>
       <div className="content-stretch flex gap-[4px] items-center justify-start relative shrink-0 w-full cursor-pointer" data-name="Mode">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[normal] whitespace-pre">Egypt</p>
      </div>
      <div className="flex h-[12px] items-center justify-center relative shrink-0 w-[24px]">
        <div className="flex-none">
                <img src='./icons/weui_arrow-outlined.svg' className="w-7 h-7 brightness-0 " alt="more" />

        </div>
      </div>
    </div>
    </div>
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
        <div className="flex-none">
                          <img src='./icons/weui_arrow-outlined.svg' className="w-7 h-7 brightness-0 " alt="more" />

        </div>
      </div>
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
        <div className="flex-none">
                          <img src='./icons/weui_arrow-outlined.svg' className="w-7 h-7 brightness-0" alt="more" />

        </div>
      </div>
    </div>
  );
}

function TopLinksLikeWhiteModeLanguage() {
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

function TopNav() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row gap-4 lg:gap-0 items-start lg:items-center justify-between  relative shrink-0 w-full max-w-7xl mx-auto" data-name="TOP NAV">
      <DeliverTo />
      <TopLinksLikeWhiteModeLanguage />
    </div>
  );
}

function TopNavbar() {
  return (
    <div className="bg-[#e2c774] relative shrink-0 w-full" data-name="TOP Navbar">
      <div className="flex flex-col items-center justify-center relative w-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-4 md:px-8 lg:px-[108px] py-[16px] relative w-full">
          <TopNav />
        </div>
      </div>
    </div>
  );
}




function CategoriesButton() {
  return (
    <div className="bg-[#fbf3d9] box-border content-stretch flex flex-col gap-[10px] items-start justify-start px-[10px] py-[12px] relative rounded-[4px] shrink-0 w-[126px] cursor-pointer hover:bg-[#f5eed0] transition-colors" data-name="Categories Button">
        <div className="content-stretch flex gap-[8px] items-center justify-start relative shrink-0 w-full">
                      <img src='./icons/fluent_list-24-filled.svg' alt="more" />

      <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[#0e0e0e] text-[16px] text-center text-nowrap">
        <p className="leading-[24px] whitespace-pre" dir="auto">
          Categories
        </p>
      </div>
    </div>
    </div>
  );
}




function SearchInput() {
  return (
    <div className="bg-[#fbf3d9] box-border content-stretch flex flex-col gap-[10px] h-[48px] items-center justify-center px-[8px] py-[6px] relative rounded-[4px]">
      <div className="content-stretch flex gap-2 sm:gap-4 lg:gap-[70px] items-center justify-between relative shrink-0 w-full">
        <input
          type="text"
          placeholder="Search for products, categories or brands"
          className="font-['Cairo:Regular',_sans-serif] font-normal leading-[0] not-italic flex-1 text-[#5a5a5a] text-[14px] sm:text-[16px] bg-transparent border-none outline-none placeholder:text-[#5a5a5a] min-w-0"
        />
        <button 
          title="Search" 
          className="bg-[#e2c774] box-border content-stretch flex flex-col gap-[10px] h-[36px] items-start justify-start px-[8px] sm:px-[16px] py-[5px] relative rounded-[4px] shrink-0 w-[80px] sm:w-[110px] cursor-pointer hover:bg-[#d9bc6a] transition-colors" 
          data-name="search button"
        >
          <div className="content-stretch flex gap-[4px] sm:gap-[8px] items-center justify-center relative shrink-0 w-full" data-name="search info">
            <div className="font-['Cairo:Bold',_sans-serif] font-bold leading-[0] not-italic relative shrink-0 text-[14px] sm:text-[16px] text-center text-nowrap text-white hidden sm:block">
              <p className="leading-[24px] whitespace-pre">Search</p>
            </div>
            <img src='icons/mi_search.svg' alt="search" />
          </div>
        </button>
      </div>
    </div>
  );
}

function CategoriesSearch() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[8px] items-center justify-start relative shrink-0 w-full sm:w-fit" data-name="Categories & search">
      <CategoriesButton />
      <SearchInput />
    </div>
  );
}



function Account() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-center justify-center px-[16px] py-[7px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[var(--main-color)] transition-colors" data-name="Account">
      <div aria-hidden="true" className="absolute border border-[#c5c5c3] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0.4px_6px_0px_#c2baac]" />
      <div className="content-stretch flex gap-[4px] h-[24px] items-end justify-start relative shrink-0" data-name="account">
        <img src="./icons/solar_user-outline.svg" alt="account"/>
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#0e0e0e] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Account</p>
      </div>
    </div>
    </div>
  );
}



function Compare() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-center justify-center px-[16px] py-[7px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[var(--main-color)] transition-colors" data-name="Compare">
      <div aria-hidden="true" className="absolute border border-[#c5c5c3] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0.4px_6px_0px_#c2baac]" />
       <div className="content-stretch flex gap-[4px] h-[29px] items-end justify-start relative shrink-0" data-name="COMPARE">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="COMPARE">
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-0 mt-[5.5px] relative size-[24px]">
        <div className="flex-none scale-y-[-100%]">
                  <img src="./icons/ion_git-compare-outline.png" alt="account"/>

        </div>
      </div>
       <div className="[grid-area:1_/_1] bg-[#e2c774] box-border content-stretch flex flex-col gap-[10px] items-center justify-center ml-[13.132px] mt-0 px-[6px] py-[2px] relative rounded-[10px] size-[16px]" data-name="counter">
      <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[14px] whitespace-pre">0</p>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}

function Wishlist() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-center justify-center px-[16px] py-[7px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[var(--main-color)] transition-colors">
      <div aria-hidden="true" className="absolute border border-[#c5c5c3] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0.4px_6px_0px_#c2baac]" />
      <div className="content-stretch flex gap-[4px] h-[29px] items-end justify-center leading-[0] relative shrink-0" data-name="cart">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="cart">
                        <img src="./icons/iconoir_heart.svg " className="w-6 h-6 brightness-0" alt="account"/>

      <div className="[grid-area:1_/_1] bg-[#e2c774] box-border content-stretch flex flex-col gap-[10px] items-center justify-center ml-[13px] mt-0 px-[6px] py-[2px] relative rounded-[10px] size-[16px]" data-name="counter">
      <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[14px] whitespace-pre">0</p>
      </div>
    </div>
    </div>
      <div className="font-['Radley:Regular',_sans-serif] not-italic relative shrink-0 text-[#0e0e0e] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Wishlist</p>
      </div>
    </div>
    </div>
  );
}

function Cart() {
  const {cartCount} = useCart()
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[48px] items-center justify-center px-[16px] py-[7px] relative rounded-[4px] shrink-0 cursor-pointer hover:bg-[var(--main-color)] transition-colors">
      <div aria-hidden="true" className="absolute border border-[#c5c5c3] border-solid inset-0 pointer-events-none rounded-[4px] shadow-[0px_0.4px_6px_0px_#c2baac]" />
       <div className="content-stretch flex gap-[4px] h-[29px] items-end justify-center leading-[0] relative shrink-0" data-name="cart">
       <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="cart">
         <img src="./icons/ion_cart-outline.svg" alt="account"/>

         <div className="[grid-area:1_/_1] bg-[#e2c774] box-border content-stretch flex flex-col gap-[10px] items-center justify-center ml-[10.954px] mt-0 px-[6px] py-[2px] relative rounded-[10px] size-[16px]" data-name="counter">
      <div className="font-['Cairo:SemiBold',_sans-serif] font-semibold leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
        <p className="leading-[14px] whitespace-pre">{cartCount}</p>
      </div>
    </div>
    </div>
      <div className="font-['Radley:Regular',_sans-serif] not-italic relative shrink-0 text-[#0e0e0e] text-[18px] text-nowrap">
        <p className="leading-[normal] whitespace-pre">Cart</p>
      </div>
    </div>
    </div>
  );
}

function Links() {
  return (
    <div className="flex gap-[8px] relative items-center justify-start w-full" data-name="Links">
      <Account />
      <Compare />
      <Wishlist />
      <Cart />
    </div>
  );
}


function MainHeader() {
  return (
    <div className="bg-white relative shrink-0 w-full overflow-x-hidden ">
      <div className="flex flex-col items-center justify-center relative w-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-4 md:px-8 lg:px-[108px] py-[16px] relative w-full">
            <div className=" flex flex-col lg:flex-row gap-[12px] items-center justify-start lg:justify-start relative w-full max-w-7xl">
      <div className="bg-center bg-cover bg-no-repeat size-[134px]" data-name="Logo" style={{ backgroundImage: `url('${imgLogo}')` }} />
      <div className="flex md:flex-row xl:flex-row gap-4 items-center justify-center xl:justify-between relative w-full">
        <div className="w-full xl:w-auto">
          <CategoriesSearch />
        </div>
        <div className="w-full xl:w-auto flex justify-center xl:justify-end">
          <Links />
        </div>
      </div>
            </div>
        </div>
      </div>
    </div>
  );
}

function Links1() {
  return (
    <div className="content-stretch flex flex-wrap font-['Radley:Regular',_sans-serif] gap-[16px] lg:gap-[32px] items-center justify-start not-italic relative shrink-0 text-[18px] text-black text-center text-nowrap" data-name="Links">
      <div className="relative shrink-0 cursor-pointer hover:text-[#c39c45] transition-colors">
        <p className="leading-[normal] text-nowrap whitespace-pre">Home</p>
      </div>
      <div className="relative shrink-0 cursor-pointer hover:text-[#c39c45] transition-colors">
        <p className="leading-[normal] text-nowrap whitespace-pre">About</p>
      </div>
      <div className="relative shrink-0 cursor-pointer hover:text-[#c39c45] transition-colors">
        <p className="leading-[normal] text-nowrap whitespace-pre">Shop</p>
      </div>
      <div className="relative shrink-0 cursor-pointer hover:text-[#c39c45] transition-colors">
        <p className="leading-[normal] text-nowrap whitespace-pre">Contact</p>
      </div>
      <div className="relative shrink-0 cursor-pointer hover:text-[#c39c45] transition-colors">
        <p className="leading-[normal] text-nowrap whitespace-pre">Orders</p>
      </div>
    </div>
  );
}

function Sale() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[8px] py-0 relative rounded-[25px] shrink-0" data-name="Sale">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#c39c45] text-[18px] text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Sale</p>
      </div>
    </div>
  );
}

function Discount() {
  return (
    <div className="w-[314px] rounded-bl-[40px] rout h-[60px] bg-[#c39c45] content-stretch flex gap-[8px] items-center justify-center relative px-4 py-2" data-name="discount">
      <div className="font-['Radley:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[18px] text-center text-nowrap text-white">
        <p className="leading-[normal] whitespace-pre">Get 20% Discount Now</p>
      </div>
      <Sale />
    </div>
  );
}

function NavLink() {
  return (
    <div className="content-stretch flex flex-col lg:flex-row items-center justify-between relative w-full max-w-7xl mx-auto" data-name="Nav Link">
      <Links1 />
      <div className="hidden lg:block">
        <Discount />
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Navbar">
      <div className="flex flex-col items-center justify-center relative w-full">
      <div className="h-[0.5px] bg-[#C39C45] relative shrink-0 w-full" data-name="Line 1 (Stroke)" />
        <div className=" content-stretch flex flex-col gap-[10px] items-center justify-center px-4 md:px-8 lg:px-[108px] relative w-full">
          <NavLink />
        </div>
      </div>
      <div className="h-[0.5px] bg-[#C39C45] relative shrink-0 w-full" data-name="Line 1 (Stroke)" />
    </div>
  );
}

export default function TopHeader() {
  return (
    <div className="content-stretch flex flex-col items-center justify-start relative w-full" data-name="Top header">
      <TopNavbar />
      <MainHeader />
      <Navbar />
      <div className="h-[0.5px] bg-[#BA9648] relative shrink-0 w-full" data-name="Line 2 (Stroke)" />
    </div>
  );
}