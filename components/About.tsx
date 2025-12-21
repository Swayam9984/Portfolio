'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '@/lib/animations'

const skills = [
  { name: 'React/Next.js', level: 95, color: 'from-blue-400 to-cyan-400' },
  { name: 'Node.js/Express', level: 92, color: 'from-green-400 to-emerald-400' },
  { name: 'Python', level: 90, color: 'from-yellow-400 to-orange-400' },
  { name: 'TensorFlow/PyTorch', level: 88, color: 'from-purple-400 to-pink-400' },
  { name: 'MongoDB/Firebase', level: 90, color: 'from-green-400 to-teal-400' },
  { name: 'TypeScript', level: 93, color: 'from-blue-500 to-indigo-500' },
  { name: 'DevOps/Docker', level: 85, color: 'from-cyan-400 to-blue-400' },
  { name: 'AWS/Cloud', level: 87, color: 'from-orange-400 to-red-400' },
]

const techTags = [
  'JavaScript (ES6+)', 'Python', 'Dart', 'SQL', 'React.js', 'Redux', 'Flutter',
  'HTML5', 'CSS3', 'Node.js', 'Firebase', 'MongoDB', 'REST APIs', 'Jest',
  'Cypress', 'React Testing Library', 'Postman', 'GitHub', 'CI/CD',
  'IBM Cloud', 'AWS', 'Linux', 'Data Structures', 'Algorithms', 'OS', 'DBMS',
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="about"
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
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate full-stack developer and hackathon winner with expertise
              in building scalable applications, AI-powered solutions, and modern web experiences.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="glass-strong p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Bachelor of Technology (B.Tech)
                  </h4>
                  <p className="text-gray-300 mb-1">
                    Computer Science & Engineering
                  </p>
                  <p className="text-neon-cyan font-medium mb-1">
                    Gyan Ganga College of Technology, Jabalpur
                  </p>
                  <p className="text-gray-400 text-sm">
                    2022 – 2026 | CGPA: 8.20 / 10
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Description */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-neon-cyan">
                  Full-Stack Development
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Experienced in building modern web applications using React, Node.js,
                  and Flutter. I specialize in creating scalable backend systems with MongoDB,
                  Firebase, and REST APIs. Currently working as Full Stack Developer Intern
                  at Toss Consultancy Services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My projects include social media platforms, e-commerce clones, and
                  mobile applications with robust API backends.
                </p>
              </div>

              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-neon-purple">
                  AI & Problem Solving
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Built AI-powered applications including DSA Instructor chatbot and
                  intelligent systems. Strong foundation in Data Structures & Algorithms,
                  competitive programming, and hackathon problem-solving.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Winner of Hackathon Code Active 3.O and Finalist at Smart India Hackathon 2024.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-neon-pink">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-neon-cyan font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: index * 0.1,
                            ease: [0.6, -0.05, 0.01, 0.99],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Tags */}
          <motion.div variants={fadeInUp} className="glass-strong p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center text-neon-cyan">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {techTags.map((tag, index) => (
                <motion.span
                  key={index}
                  className="glass px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all cursor-default"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

