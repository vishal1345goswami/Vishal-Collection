"use client"

import { motion } from "framer-motion"

export function AnimatedRings() {
  return (
    <svg
      className="absolute bottom-0 right-0 w-48 h-48 text-current opacity-10"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.g
        initial={{ scale: 0.8, opacity: 0.5 }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" />
      </motion.g>
    </svg>
  )
}

