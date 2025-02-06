"use client";

import { motion, Variants } from "framer-motion";
import { FaChartBar, FaClipboardList, FaMobileAlt, FaRocket } from "react-icons/fa";
import { MdOutlineBluetooth, MdOutlineGpsFixed, MdAnalytics, MdStore } from "react-icons/md";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

interface MissionInfo {
  icon: JSX.Element;
  title: string;
  description: string;
}

const missionInfo: MissionInfo[] = [
  {
    icon: <MdOutlineBluetooth className="text-blue-500 text-4xl mb-4" />,
    title: "혁신적 Bluetooth 통합",
    description: "Bluetooth 4.2와 SOUND 통합 기술로 장소 기반 정보를 손쉽게 확인 가능",
  },
  {
    icon: <MdOutlineGpsFixed className="text-red-500 text-4xl mb-4" />,
    title: "GPS 및 Geo-Fencing",
    description: "GPS와 Wi-Fi를 이용해 공간 정보 분석 및 고객 이동 패턴 분석",
  },
  {
    icon: <MdAnalytics className="text-green-500 text-4xl mb-4" />,
    title: "LBS 실내외 측위 기술",
    description: "실내외 위치 확인이 가능한 LBS 기술로, 고객 접근과 체류 시간 분석",
  },
  {
    icon: <MdStore className="text-yellow-500 text-4xl mb-4" />,
    title: "매장 운영 최적화",
    description: "운영 효율성을 극대화하는 DEJANGBU 솔루션으로 더 똑똑한 매장 관리",
  },
];

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-white py-28 px-4 sm:px-6 lg:px-8 font-sans">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-10"
          variants={itemVariants}
        >
          혁신적인 솔루션으로 당신의 비즈니스를 성장시키세요
        </motion.h1>

        <motion.p
          className="text-lg text-center text-gray-600 mb-16"
          variants={itemVariants}
        >
          저희 Space Things는 최신 기술로 여러분의 비즈니스를 혁신하고 효율성을
          극대화할 수 있는 솔루션을 제공합니다. Bluetooth, GPS, LBS 기술을
          활용하여 더 나은 공간 정보 분석 및 맞춤형 CRM 데이터를 축적할 수 있습니다.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {missionInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {info.title}
              </h3>
              <p className="text-gray-600">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-3xl font-semibold text-center text-gray-700 mt-16 mb-8"
          variants={itemVariants}
        >
          ALL IN ONE 업무 환경 개선 어플
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          <ServiceCard
            icon={<FaChartBar className="text-indigo-500 text-3xl mb-4" />}
            title="데이터 분석"
            description="주문, 매출, 배달 데이터를 한눈에 확인하고 매장 운영을 최적화하세요."
          />
          <ServiceCard
            icon={<FaClipboardList className="text-purple-500 text-3xl mb-4" />}
            title="근태 및 급여 관리"
            description="직원 근태 및 급여를 편리하게 관리하는 올인원 솔루션"
          />
          <ServiceCard
            icon={<FaMobileAlt className="text-pink-500 text-3xl mb-4" />}
            title="모바일 ALL-CARE"
            description="자동 출퇴근 체크와 쉬운 근태 관리로 업무 효율성을 높입니다."
          />
          <ServiceCard
            icon={<FaRocket className="text-orange-500 text-3xl mb-4" />}
            title="자동화된 공지사항"
            description="회사 및 매장 공지사항을 효율적으로 관리하여 업무를 간소화합니다."
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 text-center"
      variants={itemVariants}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
