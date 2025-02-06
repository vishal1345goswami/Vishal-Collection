'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { 
  FiClock, 
  FiBell, 
  FiFileText, 
  FiCheckSquare, 
  FiDollarSign, 
  FiCalendar,
} from 'react-icons/fi'
import { MdKeyboardArrowRight } from "react-icons/md";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Appdownload from '@/components/Appdownload'
import TestimonialsSection from '@/components/TestimonialsSection'

export default function WATSSUELandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const controls = useAnimation()

  const slides = [
    '/assets/all-care-1.png',
    '/assets/all-care-2.png',
    '/assets/all-care-3.png'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 2000)

    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" }
    })
  }, [controls])

  const features = [
    { icon: <FiClock className="w-12 h-12" />, title: "근태관리", description: "근태&근무 시간 확인", bg:"bg-[#00a4e6]" },
    { icon: <FiBell className="w-12 h-12" />, title: "공지사항", description: "자동화된 회사 건물 공지사항 전달", bg:"bg-[#45caff]"  },
    { icon: <FiFileText className="w-12 h-12" />, title: "전자계약", description: "보관 및 관리가 용이한 전자계약", bg:"bg-[#00e6de]"  },
    { icon: <FiCheckSquare className="w-12 h-12" />, title: "체크리스트", description: "항복별 진행상황 체크 및 공유", bg:"bg-[#4c8ae6]"  },
    { icon: <FiDollarSign className="w-12 h-12" />, title: "급여정산", description: "자동화된 근태 및 급여 확인", bg:"bg-[#7eacf1]"  },
    { icon: <FiCalendar className="w-12 h-12" />, title: "스케줄 관리", description: "외부/연장 근무 등 스케줄 관리", bg:"bg-[#b0c3ff]"  }
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-white p-4 md:p-8 lg:p-12">
        <div className="max-w-[1520px] mx-auto flex flex-col lg:flex-row items-center mt-[8%] justify-between gap-12">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-5 sm:mt-0 mt-12"
          >
            <h1 className="text-4xl md:text-4xl lg:text-6xl sm:text-left text-center font-bold leading-tight">
              <span className="text-black">손 쉬운 방법의 근태, <span className='text-blue-600'>급여 관리</span></span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-0 sm:text-left text-center">
              <span className="text-blue-600 font-sans">ALL CARE</span> 솔루션
            </h2>

            <div className="flex justify-center md:justify-start">
              <div className="relative inline-block text-left">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-blue-700">
                  WATSSUE
                </h3>
                <motion.svg
                  width="351"
                  height="22"
                  viewBox="0 0 351 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-10 -left-8 w-[120%] h-[120%]"
                >
                  <motion.path
                    d="M2 8.49034C48.4105 5.781 62.0699 4.65087 110.237 3.33231C165.228 1.82696 220.258 1.73668 275.262 2.37317C283.446 2.46788 291.63 2.6252 299.813 2.77814C304.994 2.87497 320.531 2.88946 315.355 3.11917C311.216 3.3028 307.071 3.29231 302.93 3.37494C262.889 4.1738 240.657 4.52883 197.169 5.78344C171.25 6.53119 112.16 8.21662 81.3314 10.366C47.0007 12.7595 150.16 10.5525 184.573 10.7923C234.114 11.1374 283.993 11.7342 333.351 16.5897C343.797 17.6173 342.738 17.3677 349 20"
                    stroke="#5591FF"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={controls}
                  />
                </motion.svg>
              </div>
            </div>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-blue-600 block sm:mt-10 mt-12 text-white rounded-full font-semibold text-xl shadow-lg hover:bg-blue-700 transition-colors sm:mx-0 mx-auto group"
              >
                도입문의 <MdKeyboardArrowRight size={30} className='inline-block items-center group-hover:translate-x-3 duration-500'/>
              </motion.button>
            </Link>
          </motion.div>

          {/* Right Content - Phone Mockup Slider */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative sm:w-[400px] w-[320px] sm:h-[740px] h-[640px] mx-auto">
              {/* Phone Frame */}
              <div className="absolute inset-0 bg-black rounded-[40px] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 transform z-10 -translate-x-1/2 w-28 h-8 bg-black rounded-b-2xl" />
                <div className="w-full h-full bg-white rounded-[32px] overflow-hidden">
                  {/* Slides */}
                  <div className="relative w-full h-full">
                    {slides.map((slide, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ 
                          opacity: currentSlide === index ? 1 : 0,
                          x: currentSlide === index ? 0 : 100
                        }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={slide}
                          alt={`Slide ${index + 1}`}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-[32px]"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 font-sans">ALL-CARE <span className='text-blue-600'>WATSSUE</span></h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${feature.bg} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all`}
              >
                <div className="w-16 h-16 bg-transparent rounded-xl flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Satisfaction Section */}
      <section className="py-12 px-4 bg-white h-fit">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <Image
                src="/assets/2.png"
                width={400}
                height={400}
                alt="Work Satisfaction"
                className="w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h2 className="text-2xl font-bold mb-6">모두가 만족하는 업무 자동화!</h2>
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  직업 만족도 향상으로 인한 매출 증대 효과
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  업무 및 조직에 대한 만족감 강화 효과
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  조직 분위기 단합 효과
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-500">✓</span>
                  현명한 근무 환경 조성 효과
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}<section className="py-20 px-4">
  <div className="max-w-6xl mx-auto space-y-24">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl font-bold mb-4"><span className='font-sans'>WATSSUE</span> 주요 기능</h2>
      <p className="text-xl text-gray-600"><span className='font-sans'>WATSSUE</span>의 주요 기능을 미리 체험해보세요</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      <div className="md:w-1/2">
        <Image
          src="/assets/cal.png"
          width={500}
          height={300}
          alt="급여 정산"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">급여 정산</h3>
        <p className="text-gray-800 font-medium">모든 직장에서 가장 중요한 급여 관리를 더욱 똑똑하게!</p>
        <p className="text-gray-600">급여 명세서도 직접 발급할 수 있어 편리해요</p>
        <div className="flex gap-2 flex-wrap">
          {["#급여확인", "#입금내역", "#급여 명세서"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row-reverse items-center gap-12"
    >
      <div className="md:w-1/2">
        <Image
          src="/assets/time.png"
          width={500}
          height={300}
          alt="근태 관리"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">근태 관리</h3>
        <p className="text-gray-800 font-medium">자동화된 근태관리로 더욱 빠르고 철저하게!</p>
        <p className="text-gray-600">직원별 근무시간 / 근태확인이 쉬워 관리하기 쉬워요</p>
        <div className="flex gap-2 flex-wrap">
          {["#근태확인", "#야근확인", "#지각확인"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-12"
    >
      <div className="md:w-1/2">
        <Image
          src="/assets/worklife.png"
          width={500}
          height={300}
          alt="스케줄 관리"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">스케줄 관리</h3>
        <p className="text-gray-800 font-medium">외부 출장, 연장 근무, 휴가 등 알아보기 쉽게!</p>
        <p className="text-gray-600">팀별, 직원별 스케줄 확인이 용이해 헷갈리지 않아요</p>
        <div className="flex gap-2 flex-wrap">
          {["#출장확인", "#연장내역", "#휴가확인"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
</section>

{/* Testimonials Section */}
<div className='w-full bg-gradient-to-b from-blue-50 to-white py-10'>
  <h2 className="text-3xl md:text-4xl font-bold text-center">
    <span className="font-sans text-blue-600">WATSSUE</span> 도입 후기
  </h2>
  <p className="text-gray-600 text-lg text-center">
    를 먼저 사용해본 사람들의 리뷰를 모아모아!
  </p>
  <TestimonialsSection/>
</div>

<Appdownload/>
    </div>
  )
}