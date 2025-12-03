import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Location',
    details: 'Innovation Hub, Tech Campus',
    subtext: 'Open for visits by appointment',
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'contact@teammovis.com',
    subtext: 'We respond within 24 hours',
  },
  {
    icon: Phone,
    title: 'Phone',
    details: '+1 (555) 123-4567',
    subtext: 'Mon-Fri, 9am-6pm',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: '9:00 AM - 6:00 PM',
    subtext: 'Monday to Friday',
  },
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div ref={ref} className="container-space relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-rajdhani font-semibold uppercase tracking-widest mb-6">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-rajdhani max-w-3xl mx-auto">
            Have a project in mind? Want to collaborate? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-orbitron font-bold mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-rajdhani font-semibold mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="bg-muted/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-rajdhani font-semibold mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="bg-muted/50 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-rajdhani font-semibold mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-muted/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-rajdhani font-semibold mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Inquiry" 
                    className="bg-muted/50 border-border focus:border-primary"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-rajdhani font-semibold mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={5}
                    className="bg-muted/50 border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-orbitron font-bold mb-8">Contact Information</h3>
            
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-4 p-4 glass-card-hover rounded-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold">{info.title}</h4>
                  <p className="text-foreground font-rajdhani">{info.details}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-orbitron font-bold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {['Github', 'LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="px-4 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors font-rajdhani text-sm"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="glass-card rounded-2xl p-6 border border-accent/30 mt-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-orbitron font-bold">Ready to collaborate?</h4>
                  <p className="text-sm text-muted-foreground">Let's build something amazing together.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
