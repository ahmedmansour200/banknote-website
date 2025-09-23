import imgImage33 from "../assets/featured-product-1.png";
import imgImage70 from "../assets/featured-product-2.png";
import imgImage254 from "../assets/featured-product-3.png";
import imgImage287 from "../assets/featured-product-4.png";
import imgImage77 from "../assets/featured-product-5.png";
import imgImage258 from "../assets/featured-product-6.png";
import type { LinksData, Product } from "../interfaces";
import imgImg61671 from "../assets/product-img-1.png";
import imgDeliciousCoffeeCupsWithFoamAssortment1 from "../assets/coffee-cups-foam.png";
import imgImg61721 from "../assets/product-img-2.png";
import imgScreenshot202508171722431 from "../assets/screenshot-product.png";
import imgImg61731 from "../assets/product-img-4.png";
import imgImg61711 from "../assets/product-img-5.png";
import imgHighAngleEcoFriendlyProductsArrangement1 from "../assets/eco-friendly-products.png";
import imgNaturalArganOilComposition1 from "../assets/argan-oil-composition.png";
import imgNaturalSelfCareProductsComposition1 from "../assets/self-care-products.png";
import imgImg61621 from "../assets/product-img-3.png";
import imgImg61631 from "../assets/product-img-6.png";
import imgCloseUpBottlesWithOilPillsTable1 from "../assets/bottles-oil-pills.png";
import imgImage from "../assets/category-img-1.png";
import imgImage1 from "../assets/category-img-2.png";
import imgImage2 from "../assets/category-img-3.png";
import imgImage3 from "../assets/category-img-4.png";
import imgRectangle from "../assets/rectangle-element.png";
import imgImage4 from "../assets/category-img-5.png";
import type { Category } from "../interfaces";




export const linksData:LinksData [] = [
      { name: "White Mode", src: "./icons/weui_arrow-outlined.svg" },
      { name: "English", src: "./icons/weui_arrow-outlined.svg" }
]

export const householdSuppliesCategories: Category[] = [
  {
    name: "Dinner Sets",
    image: imgImg61671
  },
  {
    name: "Drinkware",
    image: imgDeliciousCoffeeCupsWithFoamAssortment1
  },
  {
    name: "Kitchen Items",
    image: imgImg61721
  },
  {
    name: "Dutch Oven",
    image: imgScreenshot202508171722431
  },
  {
    name: "Hanging Fork Knife",
    image: imgImg61731
  },
  {
    name: "Storage Boxes",
    image: imgImg61711
  }
];

export const beautyCategories: Category[] = [
  {
    name: "Skin Care",
    image: imgHighAngleEcoFriendlyProductsArrangement1
  },
  {
    name: "Perfumes",
    image: imgNaturalArganOilComposition1
  },
  {
    name: "Hair Care",
    image: imgNaturalSelfCareProductsComposition1
  },
  {
    name: "Body Care",
    image: imgImg61621
  },
  {
    name: "Health & Personal Care",
    image: imgImg61631
  },
  {
    name: "Natural & Essential",
    image: imgCloseUpBottlesWithOilPillsTable1
  }
];

export const furnitureCategories: Category[] = [
  {
    name: "Coffee Table",
    image: imgImage
  },
  {
    name: "Sofa",
    image: imgImage1
  },
  {
    name: "TV Tables",
    image: imgImage2
  },
  {
    name: "Bedroom",
    image: imgImage3
  },
  {
    name: "Desks & Chairs",
    image: imgRectangle
  },
  {
    name: "Wardrobe",
    image: imgImage4
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Revana Tomato Sauce 800gm",
    price: 150,
    image: imgImage33,
    rating: 4
  },
  {
    id: "2",
    name: "Revana Tomato Sauce 800gm",
    price: 200,
    image: imgImage70,
    rating: 4
  },
  {
    id: "3",
    name: "Revana Tomato Sauce 800gm",
    price: 180,
    image: imgImage254,
    rating: 4
  },
  {
    id: "4",
    name: "Revana Tomato Sauce 800gm",
    price: 240,
    image: imgImage287,
    rating: 4
  },
  {
    id: "5",
    name: "Revana Tomato Sauce 800gm",
    price: 230,
    image: imgImage77,
    rating: 4
  }
  ,
  {
    id: "6",
    name: "Revana Tomato Sauce 800gm",
    price: 190,
    image: imgImage258,
    rating: 4
  }
  ,
  {
    id: "7",
    name: "Revana Tomato Sauce 800gm",
    price: 190,
    image: imgImage258,
    rating: 4
  }
  ,
  {
    id: "8",
    name: "Revana Tomato Sauce 800gm",
    price: 190,
    image: imgImage258,
    rating: 4
  }
];
export const heroSlides = [
  {
    id: 1,
    title: "Modern Living Room",
    description: "Discover elegant furniture and decor for your living space",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    type: "video"
  },
  {
    id: 2,
    title: "Elegant Bedroom",
    description: "Create your perfect sanctuary with our bedroom collection",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "image"
  },
  {
    id: 3,
    title: "Modern Kitchen",
    description: "Transform your kitchen with contemporary designs",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    type: "video"
  },
  {
    id: 4,
    title: "Cozy Dining",
    description: "Dining spaces that bring families together",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "image"
  }
];

export const smallProductImages = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjaGFpcnxlbnwxfHx8fDE3NTgwMzkxNDd8MA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1631679706909-1844bbd07221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraXRjaGVuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaW5pbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3J8ZW58MXx8fHwxNzU4MDA4MzUzfDA&ixlib=rb-4.1.0&q=80&w=400",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXJuaXR1cmUlMjBjaGFpcnxlbnwxfHx8fDE3NTgwMzkxNDd8MA&ixlib=rb-4.1.0&q=80&w=400"
];


export const information = [
  {
    id: 1,
    icon: './icons/ep_location.svg',
    text: '123 Main Street, Suite 100 Downtown Area - City Center, State, Country',
    alt: 'Location'
  },
  {
    id: 2,
    icon: './icons/bi_telephone.svg',
    text: '+1 (555) 123-4567',
    alt: 'Phone'
  },
  {
    id: 3,
    icon: './icons/ic_outline-mail.svg',
    text: 'info@homestore.com',
    alt: 'Email'
  }
];

export const shopWithUsLinks = [
  { id: 1, text: 'New Arrivals' },
  { id: 2, text: 'Best Sellers' },
  { id: 3, text: 'Sale Items' },
  { id: 4, text: 'Categories' },
  { id: 5, text: 'Gift Cards' }
];

export const helpLinks = [
  { id: 1, text: 'Customer Service' },
  { id: 2, text: 'FAQ' },
  { id: 3, text: 'Terms of Service' },
  { id: 4, text: 'Privacy Policy' },
  { id: 5, text: 'Return Policy' }
];

export const iconsLink = [
  { svgPath: 'icons/Iconsfa.svg', alt: 'Facebook' },
  { svgPath: 'icons/IconsInstagram.svg', alt: 'Instagram' },
  { svgPath: 'icons/IconsWhatsapp.svg', alt: 'Whatsapp' },
  { svgPath: 'icons/IconsLinkedIn.svg', alt: 'LinkedIn' },
  { svgPath: 'icons/IconsTicTok.svg', alt: 'TicTok' },
  { svgPath: 'icons/IconsTelegram.svg', alt: 'Telegram' },
];

export const iconCreditCard = [
  { svgPath: 'icons/credit-card.svg', alt: 'credit-card' },
  { svgPath: 'icons/Mastercard.svg', alt: 'Mastercard' },
  { svgPath: 'icons/PayPal.svg', alt: 'PayPal' },
  { svgPath: 'icons/GooglePay.svg', alt: 'GooglePay' },
  { svgPath: 'icons/credit-card-1.svg', alt: 'credit-card-1' },
  { svgPath: 'icons/ValU.svg', alt: 'ValU' },
  { svgPath: 'icons/download 2.svg', alt: 'download-2' },
];
