import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);

  if (isAuthPage) return null;

  return (
    <nav className="bg-white/80 dark:bg-navy-900/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white/20 dark:border-navy-700/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-navy-600 to-navy-700 dark:from-navy-500 dark:to-navy-600 p-2 rounded-xl shadow-lg">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold text-navy-900 dark:text-white">Saher Flow Solutions</span>
              <span className="block text-sm text-navy-600 dark:text-navy-300">Portal</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-4">
              <Link 
                to="/login" 
                className="text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white transition-colors font-medium"
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-navy-600 hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-navy-900 dark:text-white p-2 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-navy-200 dark:border-navy-700 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                to="/login" 
                className="text-navy-700 dark:text-navy-200 hover:text-navy-900 dark:hover:text-white transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="bg-navy-600 hover:bg-navy-700 dark:bg-navy-500 dark:hover:bg-navy-400 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 text-center shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;