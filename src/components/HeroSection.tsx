import { useState, useEffect } from 'react';
import { heroSlides, smallProductImages } from '../data';
import Container from './ui/Container';



export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };


 


  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);


  return (
        <Container className="w-full h-full  py-16 grid grid-rows-0 sm:grid-rows-1 gap-8 sm:gap-16 items-center justify-between" 
    >
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 w-full">
          <div className="h-full col-span-3 sm:col-span-9 flex flex-col justify-center">
            <div
              className="relative h-[400px] lg:h-[420px] rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-700 ease-in-out group"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-700"
                style={{
                  backgroundImage: `url('images/IMG_6262 2.png')`
                }}
              />

              <div className="absolute top-3 sm:top-4 lg:top-6 left-3 sm:left-4 lg:left-6 z-10">
                <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 rounded-md lg:rounded-lg shadow-lg transform -rotate-45">
                  <span className="text-xs sm:text-sm font-bold">SPECIAL  OFFER</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-black/20"></div>


              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-4 sm:gap-6 lg:gap-8 opacity-90">
                  {heroSlides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`w-20 sm:w-40 h-24 sm:h-52  rounded-[30%] overflow-hidden border-3 border-white shadow-xl transition-all duration-500 cursor-pointer ${index === currentSlide
                          ? 'scale-110 ring-3 ring-orange-400 shadow-2xl'
                          : 'hover:scale-105 hover:shadow-2xl opacity-80 hover:opacity-100'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full  h-full object-cover transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((_, index) => (
                  <button
                  title='Go to slide'
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`relative transition-all duration-300 ${index === currentSlide ? 'scale-125' : 'hover:scale-110'
                      }`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                        ? 'bg-[#C39C45] shadow-lg'
                        : 'bg-white/50 hover:bg-[#C39C45]'
                      }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
            <img src="images/handmadeCarpet.png" 
            className='w-full col-span-3 h-full' alt="sid" />
        </div>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                animation: 'slideLeft 20s linear infinite',
                transform: `translateX(-${currentSlide * (100 / (window.innerWidth >= 1024 ? 9 : window.innerWidth >= 768 ? 8 : window.innerWidth >= 640 ? 6 : 4))}%)`
              }}
              onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
              onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
            >
              {[...smallProductImages, ...smallProductImages].map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/3  lg:w-[132px] px-1 sm:px-2 group"
                >
                  <div className="relative aspect-square rounded-md lg:rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                    <img
                      src={image}
                      alt={`Product ${(index % smallProductImages.length) + 1}`}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-[#513e04]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-black/50 text-xs sm:text-sm font-medium text-center px-2">
                        Product {(index % smallProductImages.length) + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        <style>
          {`
            @keyframes slideLeft {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            `}
        </style>
    </Container>
  );
}