import { motion } from 'framer-motion';
import { 
  Minus, Plus, Trash2, ArrowRight, 
  Utensils, ShoppingBasket, Clock, MapPin, 
  ShieldCheck, Ticket
} from 'lucide-react';
import { cn, navigateToTargetUrl } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

// --- Mock Data ---
const INITIAL_CART = {
  restaurant: {
    vendor: "Mama Put Kitchen",
    deliveryTime: "35-45 mins",
    items: [
      { id: 101, name: "Signature Jollof Combo", extras: "Spicy, Extra Plantain", price: 14.50, qty: 2, img: "https://placehold.co/150x150/e17055/fff?text=Jollof" },
      { id: 102, name: "Grilled Catfish", extras: "Medium Size", price: 22.00, qty: 1, img: "https://placehold.co/150x150/4b5966/fff?text=Fish" },
    ]
  },
  market: {
    vendor: "Green Leaf Grocers",
    deliveryTime: "Today, 2pm - 4pm",
    items: [
      { id: 201, name: "Long Grain Rice (5kg)", extras: "Organic", price: 45.00, qty: 1, img: "https://placehold.co/150x150/5caf90/fff?text=Rice" },
      { id: 202, name: "Palm Oil Bottle", extras: "1 Liter", price: 8.50, qty: 2, img: "https://placehold.co/150x150/e67e22/fff?text=Oil" },
    ]
  }
};

const SUGGESTED_ITEMS = [
  { id: 901, name: "Coca Cola (50cl)", price: 1.50, img: "https://placehold.co/100x100/d63031/fff?text=Coke" },
  { id: 902, name: "Fresh Pepper (Bag)", price: 3.00, img: "https://placehold.co/100x100/ff7675/fff?text=Pepper" },
];

// --- Components ---

const QuantityBtn = ({ qty, setQty }: { qty: number, setQty: (n: number) => void }) => (
  <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50 p-1 h-8">
    <button 
      onClick={() => setQty(Math.max(0, qty - 1))}
      className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-[#4b5966] hover:text-red-500 disabled:opacity-50 transition-colors"
    >
      {qty === 1 ? <Trash2 size={12} /> : <Minus size={12} />}
    </button>
    <span className="w-8 text-center text-xs font-bold text-[#4b5966]">{qty}</span>
    <button 
      onClick={() => setQty(qty + 1)}
      className="w-6 h-6 flex items-center justify-center bg-white rounded shadow-sm text-[#4b5966] hover:text-brand-green transition-colors"
    >
      <Plus size={12} />
    </button>
  </div>
);

const CartGroup = ({ type, data }: { type: 'restaurant' | 'market', data: any }) => {
  const isRest = type === 'restaurant';
  const Icon = isRest ? Utensils : ShoppingBasket;
  const accentColor = isRest ? "text-[#e17055]" : "text-[#5caf90]";
  const bgAccent = isRest ? "bg-[#fff6ec]" : "bg-[#e2fde2]";

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      {/* Vendor Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-[#f8f8fb]/50">
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", bgAccent, accentColor)}>
            <Icon size={20} />
          </div>
          <div>
            <h3 className="font-bold text-[#4b5966] text-sm">{data.vendor}</h3>
            <span className="text-xs text-[#777] flex items-center gap-1">
              <Clock size={12} /> Arrives: {data.deliveryTime}
            </span>
          </div>
        </div>
        {/* Visual tag for split delivery */}
        <div className={cn("px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border", isRest ? "border-orange-200 text-orange-600 bg-orange-50" : "border-green-200 text-green-600 bg-green-50")}>
          {isRest ? "Hot Meal" : "Grocery"}
        </div>
      </div>

      {/* Items */}
      <div className="p-2">
        {data.items.map((item: any, idx: number) => (
          <div key={item.id} className={cn("flex gap-4 p-3 hover:bg-gray-50 rounded-2xl transition-colors", idx !== data.items.length - 1 && "border-b border-dashed border-gray-100")}>
            {/* Image */}
            <div className="w-20 h-20 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Info */}
            <div className="flex-1 flex flex-col justify-between py-1">
              <div>
                <h4 className="text-sm font-bold text-[#4b5966] line-clamp-1">{item.name}</h4>
                <p className="text-xs text-[#777]">{item.extras}</p>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-extrabold text-[#4b5966]">${(item.price * item.qty).toFixed(2)}</span>
                <QuantityBtn qty={item.qty} setQty={() => {}} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CartPageLayout = () => {
  const navigate = useNavigate();
  
  // Calculation Logic
  const restTotal = INITIAL_CART.restaurant.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const marketTotal = INITIAL_CART.market.items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const subtotal = restTotal + marketTotal;
  const deliveryFee = 4.99; // Single fee logic or split fee logic could apply
  const serviceFee = 1.50;
  const total = subtotal + deliveryFee + serviceFee;
  
  // Free Delivery Progress
  const freeDeliveryThreshold = 150;
  const progress = Math.min((subtotal / freeDeliveryThreshold) * 100, 100);
  const toGo = freeDeliveryThreshold - subtotal;

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">

      <main className="container mx-auto px-4 py-8">
        
        <h1 className="text-3xl font-extrabold font-manrope mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Left Column: Cart Items --- */}
          <div className="w-full lg:w-2/3">
            
            {/* Free Delivery Progress Bar */}
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm mb-6">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="font-bold text-[#4b5966]">
                  {toGo > 0 ? `Spend $${toGo.toFixed(2)} more for free delivery` : "You've unlocked free delivery! 🎉"}
                </span>
                <span className="text-[#5caf90] font-bold">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-brand-orange to-[#5caf90]"
                />
              </div>
            </div>

            {/* Cart Groups */}
            <CartGroup type="restaurant" data={INITIAL_CART.restaurant} />
            <CartGroup type="market" data={INITIAL_CART.market} />

            {/* "Pair With" Suggestions */}
            <div className="mt-8">
              <h3 className="font-bold text-lg mb-4">Pair with your order</h3>
              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                {SUGGESTED_ITEMS.map(item => (
                  <div key={item.id} className="min-w-[200px] bg-white p-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-3 group cursor-pointer hover:border-brand-orange/30 transition-colors">
                    <img src={item.img} className="w-12 h-12 rounded-lg object-cover" alt={item.name} />
                    <div className="flex-1">
                      <p className="text-xs font-bold text-[#4b5966] line-clamp-1">{item.name}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-[#777]">${item.price.toFixed(2)}</span>
                        <button className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[#4b5966] group-hover:bg-brand-orange group-hover:text-white transition-colors">
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* --- Right Column: Summary --- */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-28">
              
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg">
                <h3 className="font-bold text-xl font-manrope mb-6">Order Summary</h3>
                
                {/* Delivery Address Preview */}
                <div className="flex items-start gap-3 mb-6 p-3 bg-[#f8f8fb] rounded-xl border border-gray-100">
                  <MapPin size={18} className="text-brand-orange mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#4b5966]">Delivering to Home</p>
                    <p className="text-xs text-[#777] truncate max-w-[200px]">12B Victoria Island, Lagos</p>
                  </div>
                  <button className="text-xs font-bold text-[#5caf90] ml-auto">Change</button>
                </div>

                {/* Calculations */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#777]">Subtotal</span>
                    <span className="font-bold text-[#4b5966]">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#777] flex items-center gap-1">Delivery Fee <Clock size={12}/></span>
                    <span className="font-bold text-[#4b5966]">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-[#777]">Service Fee</span>
                    <span className="font-bold text-[#4b5966]">${serviceFee.toFixed(2)}</span>
                  </div>
                  {toGo <= 0 && (
                    <div className="flex justify-between text-sm text-[#5caf90]">
                      <span>Free Delivery Discount</span>
                      <span>-${deliveryFee.toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-dashed border-gray-200 my-4 pt-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[#4b5966] font-extrabold text-lg">Total</span>
                    <span className="text-brand-orange font-extrabold text-2xl">
                      ${(toGo <= 0 ? total - deliveryFee : total).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Promo Input */}
                <div className="flex gap-2 mb-6">
                  <div className="relative flex-1">
                    <Ticket size={16} className="absolute left-3 top-3.5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Promo Code" 
                      className="w-full pl-9 pr-4 py-3 bg-[#f8f8fb] rounded-xl text-sm outline-none focus:ring-2 focus:ring-brand-orange/10" 
                    />
                  </div>
                  <button className="px-4 py-3 bg-[#4b5966] text-white rounded-xl font-bold text-sm hover:bg-[#3a4650]">Apply</button>
                </div>

                {/* Checkout CTA */}
                <button onClick={() => navigateToTargetUrl('/checkout', navigate)} className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-lg hover:bg-[#e17055] transition-all flex items-center justify-center gap-2 group mb-4">
                  Proceed to Checkout 
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust Badges */}
                <div className="flex justify-center items-center gap-2 text-[10px] text-gray-400">
                  <ShieldCheck size={12} />
                  <span>Secure SSL Encrypted Transaction</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CartPageLayout;