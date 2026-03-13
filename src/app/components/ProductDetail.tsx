import { motion } from 'motion/react';
import { X, Phone, MessageCircle, Star, Check, ChevronLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from './ProductsShowcase';
import { useState } from 'react';
import { products } from '../data/products';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onViewMore: (product: Product) => void;
}

const similarProducts: Product[] = products.slice(0, 3);

export function ProductDetail({ product, onClose, onViewMore }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '');
  const phoneNumber = '8925163362';
  const whatsappNumber = '9952597145';

  const handleCallNow = () => {
    alert(`Calling ${phoneNumber}...`);
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I want to order ${product.name}${selectedColor ? ` in ${selectedColor}` : ''} (${product.specs.ram}/${product.specs.storage}). Price: ₹${product.price.toLocaleString('en-IN')}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-gray-700 hover:text-[#1E3A8A] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span style={{ fontWeight: 600 }}>Back to Products</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg sticky top-24 h-fit"
          >
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-xl"
            />

            {/* Color Options */}
            {product.colors && product.colors.length > 0 && (
              <div className="mt-6">
                <div className="text-gray-700 mb-3" style={{ fontWeight: 600 }}>
                  Available Colors:
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedColor === color
                          ? 'border-[#1E3A8A] bg-[#1E3A8A] text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-[#1E3A8A]'
                      }`}
                      style={{ fontSize: '0.875rem', fontWeight: 600 }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* Brand & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-[#1E3A8A] bg-blue-100 px-4 py-2 rounded-lg" style={{ fontWeight: 700 }}>
                {product.brand}
              </span>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700" style={{ fontWeight: 600 }}>
                  {product.rating} / 5
                </span>
              </div>
            </div>

            {/* Product Name */}
            <h1 className="text-gray-900" style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: '1.2' }}>
              {product.name}
            </h1>

            {/* Price */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-[#1E3A8A]" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-gray-400 line-through" style={{ fontSize: '1.25rem' }}>
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-green-600" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                ✓ In Stock - Ready to Ship
              </p>
            </div>

            {/* Specifications */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                Key Specifications
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span>💾</span>
                  </div>
                  <div>
                    <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>RAM</div>
                    <div className="text-gray-900" style={{ fontWeight: 600 }}>{product.specs.ram}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span>📦</span>
                  </div>
                  <div>
                    <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>Storage</div>
                    <div className="text-gray-900" style={{ fontWeight: 600 }}>{product.specs.storage}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <span>📷</span>
                  </div>
                  <div>
                    <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>Camera</div>
                    <div className="text-gray-900" style={{ fontWeight: 600 }}>{product.specs.camera}</div>
                  </div>
                </div>
                {product.specs.battery && (
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <span>🔋</span>
                    </div>
                    <div>
                      <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>Battery</div>
                      <div className="text-gray-900" style={{ fontWeight: 600 }}>{product.specs.battery}</div>
                    </div>
                  </div>
                )}
                {product.specs.processor && (
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <span>⚡</span>
                    </div>
                    <div>
                      <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>Processor</div>
                      <div className="text-gray-900" style={{ fontWeight: 600 }}>{product.specs.processor}</div>
                    </div>
                  </div>
                )}
                {product.specs.display && (
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <span>📱</span>
                    </div>
                    <div>
                      <div className="text-gray-600" style={{ fontSize: '0.875rem' }}>Display</div>
                      <div className="text-gray-900" style={{ fontWeight: 600 }}>{product.specs.display}</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-gray-900 mb-4" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                  Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sticky bottom-0 bg-white p-6 rounded-xl shadow-lg border-2 border-gray-200">
              <button
                onClick={handleCallNow}
                className="flex-1 flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span style={{ fontWeight: 700 }}>Call Now</span>
              </button>
              <button
                onClick={handleWhatsAppOrder}
                className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white px-8 py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span style={{ fontWeight: 700 }}>WhatsApp Order</span>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="text-gray-900 mb-8" style={{ fontSize: '2rem', fontWeight: 700 }}>
            Similar Phones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map((similar) => (
              <motion.div
                key={similar.id}
                whileHover={{ y: -5 }}
                onClick={() => onViewMore(similar)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden"
              >
                <ImageWithFallback
                  src={similar.image}
                  alt={similar.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-[#1E3A8A] mb-1" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                    {similar.brand}
                  </div>
                  <h3 className="text-gray-900 mb-2" style={{ fontWeight: 600 }}>
                    {similar.name}
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[#1E3A8A]" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
                      ₹{similar.price.toLocaleString('en-IN')}
                    </span>
                    {similar.originalPrice && (
                      <span className="text-gray-400 line-through" style={{ fontSize: '0.875rem' }}>
                        ₹{similar.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
