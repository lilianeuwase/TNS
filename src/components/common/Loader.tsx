"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-night overflow-hidden relative">
      {/* Car moving + bouncing */}
      <motion.div
        initial={{ x: "-120%" }} // starts completely off-screen
        animate={{ x: "120vw" }} // exits fully to the right
        transition={{
          duration: 6, // slower, more realistic safari drive
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 w-20 md:w-28"
      >
        <motion.div
          animate={{
            y: [0, -6, 0, 3, 0], // subtle bounce pattern
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/car-icon.png"
            alt="Loading Car"
            width={100}
            height={100}
            className="object-contain drop-shadow-md"
          />
        </motion.div>
      </motion.div>

      {/* Loading text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="text-sand text-lg md:text-xl mt-60 font-semibold tracking-widest"
      >
        Loading...
      </motion.p>
    </div>
  );
}