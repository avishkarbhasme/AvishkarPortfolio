import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company: 'Yhills',
    period: 'Jan 2025 - April 2025',
    description: 'I built and optimized responsive web components using React.js and Node.js, collaborating on the development of dynamic REST APIs and integrating MongoDB Atlas. Through structured design and thorough testing, I enhanced website performance and user experience, while also gaining hands-on experience in full-stack development and deployment.',
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle title="Experience" subtitle="My professional journey" />

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <GlassCard className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Briefcase size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                    <div className="text-indigo-400 mb-2">
                      {exp.company} • {exp.period}
                    </div>
                    <p className="text-zinc-300">{exp.description}</p>
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