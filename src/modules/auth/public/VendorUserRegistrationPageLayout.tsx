import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Store, User, Mail, Lock, Eye, EyeOff, 
  ArrowRight, Phone, MapPin, UploadCloud, 
  UtensilsCrossed, ShoppingBasket, PartyPopper
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Link } from 'react-router-dom';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const VendorUserRegistrationPageLayout = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [businessType, setBusinessType] = useState('restaurant');
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });

  const currentTheme = {
    primary: "bg-brand-orange",
    text: "text-brand-orange",
    border: "border-brand-orange",
    shadow: "shadow-brand-orange/20",
    light: "bg-[#fff6ec]",
    headline: "Join the Marketplace.",
    subhead: "Register your business today and start reaching thousands of hungry customers.",
    image: "https://placehold.co/800x1200/e17055/ffffff?text=Partner+With+Us",
    icon: <Store size={24} />,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Registering vendor:`, { ...formData, businessType });
  };

  return (
    <div className="min-h-screen bg-white flex overflow-hidden font-poppins">
      
      {/* --- Left Side: Registration Form --- */}
      <div className="w-full lg:w-[55%] flex flex-col justify-center p-8 md:p-12 lg:p-16 relative z-10 overflow-y-auto h-screen">
        
        <div className="max-w-lg w-full mx-auto mt-10 lg:mt-0">
          
          {/* Logo & Back Link */}
          <div className="flex items-center justify-between mb-8">
            <a href="/" className="text-2xl font-extrabold text-brand-orange tracking-tight font-manrope">
              Chop<span className="text-[#5caf90]">kola.</span>
              <span className="text-xs text-[#777] font-normal ml-1 block -mt-1">Partner Access</span>
            </a>
            <Link to="/vendor/login" className="text-xs font-bold text-[#777] hover:text-brand-orange transition-colors">
              Already have an account? Login
            </Link>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-4 text-white shadow-md", currentTheme.primary)}>
              {currentTheme.icon}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#4b5966] font-manrope mb-3 leading-tight">
              {currentTheme.headline}
            </h1>
            <p className="text-[#777] text-sm leading-relaxed max-w-md">
              {currentTheme.subhead}
            </p>
          </div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Business Type Selector */}
            <div>
              <label className="text-xs font-bold text-[#4b5966] uppercase tracking-wider ml-1 mb-2 block">Business Type</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'restaurant', label: 'Restaurant', icon: <UtensilsCrossed size={18} /> },
                  { id: 'grocery', label: 'Grocery', icon: <ShoppingBasket size={18} /> },
                  { id: 'catering', label: 'Catering', icon: <PartyPopper size={18} /> }
                ].map((type) => (
                  <div 
                    key={type.id}
                    onClick={() => setBusinessType(type.id)}
                    className={cn(
                      "cursor-pointer rounded-2xl border px-2 py-3 flex flex-col items-center justify-center gap-2 transition-all text-center",
                      businessType === type.id 
                        ? "bg-[#fff6ec] border-brand-orange text-brand-orange shadow-sm" 
                        : "bg-white border-gray-200 text-[#777] hover:border-brand-orange/50"
                    )}
                  >
                    {type.icon}
                    <span className="text-xs font-bold">{type.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4b5966] ml-1">Business Name</label>
                <div className="relative">
                  <Store size={16} className="absolute top-4 left-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                    placeholder="e.g. Mama Put Kitchen"
                    className="w-full pl-10 pr-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4b5966] ml-1">Owner Name</label>
                <div className="relative">
                  <User size={16} className="absolute top-4 left-4 text-gray-400" />
                  <input
                    type="text"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange/50"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4b5966] ml-1">Email Address</label>
                <div className="relative">
                  <Mail size={16} className="absolute top-4 left-4 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="partner@chopkola.com"
                    className="w-full pl-10 pr-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange/50"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#4b5966] ml-1">Phone Number</label>
                <div className="relative">
                  <Phone size={16} className="absolute top-4 left-4 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+234..."
                    className="w-full pl-10 pr-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange/50"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#4b5966] ml-1">Business Address</label>
              <div className="relative">
                <MapPin size={16} className="absolute top-4 left-4 text-gray-400" />
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  placeholder="Where is your business located?"
                  className="w-full pl-10 pr-4 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange/50"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#4b5966] ml-1">Create Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={16} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Min. 8 characters"
                  className="w-full pl-10 pr-11 py-3.5 bg-[#f8f8fb] border border-transparent rounded-2xl focus:bg-white outline-none transition-all text-[#4b5966] text-sm font-medium placeholder:text-gray-400 focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange/50"
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#4b5966] transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className={cn(
                "w-full py-4 text-white rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group mt-6",
                currentTheme.primary, currentTheme.shadow
              )}
            >
              Create Partner Account
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <p className="text-[11px] text-[#777] text-center mt-4">
              By registering, you agree to our <a href="#" className="text-brand-orange underline">Partner Terms</a> and <a href="#" className="text-brand-orange underline">Privacy Policy</a>.
            </p>

          </form>
        </div>
      </div>

      {/* --- Right Side: Visual Panel --- */}
      <div className="hidden lg:block w-[45%] relative overflow-hidden bg-[#4b5966]">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            {/* Background with Blend Mode */}
            <div className={cn("absolute inset-0 opacity-30 mix-blend-multiply", currentTheme.primary)} />
            <img
              src={currentTheme.image}
              alt="Background"
              className="w-full h-full object-cover"
            />
            
            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 w-full p-16 bg-gradient-to-t from-[#000]/90 via-[#000]/50 to-transparent text-white">
              <div>
                <div className="inline-flex items-center gap-2 bg-[#5caf90]/20 border border-[#5caf90]/40 px-3 py-1 rounded-full text-xs font-bold text-[#5caf90] mb-6 backdrop-blur-md">
                  <UploadCloud size={14} /> Fast Onboarding
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold font-manrope mb-4 leading-tight">
                  "We increased our daily orders by 40% in the first month."
                </h3>
                <div className="flex items-center gap-4 mt-6">
                  <img src="https://placehold.co/50x50/fff/5caf90?text=A" className="w-12 h-12 rounded-full border-2 border-[#5caf90]" alt="Owner" />
                  <div>
                    <p className="font-bold text-sm">Amara N.</p>
                    <p className="text-xs opacity-70">Owner, Green Leaf Grocers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default VendorUserRegistrationPageLayout;