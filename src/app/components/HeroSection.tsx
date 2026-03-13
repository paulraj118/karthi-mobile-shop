import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from '../../assets/hero_smartphone.png';

export function HeroSection() {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F97316] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-[#F97316]" style={{ fontWeight: 600 }}>🔥 Hot Deals Available</span>
            </div>

            <h1 className="text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: '1.2' }}>
              Latest Smartphones at <span className="text-[#F97316]">Karthi Mobiles</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100 mb-8"
              style={{ fontSize: '1.125rem', lineHeight: '1.6' }}
            >
              Explore the newest models from top brands with exclusive offers and authentic warranty
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <span style={{ fontWeight: 600 }}>Shop Now</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl transition-all border border-white/30"
              >
                <span style={{ fontWeight: 600 }}>Contact Us</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-white mb-1" style={{ fontSize: '1.875rem', fontWeight: 700 }}>500+</div>
                <div className="text-blue-200" style={{ fontSize: '0.875rem' }}>Products</div>
              </div>
              <div>
                <div className="text-white mb-1" style={{ fontSize: '1.875rem', fontWeight: 700 }}>20+</div>
                <div className="text-blue-200" style={{ fontSize: '0.875rem' }}>Brands</div>
              </div>
              <div>
                <div className="text-white mb-1" style={{ fontSize: '1.875rem', fontWeight: 700 }}>10K+</div>
                <div className="text-blue-200" style={{ fontSize: '0.875rem' }}>Happy Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <ImageWithFallback
                src={heroImage}
                alt="Latest Smartphones"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20"
              />

              {/* Floating Offer Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-8 -right-4 bg-[#F97316] text-white px-6 py-4 rounded-xl shadow-2xl"
              >
                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Up to</div>
                <div style={{ fontSize: '2rem', fontWeight: 700 }}>40% OFF</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
