// src/components/sections/Skills.jsx
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { TechIcon } from '../ui/TechIcon';
import { GlassCard } from '../ui/GlassCard';

const skillCategories = [
  {
    title: "Languages",
    items: [
      { name: "Java",         icon: "☕",      color: "#f89820" },
      { name: "C++",          icon: "++",     color: "#00599C" },
      { name: "C",            icon: "C",      color: "#A8B9CC" },
    ]
  },
  {
    title: "Development",
    items: [
      { name: "HTML",         icon: "🌐",     color: "#e34c26" },
      { name: "CSS",          icon: "🎨",     color: "#1572b6" },
      { name: "Tailwind CSS", icon: "🌊",     color: "#38bdf8" },
      { name: "JavaScript",   icon: "🟡",     color: "#f7df1e" },
      { name: "React.js",     icon: "⚛️",     color: "#61dafb" },
      { name: "Node.js",      icon: "🟢",     color: "#68a063" },
      { name: "Express.js",   icon: "🚀",     color: "#000000" },
      { name: "REST API",     icon: "🔗",     color: "#6c757d" },
      { name: "SQL",          icon: "🗃️",     color: "#4479a1" },
      { name: "MongoDB",      icon: "🍃",     color: "#47a248" },
    ]
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Postman",      icon: "🛠️",     color: "#ff6c37" },
      { name: "Render",       icon: "☁️",     color: "#46e0a0" },
      { name: "Figma",        icon: "🎨",     color: "#f24e1e" },
      { name: "Jira",         icon: "🐉",     color: "#0052cc" },
      { name: "Cloudinary",   icon: "📷",     color: "#3448c5" },
      { name: "VS Code",      icon: "⌨️",     color: "#007acc" },
      { name: "Git",          icon: "🌳",     color: "#f05032" },
      { name: "GitHub",       icon: "🐙",     color: "#181717" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <SectionTitle 
          title="Skills" 
          subtitle="Technologies & Tools I work with" 
        />

        <div className="space-y-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold text-indigo-400 mb-8 text-center md:text-left">
                {category.title}
              </h3>
              
              <GlassCard className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 py-6">
                  {category.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <TechIcon 
                        icon={skill.icon} 
                        name={skill.name} 
                        color={skill.color} 
                      />
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}