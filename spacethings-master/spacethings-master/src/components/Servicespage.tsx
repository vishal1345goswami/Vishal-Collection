'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaMobileAlt, FaUsers, FaChartBar, FaClipboardList } from 'react-icons/fa'
import Link from 'next/link'

export default function ServicesSection() {
  const services = [
    {
      title: '왓슈',
      description: '효율적인 근태 관리 플랫폼',
      cta: 'WATSSUE 더 알아보기',
      image: '/assets/ourservice1.svg',
      // here is the page url will added for the "watssue" website
      page:'/watssue',
      bgfrom: "from-blue-300",
      bgto: "to-blue-500",
    },
    {
      title: '대장부',
      description: '매장 운영을 위한 효율적인 관리 플랫폼',
      cta: '대장부 더 알아보기',
      image: '/assets/our.svg',
      // here is the page url will added for the "daejangbu" website
      page:'/daejangbu',
      bgfrom:"from-blue-700",
      bgto:"to-blue-950"
    },
  ]

  const features = [
    { icon: <FaMobileAlt className="text-black text-3xl" />, title: '사용자 편의성', description: '누구도 어렵지 않게 사용' },
    { icon: <FaUsers className="text-black text-3xl" />, title: '합리적 비용', description: '비용 부담은 적고 알찬 기능만' },
    { icon: <FaChartBar className="text-black text-3xl" />, title: '유연한 기능', description: '필요한 추가 기능은 언제든 협의' },
    { icon: <FaClipboardList className="text-black bg-blue text-3xl" />, title: '높은 효율성', description: '최적의 서비스로 업무 효율성 극대화' },
  ]

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

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black text-center mb-12 font-sans"
        >
          Our Services
        </motion.h2>
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

        <motion.h2
          className="text-4xl font-bold text-center text-blue-600 mb-12 font-sans"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="text-black">Why Choose</span> Space Things
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
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

function ServiceCard({ title, description, page, cta, image, imagePosition, svgPosition, index, bgfrom, bgto }: ServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.2
      }
    }
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
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
          <h3 className="text-4xl font-bold text-white mb-4 font-sans uppercase">{title}</h3>
          <p className="text-blue-100 mb-6 leading-relaxed text-xl">
            {description}
          </p>
          <Link
            href={page}
            // variant="secondary"
            className="bg-white px-3 py-2 rounded-lg font-sans text-blue-600 hover:bg-blue-100 font-semibold"
          >
            {cta}
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-500">{description}</p>
    </motion.div>
  )
}

