import { motion, AnimatePresence } from 'framer-motion';
import { 
    X, Minus, Plus, Trash2, ShoppingBag, ArrowRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { navigateToTargetUrl } from '../../../utils/helpers';

// Mock data for visualization
const CART_ITEMS = [
  { id: 1, name: "Jollof Rice & Chicken", price: 12.50, quantity: 2, image: "https://placehold.co/150x150/e67e22/fff?text=Jollof" },
  { id: 2, name: "Fried Plantain (Dodo)", price: 4.00, quantity: 1, image: "https://placehold.co/150x150/f1c40f/fff?text=Dodo" },
  { id: 3, name: "Grilled Tilapia Fish", price: 25.00, quantity: 1, image: "https://placehold.co/150x150/3498db/fff?text=Fish" },
];

const CartSidebar = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {

  const navigate = useNavigate();
  
  const subtotal = CART_ITEMS.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#4b5966]/40 backdrop-blur-sm z-[60]" 
            onClick={onClose}
          />
          
          {/* Sidebar Drawer */}
          <motion.div 
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-[70] shadow-2xl flex flex-col md:rounded-l-3xl overflow-hidden"
          >
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 bg-white border-b border-gray-100 z-10">
              <div className="flex items-center gap-3">
                <span className="bg-[#fff6ec] p-2.5 rounded-full text-brand-orange">
                  <ShoppingBag size={20} />
                </span>
                <div>
                  <h2 className="font-manrope font-bold text-xl text-[#4b5966]">Your Order</h2>
                  <p className="text-xs text-[#777]">{CART_ITEMS.length} Items in cart</p>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 hover:bg-gray-100 rounded-full text-[#777] transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Scrollable Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar bg-[#f8f8fb]">
              {CART_ITEMS.map((item) => (
                <motion.div 
                  layout
                  key={item.id} 
                  className="group flex gap-4 bg-white p-3 rounded-2xl border border-transparent hover:border-[#5caf90]/20 shadow-sm transition-all"
                >
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100 relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col flex-1 justify-between py-1">
                    <div className="flex justify-between items-start">
                      <h5 className="font-manrope font-bold text-[#4b5966] text-sm leading-tight line-clamp-2">
                        {item.name}
                      </h5>
                      <button className="text-gray-300 hover:text-red-500 transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="flex justify-between items-end mt-2">
                      <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1 border border-gray-100">
                        <button className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-[#4b5966] hover:text-[#5caf90] disabled:opacity-50">
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-[#4b5966] w-3 text-center">{item.quantity}</span>
                        <button className="w-6 h-6 flex items-center justify-center bg-white rounded-md shadow-sm text-[#4b5966] hover:text-[#5caf90]">
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="font-bold text-[#5caf90]">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer / Checkout Section */}
            <div className="bg-white p-6 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-10">
              
              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-[#777]">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#4b5966]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-[#777]">
                  <span>Delivery Fee</span>
                  <span className="font-medium text-[#4b5966]">${deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-[#4b5966] pt-3 border-t border-dashed border-gray-200">
                  <span>Total</span>
                  <span className="text-brand-orange">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => navigateToTargetUrl('/checkout', navigate, onClose)}
                  className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold text-sm hover:bg-[#e67e22] transition-colors shadow-lg shadow-brand-orange/20 flex items-center justify-center gap-2 group"
                >
                  Proceed to Checkout
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigateToTargetUrl('/cart', navigate, onClose)}
                  className="w-full py-3 bg-white text-[#777] border border-gray-200 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors"
                >
                  View Cart
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;