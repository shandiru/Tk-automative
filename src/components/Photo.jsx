import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Gallery = () => {
  const images = [
    "TK1.jpg",
    "TK2.jpg",
    "TK3.jpg",
    "TK4.jpg",
    "TK5.jpg",
    "TK6.jpg",
    
  ];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          {/* Color changed to brand blue #062da3 */}
          <h3 className="text-[#062da3] uppercase tracking-[0.3em] font-bold text-sm mb-2">Our Gallery</h3>
          <h2 className="text-4xl font-bold text-white">Quality in every detail</h2>
        </div>
        
        {/* Custom Navigation Arrows - Hover colors changed to brand blue */}
        <div className="hidden md:flex gap-4">
          <button className="swiper-prev-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#062da3] hover:border-[#062da3] transition-all">
            <ArrowLeft size={20} />
          </button>
          <button className="swiper-next-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#062da3] hover:border-[#062da3] transition-all">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{
          nextEl: '.swiper-next-btn',
          prevEl: '.swiper-prev-btn',
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3.5 },
        }}
        className="px-6 lg:px-12"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900">
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              {/* Overlay gradient changed to brand blue #062da3 for a cohesive feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062da3]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="text-white font-bold uppercase tracking-widest text-sm">View Project</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;