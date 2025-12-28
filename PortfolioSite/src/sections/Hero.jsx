import { motion } from 'framer-motion';
import { ArrowDown, Github } from 'lucide-react';
import GradientText  from '../ui/GradientText';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter">
            Hi, I'm <GradientText>Avishkar Bhasme</GradientText>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
        >
          Full-stack developer creating <span className="text-indigo-400">beautiful</span>,{' '}
          <span className="text-purple-400">fast</span> and{' '}
          <span className="text-pink-400">intuitive</span> digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-wrap gap-5 justify-center pt-8"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl font-medium shadow-lg shadow-indigo-500/20 transition-all duration-300 flex items-center gap-2 group"
          >
            View Projects
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href="https://github.com/avishkarbhasme"
            target="_blank"
            className="px-8 py-4 border border-zinc-700 hover:border-zinc-500 rounded-xl font-medium transition-all flex items-center gap-2"
          >
            <Github size={18} /> GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}