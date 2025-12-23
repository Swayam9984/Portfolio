'use client'

import Image, { type StaticImageData } from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiAward, FiExternalLink, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import awsCertImg from '@/assests/aws certificate.jpg'
import internshipCertImg from '@/assests/certificate of internship .jpg'
import hackathonPosterImg from '@/assests/4.jpg'
import hackathonStageImg from '@/assests/hacathon imag 2.jpg'
import hackathonTrophyImg from '@/assests/hackaton image 1.jpg'
import hackathonFirstImg from '@/assests/hacathon imag e.jpg'
import yuktiCertificateImg from '@/assests/yukti innovation cahllenge.jpg'
import yuktiMeetImg from '@/assests/yukti 1.jpg'
import ideBootcampStageImg from '@/assests/iic.jpg'
import ideBootcampFrameImg from '@/assests/icc 2.jpg'
import ideBootcampGroupImg from '@/assests/cc 3.jpg'
import sihWorkImg1 from '@/assests/1734247893640.jpg'
import sihWorkImg2 from '@/assests/1734247899612.jpg'
import sihWorkImg3 from '@/assests/1734247903115.jpg'

type CertImage = StaticImageData | string

function CertificateImagesSlider({
  images,
  title,
}: {
  images: CertImage[]
  title: string
}) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Auto-slide through images every 4 seconds
  useEffect(() => {
    if (!images.length || !isMounted) return

    const interval = setInterval(() => {
      setDirection(1)
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length, isMounted])

  if (!images.length || !isMounted) return null

  // Ensure index is within bounds
  const safeIndex = Math.max(0, Math.min(index, images.length - 1))
  const currentImage = images[safeIndex]

  if (!currentImage) return null

  const goPrev = () => {
    setDirection(-1)
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goNext = () => {
    setDirection(1)
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="mb-4 relative group">
      <div className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden border-2 border-white/20 bg-black/40 shadow-2xl group-hover:border-neon-cyan/50 transition-all duration-500">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={safeIndex}
            initial={{
              x: direction > 0 ? 300 : -300,
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              x: direction < 0 ? 300 : -300,
              opacity: 0,
              scale: 0.8,
            }}
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
            }}
            className="absolute inset-0"
          >
            <Image
              src={currentImage}
              alt={`${title} photo ${safeIndex + 1}`}
              fill
              className="object-cover"
              priority={safeIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
          style={{ width: '200%' }}
        />

        {/* Enhanced Controls */}
        <motion.button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 backdrop-blur-sm text-white hover:bg-neon-cyan/80 transition-all duration-300 shadow-lg hover:scale-110 z-10"
          whileHover={{ scale: 1.1, x: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiChevronLeft size={18} />
        </motion.button>
        <motion.button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 backdrop-blur-sm text-white hover:bg-neon-cyan/80 transition-all duration-300 shadow-lg hover:scale-110 z-10"
          whileHover={{ scale: 1.1, x: 2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiChevronRight size={18} />
        </motion.button>

        {/* Enhanced Dots with animation */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > safeIndex ? 1 : -1)
                setIndex(i)
              }}
              className="relative"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === safeIndex
                    ? 'w-8 bg-gradient-to-r from-neon-cyan to-neon-purple'
                    : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                animate={i === safeIndex ? {
                  boxShadow: [
                    '0 0 8px rgba(0, 240, 255, 0.5)',
                    '0 0 16px rgba(0, 240, 255, 0.8)',
                    '0 0 8px rgba(0, 240, 255, 0.5)',
                  ],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.button>
          ))}
        </div>

        {/* Image counter */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-semibold border border-white/20">
          {safeIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  )
}

const certificates = [
  {
    title: 'Hackathon Code Active 3.O',
    issuer: 'Winner',
    date: '2024',
    description: 'Secured 1st place in competitive hackathon (Grand Finale).',
    color: 'from-yellow-400 to-orange-500',
    // First image: trophy + certificate (hackaton image 1.jpg), then other photos auto-slide
    images: [hackathonTrophyImg, hackathonFirstImg, hackathonPosterImg, hackathonStageImg],
    link: '',
  },
  {
    title: 'Smart India Hackathon 2024',
    issuer: 'Finalist (Runner-up)',
    date: '2024',
    description: 'National level hackathon grand finale',
    color: 'from-purple-400 to-pink-500',
    images: [sihWorkImg1, sihWorkImg2, sihWorkImg3],
    link: '',
  },
  {
    title: 'Full Stack Development Internship',
    issuer: 'Toss Consultancy Services',
    date: 'Aug 2024 – Nov 2025',
    description: '6‑month full stack developer internship showcasing strong technical execution across multiple projects.',
    color: 'from-blue-400 to-cyan-500',
    image: internshipCertImg,
    link: '',
  },
  {
    title: 'AWS Certified Cloud Practitioner – Practice Set',
    issuer: 'AWS Training & Certification',
    date: 'July 29, 2025',
    description: 'Completed the official AWS practice question set for the AWS Certified Cloud Practitioner (CLF‑C02).',
    color: 'from-emerald-400 to-sky-500',
    image: awsCertImg,
    link: '',
  },
  {
    title: 'IIC Regional Meet 2025 – Raipur',
    issuer: 'MoE’s Innovation Cell & IIC, AICTE',
    date: '2nd December 2025',
    description:
      'Participated in the IIC Regional Meet 2025 at Shri Shankaracharya Institute of Professional Management & Technology, Raipur.',
    color: 'from-indigo-400 to-sky-500',
    images: [yuktiMeetImg, yuktiCertificateImg],
    link: '',
  },
  {
    title: 'Innovation, Design & Entrepreneurship (IDE) Bootcamp 2025',
    issuer: 'MoE’s Innovation Cell & AICTE',
    date: '17th – 21st February 2025',
    description:
      'Selected for the national-level IDE Bootcamp focused on innovation, design thinking, and entrepreneurship at Gyan Ganga Institute of Technology & Sciences, Jabalpur.',
    color: 'from-pink-500 to-amber-400',
    images: [ideBootcampStageImg, ideBootcampFrameImg, ideBootcampGroupImg],
    link: '',
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-neon-cyan/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeInUp} className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <FiAward className="relative text-6xl text-neon-cyan" />
              </div>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <motion.span
                className="gradient-text"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                Certificates & Achievements
              </motion.span>
            </h2>
            <motion.div
              className="w-32 h-1.5 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan mx-auto mb-8 rounded-full"
              initial={{ width: 0 }}
              animate={inView ? { width: 128 } : { width: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
            >
              Recognition and certifications earned through competitive programming,
              hackathons, and professional development.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{ y: -15, rotateY: 5 }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="glass-strong rounded-3xl overflow-hidden h-full flex flex-col border-2 border-white/10 hover:border-neon-cyan/50 transition-all duration-500 relative backdrop-blur-xl"
                  whileHover={{ scale: 1.03, rotateX: 2 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Animated Certificate Header with shine effect */}
                  <div className="relative h-3 overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${certificate.color}`}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      style={{
                        backgroundSize: '200% 200%',
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>

                  {/* Floating badge for winners */}
                  {(certificate.issuer.includes('Winner') || certificate.issuer.includes('Finalist')) && (
                    <motion.div
                      className="absolute top-4 right-4 z-20"
                      animate={{
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-neon-cyan rounded-full blur-md opacity-50 animate-pulse" />
                        <div className="relative bg-gradient-to-br from-yellow-400 to-orange-500 p-2 rounded-full shadow-lg">
                          <FiStar className="text-white" size={20} />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="p-8 flex-1 flex flex-col relative">
                    {/* Animated Icon with particles */}
                    <div className="relative mb-6 mx-auto">
                      <motion.div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${certificate.color} flex items-center justify-center shadow-2xl relative overflow-hidden`}
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                      >
                        {/* Shimmer effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-100%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                        <FiAward className="text-white relative z-10" size={36} />
                      </motion.div>
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${certificate.color} rounded-3xl blur-xl opacity-50`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.7, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </div>

                    {/* Content with staggered animations */}
                    <motion.h3
                      className="text-xl md:text-2xl font-bold mb-3 text-center text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-neon-cyan group-hover:to-neon-purple transition-all duration-500"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                    >
                      {certificate.title}
                    </motion.h3>
                    <motion.p
                      className="text-neon-cyan font-semibold text-center mb-3 text-lg"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.15 + 0.4 }}
                    >
                      {certificate.issuer}
                    </motion.p>
                    <motion.p
                      className="text-gray-400 text-sm md:text-base text-center mb-4 flex-1 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.15 + 0.5 }}
                    >
                      {certificate.description}
                    </motion.p>
                    <motion.div
                      className="flex items-center justify-center gap-2 mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.15 + 0.6 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                      <p className="text-gray-500 text-xs md:text-sm text-center font-medium">
                        {certificate.date}
                      </p>
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-pulse" />
                    </motion.div>

                    {/* Certificate image preview with enhanced styling */}
                    {certificate.images ? (
                      <CertificateImagesSlider
                        images={certificate.images as CertImage[]}
                        title={certificate.title}
                      />
                    ) : (
                      certificate.image && (
                        <motion.div
                          className="relative w-full h-48 md:h-56 rounded-2xl overflow-hidden border-2 border-white/20 mb-4 bg-black/40 shadow-2xl group-hover:border-neon-cyan/50 transition-all duration-500"
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                          transition={{ delay: index * 0.15 + 0.7 }}
                        >
                          <Image
                            src={certificate.image}
                            alt={`${certificate.title} certificate`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                          {/* Shimmer on hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                            style={{ width: '200%' }}
                          />
                        </motion.div>
                      )
                    )}

                    {/* View Certificate Link with enhanced styling */}
                    {certificate.link && (
                      <motion.a
                        href={certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 text-gray-300 hover:text-white hover:from-neon-cyan/40 hover:to-neon-purple/40 transition-all duration-300 group/link mt-auto"
                        whileHover={{ x: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: index * 0.15 + 0.8 }}
                      >
                        <span className="text-sm font-semibold">View Certificate</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        >
                          <FiExternalLink size={18} className="group-hover/link:translate-x-1 transition-transform" />
                        </motion.div>
                      </motion.a>
                    )}
                  </div>

                  {/* Enhanced Hover Glow Effect with animation */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${certificate.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-3xl`}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  />

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-cyan/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

