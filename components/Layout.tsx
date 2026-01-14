import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Camera, Mail, Heart, Facebook, Instagram, Twitter } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="size-8 text-primary">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">Vietmate</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/tours" className={`text-sm font-medium transition-colors ${isActive('/tours') ? 'text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300'}`}>Tours</Link>
            <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300'}`}>About</Link>
            <Link to="/faq" className={`text-sm font-medium transition-colors ${isActive('/faq') ? 'text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300'}`}>Help</Link>
            <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary dark:text-gray-300'}`}>Contact</Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link to="/dashboard" className="hidden sm:flex items-center justify-center px-4 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-bold dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-colors">
              Login
            </Link>
            <button className="flex items-center justify-center px-5 h-10 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm font-bold transition-all shadow-lg shadow-primary/20">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-gray-800 px-4 py-6 flex flex-col gap-4">
          <Link to="/tours" className="text-lg font-medium text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>Tours</Link>
          <Link to="/about" className="text-lg font-medium text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/faq" className="text-lg font-medium text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>Help</Link>
          <Link to="/contact" className="text-lg font-medium text-gray-900 dark:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
          <hr className="border-gray-100 dark:border-gray-700" />
          <Link to="/dashboard" className="text-lg font-medium text-primary" onClick={() => setIsOpen(false)}>Login / Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#0f1115] border-t border-gray-100 dark:border-gray-800">
      {/* Newsletter */}
      <div className="bg-primary/5 dark:bg-white/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
            <Mail size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Unlock Secret Deals</h2>
          <p className="text-text-secondary mb-6">Join our community to get exclusive offers on hotels and tours sent to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 h-12 px-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark focus:ring-2 focus:ring-primary focus:border-transparent dark:text-white"
            />
            <button className="h-12 px-6 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Globe size={18} />
              </a>
              <a href="#" className="size-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Camera size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-secondary">© 2024 Vietmate Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-current" />
            <span>in Vietnam</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};