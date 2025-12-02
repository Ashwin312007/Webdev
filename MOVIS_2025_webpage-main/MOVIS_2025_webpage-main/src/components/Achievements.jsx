import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Award, Star } from 'lucide-react'

const items = [
  { icon: Trophy, title: 'National Podium Finishes', desc: 'Recognized in multiple national competitions with top rankings.' },
  { icon: Award, title: 'Innovation Awards', desc: 'Honored for technical novelty and robust rover design.' },
  { icon: Star, title: 'Global Participation', desc: 'Active participation in international rover/space challenges.' },
]

const timeline = [
  {
    year: '2025',
    title: 'GenAI Hackathon Caterpillar 🥈',
    highlight: '2nd Place Overall',
    detail:
      "Excellence in AI and machine learning applications, showcasing our team's ability to innovate in cutting-edge technologies.",
  },
  {
    year: '2024',
    title: 'Technoxian 🏆',
    highlight: 'Top 15 Robowars',
    detail:
      'Outstanding performance in combat robotics, demonstrating our mechanical design and strategic prowess.',
  },
  {
    year: '2023',
    title: 'NASA Human Exploration Rover Challenge 🇮🇳',
    highlight: 'Top Indian Team',
    detail:
      'Leading Indian performance in space exploration technology, representing our nation on the global stage.',
  },
  {
    year: '2023',
    title: 'HX-Synthetix Makeathon 🥈🥈',
    highlight: '2nd Place - Mechanical Design & Electronics Design',
    detail:
      'Double victory showcasing excellence in both mechanical engineering solutions and electronic system development.',
  },
  {
    year: '2022',
    title: 'Together 2022 🌟',
    highlight: 'Top 100',
    detail:
      "Recognition among India's top innovative teams, highlighting our commitment to collaborative innovation.",
  },
  {
    year: '2022',
    title: 'DISQcovery Bootcamp 🏅',
    highlight: '19th Position Across India',
    detail:
      'National recognition in discovery and innovation, showcasing our research and development capabilities.',
  },
  {
    year: '2022',
    title: 'Electrifying Transportation 🥈',
    highlight: '2nd Place Overall',
    detail:
      'Leading innovation in sustainable transportation solutions, aligning with our commitment to eco-friendly technology.',
  },
  {
    year: '2022',
    title: 'Kartavyam 2.0 🎯',
    highlight: 'Semifinalist',
    detail:
      'Advanced to semifinals in national competition, demonstrating consistent performance and dedication to excellence.',
  },
]

const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Our Journey of Excellence</h2>
        <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
          A testament to our dedication, innovation, and competitive excellence across national and international platforms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((it) => (
            <motion.div
              key={it.title}
              whileHover={{ y: -8 }}
              className="rounded-xl p-6 text-center border border-space-blue/30 glass-effect bg-gradient-to-br from-space-purple/40 to-space-dark/40 card-hover hoverable"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-space-blue/20 flex items-center justify-center">
                  <it.icon className="text-space-blue" />
                </div>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-gray-300 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="text-center text-white text-2xl font-semibold mb-8">Timeline</h3>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/20" />
            <div className="space-y-10">
              {timeline.map((ev, idx) => (
                <motion.div
                  key={ev.year + ev.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`grid grid-cols-1 md:grid-cols-2 items-center gap-6 ${idx % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}
                >
                  {/* Left/Right content */}
                  <div className="md:text-right">
                    <div className="inline-block rounded-xl border border-white/15 bg-gradient-to-br from-space-purple/40 to-space-dark/40 px-5 py-4 glass-effect">
                      <div className="text-space-blue font-semibold">{ev.year}</div>
                      <div className="text-white text-lg font-medium">{ev.title}</div>
                      <div className="text-sm mt-1 max-w-prose">
                        <span className="text-white font-semibold">{ev.highlight}</span>
                        <br />
                        <span className="text-gray-300">{ev.detail}</span>
                      </div>
                    </div>
                  </div>

                  {/* Marker */}
                  <div className="relative h-full">
                    <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-space-blue shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
