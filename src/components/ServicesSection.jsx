import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ValueCard = ({ value, index }) => {
  return (
    <div className="flex-shrink-0 w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[600px] px-0 md:px-4 lg:px-6 mb-6 md:mb-0" id="service">
      <a 
        href={value.href}
        className="group relative bg-[#0A0A0A] backdrop-blur-sm rounded-[2px] p-8 sm:p-10 md:p-12 lg:p-16 border border-white/5 hover:border-[#062da3]/50 transition-all duration-700 hover:shadow-2xl hover:shadow-[#062da3]/20 h-full min-h-[350px] sm:min-h-[400px] md:min-h-[450px] flex flex-col overflow-hidden cursor-pointer block"
      >
        {/* Service Image */}
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-[2px] mb-6">
          <img 
            src={value.image} 
            alt={value.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-12 h-12 mb-6 bg-[#062da3]/10 rounded-full group-hover:bg-[#062da3]/20 transition-all duration-700">
            <img src={value.icon} alt="icon" className="w-6 h-6 invert sepia-[1] saturate-[5] hue-rotate-[190deg]" />
          </div>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-tighter group-hover:text-[#062da3] transition-colors duration-500">
            {value.name}
          </h3>

          {/* Description */}
          <div className="flex-grow">
            <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed transition-colors duration-300">
              {value.description}
            </p>
          </div>

          {/* Button */}
          <div className="mt-8">
            <span className="inline-block px-10 py-4 bg-[#062da3] text-white font-bold uppercase text-sm tracking-widest group-hover:bg-white group-hover:text-[#062da3] transition-all duration-300">
              Explore Service
            </span>
          </div>

          {/* Decorative Corner */}
          <div className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-[#062da3]/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </a>
    </div>
  );
};

const OurValues = ({
  subtitle = "Our Core Services",
  title = "Professional Performance Services",
  description = "Precision engineering and expert tuning. We use industry-leading technology to enhance your driving experience.",
  values = [
    { 
      name: "Diagnostics", 
      href: "/diagnostics",
      description: "Advanced dealership-level fault finding and system analysis to identify complex electrical and mechanical issues.",
      image: "Diagnostics.png",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68295e67096b18189b5_car.svg"
    },
    { 
      name: "DPF & AdBlue Solutions", 
      href: "/dpf-egr-adblue-solutions",
      description: "Advanced cleaning and electronic solutions for exhaust filtration systems.",
      image: "DPF-EGR-AdBlue-Solutions.png",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68779e7ecf40eac726b_color.svg"
    },
    { 
      name: "ECU Remapping", 
      href: "/ecu-remapping-tuning",
      description: "Optimize your engine's performance, torque, and fuel efficiency via software.",
      image: "ECURemappingTuning.png",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b686798cc48683818cb1_paint.svg"
    },
    { 
      name: "Mechanical Repairs", 
      href: "/mechanical-repairs",
      description: "Expert mechanical maintenance and complex engine repairs for all makes.",
      image: "MechanicalRepairs.png",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68779e7ecf40eac726b_color.svg"
    },
    { 
      name: "Motorsport Prep", 
      href: "/motorsport-rally-preparation",
      description: "Professional track and rally preparation for competitive performance.",
      image: "MotorsportRallyPreparation.png",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b686798cc48683818cb1_paint.svg"
    },
    { 
      name: "Rolling Road Dyno", 
      href: "/rolling-road-wheel-dyno",
      description: "Precision power measurement and tuning using our state-of-the-art dyno.",
      image: "RollingRoadWheelDyno.png",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68295e67096b18189b5_car.svg"
    },
  ]
}) => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile/tablet on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024; // lg breakpoint
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Calculate horizontal movement
  const cardWidth = 700; // approximate width including padding
  const totalWidth = values.length * cardWidth;
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [
      0,
      -totalWidth +
        (typeof window !== "undefined" ? window.innerWidth * 0.8 : 800),
    ],
  );

  // Mobile: Render vertical stack
  if (isMobile) {
    return (
      <>
        {/* Section Header */}
        <div className="relative py-16 sm:py-20 bg-black transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              {/* Subtitle */}
              <div className="mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-medium text-[#062da3] tracking-wider uppercase">
                  {subtitle}
                </span>
                <div className="h-1 w-12 bg-[#062da3] mt-2" />
              </div>

              {/* Title */}
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight uppercase tracking-tighter">
                {title}
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                {description}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Mobile: Vertical Stack */}
        <section className="relative py-12 bg-black transition-colors duration-300">
          <div className="max-w-2xl mx-auto px-6 space-y-6">
            {values.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="animate-slide-up"
              >
                <ValueCard value={value} index={index} />
              </motion.div>
            ))}
          </div>
        </section>
      </>
    );
  }

  // Desktop: Horizontal Scroll
  return (
    <>
      {/* Section Header - Before the scroll section */}
      <div className="relative py-20 bg-black transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div className="max-w-2xl">
              {/* Subtitle */}
              <div className="mb-6">
                <span className="text-sm font-medium text-[#062da3] tracking-wider uppercase">
                  {subtitle}
                </span>
                <div className="h-1 w-12 bg-[#062da3] mt-2" />
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase tracking-tighter">
                {title}
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-400 leading-relaxed">
                {description}
              </p>
            </div>

            <div className="hidden md:block">
              <div className="h-1 w-32 bg-[#062da3]"></div>
            </div>
          </motion.div>

          {/* Scroll Instruction */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-10 flex items-center gap-2"
          >
            <span className="text-sm text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">
              Scroll down to explore
            </span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="text-[#062da3]"
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Scroll Section - Desktop Only */}
      <section
        ref={sectionRef}
        className="relative h-[300vh] bg-black transition-colors duration-300"
      >
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {/* Progress bar */}
          <motion.div className="absolute top-0 left-0 right-0 h-1 bg-[#111] z-20">
            <motion.div
              className="h-full bg-[#062da3]"
              style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
            />
          </motion.div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling cards */}
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-8 md:gap-10 pl-6 md:pl-8 pr-6 md:pr-8 py-4"
          >
            {values.map((value, index) => (
              <ValueCard key={value.name} value={value} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurValues;