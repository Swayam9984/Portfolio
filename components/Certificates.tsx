'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiAward, FiExternalLink } from 'react-icons/fi'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const certificates = [
  {
    title: 'Hackathon Code Active 3.O',
    issuer: 'Winner',
    date: '2024',
    description: 'Secured 1st place in competitive hackathon',
    color: 'from-yellow-400 to-orange-500',
    link: '#',
  },
  {
    title: 'Smart India Hackathon 2024',
    issuer: 'Finalist (Runner-up)',
    date: '2024',
    description: 'National level hackathon grand finale',
    color: 'from-purple-400 to-pink-500',
    link: '#',
  },
  {
    title: 'Full Stack Development',
    issuer: 'Toss Consultancy Services',
    date: '2024',
    description: 'Professional internship completion certificate',
    color: 'from-blue-400 to-cyan-500',
    link: '#',
  },
]

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="certificates"
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
              <span className="gradient-text">Certificates & Achievements</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Recognition and certifications earned through competitive programming,
              hackathons, and professional development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="glass-strong rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 hover:border-neon-cyan/50 transition-all relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Certificate Header */}
                  <div className={`h-2 bg-gradient-to-r ${certificate.color}`} />
                  
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${certificate.color} flex items-center justify-center mb-6 mx-auto`}
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <FiAward className="text-white" size={32} />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-2 text-center text-white group-hover:text-neon-cyan transition-colors">
                      {certificate.title}
                    </h3>
                    <p className="text-neon-cyan font-semibold text-center mb-2">
                      {certificate.issuer}
                    </p>
                    <p className="text-gray-400 text-sm text-center mb-4 flex-1">
                      {certificate.description}
                    </p>
                    <p className="text-gray-500 text-xs text-center mb-4">
                      {certificate.date}
                    </p>

                    {/* View Certificate Link */}
                    <motion.a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors group/link"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm">View Certificate</span>
                      <FiExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </motion.a>
                  </div>

                  {/* Hover Glow Effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${certificate.color} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none rounded-2xl`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

