import { motion } from 'framer-motion';

export function GlassCard({ children, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        relative overflow-hidden rounded-2xl
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-2xl shadow-black/40
        ${className}
      `}
      {...props}
    >
      <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}