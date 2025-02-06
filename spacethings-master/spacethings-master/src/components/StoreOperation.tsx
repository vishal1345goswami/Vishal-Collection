'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const sections = [
  // {
  //   title: '포스',
  //   subtitle: '운영관리',
  //   color: 'text-[#4AE2C2]',
  //   icon: '/icons/pos.svg',
  //   items: [
  //     '주문결제',
  //     '주문 채널 관리',
  //     '식자재 구매 연동',
  //     '직원 관리'
  //   ]
  // },
  {
    title: '배달',
    subtitle: '배달관리',
    color: 'text-[#92D36E]',
    icon: '/icons/delivery.svg',
    items: [
      '총 매출 내역',
      '채널 매출 내역',
      '배달 앱 정산 내역',
      '수수료',
      '배달 비',
    //   '기간 매출 내역' this will commented because of long content lenght 
    ]
  },
  {
    title: '매장 정보를 한번에 보여주는',
    subtitle: '매출관리',
    color: 'text-[#4A90E2]',
    icon: '/icons/sales.svg',
    items: [
      '통합 매출 내역',
      '카드 매출 내역',
      '배달 앱 매출 내역',
      '기타 매출 내역',
      '상품 판매 내역'
    ]
  },
  {
    title: '정산 입금 내역',
    subtitle: '정산관리',
    color: 'text-[#50C878]',
    icon: '/icons/settlement.svg',
    items: [
      '정산 캘린더',
      '카드 정산 내역',
      '배달 앱 정산 내역'
    ]
  },
  {
    title: '매장 DATA를 활용한',
    subtitle: '분석관리',
    color: 'text-[#2B4BCC]',
    icon: '/icons/analysis.svg',
    items: [
      '매출 분석',
      '배달 앱 분석',
      '판매 상품 분석',
      '상품 별 판매 분석'
    ]
  }
]

export default function StoreOperation() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">매장 운영·관리</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            주문, 매출, 배달 데이터를 분석, 활용하여<br />
            스마트한 매장관리 IT 솔루션을 제공하는 <span className="text-blue-400">푸드테크</span> 기술입니다.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-2"
        >
          {sections.map((section) => (
            <motion.div
              key={section.subtitle}
              variants={itemVariants}
              className="bg-white border-2 border-blue-600 rounded-lg p-6 flex flex-col"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <div className="relative w-full h-full">
                    <Image
                      src={section.icon}
                      alt={section.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm mb-1">{section.title}</p>
                  <h3 className={`text-xl font-bold ${section.color}`}>{section.subtitle}</h3>
                </div>
              </div>
              <ul className="space-y-2 mt-auto">
                {section.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + itemIndex * 0.1 }}
                    className="flex items-center gap-2 text-sm text-[#002B87]"
                  >
                    <span className="w-1 h-1 bg-[#002B87] rounded-full flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}