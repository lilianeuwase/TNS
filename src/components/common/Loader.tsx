"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-night overflow-hidden relative">
      {/* Centered car with subtle horizontal idle motion */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-24 md:w-32"
        initial={{ x: "-2vw" }} // start slightly left of center
        animate={{ x: "2vw" }} // move slightly right of center
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            y: [0, -6, 0, 3, 0], // subtle bounce
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/car-icon.png"
            alt="Loading Car"
            width={120}
            height={120}
            className="object-contain drop-shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
