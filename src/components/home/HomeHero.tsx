'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeHero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="section-container text-center z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold gradient-text animate-fade-in-up" 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.2 }}
        >
            Nathaniel Orona
        </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer crafting scalable, user-focused applications with modern frameworks and cloud platforms
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="hero-btn text-lg" onClick={scrollToNext}>
              View My Work
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="glass hover:bg-primary/20 border-primary/30" asChild>
                <a href="https://www.linkedin.com/in/nate-o-27806b102/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="icon" className="glass hover:bg-primary/20 border-primary/30" asChild>
                <a href="https://github.com/StevenSeagal98" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button variant="outline" size="icon" className="glass hover:bg-primary/20 border-primary/30" asChild>
                <a href="mailto:nateodev@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button variant="ghost" size="icon" onClick={scrollToNext} className="animate-bounce hover:bg-primary/10">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HomeHero;