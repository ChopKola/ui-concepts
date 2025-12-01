import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ShoppingBag, Search, User, 
  Phone, ChevronDown, Mail, LogIn, UserPlus, MapPin
} from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { navItems } from '../../../data/nav';
import { cn } from '../../../utils/helpers';


const Header = ({ toggleCart }: { toggleCart: () => void }) => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currency, setCurrency] = useState('USD $');
  const [query, setQuery] = useState("");

  const currencies = ['USD $', 'EUR €', 'GBP £'];

  const handleSearch = () => {
    if (!query.trim()) return;  // Optionally block empty searches
    console.log("Searching for:", query);
    // Add your actual search logic here...

    // navigate to search result page
    navigate('/search-results');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#f8f8fb] text-[#777] py-2.5 text-[11px] font-medium border-b border-gray-200 hidden lg:block relative z-[51]">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 hover:text-brand-orange transition-colors cursor-pointer">
              <Phone size={13} /> +1 202 555 0191
            </span>
            <span className="flex items-center gap-1.5 hover:text-brand-orange transition-colors cursor-pointer">
              <Mail size={13} /> info@chopkola.com
            </span>
          </div>
          <div className="text-center hidden xl:block text-[#4b5966]">
            Connecting You to the Heart of African Food—Fresh, Authentic, and Close to Home.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-orange transition-colors">Help?</a>
            <a href="#" className="hover:text-brand-orange transition-colors">Track Order</a>
            
            {/* Currency Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 cursor-pointer hover:text-brand-orange focus:outline-none">
                {currency} <ChevronDown size={12} className="transition-transform group-hover:rotate-180"/>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 top-full pt-2 w-24 hidden group-hover:block">
                <div className="bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-1">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={cn(
                        "w-full text-left px-4 py-2 text-xs hover:bg-[#f8f8fb] hover:text-brand-orange transition-colors",
                        currency === curr ? "text-brand-orange font-bold" : "text-[#777]"
                      )}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={cn("bg-white transition-all duration-300 z-50 w-full border-b border-gray-100", isScrolled ? "fixed top-0 shadow-md" : "relative")}>
        <div className="container mx-auto px-4 py-4 lg:py-5 flex items-center justify-between gap-8">
          
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <div className="text-3xl font-extrabold text-brand-orange tracking-tight font-manrope group-hover:opacity-90 transition-opacity">
              Chopkola<span className="text-[#5caf90]">.</span>
            </div>
          </Link>

          {/* Search Bar - Desktop - Pill Shape */}
          <div className="hidden lg:flex flex-1 max-w-2xl relative">
            <input 
              type="text" 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search for rice, spices, restaurants..." 
              className="w-full h-12 pl-6 pr-12 bg-[#f8f8fb] border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-brand-orange/30 focus:shadow-lg focus:shadow-brand-orange/5 transition-all text-sm text-[#4b5966]"
            />
            <button onClick={handleSearch} className="absolute right-1.5 top-1.5 h-9 w-9 bg-white rounded-full flex items-center justify-center text-[#4b5966] hover:bg-brand-orange hover:text-white transition-all shadow-sm">
              <Search size={18} />
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            
            {/* Account Dropdown */}
            <div className="hidden lg:flex flex-col items-end cursor-pointer group relative px-2">
              <div className="flex items-center gap-2 py-2">
                <div className="w-10 h-10 rounded-full bg-[#f8f8fb] flex items-center justify-center text-[#4b5966] group-hover:bg-brand-orange group-hover:text-white transition-colors">
                  <User size={20} />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[10px] font-bold text-[#777] uppercase tracking-wider">Account</span>
                  <span className="text-sm font-bold text-[#4b5966] group-hover:text-brand-orange transition-colors">Login</span>
                </div>
              </div>

              {/* Invisible Bridge for Hover */}
              <div className="absolute top-full right-0 h-2 w-full bg-transparent" />

              {/* Dropdown Content */}
              <div className="absolute top-[calc(100%+0.5rem)] right-0 w-52 hidden group-hover:block z-50">
                <div className="bg-white border border-gray-100 shadow-xl rounded-2xl overflow-hidden p-2">
                  <a href="/login" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#4b5966] hover:bg-[#fff6ec] hover:text-brand-orange rounded-xl transition-colors">
                    <LogIn size={18} />
                    <span>Login</span>
                  </a>
                  <a href="/register" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#4b5966] hover:bg-[#fff6ec] hover:text-brand-orange rounded-xl transition-colors">
                    <UserPlus size={18} />
                    <span>Register</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Cart */}
            <div className="relative cursor-pointer group px-2" onClick={toggleCart}>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <ShoppingBag size={26} className="text-[#4b5966] group-hover:text-brand-orange transition-colors" />
                  <span className="absolute -top-1 -right-1.5 bg-brand-orange text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-white shadow-sm">
                    3
                  </span>
                </div>
                <span className="hidden xl:block text-sm font-bold text-[#4b5966] group-hover:text-brand-orange transition-colors">
                  Cart
                </span>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden p-2 text-[#4b5966]" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={26} />
            </button>
          </div>
        </div>

        {/* Navigation - Desktop */}
        <div className="hidden lg:block border-t border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              
              {/* All Services Button */}
              <div className="relative group z-40">
                <div className="w-60 bg-brand-orange py-3.5 px-6 flex items-center justify-between text-white cursor-pointer hover:bg-[#e67e22] transition-colors rounded-full -my-5 shadow-lg shadow-brand-orange/20">
                  <div className="flex items-center gap-3">
                    <Menu size={20} />
                    <span className="font-bold text-sm">All Services</span>
                  </div>
                  <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
                </div>
                {/* Simple Dropdown Placeholder */}
                <div className="absolute top-[calc(100%+10px)] left-0 w-60 bg-white border border-gray-100 shadow-xl rounded-2xl p-2 hidden group-hover:block">
                   {['Restaurants', 'Grocery', 'Catering', 'Bulk Order'].map(item => (
                     <div key={item} className="px-4 py-2.5 hover:bg-gray-50 rounded-lg text-sm text-[#4b5966] hover:text-brand-orange cursor-pointer transition-colors font-medium">
                       {item}
                     </div>
                   ))}
                </div>
              </div>

              {/* Main Nav Links */}
              <nav className="flex-1 flex justify-end gap-8">
                {navItems.map((item) => (
                  <NavLink to={item.link} key={item.id} className="text-[#4b5966] font-bold text-sm hover:text-brand-orange py-4 transition-colors relative group">
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-brand-orange rounded-t-full transition-all duration-300 group-hover:w-full"></span>
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#4b5966]/60 backdrop-blur-sm z-[60]" onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[300px] bg-white z-[70] flex flex-col shadow-2xl"
            >
              {/* Mobile Header */}
              <div className="p-5 flex justify-between items-center border-b border-gray-100 bg-[#f8f8fb]">
                <span className="font-extrabold text-xl text-brand-orange font-manrope">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white rounded-full text-[#777] shadow-sm">
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-5 flex-1 overflow-y-auto">
                {/* Mobile Actions */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                   <Link to="/login" className="flex flex-col items-center justify-center gap-2 py-4 border border-gray-200 rounded-2xl text-sm font-bold text-[#4b5966] hover:border-brand-orange hover:text-brand-orange transition-colors bg-white shadow-sm">
                     <LogIn size={20} /> Login
                   </Link>
                   <Link to="/register" className="flex flex-col items-center justify-center gap-2 py-4 bg-brand-orange text-white rounded-2xl text-sm font-bold hover:bg-[#e67e22] transition-colors shadow-lg shadow-brand-orange/20">
                     <UserPlus size={20} /> Register
                   </Link>
                </div>

                {/* Links */}
                <nav className="flex flex-col space-y-1">
                  {['Home', 'Restaurants', 'Marketplace', 'Blog', 'Contact'].map((item) => (
                    <a key={item} href="#" className="text-[#4b5966] font-medium px-4 py-3 hover:bg-[#f8f8fb] hover:text-brand-orange rounded-xl transition-colors flex justify-between items-center group">
                      {item}
                      <ChevronDown size={16} className="-rotate-90 text-gray-300 group-hover:text-brand-orange transition-colors" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Mobile Footer */}
              <div className="p-5 border-t border-gray-100 bg-[#f8f8fb]">
                <div className="flex items-center gap-2 text-xs text-[#777] mb-2">
                  <MapPin size={14} /> Lagos, Nigeria
                </div>
                <div className="flex items-center gap-2 text-xs text-[#777]">
                  <Mail size={14} /> help@chopkola.com
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;