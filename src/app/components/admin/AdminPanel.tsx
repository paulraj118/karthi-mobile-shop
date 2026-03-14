import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Package, 
  Settings, 
  LogOut, 
  Smartphone,
  TrendingUp,
  BarChart3,
  Plus,
  Home
} from 'lucide-react';
import { ProductManager } from './ProductManager';
import { useProducts } from '../../context/ProductContext';

interface AdminPanelProps {
  onLogout: () => void;
  onHome: () => void;
}

type AdminTab = 'dashboard' | 'products' | 'settings';

export function AdminPanel({ onLogout, onHome }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<AdminTab>('products');
  const { products, resetToDefault } = useProducts();

  const menuItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white flex flex-col p-6 fixed h-full z-50">
        <div className="flex items-center gap-3 mb-12 px-2">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="font-bold text-lg tracking-tight">Admin Portal</div>
        </div>

        <nav className="flex-1 space-y-2">
          <button
            onClick={onHome}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-400 hover:text-white hover:bg-white/5 mb-4"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium text-sm">View Website</span>
          </button>

          <div className="h-px bg-white/10 my-4 mx-2" />

          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as AdminTab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <button 
          onClick={onLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:text-red-300 hover:bg-red-400/10 transition-all mt-auto"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight capitalize">{activeTab}</h2>
            <p className="text-gray-500 text-sm mt-1">Manage your storefront and data</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
               <span className="text-xs font-semibold text-gray-600">Site Online</span>
            </div>
          </div>
        </header>

        {activeTab === 'products' && <ProductManager />}
        
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-indigo-600 rounded-[2rem] p-8 text-white shadow-xl">
                 <h4 className="text-indigo-100 text-xs font-bold uppercase tracking-wider mb-2">Total Inventory</h4>
                 <div className="text-5xl font-bold">{products.length}</div>
                 <div className="mt-4 flex items-center gap-2 text-indigo-200 text-sm">
                   <Package className="w-4 h-4" /> Items in database
                 </div>
              </div>
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                 <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Top Brand</h4>
                 <div className="text-3xl font-bold text-gray-900">Apple</div>
                 <p className="text-gray-500 text-sm mt-1">42% of collection</p>
              </div>
              <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
                 <h4 className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-2">Site Visibility</h4>
                 <div className="text-3xl font-bold text-green-500 text-shadow-sm">Public</div>
                 <p className="text-gray-500 text-sm mt-1">Live Storefront</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="bg-white rounded-[2rem] p-12 border border-gray-100 shadow-sm max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">System Settings</h3>
            <div className="space-y-8">
              <div className="flex items-center justify-between p-6 bg-gray-50 rounded-2xl">
                <div>
                  <div className="font-bold text-gray-900">Reset Inventory</div>
                  <p className="text-gray-500 text-sm">Restore the original products list</p>
                </div>
                <button 
                  onClick={() => { if(window.confirm('Reset all products to default?')) resetToDefault(); }}
                  className="bg-white border border-gray-200 text-red-500 px-6 py-2 rounded-xl font-bold hover:bg-red-50 transition-all text-sm"
                >
                  Reset
                </button>
              </div>
              <p className="text-gray-400 text-xs font-medium px-2 italic">More administrative controls will be added soon.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
