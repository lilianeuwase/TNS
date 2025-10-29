"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Define your image file names and labels
  const images = [
    { src: "/images/Akagera.jpg", label: "Akagera Park" },
    { src: "/images/Volcanoes.jpg", label: "Volcanoes" },
    { src: "/images/Nyungwe.jpg", label: "Nyungwe Forest" },
    { src: "/images/Gorilla.jpg", label: "Gorillas Trekking" },
    { src: "/images/Car Safari5.jpg", label: "Masai Mara" },
    { src: "/images/Car Safari.jpg", label: "Serengeti" },
    { src: "/images/Kivu.jpg", label: "Lake Kivu" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const totalWidth = scrollContainer.scrollWidth;

    const scrollTween = gsap.to(scrollContainer, {
      x: () => -(totalWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "center center",
        end: () => `+=${totalWidth}`,
        pin: true,
        scrub: 1.5,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-32 overflow-hidden"
    >
      <div
        ref={scrollContainerRef}
        className="flex w-fit h-[80vh] items-center gap-8 px-[10vw]"
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 w-[70vw] h-full rounded-2xl overflow-hidden"
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              className="object-cover"
              priority={i === 0}
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <h2 className="text-white text-6xl md:text-7xl font-bold uppercase tracking-wider drop-shadow-lg">
                {item.label}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}