'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { fadeInUp, staggerContainer } from '@/lib/animations'
import toast from 'react-hot-toast'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('_replyto', formData.email)
      formDataToSend.append('message', formData.message)
      formDataToSend.append('_subject', 'New Contact from Swayam Patwa Portfolio!')
      formDataToSend.append('_gotcha', '') // Honeypot field

      const response = await fetch('https://formspree.io/f/myzwalzv', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          Accept: 'application/json',
        },
      })

      const data = await response.json()

      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
        setFormStatus('success')
      } else {
        if (data.errors) {
          toast.error(data.errors[0].message || 'Failed to send message')
        } else {
          toast.error('Failed to send message. Please try again.')
        }
        setFormStatus('error')
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.')
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const fieldName = e.target.name === '_replyto' ? 'email' : e.target.name
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+91 95553 63996',
      href: 'tel:+919555363996',
    },
    {
      icon: FiMail,
      label: 'Email',
      value: 'swayampatwa17@gmail.com',
      href: 'mailto:swayampatwa17@gmail.com',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Jabalpur, India',
      href: '#',
    },
  ]

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/swayamtosscs-svg', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/swayam-patwa-793490256', label: 'LinkedIn' },
  ]

  return (
    <section
      id="contact"
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
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? Let's connect and
              build something amazing together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-neon-cyan">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 text-gray-300 hover:text-neon-cyan transition-colors group"
                      whileHover={{ x: 5 }}
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/30 group-hover:border-neon-cyan/50 transition-colors">
                        <info.icon className="text-neon-cyan" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6 text-neon-purple">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
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
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-2xl">
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                        placeholder="Your Name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="_replyto"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    {/* Hidden fields for Formspree */}
                    <input type="hidden" name="_subject" value="New Contact from Swayam Patwa Portfolio!" />
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-lg font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

