import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, ShoppingBag, MapPin, CreditCard, 
  Settings, LogOut, Camera, Edit2, 
  ChevronRight, CheckCircle2, Trash2,
  Plus, Wallet, Star, Shield, Bell
} from 'lucide-react';
import { cn } from '../../../utils/helpers';

// --- Mock Data ---
const USER_INFO = {
  name: "Shawn L.",
  email: "shawn.l@example.com",
  phone: "+1 202 555 0191",
  avatar: "https://placehold.co/200x200/e17055/ffffff?text=SL",
  points: 2450,
  level: "Gold Foodie"
};

const ORDER_HISTORY = [
  { id: "CK-8821", date: "Today, 1:30 PM", restaurant: "Mama Put Kitchen", items: "Jollof Rice, Plantain", total: 18.50, status: "Delivered", img: "https://placehold.co/100x100/e17055/fff?text=Rice" },
  { id: "CK-8810", date: "Yesterday", restaurant: "Burger King", items: "Double Whopper Meal", total: 22.00, status: "Delivered", img: "https://placehold.co/100x100/e67e22/fff?text=Burger" },
  { id: "CK-8750", date: "Nov 20", restaurant: "Green Leaf Grocers", items: "Vegetables, Oil, Rice", total: 45.00, status: "Cancelled", img: "https://placehold.co/100x100/5caf90/fff?text=Grocery" },
];

const SAVED_ADDRESSES = [
  { id: 1, label: "Home", address: "12B Victoria Island, Lagos", type: "home" },
  { id: 2, label: "Office", address: "Tech Hub, Yaba, Lagos", type: "work" },
];

const SAVED_CARDS = [
  { id: 1, type: "Mastercard", last4: "4242", expiry: "12/25" },
  { id: 2, type: "Visa", last4: "8899", expiry: "08/26" },
];

// --- Components ---

const TabButton = ({ icon: Icon, label, active, onClick }: any) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-200 group",
      active 
        ? "bg-[#4b5966] text-white shadow-lg shadow-[#4b5966]/20" 
        : "text-[#777] hover:bg-white hover:text-[#4b5966]"
    )}
  >
    <Icon size={20} className={cn(active ? "text-[#5caf90]" : "text-gray-400 group-hover:text-[#4b5966]")} />
    <span className="font-bold text-sm">{label}</span>
    {active && <ChevronRight size={16} className="ml-auto opacity-50" />}
  </button>
);

const LoggedUserProfilePageLayout = () => {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">

      <main className="container mx-auto px-4 py-10">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold font-manrope text-[#4b5966]">My Account</h1>
            <p className="text-sm text-[#777]">Manage your profile, orders, and preferences.</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm flex items-center gap-2 text-xs font-bold text-[#777]">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Last login: Today, 9:41 AM
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Left Sidebar --- */}
          <div className="lg:w-1/4 flex-shrink-0">
            
            {/* User Card */}
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm mb-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-brand-orange to-[#e17055]"></div>
              
              <div className="relative z-10 mt-4">
                <div className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md relative">
                  <img src={USER_INFO.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
                  <button className="absolute bottom-0 right-0 bg-[#4b5966] text-white p-1.5 rounded-full hover:bg-brand-orange transition-colors">
                    <Camera size={12} />
                  </button>
                </div>
                <h2 className="text-lg font-bold mt-3 text-[#4b5966]">{USER_INFO.name}</h2>
                <p className="text-xs text-[#777]">{USER_INFO.email}</p>
                
                <div className="mt-4 bg-[#fff6ec] rounded-xl p-3 flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider">Points</p>
                    <p className="text-lg font-extrabold text-[#4b5966]">{USER_INFO.points}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs font-bold text-[#e67e22]">
                      <Star size={12} fill="currentColor" /> {USER_INFO.level}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <TabButton icon={User} label="Personal Info" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
              <TabButton icon={ShoppingBag} label="Orders" active={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
              <TabButton icon={Wallet} label="Wallet & Cards" active={activeTab === 'wallet'} onClick={() => setActiveTab('wallet')} />
              <TabButton icon={MapPin} label="Addresses" active={activeTab === 'address'} onClick={() => setActiveTab('address')} />
              <TabButton icon={Settings} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
              
              <div className="pt-6 mt-6 border-t border-gray-200">
                <button className="w-full flex items-center gap-4 px-6 py-3 rounded-2xl text-red-500 hover:bg-red-50 transition-colors font-bold text-sm">
                  <LogOut size={20} /> Sign Out
                </button>
              </div>
            </nav>
          </div>

          {/* --- Right Content Area --- */}
          <div className="lg:w-3/4">
            <AnimatePresence mode='wait'>
              
              {/* VIEW: PERSONAL INFO */}
              {activeTab === 'profile' && (
                <motion.div 
                  key="profile"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-[#4b5966]">Personal Information</h2>
                    <button className="text-sm text-brand-orange font-bold flex items-center gap-1 hover:underline">
                      <Edit2 size={14} /> Edit Profile
                    </button>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#4b5966] uppercase ml-1">Full Name</label>
                      <input type="text" defaultValue={USER_INFO.name} className="w-full px-4 py-3 bg-[#f8f8fb] rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-brand-orange/10" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#4b5966] uppercase ml-1">Email Address</label>
                      <input type="email" defaultValue={USER_INFO.email} className="w-full px-4 py-3 bg-[#f8f8fb] rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-brand-orange/10" disabled />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#4b5966] uppercase ml-1">Phone Number</label>
                      <input type="tel" defaultValue={USER_INFO.phone} className="w-full px-4 py-3 bg-[#f8f8fb] rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-brand-orange/10" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#4b5966] uppercase ml-1">Date of Birth</label>
                      <input type="date" className="w-full px-4 py-3 bg-[#f8f8fb] rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-brand-orange/10" />
                    </div>
                  </form>

                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <button className="px-8 py-3 bg-[#4b5966] text-white rounded-xl font-bold text-sm hover:bg-brand-orange transition-colors shadow-lg">
                      Save Changes
                    </button>
                  </div>
                </motion.div>
              )}

              {/* VIEW: ORDERS */}
              {activeTab === 'orders' && (
                <motion.div 
                  key="orders"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-[#4b5966] mb-4">Recent Orders</h2>
                  
                  {ORDER_HISTORY.map((order) => (
                    <div key={order.id} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 items-center">
                      <img src={order.img} alt="Food" className="w-20 h-20 rounded-2xl object-cover bg-gray-100" />
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                          <h3 className="font-bold text-[#4b5966] text-lg">{order.restaurant}</h3>
                          <span className={cn(
                            "text-xs font-bold px-3 py-1 rounded-full w-fit mx-auto md:mx-0",
                            order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                          )}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-[#777] mb-1">{order.items}</p>
                        <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-gray-400">
                          <span>{order.date}</span>
                          <span>•</span>
                          <span>{order.id}</span>
                        </div>
                      </div>

                      <div className="text-center md:text-right">
                        <p className="text-xl font-extrabold text-[#4b5966] mb-3">${order.total.toFixed(2)}</p>
                        <button className="px-6 py-2 border border-brand-orange text-brand-orange rounded-xl text-sm font-bold hover:bg-brand-orange hover:text-white transition-colors flex items-center gap-2">
                          <ShoppingBag size={16} /> Reorder
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* VIEW: WALLET & CARDS */}
              {activeTab === 'wallet' && (
                <motion.div 
                  key="wallet"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="space-y-8"
                >
                  {/* Wallet Balance */}
                  <div className="bg-gradient-to-br from-[#4b5966] to-[#2d3436] p-8 rounded-[2.5rem] text-white relative overflow-hidden shadow-xl">
                    <div className="relative z-10">
                      <p className="text-gray-300 text-sm font-bold mb-1 uppercase tracking-wider">Available Balance</p>
                      <h2 className="text-4xl font-extrabold font-manrope mb-6">$865.20</h2>
                      <div className="flex gap-4">
                        <button className="px-6 py-2 bg-[#5caf90] rounded-xl text-sm font-bold hover:bg-white hover:text-[#5caf90] transition-colors">Top Up</button>
                        <button className="px-6 py-2 bg-white/10 border border-white/20 rounded-xl text-sm font-bold hover:bg-white/20 transition-colors">Transaction History</button>
                      </div>
                    </div>
                    <Wallet size={120} className="absolute -bottom-4 -right-4 opacity-10" />
                  </div>

                  {/* Saved Cards */}
                  <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-lg text-[#4b5966]">Saved Cards</h3>
                      <button className="w-8 h-8 bg-[#f8f8fb] rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors">
                        <Plus size={18} />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {SAVED_CARDS.map((card) => (
                        <div key={card.id} className="border border-gray-200 p-4 rounded-2xl flex items-center justify-between group hover:border-[#5caf90] transition-colors cursor-pointer">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                              <CreditCard size={16} className="text-[#4b5966]" />
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#4b5966]">{card.type} •••• {card.last4}</p>
                              <p className="text-xs text-gray-400">Expires {card.expiry}</p>
                            </div>
                          </div>
                          <button className="text-gray-300 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* VIEW: ADDRESSES */}
              {activeTab === 'address' && (
                <motion.div 
                  key="address"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm"
                >
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold text-[#4b5966]">Delivery Addresses</h2>
                    <button className="px-4 py-2 bg-[#f8f8fb] text-[#4b5966] rounded-xl text-sm font-bold hover:bg-brand-orange hover:text-white transition-colors flex items-center gap-2">
                      <Plus size={16} /> Add New
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SAVED_ADDRESSES.map((addr) => (
                      <div key={addr.id} className="border-2 border-gray-50 p-6 rounded-3xl relative hover:border-brand-orange/30 transition-colors group">
                        {addr.type === 'home' && <div className="absolute top-4 right-4 text-[#5caf90]"><CheckCircle2 size={20} /></div>}
                        
                        <div className="w-10 h-10 bg-[#fff6ec] rounded-full flex items-center justify-center text-brand-orange mb-4">
                          <MapPin size={20} />
                        </div>
                        <h4 className="font-bold text-[#4b5966] mb-1">{addr.label}</h4>
                        <p className="text-sm text-[#777] mb-6 h-10">{addr.address}</p>
                        
                        <div className="flex gap-3">
                          <button className="flex-1 py-2 bg-[#f8f8fb] rounded-lg text-xs font-bold text-[#4b5966] hover:bg-[#4b5966] hover:text-white transition-colors">Edit</button>
                          <button className="px-3 py-2 bg-red-50 rounded-lg text-red-500 hover:bg-red-500 hover:text-white transition-colors"><Trash2 size={14} /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* VIEW: SETTINGS */}
              {activeTab === 'settings' && (
                <motion.div 
                  key="settings"
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm"
                >
                  <h2 className="text-xl font-bold text-[#4b5966] mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    {/* Notifications */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><Bell size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[#4b5966] text-sm">Push Notifications</h4>
                          <p className="text-xs text-[#777]">Receive updates about your order status.</p>
                        </div>
                      </div>
                      <div className="w-12 h-6 bg-[#5caf90] rounded-full relative cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 shadow-sm"></div>
                      </div>
                    </div>

                    {/* Password */}
                    <div className="flex items-center justify-between py-4 border-b border-gray-50">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-orange-50 text-brand-orange rounded-lg"><Shield size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[#4b5966] text-sm">Change Password</h4>
                          <p className="text-xs text-[#777]">Last changed: 3 months ago</p>
                        </div>
                      </div>
                      <button className="text-xs font-bold text-[#4b5966] border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50">Update</button>
                    </div>

                    {/* Delete Account */}
                    <div className="flex items-center justify-between py-4">
                      <div className="flex items-center gap-4">
                        <div className="p-2 bg-red-50 text-red-500 rounded-lg"><Trash2 size={20} /></div>
                        <div>
                          <h4 className="font-bold text-[#4b5966] text-sm">Delete Account</h4>
                          <p className="text-xs text-[#777]">Permanently remove your data.</p>
                        </div>
                      </div>
                      <button className="text-xs font-bold text-red-500 hover:underline">Deactivate</button>
                    </div>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

        </div>
      </main>
    </div>
  );
};

export default LoggedUserProfilePageLayout;