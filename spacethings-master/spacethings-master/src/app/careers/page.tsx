"use client";

import { motion } from "framer-motion";
import { FaPeopleCarry, FaMoneyBillWave} from "react-icons/fa";
import { MdOutlineAccessTime, MdOutlineHealthAndSafety } from "react-icons/md";

type Benefit = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 150, damping: 15 },
  },
};

const benefits: Benefit[] = [
  {
    icon: <FaMoneyBillWave className="text-green-500 text-4xl mb-4" />,
    title: "경쟁력 있는 급여",
    description: "업계 최고 수준의 보상 패키지를 제공합니다.",
  },
  {
    icon: <MdOutlineHealthAndSafety className="text-red-500 text-4xl mb-4" />,
    title: "건강 보험 혜택",
    description: "포괄적인 건강, 치과, 시력 보험을 통해 당신과 가족의 건강을 지킵니다.",
  },
  {
    icon: <MdOutlineAccessTime className="text-yellow-500 text-4xl mb-4" />,
    title: "유연한 근무 시간",
    description: "업무와 일상 생활의 균형을 맞출 수 있도록 유연한 근무 환경을 제공합니다.",
  },
  {
    icon: <FaPeopleCarry className="text-purple-500 text-4xl mb-4" />,
    title: "팀 빌딩",
    description: "협업과 성장을 위한 팀 빌딩 활동을 제공합니다.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white py-16 mt-10 px-4 sm:px-6 lg:px-8">
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
          저희 <span className="text-blue-600">팀</span>에 합류하여 미래를 함께 만들어가세요
        </motion.h1>

        <motion.p
          className="text-lg text-center text-gray-600 mb-16"
          variants={itemVariants}
        >
          저희 회사는 <span className="text-blue-600">혁신</span>과 <span className="text-blue-600">팀워크</span>를 중시하며,
          직원들이 <span className="text-blue-600">탁월함</span>을 발휘할 수 있도록 지원합니다.
        </motion.p>

        <motion.h2
          className="text-3xl font-semibold text-center text-gray-700 mt-16 mb-8"
          variants={itemVariants}
        >
          신규 채용 곧 공개 예정
        </motion.h2>

        <motion.h2
          className="text-3xl font-semibold text-center text-gray-700 mb-8"
          variants={itemVariants}
        >
          우리와 함께하는 이유
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                <span className="text-blue-600">{benefit.title}</span>
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
