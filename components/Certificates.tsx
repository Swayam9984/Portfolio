'use client'

import Image, { type StaticImageData } from 'next/image'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { FiAward, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
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

  // Auto-slide through images every 4 seconds
  useEffect(() => {
    if (!images.length) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }, 4000)

    return () => clearInterval(interval)
  }, [images.length])

  if (!images.length) return null

  const currentImage = images[index]

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const goNext = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="mb-4">
      <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 bg-black/40">
        <Image
          src={currentImage}
          alt={`${title} photo ${index + 1}`}
          fill
          className="object-cover"
        />

        {/* Controls */}
        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
        >
          <FiChevronLeft size={16} />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-black/50 text-white hover:bg-black/70 transition"
        >
          <FiChevronRight size={16} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 w-3 rounded-full ${
                i === index ? 'bg-neon-cyan' : 'bg-white/30'
              }`}
            />
          ))}
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

                    {/* Certificate image preview (optional) */}
                    {certificate.images ? (
                      <CertificateImagesSlider
                        images={certificate.images as CertImage[]}
                        title={certificate.title}
                      />
                    ) : (
                      certificate.image && (
                        <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden border border-white/10 mb-4 bg-black/40">
                          <Image
                            src={certificate.image}
                            alt={`${certificate.title} certificate`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )
                    )}

                    {/* View Certificate Link (shown only if a link is provided) */}
                    {certificate.link && (
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
                    )}
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

