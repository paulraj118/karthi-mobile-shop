import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Package,
  CheckCircle2,
  X,
  Smartphone,
  AlertTriangle
} from 'lucide-react';
import { useProducts } from '../../context/ProductContext';
import type { Product } from '../../data/products';

export function ProductManager() {
  const { products, deleteProduct, addProduct, updateProduct } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete ${name}?`)) {
      deleteProduct(id);
    }
  };

  const handleOpenEdit = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-500/20">
          <div className="flex justify-between items-start mb-4">
            <Package className="w-8 h-8 opacity-40" />
            <TrendingUp className="w-5 h-5 text-blue-200" />
          </div>
          <div className="text-4xl font-bold mb-1">{products.length}</div>
          <div className="text-blue-100 text-sm font-medium">Total Inventory</div>
        </div>
        
        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="bg-green-100 p-2 rounded-xl">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="text-3xl font-bold text-gray-900">{products.filter(p => p.inStock).length}</div>
          <div className="text-gray-500 text-sm font-medium">In Stock Items</div>
        </div>

        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col justify-center">
          <button 
            onClick={() => { setEditingProduct(null); setIsModalOpen(true); }}
            className="group flex items-center justify-center gap-3 bg-gray-900 text-white rounded-2xl py-4 font-bold hover:bg-gray-800 transition-all active:scale-95"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            Add New Product
          </button>
        </div>
      </div>

      {/* Product List Table */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-50 flex justify-between items-center gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text"
              placeholder="Filter by name or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-50 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all border border-transparent focus:border-blue-500/10"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 text-gray-500 text-[10px] uppercase tracking-widest font-bold">
                <th className="px-8 py-4">Product</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Price</th>
                <th className="px-8 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <motion.tr 
                    key={product.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="hover:bg-gray-50/30 transition-colors group"
                  >
                    <td className="px-8 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 p-2 flex-shrink-0">
                          <img src={product.image} alt="" className="w-full h-full object-contain" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{product.name}</div>
                          <div className="text-gray-400 text-xs">{product.brand}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-4">
                      {product.inStock ? (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-wider">
                           <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          Out of Stock
                        </span>
                      )}
                    </td>
                    <td className="px-8 py-4">
                      <div className="font-bold text-gray-900 text-sm">₹{product.price.toLocaleString()}</div>
                    </td>
                    <td className="px-8 py-4 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button 
                          onClick={() => handleOpenEdit(product)}
                          className="p-2 rounded-lg bg-gray-100 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDelete(product.id, product.name)}
                          className="p-2 rounded-lg bg-gray-100 text-gray-400 hover:bg-red-600 hover:text-white transition-all"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
          {filteredProducts.length === 0 && (
            <div className="p-12 text-center text-gray-400 text-sm italic">
               No products found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <ProductModal 
            product={editingProduct} 
            onClose={() => setIsModalOpen(false)}
            onSave={(p) => {
              if (editingProduct) updateProduct(p);
              else addProduct(p);
              setIsModalOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

function ProductModal({ product, onClose, onSave }: { product: Product | null, onClose: () => void, onSave: (p: Product) => void }) {
  const [formData, setFormData] = useState<Product>(product || {
    id: `prod-${Date.now()}`,
    name: '',
    brand: '',
    price: 0,
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    rating: 4.5,
    specs: { ram: '8GB', storage: '128GB', camera: '50MP' },
    inStock: true
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
      />
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 20 }}
        className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden shadow-black/20"
      >
        <div className="p-8 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{product ? 'Edit Product' : 'Add New Product'}</h3>
            <p className="text-gray-500 text-xs">Fill in the details for the storefront</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-8 max-h-[70vh] overflow-y-auto space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Model Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-gray-50 border border-transparent focus:border-blue-500/20 rounded-xl px-4 py-3 text-sm transition-all focus:outline-none"
                placeholder="iPhone 15 Pro"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Brand</label>
              <select 
                value={formData.brand}
                onChange={(e) => setFormData({...formData, brand: e.target.value})}
                className="w-full bg-gray-50 border border-transparent focus:border-blue-500/20 rounded-xl px-4 py-3 text-sm transition-all focus:outline-none"
              >
                <option value="">Select Brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="OnePlus">OnePlus</option>
                <option value="Xiaomi">Xiaomi</option>
                <option value="Vivo">Vivo</option>
                <option value="Realme">Realme</option>
                <option value="Motorola">Motorola</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Price (₹)</label>
              <input 
                type="number" 
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: parseInt(e.target.value) || 0})}
                className="w-full bg-gray-50 border border-transparent focus:border-blue-500/20 rounded-xl px-4 py-3 text-sm transition-all focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Stock Status</label>
              <div className="flex gap-4 pt-2">
                <button 
                  onClick={() => setFormData({...formData, inStock: true})}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${formData.inStock ? 'bg-green-500 text-white shadow-lg shadow-green-500/20' : 'bg-gray-100 text-gray-400'}`}
                >
                  IN STOCK
                </button>
                <button 
                  onClick={() => setFormData({...formData, inStock: false})}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${!formData.inStock ? 'bg-red-500 text-white shadow-lg shadow-red-500/20' : 'bg-gray-100 text-gray-400'}`}
                >
                  OUT OF STOCK
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Image URL</label>
            <input 
              type="text" 
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full bg-gray-50 border border-transparent focus:border-blue-500/20 rounded-xl px-4 py-3 text-sm transition-all focus:outline-none"
              placeholder="https://images.unsplash.com/..."
            />
          </div>

          <div className="pt-4 border-t border-gray-100">
             <h4 className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">Core Specifications</h4>
             <div className="grid grid-cols-3 gap-6">
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">RAM</label>
                 <input 
                    type="text" 
                    value={formData.specs.ram}
                    onChange={(e) => setFormData({...formData, specs: {...formData.specs, ram: e.target.value}})}
                    className="w-full bg-gray-50 border border-transparent focus:border-blue-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    placeholder="8GB"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Storage</label>
                 <input 
                    type="text" 
                    value={formData.specs.storage}
                    onChange={(e) => setFormData({...formData, specs: {...formData.specs, storage: e.target.value}})}
                    className="w-full bg-gray-50 border border-transparent focus:border-blue-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    placeholder="256GB"
                 />
               </div>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Camera</label>
                 <input 
                    type="text" 
                    value={formData.specs.camera}
                    onChange={(e) => setFormData({...formData, specs: {...formData.specs, camera: e.target.value}})}
                    className="w-full bg-gray-50 border border-transparent focus:border-blue-500/20 rounded-xl px-4 py-3 text-sm focus:outline-none"
                    placeholder="50MP Main"
                 />
               </div>
             </div>
          </div>
        </div>

        <div className="p-8 bg-gray-50/50 border-t border-gray-100 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 bg-white border border-gray-200 text-gray-600 font-bold py-4 rounded-2xl hover:bg-gray-100 transition-all text-sm"
          >
            Cancel
          </button>
          <button 
            onClick={() => onSave(formData)}
            className="flex-1 bg-gray-900 text-white font-bold py-4 rounded-2xl hover:bg-gray-800 shadow-xl shadow-black/10 transition-all text-sm"
          >
            {product ? 'Update Details' : 'Add to Collection'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
