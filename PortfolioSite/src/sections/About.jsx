import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="About Me" subtitle="Who I am & what I do" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

<GlassCard className="p-8 md:p-10">
  <p className="text-lg leading-relaxed text-zinc-300 mb-6">
    Enthusiastic full-stack developer (recent graduate / self-taught) with a strong focus on modern web development.
  </p>

  <p className="text-lg leading-relaxed text-zinc-300 mb-6">
    My current tech stack:
  </p>

  <ul className="list-disc list-inside space-y-2 text-zinc-300 mb-6 pl-4 text-lg">
    <li>React + TypeScript</li>
    <li>Next.js (App Router, Server Components)</li>
    <li>Tailwind CSS & modern styling</li>
    <li>Node.js, Express, REST APIs</li>
    <li>Basic understanding of cloud platforms & deployment</li>
  </ul>

  <p className="text-lg leading-relaxed text-zinc-300">
    I enjoy writing clean, maintainable code and constantly learning better ways to build applications.
  </p>

  <p className="text-lg leading-relaxed text-zinc-300 mt-6">
    Looking forward to my first role where I can grow quickly, contribute meaningfully, and learn from experienced teams!
  </p>
</GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Replace with real photo */}
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
  <img 
    src="https://res.cloudinary.com/dd08vrafn/image/upload/v1766854246/photo_acc_lhwnbz.jpg"
    alt="Avishkar Bhasme"
    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
  />
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}