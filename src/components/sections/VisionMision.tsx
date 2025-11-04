"use client";

import React, { ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedModalDemo from "@/components/common/AnimatedModal";

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
        travelers and Rwanda, its people, wildlife, and culture. We design each
        journey with respect for nature and community, ensuring that every
        traveler leaves with not just memories, but meaning.
      </p>
      <AnimatedModalDemo
        buttonText="Learn More"
        heading="TNS Tours Mission"
        description="We aim to create travel experiences that connect people deeply to Rwanda’s soul, its people, its wildlife, and its stories. Every journey we design is crafted with meaning, inviting travelers to go beyond sightseeing and truly feel the rhythm of the land, to listen to the songs of the forests, share laughter with local communities, and discover the heart of Rwanda through authentic encounters that stay with them forever."
        images={[
          "https://images.unsplash.com/photo-1517322048670-4fba75cbbb62?q=80&w=3000&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1554931670-4ebfabf6e7a9?q=80&w=3387&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=3000&auto=format&fit=crop", 
      
        ]}
      />
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
      <AnimatedModalDemo
        buttonText="Discover More"
        heading="Our Vision for Rwanda "
        description="We dream of Rwanda standing among the world’s top destinations, celebrated for sustainability, beauty, and culture. Our vision is to lead the way in responsible travel, empowering communities, protecting nature, and redefining what it means to explore. Through thoughtful journeys, we aspire to share Rwanda’s warmth with the world while preserving its spirit for generations to come."
        images={[
          "https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3540&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=3000&auto=format&fit=crop",
        ]}
      />
    </div>
  </div>
);