import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Education from './sections/Education';

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      {/* Background pattern */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3">
      <img
        src="https://res.cloudinary.com/dd08vrafn/image/upload/v1766847885/logo_e9jamw.png"
        alt="Avishkar Logo"
        className="h-8 w-8 md:h-9 md:w-9 rounded-full object-cover border-2 border-indigo-500/30 shadow-md shadow-indigo-500/10"
      />
      <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        AVISHKAR
      </span>
    </a>

          <div className="hidden md:flex items-center gap-10 text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
            <a href="#education" className="hover:text-white transition-colors duration-200">Education</a>
            <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
            <a href="#certificates" className="hover:text-white transition-colors duration-200">Certificates</a>
            <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
          </div>

          <div className="flex items-center gap-5">
            <SocialLink href="https://github.com/avishkarbhasme" icon={Github} />
            <SocialLink href="https://www.linkedin.com/in/avishkar-bhasme-438307265/" icon={Linkedin} />
            <SocialLink href="mailto:avishkar.bhasme@gmail.com" icon={Mail} />
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Education/>
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <footer className="border-t border-zinc-800/50 py-12 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} AVISHKAR BHASME </p>
      </footer>
    </div>
  );
}

function SocialLink({ href, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-white transition-colors"
    >
      <Icon size={20} strokeWidth={2.2} />
    </a>
  );
}

export default App;