"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";

const ContactInfoBlock = () => {
  return (
    <section id="contact" className="relative flex items-center justify-center bg-night text-sand px-8 py-24 overflow-hidden">
      <div className="relative z-10 w-full max-w-xl space-y-10 text-center">
        {/* Tag */}
        <div>
          <p className="mb-1.5 text-sm font-light uppercase tracking-wider text-clay">
            / Contact
          </p>
          <hr className="border-sand/30" />
        </div>

        {/* Text */}
        <p className="max-w-lg mx-auto text-xl leading-relaxed text-sand/90">
          <strong>Have questions?</strong> or <strong>Ready to start your next journey? </strong> Whether it’s a weekend getaway or a full Rwanda adventure,
            we’d love to make it unforgettable.
        </p>

        {/* Typewriter examples */}
        <div>
          <Typewrite
            examples={[
              "How do I customize a trip?",
              "Do you organize group or family tours?",
              "What’s included in the Volcanoes package?",
              "Do you offer airport pickups?",
            ]}
          />
          <hr className="border-sand/20" />
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-sm sm:text-base text-sand/80 mt-8">
          <div className="flex items-center justify-center space-x-3">
            <FaLocationDot className="w-5 h-5 text-ember" />
            <span>Remera, Kigali, Rwanda</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaPhone className="w-5 h-5 text-ember" />
            <span>+250 788 237 763</span>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <FaEnvelope className="w-5 h-5 text-ember" />
            <a
              href="mailto:tnstour2025@gmail.com"
              className="hover:text-sand transition"
            >
              tnstour2025@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Decorative background glow */}
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-ember/20 rounded-full blur-3xl" />
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-clay/15 rounded-full blur-3xl" />
    </section>
  );
};

export default ContactInfoBlock;

/* ---------------- Typewriter Component ---------------- */

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);
    return () => clearInterval(intervalId);
  }, [examples.length]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase tracking-wide text-sand/70">
      <span className="inline-block size-2 bg-clay" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-clay/90"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};