'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStore, FaUsers, FaCashRegister } from 'react-icons/fa'
import Image from 'next/image'

const categories = [
  {
    title: '매장 관리',
    subtitle: '(Operation)',
    icon: FaStore,
    items: [
      {
        title: '매장 운영',
        points: [
          '세무 : 매출, 회계, 자금 정산',
          '보험 : 매장 보험 등',
          '대출 : 매장 운영자금',
          '마케팅 : 매장 홍보 등'
        ]
      },
      {
        title: '주방 운영',
        points: [
          '주방 영수증 발행',
          'KDS : 주방 운영 시스템'
        ]
      },
      {
        title: '직원 관리',
        points: [
          '급여 관리',
          '근태 관리',
          '직원 신규계약/재계약'
        ]
      }
    ]
  },
  {
    title: '고객 관리',
    subtitle: '(Management)',
    icon: FaUsers,
    items: [
      {
        title: '매장 주문',
        points: [
          'Table Order',
          'Mobile Order',
          'Kiosk Order',
          '마케팅 : 매장 홍보 등'
        ]
      },
      {
        title: '웨이팅 고객',
        points: [
          '대기번호, 인원, 전화번호 체크',
          '예약 시간, 테이블 체크'
        ]
      },
      {
        title: '예약 고객',
        points: [
          '예약 날짜, 시간, 인원 등 체크',
          '단골(VIP) 고객 관리'
        ]
      }
    ]
  },
  {
    title: '주문 관리',
    subtitle: '(Order)',
    icon: FaCashRegister,
    items: [
      {
        title: 'POS',
        points: [
          '매장 식사/포장 주문 체크',
          '매장 주문 및 결제',
          '멤버십, 기타 서비스 체크'
        ]
      },
      {
        title: '배달 주문',
        points: [
          '배달 어플을 통한 주문 관리',
          '수수료, 배달비 체크'
        ]
      },
      {
        title: '식자재',
        points: [
          '식자재 발주',
          '식자재 발주 금액 결제',
          '식자재 재고 파악'
        ]
      }
    ]
  }
]

export default function StoreOperationsDEJANGBU() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h1
          className="text-4xl sm:text-5xl font-bold text-blue-700 mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          복잡한 매장 운영과 비용
        </motion.h1>
        <motion.p
          className="text-lg text-gray-700 mb-5 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          매장의 매출, 정산, 주문, 직원, 고객 등 다양한 접점에서 발생하는 모든 운영을 관리하기에는
          <span className="text-blue-600 font-semibold"> 많은 시간과 비용</span>이 발생 합니다.
        </motion.p>
        </motion.div>

        {/* Image with scroll-triggered animation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Image
            src="/assets/DEJANGBU.svg"
            width={600}
            height={800}
            alt="Dejangbu App Interface"
            className="w-full h-auto py-5"
            priority
          />
        </motion.div>

        {/* Categories */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.5, staggerChildren: 0.2 }}
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-blue-500 text-white p-4 text-center">
                <h3 className="text-xl font-bold">{category.title}</h3>
                <p className="text-sm opacity-90">{category.subtitle}</p>
              </div>
              <div className="p-6">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="mb-6 last:mb-0">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">
                        {itemIdx + 1}
                      </span>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                    </div>
                    <ul className="space-y-2 pl-8">
                      {item.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="text-gray-600 text-sm flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
