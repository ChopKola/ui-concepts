import { useEffect, useState } from 'react';
import { 
  ChevronDown, 
  ShoppingBag, Heart, Wallet, MapPin, 
  ChevronRight, TrendingUp, ArrowUpRight
} from 'lucide-react';
import { cn } from '../../../utils/helpers';
import AdminStatCard from '../../../modules/user-specific/administrator/AdminStatCard';
import StatCard from '../../../modules/user-specific/customer/StatCard';

const AppUserDashboardPageLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(()=>{
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
  }, [])

  return (
    <div className={cn("pt-[100px] px-4 pb-10 transition-all duration-300", sidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        <div className="max-w-7xl mx-auto">
          
          {/* Breadcrumb / Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#4b5966] font-manrope">Dashboard</h1>
              <p className="text-sm text-[#777]">Welcome back, Shawn! Here's what's happening with your food.</p>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-gray-100 text-sm font-medium shadow-sm">
              <MapPin size={16} className="text-brand-orange" />
              <span>Delivering to: </span>
              <span className="font-bold text-[#4b5966]">Home (Lagos, NG)</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <AdminStatCard
              title="Wallet Balance" 
              value="$865.20" 
              trend="20.9%" 
              isPositive={true} 
              icon={Wallet} 
              colorClass="bg-brand-green" 
            />
            <StatCard 
              title="Total Orders" 
              value="124" 
              trend="5 Orders" 
              isPositive={true} 
              icon={ShoppingBag} 
              colorClass="bg-brand-orange" 
            />
            <StatCard 
              title="Total Spent" 
              value="$4,320" 
              trend="2.4%" 
              isPositive={false} 
              icon={TrendingUp} 
              colorClass="bg-[#4b5966]" 
            />
            <StatCard 
              title="Saved" 
              value="$125.00" 
              trend="12.5%" 
              isPositive={true} 
              icon={Heart} 
              colorClass="bg-[#e17055]" 
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Column (2/3 width) */}
            <div className="xl:col-span-2 space-y-8">
              
              {/* Active Order Banner */}
              <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-orange"></div>
                <div className="w-20 h-20 bg-[#fff6ec] rounded-2xl flex items-center justify-center flex-shrink-0">
                  <div className="text-4xl">🛵</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                    <h3 className="text-lg font-bold text-[#4b5966]">Order In Progress</h3>
                    <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Arriving Soon</span>
                  </div>
                  <p className="text-sm text-[#777] mb-2">Your order from <span className="font-bold text-[#4b5966]">Mama Put Kitchen</span> is on the way.</p>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-2 overflow-hidden">
                    <div className="bg-brand-orange h-2 rounded-full w-[75%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1 font-medium">
                    <span>Preparing</span>
                    <span>On the way</span>
                    <span>Delivered</span>
                  </div>
                </div>
                <button className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-bold hover:bg-[#f8f8fb] hover:border-brand-orange hover:text-brand-orange transition-all">
                  Track Order
                </button>
              </div>

              {/* Recent Orders Table */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-[#4b5966]">Recent Orders</h3>
                  <button className="text-sm text-brand-orange font-bold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#f8f8fb] text-[#4b5966]">
                      <tr>
                        <th className="px-6 py-4 font-bold rounded-tl-3xl">Order ID</th>
                        <th className="px-6 py-4 font-bold">Restaurant</th>
                        <th className="px-6 py-4 font-bold">Date</th>
                        <th className="px-6 py-4 font-bold">Amount</th>
                        <th className="px-6 py-4 font-bold rounded-tr-3xl">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[1, 2, 3, 4].map((i) => (
                        <tr key={i} className="hover:bg-[#f8f8fb]/50 transition-colors">
                          <td className="px-6 py-4 font-medium text-brand-orange">#CK-284{i}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={`https://placehold.co/40x40/e${i}e${i}e${i}/ffffff?text=R`} className="w-8 h-8 rounded-lg" alt="Rest" />
                              <span className="font-bold text-[#4b5966]">Tasty Pot</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[#777]">24 May, 2025</td>
                          <td className="px-6 py-4 font-bold text-[#4b5966]">$24.00</td>
                          <td className="px-6 py-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
                              Delivered
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

            {/* Right Column (1/3 width) */}
            <div className="space-y-8">
              
              {/* Trending / Recommendations */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-[#4b5966]">Trending Now</h3>
                  <div className="flex gap-1">
                    <button className="p-1 rounded bg-gray-100 hover:bg-brand-orange hover:text-white transition-colors"><ChevronRight size={14} className="rotate-180"/></button>
                    <button className="p-1 rounded bg-gray-100 hover:bg-brand-orange hover:text-white transition-colors"><ChevronRight size={14}/></button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex gap-4 items-center group cursor-pointer">
                      <img src={`https://placehold.co/80x80/f${i}f${i}f${i}/333?text=Food`} alt="Food" className="w-16 h-16 rounded-xl object-cover" />
                      <div>
                        <h5 className="font-bold text-[#4b5966] text-sm mb-1 group-hover:text-brand-orange transition-colors">Spicy Jollof Combo</h5>
                        <p className="text-xs text-[#777] mb-1">African Kitchen</p>
                        <span className="text-xs font-bold text-brand-green">$12.50</span>
                      </div>
                      <button className="ml-auto w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-brand-orange hover:border-brand-orange hover:text-white transition-all">
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 border border-dashed border-gray-300 text-sm font-bold text-[#777] rounded-xl hover:bg-[#f8f8fb] transition-colors">
                  View Marketplace
                </button>
              </div>

              {/* Wallet Quick View */}
              <div className="bg-brand-orange rounded-3xl p-6 text-white shadow-lg shadow-brand-orange/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Wallet size={100} />
                </div>
                <p className="text-white/80 text-sm font-medium mb-1">Wallet Balance</p>
                <h3 className="text-3xl font-extrabold mb-6">$865.20</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white text-brand-orange py-2.5 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors">Top Up</button>
                  <button className="flex-1 bg-brand-orange border border-white/30 text-white py-2.5 rounded-xl text-sm font-bold hover:bg-white/10 transition-colors">History</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
  )
}

export default AppUserDashboardPageLayout