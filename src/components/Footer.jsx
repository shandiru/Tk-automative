
import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const mapsUrl = "https://maps.app.goo.gl/Xm8jrpFBMfzCq1XF8";

  return (
    <footer className="bg-[#000000] border-t border-[#1C1C1C] py-12 text-white">
      <div className="container mx-auto px-4 md:px-12">

        <div className="grid md:grid-cols-3 gap-8">

          {/* ================= COMPANY INFO ================= */}
          <div>
            {/* Logo */}
            <img
              src="/logo.png"
              alt="Broadway Remapping Logo"
              className="h-12 w-auto mb-4"
            />

            <h2 className="text-2xl font-bold brand-gradient">
              BROADWAY <span className="text-[#C0C0C0]"> REMAPPING</span>
            </h2>

            <p className="text-[#C0C0C0] mb-4 mt-3 text-sm leading-relaxed">
              High-quality performance tuning and emissions solutions for cars
              and LCVs — unlocking power, efficiency, and reliability.
            </p>

            <div className="flex space-x-4 mt-4">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/profile.php?id=100037206957303"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook
                  className="text-[#868386] hover:text-[#D70C09] transition-colors"
                  size={20}
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/broadway_remapping_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram
                  className="text-[#868386] hover:text-[#D70C09] transition-colors"
                  size={20}
                />
              </a>

              
            </div>
          </div>

          {/* ================= SERVICES ================= */}
          <div>
            <h3 className="font-bold mb-4 text-lg brand-gradient">Services</h3>

            <ul className="space-y-2 text-[#C0C0C0] text-sm">
              <li>
                <a href="#services" className="hover:text-[#D70C09] transition">
                  ECU Optimisation
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D70C09] transition">
                  AdBlue, EGR & DPF Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D70C09] transition">
                  TCU Remapping
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D70C09] transition">
                  ECU Cloning
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-[#D70C09]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-[#D70C09]">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div>
            <h3 className="font-bold mb-4 text-lg brand-gradient">
              Contact Info
            </h3>

            <ul className="space-y-2 text-[#C0C0C0] text-sm">
              <li>BROADWAY REMAPPING</li>

              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D70C09] transition block leading-relaxed"
                >
                 Que Sera, Pentre Hill
                  <br />
                  Flint Mountain, Flint
                  <br />
                  United Kingdom
                </a>
              </li>

              <li>
                <a
                  href="tel:+447392791919"
                  className="hover:text-[#D70C09] transition"
                >
                  +4473 9279 1919
                </a>
              </li>

              <li>
                <a
                  href="mailto:enquiries@broadwayremapping.co.uk"
                  className="hover:text-[#D70C09] transition break-all"
                >
                  enquiries@broadwayremapping.co.uk
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-[#1C1C1C] mt-10 pt-6 text-center text-[#868386] text-sm">
          <p>&copy; 2025 Broadway Remapping. All rights reserved.</p>
        </div>

        {/* ================= POWERED BY ================= */}
        <div className="mt-2 text-center text-[#868386] text-sm">
          <p>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D70C09] hover:underline"
            >
              Ansely
            </a>
          </p>
        </div>

      </div>

      {/* ================= BRAND GRADIENT ================= */}
      <style jsx global>{`
        .brand-gradient {
          background: linear-gradient(90deg, #D70C09, #ffffff, #868386);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </footer>
  );
}
