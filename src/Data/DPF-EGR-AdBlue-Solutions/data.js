import {
  Cpu,
  Gauge,
  Trophy,
  Wind,
  SearchCode,
  Wrench,
 
} from "lucide-react";
export const serviceBannerData = {
  title: "DPF-EGR-AdBlue Solutions",
  description: "Our DPF / EGR / AdBlue Solutions service is designed to resolve complex diesel exhaust and emissions issues efficiently. Whether your vehicle has entered Limp Mode due to a blocked DPF or is experiencing AdBlue system faults, our technicians use professional diagnostic tools to accurately identify and resolve issues — without the need for expensive main dealer garage visits.",
  thumbnailImage: "DPF-EGR-AdBlue-Solutions.png",
};

// data.js
export const serviceDetailData = {
  mainTitle: "Specialised Emission Diagnostics",
  mainDescription: "Our DPF-EGR-AdBlue Solutions service is designed to fix complex diesel exhaust issues on the spot. Whether your car is in 'Limp Mode' due to a clogged filter or facing AdBlue system errors, our technicians use professional tools to diagnose and resolve the issue without the need for expensive garage visits.",
  
  // Left Column - When you need it
  benefits: {
    title: "When you need it",
    items: [
      {
        heading: "DPF Warning or Limp Mode",
        text: "Your diesel particulate filter is blocked, causing reduced engine power and warning lights."
      },
      {
        heading: "AdBlue 'No Start' Countdown",
        text: "Your vehicle system is preventing a restart due to AdBlue fluid errors or sensor faults."
      },
      {
        heading: "EGR System Failures",
        text: "Carbon buildup is causing poor performance, rough idling, or excessive exhaust smoke."
      },
      {
        heading: "System Software Errors",
        text: "Emission-related fault codes are appearing on your dashboard that require Specialised resetting."
      }
    ]
  },

  // Right Column - How it works
  process: {
    title: "How it works",
    steps: [
      {
        heading: "Request Emission Service",
        text: "Provide your vehicle details and the specific warning message showing on your dashboard."
      },
      {
        heading: "Workshop Diagnostic Scan",
        text: "Your vehicle is inspected at our workshop using advanced diagnostic equipment to read specific DPF, EGR, and AdBlue fault codes and system data."
      },
      {
        heading: "System Restoration",
        text: "We perform forced regeneration or software recalibration to clear the blockage and reset the system."
      },
      {
        heading: "Verification & Testing",
        text: "We ensure all fault codes are cleared and your engine is back to full operating power before you leave."
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
  titlePart1: "Facing Diesel Issues?",
  titlePart2: "Our experts are ready to help!",
  buttonText: "Request a fix now",
 buttonLink: "tel:01624860209",
  image: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce876dc/67d2e18af8d1c0c328adac3a_pexels-jakewymoore-12330350%20(1).webp",
  features: [
    "Expert Diesel Technicians",
    "Specialised Emission Tools",
    "Fast On-Site Recovery"
  ]
};