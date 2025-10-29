"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SafariPackage } from "./ExploreHero";
import styles from "./ExploreHero.module.scss";

export default function PackageModal({
  data,
  onClose,
}: {
  data: SafariPackage;
  onClose: () => void;
}) {
  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className={styles.modalRoot} role="dialog" aria-modal="true" aria-label={`${data.title} details`}>
      <motion.div
        className={styles.backdropBlur}
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className={styles.modal}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
      >
        {/* Hero image */}
        <div className={styles.modalImageWrap}>
          <Image
            src={data.image}
            alt={data.title}
            fill
            className="object-cover"
            priority
          />
          <div className={styles.modalImageVignette} />
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
            ✕
          </button>
          <div className={styles.modalHeaderText}>
            <span className={styles.modalBadge}>{data.duration}</span>
            <h3 className={styles.modalTitle}>{data.title}</h3>
            <p className={styles.modalRegion}>{data.region}</p>
          </div>
        </div>

        {/* Body */}
        <div className={styles.modalBody}>
          <p className={styles.modalDesc}>{data.description}</p>
          {data.highlights?.length > 0 && (
            <ul className={styles.modalList}>
              {data.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          )}

          <div className={styles.modalActions}>
            <a href="#contact" className={styles.primaryBtn}>Book This Tour</a>
            <button onClick={onClose} className={styles.secondaryBtn}>Close</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}