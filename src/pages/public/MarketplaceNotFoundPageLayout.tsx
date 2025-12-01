import { motion } from 'framer-motion';
import { Home, Search, UtensilsCrossed } from 'lucide-react';
import { Link } from 'react-router-dom'; // Assuming router

const MarketplaceNotFoundPageLayout = () => {
  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966] flex flex-col">

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="text-center max-w-lg mx-auto">
          
          {/* Animated Illustration */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 mx-auto mb-8"
          >
            <div className="absolute inset-0 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative bg-white rounded-full w-full h-full flex items-center justify-center shadow-lg border-4 border-[#f8f8fb]">
              <UtensilsCrossed size={80} className="text-[#4b5966] opacity-50" />
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-0 right-0 bg-[#fff6ec] p-3 rounded-2xl shadow-sm"
            >
              <span className="text-2xl">🥕</span>
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute bottom-4 left-0 bg-[#e2fde2] p-3 rounded-2xl shadow-sm"
            >
              <span className="text-2xl">🍗</span>
            </motion.div>
          </motion.div>

          <h1 className="text-6xl font-extrabold text-brand-orange font-manrope mb-2">404</h1>
          <h2 className="text-2xl font-bold text-[#4b5966] mb-4">Oops! We ate this page.</h2>
          <p className="text-[#777] mb-8 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Or maybe we just got hungry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="px-8 py-3.5 bg-brand-orange text-white rounded-xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-[#e17055] transition-all flex items-center justify-center gap-2">
              <Home size={18} /> Back to Home
            </Link>
            <Link to="/restaurants" className="px-8 py-3.5 bg-white border border-gray-200 text-[#4b5966] rounded-xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
              <Search size={18} /> Browse Food
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
};

export default MarketplaceNotFoundPageLayout;