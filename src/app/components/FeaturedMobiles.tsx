import { motion } from 'motion/react';
import { Star, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from './ProductsShowcase';

interface FeaturedMobilesProps {
  onProductClick: (product: Product) => void;
}

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 159900,
    originalPrice: 174900,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
    rating: 4.9,
    specs: { ram: '8GB', storage: '256GB', camera: '48MP' },
    inStock: true,
    trending: true,
  },
  {
    id: '3',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 129999,
    originalPrice: 144999,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    rating: 4.8,
    specs: { ram: '12GB', storage: '256GB', camera: '200MP' },
    inStock: true,
    trending: true,
  },
  {
    id: '5',
    name: 'Redmi Note 13 Pro',
    brand: 'Xiaomi',
    price: 23999,
    originalPrice: 26999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400&h=400&fit=crop',
    rating: 4.5,
    specs: { ram: '8GB', storage: '128GB', camera: '200MP' },
    inStock: true,
    trending: true,
  },
];

export function FeaturedMobiles({ onProductClick }: FeaturedMobilesProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <TrendingUp className="w-8 h-8 text-[#F97316]" />
          <h2 className="text-[#111827] text-center" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Featured Mobiles
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => onProductClick(product)}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer overflow-hidden border-2 border-transparent hover:border-[#1E3A8A] p-6 group"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-[#F97316] text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Trending</span>
                </div>
              </div>

              <div className="text-[#1E3A8A] mb-2" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                {product.brand}
              </div>

              <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                  {product.rating} / 5
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-[#1E3A8A]" style={{ fontSize: '1.75rem', fontWeight: 700 }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through" style={{ fontSize: '1rem' }}>
                    ₹{product.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
              </div>

              <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                {product.specs.ram} • {product.specs.storage} • {product.specs.camera}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
