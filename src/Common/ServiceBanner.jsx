import React from 'react';
import { serviceBannerData } from '../Data/Diagnostics/data'; // Import your data

const ServiceBanner = () => {
  const { title, description, thumbnailImage, playIcon } = serviceBannerData;

  const handleVideoClick = () => {
    // Lightbox logic or redirect to YouTube
    window.open(serviceBannerData.videoUrl, '_blank');
  };

  return (
    <section className="bg-white py-16 md:py-48">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Text Content Area */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Video / Image Section */}
        <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl" onClick={handleVideoClick}>
          {/* Main Image */}
          <img 
            src={thumbnailImage} 
            alt={title} 
            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              {/* Animated Circles */}
              <div className="absolute w-20 h-20 bg-white/30 rounded-full animate-ping" />
              <div className="absolute w-24 h-24 border border-white/50 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500" />
              
              {/* Play Button */}
              <div className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:bg-[#F21B23] transition-colors duration-300">
                <span className="text-black group-hover:text-white ml-1 text-xl">
                  {/* Using a standard Play icon if font not loaded */}
                  ▶
                </span>
              </div>
            </div>
          </div>

          {/* Optional: Video Label */}
          <div className="absolute bottom-6 left-6 text-white font-bold uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Watch Service Video
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;