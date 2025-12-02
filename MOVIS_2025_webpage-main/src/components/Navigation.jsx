import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Competitions', href: '/#competitions', id: 'competitions' },
    { name: 'Skills', href: '/#skills', id: 'skills' },
    { name: 'Achievements', href: '/#achievements', id: 'achievements' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const id = href.substring(2)
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'nav-glass' : 'bg-black/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/"
              className="text-2xl font-bold text-space-blue glow-text hoverable"
              onClick={(e) => handleNavClick(e, '/')}
            >
              MOVIS
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  to={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white hover:text-space-blue transition-colors duration-300 hoverable relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-space-blue transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-space-blue transition-colors duration-300 hoverable"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-effect border-t border-white/20"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ x: 10 }}
              whileTap={{ x: 0 }}
            >
              <Link
                to={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block text-white hover:text-space-blue transition-colors duration-300 hoverable"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}

export default Navigation
