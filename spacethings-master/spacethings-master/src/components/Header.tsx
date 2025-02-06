'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { RiCloseLine } from "react-icons/ri"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import Image from 'next/image'

const navItems = [
  { name: '홈', path: '/' },
  { name: '서비스', path: '/service' },
  { name: '고객지원', path: '/customersupport' },
  { name: '도입문의', path: '/introduction' },
]

export default function UpdatedFloatingNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => setIsMenuOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset'
  }, [isMenuOpen])

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= lastScrollY || window.scrollY <= 100)
      setLastScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          className="fixed top-4 bg-white/70 backdrop-blur-lg shadow-lg rounded-full z-40 w-[90%] mx-[5%]"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src='/assets/headerlogo.png'
                alt='space things logo'
                width={240}
                height={50}
              />
            </Link>

            {/* Center: Nav Links */}
            <nav className="hidden md:flex space-x-8 mx-auto">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.path} isActive={pathname === item.path}>
                  {item.name} 
                </NavLink>
              ))}
            </nav>

            {/* Right: CONTACT Button */}
            <Link href="/contact" className="hidden md:block">
              {/* <motion.div
                className="bg-blue-600 font-semibold text-white px-6 font-sans py-2 text-xl rounded-full hover:bg-blue-700"
                
              >
                CONTACT
              </motion.div> */}
              <Image
                src='/assets/contact.png'
                alt='contact button'
                width={150}
                height={70}
                />
            </Link>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden z-20 text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <RiCloseLine size={28} /> : <HiOutlineMenuAlt3 size={30} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.nav
                className="md:hidden bg-white fixed top-24 left-0 h-auto flex flex-col items-center rounded-b-3xl shadow-lg rounded-3xl z-50 w-[90%] mx-[5%]"
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className="flex flex-col space-y-4 w-full items-center py-4">
                  {navItems.map((item) => (
                    <NavLink key={item.name} href={item.path} isActive={pathname === item.path} mobile>
                      {item.name}
                    </NavLink>
                  ))}
                  <Link href="/contact" >
                  <Image
                src='/assets/contact.png'
                alt='contact button'
                width={150}
                height={70}
                />
                  </Link>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  )
}

interface NavLinkProps {
  href: string
  isActive: boolean
  children: React.ReactNode
  mobile?: boolean
}

function NavLink({ href, isActive, children, mobile = false }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${
        mobile ? 'block py-3 px-4 text-center text-xl' : 'inline-block'
      } relative font-medium transition-colors hover:text-gray-900 text-lg ${
        isActive ? 'text-gray-900' : 'text-gray-600'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </Link>
  )
}
