'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: "Virtus Media Group",
    position: "Full Stack Web Developer",
    location: "Munster, IN",
    period: "March 2021 - Present",
    achievements: [
      "Iteratively developed user-facing static sites and web applications for a financial education company",
      "Refactored legacy C# .NET code base to dramatically improve application performance",
      "Improved page load times over 200% by implementing caching strategies and restructuring front end architecture",
      "Introduced software development patterns and documentation to improve feature delivery time by ~55%",
      "Developed internal tools for employees and stakeholders to automate tasks"
    ]
  },
  {
    company: "Independent Contractor",
    position: "Software Developer",
    location: "Remote",
    period: "December 2022 - Current",
    achievements: [
      "Designed and implemented normalized database schemas and scalable APIs",
      "Built custom WordPress sites with themes, plugins, and security best practices",
      "Solely developed full-stack web applications using modern frameworks and best practices"
    ]
  }
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-section" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Experience
          </h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass p-8 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold gradient-text">{exp.position}</h3>
                      <div className="flex items-center space-x-2 text-primary">
                        <Building2 className="h-5 w-5" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col space-y-2 mt-4 md:mt-0 md:text-right">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <motion.div
                        key={achIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + achIndex * 0.1 
                        }}
                        className="flex items-start space-x-3 group"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 group-hover:scale-150 transition-transform duration-200" />
                        <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-200 leading-relaxed">
                          {achievement}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Timeline connector */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary to-transparent mt-4" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}