"use client";

import React from "react";
import FlipCard from "@/components/common/card/FlipCard";

export default function PackagesSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-charcoal via-clay to-sand text-sand px-6 py-20 overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Section Header */}
      <div className="z-10 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uppercase text-clay">
          Explore Rwanda, One Journey at a Time
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Choose from our signature journeys or design your own adventure across Rwanda’s breathtaking landscapes.
        </p>
      </div>

      {/* Flip Cards */}
      <div
        className="
          z-10 mt-16
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-10
          w-full
          max-w-6xl
          mx-auto
          place-items-center
        "
      >
        {packages.map((pkg, index) => (
          <FlipCard
            key={index}
            image={pkg.image}
            title={pkg.title}
            subtitle={pkg.subtitle}
            description={pkg.description}
            rotate="y"
          />
        ))}
      </div>
    </section>
  );
}

/* ----------------- Package Data ------------------ */
const packages = [
  {
    title: "Kigali City Discovery",
    subtitle: "1 Day • Kigali Highlights",
    image: "/images/Kigali.jpg",
    description: `
      Explore Kigali’s heart — Genocide Memorial, Nyamirambo streets, local markets, and sunset from Mount Kigali. 
      Highlights: History, culture, skyline views.
    `,
  },
  {
    title: "Nyungwe Canopy & Zipline",
    subtitle: "1 Day • Nyungwe National Park",
    image: "/images/Canopy.webp",
    description: `
      Glide above the rainforest on Nyungwe’s canopy walkway and zipline adventure. 
      Highlights: Rainforest, zipline, tea hills.
    `,
  },
  {
    title: "Fazenda Sengha Adventure",
    subtitle: "1 Day • Mount Kigali",
    image: "/images/Fazenda.webp",
    description: `
      A day of thrill at Fazenda Sengha — horse riding, zipline, archery, and hillside views. 
      Highlights: Adventure, nature, fun.
    `,
  },
  {
    title: "Lake Muhazi Escape",
    subtitle: "1 Day • Lake Muhazi",
    image: "/images/Muhazi.jpg",
    description: `
      Relax by Lake Muhazi with kayaking, boat rides, and lakeside lunch. 
      Highlights: Water, peace, scenery.
    `,
  },
  {
    title: "Echoes of the Volcano",
    subtitle: "2 Days • Volcanoes NP & Twin Lakes",
    image: "/images/Akagera2.jpg",
    description: `
      Day 1 – Kigali to Volcanoes NP; cultural village visit. 
      Day 2 – Gorilla trekking & canoe at Twin Lakes before returning. 
      Highlights: Gorillas, Virunga views, local culture.
    `,
  },
  {
    title: "Forest Whispers",
    subtitle: "3 Days • Nyungwe Forest & Tea Estates",
    image: "/images/Nyungwe2.jpg",
    description: `
      Day 1 – Kigali to Nyungwe via Huye, museum visit. 
      Day 2 – Chimpanzee trek & canopy walk. 
      Day 3 – Tea tasting & forest walk before return. 
      Highlights: Chimps, rainforest, tea culture.
    `,
  },
  {
    title: "Savannah Sunrise",
    subtitle: "3 Days • Akagera National Park",
    image: "/images/Akagera4.jpg",
    description: `
      Day 1 – Drive to Akagera, sunset boat on Lake Ihema. 
      Day 2 – Full-day game drive (Big Five). 
      Day 3 – Morning birdwatching & return. 
      Highlights: Lions, rhinos, elephants, giraffes.
    `,
  },
  {
    title: "Valley of Echoes",
    subtitle: "5 Days • Volcanoes • Kivu • Nyungwe",
    image: "/images/Gisenyi.jpg",
    description: `
      Day 1 – Kigali City Tour & Memorial. 
      Day 2 – Gorilla trek in Volcanoes NP. 
      Day 3 – Lake Kivu relaxation. 
      Day 4 – Travel to Nyungwe, canopy walk. 
      Day 5 – Return to Kigali. 
      Highlights: Gorillas, lakes, forest.
    `,
  },
  {
    title: "Trail of Fire",
    subtitle: "5 Days • Bisoke • Karisimbi • Musanze Caves",
    image: "/images/Bisoke.jpg",
    description: `
      Day 1 – Arrival & Musanze Caves exploration. 
      Day 2 – Bisoke Crater Hike. 
      Day 3-4 – Two-day Karisimbi ascent. 
      Day 5 – Dian Fossey site & return. 
      Highlights: Volcano hikes, lava trails, adventure.
    `,
  },
  {
    title: "Healing Hills",
    subtitle: "6 Days • Rusizi Hot Springs • Nyungwe • Kivu",
    image: "/images/Kivubelt.jpg",
    description: `
      Day 1 – Kigali to Nyungwe; evening forest walk. 
      Day 2 – Chimp trek & canopy walkway. 
      Day 3 – Rusizi Hot Springs soak. 
      Day 4 – Lake Kivu kayaking. 
      Day 5 – Gishwati–Mukura hike. 
      Day 6 – Return to Kigali. 
      Highlights: Wellness, nature, serenity.
    `,
  },
  {
    title: "Riftline Odyssey",
    subtitle: "8 Days • Volcanoes • Nyiragongo • Kivu",
    image: "/images/Volcanoes1.jpg",
    description: `
      Day 1 – Kigali arrival. 
      Day 2 – Golden monkey trek. 
      Day 3-4 – Nyiragongo Volcano climb & crater camp. 
      Day 5-6 – Relax at Lake Kivu. 
      Day 7-8 – Tea estates & waterfalls. 
      Highlights: Lava lake, gorillas, mountain adventure.
    `,
  },
  {
    title: "Customize Your Journey",
    subtitle: "Design Your Perfect Rwanda Trip",
    image: "/images/Customize.jpg",
    description: `
      Choose from: 
      • Volcanoes National Park  
      • Akagera National Park  
      • Nyungwe Forest  
      • Gishwati–Mukura Park  
      • Lake Kivu (Rubavu, Karongi, Rusizi)  
      • Twin Lakes (Burera & Ruhondo)  
      • Kigali City & Museums  
      • King’s Palace & Ethnographic Museum  
      Create your dream itinerary — from wildlife to culture, lakes to mountains.
    `,
  },
];