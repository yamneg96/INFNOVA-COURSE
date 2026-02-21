import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import headerImg from '../../assets/Logo.png';
import { Button } from '../ui/Button';

const navLinks = [
  { name: 'Courses', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  // Animation variants for the container
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 40,
      },
      transitionEnd: {
        display: "none"
      },
      staggerChildren: 0.05,
      staggerDirection: -1
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 30,
      },
      display: "block",
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  };

  // Animation variants for individual items
  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={headerImg} alt="INFNOVA Header" className="h-8 w-auto" />
        </Link>

        {/* Menu icon for mobile */}
        <button
          className="cursor-pointer lg:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {/* Animated Switch between Menu and X */}
          <motion.div
            key={open ? "close" : "open"}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {!open ? <Menu className="w-6 h-6 text-gray-700" /> : <X className="w-6 h-6 text-gray-700" />}
          </motion.div>
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <ul className="flex gap-8 items-center">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-blue-500 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/signin" className="text-sm font-medium text-gray-700 hover:text-blue-500 px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-blue-500">Sign In</Link>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold transition-transform active:scale-95">Enroll Now</Button>
        </div>

        {/* Mobile menu with AnimatePresence */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="absolute top-16 left-0 w-full bg-white shadow-xl z-30 lg:hidden overflow-hidden border-t border-gray-50"
            >
              <motion.ul className="flex flex-col gap-2 p-6">
                {navLinks.map(link => (
                  <motion.li key={link.path} variants={itemVariants}>
                    <Link
                      to={link.path}
                      className={`block text-base font-semibold transition-colors duration-200 p-2 rounded-md ${location.pathname === link.path ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                
                <motion.div variants={itemVariants} className="h-[1px] bg-gray-100 my-2" />

                <motion.li variants={itemVariants}>
                  <Link 
                    to="/signin" 
                    className="block text-base font-semibold text-gray-700 p-2 hover:bg-gray-50 rounded-md" 
                    onClick={() => setOpen(false)}
                  >
                    Sign In
                  </Link>
                </motion.li>
                
                <motion.li variants={itemVariants} className="mt-2">
                  <Button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white w-full py-3 rounded-lg font-bold shadow-lg shadow-orange-200 transition-transform active:scale-[0.98]">
                    Enroll Now
                  </Button>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}