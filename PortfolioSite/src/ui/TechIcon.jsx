import { motion } from 'framer-motion';

export function TechIcon({ icon, name, color = '#6366f1' }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12, rotate: 4 }}
      whileTap={{ scale: 0.95 }}
      className="group flex flex-col items-center"
    >
      <div
        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl p-5
                   bg-linear-to-br from-zinc-900 to-black
                   border border-zinc-700/50 backdrop-blur-sm
                   flex items-center justify-center text-4xl md:text-5xl
                   shadow-xl shadow-black/40
                   transition-all duration-300
                   group-hover:border-indigo-500/40"
        style={{ color }}
      >
        {icon}
        <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="mt-3 text-sm text-zinc-400 group-hover:text-white transition-colors">
        {name}
      </p>
    </motion.div>
  );
}