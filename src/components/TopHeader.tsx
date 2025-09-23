import imgLogo from "../assets/logo.png";
import { useCart } from "../context/CarContext";
import Container from "./ui/Container";
import TopNavbar from "./ui/TopNavbar";


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
       <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative" data-name="cart">
         <img src="./icons/ion_cart-outline.svg" className="w-6 h-6 brightness-0" alt="cart"/>

     <div className="[grid-area:1_/_1] bg-[#e2c774] box-border content-stretch flex flex-col gap-2 items-center justify-center ml-[10.954px] mt-2 px-[6px] py-[2px] relative rounded-[10px] size-[16px]" data-name="counter">
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


function MainHeader() {
  return (

 <div className="bg-white w-full overflow-x-hidden">
  <div className="flex flex-col items-center w-full">
    <Container className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between" 
    >      {/* Logo */}
      <img
        className="bg-center bg-cover bg-no-repeat w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[134px] lg:h-[134px] "
        src={imgLogo}
        alt="Logo"
      />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full lg:flex-1 gap-4 lg:gap-2">

      {/* Categories & Search */}
      <div
        className="flex flex-col sm:flex-row gap-2 lg:gap-3 items-center justify-center w-full lg:flex-1"
        data-name="Categories & search"
      >
        <div className="w-full sm:w-auto flex-shrink-0">
          <CategoriesButton />
        </div>
        <div className="w-full sm:flex-1">
          <SearchInput />
        </div>
      </div>

      {/* Action Links */}
      <div
        className="grid grid-cols-2 sm:grid-rows-1 sm:grid-cols-4 gap-3 mb-3 lg:mt-0"
        data-name="Links"
      >
        <Account />
        <Compare />
        <Wishlist />
        <Cart />
      </div>
    </div>
</Container>  
    </div>
</div>

  );
}


function Navbar() {
  return (
    <div className="bg-white w-full" data-name="Navbar">
  {/* Top border line */}
  <div className="h-[0.5px] bg-[#C39C45] w-full" />

     <Container className="w-full flex gap-14 items-center justify-between" 
    >
      {/* Navigation Links */}
      <div
        className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 lg:gap-8 text-[16px] md:text-[18px] font-['Radley',_sans-serif] text-black"
        data-name="Links"
        >
        {["Home", "About", "Shop", "Contact", "Orders"].map((link) => (
          <p
          key={link}
          className=" text-black text-lg lg:text-xl font-normal font-['Radley'] cursor-pointer hover:text-[#c39c45] transition-colors whitespace-nowrap"
          >
            {link}
          </p>
        ))}
      </div>

      {/* Discount Banner (only visible on lg and above) */}
      <div className="hidden lg:flex items-center justify-center">
        <div
          className="w-[280px] xl:w-[314px] h-[60px] bg-[#c39c45] flex items-center justify-center gap-2 px-4 rounded-bl-[40px]"
          data-name="discount"
        >
          <p className="text-white text-[16px] xl:text-[18px] font-['Radley',_sans-serif]">
            Get 20% Discount Now
          </p>
          <div
            className="bg-white px-3 py-1 rounded-[25px] flex items-center justify-center"
            data-name="Sale"
          >
            <p className="text-[#c39c45] text-[16px] xl:text-[18px] font-['Radley',_sans-serif]">
              Sale
            </p>
          </div>
        </div>
      </div>
          </Container>

  {/* Bottom border line */}
  <div className="h-[0.5px] bg-[#C39C45] w-full" />
</div>

  );
}

export default function TopHeader() {
  return (
    <div className="flex flex-col items-center justify-start w-full" data-name="Top header">
      <TopNavbar />
      <MainHeader />
      <Navbar />
      <div className="h-[0.5px] bg-[#BA9648] relative shrink-0 w-full" data-name="Line 2 (Stroke)" />
    </div>
  );
}