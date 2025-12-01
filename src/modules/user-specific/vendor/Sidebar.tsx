import { useEffect, useState } from 'react';
import { 
  LayoutGrid, Wallet, 
  Settings, LogOut, Utensils,
  ClipboardList, Star
} from 'lucide-react';
import { cn } from '../../../utils/helpers';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState('Dashboard');

  useEffect(()=>{
    if (!sidebarOpen) {
      setSidebarOpen(false);
    }
  }, [])

  return (<aside className={cn(
        "fixed top-[80px] left-0 h-[calc(100vh-80px)] bg-white border-r border-gray-100 z-40 transition-all duration-300 overflow-y-auto",
        sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:translate-x-0 lg:w-20"
      )}>
        <div className="py-6">
          <ul className="space-y-1">
            <SidebarItem 
              icon={<LayoutGrid size={20} />} 
              label={sidebarOpen ? "Overview" : ""} 
              active={activePage === 'Dashboard'} 
              onClick={() => setActivePage('Dashboard')}
            />
            <SidebarItem 
              icon={<ClipboardList size={20} />} 
              label={sidebarOpen ? "Orders" : ""} 
              active={activePage === 'Orders'} 
              onClick={() => setActivePage('Orders')}
            />
            <SidebarItem 
              icon={<Utensils size={20} />} 
              label={sidebarOpen ? "Menu Items" : ""} 
              active={activePage === 'Menu'} 
              onClick={() => setActivePage('Menu')}
            />
            <SidebarItem 
              icon={<Star size={20} />} 
              label={sidebarOpen ? "Reviews" : ""} 
              active={activePage === 'Reviews'} 
              onClick={() => setActivePage('Reviews')}
            />
            <SidebarItem 
              icon={<Wallet size={20} />} 
              label={sidebarOpen ? "Payouts" : ""} 
              active={activePage === 'Wallet'} 
              onClick={() => setActivePage('Wallet')}
            />
          </ul>

          <div className="my-6 border-t border-gray-100 mx-6"></div>

          <ul className="space-y-1">
            <SidebarItem icon={<Settings size={20} />} label={sidebarOpen ? "Settings" : ""} />
            <SidebarItem icon={<LogOut size={20} />} label={sidebarOpen ? "Logout" : ""} />
          </ul>
        </div>
      </aside>
  )
}

export default Sidebar