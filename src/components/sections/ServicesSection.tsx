import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cog, Cpu, TestTube, Wrench, Radio, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MagneticButton } from '@/components/ui/MagneticButton';

const services = [
  {
    icon: Cog,
    title: 'Rover Design',
    description: 'Custom rover chassis and mechanical systems designed for extreme environments.',
    features: ['3D CAD Modeling', 'Structural Analysis', 'Material Selection'],
  },
  {
    icon: Cpu,
    title: 'AI Integration',
    description: 'Advanced AI and machine learning systems for autonomous navigation and decision-making.',
    features: ['Computer Vision', 'Path Planning', 'Obstacle Detection'],
  },
  {
    icon: Radio,
    title: 'Communication Systems',
    description: 'Robust telemetry and communication solutions for remote operation.',
    features: ['RF Systems', 'Data Transmission', 'Remote Control'],
  },
  {
    icon: Wrench,
    title: 'Mechanical Engineering',
    description: 'Precision-engineered components built to withstand harsh conditions.',
    features: ['Drivetrain Design', 'Suspension Systems', 'Actuator Integration'],
  },
  {
    icon: TestTube,
    title: 'Testing & Validation',
    description: 'Comprehensive testing protocols ensuring mission-ready performance.',
    features: ['Environmental Testing', 'Performance Analysis', 'Quality Assurance'],
  },
  {
    icon: Database,
    title: 'Data Systems',
    description: 'Efficient data collection, storage, and analysis pipelines.',
    features: ['Sensor Integration', 'Data Processing', 'Real-time Analytics'],
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-space relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-rajdhani font-semibold uppercase tracking-widest mb-6">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            What We <span className="text-gradient">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            From concept to deployment, we offer comprehensive rover development services 
            powered by cutting-edge technology and engineering excellence.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-8 h-full border border-border/50 transition-all duration-500 hover:border-primary/50 hover:shadow-glow-sm">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -inset-2 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-orbitron font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-rajdhani mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <Link to="/services" className="flex items-center gap-2 text-primary font-rajdhani font-semibold group/link cursor-pointer">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <Link to="/services">
            <MagneticButton variant="glow" size="xl" magneticStrength={0.35}>
              Explore All Services
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
