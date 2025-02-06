'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sun } from 'lucide-react'
import * as Tooltip from '@radix-ui/react-tooltip'

const cards = [
  { 
    id: 1, 
    title: '900만원', 
    subtitle: '일평균매출', 
    description: '3개월 일평균',
    tooltip: '평균 매출 분석\n- 3개월 평균 일 판매 금액 분석'
  },
  { 
    id: 2, 
    title: '17~18시', 
    subtitle: '바쁜시간대', 
    description: '지난달 분석',
    tooltip: '바쁜 시간대\n- 전월 기준 판매가 가장 많은 시간 분석'
  },
  { 
    id: 3, 
    title: '토요일', 
    subtitle: '매출이 많은 요일', 
    description: '지난달 분석',
    tooltip: '매출 높은 요일\n- 전월 기준 매출이 가장 높은 요일 분석'
  },
  { 
    id: 4, 
    title: '80%', 
    subtitle: '배달 매출 비율', 
    description: '지난달 분석',
    tooltip: '배달 매출 비율\n- 전월 기준 매장 매출과 배달 매출 비교 분석'
  },
  { 
    id: 5, 
    title: '쿠팡이츠 52%', 
    subtitle: '인기 배달앱', 
    description: '지난달 분석',
    tooltip: '인기 배달 앱\n- 전월 기준 배달 앱 판매 건/매출 비교 분석'
  },
  { 
    id: 6, 
    title: '', 
    subtitle: '오늘날씨', 
    description: '', 
    icon: <Sun className="w-10 h-10 text-blue-600" />,
    tooltip: '오늘의 날씨\n- 날씨 API 연동 및 분석'
  }
]

export default function SalesAnalysis() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200
      }
    }
  }

  const title = "매장 분석 대시보드"

  return (
    <section className="h-fit bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-blue-600 mb-12 text-center"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {title.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {cards.map((card) => (
            <Tooltip.Provider key={card.id}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 relative cursor-pointer"
                    variants={itemVariants}
                  >
                    {/* <div className="absolute top-2 left-2 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      {card.id}
                    </div> */}
                    <div className="flex items-center justify-center mb-4">
                      {card.icon || <span className="text-3xl font-bold text-blue-600">{card.title}</span>}
                    </div>
                    <h2 className="text-xl font-semibold text-blue-600 mb-2 text-center">{card.subtitle}</h2>
                    <p className="text-gray-500 text-center">{card.description}</p>
                  </motion.div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="bg-white p-2 rounded shadow-lg border border-gray-200 max-w-xs"
                    sideOffset={5}
                  >
                    {card.tooltip.split('\n').map((line, index) => (
                      <p key={index} className="text-sm text-gray-700">{line}</p>
                    ))}
                    <Tooltip.Arrow className="fill-white" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          ))}
        </motion.div>
      </div>
    </section>
  )
}