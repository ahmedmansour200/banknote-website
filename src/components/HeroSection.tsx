import { useState, useEffect } from 'react';
import { heroSlides, smallProductImages } from '../data';



export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };


 


  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="w-full bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 relative">
            <div
              className="relative h-[250px] sm:h-[300px] lg:h-[400px] rounded-xl lg:rounded-2xl overflow-hidden transition-all duration-700 ease-in-out group"
              onMouseEnter={() => setShowTitle(true)}
              onMouseLeave={() => setShowTitle(false)}
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
                      className={`w-40 h-52  rounded-[30%] overflow-hidden border-3 border-white shadow-xl transition-all duration-500 cursor-pointer ${index === currentSlide
                          ? 'scale-110 ring-3 ring-orange-400 shadow-2xl'
                          : 'hover:scale-105 hover:shadow-2xl opacity-80 hover:opacity-100'
                        }`}
                      onClick={() => setCurrentSlide(index)}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={`absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 text-white z-10 transition-all duration-300 ${showTitle ? 'opacity-100 transform translate-y-0' : 'opacity-70 transform translate-y-2'
                }`}>
                <h2 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 transition-all duration-300 ${showTitle ? 'text-orange-300 drop-shadow-lg' : ''
                  }`}>
                  {currentSlideData.title}
                </h2>
                <p className={`text-sm sm:text-base lg:text-lg opacity-90 hidden sm:block transition-all duration-300 ${showTitle ? 'opacity-100' : 'opacity-70'
                  }`}>
                  {currentSlideData.description}
                </p>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {heroSlides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`relative transition-all duration-300 ${index === currentSlide ? 'scale-125' : 'hover:scale-110'
                      }`}
                  >
                    <div className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                        ? 'bg-white shadow-lg'
                        : 'bg-white/50 hover:bg-white/75'
                      }`} />
                    {slide.type === 'video' && (
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full shadow-sm">
                        <div className="w-1 h-1 bg-white rounded-full mx-auto mt-0.5"></div>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                <div
                  className="h-full bg-orange-400 transition-all duration-300"
                  style={{
                    width: `${((currentSlide + 1) / heroSlides.length) * 100}%`
                  }}
                />
              </div>
            </div>
          </div>

            <img src="images/handmadeCarpet.png" className='col-end-2 lg:col-span-1 h-[400px]' alt="sid" />
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
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
                  className="flex-shrink-0 w-1/4 sm:w-1/6 md:w-1/8 lg:w-1/9 px-1 sm:px-2 group"
                >
                  <div className="relative aspect-square rounded-md lg:rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                    <img
                      src={image}
                      alt={`Product ${(index % smallProductImages.length) + 1}`}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-xs sm:text-sm font-medium text-center px-2">
                        Product {(index % smallProductImages.length) + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
      </div>
    </div>
  );
}