import { useState } from 'react';
import { 
  ArrowLeft, Mail, Phone, Calendar, 
  ShieldAlert, Ban, CheckCircle2, Wallet, 
  History, Receipt, AlertTriangle, RotateCcw, Lock
} from 'lucide-react';
import { cn } from '../../../utils/helpers'; // Assuming utility exists

const USER_DETAILS = {
  id: "USR-001",
  name: "Shawn L.",
  email: "shawn.l@example.com",
  phone: "+1 202 555 0191",
  avatar: "https://placehold.co/200x200/e17055/ffffff?text=SL",
  role: "Customer",
  status: "Active",
  joined: "Jan 12, 2023",
  walletBalance: 865.20,
  totalOrders: 124,
  lastLogin: "2 hours ago (IP: 192.168.1.1)"
};

const ACTIVITY_LOG = [
  { id: 1, action: "Placed Order #CK-9921", time: "2 hours ago", type: "order" },
  { id: 2, action: "Failed Login Attempt", time: "1 day ago", type: "security" },
  { id: 3, action: "Updated Profile Picture", time: "3 days ago", type: "account" },
  { id: 4, action: "Wallet Top-up ($50.00)", time: "1 week ago", type: "finance" },
];

const AdministraorUserDetailsPageLayout = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966] p-6 lg:p-10">
      
      {/* Back & Actions Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <button className="flex items-center gap-2 text-sm font-bold text-[#777] hover:text-[#4b5966] transition-colors">
          <ArrowLeft size={18} /> Back to Users
        </button>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold text-[#4b5966] hover:bg-gray-50 transition-colors shadow-sm">
            <Lock size={14} /> Reset Password
          </button>
          <button className="flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2.5 rounded-xl text-xs font-bold text-red-600 hover:bg-red-100 transition-colors shadow-sm">
            <Ban size={14} /> Suspend Account
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* --- Left Column: Profile Card --- */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Main Profile Card */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-24 bg-[#4b5966]"></div>
            
            <div className="relative z-10 -mt-2">
              <div className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-md overflow-hidden bg-white">
                <img src={USER_DETAILS.avatar} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-extrabold text-[#4b5966] mt-3 font-manrope">{USER_DETAILS.name}</h2>
              <div className="flex justify-center gap-2 mt-2">
                <span className="bg-[#f8f8fb] text-[#777] px-3 py-1 rounded-full text-xs font-bold border border-gray-200">
                  {USER_DETAILS.role}
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> {USER_DETAILS.status}
                </span>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-left">
              <div className="flex items-center gap-3 text-sm text-[#777]">
                <div className="w-8 h-8 rounded-lg bg-[#f8f8fb] flex items-center justify-center"><Mail size={16} /></div>
                {USER_DETAILS.email}
              </div>
              <div className="flex items-center gap-3 text-sm text-[#777]">
                <div className="w-8 h-8 rounded-lg bg-[#f8f8fb] flex items-center justify-center"><Phone size={16} /></div>
                {USER_DETAILS.phone}
              </div>
              <div className="flex items-center gap-3 text-sm text-[#777]">
                <div className="w-8 h-8 rounded-lg bg-[#f8f8fb] flex items-center justify-center"><Calendar size={16} /></div>
                Joined {USER_DETAILS.joined}
              </div>
              <div className="flex items-center gap-3 text-sm text-[#777]">
                <div className="w-8 h-8 rounded-lg bg-[#f8f8fb] flex items-center justify-center"><ShieldAlert size={16} /></div>
                {USER_DETAILS.lastLogin}
              </div>
            </div>
          </div>

          {/* Admin Notes */}
          <div className="bg-[#fff6ec] p-6 rounded-3xl border border-[#e17055]/20">
            <h3 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-3">Admin Notes</h3>
            <p className="text-xs text-[#4b5966] leading-relaxed mb-4">
              User has high order volume. Previously reported for "Item Missing" on 12/10/2024 - Refund processed.
            </p>
            <button className="w-full py-2 bg-white text-brand-orange text-xs font-bold rounded-lg shadow-sm hover:bg-[#f8f8fb]">
              Add Note
            </button>
          </div>

        </div>

        {/* --- Right Column: Tabbed Details --- */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden min-h-[600px]">
            
            {/* Tabs */}
            <div className="flex border-b border-gray-100 overflow-x-auto no-scrollbar">
              {['Overview', 'Orders', 'Wallet & Transactions', 'KYC Documents'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-6 py-4 text-sm font-bold whitespace-nowrap transition-all border-b-2",
                    activeTab === tab 
                      ? "border-brand-orange text-brand-orange bg-[#fff6ec]/50" 
                      : "border-transparent text-[#777] hover:text-[#4b5966] hover:bg-gray-50"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 lg:p-8">
              {activeTab === 'Overview' && (
                <div className="space-y-8">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#f8f8fb] p-4 rounded-2xl border border-gray-100">
                      <p className="text-xs text-[#777]">Lifetime Value</p>
                      <h3 className="text-xl font-extrabold text-[#4b5966]">$4,520</h3>
                    </div>
                    <div className="bg-[#f8f8fb] p-4 rounded-2xl border border-gray-100">
                      <p className="text-xs text-[#777]">Avg. Order Value</p>
                      <h3 className="text-xl font-extrabold text-[#4b5966]">$36.45</h3>
                    </div>
                    <div className="bg-[#f8f8fb] p-4 rounded-2xl border border-gray-100">
                      <p className="text-xs text-[#777]">Refund Rate</p>
                      <h3 className="text-xl font-extrabold text-[#5caf90]">1.2%</h3>
                    </div>
                  </div>

                  {/* Activity Timeline */}
                  <div>
                    <h3 className="text-lg font-bold text-[#4b5966] mb-4 flex items-center gap-2">
                      <History size={20} /> Recent Activity
                    </h3>
                    <div className="space-y-6 relative pl-2">
                      <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                      {ACTIVITY_LOG.map((log) => (
                        <div key={log.id} className="relative flex gap-4 items-start">
                          <div className={cn(
                            "relative z-10 w-6 h-6 rounded-full border-2 border-white shadow-sm flex items-center justify-center",
                            log.type === 'security' ? "bg-red-500" : "bg-[#5caf90]"
                          )}>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#4b5966]">{log.action}</p>
                            <p className="text-xs text-[#777]">{log.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'Wallet & Transactions' && (
                <div>
                  <div className="bg-gradient-to-r from-[#4b5966] to-[#2d3436] p-6 rounded-3xl text-white flex justify-between items-center mb-8 shadow-lg">
                    <div>
                      <p className="text-xs font-medium opacity-80 mb-1">Current Wallet Balance</p>
                      <h2 className="text-3xl font-extrabold font-manrope">${USER_DETAILS.walletBalance.toFixed(2)}</h2>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-xs font-bold hover:bg-white hover:text-[#4b5966] transition-colors flex items-center gap-2">
                        <RotateCcw size={14} /> Refund
                      </button>
                      <button className="bg-[#5caf90] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-white hover:text-[#5caf90] transition-colors flex items-center gap-2 shadow-lg">
                        <Wallet size={14} /> Credit Wallet
                      </button>
                    </div>
                  </div>

                  <h3 className="font-bold text-[#4b5966] mb-4">Transaction History</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-4 bg-[#f8f8fb] rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm">
                            <Receipt size={18} />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-[#4b5966]">Order Payment #CK-992{i}</p>
                            <p className="text-xs text-[#777]">Credit Card • Nov 2{i}, 2024</p>
                          </div>
                        </div>
                        <span className="font-bold text-red-500">-$24.50</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Placeholders for other tabs */}
              {activeTab === 'Orders' && (
                <div className="text-center py-10">
                  <AlertTriangle size={40} className="mx-auto text-gray-300 mb-2" />
                  <p className="text-[#777]">Order history table component would go here.</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdministraorUserDetailsPageLayout;