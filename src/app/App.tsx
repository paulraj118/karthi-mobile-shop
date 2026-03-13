import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BrandShowcase } from './components/BrandShowcase';
import { ProductsShowcase, type Product } from './components/ProductsShowcase';
import { FeaturedMobiles } from './components/FeaturedMobiles';
import { OffersSection } from './components/OffersSection';
import { ShopLocation } from './components/ShopLocation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetail } from './components/ProductDetail';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onViewMore={setSelectedProduct}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <BrandShowcase onBrandClick={setSelectedBrand} />
        <ProductsShowcase
          onProductClick={setSelectedProduct}
          selectedBrand={selectedBrand}
          onClearBrand={() => setSelectedBrand(null)}
        />
        <FeaturedMobiles onProductClick={setSelectedProduct} />
        <OffersSection />
        <ShopLocation />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
