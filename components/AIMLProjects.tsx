'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiTrendingUp, FiCpu, FiCamera, FiCode } from 'react-icons/fi'
import { fadeInUp, staggerContainer, hoverLift } from '@/lib/animations'
import type { IconType } from 'react-icons'

const aimlProjects = [
  {
    title: 'Computer Vision Object Detection',
    description: 'Real-time object detection system using YOLOv8 with custom training on specialized datasets. Achieved 94% mAP on custom classes.',
    tech: ['Python', 'PyTorch', 'YOLOv8', 'OpenCV', 'FastAPI'],
    metrics: { accuracy: '94%', fps: '30', dataset: '50K+ images' },
    icon: FiCamera,
    color: 'from-blue-500 to-cyan-500',
    visualization: 'object-detection',
  },
  {
    title: 'NLP Sentiment Analysis API',
    description: 'Production-ready sentiment analysis service using transformer models (BERT) with multi-language support and real-time inference.',
    tech: ['Python', 'TensorFlow', 'BERT', 'FastAPI', 'Docker'],
    metrics: { accuracy: '92%', languages: '5', latency: '<100ms' },
    icon: FiCpu,
    color: 'from-purple-500 to-pink-500',
    visualization: 'sentiment',
  },
  {
    title: 'Predictive Analytics Dashboard',
    description: 'Time-series forecasting system for business metrics using LSTM networks with interactive visualizations and automated reporting.',
    tech: ['Python', 'TensorFlow', 'LSTM', 'React', 'Plotly'],
    metrics: { mape: '8.5%', horizon: '30 days', features: '50+' },
    icon: FiTrendingUp,
    color: 'from-green-500 to-emerald-500',
    visualization: 'forecasting',
  },
  {
    title: 'Recommendation Engine',
    description: 'Hybrid recommendation system combining collaborative filtering and deep learning for personalized content delivery.',
    tech: ['Python', 'PyTorch', 'Neural Collaborative Filtering', 'Redis', 'MongoDB'],
    metrics: { precision: '89%', recall: '87%', users: '100K+' },
    icon: FiCpu,
    color: 'from-orange-500 to-red-500',
    visualization: 'recommendation',
  },
]

// Simple visualization component
const Visualization = ({ type }: { type: string }) => {
  return (
    <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
      {type === 'object-detection' && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-neon-cyan rounded-lg animate-pulse" />
          </div>
          <div className="absolute top-4 left-4 w-8 h-8 bg-neon-cyan rounded-full opacity-60" />
          <div className="absolute bottom-4 right-4 w-6 h-6 bg-neon-purple rounded-full opacity-60" />
        </>
      )}
      {type === 'sentiment' && (
        <>
          <div className="flex gap-2">
            {[0.8, 0.6, 0.9, 0.7, 0.85].map((val, i) => (
              <motion.div
                key={i}
                className="w-4 bg-gradient-to-t from-neon-purple to-neon-pink rounded-t"
                initial={{ height: 0 }}
                animate={{ height: `${val * 100}%` }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ height: `${val * 60}px` }}
              />
            ))}
          </div>
        </>
      )}
      {type === 'forecasting' && (
        <svg className="w-full h-full" viewBox="0 0 200 100">
          <motion.path
            d="M 10,80 Q 50,60 90,50 T 170,30"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      )}
      {type === 'recommendation' && (
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <motion.div
              key={i}
              className="w-8 h-8 bg-gradient-to-br from-neon-purple to-neon-pink rounded opacity-60"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function AIMLProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="aiml"
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
              <span className="gradient-text">AI/ML Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Production-ready machine learning systems and AI solutions built
              with state-of-the-art frameworks and deployed at scale.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {aimlProjects.map((project, index) => {
              const IconComponent: IconType = project.icon || FiCode
              return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group"
                whileHover="hover"
              >
                <motion.div
                  className="glass-strong rounded-2xl overflow-hidden h-full flex flex-col"
                  variants={hoverLift}
                >
                  {/* Header with icon */}
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                        {IconComponent && <IconComponent className="text-white" size={24} />}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Visualization */}
                    <div className="mb-4">
                      <Visualization type={project.visualization} />
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div
                          key={key}
                          className="glass p-3 rounded-lg text-center border border-white/10"
                        >
                          <div className="text-neon-cyan font-bold text-lg">
                            {value}
                          </div>
                          <div className="text-gray-400 text-xs capitalize mt-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="glass px-3 py-1 rounded-full text-xs text-gray-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <FiGithub size={18} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      <motion.a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-neon-purple transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <FiExternalLink size={18} />
                        <span className="text-sm">Demo</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

