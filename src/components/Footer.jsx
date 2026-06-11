import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200/50 relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center text-slate-500 space-y-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-sm font-bold tracking-tight text-slate-800 font-display"
        >
          <Activity className="w-4 h-4 text-purple-500" />
          <span className="text-slate-700 font-semibold font-sans">
            Arthasya
          </span>
        </Link>

        {/* Rights */}
        <div className="text-xs text-slate-400">
          &copy; 2026 Arthasya Operations Inc. All rights reserved.
        </div>

        {/* Socials */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            aria-label="GitHub"
            className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-white/40 rounded-full transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-white/40 rounded-full transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-white/40 rounded-full transition-all duration-200"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
