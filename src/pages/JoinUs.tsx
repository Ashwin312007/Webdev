import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Rocket, Users, Zap, Lock, CheckCircle } from 'lucide-react';

const departments = ['Programming', 'Electrical', 'Mechanical'] as const;
const years = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

export default function JoinUs() {
  const { toast } = useToast();
  const [isActive, setIsActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    yearOfStudy: '',
    course: '',
    registerNumber: '',
    department: '',
    firstPreference: '',
    secondPreference: ''
  });

  useEffect(() => {
    checkApplicationStatus();
  }, []);

  const checkApplicationStatus = async () => {
    try {
      const { data, error } = await supabase
        .from('applications')
        .select('is_active')
        .limit(1);
      
      // If there are any applications, check the global status
      // For now, we'll use a simple check - in production you'd have a settings table
      setIsActive(true); // Set to true to enable applications
    } catch (error) {
      console.error('Error checking status:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.firstPreference === formData.secondPreference) {
      toast({
        title: "Invalid Selection",
        description: "First and second preferences must be different.",
        variant: "destructive"
      });
      return;
    }

    setSubmitting(true);

    try {
      const { error } = await supabase
        .from('applications')
        .insert({
          name: formData.name,
          year_of_study: formData.yearOfStudy,
          course: formData.course,
          register_number: formData.registerNumber,
          department: formData.department,
          first_preference: formData.firstPreference,
          second_preference: formData.secondPreference
        });

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already Applied",
            description: "An application with this register number already exists.",
            variant: "destructive"
          });
        } else {
          throw error;
        }
      } else {
        setSubmitted(true);
        toast({
          title: "Application Submitted!",
          description: "We'll review your application and get back to you soon."
        });
      }
    } catch (error) {
      console.error('Error submitting:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      
      <section className="relative pt-32 pb-20 px-4">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Join <span className="text-gradient">MOVIS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of the next generation of rover engineers. Apply to join our elite team of innovators.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Rocket, title: 'Real Projects', desc: 'Work on actual rover missions' },
              { icon: Users, title: 'Expert Mentorship', desc: 'Learn from industry veterans' },
              { icon: Zap, title: 'Cutting-Edge Tech', desc: 'Access advanced equipment' }
            ].map((benefit, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <benefit.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 md:p-12"
          >
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
              </div>
            ) : !isActive ? (
              <div className="text-center py-12">
                <Lock className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h2 className="text-2xl font-display font-bold mb-2">Applications Closed</h2>
                <p className="text-muted-foreground">
                  Applications are currently not being accepted. Check back later!
                </p>
              </div>
            ) : submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-2xl font-display font-bold mb-2">Application Submitted!</h2>
                <p className="text-muted-foreground">
                  Thank you for applying. We'll review your application and contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-display font-bold mb-6 text-center">Application Form</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="registerNumber">Register Number *</Label>
                    <Input
                      id="registerNumber"
                      value={formData.registerNumber}
                      onChange={(e) => handleChange('registerNumber', e.target.value)}
                      placeholder="e.g., RA2211003010XXX"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="yearOfStudy">Year of Study *</Label>
                    <Select
                      value={formData.yearOfStudy}
                      onValueChange={(value) => handleChange('yearOfStudy', value)}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        {years.map((year) => (
                          <SelectItem key={year} value={year}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="course">Course *</Label>
                    <Input
                      id="course"
                      value={formData.course}
                      onChange={(e) => handleChange('course', e.target.value)}
                      placeholder="e.g., B.Tech CSE"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => handleChange('department', e.target.value)}
                      placeholder="e.g., Computer Science"
                      required
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="firstPreference">First Preference *</Label>
                    <Select
                      value={formData.firstPreference}
                      onValueChange={(value) => handleChange('firstPreference', value)}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 md:col-span-2 md:w-1/2">
                    <Label htmlFor="secondPreference">Second Preference *</Label>
                    <Select
                      value={formData.secondPreference}
                      onValueChange={(value) => handleChange('secondPreference', value)}
                    >
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select preference" />
                      </SelectTrigger>
                      <SelectContent>
                        {departments.filter(d => d !== formData.firstPreference).map((dept) => (
                          <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex justify-center pt-4">
                  <MagneticButton
                    type="submit"
                    variant="glow"
                    size="lg"
                    disabled={submitting}
                    magneticStrength={0.3}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </MagneticButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
