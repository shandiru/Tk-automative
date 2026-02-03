import React from "react";
import { Award } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Minty",
      role: "Senior Technician",
      image: "/minty.jpg",
      points: [
        "Halfords – 11 years",
        "NVQ Level 3",
        "Mercedes – 9 years",
        "Maintenance Qualified",
        "Mercedes System Technician Qualified",
      ],
      bio:
        "Hi, I'm Minty! I love boxing 🥊. One of my bucket list items was fighting in the ring — ticked ✔️. I’m one of the few people who hasn’t watched Avatar or Harry Potter 😅",
    },
    {
      name: "Jon",
      role: "Senior Technician",
      image: "/jon.jpg",
      points: [
        "Vauxhall – 4 years",
        "NVQ Level 3",
        "Arriva – 4 years",
        "Bus Technician Qualified",
        "Halfords – 6 years",
        "Mercedes – 8 years",
        "System Technician Qualified",
      ],
      bio:
        "Hi, I'm Jon! I look rough and ready but deep down I’m a detail freak. Part-time raver, full-time technician 🔧",
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
