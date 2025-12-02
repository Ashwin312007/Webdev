import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Rocket, Zap } from 'lucide-react'

const Hero = () => {
  const [roverPos, setRoverPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth
      const mouseY = e.clientY / window.innerHeight
      
      setRoverPos({
        x: mouseX * 50,
        y: mouseY * 50
      })
    }

    document.addEventListener('mousemove', handleMouseMove)
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-space-blue/10 via-transparent to-transparent z-0" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-6 hero-gradient animate-glow"
          >
            MOVIS
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering Space & Rover Technology at VIT Chennai
          </motion.p>

          {/* Animated Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-8 mb-8"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
              className="text-space-blue"
            >
              <Rocket size={32} />
            </motion.div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-space-gold"
            >
              <Zap size={32} />
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <button
              onClick={scrollToAbout}
              className="btn-glow text-lg px-8 py-4 hoverable"
            >
              Explore Our Universe
            </button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-space-blue cursor-pointer hoverable"
              onClick={scrollToAbout}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Rover */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute right-[10%] top-1/2 transform -translate-y-1/2 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translate(${roverPos.x}px, ${roverPos.y}px)`,
          }}
          className="w-72 h-48 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl relative shadow-2xl"
        >
          {/* Rover details */}
          <div className="absolute inset-4 bg-gradient-to-r from-space-blue/20 to-space-purple/20 rounded-xl border border-space-blue/30" />
          <div className="absolute top-6 left-6 w-8 h-8 bg-space-blue rounded-full animate-pulse" />
          <div className="absolute top-6 right-6 w-6 h-6 bg-space-red rounded-full animate-pulse animation-delay-300" />
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-space-blue text-sm font-bold">
            ROVER-X1
          </div>
          
          {/* Glow effect */}
          <div className="absolute -inset-2 bg-space-blue/10 rounded-3xl blur-xl" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
