import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "./Gallery.css";
import { GalleryCard } from "./GalleryCard";

export const Gallery = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      image: "/img/city4.jpg",
      title: "FLASH LIGHTS",
      imageCount: "18 IMAGES",
    },
    {
      image: "/img/place.jpg",
      title: "NOTES ON VISION",
      imageCount: "12 IMAGES",
    },
    {
      image: "/img/clock.jpg",
      title: "TIME",
      imageCount: "09 IMAGES",
    },
    {
      image: "/img/building.jpg",
      title: "FLORENCE",
      imageCount: "20 IMAGES",
    },
    {
      image: "/img/city2.jpg",
      title: "CITY",
      imageCount: "15 IMAGES",
    },
    {
      image: "/img/city3.jpg",
      title: "CITY",
      imageCount: "18 IMAGES",
    },
    {
      image: "/img/place.jpg",
      title: "NATURE",
      imageCount: "22 IMAGES",
    }
  ];

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentIndex(swiper.activeIndex);
  };

  const handlePrevClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative top-10 pt-10 px-4 sm:px-6 md:px-8 lg:px-10 main-title">
      {/* Carrusel de imágenes */}
      <div className="relative mb-8 w-full overflow-hidden">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={16}
          slidesPerView="auto"
          navigation={false}
          pagination={false}
          mousewheel={true}
          grabCursor={true}
          onSlideChange={handleSlideChange}
          className="gallery-swiper"
          freeMode={true}
          cssMode={false}
          watchSlidesProgress={true}
          preventInteractionOnTransition={false}
          breakpoints={{
            640: {
              spaceBetween: 20,
            },
            768: {
              spaceBetween: 25,
            },
            1024: {
              spaceBetween: 30,
            },
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide
              key={index}
              style={{ width: "280px" }}
              className="sm:w-[300px]"
            >
              <GalleryCard
                image={item.image}
                title={item.title}
                imageCount={item.imageCount}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Flechas de navegación en la parte derecha */}
      <div className="flex justify-center lg:justify-end items-center space-x-4 mb-8">
        <button
          onClick={handlePrevClick}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-transparent border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center group"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-transparent border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center group"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Sección inferior con número y texto */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 sm:gap-0">
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/30 text-center sm:text-left">
          {(currentIndex + 1).toString().padStart(2, "0")}
        </div>
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white/30 to-white text-center sm:text-left">
          GALLERY
        </div>
      </div>
    </div>
  );
};
