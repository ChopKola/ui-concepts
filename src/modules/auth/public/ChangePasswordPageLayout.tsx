import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Eye, EyeOff, Check, 
  ShieldCheck, ArrowRight 
} from 'lucide-react';
import { cn } from '../../../utils/helpers';

const ChangePasswordPageLayout = () => {
  const [passwords, setPasswords] = useState({ new: '', confirm: '' });
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Password Strength Logic
  const getStrength = (pass: string) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(passwords.new);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new === passwords.confirm && strength >= 3) {
      setIsSuccess(true);
      // Redirect logic would go here after timeout
      setTimeout(() => { window.location.href = '/login'; }, 2000);
    }
  };

  return (
    <div className="py-24 bg-[#f8f8fb] flex items-center justify-center p-4 font-poppins">
      
      <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row relative">
        
        {/* --- Success Overlay --- */}
        <AnimatePresence>
          {isSuccess && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="absolute inset-0 z-50 bg-white/90 backdrop-blur-md flex flex-col items-center justify-center text-center p-8"
            >
              <motion.div 
                initial={{ scale: 0.5 }} animate={{ scale: 1 }}
                className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
              >
                <Check size={48} strokeWidth={3} />
              </motion.div>
              <h2 className="text-3xl font-bold text-[#4b5966] font-manrope mb-2">Password Updated!</h2>
              <p className="text-[#777]">Your account is now secure. Redirecting you to login...</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Left: Form --- */}
        <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-[#4b5966] font-manrope mb-2">Reset Password</h1>
            <p className="text-[#777] text-sm">
              Please create a new, strong password for your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* New Password */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#4b5966] uppercase tracking-wider ml-1">New Password</label>
              <div className="relative group">
                <input
                  type={showNew ? "text" : "password"}
                  value={passwords.new}
                  onChange={(e) => setPasswords({...passwords, new: e.target.value})}
                  className="w-full px-4 py-4 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-4 focus:border-[#5caf90]/50 focus:ring-[#5caf90]/10"
                  placeholder="Min 8 chars"
                />
                <button type="button" onClick={() => setShowNew(!showNew)} className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#4b5966]">
                  {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              
              {/* Strength Meter */}
              <div className="flex gap-1 h-1 mt-2 px-1">
                {[1, 2, 3, 4].map((level) => (
                  <div 
                    key={level}
                    className={cn(
                      "h-full w-1/4 rounded-full transition-all duration-300",
                      strength >= level 
                        ? (strength < 2 ? "bg-red-400" : strength < 4 ? "bg-yellow-400" : "bg-green-500") 
                        : "bg-gray-100"
                    )}
                  />
                ))}
              </div>
              <p className="text-[10px] text-gray-400 text-right px-1">
                {strength < 2 ? "Weak" : strength < 4 ? "Good" : "Strong"}
              </p>
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-[#4b5966] uppercase tracking-wider ml-1">Confirm Password</label>
              <div className="relative group">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={passwords.confirm}
                  onChange={(e) => setPasswords({...passwords, confirm: e.target.value})}
                  className={cn(
                    "w-full px-4 py-4 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-4 focus:ring-[#5caf90]/10",
                    passwords.confirm && passwords.new !== passwords.confirm ? "focus:border-red-400" : "focus:border-[#5caf90]/50"
                  )}
                  placeholder="Repeat password"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center gap-2">
                  {passwords.confirm && passwords.new === passwords.confirm && (
                    <Check size={18} className="text-green-500" />
                  )}
                  <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="text-gray-400 hover:text-[#4b5966]">
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Submit */}
            <button 
              type="submit" 
              disabled={strength < 3 || passwords.new !== passwords.confirm}
              className="w-full py-4 bg-brand-orange disabled:bg-gray-300 text-white rounded-2xl font-bold text-sm hover:bg-[#e17055] transition-all duration-300 shadow-lg disabled:shadow-none flex items-center justify-center gap-2 mt-4"
            >
              Reset Password <ArrowRight size={18} />
            </button>

          </form>
        </div>

        {/* --- Right: Info/Visual --- */}
        <div className="hidden md:block w-1/2 bg-[#4b5966] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-10"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="inline-flex items-center gap-2 bg-[#5caf90]/20 border border-[#5caf90]/30 px-3 py-1 rounded-full text-xs font-bold text-[#5caf90] w-fit">
              <ShieldCheck size={14} /> Secure Account
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-manrope leading-tight">Password Tips</h2>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5caf90]" />
                  Use at least 8 characters.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5caf90]" />
                  Include a mix of uppercase & lowercase.
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#5caf90]" />
                  Add a number or symbol (e.g. #, !, $).
                </li>
              </ul>
            </div>

            <div className="text-xs text-gray-400 border-t border-white/10 pt-6">
              © Chopkola Security Team
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ChangePasswordPageLayout