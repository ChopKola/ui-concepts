import { useState } from 'react';
import { 
  Search, Filter, Download, Plus, MoreHorizontal, 
  User, UserCheck, UserX, Shield, ChevronLeft, 
  ChevronRight, Eye, Edit
} from 'lucide-react';
import { cn } from '../../../utils/helpers';

// --- Mock Data ---
const USERS_DATA = [
  { id: "USR-001", name: "Shawn L.", email: "shawn@example.com", role: "Customer", status: "Active", orders: 124, spent: "$4,320", joined: "Jan 2023", avatar: "https://placehold.co/100x100/e17055/fff?text=SL" },
  { id: "USR-002", name: "Michael D.", email: "mike.rider@chopkola.com", role: "Rider", status: "Active", orders: 1540, spent: "-", joined: "Feb 2023", avatar: "https://placehold.co/100x100/4b5966/fff?text=MD" },
  { id: "USR-003", name: "Sarah J.", email: "sarah@example.com", role: "Customer", status: "Suspended", orders: 2, spent: "$45.00", joined: "Nov 2024", avatar: "https://placehold.co/100x100/5caf90/fff?text=SJ" },
  { id: "USR-004", name: "Admin One", email: "admin@chopkola.com", role: "Admin", status: "Active", orders: 0, spent: "-", joined: "Dec 2022", avatar: "https://placehold.co/100x100/2d3436/fff?text=AD" },
  { id: "USR-005", name: "Amara Kitchen", email: "contact@amara.com", role: "Vendor", status: "Pending", orders: 0, spent: "-", joined: "Today", avatar: "https://placehold.co/100x100/e67e22/fff?text=AK" },
];

const AdministraorUserListingPageLayout = () => {
  const [filterStatus, setFilterStatus] = useState('All');

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966] p-6 lg:p-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-[#4b5966] font-manrope">User Management</h1>
          <p className="text-sm text-[#777]">Manage access, roles, and account statuses.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-sm font-bold text-[#4b5966] hover:border-[#5caf90] transition-colors shadow-sm">
            <Download size={16} /> Export CSV
          </button>
          <button className="flex items-center gap-2 bg-[#4b5966] text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-orange transition-colors shadow-lg">
            <Plus size={16} /> Add User
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#f8f8fb] flex items-center justify-center text-[#4b5966]"><User size={24} /></div>
          <div>
            <p className="text-xs text-[#777] uppercase font-bold">Total Users</p>
            <h3 className="text-2xl font-extrabold font-manrope">45.2k</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#e2fde2] flex items-center justify-center text-[#5caf90]"><UserCheck size={24} /></div>
          <div>
            <p className="text-xs text-[#777] uppercase font-bold">Active</p>
            <h3 className="text-2xl font-extrabold font-manrope">42.1k</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#fff6ec] flex items-center justify-center text-brand-orange"><User size={24} /></div>
          <div>
            <p className="text-xs text-[#777] uppercase font-bold">New Today</p>
            <h3 className="text-2xl font-extrabold font-manrope">+128</h3>
          </div>
        </div>
        <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-500"><UserX size={24} /></div>
          <div>
            <p className="text-xs text-[#777] uppercase font-bold">Banned/Suspended</p>
            <h3 className="text-2xl font-extrabold font-manrope">340</h3>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm mb-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="flex gap-2 w-full md:w-auto overflow-x-auto no-scrollbar">
          {['All', 'Customer', 'Vendor', 'Rider', 'Admin'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilterStatus(tab)}
              className={cn(
                "px-6 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                filterStatus === tab 
                  ? "bg-[#4b5966] text-white shadow-md" 
                  : "bg-[#f8f8fb] text-[#777] hover:bg-gray-100"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search size={18} className="absolute left-4 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search users..." 
              className="w-full pl-11 pr-4 py-2.5 bg-[#f8f8fb] rounded-xl text-sm font-medium outline-none focus:ring-2 focus:ring-[#5caf90]/20" 
            />
          </div>
          <button className="p-2.5 bg-[#f8f8fb] rounded-xl text-[#4b5966] hover:bg-[#e2fde2] hover:text-[#5caf90] transition-colors">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-[#f8f8fb] text-[#4b5966] uppercase text-xs font-bold tracking-wider">
              <tr>
                <th className="px-6 py-4 rounded-tl-3xl">User</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Orders</th>
                <th className="px-6 py-4">Total Spent</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right rounded-tr-3xl">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {USERS_DATA.map((user) => (
                <tr key={user.id} className="hover:bg-[#f8f8fb]/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={user.avatar} className="w-10 h-10 rounded-full bg-gray-200" alt="Av" />
                      <div>
                        <p className="font-bold text-[#4b5966]">{user.name}</p>
                        <p className="text-xs text-[#777]">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-[#4b5966] font-medium">
                      {user.role === 'Admin' && <Shield size={14} className="text-brand-orange" />}
                      {user.role}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-xs font-bold",
                      user.status === 'Active' ? "bg-green-100 text-green-700" :
                      user.status === 'Suspended' ? "bg-red-100 text-red-700" :
                      "bg-orange-100 text-orange-700"
                    )}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-[#4b5966]">{user.orders}</td>
                  <td className="px-6 py-4 font-medium text-[#4b5966]">{user.spent}</td>
                  <td className="px-6 py-4 text-[#777]">{user.joined}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 rounded-lg hover:bg-[#f8f8fb] text-gray-400 hover:text-[#5caf90] transition-colors" title="View Details">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[#f8f8fb] text-gray-400 hover:text-brand-orange transition-colors" title="Edit User">
                        <Edit size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-[#f8f8fb] text-gray-400 hover:text-[#4b5966] transition-colors">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
          <span className="text-xs text-[#777]">Showing 1-5 of 1200</span>
          <div className="flex gap-2">
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-[#777] disabled:opacity-50"><ChevronLeft size={16}/></button>
            <button className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-[#777]"><ChevronRight size={16}/></button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdministraorUserListingPageLayout;