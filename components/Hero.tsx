'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/animations'

const roles = [
  'Full Stack Developer',
  'Frontend + Animation + UI Engineer',
  'AI/ML Developer',
]

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/swayamtosscs-svg', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/swayam-patwa-793490256', label: 'LinkedIn' },
    { icon: FiMail, href: '#contact', label: 'Email' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan rounded-full filter blur-3xl opacity-20"
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple rounded-full filter blur-3xl opacity-20"
          animate={{
            x: -mousePosition.x,
            y: -mousePosition.y,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink rounded-full filter blur-3xl opacity-10"
          animate={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-6 inline-block"
          >
            <motion.span 
              className="glass px-4 py-2 rounded-full text-sm text-neon-cyan border border-neon-cyan/30 inline-block"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="gradient-text">{`Hi, I'm Swayam Patwa`}</span>
            <br />
            <span className="text-white">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Winner of Hackathon Code Active 3.O | Finalist at Smart India Hackathon 2024
            <br />
            Crafting premium web experiences, scalable backend systems, and intelligent AI solutions.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            <motion.a
              href="/resume.pdf"
              download
              className="glass-strong px-8 py-4 rounded-lg font-semibold text-white hover:text-neon-cyan border border-neon-cyan/30 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload className="group-hover:animate-bounce" />
              Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              className="glass px-8 py-4 rounded-lg font-semibold text-white hover:text-neon-purple border border-neon-purple/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-neon-cyan border border-white/10 hover:border-neon-cyan/50 transition-all"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-neon-cyan rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

