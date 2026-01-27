// data.js
export const serviceBannerData = {
  title: "Mechanical Repairs",
  description: "From engine fixes to suspension adjustments, our expert mechanics provide reliable on-site and shop-based repairs to keep your car running smooth.",
  thumbnailImage: "tmp.jpg",
};

// data.js
export const serviceDetailData = {
  mainTitle: "Full-Service Mechanical Solutions",
  mainDescription: "Mechanical failures can happen anytime, leaving you stranded or compromising your safety. Our mechanical repair service covers everything from minor component replacements to complex engine and gearbox issues. We combine years of expertise with high-quality parts to ensure your vehicle is restored to its optimal condition as quickly as possible.",
  
  // Left Column - When you need it
  benefits: {
    title: "When you need it",
    items: [
      {
        heading: "Engine & Component Failure",
        text: "Your car won't start, is overheating, or you notice smoke coming from under the hood."
      },
      {
        heading: "Brake & Suspension Issues",
        text: "Hearing squeaking noises, feeling vibrations, or experiencing poor handling while driving."
      },
      {
        heading: "Leaking Fluids",
        text: "Identifying and fixing oil, coolant, or transmission fluid leaks before they cause major damage."
      },
      {
        heading: "Belts & Hoses Replacement",
        text: "Preventative or emergency repair of timing belts, fan belts, and radiator hoses."
      }
    ]
  },

  // Right Column - How it works
  process: {
    title: "How it works",
    steps: [
      {
        heading: "Damage Assessment",
        text: "We perform a thorough physical and technical inspection to find the root cause of the mechanical failure."
      },
      {
        heading: "Quality Part Sourcing",
        text: "We use only high-grade or OEM parts to ensure the longevity and safety of the repair."
      },
      {
        heading: "Expert Repair Work",
        text: "Our certified mechanics carry out the repair using precision tools and industry-standard techniques."
      },
      {
        heading: "Safety Verification",
        text: "We test the repaired systems under load to ensure everything is working perfectly before handing back the keys."
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
      name: "General Repairs",
      services: [
        {
          title: "Mechanical Repairs",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f50d34460197162e420bd0_Layer_1%20(1).webp",
          description: "Comprehensive mechanical fixes for engines, brakes, and suspension systems.",
          problems: ["Engine overheating", "Brake failure", "Strange engine noises"],
          link: "#"
        },
        {
          title: "Vehicle Diagnostics",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f50d8a6c3a627e59a58830_Auto%20tuning%20icon%20(1).webp",
          description: "Advanced scanning to identify hidden mechanical and electrical issues.",
          problems: ["Warning lights", "Intermittent faults", "System errors"],
          link: "#"
        }
      ]
    },
    {
      name: "tuning & Performance",
      services: [
        {
          title: "ECU Remapping & Tuning",
          icon: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce87703/67f512b08e43151f14523e87_Auto%20tuning%20icon%20(5).webp",
          description: "Optimize your engine for better power and fuel efficiency.",
          problems: ["Lack of power", "Poor throttle response", "High fuel usage"],
          link: "#"
        }
      ]
    }
  ]
};

// data.js updated
export const ctaData = {
  titlePart1: "Car trouble?",
  titlePart2: "Get expert mechanical help today!",
  buttonText: "Request Repair Now",
  buttonLink: "#",
  image: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce876dc/67d2e18af8d1c0c328adac3a_pexels-jakewymoore-12330350%20(1).webp",
  features: [
    "Certified Mechanics",
    "High-Quality Spare Parts",
    "Fast & Reliable Service"
  ]
};