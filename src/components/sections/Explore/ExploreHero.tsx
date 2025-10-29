"use client";

import { useMemo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ExploreHero.module.scss";
import PackageModal from "./PackageModal";
import PackageCard from "./PackageCard";

export type SafariPackage = {
  id: string;
  title: string;
  duration: string;       // e.g., "3 Days"
  region: "Rwanda" | "Uganda" | "Congo" | "Rwanda • Uganda" | "Rwanda • Congo";
  image: string;          // /images/packages/....
  tagline: string;        // one-liner
  description: string;    // 2–3 sentences
  highlights: string[];   // bullets in modal
  priceFrom?: string;     // optional
};

const PACKAGES: SafariPackage[] = [
  // ————— RWANDA —————
  {
    id: "rw-1",
    title: "Rwanda Gorilla Trek – Short Tour",
    duration: "1 Day",
    region: "Rwanda",
    image: "/images/Akagera.jpg",
    tagline: "A swift, unforgettable encounter with Rwanda’s mountain gorillas.",
    description:
      "Begin before sunrise and trek through the emerald slopes of Volcanoes National Park. Guided by expert rangers, you’ll spend a magical hour with a gorilla family before returning to Kigali by evening.",
    highlights: ["Volcanoes National Park", "Expert ranger guides", "Private transfer from Kigali"],
    priceFrom: "From $1,450",
  },
  {
    id: "rw-3",
    title: "Gorilla Safari & Dian Fossey Tomb",
    duration: "3 Days",
    region: "Rwanda",
    image: "/images/packages/rwanda-fossey-3days.jpg",
    tagline: "Gorilla trekking plus a historic hike to the Dian Fossey site.",
    description:
      "Combine a classic gorilla trek with a meaningful hike to the Dian Fossey Research Camp and memorial. Learn how conservation reshaped Volcanoes NP and meet the gentle giants she fought to protect.",
    highlights: ["Gorilla trek permit", "Dian Fossey memorial hike", "2 nights lodge stay"],
  },
  {
    id: "rw-4",
    title: "Rwanda Gorilla Safari — 2 Gorilla Treks",
    duration: "4 Days",
    region: "Rwanda",
    image: "/images/packages/rwanda-gorilla-2treks.jpg",
    tagline: "Double the chance, double the magic.",
    description:
      "Two separate gorilla treks across different families maximize your photography and viewing opportunities. Evenings are spent in a cozy lodge with sweeping volcano views.",
    highlights: ["2 trekking permits", "Boutique lodge", "All guided logistics"],
  },
  {
    id: "rw-5",
    title: "Chimpanzee & Gorilla Safari",
    duration: "5 Days",
    region: "Rwanda",
    image: "/images/packages/rwanda-chimps-gorillas.jpg",
    tagline: "Nyungwe chimps + Volcanoes gorillas in one epic loop.",
    description:
      "Track playful chimpanzees in Nyungwe Forest’s ancient canopies, then continue to Volcanoes NP for a powerful gorilla encounter. A perfect primate-focused adventure.",
    highlights: ["Nyungwe Forest NP", "Volcanoes NP", "Primate specialist guides"],
  },
  {
    id: "rw-cd-8",
    title: "Rwanda–Congo Adventure",
    duration: "8 Days",
    region: "Rwanda • Congo",
    image: "/images/packages/rwanda-congo-8days.jpg",
    tagline: "From misty volcanoes to the raw lava slopes of Nyiragongo.",
    description:
      "Begin in Rwanda with culture and gorillas, then cross into DR Congo for an unforgettable ascent of Mount Nyiragongo (subject to park status).",
    highlights: ["Gorillas in Rwanda", "Nyiragongo hike (status-dependent)", "Cross-border logistics"],
  },

  // ————— UGANDA —————
  {
    id: "ug-2",
    title: "Bwindi Gorilla Tour",
    duration: "2 Days",
    region: "Uganda",
    image: "/images/packages/uganda-bwindi-2days.jpg",
    tagline: "A focused, short-and-sweet Bwindi trek.",
    description:
      "Fly or drive to Bwindi Impenetrable Forest for a swift, expertly guided gorilla trek. Ideal for travelers short on time but big on dreams.",
    highlights: ["Bwindi NP trek", "Local trackers", "Seamless permits & transfers"],
  },
  {
    id: "ug-5",
    title: "Uganda Wildlife Safari",
    duration: "5 Days",
    region: "Uganda",
    image: "/images/packages/uganda-wildlife-5days.jpg",
    tagline: "Savannah game drives with a primate touch.",
    description:
      "Combine classic game drives in Queen Elizabeth NP with a possible Kazinga Channel boat cruise. Add on chimps in Kibale for the ultimate Uganda blend.",
    highlights: ["Queen Elizabeth NP", "Boat cruise option", "Add-on Kibale chimps"],
  },
  {
    id: "rw-ug-7",
    title: "Rwanda–Uganda Safari",
    duration: "7 Days",
    region: "Rwanda • Uganda",
    image: "/images/packages/rwanda-uganda-7days.jpg",
    tagline: "Seamless cross-border primates & plains.",
    description:
      "Start in Kigali, finish in Entebbe (or reverse). Gorillas in Rwanda, then sweep into Uganda for chimps and open savannahs.",
    highlights: ["Cross-border route", "Gorillas + chimps", "Flexible finish city"],
  },
  {
    id: "rw-ug-9",
    title: "Uganda–Rwanda Wildlife Safari",
    duration: "9 Days",
    region: "Rwanda • Uganda",
    image: "/images/packages/uganda-rwanda-9days.jpg",
    tagline: "The long arc of forests, lakes, and wildlife.",
    description:
      "A generous itinerary linking Uganda’s game parks with Rwanda’s misty volcanoes. Perfect for travelers who want the full regional picture.",
    highlights: ["Game drives + primates", "Kazinga Channel", "Volcanoes NP finale"],
  },

  // ————— CONGO —————
  {
    id: "cd-2",
    title: "Congo Gorilla Tour",
    duration: "2 Days",
    region: "Congo",
    image: "/images/packages/congo-gorilla-2days.jpg",
    tagline: "A rare, raw, and riveting gorilla trek.",
    description:
      "Venture into DR Congo for a distinctive gorilla experience with specialist trackers. Logistics, permits, and security briefings handled end-to-end.",
    highlights: ["Specialist trackers", "Permit handling", "Logistics & briefings"],
  },
  {
    id: "cd-3",
    title: "Mount Nyiragongo Hiking",
    duration: "3 Days",
    region: "Congo",
    image: "/images/packages/nyiragongo-3days.jpg",
    tagline: "Ascend an otherworldly volcano (subject to park status).",
    description:
      "A challenging hike to peer into one of the world’s most dramatic lava lakes. Operates subject to official advisories and park re-openings.",
    highlights: ["Guided ascent", "Crater-rim night", "Status-dependent operation"],
  },
];

export default function ExploreHero() {
  const [active, setActive] = useState<SafariPackage | null>(null);

  // lock body scroll while modal open
  const lock = useCallback((lock: boolean) => {
    if (typeof document === "undefined") return;
    document.documentElement.style.overflow = lock ? "hidden" : "";
  }, []);

  useEffect(() => {
    lock(!!active);
    return () => lock(false);
  }, [active, lock]);

  const grouped = useMemo(() => {
    const byRegion: Record<string, SafariPackage[]> = {};
    for (const p of PACKAGES) {
      byRegion[p.region] ??= [];
      byRegion[p.region].push(p);
    }
    return byRegion;
  }, []);

  return (
    <section id="explore" className={styles.exploreSection} aria-label="Explore Rwanda – Packages">
      {/* BACKDROP IMAGE + MIST */}
      <div className={styles.backdrop}>
        <Image
          src="/images/Kivu.jpg"
          alt="Rwanda Landscape"
          fill
          priority
          className="object-cover"
        />
        <div className={styles.mist} />
        <div className={styles.vignette} />
      </div>

      {/* TITLE */}
      <div className={styles.headerWrap}>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={styles.title}
        >
          Explore Rwanda, One Journey at a Time
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className={styles.subtitle}
        >
          Hand-picked safaris across Rwanda, Uganda & Congo — curated by local experts.
        </motion.p>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {PACKAGES.map((pkg, idx) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.05 }}
          >
            <PackageCard data={pkg} onOpen={() => setActive(pkg)} />
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <PackageModal
            data={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}