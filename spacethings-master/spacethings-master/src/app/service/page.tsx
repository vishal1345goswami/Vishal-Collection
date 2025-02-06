"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      title: 'WATSSUE',
      description: '작업 흐름을 간소화하고 우리의 혁신적인 작업 관리 솔루션으로 생산성을 높이세요. 실시간 협업, 작업 추적, 자동화된 워크플로우를 통해 팀의 효율성을 극대화하세요.',
      cta: 'WATSSUE 더 알아보기',
      image: '/assets/ourservice1.svg',
      page:'/watssue',
      bgfrom: "from-blue-300",
      bgto: "to-blue-500",
    },
    {
      title: 'Daejangbu',
      description: '최첨단 회계 및 예산 관리 도구로 재무 관리를 혁신하세요. 실시간 재무 추적, 예산 계획, 지출 분석을 통해 재무 의사 결정을 최적화하세요.',
      cta: 'DAEJANGBU 더 알아보기',
      image: '/assets/our.svg',
      page:'/daejangbu',
      bgfrom:"from-blue-700",
      bgto:"to-blue-950"
    },
  ]


  return (
    <main className="min-h-screen bg-white sm:pt-10 pt-5">
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-black text-center mb-12 font-sans"
          >
            Our Services
          </h2>
          <div className="space-y-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                imagePosition={index % 2 === 0 ? 'left' : 'right'}
                svgPosition={index % 2 === 0 ? 'right' : 'left'}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

interface ServiceCardProps {
  title: string
  description: string
  cta: string
  image: string
  imagePosition: 'left' | 'right'
  svgPosition: 'left' | 'right'
  index: number
  page:string
  bgfrom:string
  bgto:string
}

function ServiceCard({ title, description, page, cta, image, imagePosition, svgPosition, bgfrom, bgto }: ServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        // delay: index * 0.2
      }
    }
  }

  return (
    <motion.div
      initial="visible"
      viewport={{ once: true, margin: "0px" }}
      variants={cardVariants}
      className="w-full bg-blue-50 rounded-2xl overflow-hidden shadow-lg relative"
    >
      {/* Animated background */}
      <div className={`absolute inset-0 bg-transparent bg-gradient-to-r ${bgfrom} ${bgto}`}>
        <svg
          className={`absolute ${svgPosition}-0 h-full w-1/2`}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={svgPosition === 'right' ? "100" : "0"}
              cy="50"
              r={20 + i * 15}
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.6"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [0.8, 1.1, 0.8],
                opacity: [0.4, 0.3, 0.4],
              }}
              transition={{
                duration: 4,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      </div>

      <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center relative z-10`}>
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <motion.img
            src={image}
            alt=""
            className="w-full h-64 object-contain"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-8">
          <h3 className="text-2xl font-bold text-white mb-4 font-sans uppercase">{title}</h3>
          <p className="text-blue-100 mb-6 leading-relaxed">
            {description}
          </p>
          <Link
            href={page}
            className="bg-white px-3 py-2 rounded-lg font-sans text-blue-600 hover:bg-blue-100 font-semibold"
          >
            {cta}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
