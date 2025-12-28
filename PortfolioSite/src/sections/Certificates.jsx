// src/components/sections/Certificates.jsx
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Award, ExternalLink } from 'lucide-react';

const certificates = [
  {
    title: "The Complete Java Programming Mastery - Developers Bootcamp",
    issuer: "Udemy",
    date: "28 Aug 2025",
    link: "https://www.udemy.com/certificate/UC-a74c937e-be1e-406f-830f-db02bc6d3c54/", // ← replace with your real certificate link
    description: "Comprehensive bootcamp covering Java fundamentals, OOP, collections, streams, multithreading, Spring Boot basics, and real-world projects.",
  },
  {
    title: "SQL and Relational Databases 101",
    issuer: "IBM Developer Skills Network",
    date: "17 June 2025",
    link: "https://courses.cognitiveclass.ai/certificates/bc44f6891ceb439fb4e83053e96b5eb7", // ← replace with your real link
    description: "Foundational course on relational databases, SQL queries (SELECT, JOINs, GROUP BY, subqueries), database design, normalization, and practical exercises.",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-black/20">
      <div className="max-w-5xl mx-auto">
        <SectionTitle 
          title="Certificates" 
          subtitle="Continuous learning & skill validation" 
        />

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassCard className="h-full p-8 flex flex-col">
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-4 rounded-xl bg-indigo-500/10 text-indigo-400 flex-shrink-0">
                    <Award size={32} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                    <div className="flex items-center gap-3 text-zinc-400 mb-3">
                      <span>{cert.issuer}</span>
                      <span className="text-sm">•</span>
                      <span>{cert.date}</span>
                    </div>

                    <p className="text-zinc-300 mb-6 leading-relaxed">
                      {cert.description}
                    </p>

                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2 
                          text-indigo-400 hover:text-indigo-300 
                          transition-colors font-medium
                        "
                      >
                        View Certificate
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Optional: future certificates placeholder */}
        <div className="text-center mt-12 text-zinc-500 text-sm">
          More certifications coming soon...
        </div>
      </div>
    </section>
  );
}