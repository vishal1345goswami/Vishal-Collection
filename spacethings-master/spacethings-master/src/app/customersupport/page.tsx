"use client";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaUserShield } from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export default function CustomerSupportPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-24 px-6 sm:px-12 lg:px-24">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="text-4xl font-bold text-gray-900">고객 지원</h1>
        <p className="mt-4 text-lg text-gray-600">Space Things는 언제나 여러분의 곁에 있습니다.</p>
      </motion.div>

      {/* Support Options Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listVariants}
      >
        <SupportOption
          icon={<FaPhoneAlt className="text-blue-500 text-4xl" />}
          title="전화 지원"
          description="연락처: +82 1234-5678 (월-금 9AM - 6PM)"
        />
        <SupportOption
          icon={<FaEnvelope className="text-purple-500 text-4xl" />}
          title="이메일 지원"
          description="문의 사항은 support@spacethings.co.kr 로 이메일을 보내주세요."
        />
        <SupportOption
          icon={<AiOutlineQuestionCircle className="text-orange-500 text-4xl" />}
          title="자주 묻는 질문 (FAQ)"
          description="자주 묻는 질문을 통해 자주 발생하는 문제를 해결하세요."
        />
        <SupportOption
          icon={<FaUserShield className="text-yellow-500 text-4xl" />}
          title="데이터 보호 및 보안"
          description="고객 정보 보호에 최선을 다하고 있습니다."
        />
      </motion.div>

      {/* Customer Feedback Section */}
      <div className="bg-blue-600 py-5 mt-9 rounded-lg px-3">
      <motion.div
        className="text-center my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-semibold text-white">고객 문의하기</h2>
        <p className="text-gray-200 mt-4">
        &#34;<span className="font-sans">SPACE THINGS</span>는 언제나 고객을 위해 기다리고 있습니다. &#34;
        </p>
      </motion.div>

      {/* Call-to-Action Section */}
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Link href="/contact" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-100 transition duration-300">
        문의하기
        </Link>
      </motion.div>
      </div>
    </div>
  );
}
type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};
// Support Option Component
function SupportOption({ icon, title, description }:ServiceCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 text-center"
      variants={itemVariants}
    >
      <div className="mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
