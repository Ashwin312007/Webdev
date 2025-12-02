import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Target, 
  Users, 
  Lightbulb, 
  Trophy, 
  Rocket, 
  Leaf,
  BookOpen,
  Zap
} from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const missions = [
    {
      icon: Leaf,
      title: "Sustainable Technology",
      description: "Developing eco-friendly technologies aligned with SDGs"
    },
    {
      icon: BookOpen,
      title: "Skill Development",
      description: "Continuous skill development and knowledge sharing"
    },
    {
      icon: Lightbulb,
      title: "Creative Problem-Solving",
      description: "Fostering creative problem-solving approaches"
    },
    {
      icon: Trophy,
      title: "Competitive Excellence",
      description: "Competitive spirit with focus on excellence"
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="section-title"
          >
            About MOVIS
          </motion.h2>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column - Text Content */}
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="glass-effect rounded-2xl p-8">
                <p className="text-lg leading-relaxed text-gray-300 mb-6">
                  MOVIS is a dynamic community of innovators , developers, and researchers tackling real-world challenges through sustainable technology. We bridge the gap between academia and industry by developing prototypes, filing patents, and competing in national/international events.
                </p>
                
                <div className="flex items-center space-x-4 text-space-blue">
                  <Users size={24} />
                  <span className="text-lg font-semibold">Team-Driven Innovation</span>
                </div>
                
                <div className="flex items-center space-x-4 text-space-blue mt-4">
                  <Target size={24} />
                  <span className="text-lg font-semibold">Mission-Focused Approach</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Animated Visual */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-64 h-64 border-4 border-space-blue/30 rounded-full relative"
                >
                  {/* Orbiting Elements */}
                  <motion.div
                    animate={{
                      rotate: -360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-space-blue rounded-full flex items-center justify-center"
                  >
                    <Rocket size={16} className="text-white" />
                  </motion.div>
                  
                  <motion.div
                    animate={{
                      rotate: -360
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 5
                    }}
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-space-red rounded-full flex items-center justify-center"
                  >
                    <Zap size={16} className="text-white" />
                  </motion.div>
                </motion.div>
                
                {/* Central Logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-space-blue to-space-purple rounded-full flex items-center justify-center shadow-2xl">
                    <span className="text-white text-2xl font-bold glow-text">MOVIS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mission Grid */}
          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <h3 className="text-3xl font-bold text-center mb-8 text-white">
              Our Mission Focus
            </h3>
            
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5
                  }}
                  className="glass-effect rounded-xl p-6 text-center card-hover hoverable"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-space-blue/20 rounded-full flex items-center justify-center">
                      <mission.icon size={32} className="text-space-blue" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-white">
                    {mission.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {mission.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-space-blue mb-2">50+</div>
                <div className="text-gray-300">Active Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-space-blue mb-2">15+</div>
                <div className="text-gray-300">Competitions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-space-blue mb-2">5+</div>
                <div className="text-gray-300">Awards Won</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-space-blue mb-2">3+</div>
                <div className="text-gray-300">Years Active</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
