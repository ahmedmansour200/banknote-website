import FooterBottomSection from "./ui/FooterBottomSection";
import FooterDarkSection from "./ui/FooterDarkSection";


export default function Footer() {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start" data-name="Footer">
      <FooterDarkSection />
      <FooterBottomSection />
    </div>
  );
}