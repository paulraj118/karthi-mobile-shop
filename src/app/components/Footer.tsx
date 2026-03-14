import { Smartphone, Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onAdminClick?: () => void;
}

export function Footer({ onAdminClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-[#DC2626] to-[#F97316] p-2 rounded-xl text-white">
                <Smartphone className="w-6 h-6" />
              </div>
              <div 
                className="text-white cursor-default select-none" 
                style={{ fontSize: '1.25rem', fontWeight: 700 }}
              >
                Karthik Mobiles
              </div>
            </div>
            <p className="text-gray-400 mb-4" style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>
              Your trusted destination for premium smartphones. Authentic products, best prices, and excellent service.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 hover:bg-[#1E3A8A] p-2 rounded-lg transition-all hover:scale-110 hover:-translate-y-1 duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#E1306C] p-2 rounded-lg transition-all hover:scale-110 hover:-translate-y-1 duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#1DA1F2] p-2 rounded-lg transition-all hover:scale-110 hover:-translate-y-1 duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#FF0000] p-2 rounded-lg transition-all hover:scale-110 hover:-translate-y-1 duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-[#F97316] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#F97316] transition-colors">
                  All Mobiles
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('brands')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#F97316] transition-colors">
                  Brands
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('offers')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#F97316] transition-colors">
                  Offers
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-[#F97316] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              Popular Brands
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Apple iPhone</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Samsung Galaxy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Xiaomi Redmi</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">Realme</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors">OnePlus</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#F97316] mt-1 flex-shrink-0" />
                <span className="text-gray-400" style={{ fontSize: '0.875rem' }}>
                  Meenambigai Pangala,<br />Virudhunagar, Tamil Nadu 626001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#F97316]" />
                <a href="tel:8925163362" className="text-gray-400 hover:text-[#F97316] transition-colors">
                  8925163362
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#F97316]" />
                <a href="mailto:contact@karthikmobiles.com" className="text-gray-400 hover:text-[#F97316] transition-colors">
                  contact@karthikmobiles.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-left" style={{ fontSize: '0.875rem' }}>
              © {currentYear} Karthik Mobiles. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors" style={{ fontSize: '0.875rem' }}>
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors" style={{ fontSize: '0.875rem' }}>
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-[#F97316] transition-colors" style={{ fontSize: '0.875rem' }}>
                Warranty Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
