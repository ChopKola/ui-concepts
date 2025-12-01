import { motion } from 'framer-motion';
import { 
  Bike, 
  Headphones, 
  ShieldCheck, 
  UtensilsCrossed 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { 
      icon: <Bike size={32} strokeWidth={1.5} />, 
      title: "Super Fast Delivery", 
      desc: "Hot food and fresh groceries delivered to your doorstep in minutes, not hours." 
    },
    { 
      icon: <UtensilsCrossed size={32} strokeWidth={1.5} />, 
      title: "Freshness Guarantee", 
      desc: "We partner with top local vendors to ensure you receive only the highest quality ingredients." 
    },
    { 
      icon: <Headphones size={32} strokeWidth={1.5} />, 
      title: "24/7 Dedicated Support", 
      desc: "Our team is always available to help you with your orders, day or night." 
    },
    { 
      icon: <ShieldCheck size={32} strokeWidth={1.5} />, 
      title: "Secure Payment", 
      desc: "Experience worry-free transactions with our encrypted and secure payment gateways." 
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4b5966] font-manrope mb-4">
            Why Choose <span className="text-[#5caf90]">Chopkola?</span>
          </h2>
          <p className="text-[#777] text-sm md:text-base leading-relaxed">
            We are more than just a delivery service. We connect you to the flavors you love with speed, reliability, and care.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="group bg-[#f8f8fb] border border-transparent hover:border-[#5caf90]/30 rounded-3xl p-8 text-center transition-all duration-300 hover:shadow-xl hover:bg-white"
            >
              {/* Icon Bubble */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white group-hover:bg-[#5caf90] flex items-center justify-center text-[#5caf90] group-hover:text-white shadow-sm group-hover:shadow-md transition-all duration-300 transform group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="font-manrope font-bold text-xl text-[#4b5966] mb-3 group-hover:text-[#5caf90] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-[#777] leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;