import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
      id: 1,
      number: "01.",
      name: "Matthew Lewis",
      location: "CLIENT, UK",
      quote: "Remap made the car considerably more powerful throughout the rev range without sacrificing any efficiency. Tristan was very flexible with times and managed to get the exact date and time I needed. Very good for fitting aftermarket parts and advice. 10/10 will definitely come back soon.",
    },
    {
      id: 2,
      number: "02.",
      name: "Warren Johnstone",
      location: "CLIENT, UK",
      quote: "Tristan and his team are exceptional, fast, high quality and reasonably priced. I wouldn’t consider using another garage on the iom. Highly recommended.",
    },
 
  ];

  // Auto-carousel Logic: Changes every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setIsTransitioning(false);
    }, 500); 
  };

  return (
    <section className="relative bg-black py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20 overflow-hidden" id="reviews">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23062da3' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Badge */}
        <div className="mb-12">
          <div className="flex items-center gap-2 bg-[#062da3]/10 w-fit px-4 py-1.5 rounded-full border border-[#062da3]/30">
            <Star className="w-4 h-4 text-[#062da3] fill-[#062da3]" />
            <span className="text-white font-bold tracking-[0.2em] uppercase text-xs">
              Client Feedback
            </span>
          </div>
        </div>

        {/* Quote Content Area */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12 md:mb-20 min-h-[380px] md:min-h-[250px]">
          <div className="hidden lg:block flex-shrink-0 -mt-10">
            <div className="text-[150px] leading-none font-serif text-[#062da3] opacity-20 select-none">“</div>
          </div>

          <div className={`flex-1 transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-[1.4] tracking-tight italic mb-10">
              "{testimonials[activeIndex].quote}"
            </p>

            {/* Mobile/Tablet Customer Info - Visible always on small screens */}
            <div className="lg:hidden mt-auto border-l-4 border-[#062da3] pl-5 py-2 bg-gradient-to-r from-[#062da3]/10 to-transparent">
                <h3 className="text-white font-black uppercase text-xl tracking-tighter">
                    {testimonials[activeIndex].name}
                </h3>
                <p className="text-[#062da3] text-sm font-bold tracking-[0.2em] uppercase mt-1">
                    {testimonials[activeIndex].location}
                </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Progress Selectors - NOW HIDDEN ON MOBILE */}
          <div className="hidden md:grid lg:col-span-8 grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                        setActiveIndex(index);
                        setIsTransitioning(false);
                    }, 300);
                }}
                className={`cursor-pointer transition-all duration-500 group border-t-2 pt-6 ${
                  activeIndex === index ? 'border-[#062da3] opacity-100' : 'border-gray-800 opacity-30'
                }`}
              >
                <div className="space-y-2">
                  <div className={`text-sm font-black ${activeIndex === index ? 'text-[#062da3]' : 'text-gray-500'}`}>
                    {testimonial.number}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-tighter truncate">
                    {testimonial.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Rating Score Card - Centered on Mobile */}
          <div className="lg:col-span-4 bg-[#062da3] p-8 rounded-sm shadow-2xl relative overflow-hidden group w-full">
            <Star className="absolute -right-8 -bottom-8 w-40 h-40 text-black/10 rotate-12" />
            <div className="relative z-10 flex items-center gap-6">
              <div className="text-5xl font-black text-white tracking-tighter">4.9</div>
              <div className="space-y-1">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-white fill-white" />
                  ))}
                </div>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-widest">Average Rating</p>
              </div>
            </div>
            <p className="relative z-10 mt-4 text-white font-bold text-base uppercase tracking-tighter">
              Verified Client Reviews
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}