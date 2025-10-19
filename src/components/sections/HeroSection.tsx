'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        yPercent: -100,
        duration: 1.2,
        delay: 1.3,
        ease: 'power3.inOut',
      });
    }

    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen bg-night flex items-center justify-between overflow-hidden"
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-night z-10"
      />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="w-1/2 flex items-center pl-8 md:pl-16 lg:pl-24 pr-8 md:pr-12 z-0"
      >
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-sand mb-6 leading-tight">
            Discover Rwanda with TNS Tours Company
          </h1>
          <p className="text-xl text-sand/80">
            Your journey to the Land of a Thousand Hills begins here.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="w-1/2 min-h-screen bg-charcoal overflow-hidden relative z-0"
      >
        <img 
          src="/images/Car Safari.jpg" 
          alt="Car Safari in Rwanda" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}
