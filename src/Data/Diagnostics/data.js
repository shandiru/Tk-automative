// data.js updated with Diagnostics Service
import {
  Cpu,
  Gauge,
  Trophy,
  Wind,
  SearchCode,
  Wrench,
  ArrowRight,
  ChevronRight,
  Zap
} from "lucide-react";
export const serviceBannerData = {
  title: "Vehicle Diagnostics",
  description: "Identify vehicle issues quickly and accurately with our professional in-house diagnostic services. We pinpoint the problem so you can move forward with the right repair — fast and confidently.",
  thumbnailImage: "Diagnostics.png",
};

export const serviceDetailData = {
  mainTitle: "Professional In-House Diagnostics",
  mainDescription: "When a warning light appears or your vehicle starts behaving unusually, accurate diagnosis is essential. Our Vehicle Diagnostics service uses advanced scanning and diagnostic equipment at our workshop to identify engine faults, electrical issues, and sensor failures. This prevents unnecessary repairs, saves time, and helps protect your vehicle from further damage.",

  // Left Column - When you need it
  benefits: {
    title: "When You Need Diagnostics",
    items: [
      {
        heading: "Check Engine Light Is On",
        text: "Your dashboard warning light has appeared, and you’re unsure what it means or whether it’s safe to continue driving."
      },
      {
        heading: "Unusual Noises or Vibrations",
        text: "You hear unexpected sounds from the engine or notice vibrations that weren’t present before."
      },
      {
        heading: "Performance Issues",
        text: "Your vehicle is losing power, stalling, struggling to start, or not running as it should."
      },
      {
        heading: "Pre-Trip Peace of Mind",
        text: "You’re planning a long journey and want to ensure all vehicle systems are operating correctly."
      }
    ]
  },

  // Right Column - How it works
  process: {
    title: "How It Works",
    steps: [
      {
        heading: "Request a Diagnostic Appointment",
        text: "Contact us to book a diagnostic check and briefly describe the symptoms your vehicle is experiencing."
      },
      {
        heading: "Visit Our Workshop",
        text: "Bring your vehicle to our workshop at your scheduled appointment time for professional inspection."
      },
      {
        heading: "Full System Analysis",
        text: "We carry out a comprehensive diagnostic scan, reading fault codes and analysing vehicle systems to identify the root cause of the issue."
      },
      {
        heading: "Clear Explanation & Advice",
        text: "We explain the findings clearly and recommend the best next steps — whether that’s repair work, further investigation, or preventative maintenance."
      }
    ]
  }
};

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
export const ctaData = {
  titlePart1: "Need help?",
  titlePart2: "Autotuning is just a call away!",
  buttonText: "Request a tow now",
  buttonLink: "tel:01624860209",
  image: "https://cdn.prod.website-files.com/67d1666f8b02642a9ce876dc/67d2e18af8d1c0c328adac3a_pexels-jakewymoore-12330350%20(1).webp",
  features: [
    "24/7 Emergency Service",
    "Fast Response Time",
    "Affordable & Transparent Pricing"
  ]
};