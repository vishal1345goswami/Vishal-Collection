'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Loader: React.FC = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000) // Adjusted duration for smoother overall animation

    return () => clearTimeout(timer)
  }, [])

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  }

  const fillVariants = {
    hidden: { fillOpacity: 0 },
    visible: {
      fillOpacity: 1,
      transition: { duration: 1, delay: 1.5, ease: "easeInOut" }
    }
  }

  const gradientVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 0.5 }
    }
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 0.5, 0],
      scale: 1.2,
      transition: { 
        opacity: { duration: 3, repeat: Infinity, repeatType: "reverse" },
        scale: { duration: 3, repeat: Infinity, repeatType: "reverse" }
      }
    }
  }

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { 
      opacity: 0, 
      scale: 0.95,
      transition: { duration: 0.8, ease: "easeInOut" }
    }
  }

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-blue-300 filter blur-3xl"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
          />
          <svg width="350" height="329" viewBox="0 0 350 329" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <motion.linearGradient
                id="paint_gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                variants={gradientVariants}
                initial="hidden"
                animate="visible"
              >
                <stop offset="0%" stopColor="#553289">
                  <animate attributeName="stop-color" values="#553289; #1F2077; #553289" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#1F2077">
                  <animate attributeName="stop-color" values="#1F2077; #553289; #1F2077" dur="4s" repeatCount="indefinite" />
                </stop>
              </motion.linearGradient>
            </defs>
            {['M144.307 222.568H25.5918L78.8089 78.7066C85.0037 62.4788 90.6235 57.4207 103.955 55.8994H312.144C340.582 69.8323 337.129 80.0512 337.875 93.9116H119.16L82.9025 188.649H159.511L144.307 222.568Z',
              'M124.423 158.24L137.289 123.152H292.845C312.336 129.269 315.843 137.692 313.898 158.24H248.401L193.429 292.744H147.815L203.371 158.24H124.423Z',
              'M16.2357 250.638H130.856L113.897 293.913H34.9491C20.8118 287.004 4.2843 277.672 16.2357 250.638Z',
              'M222.67 292.744L261.267 197.421C272.362 187.668 282.26 186.427 302.787 187.48L271.208 271.691C258.166 301.674 243.931 292.999 222.67 292.744Z'].map((path, index) => (
              <g key={index}>
                <motion.path
                  d={path}
                  stroke="#553289"
                  strokeWidth="4"
                  variants={pathVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index * 0.2}
                />
                <motion.path
                  d={path}
                  fill="url(#paint_gradient)"
                  variants={fillVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index * 0.2}
                />
              </g>
            ))}
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader

