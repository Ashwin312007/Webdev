import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from '@/components/ui/MagneticButton';

const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Team', href: '/#team' },
  { name: 'Contact', href: '/#contact' }
];
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.6,
    ease: 'easeOut'
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container-space">
        <div className="h-20 flex items-start justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative">
              <Rocket className="w-8 h-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-orbitron text-2xl font-bold text-glow">
              MOVIS
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const isExternal = link.href.startsWith('/#');
              return isExternal ? (
                <a key={link.name} href={link.href} className="px-4 py-2 text-sm font-rajdhani font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </a>
              ) : (
                <Link key={link.name} to={link.href} className="px-4 py-2 text-sm font-rajdhani font-medium text-muted-foreground hover:text-primary transition-colors duration-300 relative group">
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/join-us">
              <MagneticButton variant="hero" size="lg" magneticStrength={0.3}>
                Join Us
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
            <div className="container-space py-6 space-y-4">
              {navLinks.map((link, index) => {
                const isExternal = link.href.startsWith('/#');
                const Element = isExternal ? 'a' : Link;
                const props = isExternal ? { href: link.href } : { to: link.href };
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Element {...props as any} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-lg font-rajdhani font-medium text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Element>
                  </motion.div>
                );
              })}
              <Link to="/join-us" onClick={() => setIsMobileMenuOpen(false)}>
                <MagneticButton variant="hero" size="lg" className="w-full mt-4" magneticStrength={0.3}>
                  Join Us
                </MagneticButton>
              </Link>
            </div>
          </motion.div>}
      </AnimatePresence>
    </motion.nav>;
}