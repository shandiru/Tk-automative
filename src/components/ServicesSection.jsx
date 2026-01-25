import React from 'react';

const ServicesSection = () => {
  // All 6 services defined here
  const allServices = [
    { 
      name: "Diagnostics", 
      href: "/diagnostics",
      description: "Advanced dealership-level fault finding and system analysis to identify complex electrical and mechanical issues.",
     image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68295e67096b18189b5_car.svg"
    },
    { 
      name: "DPF & AdBlue Solutions", 
      href: "/dpf-egr-adblue-solutions",
      description: "Advanced cleaning and electronic solutions for exhaust filtration systems.",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2000&auto=format&fit=crop",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68779e7ecf40eac726b_color.svg"
    },
    { 
      name: "ECU Remapping", 
      href: "/ecu-remapping-tuning",
      description: "Optimize your engine's performance, torque, and fuel efficiency via software.",
      image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?q=80&w=2000&auto=format&fit=crop",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b686798cc48683818cb1_paint.svg"
    },
    { 
      name: "Mechanical Repairs", 
      href: "/mechanical-repairs",
      description: "Expert mechanical maintenance and complex engine repairs for all makes.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68779e7ecf40eac726b_color.svg"
    },
    { 
      name: "Motorsport Prep", 
      href: "/motorsport-rally-preparation",
      description: "Professional track and rally preparation for competitive performance.",
      image: "https://images.unsplash.com/photo-1547744152-14d985cb937f?q=80&w=2000&auto=format&fit=crop",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b686798cc48683818cb1_paint.svg"
    },
    { 
      name: "Rolling Road Dyno", 
      href: "/rolling-road-wheel-dyno",
      description: "Precision power measurement and tuning using our state-of-the-art dyno.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000&auto=format&fit=crop",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68295e67096b18189b5_car.svg"
    },
  ];

  // We take the first one for the Big Card
  const mainService = allServices[0];
  // We take the remaining for the Side List
  const otherServices = allServices.slice(1);

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
              Professional <span className="text-[#062da3]">Performance</span> Services
            </h2>
            <p className="text-gray-400 text-lg">
              Precision engineering and expert tuning. We use industry-leading technology to enhance your driving experience.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-32 bg-[#062da3]"></div>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column - Large Card (Diagnostics) */}
          <div className="bg-[#0A0A0A] rounded-[2px] overflow-hidden flex flex-col group border border-white/5 hover:border-[#062da3]/50 transition-colors duration-500 h-full">
            <div className="relative h-72 lg:h-[480px] overflow-hidden">
              <img 
                src={mainService.image} 
                alt={mainService.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>
            <div className="p-10 flex flex-col justify-between flex-grow">
              <div>
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#062da3]/10 rounded-full">
                   <img src={mainService.icon} alt="icon" className="w-6 h-6 invert sepia-[1] saturate-[5] hue-rotate-[190deg]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">{mainService.name}</h3>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  {mainService.description}
                </p>
              </div>
              <div className="mt-10">
                <a href={mainService.href} className="inline-block px-10 py-4 bg-[#062da3] text-white font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-[#062da3] transition-all duration-300">
                  Explore Service
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Remaining Services */}
          <div className="flex flex-col gap-6 max-h-[900px] overflow-y-auto pr-2 custom-scrollbar">
            {otherServices.map((service, index) => (
              <div key={index} className="bg-[#0A0A0A] rounded-[2px] overflow-hidden flex flex-col md:flex-row group border border-white/5 hover:border-[#062da3]/50 transition-colors duration-500">
                <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:w-3/5 flex flex-col justify-between bg-gradient-to-br from-[#0A0A0A] to-[#111]">
                  <div>
                    <img src={service.icon} alt="icon" className="w-6 h-6 mb-4 invert sepia-[1] saturate-[5] hue-rotate-[190deg] opacity-80" />
                    <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">{service.name}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <a href={service.href} className="text-white font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-2 group/btn">
                      View Details
                      <span className="w-8 h-[1px] bg-[#062da3] group-hover/btn:w-12 transition-all duration-300"></span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      
    </section>
  );
};

export default ServicesSection;