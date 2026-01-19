import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Gallery = () => {
  const images = [
    "https://cdn.prod.website-files.com/666af2e7ac836c0b4d22e83a/666c627591a8a1e0ad20b650_nomad-conv-9.webp",
    "https://cdn.prod.website-files.com/666af2e7ac836c0b4d22e83a/666c6275943215854194a0da_nomad-conv-54.webp",
    "https://cdn.prod.website-files.com/666af2e7ac836c0b4d22e83a/666c6275ea57475d5c3bf2ea_nomad-conv-95.webp",
    "https://cdn.prod.website-files.com/666af2e7ac836c0b4d22e83a/666c627502747730ffb0a061_nomad-conv-85.webp",
    "https://cdn.prod.website-files.com/666af2e7ac836c0b4d22e83a/666c6275a5c74412da13fa17_nomad-conv-123.webp",
    "https://cdn.prod.website-files.com/666af2e7ac836c0b4d22e83a/666c62758771dec99ba15484_nomad-conv-162.webp"
  ];

  return (
    <section className="py-20 bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h3 className="text-[#F21B23] uppercase tracking-[0.3em] font-bold text-sm mb-2">Our Gallery</h3>
          <h2 className="text-4xl font-bold text-white">Quality in every detail</h2>
        </div>
        
        {/* Custom Navigation Arrows */}
        <div className="hidden md:flex gap-4">
          <button className="swiper-prev-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F21B23] hover:border-[#F21B23] transition-all">
            <ArrowLeft size={20} />
          </button>
          <button className="swiper-next-btn w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#F21B23] hover:border-[#F21B23] transition-all">
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
          1280: { slidesPerView: 3.5 }, // Shows a peek of the next slide like the image
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
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
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