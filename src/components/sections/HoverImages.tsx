"use client";

import React, { useEffect, useState, MouseEventHandler, ReactNode, useRef } from "react";
import { useAnimate } from "framer-motion";
import { FiMousePointer } from "react-icons/fi";
import { FaHandPointer } from "react-icons/fa"; // ✅ Correct icon import

export const Example = () => {
  const [isHoverDevice, setIsHoverDevice] = useState(true);

  useEffect(() => {
    // Detect if the device supports hover
    const checkHover = window.matchMedia("(hover: hover)").matches;
    setIsHoverDevice(checkHover);
  }, []);

  return (
    <MouseImageTrail
      renderImageBuffer={50}
      rotationRange={25}
      images={[
        "/images/Akagera.jpg",
        "/images/Akagera2.jpg",
        "/images/Akagera3.jpg",
        "/images/Akagera4.jpg",
        "/images/Bisoke.jpg",
        "/images/Canopy.webp",
        "/images/Chimp.jpg",
        "/images/Gorilla.jpg",
        "/images/Gorillas2.jpg",
        "/images/Nyungwe.jpg",
        "/images/Nyungwe2.jpg",
        "/images/Muhazi.jpg",
        "/images/Kivubelt.jpg",
        "/images/Kivu.jpg",
        "/images/Gisenyi.jpg",
        "/images/Volcanoes1.jpg",
        "/images/WaterFall.jpg",
        "/images/Rwanda.jpg",
        "/images/Kigali.jpg",
        "/images/Fazenda.webp",
      ]}
    >
      <section className="grid h-screen w-full place-content-center bg-sand">
        <p className="flex items-center gap-2 text-3xl font-bold uppercase text-black">
          {isHoverDevice ? <FiMousePointer /> : <FaHandPointer />}
          <span>{isHoverDevice ? "Hover me" : "Tap me"}</span>
        </p>
      </section>
    </MouseImageTrail>
  );
};

const MouseImageTrail = ({
  children,
  images,
  renderImageBuffer,
  rotationRange,
}: {
  children: ReactNode;
  images: string[];
  renderImageBuffer: number;
  rotationRange: number;
}) => {
  const [scope, animate] = useAnimate();
  const lastRenderPosition = useRef({ x: 0, y: 0 });
  const imageRenderCount = useRef(0);

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const { clientX, clientY } = e;

    const distance = calculateDistance(
      clientX,
      clientY,
      lastRenderPosition.current.x,
      lastRenderPosition.current.y
    );

    if (distance >= renderImageBuffer) {
      lastRenderPosition.current.x = clientX;
      lastRenderPosition.current.y = clientY;
      renderNextImage();
    }
  };

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  };

  const renderNextImage = () => {
    const imageIndex = imageRenderCount.current % images.length;
    const selector = `[data-mouse-move-index="${imageIndex}"]`;
    const el = document.querySelector(selector) as HTMLElement;

    el.style.top = `${lastRenderPosition.current.y}px`;
    el.style.left = `${lastRenderPosition.current.x}px`;
    el.style.zIndex = imageRenderCount.current.toString();

    const rotation = Math.random() * rotationRange;

    animate(
      selector,
      {
        opacity: [0, 1],
        transform: [
          `translate(-50%, -25%) scale(0.5) ${
            imageIndex % 2 ? `rotate(${rotation}deg)` : `rotate(-${rotation}deg)`
          }`,
          `translate(-50%, -50%) scale(1) ${
            imageIndex % 2 ? `rotate(-${rotation}deg)` : `rotate(${rotation}deg)`
          }`,
        ],
      },
      { type: "spring", damping: 15, stiffness: 200 }
    );

    animate(
      selector,
      { opacity: [1, 0] },
      { ease: "linear", duration: 0.5, delay: 5 }
    );

    imageRenderCount.current = imageRenderCount.current + 1;
  };

  return (
    <div
      ref={scope}
      className="relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchMove={(e) => {
        const touch = e.touches[0];
        lastRenderPosition.current.x = touch.clientX;
        lastRenderPosition.current.y = touch.clientY;
        renderNextImage();
      }}
    >
      {children}

      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Mouse move image ${index}`}
          data-mouse-move-index={index}
          className="pointer-events-none absolute left-0 top-0 h-48 w-auto rounded-xl border-2 border-black bg-neutral-900 object-cover opacity-0"
        />
      ))}
    </div>
  );
};