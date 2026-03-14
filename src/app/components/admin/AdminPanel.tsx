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
  Home,
  Database,
  ShieldCheck,
  EyeOff,
  Download,
  Activity
} from 'lucide-react';
import { ProductManager } from './ProductManager';
import { useProducts } from '../../context/ProductContext';
import { 
  ResponsiveContainer, 
  BarChart, Bar, 
  PieChart, Pie, Cell, 
  AreaChart, Area, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';

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

        {activeTab === 'dashboard' && (
          <div className="space-y-8 pb-12">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl">
                 <h4 className="text-indigo-100 text-[10px] font-bold uppercase tracking-wider mb-2">Total Items</h4>
                 <div className="text-4xl font-bold">{products.length}</div>
                 <div className="mt-4 flex items-center gap-2 text-indigo-200 text-xs">
                   <Package className="w-4 h-4" /> Live in Inventory
                 </div>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                 <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Total Value</h4>
                 <div className="text-2xl font-bold text-gray-900">₹{(products.reduce((acc, p) => acc + p.price, 0) / 100000).toFixed(1)}L</div>
                 <p className="text-green-500 text-[10px] mt-1 font-bold">+12% from last month</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                 <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Active Orders</h4>
                 <div className="text-2xl font-bold text-gray-900">42</div>
                 <p className="text-gray-500 text-[10px] mt-1 font-medium">12 pending delivery</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                 <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-2">Avg. Price</h4>
                 <div className="text-2xl font-bold text-gray-900">₹{(products.reduce((acc, p) => acc + p.price, 0) / products.length / 1000).toFixed(1)}K</div>
                 <p className="text-gray-500 text-[10px] mt-1 font-medium">Across all brands</p>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Brand Distribution - Pie Chart */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-gray-900">Brand Distribution</h3>
                  <div className="bg-indigo-50 text-indigo-600 p-2 rounded-lg"><Activity className="w-4 h-4" /></div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={Object.entries(products.reduce((acc: any, p) => {
                          acc[p.brand] = (acc[p.brand] || 0) + 1;
                          return acc;
                        }, {})).map(([name, value]) => ({ name, value }))}
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {['#6366F1', '#06B6D4', '#8B5CF6', '#EC4899', '#F59E0B'].map((color, index) => (
                          <Cell key={`cell-${index}`} fill={color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                      />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Price Ranges - Bar Chart */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-gray-900">Price Range Analysis</h3>
                  <div className="bg-green-50 text-green-600 p-2 rounded-lg"><Activity className="w-4 h-4" /></div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={[
                      { range: 'Under 20K', count: products.filter(p => p.price < 20000).length },
                      { range: '20K-50K', count: products.filter(p => p.price >= 20000 && p.price < 50000).length },
                      { range: '50K-1L', count: products.filter(p => p.price >= 50000 && p.price < 100000).length },
                      { range: 'Premium', count: products.filter(p => p.price >= 100000).length },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis dataKey="range" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                      <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                      <Bar dataKey="count" fill="#10B981" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Stock Trends - Area Chart */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-gray-900">Inventory Growth</h3>
                  <div className="bg-orange-50 text-orange-600 p-2 rounded-lg"><Activity className="w-4 h-4" /></div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={[
                      { month: 'Jan', stock: 12 },
                      { month: 'Feb', stock: 18 },
                      { month: 'Mar', stock: 25 },
                      { month: 'Apr', stock: products.length },
                    ]}>
                      <defs>
                        <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F97316" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                      <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                      <Area type="monotone" dataKey="stock" stroke="#F97316" fillOpacity={1} fill="url(#colorStock)" strokeWidth={3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Inventory Categories - Stacked Bar */}
              <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-gray-900">Stock Availability</h3>
                  <div className="bg-blue-50 text-blue-600 p-2 rounded-lg"><Activity className="w-4 h-4" /></div>
                </div>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart layout="vertical" data={[
                      { name: 'In Stock', value: 85 },
                      { name: 'Low Stock', value: 10 },
                      { name: 'Out of Stock', value: 5 },
                    ]}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#9CA3AF' }} />
                      <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                      <Bar dataKey="value" fill="#3B82F6" radius={[0, 6, 6, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-600" />
                Data Management
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="font-bold text-sm text-gray-900">Reset Inventory</div>
                    <p className="text-gray-400 text-xs text-shadow-sm">Restore the original products list</p>
                  </div>
                  <button 
                    onClick={() => { if(window.confirm('Reset all products to default?')) resetToDefault(); }}
                    className="bg-white border border-gray-200 text-red-500 px-4 py-2 rounded-xl font-bold hover:bg-red-50 transition-all text-xs"
                  >
                    Reset
                  </button>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="font-bold text-sm text-gray-900">Cloud Backup</div>
                    <p className="text-gray-400 text-xs text-shadow-sm">Last backup: 2小时前</p>
                  </div>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-indigo-700 transition-all text-xs flex items-center gap-2">
                    <Download className="w-3 h-3" /> Backup
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                Security & Visibility
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="font-bold text-sm text-gray-900">Maintenance Mode</div>
                    <p className="text-gray-400 text-xs text-shadow-sm">Block public access to storefront</p>
                  </div>
                  <div className="w-12 h-6 bg-gray-200 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm shadow-blue-500/10 transition-all" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div>
                    <div className="font-bold text-sm text-gray-900">Hide Out of Stock</div>
                    <p className="text-gray-400 text-xs text-shadow-sm">Toggle visibility for sold out items</p>
                  </div>
                  <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm shadow-indigo-500/10 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
