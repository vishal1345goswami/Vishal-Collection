"use client";
import ServicesPage from "@/components/Servicespage";
import { motion } from "framer-motion";
import { FaMobileAlt, FaChartLine, FaRegLightbulb, FaUserFriends } from "react-icons/fa";
import { IoIosAnalytics, IoMdRocket } from "react-icons/io";
import Link from "next/link";

const sectionVariants = {
  hidden: { opacity: 0, y: 10 },
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

export default function IntroductionPage() {
  return (
    <div className="bg-white min-h-screen py-24 px-6 sm:px-12 lg:px-24 font-sans">
      {/* Hero Section */}
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <h1 className="text-4xl font-bold text-gray-900">도입 문의</h1>
      </motion.div>

      {/* Key Solutions Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={listVariants}
      >
        <FeatureCard
          icon={<FaMobileAlt className="text-blue-500 text-4xl" />}
          title="쉽고 편리한 사용 (Easy Operation)"
          description="사용하기 쉬운 인터페이스와 간편한 설정으로 비지니스 운영을 단순화합니다."
        />
        <FeatureCard
          icon={<IoMdRocket className="text-purple-500 text-4xl" />}
          title="혁신적인 기술 (Innovative Technology)"
          description="하이브리드 비콘과 GPS 등 혁신적인 기술을 통해 맞춤형 솔루션을 제공합니다."
        />
        <FeatureCard
          icon={<IoIosAnalytics className="text-red-500 text-4xl" />}
          title="데이터 분석 (Data Analytics)"
          description="고객 데이터를 기반으로 한 인사이트를 제공하여 비지니스 성장에 기여합니다."
        />
        <FeatureCard
          icon={<FaUserFriends className="text-green-500 text-4xl" />}
          title="고객 관리 (CRM)"
          description="고객 정보를 효율적으로 관리하고 고객 관계를 강화할 수 있습니다."
        />
        <FeatureCard
          icon={<FaChartLine className="text-orange-500 text-4xl" />}
          title="성장 촉진 (Business Growth)"
          description="맞춤형 관리 도구를 통해 비지니스 성장을 지원합니다."
        />
        <FeatureCard
          icon={<FaRegLightbulb className="text-yellow-500 text-4xl" />}
          title="유연한 솔루션 (Flexible Solutions)"
          description="비지니스에 최적화된 다양한 솔루션을 통해 유연한 운영을 가능하게 합니다."
        />
      </motion.div>

      <div className="bg-blue-600 py-5 mt-9 rounded-lg px-3">
        {/* Customer Experience Section */}
      <motion.div
        className="text-center my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <p className="text-gray-100 text-2xl">
        &#34;지금 바로 <span className="font-sans">SPACE THINGS</span> 솔루션을 경험해보세요!&#34;
        </p>
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        className="flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <Link href="/contact" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-00 transition duration-300">
          지금 문의하기
        </Link>
      </motion.div>
      </div>
      <div className="mt-8">
      <ServicesPage/>
      </div>
    </div>
  );
}
type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};
// Feature Card Component
function FeatureCard({ icon, title, description }: ServiceCardProps) {
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
