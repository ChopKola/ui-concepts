import { motion } from 'framer-motion';
import { 
  Utensils, ShoppingBasket, Truck, ChefHat, 
  ArrowRight, CheckCircle2, PartyPopper, Package
} from 'lucide-react';

// --- Mock Data ---
const SERVICES = [
  {
    id: "restaurants",
    title: "Restaurant Delivery",
    subtitle: "Hot & Fresh",
    description: "Craving Jollof or a quick burger? We partner with the city's best restaurants to bring authentic flavors directly to your doorstep in minutes.",
    icon: <Utensils size={24} />,
    image: "https://placehold.co/600x400/e17055/ffffff?text=Restaurant+Meals",
    color: "bg-[#fff6ec]",
    accent: "text-[#e17055]",
    btnColor: "bg-[#e17055]",
    features: ["Curated top-rated spots", "Real-time tracking", "No minimum order"]
  },
  {
    id: "grocery",
    title: "Fresh Grocery",
    subtitle: "Farm to Table",
    description: "Skip the market stress. Shop for fresh vegetables, meat, pantry staples, and indigenous spices sourced directly from local farmers.",
    icon: <ShoppingBasket size={24} />,
    image: "https://placehold.co/600x400/5caf90/ffffff?text=Fresh+Grocery",
    color: "bg-[#e2fde2]",
    accent: "text-[#5caf90]",
    btnColor: "bg-[#5caf90]",
    features: ["Organic produce", "Same-day delivery", "Quality guarantee"]
  },
  {
    id: "catering",
    title: "Event Catering",
    subtitle: "Party Size",
    description: "Hosting a party or office lunch? Order large-format meals, trays, and drinks. We handle the logistics so you can enjoy the event.",
    icon: <PartyPopper size={24} />,
    image: "https://placehold.co/600x400/6c5ce7/ffffff?text=Event+Catering",
    color: "bg-[#f3f0ff]",
    accent: "text-[#6c5ce7]",
    btnColor: "bg-[#6c5ce7]",
    features: ["Customizable menus", "Scheduled delivery", "Professional setup"]
  },
  {
    id: "bulk",
    title: "Bulk Orders",
    subtitle: "Wholesale",
    description: "Perfect for businesses, schools, or large families. Buy rice bags, oil, and staples in bulk at competitive wholesale prices.",
    icon: <Package size={24} />,
    image: "https://placehold.co/600x400/4b5966/ffffff?text=Bulk+Orders",
    color: "bg-[#f8f8fb]",
    accent: "text-[#4b5966]",
    btnColor: "bg-[#4b5966]",
    features: ["Wholesale pricing", "Heavy logistics", "Recurring orders"]
  }
];

const HOW_IT_WORKS = [
  { title: "Choose Service", desc: "Select from Restaurants, Grocery, or Catering.", icon: <ChefHat /> },
  { title: "Place Order", desc: "Customize your items and checkout securely.", icon: <ShoppingBasket /> },
  { title: "Fast Delivery", desc: "Our riders bring it to your door in minutes.", icon: <Truck /> },
];

// --- Components ---

const ServiceCard = ({ service, index }: { service: typeof SERVICES[0], index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
  >
    {/* Image Section */}
    <div className="w-full md:w-1/2 relative overflow-hidden h-64 md:h-auto">
      <img 
        src={service.image} 
        alt={service.title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r" />
      
      {/* Floating Badge */}
      <div className={`absolute top-6 left-6 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg bg-white ${service.accent}`}>
        {service.subtitle}
      </div>
    </div>

    {/* Content Section */}
    <div className="w-full md:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color} ${service.accent}`}>
        {service.icon}
      </div>
      
      <h3 className="text-3xl font-bold text-[#4b5966] font-manrope mb-4 group-hover:text-[#5caf90] transition-colors">
        {service.title}
      </h3>
      
      <p className="text-[#777] leading-relaxed mb-8">
        {service.description}
      </p>

      <div className="space-y-3 mb-8">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-3 text-sm font-medium text-[#4b5966]">
            <CheckCircle2 size={16} className={service.accent} />
            {feature}
          </div>
        ))}
      </div>

      <button className={`w-fit px-8 py-3.5 rounded-xl text-white font-bold text-sm shadow-lg hover:opacity-90 transition-all flex items-center gap-2 ${service.btnColor}`}>
        Explore {service.title} <ArrowRight size={16} />
      </button>
    </div>
  </motion.div>
);

// --- Main Page ---

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-[#f8f8fb] font-poppins">

      {/* Hero Section */}
      <section className="relative bg-white border-b border-gray-200 pt-20 pb-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-[#5caf90] font-bold text-sm uppercase tracking-widest mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold text-[#4b5966] font-manrope mb-6 leading-tight"
          >
            More Than Just <span className="text-brand-orange">Delivery.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-[#777] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Whether you need a hot meal right now, groceries for the week, or catering for 
            your next big event, Chopkola connects you to the best Africa has to offer.
          </motion.p>
        </div>
        
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#5caf90]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </section>

      {/* Services List */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col gap-16">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white my-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4b5966] font-manrope mb-4">Simple & Seamless</h2>
            <p className="text-[#777]">Get what you need in 3 easy steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={i} className="relative text-center group">
                {/* Connector Line (Desktop) */}
                {i !== HOW_IT_WORKS.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-dashed border-t-2 border-gray-100 border-dashed -z-10" />
                )}
                
                <div className="w-20 h-20 mx-auto bg-[#fff6ec] rounded-full flex items-center justify-center text-brand-orange mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border-4 border-white">
                  {/* Clone element with size prop */}
                  <div className="scale-125">{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#4b5966] mb-2">{item.title}</h3>
                <p className="text-[#777] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner CTA (B2B) */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-[#4b5966] rounded-3xl p-10 md:p-16 text-center md:text-left relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/food.png')]"></div>
          
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-manrope mb-4">
              Partner with Chopkola
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Are you a restaurant owner, farmer, or logistics provider? Join our platform to reach more customers and grow your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <button className="bg-[#5caf90] text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-[#5caf90] transition-colors">
                Become a Vendor
              </button>
              <button className="bg-transparent border border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-[#4b5966] transition-colors">
                Drive for Us
              </button>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-1/3">
             <div className="aspect-square bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                <Utensils size={64} className="text-[#5caf90]" />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;