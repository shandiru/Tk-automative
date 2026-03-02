import {
  Cpu,
  Gauge,
  Trophy,
  Wind,
  SearchCode,
  Wrench,
 
} from "lucide-react";
export const serviceBannerData = {
  title: "ECU Remapping & Tuning",
  description: "Unlock your vehicle's true potential. Increase horsepower, improve torque, and enhance fuel efficiency with our expert tuning services.",
   thumbnailImage: "ECURemappingTuning.png",
};

// data.js
export const serviceDetailData = {
  mainTitle: "Optimize Your Engine’s Performance",
  mainDescription: "ECU Remapping (also known as Chip Tuning) is the process of modifying the software in your vehicle's Electronic Control Unit. By fine-tuning the engine management system, we can significantly improve power delivery, throttle response, and overall drivability without changing any hardware. Whether you want more speed or better MPG, our custom maps are tailored to your needs.",
  
  // Left Column - Why choose remapping
  benefits: {
    title: "Why choose remapping",
    items: [
      {
        heading: "Increased Power & Torque",
        text: "Experience a noticeable boost in horsepower and pulling power for a more exciting drive."
      },
      {
        heading: "Better Fuel Economy",
        text: "Optimized engine maps can lead to improved MPG, especially for long-distance diesel drivers."
      },
      {
        heading: "Sharper Throttle Response",
        text: "Remove flat spots and enjoy a more immediate reaction when you press the accelerator."
      },
      {
        heading: "Safer Overtaking",
        text: "The extra torque provides the confidence and power needed for safer and quicker overtaking."
      }
    ]
  },

  // Right Column - Our Tuning Process
  process: {
    title: "Our Tuning Process",
    steps: [
      {
        heading: "Initial Health Check",
        text: "We perform a full diagnostic scan to ensure your engine is healthy and ready for tuning."
      },
      {
        heading: "Original Data Read",
        text: "Our technicians safely read the existing software from your vehicle's ECU."
      },
      {
        heading: "Custom Map Application",
        text: "We apply a professionally developed tuning file tailored to your specific vehicle and requirements."
      },
      {
        heading: "Final Road Test",
        text: "We perform a post-tuning check and a test drive to ensure everything is running perfectly."
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
  titlePart1: "Ready for more power?",
  titlePart2: "Upgrade your driving experience today!",
  buttonText: "Book a Tune Now",
   buttonLink: "tel:01624860209",
  image: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce876dc/67d2e18af8d1c0c328adac3a_pexels-jakewymoore-12330350%20(1).webp",
  features: [
    "Custom Tailored Maps",
    "Safe & Reliable Tuning",
    "Instant Performance Gains"
  ]
};