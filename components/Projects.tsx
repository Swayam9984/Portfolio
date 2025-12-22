'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { fadeInUp, staggerContainer, hoverLift } from '@/lib/animations'

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  githubApi?: string
  live: string
  color: string
  featured: boolean
  image?: string
}

const projects: Project[] = [
  {
    title: 'Social Media Website',
    description: 'Full-featured social media platform with real-time messaging, posts, likes, comments, and user profiles. Built with modern web technologies for seamless user experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    github: 'https://github.com/Swayamtosscs',
    live: 'https://project1.great-site.net/',
    color: 'from-blue-500 to-cyan-500',
    featured: true,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop',
  },
  {
    title: 'Amazon Clone (Full Stack)',
    description: 'Complete e-commerce platform clone with product catalog, shopping cart, payment integration, order management, and admin dashboard. Full-stack implementation with modern UI/UX.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Tailwind CSS'],
    github: 'https://github.com/Swayamtosscs',
    live: 'https://amazon-clone-flax-phi-91.vercel.app/signup',
    color: 'from-orange-500 to-red-500',
    featured: true,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop',
  },
  {
    title: 'DSA Instructor',
    description: 'Interactive AI-powered DSA tutor chatbot that explains data structures and algorithms, provides code examples in multiple languages, and offers Big O analysis. Built with modern web technologies.',
    tech: ['React', 'JavaScript', 'AI/ML', 'Chatbot', 'DSA', 'Web App'],
    github: 'https://github.com/Swayamtosscs',
    live: 'https://swayam9984.github.io/DSA-Instructor/',
    color: 'from-purple-500 to-pink-500',
    featured: true,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
  },
  {
    title: 'Religious App (R_gram)',
    description: 'Full-stack religious application with RESTful API backend. Features include prayer times, religious calendar, content management, user authentication, and mobile app integration.',
    tech: ['Node.js', 'Express', 'MongoDB', 'Flutter', 'REST API', 'Firebase'],
    github: 'https://github.com/Swayamtosscs/R_gram-by-toss',
    githubApi: 'https://github.com/Swayamtosscs/rgram_api_linux_new',
    live: '',
    color: 'from-green-500 to-emerald-500',
    featured: false,
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
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
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of production-ready applications showcasing full-stack
              development expertise and modern best practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
                whileHover="hover"
              >
                <motion.div
                  className="glass-strong rounded-2xl overflow-hidden h-full flex flex-col relative"
                  variants={hoverLift}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="glass px-3 py-1 rounded-full text-xs font-semibold text-neon-cyan border border-neon-cyan/50">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Project Image with Parallax Effect */}
                  <motion.div
                    className="h-48 relative overflow-hidden bg-gray-900"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={project.featured}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all" />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                        <div className="absolute bottom-4 left-4 right-4 z-10">
                          <h4 className="text-white text-lg font-bold drop-shadow-lg">
                            {project.title}
                          </h4>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`} />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        <motion.div 
                          className="absolute inset-0 flex items-center justify-center"
                          animate={{
                            backgroundPosition: ['0% 0%', '100% 100%'],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse',
                          }}
                        >
                          <span className="text-white text-2xl font-bold opacity-50 z-10 relative">
                            {project.title}
                          </span>
                        </motion.div>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`}
                          animate={{
                            opacity: [0.3, 0.5, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </>
                    )}
                  </motion.div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 flex-1 text-sm leading-relaxed">
                      {project.description}
                    </p>

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

                    <div className="flex gap-4 flex-wrap">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <FiGithub size={18} />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      {project.githubApi && (
                        <motion.a
                          href={project.githubApi}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-neon-cyan transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <FiGithub size={18} />
                          <span className="text-sm">API Repo</span>
                        </motion.a>
                      )}
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-300 hover:text-neon-purple transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <FiExternalLink size={18} />
                          <span className="text-sm">Live</span>
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl border border-neon-cyan/0 group-hover:border-neon-cyan/50 transition-all pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

