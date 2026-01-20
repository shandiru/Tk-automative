import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutUsSection() {
  const [counters, setCounters] = useState({
    bookings: 0,
    models: 0,
    clients: 0,
    daily: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      bookings: 2.5,
      models: 300,
      clients: 99,
      daily: 50
    };

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounters({
        bookings: Math.min(targets.bookings * progress, targets.bookings),
        models: Math.floor(targets.models * progress),
        clients: Math.floor(targets.clients * progress),
        daily: Math.floor(targets.daily * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
  };

  return (
    <section ref={sectionRef} className="bg-black py-16 md:py-24 lg:py-32 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 xl:gap-24">
          
          {/* Left Side - About Us Label */}
          <div className="lg:min-w-[120px] animate-fade-in">
            <div className="flex items-center gap-3">
              {/* Using Brand Blue #062da3 */}
              <div className="w-12 h-1 bg-[#062da3]"></div>
              <span className="text-[#062da3] font-bold tracking-[0.2em] uppercase text-sm whitespace-nowrap">
                About Us
              </span>
            </div>
          </div>

          {/* Right Side - Main Content */}
          <div className="flex-1 space-y-12 md:space-y-16">
            {/* Heading */}
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Discover the passion and expertise behind Tk Automotive Shine, your premier destination for <span className="text-[#062da3]">luxury car care</span> and unmatched service.
              </h2>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Total Bookings */}
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    {counters.bookings.toFixed(1)}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-[#062da3]">K+</span>
                </div>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-xs md:text-sm">Total Bookings</p>
              </div>

              {/* Models In Stock */}
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    {counters.models}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-[#062da3]">+</span>
                </div>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-xs md:text-sm">Service Types</p>
              </div>

              {/* Happy Clients */}
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    {counters.clients}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-[#062da3]">%</span>
                </div>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-xs md:text-sm">Happy Clients</p>
              </div>

              {/* Daily Bookings */}
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    {counters.daily}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-black text-[#062da3]">+</span>
                </div>
                <p className="text-gray-500 font-medium uppercase tracking-wider text-xs md:text-sm">Daily Bookings</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 pt-8 border-t border-white/10 animate-fade-in-delay">
              {/* Description */}
              <div className="max-w-md">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  We combine advanced technology with artisan attention to detail. Our mission is to provide every driver with a showroom-quality finish through eco-friendly practices.
                </p>
              </div>

              {/* Learn More Button - Refreshed with Brand Blue */}
              <button className="group relative px-8 py-4 bg-[#062da3] hover:bg-white text-white hover:text-[#062da3] font-bold rounded-sm transition-all duration-300 flex items-center gap-4 flex-shrink-0">
                <span className="text-sm md:text-base uppercase tracking-tighter">Learn Our Story</span>
                <div className="w-8 h-8 bg-white/20 group-hover:bg-[#062da3] rounded-full flex items-center justify-center transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.5s both; }
        .animate-slide-up { animation: slide-up 0.8s ease-out both; }
      `}</style>
    </section>
  );
}