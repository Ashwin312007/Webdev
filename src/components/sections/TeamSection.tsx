import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Linkedin, Github, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Kautilya Sai Nath',
    role: 'Mechanical Lead',
    department: 'Mechanical',
    quote: 'Being a part of Team MOVIS allowed me to connect with like-minded, passionate makers and engineers.',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'Ojas Dhar',
    role: 'Electronics Lead',
    department: 'Electrical',
    quote: 'Engineering, creating, innovating and tinkering with things brings me unsurpassed joy.',
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Lathika G S',
    role: 'Programming Lead',
    department: 'Programming',
    quote: 'We thrive on innovation, pushing the boundaries of technology through hackathons.',
    gradient: 'from-purple-500/20 to-violet-500/20',
  },
  {
    name: 'Vivek',
    role: 'Software Engineer',
    department: 'Programming',
    quote: 'Eat. Sleep. Train. Deploy. Innovate. Repeat.',
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Vanshita Gupta S',
    role: 'ML Engineer',
    department: 'Programming',
    quote: 'We aim to bridge the gap between technology and real-world impact.',
    gradient: 'from-pink-500/20 to-rose-500/20',
  },
  {
    name: 'Dishita',
    role: 'Electrical Engineer',
    department: 'Electrical',
    quote: 'Space is not just a destination—it\'s a challenge that brings out the best in human ingenuity.',
    gradient: 'from-amber-500/20 to-yellow-500/20',
  },
];

const departments = ['All', 'Mechanical', 'Electrical', 'Programming'];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-space relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-rajdhani font-semibold uppercase tracking-widest mb-6">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            Meet The <span className="text-gradient">Crew</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            A diverse team of passionate engineers, developers, and innovators 
            working together to push the boundaries of rover technology.
          </p>
        </motion.div>

        {/* Department filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              className={`px-6 py-2 rounded-full font-rajdhani font-medium transition-all duration-300 ${
                dept === 'All'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
              }`}
            >
              {dept}
            </button>
          ))}
        </motion.div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-glow-sm">
                {/* Avatar area */}
                <div className={`aspect-square bg-gradient-to-br ${member.gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-background/20 backdrop-blur-sm border-2 border-foreground/10 flex items-center justify-center">
                      <span className="text-4xl font-orbitron font-bold text-foreground/80">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  
                  {/* Department badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-rajdhani font-semibold uppercase tracking-wider">
                      {member.department}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-rajdhani font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground font-rajdhani italic">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-primary/30">
            <h3 className="text-2xl md:text-3xl font-orbitron font-bold mb-4">
              Want to Join the <span className="text-primary">Mission</span>?
            </h3>
            <p className="text-muted-foreground font-rajdhani mb-6">
              We're always looking for passionate engineers and innovators to join our team.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-rajdhani font-semibold uppercase tracking-wider hover:shadow-glow-md transition-shadow"
            >
              Apply Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
