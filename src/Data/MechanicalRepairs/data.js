import {
  Cpu,
  Gauge,
  Trophy,
  Wind,
  SearchCode,
  Wrench,
 
} from "lucide-react";
export const serviceBannerData = {
  title: "Mechanical Repairs",
  description: "From engine repairs to suspension adjustments, our expert mechanics provide reliable in-house mechanical repairs to keep your vehicle running smoothly, safely, and efficiently.",
  thumbnailImage: "MechanicalRepairs.png",
};

// data.js
export const serviceDetailData = {
  mainTitle: "Full-Service Mechanical Solutions",
  mainDescription: "Mechanical issues can arise without warning, affecting performance, reliability, and safety. Our mechanical repair service covers everything from minor component replacements to complex engine and gearbox repairs. All work is carried out at our workshop using quality parts and proven repair methods to restore your vehicle to optimal condition as efficiently as possible.",

  // Left Column - When you need it
  benefits: {
    title: "When You Need Mechanical Repairs",
    items: [
      {
        heading: "Engine & Component Failure",
        text: "Your vehicle won’t start, is overheating, or you notice smoke coming from the engine bay."
      },
      {
        heading: "Brake & Suspension Issues",
        text: "Unusual noises, vibrations, or reduced handling and braking performance."
      },
      {
        heading: "Leaking Fluids",
        text: "Oil, coolant, or transmission fluid leaks that need attention before causing serious damage."
      },
      {
        heading: "Belts & Hoses Replacement",
        text: "Preventative or urgent replacement of timing belts, auxiliary belts, and cooling system hoses."
      }
    ]
  },
  // Right Column - How it works
  process: {
    title: "How It Works",
    steps: [
      {
        heading: "Damage Assessment",
        text: "We carry out a detailed mechanical and diagnostic inspection to accurately identify the cause of the fault."
      },
      {
        heading: "Quality Part Sourcing",
        text: "Only high-quality or OEM-equivalent parts are used to ensure durability, safety, and reliability."
      },
      {
        heading: "Expert Repair Work",
        text: "Our qualified technicians complete all repairs using precision tools and industry-standard procedures."
      },
      {
        heading: "Safety Verification",
        text: "All repaired systems are thoroughly tested to confirm safe operation before the vehicle is returned to you."
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
      name: "Performance & Tuning",
      services: [
        {
          title: "ECU Remapping & Tuning",
           icon: Cpu,
          description: "Software optimization for increased power, improved driveability, and better fuel efficiency.",
          problems: ["Manufacturer restrictions", "Slow acceleration", "Flat spots"],
          link: "#"
        },
        {
          title: "Rolling Road / Wheel Dyno",
          icon: Gauge,
          description: "Accurate power and torque measurement using professional-grade dyno equipment.",
          problems: ["Unknown power output", "Hidden engine faults", "Tuning verification"],
          link: "#"
        },
        {
          title: "Motorsport & Rally Preparation",
          icon: Trophy,
          description: "Professional preparation, chassis strengthening, and safety setups for track and rally.",
          problems: ["Track safety", "Chassis flex", "Inconsistent lap times"],
          link: "#"
        },
      ]
    },
    {
      name: "Diagnostics & Maintenance",
      services: [
        {
          title: "DPF-EGR-AdBlue Solutions",
          icon: Wind,
          description: "Specialised maintenance and software solutions for exhaust after-treatment systems.",
          problems: ["Limp mode", "Blocked filters", "Dashboard warning lights"],
          link: "#"
        },

        {
          title: "Diagnostics",
         icon: SearchCode,
          description: "Advanced dealer-level fault finding and electrical system analysis.",
          problems: ["Intermittent faults", "Warning lights", "Electrical gremlins"],
          link: "#"
        },
        {
          title: "Mechanical Repairs",
         icon: Wrench,
          description: "Expert mechanical servicing, part replacements, and engine work.",
          problems: ["Engine noise", "Component wear", "General maintenance"],
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
   buttonLink: "tel:01624860209",
  image: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce876dc/67d2e18af8d1c0c328adac3a_pexels-jakewymoore-12330350%20(1).webp",
  features: [
    "Certified Mechanics",
    "High-Quality Spare Parts",
    "Fast & Reliable Service"
  ]
};