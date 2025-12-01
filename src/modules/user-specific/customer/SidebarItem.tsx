import { cn } from "../../../utils/helpers";

const SidebarItem = ({ icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <li>
    <button 
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-all duration-200 group relative",
        active 
          ? "text-brand-orange bg-[#fff6ec] border-r-[3px] border-brand-orange" 
          : "text-[#777] hover:text-[#4b5966] hover:bg-gray-50"
      )}
    >
      <span className={cn("transition-colors", active ? "text-brand-orange" : "text-gray-400 group-hover:text-[#4b5966]")}>
        {icon}
      </span>
      <span>{label}</span>
    </button>
  </li>
);

export default SidebarItem