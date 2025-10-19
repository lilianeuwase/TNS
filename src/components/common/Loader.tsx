'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-night pointer-events-none"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-sand text-2xl font-light"
      >
        Loading…
      </motion.p>
    </motion.div>
  );
}
