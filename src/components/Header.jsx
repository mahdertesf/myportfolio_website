import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';


const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-bg-dark bg-opacity-90 border-b border-glow shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4 md:px-10 lg:px-20">
     
        <h1 className="font-bold text-2xl text-glow">Mahder Tesfaye</h1> 
        <div className="hidden md:flex space-x-6">
          <Link to="about" smooth={true} duration={500} className="hover:text-glow cursor-pointer">About</Link>
          <Link to="skills" smooth={true} duration={500} className="hover:text-glow cursor-pointer">Skills</Link>
          <Link to="projects" smooth={true} duration={500} className="hover:text-glow cursor-pointer">Projects</Link>
          <Link to="education" smooth={true} duration={500} className="hover:text-glow cursor-pointer">Education</Link>
          <Link to="certificates" smooth={true} duration={500} className="hover:text-glow cursor-pointer">Certifications</Link>
          <Link to="contact" smooth={true} duration={500} className="hover:text-glow cursor-pointer">Contact</Link>
          
        </div>

        <div className="md:hidden flex">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <HiX className="text-glow w-6 h-6" />
            ) : (
              <HiMenuAlt3 className="text-glow w-6 h-6" />
            )}
          </button>
        </div>
        <div className={`absolute top-full left-0 w-full bg-bg-dark border-t border-glow shadow-md py-2 md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-3 px-6">
            <Link to="about" onClick={closeMobileMenu} smooth={true} duration={500} className="hover:text-glow cursor-pointer">About</Link>
            <Link to="skills" onClick={closeMobileMenu} smooth={true} duration={500} className="hover:text-glow cursor-pointer">Skills</Link>
            <Link to="projects" onClick={closeMobileMenu} smooth={true} duration={500} className="hover:text-glow cursor-pointer">Projects</Link>
            <Link to="education" onClick={closeMobileMenu} smooth={true} duration={500} className="hover:text-glow cursor-pointer">Education</Link>
            <Link to="certificates" onClick={closeMobileMenu} smooth={true} duration={500} className="hover:text-glow cursor-pointer">Certifications</Link>
            <Link to="contact" onClick={closeMobileMenu} smooth={true} duration={500} className="hover:text-glow cursor-pointer">Contact</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;