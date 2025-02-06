'use client'

import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Swiper as SwiperType } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const testimonials = [
  {
    title: "매장운영에만 집중할 수 있어요!",
    content: "일반서 데이터를 점검해주고 효율화 수 있게 해줘서 매장운영에 시간을 더 쓸 수 있어서 좋아요!",
    image: "/Testimonials/profile1.avif",
    author: "김지원 - 카페 대표님"
  },
  {
    title: "데이터 관리가 편해졌어요",
    content: "매출, 재고, 직원 관리까지 한 번에 볼 수 있어서 매장 운영이 한결 수월해졌습니다.",
    image: "/Testimonials/profile2.avif",
    author: "이서연 - 레스토랑 대표님"
  },
  {
    title: "효율적인 매장 관리",
    content: "실시간으로 매장 상황을 파악할 수 있어서 신속한 의사결정이 가능해졌어요.",
    image: "/Testimonials/profile3.avif",
    author: "박준호 - 베이커리 대표님"
  },
  {
    title: "직원 관리가 쉬워졌어요",
    content: "근태관리부터 급여계산까지 자동화되어서 인력 관리가 한결 수월해졌습니다.",
    image: "/Testimonials/profile4.avif",
    author: "최민지 - 프랜차이즈 점장님"
  },
  {
    title: "고객 서비스 품질이 향상됐어요",
    content: "데이터 기반의 의사결정으로 고객 니즈를 더 잘 파악하고 대응할 수 있게 되었습니다.",
    image: "/Testimonials/profile5.avif",
    author: "정현우 - 소매점 운영자"
  },
  {
    title: "시간과 비용을 절약했어요",
    content: "자동화된 프로세스 덕분에 관리 업무에 들이는 시간과 비용을 크게 줄일 수 있었습니다.",
    image: "/Testimonials/profile6.avif",
    author: "강서영 - 온라인 쇼핑몰 대표"
  }
]

export default function TestimonialsSection() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 })
  }, [controls])

  return (
    <section className="pb-16 pt-5 px-4 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
      
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-center mb-16"
        >
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,  
            }}
            loop={true}
            centeredSlides={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            onSwiper={setSwiper}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                {({ isActive }) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`p-8 rounded-2xl shadow-lg h-full flex flex-col transition-all duration-300 ${
                      isActive ? 'bg-blue-500 text-white scale-105' : 'bg-white text-gray-800'
                    }`}
                  >
                    <div className="mb-6 flex items-center justify-center">
                      <motion.div
                        className="relative w-20 h-20 rounded-full overflow-hidden"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">
                      {testimonial.title}
                    </h3>
                    <p className={`text-center flex-grow ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
                      {testimonial.content}
                    </p>
                    <p className={`font-medium text-center mt-4 ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>
                      {testimonial.author}
                    </p>
                  </motion.div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            onClick={() => swiper?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors hidden md:block"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
            <span className="sr-only">Previous slide</span>
          </button>

          <button
            onClick={() => swiper?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors hidden md:block"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
            <span className="sr-only">Next slide</span>
          </button>
        </div>
      </div>
    </section>
  )
}