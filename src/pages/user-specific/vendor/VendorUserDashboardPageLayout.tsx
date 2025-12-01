import { useEffect, useState } from 'react';
import {  
  ShoppingBag, Wallet, ArrowUpRight, Star, XCircle, Utensils, Bike
} from 'lucide-react';
import { cn } from '../../../utils/helpers';
import StatCard from '../../../modules/user-specific/vendor/StatCard';
import OrderTicket from '../../../modules/user-specific/vendor/OrderTicket';

// --- Mock Data ---
const INCOMING_ORDERS = [
  {
    id: "#CK-9921",
    items: [
      { name: "Jollof Rice Special", qty: 2, notes: "Extra spicy" },
      { name: "Fried Plantain", qty: 1, notes: "" }
    ],
    total: "$28.50",
    customer: "Emmanuel A.",
    time: "2 mins ago",
    status: "New"
  },
  {
    id: "#CK-9922",
    items: [
      { name: "Egusi Soup & Pounded Yam", qty: 1, notes: "" },
      { name: "Goat Meat Pepper Soup", qty: 1, notes: "" }
    ],
    total: "$32.00",
    customer: "Sarah J.",
    time: "5 mins ago",
    status: "New"
  }
];

const MENU_ITEMS = [
  { name: "Jollof Rice", price: "$12.00", stock: true, img: "https://placehold.co/50x50/e17055/fff?text=JR" },
  { name: "Fried Rice", price: "$12.00", stock: true, img: "https://placehold.co/50x50/5caf90/fff?text=FR" },
  { name: "Moi Moi", price: "$4.00", stock: false, img: "https://placehold.co/50x50/fab1a0/fff?text=MM" },
  { name: "Grilled Fish", price: "$25.00", stock: true, img: "https://placehold.co/50x50/4b5966/fff?text=GF" },
];

const VendorUserDashboardPageLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(()=>{
    if (!sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [])

  return (
    <div className={cn("pt-[100px] px-4 pb-10 transition-all duration-300", sidebarOpen ? "lg:ml-64" : "lg:ml-20")}>
        <div className="max-w-[1600px] mx-auto">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Today's Revenue" 
              value="$482.50" 
              subtext={<><ArrowUpRight size={14} className="text-green-500 mr-1"/> 12% vs yesterday</>}
              icon={Wallet} 
              colorClass="bg-[#5caf90]" 
            />
            <StatCard 
              title="Total Orders" 
              value="45" 
              subtext={<><span className="font-bold text-[#4b5966]">4</span> Active Now</>}
              icon={ShoppingBag} 
              colorClass="bg-brand-orange" 
            />
            <StatCard 
              title="Average Rating" 
              value="4.8" 
              subtext={<span className="text-[#e67e22] flex items-center gap-1"><Star size={12} fill="currentColor"/> Top Rated Vendor</span>}
              icon={Star} 
              colorClass="bg-[#f1c40f]" 
            />
            <StatCard 
              title="Cancelled" 
              value="1" 
              subtext="0.5% Cancellation Rate"
              icon={XCircle} 
              colorClass="bg-red-500" 
            />
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            
            {/* Left Column: Live Orders (Priority) - 2/3 Width */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden h-full flex flex-col">
                <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <h3 className="font-bold text-lg text-[#4b5966] flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    Live Incoming Orders
                  </h3>
                  
                  <div className="flex bg-[#f8f8fb] p-1 rounded-xl">
                    {['New', 'Preparing', 'Ready'].map((tab, i) => (
                      <button 
                        key={tab} 
                        className={cn(
                          "px-4 py-2 rounded-lg text-xs font-bold transition-all",
                          i === 0 ? "bg-white text-[#4b5966] shadow-sm" : "text-[#777] hover:bg-white/50"
                        )}
                      >
                        {tab} {i === 0 && "(2)"}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-[#f8f8fb] flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {INCOMING_ORDERS.map((order) => (
                      <OrderTicket key={order.id} order={order} />
                    ))}
                    
                    {/* Empty State Placeholder if needed */}
                    {INCOMING_ORDERS.length === 0 && (
                      <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-400">
                        <Utensils size={48} className="mb-4 opacity-20" />
                        <p>No new orders yet.</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Operations - 1/3 Width */}
            <div className="space-y-8">
              
              {/* Quick Menu Management */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-bold text-lg text-[#4b5966]">Quick Menu</h3>
                  <button className="text-xs text-brand-orange font-bold hover:underline">Edit Full Menu</button>
                </div>
                
                <div className="space-y-4">
                  {MENU_ITEMS.map((item, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <img src={item.img} alt={item.name} className="w-10 h-10 rounded-lg object-cover bg-gray-100" />
                        <div>
                          <h5 className="font-bold text-[#4b5966] text-sm">{item.name}</h5>
                          <p className="text-xs text-[#777]">{item.price}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={cn("text-[10px] font-bold uppercase", item.stock ? "text-green-500" : "text-red-500")}>
                          {item.stock ? "In Stock" : "Sold Out"}
                        </span>
                        {/* Toggle Switch Mockup */}
                        <div className={cn("w-10 h-5 rounded-full relative cursor-pointer transition-colors", item.stock ? "bg-[#5caf90]" : "bg-gray-200")}>
                          <div className={cn("w-3 h-3 bg-white rounded-full absolute top-1 transition-all", item.stock ? "left-6" : "left-1")}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity / Drivers */}
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
                <h3 className="font-bold text-lg text-[#4b5966] mb-4">Delivery Status</h3>
                <div className="relative pl-4 border-l border-dashed border-gray-200 space-y-6">
                  {[
                    { id: "#CK-9918", status: "Picked Up", time: "5m ago", rider: "John D." },
                    { id: "#CK-9915", status: "Delivered", time: "20m ago", rider: "Mike T." },
                    { id: "#CK-9912", status: "Delivered", time: "45m ago", rider: "Sam L." },
                  ].map((log, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-brand-orange ring-4 ring-white"></div>
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-bold text-[#4b5966]">{log.id}</p>
                          <p className="text-xs text-[#777] flex items-center gap-1">
                            <Bike size={10} /> {log.rider}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-bold text-[#5caf90] bg-[#e2fde2] px-2 py-0.5 rounded">{log.status}</span>
                          <p className="text-[10px] text-gray-400 mt-1">{log.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
  )
}

export default VendorUserDashboardPageLayout