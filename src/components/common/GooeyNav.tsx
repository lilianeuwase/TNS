'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface GooeyNavItem {
  label: string;
  href: string;
}

interface GooeyNavProps {
  items: GooeyNavItem[];
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  initialActiveIndex?: number;
  animationTime?: number;
  timeVariance?: number;
  colors?: number[];
}

export default function GooeyNav({
  items,
  initialActiveIndex = 0,
}: GooeyNavProps) {
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  const handleClick = (index: number, href: string) => {
    setActiveIndex(index);
    const element = document.querySelector(href);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="flex gap-1 bg-charcoal/30 backdrop-blur-sm rounded-full p-2">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={item.label}
            onClick={() => handleClick(index, item.href)}
            className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
          >
            {isActive && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-sand rounded-full"
                initial={false}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}
            <span
              className={`relative z-10 ${
                isActive ? 'text-night' : 'text-sand/70 hover:text-sand'
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
