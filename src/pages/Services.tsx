import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Link } from 'react-router-dom';
import { 
  Cpu, Wrench, Cog, Radio, FlaskConical, GraduationCap,
  ArrowRight, CheckCircle
} from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Rover Design & Development',
    description: 'Complete end-to-end rover system design from concept to deployment. Our engineering team specializes in creating autonomous vehicles for extreme environments.',
    features: [
      'Custom chassis and suspension design',
      'Modular component architecture',
      'Environmental adaptation systems',
      'Power management optimization',
      'Thermal control systems'
    ],
    gradient: 'from-primary/20 to-cyan-500/20'
  },
  {
    icon: Wrench,
    title: 'Mechanical Engineering',
    description: 'Advanced mechanical systems engineering for robust performance in challenging terrains and conditions.',
    features: [
      'Structural analysis and optimization',
      'Mobility system design',
      'Deployment mechanism engineering',
      'Material selection and testing',
      'Manufacturing support'
    ],
    gradient: 'from-accent/20 to-purple-500/20'
  },
  {
    icon: Cog,
    title: 'Software & Autonomy',
    description: 'Cutting-edge software solutions for autonomous navigation, decision-making, and remote operation.',
    features: [
      'Autonomous navigation algorithms',
      'Computer vision systems',
      'Real-time operating systems',
      'Path planning optimization',
      'Machine learning integration'
    ],
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Radio,
    title: 'Communication Systems',
    description: 'Reliable communication architectures for maintaining connectivity in the most remote locations.',
    features: [
      'RF system design',
      'Antenna optimization',
      'Data compression protocols',
      'Redundancy planning',
      'Ground station integration'
    ],
    gradient: 'from-orange-500/20 to-amber-500/20'
  },
  {
    icon: FlaskConical,
    title: 'Testing & Validation',
    description: 'Comprehensive testing protocols to ensure mission success in the harshest conditions.',
    features: [
      'Environmental testing',
      'Endurance simulations',
      'Fault injection testing',
      'Performance benchmarking',
      'Field trials coordination'
    ],
    gradient: 'from-red-500/20 to-rose-500/20'
  },
  {
    icon: GraduationCap,
    title: 'Training & Consultation',
    description: 'Expert guidance and knowledge transfer for teams building their own rover capabilities.',
    features: [
      'Technical workshops',
      'Design reviews',
      'Best practices training',
      'Competition preparation',
      'Ongoing mentorship'
    ],
    gradient: 'from-blue-500/20 to-indigo-500/20'
  }
];

export default function Services() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase">What We Offer</span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mt-2 mb-4">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive rover development services from concept to deployment. We bring together expertise in mechanical, electrical, and software engineering.
            </p>
          </motion.div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-card p-8 hover:border-primary/50 transition-all duration-300 bg-gradient-to-br ${service.gradient}`}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-primary/20">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h2 className="text-2xl font-display font-bold">{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    <MagneticButton variant="outline" size="sm" magneticStrength={0.25}>
                      <Link to="/#contact" className="flex items-center gap-2">
                        Get Started <ArrowRight className="w-4 h-4" />
                      </Link>
                    </MagneticButton>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3 uppercase tracking-wider">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <h3 className="text-2xl font-display font-bold mb-4">Ready to Start Your Mission?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help bring your rover project to life.
            </p>
            <MagneticButton variant="glow" size="lg" magneticStrength={0.35}>
              <Link to="/#contact">Contact Us</Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
