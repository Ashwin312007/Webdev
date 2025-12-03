import { motion } from 'framer-motion';
import { Rocket, Github, Linkedin, Twitter, Instagram, Mail, ArrowUp } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Rover Design', href: '#services' },
    { name: 'AI Integration', href: '#services' },
    { name: 'Testing', href: '#services' },
    { name: 'Consulting', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#projects' },
    { name: 'FAQ', href: '#' },
  ],
};

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-border/50 bg-gradient-to-b from-transparent to-muted/20">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="container-space relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-primary" />
              <span className="font-orbitron text-2xl font-bold text-glow">MOVIS</span>
            </a>
            <p className="text-muted-foreground font-rajdhani mb-6 max-w-sm">
              Pioneering rover development and AI-driven aerospace solutions. 
              We transform ideas into reality through innovation and engineering excellence.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <p className="font-rajdhani font-semibold">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-muted/50 border border-border rounded-lg text-sm focus:border-primary focus:outline-none transition-colors"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-orbitron font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-rajdhani"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-rajdhani"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-rajdhani"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-rajdhani">
            © {new Date().getFullYear()} Team MOVIS. All rights reserved.
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-rajdhani"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
