

import React, { useEffect } from "react";


export default function ReviewsSection() {


  return (
    <section className="relative py-24 bg-black" id="testimonials">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage: "url('pexels-photo-1397751-2880w.webp')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <h3 className="text-white text-2xl tracking-[4px] uppercase font-bold">
            Customer Feedback
          </h3>

          {/* Red highlight bar */}
          <div className="w-20 h-[3px] bg-[#D70C09] mx-auto mt-4"></div>

          <p className="text-[#C0C0C0] mt-5 text-lg max-w-xl mx-auto">
            Here’s what our clients have to say about our service.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ReviewCard
            text={`Mark remapped my 140TDi (also fitted a RamAir induction kit at the same time) taking it to slightly north of 190bhp, what an amazing difference! Also my fuel economy has risen considerably which was a shock to averaging 57.6mpg around town and 63mpg on long motorway runs. Communication was great with Mark, I left the car with him for the morning and had in back within an hour! Can't praise him enough! Fantastic service and all round lovely guy/company to deal with !.`}
            name="Lee Patrick"
            dataAos="fade-up"
            delay={0}
          />

          <ReviewCard
            text={`Fantastic work by Mark highly recommend him thank you. Had loss of power kept going into limp mode Vauxhall could not find fault. I was recommended by a friend to contact mark. Very helpful 1 hour with mark and have more power and more economical. Thank you.`}
            name="Tony Roberts"
            dataAos="fade-down"
            delay={100}
          />

          <ReviewCard
            text={`Excellent service , 2nd remap I've had off mark ,I run wrecsam dubz club
And he is the only person I recommend for remaps to my club members , thanks again mark.`}
            name="Scott Williams"
            dataAos="fade-up"
            delay={200}
          />

          <ReviewCard
            text={`Mark tuned my vw caddy van for me after having all sorts of problems. Amazing service, really nice guy and the van had been reliable since.
Thanks Broadway remapping`}
            name="James Burns"
            dataAos="fade-down"
            delay={300}
          />

          <ReviewCard
            text={`Recently had my car remapped. Very pleased with the final results. My car certainly has more power now. Mark & his wife are really nice people & very knowledgeable. Communication could be a bit prompter but I know they did have a problem with their phones. Saying that, I would use their services again & I would recommend them. Thank you`}
            name="Emma Raistrick"
            dataAos="fade-up"
            delay={400}
          />

          <ReviewCard
            text={`2010 Volvo V50 1.6d ecoboost remapped. Finally the car now running well with no engine management lights on. Much better service than the Volvo dealership..`}
            name="jennie burns"
            dataAos="fade-down"
            delay={500}
          />
        </div>
      </div>
    </section>
  );
}

/* Updated Review Card Component */
function ReviewCard({ text, name, dataAos, delay }) {
  return (
    <div
      data-aos={dataAos}
      data-aos-delay={delay}
      className="
        bg-black/70 
        text-[#C0C0C0]
        p-6 
        border border-white/10 
        shadow-md 
        backdrop-blur-sm
        min-h-[200px]
        flex flex-col justify-between
        rounded-sm
      "
    >
      {/* Review Text */}
      <p className="text-base leading-relaxed mb-4 whitespace-pre-line">
        {text}
      </p>

      {/* Reviewer Name */}
      <h4 className="text-white text-sm tracking-wide font-semibold uppercase">
        — {name}
      </h4>
    </div>
  );
}
