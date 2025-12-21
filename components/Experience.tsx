'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Toss Consultancy Services',
    location: 'Jabalpur, India',
    period: 'Aug 2024 - Present',
    description: [
      'Developed and maintained full-stack web applications using React, Flutter, Firebase, and MongoDB',
      'Built RESTful APIs and integrated third-party services for production applications',
      'Worked on Religious App (R_gram) - both frontend and backend development',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Participated in code reviews and followed best practices for scalable code architecture',
    ],
    tech: ['React', 'Flutter', 'Firebase', 'MongoDB', 'REST APIs', 'Node.js'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'President',
    company: 'Newton School Coding Club (GGCT)',
    location: 'Jabalpur, India',
    period: 'Jul 2024 - Present',
    description: [
      'Leading coding club activities and organizing technical events',
      'Mentoring students in programming and software development',
      'Conducting workshops on modern web technologies and best practices',
      'Promoting competitive programming and hackathon participation',
    ],
    tech: ['Leadership', 'Mentoring', 'Event Management', 'Technical Workshops'],
    color: 'from-purple-500 to-pink-500',
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
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
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A journey of growth, innovation, and delivering impactful solutions
              across diverse industries and technologies.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line with animated dots */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink hidden md:block">
              {experiences.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ top: `${(index + 0.5) * (100 / experiences.length)}%` }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                </motion.div>
              ))}
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  } items-center gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple border-4 border-black z-10 hidden md:block" />

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <motion.div
                      className="glass-strong rounded-2xl p-6 hover:border-neon-cyan/50 border border-white/10 transition-all"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${exp.color}`}>
                          <FiBriefcase className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                            <span className="flex items-center gap-1">
                              <FiBriefcase size={14} />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiMapPin size={14} />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <FiCalendar size={14} />
                              {exp.period}
                            </span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-gray-300 text-sm flex items-start gap-2"
                          >
                            <span className="text-neon-cyan mt-1.5">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="glass px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

