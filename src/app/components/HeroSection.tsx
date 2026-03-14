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
    <section className="relative bg-gradient-to-br from-[#991B1B] via-[#DC2626] to-[#EF4444] text-white pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F97316] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <span className="text-yellow-400" style={{ fontWeight: 600 }}>🔥 Hot Deals Available</span>
            </motion.div>

            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-white mb-4" 
              style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: '1.2' }}
            >
              Latest Smartphones at <span className="text-yellow-400 underline decoration-yellow-400/30 decoration-4 underline-offset-8">Karthik Mobiles</span>
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-red-100 mb-8"
              style={{ fontSize: '1.125rem', lineHeight: '1.6' }}
            >
              Explore the newest models from top brands with exclusive offers and authentic warranty
            </motion.p>

            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <span style={{ fontWeight: 600 }}>Shop Now</span>
                <ChevronRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl transition-all border border-white/30 hover:scale-105 active:scale-95"
              >
                <span style={{ fontWeight: 600 }}>Contact Us</span>
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.1 } }
              }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { label: 'Products', value: '500+' },
                { label: 'Brands', value: '20+' },
                { label: 'Happy Customers', value: '10K+' }
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                >
                  <div className="text-white mb-1" style={{ fontSize: '1.875rem', fontWeight: 700 }}>{stat.value}</div>
                  <div className="text-red-200" style={{ fontSize: '0.875rem' }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: [0, -15, 0],
            }}
            transition={{ 
              opacity: { duration: 0.8 },
              scale: { duration: 0.8 },
              rotate: { duration: 0.8 },
              y: { 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }
            }}
            className="relative"
          >
            <div className="relative group">
              <ImageWithFallback
                src={heroImage}
                alt="Latest Smartphones"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20 transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Floating Offer Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-8 -right-4 bg-[#F97316] text-white px-6 py-4 rounded-xl shadow-2xl cursor-default"
              >
                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Up to</div>
                <div style={{ fontSize: '2rem', fontWeight: 700 }}>40% OFF</div>
              </motion.div>

              {/* Decorative elements behind image */}
              <div className="absolute -inset-4 bg-white/5 blur-2xl rounded-full -z-10 animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
