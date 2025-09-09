'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="glass p-8 md:p-12 rounded-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Results-driven Software Developer with <span className="text-primary font-semibold">5+ years of experience</span> building scalable, user-focused applications using modern frameworks and cloud platforms.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  I specialize in full-stack development, database design, and infrastructure management, with a proven track record of improving system performance and delivering maintainable solutions.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Currently based in <span className="text-primary font-semibold">Valparaiso, IN</span>, I'm passionate about creating digital experiences that make a difference.
                </motion.p>
              </div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="bg-gradient-to-br from-primary to-accent p-1 rounded-2xl">
                  <div className="bg-background p-8 rounded-2xl">
                    <div className="text-center space-y-4">
                      <div className="text-3xl font-bold gradient-text">5+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-primary p-1 rounded-xl">
                  <div className="bg-background p-4 rounded-xl">
                    <div className="text-center space-y-2">
                      <div className="text-xl font-bold gradient-text">200%</div>
                      <div className="text-xs text-muted-foreground">Performance Boost</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-primary to-accent p-1 rounded-xl">
                  <div className="bg-background p-4 rounded-xl">
                    <div className="text-center space-y-2">
                      <div className="text-xl font-bold gradient-text">55%</div>
                      <div className="text-xs text-muted-foreground">Faster Delivery</div>
                    </div>
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