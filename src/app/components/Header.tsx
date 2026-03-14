import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Menu, X, Smartphone, Phone } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
}

export function Header({ onAdminClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const phoneNumber = '+91 99525 97145';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-1' 
          : 'bg-white/80 backdrop-blur-sm py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-gradient-to-br from-[#6366F1] to-[#06B6D4] p-2 rounded-xl shadow-lg shadow-indigo-200/50">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#312E81] tracking-tight" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Karthik Mobiles</div>
              <div className="text-[#6366F1] tracking-wide" style={{ fontSize: '0.625rem', fontWeight: 600, marginTop: '-4px' }}>PREMIUM SMARTPHONES</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Home', id: null },
              { name: 'Mobiles', id: 'products' },
              { name: 'Brands', id: 'brands' },
              { name: 'Offers', id: 'offers' },
              { name: 'Contact', id: 'contact' },
              { name: 'Admin', id: 'admin', action: onAdminClick }
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => item.action ? item.action() : item.id ? scrollToSection(item.id) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative text-gray-700 hover:text-[#6366F1] transition-colors group py-2"
                style={{ fontWeight: 600 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Call Button - Desktop */}
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: '#4F46E5' }}
            whileTap={{ scale: 0.95 }}
            href={`tel:${phoneNumber}`}
            className="hidden md:flex items-center gap-2 bg-gradient-to-r from-[#6366F1] to-[#06B6D4] text-white px-6 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg shadow-indigo-200/50"
          >
            <Phone className="w-4 h-4" />
            <span style={{ fontWeight: 600 }}>Call Now</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-2">
            <nav className="flex flex-col gap-3 pt-4">
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }} className="text-left py-2 text-gray-700 hover:text-[#1E3A8A]" style={{ fontWeight: 500 }}>
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="text-left py-2 text-gray-700 hover:text-[#1E3A8A]" style={{ fontWeight: 500 }}>
                Mobiles
              </button>
              <button onClick={() => scrollToSection('brands')} className="text-left py-2 text-gray-700 hover:text-[#1E3A8A]" style={{ fontWeight: 500 }}>
                Brands
              </button>
              <button onClick={() => scrollToSection('offers')} className="text-left py-2 text-gray-700 hover:text-[#1E3A8A]" style={{ fontWeight: 500 }}>
                Offers
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-[#1E3A8A]" style={{ fontWeight: 500 }}>
                Contact
              </button>
              <button onClick={onAdminClick} className="text-left py-2 text-[#EF4444] font-bold" style={{ fontWeight: 700 }}>
                Admin Portal
              </button>
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-center justify-center gap-2 bg-[#F97316] text-white px-6 py-2.5 rounded-lg mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
