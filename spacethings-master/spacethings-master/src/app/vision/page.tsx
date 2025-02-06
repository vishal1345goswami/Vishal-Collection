"use client";

import { motion } from "framer-motion";
import { FaMobileAlt, FaRegSmile, FaChartLine, FaHandshake } from "react-icons/fa";
import { MdOutlinePeople, MdOutlineStorefront, MdOutlineAnalytics, MdCloudQueue } from "react-icons/md";

type VisionInfo = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

const visionInfo: VisionInfo[] = [
  {
    icon: <FaChartLine className="text-blue-500 text-4xl mb-4" />,
    title: "비즈니스 성장",
    description: "최첨단 솔루션을 통해 비즈니스 성장을 가속화하고, 새로운 기회를 창출합니다.",
  },
  {
    icon: <MdOutlinePeople className="text-blue-500 text-4xl mb-4" />,
    title: "고객 경험 향상",
    description: "고객과의 상호작용을 개선하고, 더 나은 서비스로 고객 만족도를 높입니다.",
  },
  {
    icon: <MdOutlineAnalytics className="text-blue-500 text-4xl mb-4" />,
    title: "데이터 기반 의사결정",
    description: "분석된 데이터를 바탕으로 효과적인 전략을 세우고 비즈니스 성과를 최적화합니다.",
  },
  {
    icon: <FaRegSmile className="text-blue-500 text-4xl mb-4" />,
    title: "직원 만족도 향상",
    description: "혁신적인 환경에서 일하며, 직원의 만족도를 높이고 성장을 지원합니다.",
  },
];

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8">
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
          우리의 <span className="text-blue-600">비전</span>을 통해 미래를 창조합니다
        </motion.h1>

        <motion.p
          className="text-lg text-center text-gray-600 mb-16"
          variants={itemVariants}
        >
          Space Things는 혁신적 솔루션을 통해 <span className="text-blue-600">비즈니스 성장</span>, <span className="text-blue-600">고객 경험</span> 향상,
          그리고 <span className="text-blue-600">데이터 기반 의사결정</span>을 지원하여, 더 나은 미래를 만들어갑니다.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {visionInfo.map((info, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                <span className="text-blue-600">{info.title}</span>
              </h3>
              <p className="text-gray-600">{info.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h2
          className="text-3xl font-semibold text-center text-gray-700 mt-16 mb-8"
          variants={itemVariants}
        >
          주요 기능 및 장점
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          <FeatureCard
            icon={<FaMobileAlt className="text-indigo-500 text-3xl mb-4" />}
            title="모바일 최적화"
            description="모든 디바이스에서 최상의 사용자 경험을 제공합니다."
          />
          <FeatureCard
            icon={<MdOutlineStorefront className="text-purple-500 text-3xl mb-4" />}
            title="스마트 매장 관리"
            description="매장 운영을 간편하게 관리하고 효율성을 극대화하세요."
          />
          <FeatureCard
            icon={<FaHandshake className="text-pink-500 text-3xl mb-4" />}
            title="고객 및 직원 연결"
            description="고객과 직원의 만족도를 높여 더 나은 협업을 가능하게 합니다."
          />
          <FeatureCard
            icon={<MdCloudQueue className="text-orange-500 text-3xl mb-4" />}
            title="클라우드 기반"
            description="안전하고 효율적인 클라우드 솔루션으로 데이터 관리를 강화합니다."
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

type FeatureCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 text-center"
      variants={itemVariants}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        <span className="text-blue-600">{title}</span>
      </h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
