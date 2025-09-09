'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const logo = 'https://res.cloudinary.com/dwb1mcupk/image/upload/v1757030914/Logo_kghuei.jpg';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const MainNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`px-8 fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass shadow-lg' : 'bg-transparent'}`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={logo} alt="Nathaniel Orona Logo" className="h-8 w-8" />
            </motion.button>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 right-0 w-full h-screen bg-background/95 backdrop-blur-xl z-30 md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <motion.button
            onClick={scrollToTop}
            className="flex flex-col items-center space-y-2 mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={logo} alt="Nathaniel Orona Logo" className="h-16 w-16 mb-2" />
            <span className="text-2xl font-bold gradient-text">Nathaniel Orona</span>
          </motion.button>
          
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-2xl text-muted-foreground hover:text-primary transition-colors duration-200"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default MainNav;