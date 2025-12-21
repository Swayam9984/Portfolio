'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiAward, FiTrophy, FiCode, FiBriefcase } from 'react-icons/fi'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import { useEffect, useState } from 'react'
import type { IconType } from 'react-icons'

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 })
  
  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const stepDuration = duration / steps
      
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)
      
      return () => clearInterval(timer)
    }
  }, [inView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

const achievements = [
  {
    title: 'Winner',
    subtitle: 'Hackathon Code Active 3.O',
    icon: FiTrophy,
    color: 'from-yellow-400 to-orange-500',
    description: 'Secured 1st place in competitive hackathon',
    year: '2024',
  },
  {
    title: 'Finalist',
    subtitle: 'Smart India Hackathon 2024 Grand Finale',
    icon: FiAward,
    color: 'from-purple-400 to-pink-500',
    description: 'Runner-up in national level hackathon',
    year: '2024',
  },
  {
    title: '5+',
    subtitle: 'Hackathon Projects Built',
    icon: FiCode,
    color: 'from-blue-400 to-cyan-500',
    description: 'Multiple successful hackathon projects',
    year: '2023-2024',
  },
  {
    title: 'Full Stack Intern',
    subtitle: 'Toss Consultancy Services',
    icon: FiBriefcase,
    color: 'from-green-400 to-emerald-500',
    description: 'Professional experience in full-stack development',
    year: '2024',
  },
]

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="achievements"
      ref={ref}
      className="relative py-32 px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Achievements & Recognition</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Highlights of my journey in competitive programming, hackathons, and professional development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent: IconType = achievement.icon || FiAward
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative"
                  whileHover={{ y: -10 }}
                >
                  <motion.div
                    className="glass-strong rounded-2xl p-8 h-full flex flex-col items-center text-center relative overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Floating animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                      }}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      className={`p-4 rounded-2xl bg-gradient-to-br ${achievement.color} mb-4 relative z-10`}
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {IconComponent && <IconComponent className="text-white" size={32} />}
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-neon-cyan font-semibold mb-2">
                      {achievement.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm mb-3">
                      {achievement.description}
                    </p>
                    <span className="text-xs text-gray-500">
                      {achievement.year}
                    </span>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} blur-xl opacity-20`} />
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* Stats Section */}
          <motion.div variants={fadeInUp} className="mt-16">
            <div className="glass-strong rounded-2xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={5} />+
                  </div>
                  <div className="text-gray-400">Hackathon Projects</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={1} />
                  </div>
                  <div className="text-gray-400">Hackathon Wins</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={1} />
                  </div>
                  <div className="text-gray-400">National Finalist</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={1} />
                  </div>
                  <div className="text-gray-400">Professional Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

