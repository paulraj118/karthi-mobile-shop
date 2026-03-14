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
import { ProductScanner } from './components/ProductScanner';
import { AnimatePresence } from 'motion/react';
import { ProductProvider } from './context/ProductContext';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminPanel } from './components/admin/AdminPanel';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [scanningProduct, setScanningProduct] = useState<Product | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (selectedProduct) {
    return (
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onViewMore={setSelectedProduct}
      />
    );
  }

  if (showAdmin) {
    if (!isLoggedIn) {
      return (
        <AdminLogin 
          onLogin={() => setIsLoggedIn(true)} 
          onBack={() => setShowAdmin(false)} 
        />
      );
    }
    return (
      <ProductProvider>
        <AdminPanel 
          onLogout={() => {
            setIsLoggedIn(false);
            setShowAdmin(false);
          }} 
          onHome={() => setShowAdmin(false)}
        />
      </ProductProvider>
    );
  }

  return (
    <ProductProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onAdminClick={() => setShowAdmin(true)} />
        <main>
          <HeroSection />
          <BrandShowcase onBrandClick={setSelectedBrand} />
          <ProductsShowcase
            onProductClick={setSelectedProduct}
            onScanClick={setScanningProduct}
            selectedBrand={selectedBrand}
            onClearBrand={() => setSelectedBrand(null)}
          />
          <FeaturedMobiles onProductClick={setSelectedProduct} />
          <OffersSection />
          <ShopLocation />
          <ContactSection />
        </main>
        <Footer onAdminClick={() => setShowAdmin(true)} />
        <FloatingActions />
        
        <AnimatePresence>
          {scanningProduct && (
            <ProductScanner 
              product={scanningProduct} 
              onClose={() => setScanningProduct(null)} 
              onViewDetails={(p) => {
                setScanningProduct(null);
                setSelectedProduct(p);
              }} 
            />
          )}
        </AnimatePresence>
      </div>
    </ProductProvider>
  );
}
