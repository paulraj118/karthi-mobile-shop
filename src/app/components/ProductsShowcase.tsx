import { motion } from 'motion/react';
import { MessageCircle, Eye, Star, X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import iphone15ProMaxImg from '../../assets/iphone_15_pro_max.png';
import samsungS24UltraImg from '../../assets/samsung_s24_ultra.png';
import redmiNote13ProImg from '../../assets/redmi_note_13_pro.png';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  specs: {
    ram: string;
    storage: string;
    camera: string;
    battery?: string;
    processor?: string;
    display?: string;
  };
  colors?: string[];
  features?: string[];
  inStock: boolean;
  trending?: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 159900,
    originalPrice: 174900,
    image: iphone15ProMaxImg,
    rating: 4.9,
    specs: { ram: '8GB', storage: '256GB', camera: '48MP', battery: '4422mAh', processor: 'A17 Pro', display: '6.7" OLED' },
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    features: ['5G', 'Face ID', 'Ceramic Shield', 'MagSafe'],
    inStock: true,
    trending: true,
  },
  {
    id: '2',
    name: 'iPhone 15',
    brand: 'Apple',
    price: 79900,
    originalPrice: 89900,
    image: iphone15ProMaxImg,
    rating: 4.8,
    specs: { ram: '6GB', storage: '128GB', camera: '48MP', battery: '3349mAh', processor: 'A16 Bionic', display: '6.1" OLED' },
    colors: ['Black', 'Blue', 'Green', 'Yellow', 'Pink'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 129999,
    originalPrice: 144999,
    image: samsungS24UltraImg,
    rating: 4.8,
    specs: { ram: '12GB', storage: '256GB', camera: '200MP', battery: '5000mAh', processor: 'Snapdragon 8 Gen 3', display: '6.8" AMOLED' },
    colors: ['Titanium Gray', 'Titanium Black', 'Titanium Violet'],
    features: ['S Pen', '5G', 'AI Features'],
    inStock: true,
    trending: true,
  },
  {
    id: '4',
    name: 'Galaxy S23',
    brand: 'Samsung',
    price: 74999,
    originalPrice: 84999,
    image: samsungS24UltraImg,
    rating: 4.7,
    specs: { ram: '8GB', storage: '128GB', camera: '50MP', battery: '3900mAh', processor: 'Snapdragon 8 Gen 2', display: '6.1" AMOLED' },
    inStock: true,
  },
  {
    id: '5',
    name: 'Redmi Note 13 Pro',
    brand: 'Xiaomi',
    price: 23999,
    originalPrice: 26999,
    image: redmiNote13ProImg,
    rating: 4.5,
    specs: { ram: '8GB', storage: '128GB', camera: '200MP', battery: '5000mAh', processor: 'Snapdragon 7s Gen 2', display: '6.67" AMOLED' },
    colors: ['Midnight Black', 'Ocean Blue', 'Arctic White'],
    inStock: true,
    trending: true,
  },
  {
    id: '6',
    name: 'Redmi 13C',
    brand: 'Xiaomi',
    price: 9999,
    originalPrice: 11999,
    image: redmiNote13ProImg,
    rating: 4.3,
    specs: { ram: '6GB', storage: '128GB', camera: '50MP', battery: '5000mAh', processor: 'MediaTek Helio G85', display: '6.74" HD+' },
    inStock: true,
  },
  {
    id: '7',
    name: 'Realme 11 Pro+',
    brand: 'Realme',
    price: 27999,
    originalPrice: 31999,
    image: redmiNote13ProImg,
    rating: 4.6,
    specs: { ram: '12GB', storage: '256GB', camera: '200MP', battery: '5000mAh', processor: 'Dimensity 7050', display: '6.7" AMOLED' },
    colors: ['Sunrise Beige', 'Oasis Green', 'Astral Black'],
    inStock: true,
  },
  {
    id: '8',
    name: 'Realme Narzo 60',
    brand: 'Realme',
    price: 17999,
    originalPrice: 20999,
    image: redmiNote13ProImg,
    rating: 4.4,
    specs: { ram: '8GB', storage: '128GB', camera: '64MP', battery: '5000mAh', processor: 'Dimensity 6020', display: '6.43" AMOLED' },
    inStock: true,
  },
  {
    id: '9',
    name: 'Vivo V29',
    brand: 'Vivo',
    price: 32999,
    originalPrice: 36999,
    image: redmiNote13ProImg,
    rating: 4.6,
    specs: { ram: '12GB', storage: '256GB', camera: '50MP', battery: '4600mAh', processor: 'Snapdragon 778G', display: '6.78" AMOLED' },
    colors: ['Peak Blue', 'Majestic Red'],
    inStock: true,
  },
  {
    id: '10',
    name: 'Vivo Y100',
    brand: 'Vivo',
    price: 24999,
    originalPrice: 27999,
    image: redmiNote13ProImg,
    rating: 4.4,
    specs: { ram: '8GB', storage: '128GB', camera: '50MP', battery: '4500mAh', processor: 'Snapdragon 685', display: '6.38" AMOLED' },
    inStock: true,
  },
  {
    id: '11',
    name: 'OnePlus 11',
    brand: 'OnePlus',
    price: 56999,
    originalPrice: 61999,
    image: samsungS24UltraImg,
    rating: 4.7,
    specs: { ram: '16GB', storage: '256GB', camera: '50MP', battery: '5000mAh', processor: 'Snapdragon 8 Gen 2', display: '6.7" AMOLED' },
    colors: ['Titan Black', 'Eternal Green'],
    inStock: true,
    trending: true,
  },
  {
    id: '12',
    name: 'Oppo Reno 10 Pro',
    brand: 'Oppo',
    price: 39999,
    originalPrice: 44999,
    image: redmiNote13ProImg,
    rating: 4.5,
    specs: { ram: '12GB', storage: '256GB', camera: '50MP', battery: '4600mAh', processor: 'Snapdragon 778G', display: '6.7" AMOLED' },
    inStock: true,
  },
];

interface ProductsShowcaseProps {
  onProductClick: (product: Product) => void;
  selectedBrand: string | null;
  onClearBrand: () => void;
}

export function ProductsShowcase({ onProductClick, selectedBrand, onClearBrand }: ProductsShowcaseProps) {
  const whatsappNumber = '8012424220';

  const handleWhatsAppClick = (product: Product) => {
    const message = `Hi! I'm interested in ${product.name} (${product.specs.ram}/${product.specs.storage}). Price: ₹${product.price.toLocaleString('en-IN')}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredProducts = selectedBrand
    ? products.filter((p) => p.brand === selectedBrand)
    : products;

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden group"
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
                  <span className="text-[#1E3A8A]" style={{ fontSize: '0.875rem', fontWeight: 600 }}>
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
                    <span className="text-[#1E3A8A]" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
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
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#1E40AF] text-white py-2.5 rounded-lg transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>View</span>
                  </button>
                  <button
                    onClick={() => handleWhatsAppClick(product)}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA59] text-white py-2.5 rounded-lg transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Chat</span>
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
