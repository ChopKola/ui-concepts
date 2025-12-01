import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Clock, Wallet, Users, 
  ArrowRight, Store, Bike, 
  Smartphone, ShieldCheck, Globe
} from 'lucide-react';
import { cn } from '../../utils/helpers';

// --- Data ---
const CONTENT = {
  merchant: {
    color: "bg-[#e17055]", // Brand Orange
    heroTitle: "Grow Your Business with Chopkola",
    heroDesc: "Reach thousands of new customers, increase your sales, and let us handle the logistics while you focus on the food.",
    heroImg: "https://placehold.co/800x600/fff6ec/e17055?text=Restaurant+Dashboard",
    stats: [
      { value: "30%", label: "Average Sales Increase" },
      { value: "500+", label: "Active Partners" },
      { value: "24/7", label: "Business Support" },
    ],
    benefits: [
      { icon: <TrendingUp />, title: "Boost Revenue", desc: "Access a new customer base and add an incremental revenue stream to your business." },
      { icon: <Globe />, title: "Online Visibility", desc: "Get your brand featured on our marketplace with professional marketing support." },
      { icon: <Smartphone />, title: "Easy Technology", desc: "Manage orders, menus, and insights easily with our partner dashboard app." },
    ],
    steps: ["Sign Up Online", "Set Up Menu", "Start Selling"]
  },
  rider: {
    color: "bg-[#5caf90]", // Brand Green
    heroTitle: "Earn Money on Your Own Schedule",
    heroDesc: "Be your own boss. Deliver food and groceries with your bike, scooter, or car and get paid instantly.",
    heroImg: "https://placehold.co/800x600/e2fde2/5caf90?text=Rider+App",
    stats: [
      { value: "$18/hr", label: "Average Earnings" },
      { value: "Daily", label: "Payout Options" },
      { value: "100%", label: "Tips are Yours" },
    ],
    benefits: [
      { icon: <Clock />, title: "Flexible Hours", desc: "Log in and out whenever you want. You choose when and how much you work." },
      { icon: <Wallet />, title: "Competitive Pay", desc: "Earn per delivery plus distance bonuses and 100% of customer tips." },
      { icon: <ShieldCheck />, title: "Rider Insurance", desc: "We provide accident coverage while you are online ensuring your safety." },
    ],
    steps: ["Apply Online", "Upload Documents", "Start Riding"]
  }
};

// --- Components ---

const PartnerWithUsPage = () => {
  const [activeTab, setActiveTab] = useState<'merchant' | 'rider'>('merchant');
  const currentContent = CONTENT[activeTab];

  return (
    <div className="min-h-screen bg-white font-poppins">
      <main>
        
        {/* 1. Role Switcher & Hero */}
        <section className="relative pt-12 pb-20 overflow-hidden">
          <div className="container mx-auto px-4">
            
            {/* Toggle */}
            <div className="flex justify-center mb-12">
              <div className="bg-[#f8f8fb] p-1.5 rounded-full inline-flex relative">
                {/* Sliding Background */}
                <motion.div 
                  layout
                  className={cn(
                    "absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full shadow-sm z-0",
                    activeTab === 'merchant' ? "bg-brand-orange left-1.5" : "bg-[#5caf90] right-1.5"
                  )}
                />
                
                <button 
                  onClick={() => setActiveTab('merchant')}
                  className={cn(
                    "relative z-10 flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300",
                    activeTab === 'merchant' ? "text-white" : "text-[#777]"
                  )}
                >
                  <Store size={18} /> I'm a Merchant
                </button>
                <button 
                  onClick={() => setActiveTab('rider')}
                  className={cn(
                    "relative z-10 flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-colors duration-300",
                    activeTab === 'rider' ? "text-white" : "text-[#777]"
                  )}
                >
                  <Bike size={18} /> I'm a Rider
                </button>
              </div>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2"
              >
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#4b5966] font-manrope mb-6 leading-tight">
                  {currentContent.heroTitle}
                </h1>
                <p className="text-[#777] text-lg mb-8 leading-relaxed">
                  {currentContent.heroDesc}
                </p>
                
                {/* Quick Form */}
                <div className="bg-white border border-gray-200 p-2 rounded-full shadow-lg max-w-md flex pl-6">
                  <input 
                    type="text" 
                    placeholder="Enter your email / phone" 
                    className="flex-1 bg-transparent outline-none text-[#4b5966] placeholder:text-gray-400"
                  />
                  <button className={cn(
                    "px-8 py-3 rounded-full text-white font-bold transition-colors whitespace-nowrap",
                    currentContent.color
                  )}>
                    Get Started
                  </button>
                </div>
                <p className="text-xs text-gray-400 mt-3 ml-4">No commitment required. Join for free.</p>
              </motion.div>

              <motion.div 
                key={`${activeTab}-img`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 relative"
              >
                <div className={cn("absolute inset-0 rounded-3xl opacity-10 rotate-3 transform", currentContent.color)} />
                <img 
                  src={currentContent.heroImg} 
                  alt="Partner" 
                  className="relative rounded-3xl shadow-2xl border-4 border-white w-full"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-50 hidden md:block">
                  <div className="flex gap-8">
                    {currentContent.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className={cn("text-2xl font-extrabold mb-1", activeTab === 'merchant' ? "text-brand-orange" : "text-[#5caf90]")}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-[#777] font-bold uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* 2. Benefits Grid */}
        <section className="py-20 bg-[#f8f8fb]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-[#4b5966] font-manrope">Why Partner With Us?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatePresence mode="wait">
                {currentContent.benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title + activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110",
                      currentContent.color
                    )}>
                      {/* Clone icon with size */}
                      <div className="scale-150">{benefit.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-[#4b5966] mb-3">{benefit.title}</h3>
                    <p className="text-[#777] text-sm leading-relaxed">{benefit.desc}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 3. App / Technology Section */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                 {/* Abstract Phone Graphic */}
                 <div className="relative mx-auto max-w-sm">
                    <div className={cn("absolute inset-0 rounded-[3rem] blur-3xl opacity-30", currentContent.color)} />
                    <div className="relative bg-[#4b5966] rounded-[2.5rem] border-[8px] border-[#4b5966] overflow-hidden shadow-2xl">
                      <img 
                        src="https://placehold.co/400x800/ffffff/e17055?text=App+Interface" 
                        alt="App Interface" 
                        className="w-full h-auto"
                      />
                    </div>
                 </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <span className={cn("font-bold text-sm uppercase tracking-widest mb-2 block", activeTab === 'merchant' ? "text-brand-orange" : "text-[#5caf90]")}>
                  World Class Technology
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#4b5966] font-manrope mb-6">
                  Manage everything from the palm of your hand.
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 bg-[#f8f8fb] p-2 rounded-full h-fit">
                      <Smartphone size={20} className="text-[#4b5966]"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b5966] text-lg">Real-time Dashboard</h4>
                      <p className="text-[#777] text-sm">Track orders, earnings, and performance metrics live.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-[#f8f8fb] p-2 rounded-full h-fit">
                      <Users size={20} className="text-[#4b5966]"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b5966] text-lg">Customer Insights</h4>
                      <p className="text-[#777] text-sm">Understand what your customers love and optimize your menu.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 bg-[#f8f8fb] p-2 rounded-full h-fit">
                      <Wallet size={20} className="text-[#4b5966]"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#4b5966] text-lg">Automated Payouts</h4>
                      <p className="text-[#777] text-sm">Seamless integrations with local banks for hassle-free payments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works (Steps) */}
        <section className="py-20 bg-[#4b5966] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-manrope mb-12">How it Works</h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-white/20 -z-0" />

              {currentContent.steps.map((step, i) => (
                <div key={step} className="w-full md:w-1/3 relative z-10 mb-10 md:mb-0 group">
                  <div className={cn(
                    "w-20 h-20 mx-auto rounded-full border-4 border-[#4b5966] flex items-center justify-center text-2xl font-bold mb-6 transition-colors duration-300",
                    currentContent.color, "text-white"
                  )}>
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step}</h3>
                  <p className="text-gray-300 text-sm px-8">Complete this step to move to the next stage of partnership.</p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <button className={cn(
                "px-10 py-4 rounded-full font-bold text-white hover:opacity-90 transition-all shadow-lg flex items-center gap-2 mx-auto",
                activeTab === 'merchant' ? "bg-brand-orange" : "bg-[#5caf90]"
              )}>
                Apply Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default PartnerWithUsPage;