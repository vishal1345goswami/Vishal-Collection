'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";

export default function CareSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const features = [
    {
      number: "1",
      title: <span className='text-blue-600'>편리한기능</span>,
      points: [
        "휴대폰으로 언제 어디서나 간편하게",
        "근무지에 도착만해도 자동 출근",
        "앱 설치 한번에 모든 설정 완료"
      ],
      icon: <IoPhonePortraitOutline size={40} />
    },
    {
      number: "2",
      title: <span className='text-blue-600'>합리적인 비용</span>,
      points: [
        "고가의 장비 없는 저렴한 도입 비용",
        "사내 필수 근태관리 기능 지원",
        "부담 없는 유지, 보수 비용",
      ],
      // icon: <FaCoins size={40} />
      icon: <span className='font-sans font-semibold border border-black px-2 py-1 rounded-full text-3xl'>₩</span>
    },
    {
      number: "3",
      title: <span className='text-blue-600'>똑똑한 스케줄링</span>,
      points: [
        "근로기준법에 최적화된 근무시간 관리",
        "유연하게 활용 가능한 스케줄링 기능",
        "근무지 이동이 잦은 현장근무 적용 가능",
      ],
      icon: <LuCalendarClock  size={40} />
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-4 bg-white w-full">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          왓슈 <span className='font-sans text-blue-600'>[WATSSUE]</span> 로 하면 근태관리가 쉬워집니다.
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
          모바일 근태관리 서비스
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16"
        >
          <motion.div variants={itemVariants} className="w-full md:w-1/4">
            <Image
              src='/assets/all-care-1.png'
              alt="Care Image 1"
              width={300}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-fit"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/4">
            <Image
              src='/assets/all-care-2.png'
              alt="Care Image 2"
              width={400}
              height={500}
              className="rounded-lg shadow-md object-cover sm:scale-105 scale-100 w-full h-fit"
            />
          </motion.div>
          <motion.div variants={itemVariants} className="w-full md:w-1/4">
            <Image
              src='/assets/all-care-3.png'
              alt="Care Image 3"
              width={300}
              height={400}
              className="rounded-lg shadow-md object-cover w-full h-fit"
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.number}
              variants={itemVariants}
              className="bg-white shadow-md rounded-lg p-6"
            >
              <div className=" gap-4">
                <div className="p-3 rounded-full  text-black">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {/* <span className="text-amber-500 mr-2">{feature.number}</span> */}
                    <span className="break-keep">{feature.title}</span>
                  </h3>
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li
                        key={i}
                        className="text-gray-600 text-sm flex items-start gap-2"
                      >
                        <span className="text-amber-500 mt-1 flex-shrink-0">-</span>
                        <span className="break-keep">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

