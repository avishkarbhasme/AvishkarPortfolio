// src/components/sections/Contact.jsx
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Mail, Github, Linkedin, Send, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Let's create something amazing together" 
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <GlassCard className="p-8 md:p-12 mt-10">
            <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              I'm currently open to new opportunities, freelance projects, 
              and interesting collaborations. 
              Feel free to reach out — I'll reply as soon as possible!
            </p>

            {/* Social Links - Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
              <SocialButton
                href="mailto:avishkar.bhasme@gmail.com"
                icon={Mail}
                label="Email"
                color="#ea4335"
              />
              <SocialButton
                href="https://github.com/avishkarbhasme"
                icon={Github}
                label="GitHub"
                color="#ffffff"
              />
              <SocialButton
                href="https://www.linkedin.com/in/avishkar-bhasme-438307265/"
                icon={Linkedin}
                label="LinkedIn"
                color="#0a66c2"
              />
              <SocialButton
                href="https://x.com/avishkar_bhasme"
                icon={Twitter}
                label="Twitter"
                color="#1da1f2"
              />
            </div>

            {/* Primary CTA Button */}
            <a
              href="mailto:avishkarbhasme@gmail.com"
              className="
                inline-flex items-center gap-3 px-10 py-5 
                bg-gradient-to-r from-indigo-600 to-purple-600
                hover:from-indigo-500 hover:to-purple-500
                rounded-xl text-lg font-medium text-white
                shadow-lg shadow-indigo-500/25
                transition-all duration-300 transform hover:scale-[1.03]
              "
            >
              <Send size={20} />
              Send me a message
            </a>

            <p className="mt-8 text-sm text-zinc-500">
              Response time: usually within 24–48 hours
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

// Reusable Social Button Component
function SocialButton({ href, icon: Icon, label, color }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex flex-col items-center gap-3
        p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/50
        hover:border-zinc-600/70 hover:bg-zinc-800/50
        transition-all duration-300
      "
    >
      <div 
        className="p-4 rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{ color }}
      >
        <Icon size={32} strokeWidth={1.8} />
      </div>
      <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
        {label}
      </span>
    </a>
  );
}