import { useState } from "react";
import { cn } from "../../../utils/helpers";
import { 
  Menu, Search, Bell
} from 'lucide-react';


const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] bg-white z-50 px-4 lg:px-6 flex items-center justify-between shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-4 lg:gap-12">
          {/* Logo */}
          <div className={cn("flex items-center transition-all duration-300", sidebarOpen ? "w-60" : "w-fit")}>
            <a href="/" className="text-2xl font-extrabold text-brand-orange tracking-tight font-manrope">
              Chop<span className="text-[#5caf90]">kola.</span>
            </a>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="ml-auto p-2 text-gray-400 hover:text-[#4b5966] hidden lg:block">
              <Menu size={20} />
            </button>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-gray-400 lg:hidden">
              <Menu size={20} />
            </button>
          </div>

          {/* Search */}
          <div className="hidden md:flex items-center bg-[#f8f8fb] rounded-full px-4 py-2.5 w-96">
            <Search size={18} className="text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Search orders, restaurants..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-400 text-[#4b5966]" 
            />
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-6">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-brand-orange transition-colors">
            <Bell size={22} />
            <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Profile Dropdown */}
          <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-[#4b5966]">Shawn L.</p>
              <p className="text-xs text-[#777]">Foodie Member</p>
            </div>
            <img 
              src="https://placehold.co/100x100/e17055/ffffff?text=SL" 
              alt="Avatar" 
              className="w-10 h-10 rounded-full border-2 border-white shadow-sm" 
            />
          </div>
        </div>
      </header>
  );
};

export default Header;