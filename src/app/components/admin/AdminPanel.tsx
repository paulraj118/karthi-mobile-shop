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
  Plus
} from 'lucide-react';
import { ProductManager } from './ProductManager';

interface AdminPanelProps {
  onLogout: () => void;
}

type AdminTab = 'dashboard' | 'products' | 'settings';

export function AdminPanel({ onLogout }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<AdminTab>('products');

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
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as AdminTab)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' 
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

        {activeTab === 'products' ? (
          <ProductManager />
        ) : (
          <div className="bg-white rounded-[2rem] p-12 text-center border-2 border-dashed border-gray-200">
            <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400">Dashboard Features Coming Soon</h3>
            <p className="text-gray-300 mt-2">Charts and statistics modules are under preparation.</p>
          </div>
        )}
      </main>
    </div>
  );
}
