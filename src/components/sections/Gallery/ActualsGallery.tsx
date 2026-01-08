"use client";

import React, { useEffect, useMemo, useState } from "react";
import styles from "./ActualsGallery.module.scss";
import { galleryActuals } from "@/utils/galleryActuals";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  title?: string;
  subtitle?: string;
  images?: readonly string[];
  startIndex?: number;
};

export default function ActualsGallery({
  title = "Our Gallery",
  subtitle = "Real moments with clients, touring, exploring, and making memories.",
  images = galleryActuals,
  startIndex = 0,
}: Props) {
  const safeImages = useMemo(() => (images?.length ? images : []), [images]);
  const total = safeImages.length;

  const [index, setIndex] = useState(() =>
    Math.min(Math.max(startIndex, 0), Math.max(total - 1, 0))
  );

  // Store aspect ratios per image: ratio = naturalWidth / naturalHeight
  const [ratios, setRatios] = useState<Record<string, number>>({});

  // Keep index valid if images list changes
  useEffect(() => {
    if (!total) return;
    setIndex((i) => Math.min(Math.max(i, 0), total - 1));
  }, [total]);

  const current = total ? safeImages[index] : null;

  const goNext = () => {
    if (!total) return;
    setIndex((i) => (i + 1) % total);
  };

  const goPrev = () => {
    if (!total) return;
    setIndex((i) => (i - 1 + total) % total);
  };

  // Keyboard support
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  // Capture ratio when an image loads; used to decide "cover" vs "contain"
  const onImgLoad =
    (src: string) => (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      if (!img.naturalWidth || !img.naturalHeight) return;

      const r = img.naturalWidth / img.naturalHeight;

      // avoid pointless re-renders if already stored
      setRatios((prev) => (prev[src] ? prev : { ...prev, [src]: r }));
    };

  const ratio = current ? ratios[current] : undefined;

  // If image is tall/portrait-ish, zoom out (contain) to prevent bad cropping.
  // Tweak threshold: 1.15 (fewer contain) ... 1.35 (more contain)
  const useContain = ratio !== undefined && ratio < 1.25;

  return (
    <section className={styles.section} id="gallery">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        <div className={styles.card}>
          <div className={styles.stage}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={goPrev}
              aria-label="Previous photo"
              disabled={!total}
            >
              ‹
            </button>

            <div className={styles.frame} aria-live="polite">
              {!total ? (
                <div className={styles.empty}>
                  <p>No photos yet.</p>
                  <p className={styles.emptyHint}>
                    Add images to <code>public/images/Actuals</code> and update{" "}
                    <code>galleryActuals</code>.
                  </p>
                </div>
              ) : (
                <>
                  {/* Optional cinematic backdrop only when using contain */}
                  {useContain ? (
                    <div className={styles.backdrop} aria-hidden="true">
                      <img src={current!} alt="" />
                    </div>
                  ) : null}

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current!}
                      src={current!}
                      alt={`Gallery photo ${index + 1} of ${total}`}
                      className={
                        useContain ? styles.imageContain : styles.imageCover
                      }
                      onLoad={onImgLoad(current!)}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.99 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      draggable={false}
                      loading="lazy"
                    />
                  </AnimatePresence>

                  <div className={styles.counter}>
                    <span>{index + 1}</span>
                    <span className={styles.counterSep}>/</span>
                    <span>{total}</span>
                  </div>
                </>
              )}
            </div>

            <button
              type="button"
              className={styles.navBtn}
              onClick={goNext}
              aria-label="Next photo"
              disabled={!total}
            >
              ›
            </button>
          </div>

          {/* Thumbnails */}
          {total ? (
            <div className={styles.thumbs} aria-label="Gallery thumbnails">
              {safeImages.map((src, i) => {
                const active = i === index;
                return (
                  <button
                    key={src}
                    type="button"
                    className={`${styles.thumbBtn} ${
                      active ? styles.thumbActive : ""
                    }`}
                    onClick={() => setIndex(i)}
                    aria-label={`View photo ${i + 1}`}
                  >
                    <img
                      src={src}
                      alt=""
                      className={styles.thumbImg}
                      loading="lazy"
                      draggable={false}
                    />
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}