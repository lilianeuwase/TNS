"use client";

import React from "react";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "@/components/common/card/3d-card";

export default function Whys() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-night via-[#2B2A2E] to-[#1F1D20] text-sand px-6 py-20 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Section Header */}
      <div className="z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-clay">
          Why Travel with Us
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Discover the beauty of Rwanda through unforgettable, well-crafted journeys.
        </p>
      </div>

      {/* 3D Cards Section */}
      <div
        className="z-10 mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        style={{ perspective: "1000px" }} // Adds global perspective for each card
      >
        {cards.map((card, index) => (
          <div key={index} className="relative isolate z-10"> {/* isolates stacking */}
            <CardContainer className="inter-var relative z-10">
              <CardBody className="relative bg-[#1F1D20]/70 backdrop-blur-md border border-sand/20 rounded-2xl p-6 shadow-lg hover:shadow-sand/10 dark:hover:shadow-sand/30 transition-all duration-300 h-full flex flex-col justify-between">
                <CardItem
                  translateZ="60"
                  className="relative w-full h-44 mb-4 rounded-xl overflow-hidden"
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover opacity-90"
                  />
                </CardItem>

                <CardItem translateZ="40" className="text-xl font-semibold text-clay mb-2">
                  {card.title}
                </CardItem>

                <CardItem
                  as="p"
                  translateZ="30"
                  className="text-sm text-gray-400 leading-relaxed"
                >
                  {card.description}
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
}

const cards = [
  // {
  //   title: "Outdoor Adventures",
  //   description:
  //     "Experience majestic kayaking, boat rides, bird watching, and other outdoor activities that connect you with Rwanda’s natural wonders.",
  //   image: "/images/card1.jpg",
  // },
  {
    title: "Safe & Comfortable",
    description:
      "Travel with confidence knowing your journey is secure, well-organized, and filled with amazing wildlife experiences in Rwanda’s national parks.",
    image: "/images/card2.jpg",
  },
  {
    title: "Explore Rwanda",
    description:
      "Enjoy customized tours, from gorilla trekking and cultural explorations to hiking Rwanda’s stunning hills, the true 'Land of a Thousand Hills'.",
    image: "/images/card3.jpg",
  },
  {
    title: "Memorable Experiences",
    description:
      "Every trip with TNS Tours is designed to bring you joy and relaxation, creating unforgettable stories and cherished memories.",
    image: "/images/card1.jpg",
  },
];