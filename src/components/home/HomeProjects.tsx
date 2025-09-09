'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code2, Database, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Investor Relations Platform - Virtus Media Group",
    description: "Led the planning and development of a comprehensive investor relations platform for Virtus Media Group, enhancing user engagement, scaling business opportunities, and operational efficiency.",
    technologies: ["React", "NextJS", "Node.js", "PostgreSQL", "Azure", "TypeScript", "ShadCN", ,"TailwindCSS"],
    features: [
      "Implemented advanced caching strategies",
      "Restructured frontend architecture for scale",
      "Integrated modern development patterns",
      "Built internal automation tools"
    ],
    type: "Full Stack Application (Under Construction)",
    icon: <Code2 className="h-6 w-6" />,
    image: 'https://res.cloudinary.com/dwb1mcupk/image/upload/v1757029252/virtus-site-sc_dbw4mu.png'
  },
  {
    title: "Medical Trial Management Site - Vistagen Pharmaceuticals",
    description: "Developed a medical trial management site for Vistagen Pharmaceuticals, streamlining the process of qualifying and connecting patients with the organization.",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
    features: [
      "Custom WP plugin development",
      "User qualification survey system",
      "Custom HIPAA Compliant CMS integration",
      "Performance optimization",
      "SEO-focused architecture",
      "Responsive design implementation"
    ],
    type: "CMS Development / Full Stack Development",
    icon: <Database className="h-6 w-6" />,
    image: 'https://res.cloudinary.com/dwb1mcupk/image/upload/v1757029801/sad-site-sc_hnvhyo.jpg'
  },
  {
    title: "Static WordPress Revamp - Total Tree Service",
    description: "Optimized and revamped the Total Tree Service website, enhancing user experience and improving site performance using WordPress and modern web technologies.",
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL"],
    features: [
      "Custom theme development",
      "Responsive design implementation",
      "Performance optimization",
      "Location Service / Google Maps Integration"
    ],
    type: "WordPress Development",
    icon: <Cloud className="h-6 w-6" />,
    image: 'https://res.cloudinary.com/dwb1mcupk/image/upload/v1757030146/tts-sc_cwgage.jpg'
  },
    {
    title: "Financial Education Platform - PB Alerts",
    description: "Designed and implemented a financial education platform for PB Alerts, focusing on user engagement and educational content delivery.",
    technologies: ["Express.js", "Node.js", "Vue.js", "TypeScript", "TailwindCSS", "Nuxt", "PostgreSQL", "Azure", "Redis", "Stripe", "Discord.js", "Docker"],
    features: [
      "Normalized database design",
      "RESTful API development",
      "Cloud deployment automation",
      "Microservices architecture",
      "Real-time data streaming integrations",
      "Procedural content dispatching system",
      "Intensive refactor from legacy codebase to modern stack"
    ],
    type: "Full Stack Development",
    icon: <Cloud className="h-6 w-6" />,
    image: 'https://res.cloudinary.com/dwb1mcupk/image/upload/v1757029987/pbalerts-sc_dcplbu.png'
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass rounded-2xl hover:scale-105 transition-all duration-300 group overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                    <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-primary-glow transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/80">{project.type}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                
                <div className="space-y-4 mb-6">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">Key Features:</h4>
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + featureIndex * 0.05 
                        }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" variant="default" className="flex-1 hover:scale-105">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Project
                    </Button>
                  </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">
              Want to see more of my work? Check out my GitHub for additional projects and contributions.
            </p>
            <Button variant="outline" className="glass border-primary/30 hover:bg-primary/20" asChild>
              <a href="https://github.com/StevenSeagal98" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}