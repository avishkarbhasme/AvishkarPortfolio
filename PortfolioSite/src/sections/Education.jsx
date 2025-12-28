// src/components/sections/Education.jsx
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Annasaheb Dange College of Engineering and Technology, Ashta",
    duration: "2021 – 2025",
    achievement: "CGPA: 7.34",
  },
  {
    degree: "Higher Secondary Certificate (12th)",
    institution: "Shraddha Institute of Career Development (SICD), Ichalkaranji",
    duration: "2021",
    achievement: "Percentage: 87.33%",
  },
  {
    degree: "Secondary School Certificate (10th)",
    institution: "Swami Ramanand Bharati Vidya Mandir, Tasgaon",
    duration: "2019",
    achievement: "Percentage: 68.80%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle 
          title="Education" 
          subtitle="My academic journey" 
        />

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard className="p-6 md:p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 flex-shrink-0">
                    <GraduationCap size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    
                    <div className="text-indigo-400 font-medium mb-1">
                      {edu.institution}
                    </div>
                    
                    <div className="flex items-center gap-4 text-zinc-400 text-sm mb-3">
                      <span>{edu.duration}</span>
                      <span className="text-lg">•</span>
                      <span className="font-medium">{edu.achievement}</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}