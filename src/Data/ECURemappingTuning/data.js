// data.js
export const serviceBannerData = {
  title: "Flat Tire Change",
  description: "From quick jumpstarts to heavy-duty towing, we offer reliable roadside help whenever you need it. Fast, safe, and always ready.",
  videoUrl: "https://youtu.be/IeXQjsJlpNY",
  thumbnailImage: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67ebdf8a1482a0bf185bcd58_car-transporter-6569783_1920%20(1).webp",
  playIcon: "" // FontAwesome or similar play icon
};


// data.js
export const serviceDetailData = {
  mainTitle: "Help when stranded",
  mainDescription: "Flat Tire Change is a fast and convenient service that helps you safely replace a damaged or deflated tire when you’re stuck on the road. Whether you don’t have the tools, the know-how, or simply want to stay safe, our technicians will arrive promptly and handle the change for you — no lifting, no stress.",
  
  // Left Column - When you need it
  benefits: {
    title: "When you need it",
    items: [
      {
        heading: "Flat or blown-out tire",
        text: "You’ve hit debris or driven over a nail — and the tire won’t hold air."
      },
      {
        heading: "No spare tire or jack",
        text: "Your vehicle isn’t equipped with a spare, or you’re missing tools."
      },
      {
        heading: "Unsafe road conditions",
        text: "Changing a tire on the shoulder, at night, or in bad weather puts you at risk — let us handle it."
      },
      {
        heading: "You’re not confident doing it alone",
        text: "Tire changes can be physically demanding or stressful — we’re here to help."
      }
    ]
  },

  // Right Column - How it works
  process: {
    title: "How it works",
    steps: [
      {
        heading: "You request tire service",
        text: "Tell us your location and vehicle type — we’ll take it from there."
      },
      {
        heading: "We dispatch a technician",
        text: "A trained roadside specialist is sent to your location with all necessary tools."
      },
      {
        heading: "Tire is safely replaced",
        text: "We remove the flat tire and install your spare or donut, ensuring everything is secure and ready to go."
      },
      {
        heading: "Back on the road",
        text: "You’re safely on your way — and if you don’t have a spare, we’ll help arrange towing to the nearest tire shop."
      }
    ]
  }
};



// data.js
export const discoverServicesData = {
  mainTitle: "Discover more our services",
  buttonText: "All services list",
  categories: [
    {
      name: "Roadside assistance services",
      services: [
        {
          title: "Flat Tire Change",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f50d34460197162e420bd0_Layer_1%20(1).webp",
          description: "We provide fast and safe tire replacement so you can get back on the road without delay.",
          problems: ["Tire puncture or blowout on the road", "No spare tire or tools available", "Unsafe to change tire on a busy road"],
          link: "/services/flat-tire-change"
        },
        {
          title: "Jump Start Service",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f50d8a6c3a627e59a58830_Auto%20towing%20icon%20(1).webp",
          description: "We quickly restart dead batteries using professional-grade equipment, so you’re never left stranded.",
          problems: ["Dead car battery", "Left lights or radio on accidentally", "Battery affected by extreme temperatures"],
          link: "/services/jump-start-service"
        },
        {
          title: "Car Lockout Assistance",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f50daaaa65775343fdce6b_Auto%20towing%20icon%20(2).webp",
          description: "Locked out of your car? Our team responds fast to get you back inside and back on the road.",
          problems: ["Keys locked inside the car", "Car auto-locked with keys inside", "No spare key available"],
          link: "/services/car-lockout-assistance"
        }
      ]
    },
    {
      name: "Towing services",
      services: [
        {
          title: "Heavy-Duty Towing",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f512d2a17e18addc582b6e_Auto%20towing%20icon%20(6).webp",
          description: "Towing for larger vehicles, including trucks, RVs, and commercial fleets.",
          problems: ["Breakdown of trucks, buses, or RVs", "Accidents involving large vehicles", "Road blocked by oversized vehicles"],
          link: "/services/heavy-duty-towing"
        },
        {
          title: "Flatbed Towing",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f512417a95eea66b3aa316_Auto%20towing%20icon%20(4).webp",
          description: "Secure towing for luxury, classic, or damaged vehicles.",
          problems: ["Need to transport a vehicle without damage", "Car is immobile or can’t be towed normally", "Sports or low-clearance vehicles"],
          link: "/services/flatbed-towing"
        },
        {
          title: "Emergency Towing",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f512b08e43151f14523e87_Auto%20towing%20icon%20(5).webp",
          description: "24/7 assistance for breakdowns, accidents, and stranded vehicles.",
          problems: ["Sudden car breakdown on the road", "Accident or hazardous situation", "Urgent towing needed immediately"],
          link: "/services/emergency-towing"
        }
      ]
    }
  ]
};


// data.js updated
export const ctaData = {
  titlePart1: "Need help?",
  titlePart2: "AutoTowing is just a call away!",
  buttonText: "Request a tow now",
  buttonLink: "/contact-us",
  image: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce876dc/67d2e18af8d1c0c328adac3a_pexels-jakewymoore-12330350%20(1).webp",
  features: [
    "24/7 Emergency Service",
    "Fast Response Time",
    "Affordable & Transparent Pricing"
  ]
};