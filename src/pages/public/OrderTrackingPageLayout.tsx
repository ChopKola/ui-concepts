import { 
  Phone, MessageSquare, MapPin, CheckCircle2, Navigation, Bike
} from 'lucide-react';
import { cn } from '../../utils/helpers';

const OrderTrackingPageLayout = () => {
  // Mock Progress
  const currentStep = 3; // 1: Confirmed, 2: Preparing, 3: On the way, 4: Delivered
  
  const steps = [
    { id: 1, label: "Order Confirmed", time: "12:30 PM" },
    { id: 2, label: "Preparing Food", time: "12:35 PM" },
    { id: 3, label: "Rider Picked Up", time: "12:50 PM" },
    { id: 4, label: "Delivered", time: "Est. 1:10 PM" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins text-[#4b5966]">

      <main className="container mx-auto px-4 py-8 h-[calc(100vh-100px)]">
        <div className="flex flex-col lg:flex-row gap-6 h-full">
          
          {/* --- Left Panel: Status & Details --- */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            {/* Status Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold font-manrope">Arriving in 15 mins</h1>
                  <p className="text-[#5caf90] text-sm font-bold">On the way to you</p>
                </div>
                <div className="w-12 h-12 bg-[#fff6ec] rounded-full flex items-center justify-center animate-pulse">
                  <Bike size={24} className="text-brand-orange" />
                </div>
              </div>

              {/* Vertical Timeline */}
              <div className="space-y-6 relative pl-2">
                {/* Line */}
                <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gray-100"></div>
                
                {steps.map((step) => (
                  <div key={step.id} className="relative flex items-start gap-4 group">
                    <div className={cn(
                      "relative z-10 w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors",
                      step.id < currentStep ? "bg-[#5caf90] border-[#5caf90] text-white" :
                      step.id === currentStep ? "bg-white border-brand-orange text-brand-orange" :
                      "bg-white border-gray-200 text-gray-300"
                    )}>
                      {step.id < currentStep ? <CheckCircle2 size={16} /> : 
                       step.id === currentStep ? <Navigation size={16} className="animate-bounce" /> : 
                       <span className="w-2 h-2 rounded-full bg-gray-200" />}
                    </div>
                    <div className={step.id > currentStep ? "opacity-50" : "opacity-100"}>
                      <h4 className="font-bold text-sm">{step.label}</h4>
                      <p className="text-xs text-[#777]">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rider Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="https://placehold.co/100x100/4b5966/fff?text=MD" className="w-12 h-12 rounded-full object-cover" alt="Rider" />
                  <div className="absolute -bottom-1 -right-1 bg-[#5caf90] text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">
                    4.9 ★
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-sm">Michael D.</h4>
                  <p className="text-xs text-[#777]">Your Rider • Honda Bike</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-[#f8f8fb] text-[#4b5966] hover:bg-brand-orange hover:text-white flex items-center justify-center transition-colors">
                  <MessageSquare size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-[#f8f8fb] text-[#4b5966] hover:bg-[#5caf90] hover:text-white flex items-center justify-center transition-colors">
                  <Phone size={18} />
                </button>
              </div>
            </div>

            {/* Order Details */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex-1">
              <h3 className="font-bold mb-4 text-sm uppercase text-[#777] tracking-wider">Order Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">2x Jollof Rice Combo</span>
                  <span>$29.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="font-bold">1x Fried Plantain</span>
                  <span>$4.00</span>
                </div>
                <div className="border-t border-dashed border-gray-200 my-2"></div>
                <div className="flex justify-between font-extrabold text-lg text-brand-orange">
                  <span>Total</span>
                  <span>$33.00</span>
                </div>
              </div>
            </div>

          </div>

          {/* --- Right Panel: Map (Mockup) --- */}
          <div className="w-full lg:w-2/3 h-[400px] lg:h-auto bg-gray-200 rounded-[2.5rem] overflow-hidden relative shadow-inner border border-gray-300">
            <img 
              src="https://placehold.co/1200x800/e2e8f0/94a3b8?text=Map+View+Integration" 
              className="w-full h-full object-cover opacity-50"
              alt="Map" 
            />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-24 h-24 bg-brand-orange/20 rounded-full animate-ping absolute inset-0"></div>
                <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center relative z-10">
                  <Bike size={24} className="text-brand-orange" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 bg-white px-4 py-2 rounded-xl shadow-lg text-xs font-bold text-[#4b5966] flex items-center gap-2">
              <MapPin size={14} className="text-red-500" />
              12B Victoria Island
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default OrderTrackingPageLayout;