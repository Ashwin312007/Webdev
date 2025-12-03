import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Rocket, Cpu, Satellite } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroRover from '@/assets/hero-rover.jpg';

function FloatingParticle({ delay, duration, x, y }: { delay: number; duration: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full bg-primary/60"
      style={{ left: x, top: y }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.3, 1, 0.3],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

function OrbitingElement({ icon: Icon, size, orbitSize, duration, delay }: { 
  icon: typeof Rocket; 
  size: number; 
  orbitSize: number; 
  duration: number; 
  delay: number 
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: orbitSize, height: orbitSize }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear', delay }}
    >
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 p-3 rounded-full bg-muted/30 backdrop-blur-sm border border-border/50"
        style={{ marginTop: -size/2 }}
      >
        <Icon className="text-primary/80" style={{ width: size, height: size }} />
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 2,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 star-field" />
      <div className="absolute inset-0 grid-overlay opacity-30" />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      {/* Floating particles */}
      {particles.map((p) => (
        <FloatingParticle key={p.id} {...p} />
      ))}

      {/* Orbiting elements */}
      <div className="absolute inset-0 pointer-events-none">
        <OrbitingElement icon={Rocket} size={20} orbitSize={400} duration={25} delay={0} />
        <OrbitingElement icon={Cpu} size={18} orbitSize={550} duration={35} delay={5} />
        <OrbitingElement icon={Satellite} size={22} orbitSize={700} duration={45} delay={10} />
      </div>

      {/* Main content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 container-space text-center pt-24 md:pt-32"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-rajdhani font-semibold uppercase tracking-widest">
            Pioneering Rover Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          }}
        >
          <span className="block text-foreground">Explore The</span>
          <span className="block text-gradient text-glow">Unknown</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground font-rajdhani max-w-3xl mx-auto mb-10"
        >
          Team MOVIS is a passionate group of innovators, engineers, and tech enthusiasts 
          pushing the boundaries of rover technology and AI-driven solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl">
            <Rocket className="w-5 h-5" />
            View Projects
          </Button>
          <Button variant="hero-outline" size="xl">
            Learn More
          </Button>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 relative"
        >
          <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-card">
            <img 
              src={heroRover} 
              alt="Advanced Mars Rover" 
              className="w-full max-w-4xl mx-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          
          {/* Floating stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="absolute -left-4 md:left-10 top-1/4 glass-card rounded-xl p-4"
          >
            <div className="text-3xl font-orbitron font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            className="absolute -right-4 md:right-10 bottom-1/4 glass-card rounded-xl p-4"
          >
            <div className="text-3xl font-orbitron font-bold text-accent">20+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-sm font-rajdhani uppercase tracking-widest">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
