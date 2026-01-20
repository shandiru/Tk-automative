import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

const MapSection = () => {
  // Replace this with your actual Google Maps Embed URL
  const mapSource = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.819243447957!2d-0.12775829999999997!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c321693173%3A0x5d05047b4d3f56b9!2sTrafalgar%20Square!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk";

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#062da3]"></div>
              <span className="text-[#062da3] font-bold uppercase tracking-[0.3em] text-[10px]">Location</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">
              Visit Our Workshop
            </h2>
          </div>
          
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white border-b-2 border-[#062da3] pb-1 hover:text-[#062da3] transition-colors font-bold uppercase text-sm tracking-widest"
          >
            Open in Google Maps <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container - Styled with Brand Blue border */}
          <div className="lg:col-span-2 h-[450px] rounded-2xl overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 border-2 border-[#062da3]/0 group-hover:border-[#062da3]/30 transition-all duration-500 pointer-events-none z-10 rounded-2xl"></div>
            <iframe
              src={mapSource}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Workshop Location"
            ></iframe>
          </div>

          {/* Contact Details Card */}
          <div className="bg-[#0A0A0A] rounded-2xl p-8 border border-white/5 flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#062da3]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#062da3]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    123 Performance Way,<br />
                    Unit 4B, Industrial Estate,<br />
                    London, UK
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#062da3]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#062da3]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Working Hours</h4>
                  <p className="text-gray-500 text-sm">Mon - Fri: 09:00 - 18:00</p>
                  <p className="text-gray-500 text-sm">Saturday: 10:00 - 14:00</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#062da3]/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-[#062da3]" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">Phone</h4>
                  <p className="text-gray-500 text-sm">+44 (0) 20 1234 5678</p>
                </div>
              </div>
            </div>

            <button className="w-full mt-8 bg-white text-black py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#062da3] hover:text-white transition-all duration-300">
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;