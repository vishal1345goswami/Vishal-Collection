'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { 
  FaUser, 
  FaEnvelope, 
  FaBuilding, 
  FaCheckCircle, 
  FaComment,
  FaCog,
  FaPaperPlane,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    service: 'DAEJANGBU',
    message: '',
    source: 'Contact Page'
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xbljvywd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          companyName: '',
          service: 'DAEJANGBU',
          message: '',
          source: 'Contact Page'
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses = "w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-gray-800 placeholder-gray-400 font-sans";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-2";
  const iconClasses = "absolute left-4 top-12 text-blue-600 text-lg z-10";

  const inputVariants = {
    focus: { scale: 1.02, boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.5)" }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 mt-4">
            문의하기
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            아래의 양식을 입력해 제출해주시면, 귀사에 적합한 안내를 도와드립니다.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-green-500 text-8xl mb-8 inline-block"
              >
                <FaCheckCircle />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                문의가 성공적으로 전송되었습니다!
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                빠른 시일 내에 답변 드리도록 하겠습니다.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStatus('')}
                className="bg-blue-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-600 transition-colors"
              >
                새로운 문의하기
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              method="POST"
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8"
            >
              <motion.div className="relative" whileHover="focus">
                <label htmlFor="name" className={labelClasses}>이름</label>
                <motion.span
                  className={iconClasses}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                >
                  <FaUser />
                </motion.span>
                <motion.input
                  variants={inputVariants}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="성함을 입력하세요"
                  className={inputClasses}
                />
              </motion.div>

              <motion.div className="relative" whileHover="focus">
                <label htmlFor="email" className={labelClasses}>이메일</label>
                <motion.span
                  className={iconClasses}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                >
                  <FaEnvelope />
                </motion.span>
                <motion.input
                  variants={inputVariants}
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="이메일 주소를 입력하세요"
                  className={inputClasses}
                />
              </motion.div>

              <motion.div className="relative" whileHover="focus">
                <label htmlFor="companyName" className={labelClasses}>회사명 / 서비스명</label>
                <motion.span
                  className={iconClasses}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                >
                  <FaBuilding />
                </motion.span>
                <motion.input
                  variants={inputVariants}
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="회사 또는 서비스명을 입력하세요"
                  className={inputClasses} 
                />
              </motion.div>

              <motion.div className="relative" whileHover="focus">
                <label htmlFor="service" className={labelClasses}>서비스 선택</label>
                <motion.span
                  className={iconClasses}
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                >
                  <FaCog />
                </motion.span>
                <motion.select
                  variants={inputVariants}
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="DAEJANGBU">DAEJANGBU</option>
                  <option value="WATSSUE">WATSSUE</option>
                </motion.select>
              </motion.div>

              <motion.div className="relative" whileHover="focus">
                <label htmlFor="message" className={labelClasses}>문의 내용</label>
                <motion.span
                  className="absolute left-4 top-[2.7rem] text-blue-500 text-lg z-10"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                >
                  <FaComment />
                </motion.span>
                <motion.textarea
                  variants={inputVariants}
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="문의하실 내용을 입력하세요"
                  rows={5}
                  className={`${inputClasses} pt-3`}
                
                />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg text-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FaCog className="text-2xl" />
                  </motion.div>
                ) : (
                  <>
                    <FaPaperPlane className="text-xl" />
                    <span>문의 보내기</span>
                  </>
                )}
              </motion.button>

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center justify-center space-x-2 text-red-500"
                >
                  <FaExclamationTriangle />
                  <p>문의 전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
                </motion.div>
              )}
            </motion.form>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center bg-blue-50 p-8 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            고객 지원에 대한 자세한 안내
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            저희 서비스와 함께 하는 동안 어려움이 있으신가요? 
            <span className="font-sans font-semibold text-blue-600"> Space Things </span>의 고객 지원팀은 
            항상 신속하고 신뢰성 있는 답변을 제공해 드리기 위해 최선을 다하고 있습니다.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}