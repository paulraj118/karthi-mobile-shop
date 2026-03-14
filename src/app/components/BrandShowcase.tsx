import { motion } from 'motion/react';

interface Brand {
  name: string;
  logo: string;
}

const brands: Brand[] = [
  { name: 'Apple', logo: '🍎' },
  { name: 'Samsung', logo: '📱' },
  { name: 'Xiaomi', logo: '📲' },
  { name: 'Realme', logo: '⚡' },
  { name: 'Vivo', logo: '💙' },
  { name: 'OnePlus', logo: '1️⃣' },
  { name: 'Oppo', logo: '🟢' },
  { name: 'Motorola', logo: 'Ⓜ️' },
];

interface BrandShowcaseProps {
  onBrandClick: (brand: string) => void;
}

export function BrandShowcase({ onBrandClick }: BrandShowcaseProps) {
  return (
    <section id="brands" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-[#111827] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Shop by Brand
          </h2>
          <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
            Choose from the world's leading smartphone manufacturers
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, index) => (
            <motion.button
              key={brand.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07, type: 'spring', stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onBrandClick(brand.name);
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#F87171] hover:shadow-xl transition-all group hover:bg-gradient-to-br hover:from-rose-50 hover:to-white"
            >
              <div className="text-center">
                <div className="mb-3 group-hover:scale-125 transition-transform duration-300" style={{ fontSize: '2.5rem' }}>{brand.logo}</div>
                <div className="text-gray-700 group-hover:text-[#B91C1C] transition-colors" style={{ fontWeight: 600 }}>
                  {brand.name}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
