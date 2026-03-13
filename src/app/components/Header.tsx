import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, Menu, X, Smartphone, Phone } from 'lucide-react';

export function Header() {
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

  const phoneNumber = '8012424220';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
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
            <div className="bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] p-2 rounded-xl">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#1E3A8A] tracking-tight" style={{ fontSize: '1.25rem', fontWeight: 700 }}>Karthi Mobiles</div>
              <div className="text-[#F97316] tracking-wide" style={{ fontSize: '0.625rem', fontWeight: 600, marginTop: '-4px' }}>PREMIUM SMARTPHONES</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-700 hover:text-[#1E3A8A] transition-colors" style={{ fontWeight: 500 }}>
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-[#1E3A8A] transition-colors" style={{ fontWeight: 500 }}>
              Mobiles
            </button>
            <button onClick={() => scrollToSection('brands')} className="text-gray-700 hover:text-[#1E3A8A] transition-colors" style={{ fontWeight: 500 }}>
              Brands
            </button>
            <button onClick={() => scrollToSection('offers')} className="text-gray-700 hover:text-[#1E3A8A] transition-colors" style={{ fontWeight: 500 }}>
              Offers
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#1E3A8A] transition-colors" style={{ fontWeight: 500 }}>
              Contact
            </button>
          </nav>

          {/* Call Button - Desktop */}
          <a
            href={`tel:${phoneNumber}`}
            className="hidden md:flex items-center gap-2 bg-[#F97316] text-white px-6 py-2.5 rounded-lg hover:bg-[#EA580C] transition-all shadow-md hover:shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

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
