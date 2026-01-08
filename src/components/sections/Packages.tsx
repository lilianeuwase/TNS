"use client";

import React from "react";
import FlipCard from "@/components/common/card/FlipCard";

export default function PackagesSection() {
  return (
    <section
      id="packages"
      className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-charcoal via-clay to-sand text-sand px-6 py-20 overflow-hidden"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Section Header */}
      <div className="z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight uper personercase text-clay">
          Explore Rwanda, One Journey at a Time
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Choose from real, tested experiences — Kigali, wildlife, volcanoes,
          forests, lakes, and culture. Prices shown are per person and vary by
          group size.
        </p>
      </div>

      {/* Flip Cards */}
      <div
        className="
          z-10 mt-16
          grid grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-10
          w-full
          max-w-[1600px]
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

/* ----------------- Package Data (from your PDF) ------------------ */
const packages = [
  {
    title: "Full-Day Kigali City Tour",
    subtitle: "From $50 per person • 5–6 hrs • Kigali",
    image: "/images/Kigali.jpg",
    description:
      "Inclusive: entry fees, water, transport, guiding.\nHighlights: Kigali Genocide Memorial, Mount Kigali viewpoints, Kimironko market and city culture.\nGood for: first-timers who want the full Kigali story in one day.\nPrice range: $50–$150 per person (depends on group size).",
  },
  {
    title: "Half-Day Kigali City Tour",
    subtitle: "From $30 per person • 3–4 hrs • Kigali",
    image: "/images/Half.jpg",
    description:
      "Inclusive: entry fees, water, transport, guiding.\nHighlights: Kigali Genocide Memorial + Kimironko market / local city stops.\nGood for: tight schedules (morning or afternoon).\nPrice range: $30–$80 per person (depends on group size).",
  },
  {
    title: "Kigali City by Night",
    subtitle: "From $60 per person • 3–7 hrs • Kigali Nightlife",
    image: "/images/Night Kigali.png",
    description:
      "Inclusive: water, transport, guiding.\nHighlights: night views (Mount Kigali / Rebero), sundowner spots, Nyamirambo car-free vibes, clubs.\nGood for: couples & friends who want Kigali after-dark.\nPrice range: $60–$200 per person (depends on group size).",
  },
  {
    title: "Airport Transfer (Kigali)",
    subtitle: "From $10 per person • Pickup / Drop-off • Kigali",
    image: "/images/Airport.jpg",
    description:
      "Airport pickup: staff meets you at arrivals with your name/company sign.\nAirport drop-off: pickup at hotel ~1 hour before departure (reserve in advance).\nPrice range: $10–$20 per person (depends on group size).",
  },
  {
    title: "Akagera Safari Day Trip",
    subtitle: "From $200 per person • 10–13 hrs • Akagera NP",
    image: "/images/Akagera.jpg",
    description:
      "Inclusive: park entry, water, transport, guiding, packed lunch.\nHighlights: classic game drive with Big 5 potential + birdlife.\nOptional: Lake Ihema boat trip, night game drive.\nPrice range: $200–$515 per person (depends on group size).",
  },
  {
    title: "Hot Air Balloon (Akagera)",
    subtitle: "From $650 per person • 10–13 hrs • Akagera NP",
    image: "/images/Hot air.jpg",
    description:
      "Inclusive: park entry, water, transport, guiding, packed lunch.\nHighlights: aerial views of Lake Ihema, giraffe plains, hills/peninsulas and wildlife.\nGood for: once-in-a-lifetime experience.\nPrice range: $650–$910 per person (depends on group size).",
  },
  {
    title: "Gorilla Trekking (Volcanoes)",
    subtitle: "From $1,600 per person • ~13 hrs • Volcanoes NP",
    image: "/images/Gorilla.jpg",
    description:
      "Inclusive: gorilla permit, water, transport, guiding, lunch.\nHighlights: the ultimate Rwanda experience — mountain gorillas up close.\nGood for: bucket-list travelers.\nPrice range: $1,600–$2,015 per person (depends on group size).",
  },
  {
    title: "Golden Monkey Trek",
    subtitle: "From $200 per person • ~3 hrs • Volcanoes NP",
    image: "/images/Monkeys.jpg",
    description:
      "Inclusive: permits, water, transport, guiding, lunch.\nHighlights: rare and playful golden monkeys in the Virunga Mountains.\nGood for: a shorter trek option.\nPrice range: $200–$315 per person (depends on group size).",
  },
  {
    title: "Dian Fossey Tomb Hike",
    subtitle: "From $180 per person • ~13 hrs • Volcanoes NP",
    image: "/images/DF Hikey.jpg",
    description:
      "Inclusive: park entry, water, transport, guiding, packed lunch.\nHighlights: trek to Karisoke area + Dian Fossey site; scenic forest walk.\nGood for: history + conservation lovers.\nPrice range: $180–$414 per person (depends on group size).",
  },
  {
    title: "Iby’Iwacu Cultural Village",
    subtitle: "From $150 per person • ~13 hrs • Volcanoes Area",
    image: "/images/Volcanoes.jpg",
    description:
      "Inclusive: entry fee, water, transport, guiding, lunch.\nHighlights: local traditions, dances, lifestyle experiences around Volcanoes NP.\nGood for: culture + community.\nPrice range: $150–$375 per person (depends on group size).",
  },
  {
    title: "Mount Bisoke Hike",
    subtitle: "From $180 per person • ~13 hrs • Volcanoes NP",
    image: "/images/Bisoke.jpg",
    description:
      "Inclusive: park entry fee, water, transport, guiding, lunch.\nHighlights: one-day volcano hike adventure in Volcanoes NP.\nGood for: hikers who want a strong challenge in one day.\nPrice range: $180–$414 per person (depends on group size).",
  },
  {
    title: "Nyungwe Canopy Walk",
    subtitle: "From $280 per person • ~13 hrs • Nyungwe NP",
    image: "/images/Nyungwe.jpg",
    description:
      "Inclusive: transport, guiding, lunch, cultural village fee.\nHighlights: the famous suspension canopy walkway above the rainforest.\nGood for: nature + views + unique experience.\nPrice range: $280–$450 per person (depends on group size).",
  },

  // If you want to swap one card for Lake Kivu / Tea / Coffee / Chimps,
  // tell me which 1–2 you want to feature and I’ll fit them in cleanly.
];