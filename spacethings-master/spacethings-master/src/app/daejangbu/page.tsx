'use client'

import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/pagination'
import Appdownload from '@/components/Appdownload'
import TestimonialsSection from '@/components/TestimonialsSection'
import StoreOperation from '@/components/StoreOperation'
import StoreOperationsDEJANGBU from '@/components/StoreOperationsDEJANGBU'
import SalesAnalysis from '@/components/SalesAnalysis'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Dejangbupage() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const controls = useAnimation()


  const slides = [
    '/assets/daej-newheroimage.jpg',
    '/assets/newdashboard.jpg',
    '/assets/newdashboard-1.jpg',
    '/assets/newdashboard-2.jpg'
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
  return (
    <div className="min-h-screen bg-white">
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
              <span className="text-black">효율적인 매장 운영을 위한 매장관리 <span className='text-blue-600 font-sans'>Platform</span></span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-0 sm:text-left text-center">
              <span className="text-blue-600 font-sans">통합정산</span> 솔루션
            </h2>

            <div className="flex justify-center md:justify-start">
              <div className="relative inline-block text-left">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-blue-700">
                대장부
                </h3>
                <motion.svg
                  width="351"
                  height="22"
                  viewBox="0 0 351 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute -bottom-11 -left-5 w-[120%] h-[120%]"
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
            <div className="relative  w-[320px] h-[640px] mx-auto">
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

      <StoreOperationsDEJANGBU/>
      <StoreOperation/>
      <SalesAnalysis/>
      
      <div className='w-full bg-gradient-to-b from-blue-50 to-white py-10'>
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="font-sans text-blue-600 uppercase">DAEJANGBU</span> 도입 후기
        </h2>
        <p className="text-gray-600 text-lg text-center">
          <span className="font-sans">DEJANGBU</span>를 쓰고 계신 대표님들의 후기
        </p>
        <TestimonialsSection/>
      </div>
      <Appdownload/>
    </div>
  )
}

