'use client'

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FiClock, 
  FiBell, 
  FiFileText, 
  FiCheckSquare, 
  FiDollarSign, 
  FiCalendar,
} from 'react-icons/fi'

function ALLCARE() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const features = [
    { icon: <FiClock className="w-12 h-12" />, title: "정확한 근태 관리", description: "Beacon + GPS 정교한  출.퇴근 체크", bg:"bg-[#00a4e6]" },
    { icon: <FiBell className="w-12 h-12" />, title: "공지사항", description: "실시간 소통 매체로의 역할 수행", bg:"bg-[#45caff]" },
    { icon: <FiFileText className="w-12 h-12" />, title: "전자계약", description: "간편한 직원과의 계약 체결", bg:"bg-[#00e6de]" },
    { icon: <FiCheckSquare className="w-12 h-12" />, title: "체크리스트", description: "업무진행 현황 등다양한 목적의 체크리스트 생성/관리", bg:"bg-[#4c8ae6]" },
    { icon: <FiDollarSign className="w-12 h-12" />, title: "급여관리", description: "시급, 주급, 월급 / 연봉 계산", bg:"bg-[#7eacf1]" },
    { icon: <FiCalendar className="w-12 h-12" />, title: "인사관리", description: "휴가, 외근 등 인사관리", bg:"bg-[#b0c3ff]" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section ref={ref} className="py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-sans text-blue-600">
            WATSSUE
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">왓슈를 시작하면 쉽고 편한 근태관리가 가능해집니다.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className={`${feature.bg} text-white p-6 sm:p-8 rounded-2xl shadow-lg transition-all`}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-16 h-16 bg-white bg-opacity-20 rounded-xl flex items-center justify-center text-white mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ALLCARE