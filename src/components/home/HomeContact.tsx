'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, Phone, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    value: "nateodev@gmail.com",
    href: "mailto:nateodev@gmail.com"
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: "Phone",
    value: "(219) 307-6839",
    href: "tel:+12193076839"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    label: "Location",
    value: "Valparaiso, IN",
    href: null
  }
];

const socialLinks = [
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nate-o-27806b102/"
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/StevenSeagal98"
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Let's Work Together
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm always interested in new opportunities and collaborations. 
                Whether you have a project in mind or just want to connect, feel free to reach out!
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="glass p-4 rounded-lg hover:scale-105 transition-transform duration-300 group"
                  >
                    {contact.href ? (
                      <a 
                        href={contact.href} 
                        className="flex items-center space-x-4 group-hover:text-primary transition-colors duration-300"
                      >
                        <div className="p-2 bg-primary/20 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                          {contact.icon}
                        </div>
                        <div>
                          <p className="font-semibold">{contact.label}</p>
                          <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-primary/20 rounded-lg text-primary">
                          {contact.icon}
                        </div>
                        <div>
                          <p className="font-semibold">{contact.label}</p>
                          <p className="text-muted-foreground">{contact.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div className="glass p-8 rounded-2xl text-center space-y-6">
                  <h3 className="text-2xl font-bold gradient-text">Ready to Start?</h3>
                  <p className="text-muted-foreground">
                    Let's discuss your project and see how I can help bring your ideas to life.
                  </p>
                  
                  <Button className="hero-btn w-full text-lg" asChild>
                    <a href="mailto:nateodev@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Me a Message
                    </a>
                  </Button>
                </div>
                
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold mb-4 text-center">Connect With Me</h4>
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.div
                        key={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="glass hover:bg-primary/20 border-primary/30 hover:scale-110"
                          asChild
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                            {social.icon}
                          </a>
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}