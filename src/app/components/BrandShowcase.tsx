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
        <div className="text-center mb-12">
          <h2 className="text-[#111827] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Shop by Brand
          </h2>
          <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
            Choose from the world's leading smartphone manufacturers
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, index) => (
            <motion.button
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onBrandClick(brand.name);
                const element = document.getElementById('products');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-[#1E3A8A] hover:shadow-lg transition-all group"
            >
              <div className="text-center">
                <div className="mb-3" style={{ fontSize: '2.5rem' }}>{brand.logo}</div>
                <div className="text-gray-700 group-hover:text-[#1E3A8A] transition-colors" style={{ fontWeight: 600 }}>
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
