import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Lightbulb, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Mission Driven',
    description: 'We strive to design, build, and launch cutting-edge aerospace solutions that push the boundaries of exploration.',
  },
  {
    icon: Lightbulb,
    title: 'AI-Powered Innovation',
    description: 'Our team specializes in developing AI-driven solutions, integrating cutting-edge tools to create impactful applications.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'We believe in continuous learning, collaboration, and transforming ideas into reality through teamwork.',
  },
  {
    icon: Award,
    title: 'Excellence in Engineering',
    description: 'Through competitions and real-world challenges, we hone our technical abilities and develop strong leadership skills.',
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-space relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-rajdhani font-semibold uppercase tracking-widest mb-6">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            About <span className="text-gradient">MOVIS</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            Team Movis is a passionate group of innovators, engineers, and tech enthusiasts 
            thriving on innovation and pushing the boundaries of technology through hackathons 
            and real-world problem-solving.
          </p>
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left column - Image with decorations */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/50">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-space-700 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center animate-pulse-glow">
                    <Target className="w-16 h-16 text-primary" />
                  </div>
                  <h3 className="text-2xl font-orbitron font-bold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">Exploring the unknown through innovation</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-secondary/30 rounded-full" />
          </motion.div>

          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-orbitron font-bold">
              We're a group of <span className="text-primary">innovators</span>, engineers, 
              and <span className="text-secondary">space enthusiasts</span>
            </h3>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
              We strive to design, build, and launch cutting-edge aerospace solutions, 
              inspiring others to dream big and explore the unknown. Our team specializes 
              in developing AI-driven solutions, integrating cutting-edge tools to create 
              impactful applications.
            </p>
            <p className="text-lg text-muted-foreground font-rajdhani leading-relaxed">
              We believe in continuous learning, collaboration, and transforming ideas into reality. 
              Space is not just a destination—it's a challenge that brings out the best in human ingenuity.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {[
                { value: '5+', label: 'Years Experience' },
                { value: '20+', label: 'Team Members' },
                { value: '15+', label: 'Projects' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-orbitron font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="glass-card-hover rounded-xl p-6"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-lg font-orbitron font-bold mb-2">{feature.title}</h4>
              <p className="text-muted-foreground font-rajdhani text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
