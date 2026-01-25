import React from 'react';
import { Smartphone, Building2, Shield, Headphones } from 'lucide-react';

export default function WhyChooseSection() {
  const features = [
    {
      icon: <Smartphone className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Make a reservation online, pay later"
    },
    {
      icon: <Building2 className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Delivery and pickup at your residence"
    },
    {
      icon: <Shield className="w-7 h-7 md:w-8 md:h-8" />,
      title: "All of our bookings come with insurance"
    },
    {
      icon: <Headphones className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Personal assistance at your fingertips"
    }
  ];

  return (
    <section className="relative bg-black py-20 md:py-28 lg:py-36 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Watermark Text - TK Automotive */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <div className="text-[25vw] md:text-[18vw] lg:text-[15vw] font-black text-white tracking-tighter uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
          TK Automotive
        </div>
      </div>

      {/* Decorative Brand Accent - Top Left */}
      <div className="absolute left-0 top-0 w-1.5 h-32 bg-gradient-to-b from-[#062da3] via-[#062da3]/50 to-transparent"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-28">
          
          {/* Left Side - Content Updated */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            {/* Subtitle */}
            <div className="text-[#062da3] text-xs md:text-sm font-bold tracking-[0.3em] uppercase">
              WHY CHOOSE TK AUTOMOTIVE?
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tighter">
              We deliver <span className="text-[#062da3]">expertise and reliability</span> you can trust
            </h2>

            {/* Description Updated */}
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl pt-2">
              We understand that our clients value quality workmanship and dependable service. Our approach is designed to keep your vehicle performing at its best, whether you need routine maintenance, complex repairs, or performance enhancements.
            </p>
          </div>

          {/* Right Side - Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-5 md:gap-6 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Diamond Icon Container */}
                <div className="relative flex-shrink-0">
                  <div 
                    className="w-20 h-20 md:w-24 md:h-24 rotate-45 flex items-center justify-center border border-[#062da3]/30 group hover:border-[#062da3] transition-colors duration-500"
                    style={{
                      background: 'linear-gradient(135deg, rgba(6, 45, 163, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)'
                    }}
                  >
                    <div className="-rotate-45 text-white group-hover:text-[#062da3] transition-colors duration-300">
                      {React.cloneElement(feature.icon, { 
                        className: "w-7 h-7 md:w-8 md:h-8 group-hover:scale-110 transition-transform duration-300" 
                      })}
                    </div>
                  </div>
                </div>

                {/* Feature Text */}
                <div className="flex-1 pt-1 md:pt-2">
                  <p className="text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed tracking-tight">
                    {feature.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      
    </section>
  );
}