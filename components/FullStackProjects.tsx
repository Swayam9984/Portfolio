'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiServer, FiDatabase, FiCloud } from 'react-icons/fi'
import { fadeInUp, staggerContainer, hoverLift } from '@/lib/animations'

const fullstackProjects = [
  {
    title: 'Microservices E-Commerce Platform',
    description: 'Scalable e-commerce system built with microservices architecture, featuring separate services for products, orders, payments, and notifications.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Redis', 'Docker', 'Kubernetes'],
    architecture: {
      services: ['API Gateway', 'Auth Service', 'Product Service', 'Order Service', 'Payment Service'],
      database: 'MongoDB + Redis Cache',
      deployment: 'Kubernetes on AWS',
    },
    icon: FiServer,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Real-Time Collaboration Platform',
    description: 'WebSocket-based collaboration tool with real-time document editing, video conferencing, and team management features.',
    tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'AWS S3', 'WebRTC'],
    architecture: {
      services: ['Frontend (Next.js)', 'WebSocket Server', 'REST API', 'File Storage'],
      database: 'PostgreSQL + Redis',
      deployment: 'Vercel + AWS EC2',
    },
    icon: FiCloud,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Analytics Backend',
    description: 'High-performance analytics API processing millions of events daily with real-time aggregation and custom dashboard APIs.',
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'ClickHouse', 'Celery', 'RabbitMQ'],
    architecture: {
      services: ['API Server', 'Event Processor', 'Aggregation Service', 'Scheduler'],
      database: 'PostgreSQL + ClickHouse',
      deployment: 'Docker Swarm',
    },
    icon: FiDatabase,
    color: 'from-green-500 to-emerald-500',
  },
]

// API Diagram Component
const APIDiagram = ({ architecture }: { architecture: any }) => {
  return (
    <div className="glass p-6 rounded-lg mb-4">
      <h4 className="text-sm font-semibold text-neon-cyan mb-4">Architecture</h4>
      <div className="space-y-3">
        {/* Services */}
        <div>
          <div className="text-xs text-gray-400 mb-2">Services</div>
          <div className="flex flex-wrap gap-2">
            {architecture.services.map((service: string, i: number) => (
              <motion.div
                key={i}
                className="px-3 py-1.5 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 rounded border border-neon-cyan/30 text-xs text-gray-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                {service}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <div className="text-xs text-gray-400 mb-2">Database</div>
          <div className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded border border-green-500/30 text-xs text-gray-300 inline-block">
            {architecture.database}
          </div>
        </div>

        {/* Deployment */}
        <div>
          <div className="text-xs text-gray-400 mb-2">Deployment</div>
          <div className="px-3 py-1.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded border border-orange-500/30 text-xs text-gray-300 inline-block">
            {architecture.deployment}
          </div>
        </div>
      </div>

      {/* Simple Flow Diagram */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <div className="flex items-center justify-center gap-2 text-xs">
          <div className="px-2 py-1 bg-neon-cyan/20 rounded text-neon-cyan">Client</div>
          <div className="text-gray-400">→</div>
          <div className="px-2 py-1 bg-neon-purple/20 rounded text-neon-purple">API</div>
          <div className="text-gray-400">→</div>
          <div className="px-2 py-1 bg-green-500/20 rounded text-green-400">DB</div>
        </div>
      </div>
    </div>
  )
}

export default function FullStackProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="fullstack"
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
              <span className="gradient-text">Full-Stack & Backend</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade backend systems and full-stack applications with
              scalable architectures, robust APIs, and modern DevOps practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fullstackProjects.map((project, index) => (
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
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
                        <project.icon className="text-white" size={24} />
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

                    {/* API Diagram */}
                    <APIDiagram architecture={project.architecture} />

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
                    <div className="flex gap-4 mt-auto">
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
                        <span className="text-sm">Docs</span>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

