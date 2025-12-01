import { ArrowUpRight } from "lucide-react";
import { cn } from "../../../utils/helpers";

const AdminStatCard = ({ title, value, subtext, icon: Icon, colorClass }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
    {/* Background Decor */}
    <div className={cn("absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-10 transition-transform group-hover:scale-110", colorClass)}></div>
    
    <div className="flex justify-between items-start mb-4 relative z-10">
      <div>
        <p className="text-[#777] text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
        <h3 className="text-2xl font-extrabold text-[#4b5966] font-manrope">{value}</h3>
      </div>
      <div className={cn("p-3 rounded-2xl shadow-sm", colorClass.replace("bg-", "bg-opacity-10 text-").replace("text-", "bg-"))}>
        {/* This handles generic color mapping roughly, or just pass explicit classes */}
        <Icon size={20} className="text-white" />
      </div>
    </div>
    <div className="flex items-center gap-2 text-xs font-medium relative z-10">
      <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full flex items-center gap-1">
        <ArrowUpRight size={12} />
        {subtext}
      </span>
      <span className="text-gray-400">this week</span>
    </div>
  </div>
);

export default AdminStatCard