"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

const footerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.5, 
      staggerChildren: 0.1 
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Footer() {
  return (
    <motion.footer 
      className="bg-white text-gray-800 py-12 border-t border-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/">
                <Image
                    src="/assets/headerlogo2.png"
                    alt="Logo"
                    width={60}
                    height={60}
                />
            </Link>
            <p className="text-sm text-gray-600">
              우리의 혁신적인 솔루션으로 여러분들은 스마트 기기를 사용해
              실시간으로 작업을 관리하고 협업을 원활하게 진행할 수 있습니다.
            </p>
          </motion.div> 

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">서비스</h3>
            <ul className="space-y-2">
              {/* replace the "/daejangbu" with the daejangbu with the website link */}
              <li><Link href="/daejangbu" className="hover:text-blue-600 transition-colors font-sans uppercase">daejangbu</Link></li>
              {/* replace the "/watssue" with the watssue with the website link */}
              <li><Link href="/watssue" className="hover:text-blue-600 transition-colors font-sans">WATSSUE</Link></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">회사소개</h3>
            <ul className="space-y-2">
              <li><Link href="/mission" className="hover:text-blue-600 transition-colors">미션</Link></li>
              <li><Link href="/vision" className="hover:text-blue-600 transition-colors">비전</Link></li>
              <li><Link href="/careers" className="hover:text-blue-600 transition-colors">채용</Link></li>
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-600">고객센터</h3>
            <ul className="space-y-2">
              <li><Link href="/service" className="hover:text-blue-600 transition-colors">서비스</Link></li>
              <li><Link href="/customersupport" className="hover:text-blue-600 transition-colors">고객 지원</Link></li>
              <li><Link href="/introduction" className="hover:text-blue-600 transition-colors">소개</Link></li>
            </ul>
          </motion.div>
        </div>
        {/* Map Section and map will be added or the google maps */}

        <motion.div variants={itemVariants} className="mt-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.472998409562!2d126.98841209999999!3d37.5674783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca318c4bb596d%3A0xf38a86b029a0bb12!2sSignature%20Tower!5e0!3m2!1sen!2sin!4v1735888032378!5m2!1sen!2sin"
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
        
        {/* Map Section Ends here */}
        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm text-gray-600 font-sans">&copy; {new Date().getFullYear()} © Space-Things Company . All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
            <p className="text-sm text-gray-600 font-sans">
              사업자 번호: <a href="tel:+216-86-02946" className="hover:text-blue-600 transition-colors">216-86-02946</a> | <Link href="/service" className="hover:text-blue-600 transition-colors">사업자 정보 확인</Link> | 연락처: <a href="tel:+82269495901" className="hover:text-blue-600 transition-colors">02-6949-5901</a> (평일 09~18) | <a href="mailto:cs_work@spatialdata.co.kr" className="hover:text-blue-600 transition-colors">cs_work@spatialdata.co.kr</a>
            </p>
            </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}