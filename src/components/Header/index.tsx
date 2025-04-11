import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Store Name */}
          <div className="flex items-center space-x-2">
            <img src="/SE-store-logo-bg.png" alt="website logo" className="w-8 aspect-square" />
            <h1 className="text-xl font-bold text-gray-900">
              Shivaji Electrical Store
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-sm">
            <a
              href="/#products"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Products
            </a>
            <a
              href="/#services"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="/#about"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/games"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Games
            </a>
            <a
              href="/#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 space-y-2 text-right">
            <a
              href="/#products"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Products
            </a>
            <a
              href="/#services"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Services
            </a>
            <a
              href="/#about"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="/games"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Play Games
            </a>
            <a
              href="/#contact"
              className="block text-gray-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
