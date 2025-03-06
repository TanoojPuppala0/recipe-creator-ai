
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-10 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-white/80 shadow-sm' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div 
          className="flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <span className="text-xl md:text-2xl font-display font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Cook-key
          </span>
        </motion.div>
        
        <motion.nav 
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <a href="#upload" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Image to Recipe
          </a>
          <a href="#search" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Search by Name
          </a>
        </motion.nav>
      </div>
    </motion.header>
  );
};

export default Header;
