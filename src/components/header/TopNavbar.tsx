import TopNav from "./TopNav";

export default function TopNavbar() {
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