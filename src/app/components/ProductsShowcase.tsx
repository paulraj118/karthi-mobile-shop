import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Eye, Star, X, Scan, Search, Filter, SlidersHorizontal, ChevronRight, Heart, ShoppingCart, AlertCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from '../data/products';
import { useProducts } from '../context/ProductContext';

export type { Product };

interface ProductsShowcaseProps {
  onProductClick: (product: Product) => void;
  onScanClick: (product: Product) => void;
  selectedBrand: string | null;
  onClearBrand: () => void;
}

export function ProductsShowcase({ onProductClick, onScanClick, selectedBrand, onClearBrand }: ProductsShowcaseProps) {
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');

  const whatsappNumber = '9952597145';

  const handleWhatsAppClick = (product: Product) => {
    const message = `Hi! I'm interested in ${product.name} (${product.specs.ram}/${product.specs.storage}). Price: ₹${product.price.toLocaleString('en-IN')}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleScanClick = (product: Product) => {
    onScanClick(product);
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = !selectedBrand || product.brand === selectedBrand;
      return matchesSearch && matchesBrand;
    });
  }, [searchQuery, selectedBrand, products]);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[#111827] mb-3" style={{ fontSize: '2rem', fontWeight: 700 }}>
            {selectedBrand ? `${selectedBrand} Smartphones` : 'All Smartphones'}
          </h2>
          <p className="text-gray-600" style={{ fontSize: '1.125rem' }}>
            Premium quality smartphones at unbeatable prices
          </p>
          {selectedBrand && (
            <button
              onClick={onClearBrand}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
              Clear Filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: (index % 4) * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                borderColor: '#DC2626',
                borderWidth: '2px',
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden group border-2 border-transparent"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.trending && (
                    <span className="bg-[#F97316] text-white px-3 py-1 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                      🔥 Trending
                    </span>
                  )}
                  {product.originalPrice && (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full" style={{ fontSize: '0.75rem', fontWeight: 600 }}>
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-6 py-2 rounded-lg" style={{ fontWeight: 600 }}>
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Brand & Rating */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#991B1B]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    {product.brand}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-gray-700" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      {product.rating}
                    </span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="text-gray-900 mb-3" style={{ fontSize: '1.125rem', fontWeight: 600, lineHeight: '1.4' }}>
                  {product.name}
                </h3>

                {/* Specs */}
                <div className="space-y-1 mb-4">
                  <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                    📱 {product.specs.ram} RAM • {product.specs.storage}
                  </div>
                  <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>
                    📷 {product.specs.camera} Camera
                  </div>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#DC2626]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 line-through" style={{ fontSize: '1rem' }}>
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => onProductClick(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#991B1B] to-[#DC2626] hover:from-[#7F1D1D] hover:to-[#B91C1C] text-white py-2.5 rounded-lg transition-all"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                    <span className="hidden xl:inline" style={{ fontSize: '0.875rem', fontWeight: 600 }}>View</span>
                  </button>
                  <button
                    onClick={() => handleScanClick(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg transition-colors"
                    title="Browser Scan"
                  >
                    <Scan className="w-4 h-4" />
                    <span className="hidden xl:inline" style={{ fontSize: '0.875rem', fontWeight: 600 }}>Scan</span>
                  </button>
                  <button
                    onClick={() => handleWhatsAppClick(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white py-2.5 rounded-lg transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden xl:inline" style={{ fontSize: '0.875rem', fontWeight: 600 }}>Chat</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
