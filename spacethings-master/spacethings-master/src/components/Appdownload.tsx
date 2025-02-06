'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { FaCheckCircle, FaUser, FaEnvelope, FaQuestionCircle, FaComment } from "react-icons/fa";

export default function AppDownload() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.3]);
  const scaleBg = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xbljvywd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', inquiryType: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-fit flex items-center justify-center overflow-hidden bg-blue-600 py-20 px-4"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{ y: yBg, opacity: opacityBg, scale: scaleBg }}
      >
        <svg
          className="absolute w-[200%] h-[200%] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern id="smallGrid" width="2" height="2" patternUnits="userSpaceOnUse">
              <path d="M 2 0 L 0 0 0 2" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5"/>
            </pattern>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <rect width="10" height="10" fill="url(#smallGrid)"/>
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" filter="url(#glow)" />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto text-center space-y-12 w-full">
        {status === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-6 bg-white p-10 rounded-2xl shadow-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-green-500 text-8xl"
            >
              <FaCheckCircle />
            </motion.div>
            <p className="text-blue-600 text-2xl font-bold font-sans">
              Your inquiry has been submitted!
            </p>
            <p className="text-gray-600 text-xl font-sans">
              We will contact you soon.
            </p>
          </motion.div>
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              혁신의 기회, 지금 바로 사용해보세요
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
            >
              관리 프로세스를 간소화하고 고객 경험을 향상시켜 효율성을 높여보세요
            </motion.p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 md:p-10 rounded-2xl shadow-2xl max-w-7xl mx-auto"
            >
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="이름"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-10 py-3 rounded-lg bg-gray-100 text-blue-600 font-sans text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="이메일"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-10 py-3 rounded-lg bg-gray-100 text-blue-600 font-sans text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
              <div className="relative">
                <FaQuestionCircle className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-10 py-3 rounded-lg bg-gray-100 text-blue-600 font-sans text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all appearance-none"
                  required
                >
                  <option value="">문의 유형 선택</option>
                  <option value="서비스 문의">서비스 문의</option>
                  <option value="기술 지원">기술 지원</option>
                  <option value="일반 문의">일반 문의</option>
                </select>
              </div>
              <div className="relative">
                <FaComment className="absolute left-3 top-5 transform -translate-y-1/2 text-blue-500" />
                <textarea
                  name="message"
                  placeholder="메시지"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-10 py-3 rounded-lg bg-gray-100 text-blue-600 font-sans text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                  rows={4}
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 duration-500 text-white rounded-lg text-xl font-bold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : '문의 보내기'}
              </motion.button>
            </motion.form>
          </>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent pointer-events-none" />
    </section>
  );
}