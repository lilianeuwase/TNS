"use client";

import React from "react";
import Image from "next/image";
// import { CardBody, CardContainer, CardItem } from "@/components/common/card/3d-card;
import {CardBody} from "@/components/common/card/3d-card";
import {CardContainer} from "@/components/common/card/3d-card";
import {CardItem} from "@/components/common/card/3d-card";

export default function HeroSection() {
  return (
     <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-night via-[#2B2A2E] to-[#1F1D20] text-sand px-6 py-20 overflow-hidden">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Hero Content */}
      <div className="z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-clay">
          Explore Rwanda, One Journey at a Time
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Discover breathtaking destinations and unforgettable experiences, all
          crafted with local love.
        </p>
      </div>

      {/* Cards Section */}
      <div className="z-10 mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#1F1D20]/70 backdrop-blur-lg border border-sand/20 p-6 rounded-2xl shadow-lg hover:scale-105 hover:border-sand/40 transition-transform duration-300"
          >
            <div className="h-40 w-full relative mb-4 rounded-xl overflow-hidden">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-sand mb-2">
              {card.title}
            </h3>
            <p className="text-gray-400 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
       <CardContainer className="inter-var" containerClassName="py-8">
         <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[24rem] h-auto rounded-xl p-4 border">
           <CardItem
             translateZ="50"
             className="text-xl font-bold text-neutral-600 dark:text-white"
           >
             Make things float in air
           </CardItem>
           <CardItem
             as="p"
             translateZ="60"
             className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
           >
             Hover over this card to unleash the power of CSS perspective
           </CardItem>
           <CardItem translateZ="100" className="w-full mt-4">
             <img
               src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               height="1000"
               width="1000"
               className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
               alt="thumbnail"
             />
           </CardItem>
           <div className="flex justify-between items-center mt-16">
             <CardItem
               translateZ={20}
               as="a"
               href="https://twitter.com/mannupaaji"
               target="__blank"
               className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
             >
               Try now →
             </CardItem>
             <CardItem
               translateZ={20}
               as="button"
               className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
             >
               Sign up
             </CardItem>
           </div>
         </CardBody>
       </CardContainer>
    </section>
  );
}

const cards = [
  {
    title: "Kigali City Tour",
    description:
      "Experience Rwanda’s vibrant capital: art, culture, and panoramic views.",
    image: "/images/Kigali2.jpg",
  },
  {
    title: "Volcanoes National Park",
    description:
      "Meet the majestic mountain gorillas in the mist-covered highlands.",
    image: "/images/volcanoes.jpg",
  },
  {
    title: "Akagera Safari",
    description:
      "Embark on an unforgettable safari across Rwanda’s only savanna park.",
    image: "/images/safari.jpg",
  },
  {
    title: "Lake Kivu Escape",
    description:
      "Relax on the serene shores of Lake Kivu — sunsets, beaches, and peace.",
    image: "/images/kivu.jpg",
  },
  {
    title: "Nyungwe National Park",
    description:
      "Relax on the serene shores of Lake Kivu — sunsets, beaches, and peace.",
    image: "/images/kivu.jpg",
  },
  {
    title: "Gishwati National Park",
    description:
      "Relax on the serene shores of Lake Kivu — sunsets, beaches, and peace.",
    image: "/images/kivu.jpg",
  },
  {
    title: "Twin Lakes",
    description:
      "Relax on the serene shores of Lake Kivu — sunsets, beaches, and peace.",
    image: "/images/kivu.jpg",
  },
  {
    title: "Customize Your Journey",
    description:
      "Relax on the serene shores of Lake Kivu — sunsets, beaches, and peace.",
    image: "/images/kivu.jpg",
  },
];