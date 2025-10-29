"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./HeroSection.module.scss";
import SplitText from "@/components/common/SplitText";


gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  
  const sectionRef = useRef<HTMLElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const endTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    const ctx = gsap.context(() => {
      // --- Overlay lift animation ---
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          yPercent: -100,
          duration: 1.2,
          delay: 0.5,
          ease: "power3.inOut",
        });
      }

      // --- Scroll-triggered cinematic timeline ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1500",
          pin: true,
          scrub: 1.5,
          anticipatePin: 1,
          // pinSpacing: false,
        },
      });
      gsap.set(endTextRef.current, { autoAlpha: 0, y: 20 });

      // --- Navbar fade out ---
      tl.to(
        ".navbar",
        {
          opacity: 0,
          y: -50,
          duration: 0.8,
          ease: "power2.out",
        },
        0
      );

      // --- Text fade up and out ---
      tl.to(
        sectionRef.current?.querySelector("h1"),
        {
          y: -120,
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
        },
        0.2
      ).to(
        sectionRef.current?.querySelector("p"),
        {
          y: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
        },
        0.25
      );

      // --- Image expand & slide into full width ---
      // --- Image expand & slide into full width ---
      // --- Image expand to full screen ---
      // --- Image expand to full screen ---
      tl.to(
        sectionRef.current?.querySelector(".image-container"),
        {
          width: "100vw",
          marginLeft: "-40vw", // Pull it left to cover the text area
          duration: 2,
          ease: "power3.inOut",
        },
        0.3
      )
      .to(
        sectionRef.current?.querySelector(".image-container img"),
        {
          scale: 1.15,
          xPercent: 0,
          duration: 1,
          ease: "power3.inOut",
        },
        0.3
      );
      tl.to(
        endTextRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        ">" // starts right after the image finishes expanding to full screen
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);



  // ✅ Return UI
  return (
    <section
      id="hero"
      ref={sectionRef}
      className={styles.hero}
    >
      <div ref={overlayRef} className={styles.overlay} />

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={styles.textBlock}
      >
        <div>
          <h1>Discover Rwanda with TNS Tours Company</h1>
          <p>Your journey to the Land of a Thousand Hills begins here.</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={{ clipPath: "inset(0 0% 0 0)" }}
        transition={{ duration: 1.2, delay: 1.5, ease: "easeInOut" }}
        className={`${styles.imageContainer} image-container`}
      >
        <img src="/images/Car Safari3.jpg" alt="Car Safari in Rwanda"   style={{ filter: "brightness(0.7)" }} />
      </motion.div>
      <div ref={endTextRef} className={styles.endText}>
        Let's Dive in Together
        {/* <SplitText
          text="Hello, GSAP!"
          className="text-2xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        /> */}
      </div>
      
    </section>

  );
}
