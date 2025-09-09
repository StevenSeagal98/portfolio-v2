'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Vue", "React", "Next.js", "Nuxt", "Tailwind CSS", "Bootstrap"],
    color: "from-blue-500 to-purple-600"
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Spring Boot", "Django", "WordPress"],
    color: "from-green-500 to-blue-500"
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Infrastructure",
    skills: ["Azure", "AWS", "Heroku", "Docker"],
    color: "from-orange-500 to-red-500"
  },
  {
    title: "Languages",
    skills: ["JavaScript", "Python", "PHP", "Java", "Kotlin"],
    color: "from-indigo-500 to-purple-500"
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
              >
                <div className={`bg-gradient-to-r ${category.color} w-full h-1 rounded-full mb-4`} />
                
                <h3 className="text-xl font-bold mb-4 text-primary">
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="flex items-center space-x-3 group"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-200" />
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}