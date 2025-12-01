import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Eye, EyeOff, 
  ArrowRight, Briefcase, CheckCircle2
} from 'lucide-react';
import { cn } from '../../../../utils/helpers';
import { Link } from 'react-router-dom';

const AdministratorUserLoinPageLayout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const currentTheme = {
    primary: "bg-[#4b5966]",
    text: "text-[#4b5966]",
    border: "border-[#4b5966]",
    shadow: "shadow-[#4b5966]/20",
    light: "bg-[#f8f8fb]",
    headline: "System Administration.",
    subhead: "Secure access for platform management and oversight.",
    image: "https://placehold.co/800x1200/4b5966/ffffff?text=System+Control",
    icon: <ShieldCheck size={24} />,
    placeholder: "Admin Email / Employee ID"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Logging in as admin:`, formData);
  };

  return (
    <div className="min-h-screen bg-white flex overflow-hidden font-poppins">
      <div className="w-full lg:w-[45%] flex flex-col justify-center p-8 md:p-16 lg:p-20 relative z-10">
        
        <div className="max-w-md w-full mx-auto">
          <div className="flex items-center justify-between mb-12">
            <a href="/" className="text-2xl font-extrabold text-brand-orange tracking-tight font-manrope">
              Chop<span className="text-[#5caf90]">kola.</span>
              <span className="text-xs text-[#777] font-normal ml-1 block -mt-1">System Administrator Access</span>
            </a>
          </div>

          <div className="mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-white", currentTheme.primary)}>
                  {currentTheme.icon}
                </div>
                <h1 className="text-4xl font-extrabold text-[#4b5966] font-manrope mb-3 leading-tight">
                  {currentTheme.headline}
                </h1>
                <p className="text-[#777] text-sm leading-relaxed">
                  {currentTheme.subhead}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#4b5966] uppercase tracking-wider ml-1">
                Employee ID
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#4b5966] transition-colors">
                  <Briefcase size={18} />
                </div>
                <input
                  type="text"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder={currentTheme.placeholder}
                  className="w-full pl-11 pr-4 py-4 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-4 focus:border-[#4b5966]/50 focus:ring-[#4b5966]/10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="text-xs font-bold text-[#4b5966] uppercase tracking-wider">Password</label>
                <Link to="/forgotten-password" className={cn("text-xs font-bold hover:underline", currentTheme.text)}>Forgot Password?</Link>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#4b5966] transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-11 py-4 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-4 focus:border-[#4b5966]/50 focus:ring-[#4b5966]/10"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#4b5966] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={cn(
                "w-full py-4 text-white rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group mt-4",
                currentTheme.primary, currentTheme.shadow
              )}
            >
              Secure Login
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

          </form>

          
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
          <Lock size={12} />
          <span>Protected by Enterprise SSO</span>
        </div>

        </div>
      </div>

      <div className="hidden lg:block w-[55%] relative overflow-hidden bg-[#4b5966]">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className={cn("absolute inset-0 opacity-40 mix-blend-multiply", currentTheme.primary)} />
            <img
              src={currentTheme.image}
              alt="Background"
              className="w-full h-full object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-20 bg-gradient-to-t from-[#000]/90 via-[#000]/40 to-transparent text-white">
                <div>
                  <div className="inline-flex items-center gap-2 bg-[#5caf90]/20 border border-[#5caf90]/30 px-3 py-1 rounded-full text-xs font-bold text-[#5caf90] mb-4">
                    <CheckCircle2 size={14} /> System Operational
                  </div>
                  <h3 className="text-3xl font-bold font-manrope mb-4">Administrative Control Center</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#5caf90] rounded-full"/> Real-time Order Monitoring</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#5caf90] rounded-full"/> Financial Audits & Payouts</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#5caf90] rounded-full"/> User & Vendor Management</li>
                  </ul>
                </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default AdministratorUserLoinPageLayout;