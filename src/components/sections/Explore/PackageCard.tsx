"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SafariPackage } from "./ExploreHero";
import styles from "./ExploreHero.module.scss";

export default function PackageCard({
  data,
  onOpen,
}: {
  data: SafariPackage;
  onOpen: () => void;
}) {
  return (
    <button
      onClick={onOpen}
      className={styles.card}
      aria-label={`Open details for ${data.title}`}
    >
      <div className={styles.cardMedia}>
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className={styles.cardGradient} />
      </div>

      <div className={styles.cardContent}>
        <span className={styles.badge}>{data.duration}</span>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <p className={styles.cardTagline}>{data.tagline}</p>
        <div className={styles.meta}>
          <span className={styles.region}>{data.region}</span>
          {data.priceFrom && <span className={styles.price}>{data.priceFrom}</span>}
        </div>
      </div>

      <motion.div
        className={styles.hoverRing}
        aria-hidden
        initial={false}
        whileHover={{ opacity: 1, scale: 1.02 }}
        transition={{ duration: 0.25 }}
      />
    </button>
  );
}