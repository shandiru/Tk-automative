import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Interior Detailing",
      description: "Deep cleaning and conditioning of all cabin surfaces, leather treatment, and odor elimination.",
      image: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d7a0a8e298a73e43f8a25a_ivan-kazlouskij-zASFpHPZ_TY-unsplash%20(1).avif",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b686798cc48683818cb1_paint.svg"
    },
    {
      title: "Exterior Restoration",
      description: "Multi-stage decontamination and paint correction to restore your vehicle's factory glow.",
      image: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d7a0a89f7505a175e42445_zac-nielson-8k_T1EwTySs-unsplash%20(1).avif",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68779e7ecf40eac726b_color.svg"
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Quality Auto <span className="text-[#062da3]">Detailing</span> Services
            </h2>
            <p className="text-gray-400 text-lg">
              Precision care for the discerning driver. We use industry-leading techniques to protect and enhance your investment.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="h-1 w-32 bg-[#062da3]"></div>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Large Card (Full Car Detailing) */}
          <div className="bg-[#0A0A0A] rounded-[2px] overflow-hidden flex flex-col group border border-white/5 hover:border-[#062da3]/50 transition-colors duration-500">
            <div className="relative h-72 lg:h-[480px] overflow-hidden">
              <img 
                src="https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d7a0a9040da82e41461765_angelica-levshakowa-5zglggV8nE0-unsplash%20(1).avif" 
                alt="Full Car Detailing" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            </div>
            <div className="p-10 flex flex-col justify-between flex-grow">
              <div>
                <div className="w-12 h-12 mb-6 flex items-center justify-center bg-[#062da3]/10 rounded-full">
                   <img src="https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68295e67096b18189b5_car.svg" alt="icon" className="w-6 h-6 invert sepia-[1] saturate-[5] hue-rotate-[190deg]" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Full Car Detailing</h3>
                <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                  The ultimate transformation. A comprehensive top-to-bottom service that covers every inch of your vehicle.
                </p>
              </div>
              <div className="mt-10">
                <button className="px-10 py-4 bg-[#062da3] text-white font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-[#062da3] transition-all duration-300">
                  Explore Service
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Two Small Cards */}
          <div className="grid grid-cols-1 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#0A0A0A] rounded-[2px] overflow-hidden flex flex-col md:flex-row group border border-white/5 hover:border-[#062da3]/50 transition-colors duration-500">
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-between bg-gradient-to-br from-[#0A0A0A] to-[#111]">
                  <div>
                    <img src={service.icon} alt="icon" className="w-8 h-8 mb-6 invert sepia-[1] saturate-[5] hue-rotate-[190deg] opacity-80" />
                    <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-8">
                    <button className="text-white font-bold uppercase text-xs tracking-[0.2em] flex items-center gap-2 group/btn">
                      View Details
                      <span className="w-8 h-[1px] bg-[#062da3] group-hover/btn:w-12 transition-all duration-300"></span>
                    </button>
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