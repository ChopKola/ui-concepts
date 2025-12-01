import { useEffect, useState } from 'react';
import { 
  LayoutDashboard, 
  Users, Store, BadgeDollarSign, ShieldAlert, Settings, Server,  BarChart3
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

  return (
    <aside className={cn(
        "fixed top-[80px] left-0 h-[calc(100vh-80px)] bg-white border-r border-gray-100 z-40 transition-all duration-300 overflow-y-auto",
        sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full lg:translate-x-0 lg:w-20"
      )}>
        <div className="py-6">
          <p className={cn("px-6 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 transition-opacity", !sidebarOpen && "lg:hidden")}>
            Management
          </p>
          <ul className="space-y-1">
            <SidebarItem 
              icon={<LayoutDashboard size={20} />} 
              label={sidebarOpen ? "Overview" : ""} 
              active={activePage === 'Overview'} 
              onClick={() => setActivePage('Overview')}
            />
            <SidebarItem 
              icon={<Users size={20} />} 
              label={sidebarOpen ? "Users & Riders" : ""} 
              active={activePage === 'Users'} 
              onClick={() => setActivePage('Users')}
            />
            <SidebarItem 
              icon={<Store size={20} />} 
              label={sidebarOpen ? "Vendors" : ""} 
              active={activePage === 'Vendors'} 
              onClick={() => setActivePage('Vendors')}
              alertCount={3}
            />
            <SidebarItem 
              icon={<BadgeDollarSign size={20} />} 
              label={sidebarOpen ? "Financials" : ""} 
              active={activePage === 'Financials'} 
              onClick={() => setActivePage('Financials')}
            />
            <SidebarItem 
              icon={<BarChart3 size={20} />} 
              label={sidebarOpen ? "Analytics" : ""} 
              active={activePage === 'Analytics'} 
              onClick={() => setActivePage('Analytics')}
            />
          </ul>

          <div className="my-6 border-t border-gray-100 mx-6"></div>
          
          <p className={cn("px-6 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 transition-opacity", !sidebarOpen && "lg:hidden")}>
            System
          </p>
          <ul className="space-y-1">
            <SidebarItem icon={<Server size={20} />} label={sidebarOpen ? "Server Logs" : ""} />
            <SidebarItem icon={<ShieldAlert size={20} />} label={sidebarOpen ? "Moderation" : ""} alertCount={12} />
            <SidebarItem icon={<Settings size={20} />} label={sidebarOpen ? "Platform Settings" : ""} />
          </ul>
        </div>
      </aside>
  )
}

export default Sidebar