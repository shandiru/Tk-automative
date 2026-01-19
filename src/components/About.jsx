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
              <div className="w-12 h-0.5 bg-yellow-400"></div>
              <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm whitespace-nowrap">
                About Us
              </span>
            </div>
          </div>

          {/* Right Side - Main Content */}
          <div className="flex-1 space-y-12 md:space-y-16">
            {/* Heading */}
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Discover the passion and expertise behind Prime Shine, your premier destination for luxury car wash and unmatched service.
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
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">K+</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">Total Bookings</p>
              </div>

              {/* Models In Stock */}
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    {counters.models}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">+</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">Models In Stock</p>
              </div>

              {/* Happy Clients */}
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    {counters.clients}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">%</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">Happy Clients</p>
              </div>

              {/* Daily Bookings */}
              <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    {counters.daily}
                  </span>
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400">+</span>
                </div>
                <p className="text-gray-400 text-sm md:text-base">Daily Bookings</p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 pt-4 animate-fade-in-delay">
              {/* Description */}
              <div className="max-w-md">
                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                  Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat aenean.
                </p>
              </div>

              {/* Learn More Button */}
              <button className="group relative px-8 py-4 border-2 border-yellow-400 hover:bg-yellow-400 text-yellow-400 hover:text-black font-semibold rounded-full transition-all duration-300 flex items-center gap-4 flex-shrink-0">
                <span className="text-base md:text-lg">Learn More</span>
                <div className="w-8 h-8 bg-yellow-400 group-hover:bg-black rounded-full flex items-center justify-center transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 text-black group-hover:text-yellow-400 transition-colors duration-300" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.5s both;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </section>
  );
}