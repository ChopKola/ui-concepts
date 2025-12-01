import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem"
import { cn } from "../../../utils/helpers";
import {
  LayoutDashboard, ShoppingBag, Heart, Wallet, 
  Settings, LogOut, Utensils, Clock
} from 'lucide-react';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  useEffect(()=>{
      if (!sidebarOpen) {
        setSidebarOpen(false);
      }
    }, [])

  return (
    <aside className={cn(
        "fixed top-[80px] left-0 h-[calc(100vh-80px)] bg-white border-r border-gray-100 z-40 transition-all duration-300 overflow-y-auto",
        sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:translate-x-0 lg:w-20"
      )}>
        <div className="py-6">
          <p className={cn("px-6 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 transition-opacity", !sidebarOpen && "lg:hidden")}>
            Menu
          </p>
          <ul className="space-y-1">
            <SidebarItem 
              icon={<LayoutDashboard size={20} />} 
              label={sidebarOpen ? "Dashboard" : ""} 
              active={activePage === 'Dashboard'} 
              onClick={() => setActivePage('Dashboard')}
            />
            <SidebarItem 
              icon={<ShoppingBag size={20} />} 
              label={sidebarOpen ? "My Orders" : ""} 
              active={activePage === 'Orders'} 
              onClick={() => setActivePage('Orders')}
            />
            <SidebarItem 
              icon={<Wallet size={20} />} 
              label={sidebarOpen ? "Wallet" : ""} 
              active={activePage === 'Wallet'} 
              onClick={() => setActivePage('Wallet')}
            />
            <SidebarItem 
              icon={<Heart size={20} />} 
              label={sidebarOpen ? "Favorites" : ""} 
              active={activePage === 'Favorites'} 
              onClick={() => setActivePage('Favorites')}
            />
            <SidebarItem 
              icon={<Clock size={20} />} 
              label={sidebarOpen ? "History" : ""} 
              active={activePage === 'History'} 
              onClick={() => setActivePage('History')}
            />
          </ul>

          <div className="my-6 border-t border-gray-100 mx-6"></div>

          <ul className="space-y-1">
            <SidebarItem icon={<Settings size={20} />} label={sidebarOpen ? "Settings" : ""} />
            <SidebarItem icon={<LogOut size={20} />} label={sidebarOpen ? "Logout" : ""} />
          </ul>
          
          {/* Promo Card (Only visible when open) */}
          {sidebarOpen && (
            <div className="mx-6 mt-10 bg-gradient-to-br from-[#4b5966] to-[#2d3436] rounded-2xl p-5 text-center text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-20 h-20 bg-brand-orange opacity-20 rounded-full blur-2xl -mr-6 -mt-6"></div>
              <Utensils className="mx-auto mb-3 text-brand-orange" size={28} />
              <h5 className="font-bold mb-1">Free Delivery</h5>
              <p className="text-xs text-gray-300 mb-4">Upgrade to Gold plan for unlimited free deliveries.</p>
              <button className="w-full py-2 bg-brand-orange rounded-lg text-xs font-bold hover:bg-white hover:text-brand-orange transition-colors">Upgrade Now</button>
            </div>
          )}
        </div>
      </aside>
  )
}

export default Sidebar