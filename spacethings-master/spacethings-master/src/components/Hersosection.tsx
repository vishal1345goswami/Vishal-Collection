'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

interface Particle {
  x: number
  startY: number
  size: number
  duration: number
  delay: number
  brightness: number
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [fallingParticles, setFallingParticles] = useState<Particle[]>([])


  useEffect(() => {
    setMounted(true)
    const particles: Particle[] = Array.from({ length: 80 }).map(() => ({
      x: Math.random() * 100,
      startY: -10,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
      brightness: Math.random() * 0.7 + 0.3,
    }))
    setFallingParticles(particles)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 sm:py-0 py-24">
      <div 
        className="absolute inset-0 z-0 opacity-70 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(147, 197, 253, 0.3) 0%, rgba(191, 219, 254, 0.4) 50%, rgba(239, 246, 255, 0.3) 100%)'
        }}
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {fallingParticles.map((particle, index) => (
          <motion.div
            key={index}
            initial={{ y: particle.startY, x: particle.x + "vw" }}
            animate={{ 
              y: ['0vh', '100vh'],
              x: [particle.x + "vw", (particle.x + (Math.random() * 10 - 5)) + "vw"]
            }}
            transition={{
              y: { duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "linear" },
              x: { duration: particle.duration, delay: particle.delay, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{
              position: 'absolute',
              width: particle.size,
              height: particle.size,
              backgroundColor: `rgba(255, 255, 255, ${particle.brightness})`,
              borderRadius: '50%',
              opacity: 0.7,
              filter: `brightness(${particle.brightness})`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 sm:gap-12 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 sm:text-left text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-blue-600">
              <motion.span 
                className="block font-sans" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Our Company
              </motion.span>
            </h1>
            <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-gray-800">
              <motion.span 
                className="block font-sans" 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                핵심 역량
              </motion.span>
            </h1>
              <motion.p 
              className="text-lg text-gray-700 text-left font-semibold tracking-normal font-sans" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              - Location-based integrated O2O Commerce Platform <br />
              - Hybrid Beacon(Ultrasound+BLE)<br />
              - Mobile Wallet / Commerce / AD-Marketing Platform<br />
              - Mobile Interface Module / Mobile CRM Module<br />
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
               transition={{ delay: 1, duration: 0.6 }}
              >
                 <Image
                  src="/icons/logo.png"
                  height={200}
                  width={400}
                  className='sm:-ml-8 ml-0'
                  alt="About Space Things" />
            </motion.div>
            <motion.p 
              className="text-lg text-gray-700" 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              고정밀 내부 측위 시스템을 제공하고 관리하는,<span className='font-sans'>B2C</span> 모델의 모바일 오더에서 <span className='font-sans'>B2B</span> 모델의 시스템 공급까지 확장하여 고정밀 내부 측면위 링크인 <span className='font-sans'>Hybrid Beacon</span>과 이를 기반으로 하는 측위 기술을 개발하여 배포, 문화, 교통, 보안, 스마트 시티 등 다양한 분야에 측위 시스템을 제공하고 있습니다.혁신적인 서비스를 고객에게 제공하고 있습니다.
            </motion.p>
            {/* Animated Contact Us Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Link href="/contact" passHref>
                <motion.span
                  className="inline-flex items-center px-6 py-3 text-2xl font-semibold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  문의하기
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Hexagonal Grid */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative sm:mt-0 -mt-20"
>
  <Image
    src="/assets/Heroimage.svg"
    alt="Logo"
    width={1500}
    height={1500}
    className="w-full h-auto max-w-full object-contain sm:mt-0 mt-[70px]"
  />
</motion.div>

        </div>
      </div>
    </section>
  )
}
