import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
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
  return (
    <nav className="bg-white shadow-md sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={headerImg} alt="INFNOVA Header" className="h-8 w-auto" />
        </Link>
        {/* Menu icon for mobile */}
        <button
          className="lg:hidden p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        {/* Nav links and actions */}
        <div className={`hidden lg:flex flex-1 justify-center items-center`}> {/* Centered nav links */}
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
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-semibold">Enroll Now</Button>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-30 lg:hidden">
            <ul className="flex flex-col gap-4 p-4">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-200 px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-blue-500 ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'}`}
                    onClick={() => setOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/signin" className="text-sm font-medium text-gray-700 hover:text-blue-500 px-2 py-1 rounded focus-visible:ring-2 focus-visible:ring-blue-500" onClick={() => setOpen(false)}>Sign In</Link>
              </li>
              <li>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full px-4 py-2 rounded-md font-semibold">Enroll Now</Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}