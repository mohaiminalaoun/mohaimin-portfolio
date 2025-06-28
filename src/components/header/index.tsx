// src/components/Header.tsx
import { useState, useEffect } from 'react';

type Route = 'home' | 'about' | 'projects' | 'experience' | 'contact';

interface HeaderProps {
  currentRoute: Route;
  setCurrentRoute: (route: Route) => void;
}

const Header = ({ currentRoute, setCurrentRoute }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (route: Route) => {
    setCurrentRoute(route);
    closeMobileMenu();
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => handleNavigation('home')}
            className="text-xl font-bold text-white hover:text-gray-300 transition-colors"
          >
            Mohaimin Al Aoun
          </button>
          
          {/* Desktop Navigation */}
          <nav className="space-x-6 hidden md:block">
            <button 
              onClick={() => handleNavigation('about')}
              className={`transition-colors ${currentRoute === 'about' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavigation('projects')}
              className={`transition-colors ${currentRoute === 'projects' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Projects
            </button>
            <button 
              onClick={() => handleNavigation('experience')}
              className={`transition-colors ${currentRoute === 'experience' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Experience
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`transition-colors ${currentRoute === 'contact' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              Contact
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle mobile menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Menu Content */}
          <div className="relative bg-gray-900 h-full w-full flex flex-col justify-center items-center space-y-8">
            <nav className="flex flex-col items-center space-y-8">
              <button 
                onClick={() => handleNavigation('about')}
                className={`text-2xl transition-colors ${currentRoute === 'about' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('projects')}
                className={`text-2xl transition-colors ${currentRoute === 'projects' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavigation('experience')}
                className={`text-2xl transition-colors ${currentRoute === 'experience' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                Experience
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`text-2xl transition-colors ${currentRoute === 'contact' ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              >
                Contact
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
  