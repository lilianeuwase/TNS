"use client";
import { FaInstagram, FaFacebookF, FaXTwitter, FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative bg-night text-sand border-t border-clay/30">
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-night/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-extrabold text-clay tracking-wider uppercase">
            TNS Tour Company
          </h1>
          <p className="text-sm text-sand/70 leading-relaxed max-w-xs">
            Not just a trip, a story you’ll keep.  
            Explore Rwanda through unforgettable journeys.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h2 className="text-lg font-semibold text-ember mb-4 tracking-wide">
            Explore
          </h2>
          <ul className="space-y-2 text-sm text-sand/80">
            <li><a href="#packages" className="hover:text-sand transition">Packages</a></li>
            <li><a href="#gallery" className="hover:text-sand transition">Gallery</a></li>
            <li><a href="#about" className="hover:text-sand transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-sand transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold text-ember mb-4 tracking-wide">
            Support
          </h2>
          <ul className="space-y-2 text-sm text-sand/80">
            <li><a href="#faq" className="hover:text-sand transition">FAQs</a></li>
            <li><a href="#terms" className="hover:text-sand transition">Terms & Conditions</a></li>
            <li><a href="#privacy" className="hover:text-sand transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-ember mb-4 tracking-wide">
            Contact
          </h2>
          <div className="flex items-start space-x-3 text-sm text-sand/80">
            <FaLocationDot className="w-4 h-4 mt-1 text-clay" />
            <p>Remera, Kigali, Rwanda</p>
          </div>
          <div className="flex items-center space-x-3 text-sm text-sand/80">
            <FaPhone className="w-4 h-4 text-clay" />
            <p>+250 788 237 763</p>
          </div>
          <div className="flex items-center space-x-3 text-sm text-sand/80">
            <FaEnvelope className="w-4 h-4 text-clay" />
            <a href="mailto:tnstour2025@gmail.com" className="hover:text-sand transition">
              tnstour2025@gmail.com
            </a>
          </div>

          <div className="flex space-x-5 pt-4">
            <a href="#" className="hover:text-clay transition"><FaInstagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-clay transition"><FaFacebookF className="w-5 h-5" /></a>
            <a href="#" className="hover:text-clay transition"><FaXTwitter className="w-5 h-5" /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-clay/20 py-4 text-xs">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sand/60">
          <span>© {new Date().getFullYear()} TNS Tour Company Ltd. All rights reserved.</span>

          <span>
            Developed by{" "}
            <a
              href="https://8linescode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-clay/60 hover:decoration-ember hover:text-sand"
            >
              8 Lines Code
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}