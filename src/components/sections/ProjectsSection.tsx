import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'Mars Exploration Rover',
    category: 'Autonomous Systems',
    description: 'Advanced autonomous rover designed for Mars terrain navigation with AI-powered obstacle avoidance and sample collection capabilities.',
    technologies: ['ROS2', 'Python', 'TensorFlow', 'LiDAR'],
    stats: { range: '50km', battery: '72hrs', speed: '2m/s' },
    gradient: 'from-orange-500/20 to-red-500/20',
    accent: 'text-orange-400',
  },
  {
    id: 2,
    title: 'Lunar Mining Bot',
    category: 'Resource Extraction',
    description: 'Specialized rover for lunar regolith analysis and mineral extraction, featuring advanced drilling and sample processing systems.',
    technologies: ['C++', 'CUDA', 'OpenCV', 'Sensor Fusion'],
    stats: { depth: '2m', capacity: '50kg', precision: '0.1mm' },
    gradient: 'from-blue-500/20 to-cyan-500/20',
    accent: 'text-cyan-400',
  },
  {
    id: 3,
    title: 'Search & Rescue Drone',
    category: 'Emergency Response',
    description: 'Multi-terrain rescue rover with thermal imaging, GPS tracking, and emergency supply delivery capabilities.',
    technologies: ['Rust', 'Embedded Systems', 'ML', 'LoRa'],
    stats: { search: '10km²', response: '15min', payload: '20kg' },
    gradient: 'from-green-500/20 to-emerald-500/20',
    accent: 'text-emerald-400',
  },
  {
    id: 4,
    title: 'Agricultural Monitor',
    category: 'Smart Farming',
    description: 'Precision agriculture rover for crop monitoring, soil analysis, and automated farming operations.',
    technologies: ['IoT', 'AWS', 'Computer Vision', 'Zigbee'],
    stats: { coverage: '100ha', accuracy: '98%', efficiency: '+40%' },
    gradient: 'from-purple-500/20 to-violet-500/20',
    accent: 'text-violet-400',
  },
];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/20 to-transparent" />

      <div ref={ref} className="container-space relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-rajdhani font-semibold uppercase tracking-widest mb-6">
            Our Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            Featured <span className="text-gradient">Missions</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            Explore our portfolio of successful rover projects, each pushing the boundaries 
            of what's possible in robotics and autonomous systems.
          </p>
        </motion.div>

        {/* Project showcase */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Project visual */}
              <div className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.gradient} border border-border/50 overflow-hidden`}>
                <div className="absolute inset-0 grid-overlay opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-current opacity-20 flex items-center justify-center">
                      <span className="text-6xl font-orbitron font-bold">{project.id}</span>
                    </div>
                    <span className={`${project.accent} font-orbitron font-bold text-2xl`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Decorative scan line */}
                <div className="scan-line" />
              </div>

              {/* Project details */}
              <div className="space-y-6">
                <div>
                  <span className={`${project.accent} text-sm font-rajdhani font-semibold uppercase tracking-widest`}>
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-orbitron font-bold mt-2">
                    {project.title}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground font-rajdhani">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-muted text-sm font-rajdhani text-muted-foreground border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-2xl font-orbitron font-bold ${project.accent}`}>
                        {value}
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <Button variant="outline" size="lg">
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button variant="default" size="lg">
                    <ExternalLink className="w-4 h-4" />
                    Case Study
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevProject}
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-primary w-8' 
                      : 'bg-muted hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
