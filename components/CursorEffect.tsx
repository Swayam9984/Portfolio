'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface CursorEffectProps {
  mousePosition: { x: number; y: number }
}

export default function CursorEffect({ mousePosition }: CursorEffectProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateCursor = () => {
      setCursorPosition({
        x: mousePosition.x,
        y: mousePosition.y,
      })
    }
    updateCursor()
  }, [mousePosition])

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)
    
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Outer cursor ring with 3D effect */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
        animate={{
          x: -20,
          y: -20,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <motion.div
          className="w-10 h-10 rounded-full border-2 border-neon-cyan opacity-50"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Middle ring */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
        animate={{
          x: -12,
          y: -12,
          scale: isHovering ? 1.2 : 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <div className="w-6 h-6 rounded-full border border-neon-purple opacity-60" />
      </motion.div>

      {/* Inner cursor dot with glow */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
        }}
        animate={{
          x: -4,
          y: -4,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-neon-cyan"
          animate={{
            boxShadow: [
              '0 0 0 0 rgba(0, 240, 255, 0.7)',
              '0 0 0 10px rgba(0, 240, 255, 0)',
              '0 0 0 0 rgba(0, 240, 255, 0)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        />
      </motion.div>

      {/* Trailing particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed pointer-events-none z-40"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
          }}
          animate={{
            x: -4,
            y: -4,
            scale: [0, 1, 0],
            opacity: [0.8, 0, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: 'easeOut',
          }}
        >
          <div className="w-1 h-1 rounded-full bg-neon-cyan" />
        </motion.div>
      ))}
    </>
  )
}
