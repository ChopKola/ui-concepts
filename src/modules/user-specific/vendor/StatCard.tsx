import { cn } from "../../../utils/helpers";


const StatCard = ({ title, value, subtext, icon: Icon, colorClass }: any) => (
  <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div>
        <p className="text-[#777] text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
        <h3 className="text-2xl font-extrabold text-[#4b5966] font-manrope">{value}</h3>
      </div>
      <div className={cn("p-3 rounded-2xl", colorClass)}>
        <Icon size={20} className="text-white" />
      </div>
    </div>
    <div className="flex items-center gap-2 text-xs font-medium text-[#777]">
      {subtext}
    </div>
  </div>
);

export default StatCard