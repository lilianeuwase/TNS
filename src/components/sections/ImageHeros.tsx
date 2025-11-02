"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

export const TextParallaxContentExample = () => {
  return (
    <div className="bg-night">
      <TextParallaxContent
        imgUrl="/images/mission.jpg"
        subheading="Our"
        heading="Mission"
      >
        <MissionContent/>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="/images/vision.jpg"
        subheading="Our"
        heading="Vision"
      >
        <VisionContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: 4,
        paddingRight: 4,
      }}
    >
      <div className="relative h-[100vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const MissionContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-sand md:col-span-4">
      Our Purpose
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-12 text-xl text-neutral-400 md:text-2xl">
        At TNS Tours, our mission is to inspire deep connections between
        travelers and Rwanda — its people, wildlife, and culture. We design each
        journey with respect for nature and community, ensuring that every
        traveler leaves with not just memories, but meaning.
      </p>
      <button className="w-full rounded bg-ember px-9 py-4 text-xl text-sand transition-colors hover:bg-amber-600 md:w-fit">
        Learn More <FiArrowUpRight className="inline ml-1" />
      </button>
    </div>
  </div>
);

const VisionContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold text-sand md:col-span-4">
      Our Dream
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-12 text-xl text-neutral-400 md:text-2xl">
        To showcase Rwanda as a premier travel destination, offering unforgettable adventures and authentic cultural experiences.
          Through sustainable and high-quality tourism, we aspire to leave a positive impact on both travelers and local communities.
      </p>
      <button className="w-full rounded bg-sand border border-sand px-9 py-4 text-xl text-ember transition-colors hover:bg-sand hover:text-night md:w-fit">
        Discover More <FiArrowUpRight className="inline ml-1" />
      </button>
    </div>
  </div>
);