import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: "Interior Detailing",
      description: "Expert and reliable EV charger installation for your electric vehicles",
      image: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d7a0a8e298a73e43f8a25a_ivan-kazlouskij-zASFpHPZ_TY-unsplash%20(1).avif",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b686798cc48683818cb1_paint.svg"
    },
    {
      title: "Exterior Detailing",
      description: "Experience improved performance and reduced energy costs.",
      image: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d7a0a89f7505a175e42445_zac-nielson-8k_T1EwTySs-unsplash%20(1).avif",
      icon: "https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68779e7ecf40eac726b_color.svg"
    }
  ];

  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quality Auto Detailing Services
          </h2>
          <p className="text-gray-400 text-lg">
            Experience the best in auto detailing services.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 border-2 border-[#F21B23]/30 rounded-[40px] p-6 bg-[#111111]">
          
          {/* Left Column - Large Card (Full Car Detailing) */}
          <div className="bg-[#0A0A0A] rounded-[30px] overflow-hidden flex flex-col group">
            <div className="relative h-72 lg:h-[450px] overflow-hidden">
              <img 
                src="https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d7a0a9040da82e41461765_angelica-levshakowa-5zglggV8nE0-unsplash%20(1).avif" 
                alt="Full Car Detailing" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-10 flex flex-col justify-between flex-grow">
              <div>
                <img src="https://cdn.prod.website-files.com/66cff9498fc86ce442fee452/66d6b68295e67096b18189b5_car.svg" alt="icon" className="w-10 h-10 mb-4 invert" />
                <h3 className="text-3xl font-bold text-white mb-4">Full Car Detailing</h3>
                <p className="text-gray-400 text-lg max-w-md">
                  Providing top-notch car detailing services to ensure your vehicle looks its best.
                </p>
              </div>
              <div className="mt-8">
                <button className="px-8 py-3 rounded-full border border-[#F21B23] text-white hover:bg-[#F21B23] transition-all duration-300">
                  See Details
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Two Small Cards */}
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#0A0A0A] rounded-[30px] overflow-hidden flex flex-col md:flex-row group h-full">
                <div className="md:w-1/2 relative h-64 md:h-full overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <img src={service.icon} alt="icon" className="w-8 h-8 mb-4 invert opacity-70" />
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="px-6 py-2 rounded-full border border-[#F21B23] text-white text-sm hover:bg-[#F21B23] transition-all duration-300">
                      See Details
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