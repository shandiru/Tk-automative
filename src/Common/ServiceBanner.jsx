import React from 'react';
import { Play } from 'lucide-react';

// Pass 'data' as a prop
const ServiceBanner = ({ data }) => {
  // Prevent crash if data is missing
  if (!data) return null;

  const { title, description, thumbnailImage, videoUrl } = data;

  const handleVideoClick = () => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="bg-black py-16 md:py-32 lg:py-48 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Text Content Area */}
        <div className="max-w-4xl mb-16 animate-fade-in">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[2px] bg-[#062da3]"></div>
            <span className="text-[#062da3] font-bold uppercase tracking-[0.3em] text-xs">Premium Experience</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter uppercase">
            {title}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            {description}
          </p>
        </div>

        {/* Video / Image Section */}
        <div 
          className="relative group cursor-pointer overflow-hidden rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/5" 
          onClick={handleVideoClick}
        >
          <img 
            src={thumbnailImage} 
            alt={title} 
            className="w-full h-[450px] md:h-[650px] object-cover transition-all duration-1000 grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 group-hover:bg-[#062da3]/10 transition-all duration-500" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-24 h-24 bg-[#062da3]/20 rounded-full animate-ping" />
              <div className="absolute w-32 h-32 border border-[#062da3]/30 rounded-full scale-110 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:bg-[#062da3] transition-all duration-500 transform group-hover:rotate-[360deg]">
                <Play 
                  className="text-black group-hover:text-white transition-colors duration-300 ml-1" 
                  fill="currentColor" 
                  size={28} 
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-8 flex items-center gap-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div className="w-8 h-8 bg-[#062da3] rounded-full flex items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
            <span className="text-white font-black uppercase tracking-[0.2em] text-sm">
              Watch Process Video
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServiceBanner;