/**
 * Reusable animation variants for Framer Motion
 * Provides consistent, professional animations across components
 */

import { Variants } from 'framer-motion'

// Fade in animations
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Stagger container for children
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
}

export const hoverLift: Variants = {
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Rotate animations
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Slide animations
export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Text reveal animation
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Card hover effect
export const cardHover = {
  y: -15,
  rotateX: 5,
  transition: {
    duration: 0.4,
    ease: [0.6, -0.05, 0.01, 0.99],
  },
}

// Glow animation
export const glowAnimation = {
  boxShadow: [
    '0 0 20px rgba(0, 240, 255, 0.3)',
    '0 0 40px rgba(0, 240, 255, 0.5)',
    '0 0 20px rgba(0, 240, 255, 0.3)',
  ],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

