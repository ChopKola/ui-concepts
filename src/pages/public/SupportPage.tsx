import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ChevronDown, ChevronUp, MessageCircle, 
  Phone, Mail, ShoppingBag, CreditCard, User, 
  Truck, MapPin, ArrowRight
} from 'lucide-react';
import { cn } from '../../utils/helpers';

// --- Mock Data ---
const QUICK_TOPICS = [
  { icon: <ShoppingBag />, title: "Orders", desc: "Track, cancel, or report issues with current orders." },
  { icon: <CreditCard />, title: "Payments", desc: "Refunds, charges, and payment method help." },
  { icon: <User />, title: "Account", desc: "Profile settings, addresses, and login issues." },
  { icon: <Truck />, title: "Delivery", desc: "Delivery fees, times, and driver info." },
];

const FAQS = {
  "Orders": [
    { q: "Where is my order?", a: "You can track your order in real-time by visiting the 'My Orders' section in your account. You will see the preparation status and the rider's location on the map." },
    { q: "Can I cancel my order?", a: "Yes, you can cancel an order within 5 minutes of placing it for a full refund. If the restaurant has already started preparing the food, a cancellation fee may apply." },
    { q: "I received the wrong items.", a: "We are sorry about that! Please go to 'My Orders', select the order, and click 'Report an Issue'. We will process a refund or redelivery immediately." },
  ],
  "Payments": [
    { q: "When will I receive my refund?", a: "Refunds are processed immediately by us, but it may take 3-5 business days for your bank to reflect the amount in your account." },
    { q: "Do you accept cash on delivery?", a: "To ensure safety and efficiency, we currently prioritize digital payments. Cash on Delivery is available only in select zones." },
  ],
  "Account": [
    { q: "How do I reset my password?", a: "Go to the Login page and click 'Forgot Password'. We will send a reset link to your registered email address." },
    { q: "Can I change my phone number?", a: "Yes, navigate to Account Settings > Profile Information to update your contact details." },
  ]
};

// --- Sub-Components ---

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => (
  <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden mb-4 transition-all duration-300 hover:shadow-md">
    <button 
      onClick={onClick}
      className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
    >
      <span className={cn("font-bold text-[#4b5966]", isOpen ? "text-brand-orange" : "")}>
        {question}
      </span>
      {isOpen ? <ChevronUp className="text-brand-orange" /> : <ChevronDown className="text-gray-400" />}
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-5 pb-5 text-sm text-[#777] leading-relaxed border-t border-dashed border-gray-100 pt-4">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- Main Page ---

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState("Orders");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins">

      {/* 1. Hero & Search */}
      <section className="bg-[#4b5966] pt-20 pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <span className="bg-white/10 text-[#5caf90] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10 backdrop-blur-md">
            Help Center
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white font-manrope mb-6">
            How can we help you?
          </h1>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl relative group">
            <input 
              type="text" 
              placeholder="Search for issues (e.g., 'Refund', 'Late Order')..." 
              className="w-full h-16 pl-14 pr-6 rounded-full bg-white text-[#4b5966] font-medium focus:outline-none focus:ring-4 focus:ring-[#5caf90]/30 transition-all shadow-2xl"
            />
            <Search className="absolute left-5 top-5 text-gray-400 group-focus-within:text-[#5caf90] transition-colors" size={24} />
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-5"></div>
      </section>

      {/* 2. Quick Topic Cards (Overlapping Hero) */}
      <div className="container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_TOPICS.map((topic, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gray-50 text-center flex flex-col items-center cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#f8f8fb] flex items-center justify-center text-[#4b5966] mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                {/* Clone element to apply styling if needed, simpler here to just wrap */}
                <div className="scale-125">{topic.icon}</div>
              </div>
              <h3 className="text-lg font-bold text-[#4b5966] mb-2">{topic.title}</h3>
              <p className="text-xs text-[#777] leading-relaxed">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <main className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* 3. FAQ Section */}
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-[#4b5966] font-manrope mb-8">Frequently Asked Questions</h2>
            
            {/* Tabs */}
            <div className="flex gap-3 mb-8 overflow-x-auto no-scrollbar pb-2">
              {Object.keys(FAQS).map((tab) => (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); setOpenFaqIndex(0); }}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                    activeTab === tab 
                      ? "bg-[#5caf90] text-white shadow-md" 
                      : "bg-white text-[#777] border border-gray-200 hover:border-[#5caf90]"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Accordion List */}
            <div className="space-y-2">
              {FAQS[activeTab as keyof typeof FAQS].map((faq, i) => (
                <FAQItem 
                  key={i} 
                  question={faq.q} 
                  answer={faq.a} 
                  isOpen={openFaqIndex === i}
                  onClick={() => toggleFaq(i)}
                />
              ))}
            </div>
          </div>

          {/* 4. Contact / Sticky Sidebar */}
          <aside className="w-full lg:w-1/3 flex-shrink-0">
            <div className="sticky top-32 space-y-6">
              
              {/* Live Chat Card */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-[#5caf90]" />
                
                <div className="w-16 h-16 bg-[#fff6ec] rounded-full flex items-center justify-center mx-auto mb-4 text-brand-orange">
                  <MessageCircle size={32} />
                </div>
                <h3 className="text-xl font-bold text-[#4b5966] mb-2">Still need help?</h3>
                <p className="text-sm text-[#777] mb-6">Our support team is available 24/7 to assist you with any issues.</p>
                
                <button className="w-full py-4 bg-brand-orange text-white rounded-xl font-bold shadow-lg hover:bg-[#e67e22] transition-all flex items-center justify-center gap-2 relative">
                  <span className="absolute top-4 right-4 w-3 h-3 bg-green-400 border-2 border-brand-orange rounded-full"></span>
                  Start Live Chat
                </button>
              </div>

              {/* Other Contact Options */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                <div className="space-y-4">
                  <a href="mailto:support@chopkola.com" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#f8f8fb] transition-colors group">
                    <div className="w-10 h-10 bg-[#ecf0ff] rounded-full flex items-center justify-center text-[#4b5966] group-hover:text-[#5caf90]">
                      <Mail size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[#4b5966]">Email Support</h4>
                      <p className="text-xs text-[#777]">Response within 24hrs</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#5caf90]" />
                  </a>

                  <a href="tel:+1234567890" className="flex items-center gap-4 p-4 rounded-2xl hover:bg-[#f8f8fb] transition-colors group">
                    <div className="w-10 h-10 bg-[#e2fde2] rounded-full flex items-center justify-center text-[#5caf90]">
                      <Phone size={18} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-[#4b5966]">Call Us</h4>
                      <p className="text-xs text-[#777]">Mon-Fri, 9am - 6pm</p>
                    </div>
                    <ArrowRight size={16} className="text-gray-300 group-hover:text-[#5caf90]" />
                  </a>
                </div>
              </div>

              {/* Office Address (Optional Trust Builder) */}
              <div className="flex items-start gap-3 px-4 text-xs text-[#777]">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <p>Headquarters: 123 Lagos Street, Victoria Island, Lagos, Nigeria.</p>
              </div>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
};

export default SupportPage;