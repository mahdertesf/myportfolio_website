import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { to: 'experience', label: 'Experience' },
  { to: 'skills', label: 'Skills' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'education', label: 'Education' },
  { to: 'contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
        <Link
          to="hero"
          smooth
          duration={500}
          className="text-zinc-50 font-bold text-lg cursor-pointer hover:text-emerald-400 transition-colors tracking-tight"
        >
          MT<span className="text-emerald-400">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-64}
              spy
              activeClass="!text-emerald-400"
              className="text-sm text-zinc-400 hover:text-zinc-50 cursor-pointer transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-zinc-400 hover:text-zinc-50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50"
          >
            <div className="px-6 py-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth
                  duration={500}
                  offset={-64}
                  className="block py-3 text-zinc-400 hover:text-zinc-50 cursor-pointer transition-colors border-b border-zinc-800/30 last:border-0"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
