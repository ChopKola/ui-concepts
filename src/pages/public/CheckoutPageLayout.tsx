import { useState } from 'react';
import { 
  MapPin, Clock, CreditCard, Wallet, ChevronRight, 
  CheckCircle2, Plus, Bike, ShieldCheck, Home, Briefcase, ArrowLeft
} from 'lucide-react';
import { cn, navigateToTargetUrl } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';

// --- Mock Data ---
const SAVED_ADDRESSES = [
  { id: 1, type: 'Home', label: '12B Victoria Island, Lagos', details: 'Gate code: 1234', active: true },
  { id: 2, type: 'Work', label: 'Tech Hub, Yaba', details: '3rd Floor, Office 4B', active: false },
];

const PAYMENT_METHODS = [
  { id: 'wallet', name: 'Chopkola Wallet', balance: 85.00, icon: <Wallet size={20} /> },
  { id: 'card', name: 'Mastercard **** 4242', icon: <CreditCard size={20} /> },
  { id: 'cash', name: 'Cash on Delivery', icon: <Briefcase size={20} /> },
];

const ORDER_ITEMS = [
  { id: 1, name: "Jollof Rice Combo", vendor: "Mama Put Kitchen", price: 14.50, qty: 2 },
  { id: 2, name: "Grilled Catfish", vendor: "Mama Put Kitchen", price: 22.00, qty: 1 },
  { id: 3, name: "Long Grain Rice (5kg)", vendor: "Green Leaf Grocers", price: 45.00, qty: 1 },
];

// --- Components ---

const SectionHeader = ({ step, title, icon: Icon, isCompleted }: any) => (
  <div className="flex items-center gap-4 mb-6">
    <div className={cn(
      "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors",
      isCompleted ? "bg-[#5caf90] text-white" : "bg-[#4b5966] text-white"
    )}>
      {isCompleted ? <CheckCircle2 size={20} /> : step}
    </div>
    <h2 className="text-xl font-bold text-[#4b5966] font-manrope flex items-center gap-2">
      {Icon && <Icon size={20} className="text-brand-orange" />}
      {title}
    </h2>
  </div>
);

const AddressCard = ({ data, selected, onSelect }: any) => (
  <div 
    onClick={() => onSelect(data.id)}
    className={cn(
      "p-4 rounded-2xl border-2 cursor-pointer transition-all relative overflow-hidden group",
      selected 
        ? "border-[#5caf90] bg-[#e2fde2]/30" 
        : "border-gray-100 bg-white hover:border-gray-200"
    )}
  >
    <div className="flex items-start justify-between mb-2">
      <div className="flex items-center gap-2">
        <div className={cn("p-2 rounded-lg", selected ? "bg-[#5caf90] text-white" : "bg-gray-100 text-gray-500")}>
          {data.type === 'Home' ? <Home size={16} /> : <Briefcase size={16} />}
        </div>
        <span className="font-bold text-[#4b5966]">{data.type}</span>
      </div>
      {selected && <div className="w-5 h-5 bg-[#5caf90] rounded-full flex items-center justify-center text-white"><CheckCircle2 size={12} /></div>}
    </div>
    <p className="text-sm text-[#4b5966] font-medium mb-1">{data.label}</p>
    <p className="text-xs text-[#777]">{data.details}</p>
  </div>
);

const CheckoutPageLayout = () => {
  const [selectedAddress, setSelectedAddress] = useState(1);
  const [deliveryType, setDeliveryType] = useState('standard');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [tipAmount, setTipAmount] = useState(2); // Default $2 tip
  const [note, setNote] = useState('');

  // Calculations
  const subtotal = ORDER_ITEMS.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const deliveryFee = deliveryType === 'priority' ? 6.99 : 4.99;
  const serviceFee = 2.50;
  const total = subtotal + deliveryFee + serviceFee + tipAmount;

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">
      
      {/* --- Simplified Header --- */}
      <header className="bg-white border-b border-gray-100 py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/cart" className="p-2 bg-gray-50 rounded-full hover:bg-gray-100 text-[#4b5966]">
              <ArrowLeft size={20} />
            </a>
            <span className="text-xl font-extrabold text-brand-orange font-manrope">Checkout</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-[#777]">
            <ShieldCheck size={14} className="text-[#5caf90]" /> Secure Checkout
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* --- Left Column: Forms --- */}
          <div className="lg:w-2/3 space-y-8">
            
            {/* 1. Delivery Details */}
            <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
              <SectionHeader step={1} title="Delivery Details" icon={MapPin} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {SAVED_ADDRESSES.map((addr) => (
                  <AddressCard 
                    key={addr.id} 
                    data={addr} 
                    selected={selectedAddress === addr.id} 
                    onSelect={setSelectedAddress} 
                  />
                ))}
                {/* Add New Button */}
                <button className="p-4 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-[#777] hover:border-brand-orange hover:text-brand-orange transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                    <Plus size={16} />
                  </div>
                  <span className="text-xs font-bold">Add New Address</span>
                </button>
              </div>

              {/* Instructions */}
              <div>
                <label className="text-xs font-bold text-[#4b5966] uppercase tracking-wider ml-1 mb-2 block">Delivery Instructions</label>
                <textarea 
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="e.g. Leave at the front door, call when close..."
                  className="w-full p-4 bg-[#f8f8fb] rounded-2xl border border-transparent focus:bg-white focus:border-brand-orange/50 outline-none text-sm resize-none transition-all"
                  rows={2}
                />
                <div className="flex items-center gap-2 mt-3">
                  <input type="checkbox" id="contactless" className="accent-brand-orange w-4 h-4" />
                  <label htmlFor="contactless" className="text-sm text-[#4b5966] font-medium cursor-pointer">Leave at door (Contact-free delivery)</label>
                </div>
              </div>
            </section>

            {/* 2. Delivery Priority */}
            <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
              <SectionHeader step={2} title="Delivery Priority" icon={Clock} />
              
              <div className="space-y-3">
                <label className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all",
                  deliveryType === 'standard' ? "border-[#5caf90] bg-[#e2fde2]/20" : "border-gray-100 hover:border-gray-200"
                )}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="delivery" 
                      checked={deliveryType === 'standard'} 
                      onChange={() => setDeliveryType('standard')}
                      className="accent-[#5caf90] w-5 h-5"
                    />
                    <div>
                      <span className="font-bold text-[#4b5966] block">Standard Delivery</span>
                      <span className="text-xs text-[#777]">25 - 35 mins</span>
                    </div>
                  </div>
                  <span className="font-bold text-[#4b5966]">$4.99</span>
                </label>

                <label className={cn(
                  "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all",
                  deliveryType === 'priority' ? "border-brand-orange bg-[#fff6ec]" : "border-gray-100 hover:border-gray-200"
                )}>
                  <div className="flex items-center gap-4">
                    <input 
                      type="radio" 
                      name="delivery" 
                      checked={deliveryType === 'priority'} 
                      onChange={() => setDeliveryType('priority')}
                      className="accent-brand-orange w-5 h-5"
                    />
                    <div>
                      <span className="font-bold text-[#4b5966] block flex items-center gap-2">
                        Priority Delivery <span className="bg-brand-orange text-white text-[10px] px-2 rounded-full">FAST</span>
                      </span>
                      <span className="text-xs text-[#777]">15 - 25 mins • Direct to you</span>
                    </div>
                  </div>
                  <span className="font-bold text-[#4b5966]">$6.99</span>
                </label>
              </div>
            </section>

            {/* 3. Payment Method */}
            <section className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
              <SectionHeader step={3} title="Payment Method" icon={CreditCard} />
              
              <div className="space-y-3">
                {PAYMENT_METHODS.map((method) => (
                  <label 
                    key={method.id}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-2xl border-2 cursor-pointer transition-all",
                      paymentMethod === method.id ? "border-[#4b5966] bg-gray-50" : "border-gray-100 hover:border-gray-200"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <input 
                        type="radio" 
                        name="payment" 
                        checked={paymentMethod === method.id} 
                        onChange={() => setPaymentMethod(method.id)}
                        className="accent-[#4b5966] w-5 h-5"
                      />
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm text-[#4b5966]">
                        {method.icon}
                      </div>
                      <div>
                        <span className="font-bold text-[#4b5966] block">{method.name}</span>
                        {method.id === 'wallet' && (
                          <span className="text-xs text-[#5caf90] font-bold">Balance: ${method.balance!.toFixed(2)}</span>
                        )}
                      </div>
                    </div>
                  </label>
                ))}
                
                {/* Add Card Button */}
                <button className="w-full py-3 border border-dashed border-gray-300 rounded-2xl text-sm font-bold text-[#777] hover:bg-[#f8f8fb] hover:text-[#4b5966] transition-colors flex items-center justify-center gap-2">
                  <Plus size={16} /> Add New Card
                </button>
              </div>
            </section>

          </div>

          {/* --- Right Column: Summary (Sticky) --- */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              
              {/* Order Summary Card */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-lg">
                <h3 className="text-lg font-bold text-[#4b5966] mb-4">Order Summary</h3>
                
                {/* Items List */}
                <div className="space-y-4 mb-6 max-h-60 overflow-y-auto no-scrollbar">
                  {ORDER_ITEMS.map((item) => (
                    <div key={item.id} className="flex justify-between items-start text-sm">
                      <div className="flex gap-3">
                        <span className="font-bold text-brand-orange bg-orange-50 px-1.5 rounded h-fit">{item.qty}x</span>
                        <div>
                          <span className="text-[#4b5966] block font-medium">{item.name}</span>
                          <span className="text-[10px] text-[#777]">{item.vendor}</span>
                        </div>
                      </div>
                      <span className="font-bold text-[#4b5966]">${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-dashed border-gray-200 my-4"></div>

                {/* Tip Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-xs font-bold text-[#4b5966] uppercase">Rider Tip</label>
                    <span className="text-[10px] text-[#777]">100% goes to the rider</span>
                  </div>
                  <div className="flex gap-2">
                    {[0, 2, 4, 6].map((amt) => (
                      <button 
                        key={amt}
                        onClick={() => setTipAmount(amt)}
                        className={cn(
                          "flex-1 py-2 rounded-lg text-xs font-bold transition-all border",
                          tipAmount === amt 
                            ? "bg-[#5caf90] text-white border-[#5caf90]" 
                            : "bg-white text-[#777] border-gray-200 hover:border-[#5caf90]"
                        )}
                      >
                        {amt === 0 ? "None" : `$${amt}`}
                      </button>
                    ))}
                    <div className="relative flex-1">
                      <span className="absolute left-2 top-2 text-xs text-[#777]">$</span>
                      <input 
                        type="number" 
                        placeholder="Other"
                        className="w-full py-2 pl-4 pr-1 rounded-lg border border-gray-200 text-xs font-bold outline-none focus:border-[#5caf90] text-center"
                        onChange={(e) => setTipAmount(Number(e.target.value))}
                      />
                    </div>
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-2 mb-6 text-sm">
                  <div className="flex justify-between text-[#777]">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#777]">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#777]">
                    <span>Service Fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#5caf90]">
                    <span>Rider Tip</span>
                    <span>${tipAmount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-end">
                    <span className="text-[#4b5966] font-extrabold text-lg">Total</span>
                    <span className="text-brand-orange font-extrabold text-2xl">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button onClick={() => navigateToTargetUrl('/order-completed', navigate)} className="w-full py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-lg hover:bg-[#e17055] transition-all flex items-center justify-center gap-2 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Place Order <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>

                <p className="text-[10px] text-center text-[#777] mt-4 px-4">
                  By placing this order, you agree to our Terms of Service and Privacy Policy.
                </p>

              </div>

              {/* Trust Banner */}
              <div className="bg-[#e2fde2] rounded-2xl p-4 flex items-center gap-3 border border-[#5caf90]/20">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#5caf90] flex-shrink-0">
                  <Bike size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#4b5966]">Carbon Neutral Delivery</h4>
                  <p className="text-[10px] text-[#777]">We offset carbon emissions for every mile.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CheckoutPageLayout;