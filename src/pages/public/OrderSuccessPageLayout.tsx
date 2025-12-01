import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, MapPin, Clock, ArrowRight, Download, 
  Bike, Copy, Smartphone, Star
} from 'lucide-react';
// import { navigateToTargetUrl } from '../../utils/helpers';
// import { useNavigate } from 'react-router-dom';

// --- Mock Data ---
const ORDER_DETAILS = {
  id: "CK-882910",
  total: 25.49,
  deliveryTime: "2:30 PM - 2:45 PM",
  address: "12B Victoria Island, Lagos",
  items: [
    { name: "Jollof Rice Combo", qty: 2 },
    { name: "Grilled Catfish", qty: 1 },
    { name: "Long Grain Rice (5kg)", qty: 1 },
  ],
  pointsEarned: 120
};

const OrderSuccessPageLayout = () => {
  const [showReceipt, setShowReceipt] = useState(false);
  // const navigate = useNavigate();

  // Simple copy to clipboard feedback
  const handleCopy = () => {
    navigator.clipboard.writeText(ORDER_DETAILS.id);
    // In a real app, show a toast here
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">

      <main className="container mx-auto px-4 py-8 md:py-12">
        
        <div className="max-w-3xl mx-auto">
          
          {/* 1. Success Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[2.5rem] shadow-xl border border-gray-100 overflow-hidden relative"
          >
            {/* Decorative Top Pattern */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-orange via-[#5caf90] to-brand-orange" />
            
            <div className="p-8 md:p-12 text-center relative z-10">
              
              {/* Animated Checkmark */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 10, delay: 0.2 }}
                className="w-24 h-24 bg-[#e2fde2] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#5caf90]/20"
              >
                <Check size={48} className="text-[#5caf90] stroke-[3px]" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[#4b5966] font-manrope mb-2">
                Order Placed Successfully!
              </h1>
              <p className="text-[#777] text-lg mb-8">
                Thanks for your order. We've received your payment.
              </p>

              {/* Order ID Badge */}
              <div 
                onClick={handleCopy}
                className="inline-flex items-center gap-3 bg-[#f8f8fb] border border-dashed border-gray-300 px-6 py-3 rounded-xl cursor-pointer hover:border-brand-orange hover:bg-[#fff6ec] transition-all group"
              >
                <span className="text-xs font-bold text-[#777] uppercase tracking-widest">Order ID</span>
                <span className="text-lg font-bold text-[#4b5966] group-hover:text-brand-orange">{ORDER_DETAILS.id}</span>
                <Copy size={16} className="text-gray-400 group-hover:text-brand-orange" />
              </div>

            </div>

            {/* 2. Tracker / Timeline */}
            <div className="bg-[#f8f8fb] p-8 md:p-10 border-t border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                  <h3 className="font-bold text-lg text-[#4b5966] flex items-center gap-2">
                    <Clock size={20} className="text-brand-orange" />
                    Estimated Delivery
                  </h3>
                  <p className="text-[#5caf90] font-bold text-2xl mt-1">{ORDER_DETAILS.deliveryTime}</p>
                </div>
                <div className="text-left md:text-right">
                  <h3 className="font-bold text-lg text-[#4b5966] flex items-center gap-2 md:justify-end">
                    <MapPin size={20} className="text-brand-orange" />
                    Delivering To
                  </h3>
                  <p className="text-[#777] mt-1">{ORDER_DETAILS.address}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative mb-8">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "35%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-[#5caf90] h-2.5 rounded-full relative"
                  >
                    {/* Bike Icon Animation */}
                    <div className="absolute right-0 -top-3 bg-white p-1 rounded-full shadow-md border border-gray-100 transform translate-x-1/2">
                      <Bike size={16} className="text-[#5caf90]" />
                    </div>
                  </motion.div>
                </div>
                <div className="flex justify-between text-xs font-bold text-[#777] mt-3 uppercase tracking-wide">
                  <span className="text-[#5caf90]">Confirmed</span>
                  <span className="text-[#4b5966]">Preparing</span>
                  <span className="text-gray-400">On the way</span>
                  <span className="text-gray-400">Delivered</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-lg shadow-brand-orange/20 hover:bg-[#e17055] transition-all flex items-center justify-center gap-2">
                  Track My Order <ArrowRight size={18} />
                </button>
                <button 
                  onClick={() => setShowReceipt(!showReceipt)}
                  className="w-full py-4 bg-white border border-gray-200 text-[#4b5966] rounded-2xl font-bold hover:bg-gray-50 transition-all"
                >
                  {showReceipt ? "Hide Receipt" : "View Receipt"}
                </button>
              </div>

              {/* Expandable Receipt */}
              <AnimatePresence>
                {showReceipt && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-6 p-6 bg-white rounded-2xl border border-gray-100">
                      <h4 className="font-bold text-sm uppercase text-gray-400 mb-4">Order Summary</h4>
                      <ul className="space-y-3 mb-4">
                        {ORDER_DETAILS.items.map((item, i) => (
                          <li key={i} className="flex justify-between text-sm">
                            <span className="text-[#4b5966]"><span className="font-bold">{item.qty}x</span> {item.name}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="border-t border-dashed border-gray-200 pt-4 flex justify-between font-bold text-lg">
                        <span>Total Paid</span>
                        <span>${ORDER_DETAILS.total}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

          {/* 3. Loyalty & App Promo (Retention) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            
            {/* Loyalty Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-[#4b5966] rounded-3xl p-6 text-white flex items-center justify-between relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-[#e67e22] p-1.5 rounded-lg"><Star size={16} className="fill-white text-white"/></div>
                  <span className="font-bold text-[#e67e22]">Points Earned</span>
                </div>
                <h3 className="text-2xl font-bold font-manrope mb-1">You earned {ORDER_DETAILS.pointsEarned} Points!</h3>
                <p className="text-gray-300 text-xs">Save them for discounts on your next meal.</p>
              </div>
              {/* Decorative */}
              <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#5caf90]/20 to-transparent"></div>
            </motion.div>

            {/* App Download */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center text-center justify-center shadow-sm"
            >
              <div className="w-12 h-12 bg-[#f8f8fb] rounded-full flex items-center justify-center text-[#4b5966] mb-3">
                <Smartphone size={24} />
              </div>
              <h4 className="font-bold text-[#4b5966] text-sm mb-1">Track Live on App</h4>
              <p className="text-[10px] text-[#777] mb-3">Enable push notifications for updates.</p>
              <button className="text-xs font-bold text-brand-orange flex items-center gap-1 hover:underline">
                Get the App <Download size={12} />
              </button>
            </motion.div>

          </div>

          <div className="text-center mt-12">
            <a href="/" className="text-[#777] font-bold text-sm hover:text-brand-orange transition-colors">
              Continue Shopping
            </a>
          </div>

        </div>
      </main>
    </div>
  );
};

export default OrderSuccessPageLayout;