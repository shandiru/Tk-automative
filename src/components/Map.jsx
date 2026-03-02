import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

const PHONE = import.meta.env.VITE_PHONE_NUMBER;

const MapSection = () => {
  // Fixed Google Maps embed URL (Isle of Man locale)
  const mapSource = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2112.44627746045!2d-4.462221799999999!3d54.19195630000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48639b243010e095%3A0xb4f2e3c6dbc99e0!2sTK%20Automotive!5e1!3m2!1sen!2sim!4v1769709511202!5m2!1sen!2sim";

  // Fixed Google Maps directions URL (Isle of Man locale)
  const googleMapsExternal = "https://www.google.com/maps/dir/?api=1&destination=TK+Automotive+Lower+Ballacottier+Onchan+IM4+5BQ&destination_place_id=ChIJleAQMCSbY0gR4Jm8bTwuTws";

  const googleMapsDirections = "https://www.google.com/maps?daddr=Lower+Ballacottier,+Ballacottier+Rd,+Onchan+IM4+5BQ,+Isle+of+Man";

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-brand"></div>
              <span className="text-brand font-bold uppercase tracking-[0.3em] text-[10px]">Location</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
              Visit Our Workshop
            </h2>
          </div>

          <a
            href={googleMapsExternal}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white border-b-2 border-brand pb-1 hover:text-brand transition-colors font-bold uppercase text-sm tracking-widest"
          >
            Open in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2 h-[450px] rounded-2xl overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 border-2 border-brand/0 group-hover:border-brand/30 transition-all duration-500 pointer-events-none z-10 rounded-2xl"></div>
            <iframe
              src={mapSource}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TK Automotive Location"
            ></iframe>
          </div>

          {/* Contact Details Card */}
          <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1 text-xs">Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Lower Ballacottier,<br />
                    Ballacottier Rd, Onchan<br />
                    IM4 5BQ, Isle of Man
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1 text-xs">Working Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Fri: 09:00 - 17:00</p>
                  <p className="text-gray-500 text-sm">Sat - Sun: Closed</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-brand" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1 text-xs">Phone </h4>
                  <p className="text-gray-500 text-sm">{PHONE}</p>
                </div>
              </div>
            </div>

            <a
              href={googleMapsDirections}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-8 bg-white text-black py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-brand hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;