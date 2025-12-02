import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { title: '🤖 Robotics', desc: 'Advanced rover design and autonomous systems' },
  { title: '🛰️ Space Technology', desc: 'Satellite systems and space exploration tech' },
  { title: '⚙️ Mechanical Design', desc: 'CAD modeling and prototype development' },
  { title: '💻Programming', desc: 'Embedded systems, Computer Vison, IoT, Filters and AI integration' },
  { title: '🔬 Research', desc: 'Innovation and patent development' },
  { title: '⚡Electronics', desc: 'Embedded System, Circuit design, Motor drivers, PCB development, and Sensor integration' },
  { title: '🌱 Sustainability', desc: 'Eco-friendly technology solutions' },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skills.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              className="text-center p-6 rounded-xl border border-space-blue/30 bg-gradient-to-br from-space-purple/40 to-space-dark/40 glass-effect card-hover hoverable"
            >
              <h3 className="text-white font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
