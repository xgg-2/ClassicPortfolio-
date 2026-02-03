import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useSound } from '../hooks/useSound';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { playHover, playClick } = useSound();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleMobileToggle = () => {
    playClick();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-paper shadow-sm py-4' : 'bg-paper py-6 md:py-10'
      }`}
    >
      <div className="mx-auto px-6 md:px-12 lg:px-24 max-w-screen-xl flex justify-between items-center">
        {/* Logo / Name */}
        <a 
          href="#" 
          className="font-serif text-2xl font-bold tracking-tight text-ink z-50 cursor-pointer"
          onMouseEnter={playHover}
          onClick={handleLinkClick}
        >
          xgg.2
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-bold uppercase tracking-widest text-stone-500 hover:text-ink transition-colors duration-200 cursor-pointer"
              onMouseEnter={playHover}
              onClick={playClick}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-ink z-[110]"
          onClick={handleMobileToggle}
          onMouseEnter={playHover}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-paper z-[105] flex flex-col justify-center items-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${
            mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={handleLinkClick}
                className="font-serif text-4xl text-ink hover:text-stone-600 transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;