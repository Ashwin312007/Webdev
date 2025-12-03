import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const technologies = [
  { name: 'Python', category: 'Programming', level: 95 },
  { name: 'ROS2', category: 'Robotics', level: 90 },
  { name: 'TensorFlow', category: 'AI/ML', level: 88 },
  { name: 'C++', category: 'Programming', level: 85 },
  { name: 'CUDA', category: 'GPU Computing', level: 82 },
  { name: 'OpenCV', category: 'Computer Vision', level: 90 },
  { name: 'SolidWorks', category: 'CAD', level: 88 },
  { name: 'Arduino', category: 'Embedded', level: 92 },
];

const techStack = [
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'OpenCV', 'YOLO', 'ROS2'],
    color: 'primary',
  },
  {
    category: 'Embedded Systems',
    items: ['Arduino', 'Raspberry Pi', 'ESP32', 'STM32', 'FPGA'],
    color: 'secondary',
  },
  {
    category: 'Mechanical Design',
    items: ['SolidWorks', 'AutoCAD', 'Fusion 360', '3D Printing', 'CNC'],
    color: 'accent',
  },
  {
    category: 'Communication',
    items: ['LoRa', 'Zigbee', 'WiFi', 'Bluetooth', 'RF Systems'],
    color: 'primary',
  },
];

export function TechSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-space relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-rajdhani font-semibold uppercase tracking-widest mb-6">
            Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            Our <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build innovative solutions 
            for complex engineering challenges.
          </p>
        </motion.div>

        {/* Skills with progress bars */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Progress bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-8">Core Competencies</h3>
            {technologies.map((tech, index) => (
              <div key={tech.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-rajdhani font-semibold">{tech.name}</span>
                  <span className="text-sm text-muted-foreground">{tech.category}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${tech.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tech categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {techStack.map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card-hover rounded-xl p-6"
              >
                <h4 className={`text-${stack.color} font-orbitron font-bold text-sm mb-4`}>
                  {stack.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs bg-muted rounded-md text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '50+', label: 'Technologies Used', icon: '⚡' },
            { value: '1000+', label: 'Lines of Code', icon: '💻' },
            { value: '100%', label: 'Team Dedication', icon: '🚀' },
            { value: '24/7', label: 'Innovation Mindset', icon: '💡' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center glass-card rounded-xl p-6 border border-border/50"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-orbitron font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-rajdhani">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
