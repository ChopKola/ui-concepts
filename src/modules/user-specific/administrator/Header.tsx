import { useState } from 'react';
import { 
  Menu, Search, Bell, ChevronDown, Globe
} from 'lucide-react';
import { cn } from '../../../utils/helpers';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] bg-white z-50 px-4 lg:px-6 flex items-center justify-between shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-4 lg:gap-12">
          <div className={cn("flex items-center transition-all duration-300", sidebarOpen ? "w-60" : "w-fit")}>
            <a href="/" className="text-2xl font-extrabold text-brand-orange tracking-tight font-manrope">
              Chop<span className="text-[#5caf90]">kola.</span>
              <span className="text-xs bg-[#4b5966] text-white px-1.5 py-0.5 rounded ml-2 -mt-1 font-normal">ADMIN</span>
            </a>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="ml-auto p-2 text-gray-400 hover:text-[#4b5966] hidden lg:block">
              <Menu size={20} />
            </button>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-gray-400 lg:hidden">
              <Menu size={20} />
            </button>
          </div>

          {/* Global Search (Admin specific - search by ID) */}
          <div className="hidden md:flex items-center bg-[#f8f8fb] rounded-xl px-4 py-2.5 w-[400px] border border-transparent focus-within:border-[#5caf90] focus-within:bg-white transition-all">
            <Search size={18} className="text-gray-400 mr-3" />
            <input 
              type="text" 
              placeholder="Search users, Order IDs, or Transaction Hashes..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-gray-400 text-[#4b5966]" 
            />
            <div className="text-[10px] bg-gray-200 text-gray-500 px-1.5 rounded border border-gray-300">/</div>
          </div>
        </div>

        <div className="flex items-center gap-3 lg:gap-6">
          {/* Region Selector */}
          <button className="hidden xl:flex items-center gap-2 text-xs font-bold text-[#777] hover:text-[#4b5966] bg-gray-50 px-3 py-1.5 rounded-lg">
            <Globe size={14} /> Global View <ChevronDown size={12} />
          </button>

          <button className="relative p-2 text-gray-400 hover:text-brand-orange transition-colors">
            <Bell size={22} />
            <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-[#4b5966]">System Admin</p>
              <p className="text-xs text-[#777]">Super User</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#4b5966] text-white flex items-center justify-center font-bold border-2 border-white shadow-sm">
              SA
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header