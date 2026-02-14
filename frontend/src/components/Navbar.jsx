import React from "react";
import { Home, FolderKanban, Upload, Mail, Database } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Database className="text-sky-400 w-6 h-6" />
          <span>
            <span className="text-sky-400">&lt;</span>
            Francois Louis Marie NTONGA
            <span className="text-sky-400">/&gt;</span>
          </span>
        </div>

        {/* Liens */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          <a href="#home" className="flex items-center gap-2 hover:text-sky-400 transition">
            <Home size={18} />
            Accueil
          </a>

          <a href="#projects" className="flex items-center gap-2 hover:text-sky-400 transition">
            <FolderKanban size={18} />
            Projets
          </a>

          <a href="#contact" className="flex items-center gap-2 hover:text-sky-400 transition">
            <Mail size={18} />
            Contact
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
