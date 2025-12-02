import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title">Contact Us</h2>
        <div className="glass-effect rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 mb-8">
            Get in touch with Team MOVIS for collaborations, events, and opportunities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -4 }} className="rounded-xl p-4 border border-white/20">
              <div className="flex justify-center mb-2"><Mail className="text-space-blue" /></div>
              <div className="text-white font-semibold">movis@vit.ac.in</div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl p-4 border border-white/20">
              <div className="flex justify-center mb-2"><Phone className="text-space-blue" /></div>
              <div className="text-white font-semibold">+91 XXXXXXXXXX</div>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="rounded-xl p-4 border border-white/20">
              <div className="flex justify-center mb-2"><MapPin className="text-space-blue" /></div>
              <div className="text-white font-semibold">VIT Chennai</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
