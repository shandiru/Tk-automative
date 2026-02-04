import React from "react";
import { Award } from "lucide-react";

export default function TeamSection() {
const team = [
    {
      name: "Tristan",
      role: "Founder & Diagnostic Specialist",
      image: "/tristan.jpg",
      points: [
        "Founder of TK Automotive",
        "Advanced Diagnostics Specialist",
        "ECU Calibration Expert",
        "Performance Tuning & Building",
        "Data-Led Methodology",
      ],
      bio:
        "Tristan is the founder of TK Automotive and specialises in advanced diagnostics and ECU calibration. From resolving complex faults to building reliable performance, TK’s approach is data-led and results-driven — with every job tested, validated, and backed by real experience.",
    },
    {
      name: "Alex",
      role: "Workshop Operations & Technician",
      image: "/alex.jpg",
      points: [
        "Workshop Operations Support",
        "Vehicle Repairs & Servicing",
        "Pre-Delivery Preparation",
        "Strong Mechanical Mindset",
        "Quality Assurance Specialist",
      ],
      bio:
        "Alex supports workshop operations and plays an essential role in repairs, servicing and preparation work. With a strong mechanical mindset and a focus on quality, Alex helps ensure every vehicle meets the high standard TK Automotive is known for.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-white mb-12">
          Meet <span className="text-brand">Tristan</span> meet{" "}
          <span className="text-brand">Alex</span>
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
            >
              {/* TOP CONTENT */}
              <div className="flex flex-row min-h-[420px]">
                {/* IMAGE */}
                <div className="w-1/2 h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* DETAILS */}
                <div className="w-1/2 p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-brand">
                    {member.name}
                  </h3>
                  <p className="text-sm text-brand font-semibold mb-4">
                    {member.role}
                  </p>

                  <ul className="space-y-2 text-sm text-gray-700">
                    {member.points.map((item, i) => (
                      <li key={i} className="flex gap-2 items-start">
                        <Award className="w-4 h-4 text-brand mt-1" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* BOTTOM STRIP */}
              <div className="bg-brand text-white p-5 text-sm leading-relaxed">
                {member.bio}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
