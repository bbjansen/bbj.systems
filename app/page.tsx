'use client';

import Scene from './components/Scene';
import { motion } from 'framer-motion';
import { Github, Mail, Linkedin } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden flex flex-col">
      <Scene />
      <div className="container mx-auto px-6 lg:px-8 relative z-10 flex-grow">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl pt-[25vh] lg:pt-[30vh]"
        >
          <motion.h1 
            variants={item}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 leading-none"
          >
            bbj.systems
          </motion.h1>
          <motion.p 
            variants={item}
            className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-16 font-light max-w-xl"
          >
            Software Engineer & Data Analyst with background in Economics and System Design.
          </motion.p>
          <motion.div
            variants={item}
            className="flex gap-8"
          >
            <a
              href="https://github.com/bbjansen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
            >
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:contact@bbj.systems"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
            >
              <Mail className="w-8 h-8" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/company/bbj-systems/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform hover:-translate-y-1"
            >
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <footer className="relative z-10 container mx-auto px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex justify-between items-center border-t border-white/10 pt-8"
        >
          <span className="text-gray-500 text-sm font-light hover:text-gray-400 transition-colors">
            81678924
          </span>
          <span className="text-gray-500 text-sm font-light tracking-wide">
            incorporated
          </span>
        </motion.div>
      </footer>
    </main>
  );
}