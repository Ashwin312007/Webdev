import React from 'react'
import { motion } from 'framer-motion'

const competitions = [
  { title: 'NASA HERC', desc: 'Human Exploration Rover Challenge - Designing and building rovers for space exploration missions' },
  { title: 'IROC', desc: 'International Rover Challenge - Competing with autonomous rovers in challenging terrains' },
  { title: 'CANSAT', desc: 'Designing and building satellite prototypes that fit in a soda can for atmospheric research' },
  { title: 'ERC', desc: 'European Rover Challenge - International competition for Mars rover prototypes' },
  { title: 'IITM Shastra', desc: 'Caterpillar Rover Challenge - Currently participating in this prestigious national competition' },
  { title: 'Techfest IIT Bombay', desc: 'Techfest -We actively participate in events such as Meshmerize, Cosmoclench, Robowars, and more.' },
]

const Competitions = () => {
  return (
    <section id="competitions" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Competitions</h2>
        <p className="text-center text-gray-300 text-lg mb-8">
          We participate in prestigious international and national competitions, pushing the boundaries of rover and space technology.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {competitions.map((c) => (
            <motion.div
              key={c.title}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-xl p-6 text-center border border-space-blue/30 bg-gradient-to-br from-space-purple/40 to-space-dark/40 glass-effect card-hover hoverable"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.08), transparent)' }} />
              <h3 className="text-xl font-semibold text-space-blue mb-2">{c.title}</h3>
              <p className="text-gray-300 text-sm">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Competitions
