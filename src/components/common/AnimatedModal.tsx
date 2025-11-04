import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/common/modal/animated-modal";
import { motion } from "framer-motion";
import { FaPlaneDeparture } from "react-icons/fa";

interface AnimatedModalDemoProps {
  buttonText: string;
  heading: string;
  description?: string;
  images?: string[];
}

export default function AnimatedModalDemo({
  buttonText,
  heading,
  description,
  images = [],
}: AnimatedModalDemoProps) {
  return (
    <div className="py-10 flex items-center justify-start">
      <Modal>
        {/* 🔹 Button label now dynamic */}
        <ModalTrigger className="relative bg-clay dark:bg-clay dark:text-white text-white flex justify-center px-6 py-3 rounded-md group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            {buttonText}
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            <FaPlaneDeparture className="w-5 h-5 text-white dark:text-white" />
          </div>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6">
              {heading}
            </h4>

            {description && (
              <p className="text-center text-neutral-400 text-sm md:text-base mb-6 max-w-md mx-auto">
                {description}
              </p>
            )}

            {/* 🔹 Image collage */}
            <div className="flex justify-center items-center flex-wrap gap-3">
              {images.map((image, idx) => (
                <motion.div
                  key={idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl p-1 bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`modal-${idx}`}
                    width="500"
                    height="500"
                    className="rounded-lg h-24 w-24 md:h-40 md:w-40 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}