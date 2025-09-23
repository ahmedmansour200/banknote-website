import { linksData } from "../../data";
import Container from "./Container";

const TopNavbar = ()=> {

  return (
    <Container className="bg-[#e2c774] w-full py-3 flex gap-14 items-center justify-between" 
    >

    
    {/* Deliver to */}
    <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
      <img
        src="./icons/ep_location.svg"
        alt="location"
        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
      />
      <div className="flex flex-col leading-none">
        <span className="text-[10px] sm:text-xs md:text-sm lg:text-base text-black">
          Deliver to:
        </span>
        <div className="flex items-center gap-1 sm:gap-2">
          <span className="text-xs sm:text-sm md:text-base lg:text-lg text-black">
            Egypt
          </span>
          <img
            src="./icons/weui_arrow-outlined.svg"
            alt="more"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 brightness-0"
          />
        </div>
      </div>
    </div>

    {/* Links */}
    <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-[#0e0e0e]">
      
      {linksData.map((item) => (
      <div key={item.name} className="flex items-center gap-1 sm:gap-2 cursor-pointer">
        <span className="text-xs sm:text-sm md:text-base lg:text-lg">{item.name}</span>
        <img
        src={item.src}
        alt="more"
        className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 brightness-0"
        />
      </div>
      ))}
      <div className=" flex items-center justify-between gap-1 sm:gap-2 cursor-pointer">
      {/* Track Order */}
      <p className="text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer hover:text-[#c39c45] transition-colors">
      Track Order
      </p>

      {/* Become a supplier (hidden on mobile) */}
      <p className="hidden sm:inline text-xs sm:text-sm md:text-base lg:text-lg cursor-pointer hover:text-[#c39c45] transition-colors">
      Become a supplier
      </p>
      </div>
    </div>
          </Container>

  );
}
export default TopNavbar;