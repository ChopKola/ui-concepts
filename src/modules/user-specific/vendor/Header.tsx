import { useState } from 'react';
import { 
  Menu, Bell, Power
} from 'lucide-react';
import { cn } from '../../../utils/helpers';

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isStoreOnline, setIsStoreOnline] = useState(true);

  return (
    <header className="fixed top-0 left-0 right-0 h-[80px] bg-white z-50 px-4 lg:px-6 flex items-center justify-between shadow-sm border-b border-gray-100">
        <div className="flex items-center gap-4 lg:gap-12">
          <div className={cn("flex items-center transition-all duration-300", sidebarOpen ? "w-60" : "w-fit")}>
            <a href="/" className="text-2xl font-extrabold text-brand-orange tracking-tight font-manrope">
              Chop<span className="text-[#5caf90]">kola.</span>
              <span className="text-xs text-[#777] font-normal ml-1 block -mt-1">Partner</span>
            </a>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="ml-auto p-2 text-gray-400 hover:text-[#4b5966] hidden lg:block">
              <Menu size={20} />
            </button>
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 text-gray-400 lg:hidden">
              <Menu size={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          
          {/* Store Status Toggle */}
          <div 
            onClick={() => setIsStoreOnline(!isStoreOnline)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition-all border",
              isStoreOnline 
                ? "bg-green-50 border-green-200 text-green-700" 
                : "bg-gray-100 border-gray-200 text-gray-500"
            )}
          >
            <Power size={16} className={isStoreOnline ? "fill-green-700" : ""} />
            <span className="text-xs font-bold uppercase tracking-wide hidden md:inline">
              {isStoreOnline ? "Online" : "Offline"}
            </span>
          </div>

          <button className="relative p-2 text-gray-400 hover:text-brand-orange transition-colors">
            <Bell size={22} />
            <span className="absolute top-1.5 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
            <div className="text-right hidden md:block">
              <p className="text-sm font-bold text-[#4b5966]">Mama Put Kitchen</p>
              <p className="text-xs text-[#777]">Vendor ID: #8821</p>
            </div>
            <img 
              src="https://placehold.co/100x100/2d3436/ffffff?text=MP" 
              alt="Logo" 
              className="w-10 h-10 rounded-lg border-2 border-white shadow-sm" 
            />
          </div>
        </div>
      </header>
  )
}

export default Header