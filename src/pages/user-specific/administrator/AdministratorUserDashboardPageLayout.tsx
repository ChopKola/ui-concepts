import { useEffect, useState } from "react";
import { 
  Users, Store, BadgeDollarSign, ShieldAlert, 
  Database, 
  MoreHorizontal, Check, X,
  Wallet
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from "../../../utils/helpers";
import AdminStatCard from "../../../modules/user-specific/administrator/AdminStatCard";
import SystemHealthWidget from "../../../modules/user-specific/administrator/SystemHealthWidget";

// --- Mock Data ---
const PENDING_VENDORS = [
  { id: 1, name: "Spice Route Lagos", category: "Indian/Nigerian", owner: "Rajesh K.", date: "2 hrs ago", status: "Pending", avatar: "https://placehold.co/50x50/e17055/fff?text=SR" },
  { id: 2, name: "Mama Cass Express", category: "Fast Food", owner: "Cassandra O.", date: "5 hrs ago", status: "Pending", avatar: "https://placehold.co/50x50/5caf90/fff?text=MC" },
  { id: 3, name: "Delta Kitchen", category: "Traditional", owner: "Efe M.", date: "1 day ago", status: "Reviewing", avatar: "https://placehold.co/50x50/4b5966/fff?text=DK" },
];

const SYSTEM_LOGS = [
  { id: 1, event: "High Traffic Alert", source: "Load Balancer", time: "10m ago", type: "warning" },
  { id: 2, event: "New Rider Registration", source: "User #9921", time: "25m ago", type: "info" },
  { id: 3, event: "Payout Batch Processed", source: "Finance Job", time: "1h ago", type: "success" },
  { id: 4, event: "Failed Login Attempts", source: "IP 192.168...", time: "2h ago", type: "error" },
];

const AdministratorUserDashboardPageLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(()=>{
    if (!sidebarOpen) {
      setSidebarOpen(true);
    }
  }, [])

  return (
    <div className={cn("pt-[100px] px-4 pb-10 transition-all duration-300", sidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        <div className="max-w-[1600px] mx-auto">
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <AdminStatCard 
              title="Total Revenue" 
              value="$1.2M" 
              subtext="12%" 
              icon={BadgeDollarSign} 
              colorClass="bg-[#5caf90]" 
            />
            <AdminStatCard 
              title="Platform Commission" 
              value="$124k" 
              subtext="8.5%" 
              icon={Wallet} 
              colorClass="bg-[#4b5966]" 
            />
            <AdminStatCard 
              title="Active Vendors" 
              value="542" 
              subtext="15 New" 
              icon={Store} 
              colorClass="bg-brand-orange" 
            />
            <AdminStatCard 
              title="Active Users" 
              value="45.2k" 
              subtext="2.1%" 
              icon={Users} 
              colorClass="bg-[#6c5ce7]" 
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Column: Approvals & Financials (2/3 Width) */}
            <div className="xl:col-span-2 space-y-8">
              
              {/* Pending Vendor Approvals */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-bold text-lg text-[#4b5966] flex items-center gap-2">
                    <Store size={20} className="text-brand-orange" /> 
                    Vendor Applications
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">3 Pending</span>
                  </h3>
                  <button className="text-sm text-[#5caf90] font-bold hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-[#f8f8fb] text-[#4b5966]">
                      <tr>
                        <th className="px-6 py-4 font-bold">Restaurant</th>
                        <th className="px-6 py-4 font-bold">Category</th>
                        <th className="px-6 py-4 font-bold">Submitted</th>
                        <th className="px-6 py-4 font-bold text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {PENDING_VENDORS.map((vendor) => (
                        <tr key={vendor.id} className="hover:bg-[#f8f8fb]/50 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <img src={vendor.avatar} className="w-10 h-10 rounded-lg bg-gray-100" alt="Rest" />
                              <div>
                                <p className="font-bold text-[#4b5966]">{vendor.name}</p>
                                <p className="text-xs text-[#777]">Owner: {vendor.owner}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[#777]">{vendor.category}</td>
                          <td className="px-6 py-4 font-medium text-[#4b5966]">{vendor.date}</td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                              <button className="w-8 h-8 rounded-full border border-green-200 text-green-600 hover:bg-green-50 flex items-center justify-center" title="Approve">
                                <Check size={16} />
                              </button>
                              <button className="w-8 h-8 rounded-full border border-red-200 text-red-500 hover:bg-red-50 flex items-center justify-center" title="Reject">
                                <X size={16} />
                              </button>
                              <button className="w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center" title="View Details">
                                <MoreHorizontal size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Financial Overview (Placeholder for Chart) */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-lg text-[#4b5966]">Revenue & Commission</h3>
                    <p className="text-xs text-[#777]">Platform financial performance over last 30 days</p>
                  </div>
                  <select className="bg-[#f8f8fb] border-none text-xs font-bold text-[#4b5966] py-2 px-4 rounded-lg outline-none cursor-pointer">
                    <option>Last 30 Days</option>
                    <option>This Quarter</option>
                    <option>This Year</option>
                  </select>
                </div>
                {/* Chart Visualization Placeholder */}
                <div className="h-64 bg-gradient-to-b from-[#f8f8fb] to-white rounded-2xl border border-dashed border-gray-200 flex items-end justify-between px-6 pb-6 gap-2">
                  {[35, 45, 30, 60, 75, 50, 65, 80, 70, 90, 85, 100].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="w-full bg-brand-orange/20 rounded-t-lg relative group"
                    >
                      <div className="absolute bottom-0 w-full bg-brand-orange rounded-t-lg transition-all group-hover:bg-[#5caf90]" style={{ height: '40%' }}></div>
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: System & Logs - 1/3 Width */}
            <div className="space-y-8">
              
              {/* System Health */}
              <SystemHealthWidget />

              {/* Live Activity Log */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-[#4b5966]">System Activity</h3>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </div>
                
                <div className="relative pl-4 border-l border-dashed border-gray-200 space-y-6">
                  {SYSTEM_LOGS.map((log) => (
                    <div key={log.id} className="relative">
                      <div className={cn(
                        "absolute -left-[21px] top-1 w-3 h-3 rounded-full ring-4 ring-white",
                        log.type === 'warning' ? "bg-yellow-400" :
                        log.type === 'error' ? "bg-red-500" :
                        log.type === 'success' ? "bg-green-500" : "bg-blue-400"
                      )}></div>
                      
                      <div className="flex justify-between items-start group cursor-pointer">
                        <div>
                          <p className="text-sm font-bold text-[#4b5966] group-hover:text-brand-orange transition-colors">{log.event}</p>
                          <p className="text-xs text-[#777] flex items-center gap-1 mt-0.5">
                            {log.type === 'warning' ? <ShieldAlert size={10}/> : <Database size={10}/>}
                            {log.source}
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded">{log.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 border border-dashed border-gray-300 text-sm font-bold text-[#777] rounded-xl hover:bg-[#f8f8fb] transition-colors">
                  View Full Logs
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-[#fff6ec] rounded-3xl p-6 border border-[#e17055]/10">
                <h3 className="font-bold text-[#e17055] mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-white py-3 rounded-xl text-xs font-bold text-[#4b5966] shadow-sm hover:shadow-md transition-all">
                    Broadcast Alert
                  </button>
                  <button className="bg-white py-3 rounded-xl text-xs font-bold text-[#4b5966] shadow-sm hover:shadow-md transition-all">
                    Export Data
                  </button>
                  <button className="bg-white py-3 rounded-xl text-xs font-bold text-[#4b5966] shadow-sm hover:shadow-md transition-all">
                    Manage Staff
                  </button>
                  <button className="bg-white py-3 rounded-xl text-xs font-bold text-[#4b5966] shadow-sm hover:shadow-md transition-all">
                    Review Reports
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
  )
}

export default AdministratorUserDashboardPageLayout