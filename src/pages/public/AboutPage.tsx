import { motion } from 'framer-motion';
import { 
  Heart, Globe, ShieldCheck, Users, 
  ArrowRight
} from 'lucide-react';
import { cn } from '../../utils/helpers';

// --- Data ---
const STATS = [
  { label: "Happy Customers", value: "50k+" },
  { label: "Partner Restaurants", value: "120+" },
  { label: "Cities Covered", value: "15" },
  { label: "Years of Service", value: "5" },
];

const VALUES = [
  {
    icon: <Heart size={28} />,
    title: "Passion for Food",
    desc: "We believe food is a love language. Every meal delivered is a promise kept.",
    color: "bg-[#ffeae9]",
    accent: "text-[#ff7070]"
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Quality First",
    desc: "We vet every vendor rigorously. If we wouldn't eat it, we won't deliver it.",
    color: "bg-[#e2fde2]",
    accent: "text-[#5caf90]"
  },
  {
    icon: <Users size={28} />,
    title: "Community",
    desc: "Supporting local farmers and chefs is at the core of our business model.",
    color: "bg-[#fff6ec]",
    accent: "text-[#e17055]"
  },
  {
    icon: <Globe size={28} />,
    title: "Sustainability",
    desc: "From eco-friendly packaging to optimized routes, we care for the planet.",
    color: "bg-[#ecf0ff]",
    accent: "text-[#4b5966]"
  }
];

const TEAM = [
  { name: "Sarah J.", role: "Founder & CEO", img: "https://placehold.co/400x400/e17055/ffffff?text=Sarah" },
  { name: "David K.", role: "Head of Operations", img: "https://placehold.co/400x400/5caf90/ffffff?text=David" },
  { name: "Amara O.", role: "Lead Chef Curator", img: "https://placehold.co/400x400/4b5966/ffffff?text=Amara" },
  { name: "Michael T.", role: "CTO", img: "https://placehold.co/400x400/ff7070/ffffff?text=Michael" },
];

// --- Components ---

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <main>
        
        {/* 1. Hero Section */}
        <section className="relative pt-16 pb-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 z-10"
              >
                <span className="text-brand-orange font-bold text-sm uppercase tracking-widest mb-4 block">
                  Our Story
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#4b5966] font-manrope mb-6 leading-tight">
                  Bringing the Soul of <br/>
                  <span className="text-[#5caf90]">African Cuisine</span> to Your Doorstep.
                </h1>
                <p className="text-[#777] text-lg mb-8 leading-relaxed">
                  Chopkola started with a simple craving: the taste of home. Today, we connect thousands of food lovers with the authentic local flavors they miss, delivered fast and fresh.
                </p>
                
                <div className="flex items-center gap-4">
                  <button className="bg-[#4b5966] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-orange transition-colors flex items-center gap-2">
                    Read Our Blog <ArrowRight size={18} />
                  </button>
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <img key={i} src={`https://placehold.co/50x50/e${i}e${i}e${i}/ffffff?text=${i}`} className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#f8f8fb] flex items-center justify-center text-xs font-bold text-[#4b5966]">
                      +2k
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Image Collage */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full lg:w-1/2 relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://placehold.co/600x800/e17055/ffffff?text=Happy+Eating" 
                    className="rounded-3xl w-full h-64 object-cover transform translate-y-8 shadow-xl" 
                    alt="Eating" 
                  />
                  <img 
                    src="https://placehold.co/600x800/5caf90/ffffff?text=Fresh+Produce" 
                    className="rounded-3xl w-full h-64 object-cover shadow-xl" 
                    alt="Produce" 
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 w-[120%] h-[120%] bg-[#f8f8fb] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* 2. Stats Bar */}
        <section className="py-12 bg-[#4b5966] text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <div className="text-3xl md:text-4xl font-extrabold text-[#5caf90] mb-1 font-manrope">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-medium uppercase tracking-wider text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Our Mission / Video Section */}
        <section className="py-20 bg-[#f8f8fb]">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="text-[#5caf90] font-bold text-sm uppercase tracking-widest mb-3 block">Our Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#4b5966] font-manrope mb-12 leading-snug">
              "To make authentic African food accessible to everyone, everywhere, while empowering local farmers and chefs."
            </h2>
            
            <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://placehold.co/1200x600/2d3436/ffffff?text=Behind+the+Scenes+Video" 
                alt="Video Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-all">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transition-transform group-hover:scale-110">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Core Values */}
        <section className="py-20 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#4b5966] font-manrope mb-4">What Drives Us</h2>
            <p className="text-[#777]">The principles that guide every delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((val, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={cn("w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6", val.color, val.accent)}>
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold text-[#4b5966] mb-3">{val.title}</h3>
                <p className="text-sm text-[#777] leading-relaxed">
                  {val.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. Team Section */}
        <section className="py-20 bg-[#fff6ec] relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-[#4b5966] font-manrope mb-2">Meet the Team</h2>
                <p className="text-[#777]">The people behind the flavor.</p>
              </div>
              <button className="text-brand-orange font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Join our team <ArrowRight size={18} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM.map((member, i) => (
                <div key={i} className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-4 shadow-md">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#4b5966]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div className="flex gap-3 text-white">
                        {/* Mock Social Icons */}
                        <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full cursor-pointer hover:bg-brand-orange transition-colors"><Globe size={14} /></div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#4b5966]">{member.name}</h3>
                  <p className="text-sm text-brand-orange">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white/40 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        </section>

      </main>
    </div>
  );
};

export default AboutPage;