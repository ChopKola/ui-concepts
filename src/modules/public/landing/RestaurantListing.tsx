import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import { 
  Star, Clock, Bike, BadgeCheck, ArrowRight, 
  Utensils, MapPin, Heart 
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { useNavigate } from 'react-router-dom';
import { slugify } from '../../../utils/helpers';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Types & Data ---
interface Restaurant {
  id: number;
  name: string;
  category: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  img: string;
  logo: string;
  isFeatured?: boolean;
  tags: string[];
}

export const RESTAURANTS: Restaurant[] = [
  {
    id: 1,
    name: "Mama Put Kitchen",
    category: "Nigerian",
    rating: 4.8,
    deliveryTime: "25–40 min",
    deliveryFee: 2.99,
    img: "https://placehold.co/800x500/e17055/ffffff/png?text=Mama+Put+Kitchen",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=MP",
    isFeatured: true,
    tags: ["Jollof", "Efo Riro", "Amala"]
  },
  {
    id: 2,
    name: "Accra Chop House",
    category: "Ghanaian",
    rating: 4.6,
    deliveryTime: "20–35 min",
    deliveryFee: 1.99,
    img: "https://placehold.co/800x500/00b894/ffffff/png?text=Accra+Chop+House",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=ACH",
    tags: ["Waakye", "Banku", "Tilapia"]
  },
  {
    id: 3,
    name: "Taste of Addis",
    category: "Ethiopian",
    rating: 4.7,
    deliveryTime: "30–45 min",
    deliveryFee: 3.49,
    img: "https://placehold.co/800x500/fdcb6e/2d3436/png?text=Taste+of+Addis",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=TA",
    isFeatured: true,
    tags: ["Injera", "Doro Wat", "Veg Platter"]
  },
  {
    id: 4,
    name: "Kumusha Grill",
    category: "Zimbabwean",
    rating: 4.5,
    deliveryTime: "30–50 min",
    deliveryFee: 2.99,
    img: "https://placehold.co/800x500/6c5ce7/ffffff/png?text=Kumusha+Grill",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=KG",
    tags: ["Sadza", "Braai", "Beef Stew"]
  },
  {
    id: 5,
    name: "Safari Bites",
    category: "Kenyan",
    rating: 4.4,
    deliveryTime: "20–30 min",
    deliveryFee: 1.49,
    img: "https://placehold.co/800x500/d63031/ffffff/png?text=Safari+Bites",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=SB",
    tags: ["Nyama Choma", "Mukimo", "Pilau"]
  },
  {
    id: 6,
    name: "The Suya Spot",
    category: "Nigerian BBQ",
    rating: 4.9,
    deliveryTime: "15–25 min",
    deliveryFee: 2.49,
    img: "https://placehold.co/800x500/e84393/ffffff/png?text=The+Suya+Spot",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=TSS",
    isFeatured: true,
    tags: ["Suya", "Spicy", "Grilled"]
  },
  {
    id: 7,
    name: "Lagos Street Eats",
    category: "Street Food",
    rating: 4.3,
    deliveryTime: "25–35 min",
    deliveryFee: 1.99,
    img: "https://placehold.co/800x500/0984e3/ffffff/png?text=Lagos+Street+Eats",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=LSE",
    tags: ["Puff Puff", "Shawarma", "Asun"]
  },
  {
    id: 8,
    name: "Jollof Republic",
    category: "West African Fusion",
    rating: 4.7,
    deliveryTime: "20–40 min",
    deliveryFee: 2.49,
    img: "https://placehold.co/800x500/e67e22/ffffff/png?text=Jollof+Republic",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=JR",
    isFeatured: true,
    tags: ["Jollof Wars Champion", "Grilled Chicken", "Spicy Rice"]
  },
  {
    id: 9,
    name: "Cape Malay Kitchen",
    category: "South African",
    rating: 4.6,
    deliveryTime: "35–50 min",
    deliveryFee: 3.99,
    img: "https://placehold.co/800x500/00cec9/ffffff/png?text=Cape+Malay+Kitchen",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=CMK",
    tags: ["Bobotie", "Samosas", "Curry"]
  },
  {
    id: 10,
    name: "Taste of Bamako",
    category: "Malian",
    rating: 4.4,
    deliveryTime: "30–45 min",
    deliveryFee: 2.99,
    img: "https://placehold.co/800x500/636e72/ffffff/png?text=Taste+of+Bamako",
    logo: "https://placehold.co/100x100/2d3436/ffffff/png?text=TB",
    tags: ["Tigua Dégué", "Fufu", "Grilled Fish"]
  }
];

// --- Sub-Components ---

const TagPill = ({ text }: { text: string }) => (
  <span className="text-[10px] font-medium uppercase tracking-wide bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200 whitespace-nowrap">
    {text}
  </span>
);

const RestaurantCard = ({ data }: { data: Restaurant }) => {
  const navigate = useNavigate();
  
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -5 }}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer group"
      onClick={() => navigate(`/restaurants/${slugify(data.name)}`)}
    >
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={data.img} 
          alt={data.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-3 right-3 flex gap-2">
          <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold shadow-sm">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            {data.rating}
          </div>
          <button className="bg-white/95 backdrop-blur-sm p-1.5 rounded-full hover:bg-brand-orange hover:text-white transition-colors shadow-sm">
            <Heart size={14} />
          </button>
        </div>

        {/* Delivery Info Badge */}
        <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm text-[#4b5966]">
          <Clock size={12} /> {data.deliveryTime}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1 relative">
        {/* Floating Logo */}
        <div className="absolute -top-8 right-5 w-14 h-14 rounded-xl border-4 border-white shadow-md overflow-hidden bg-white">
          <img src={data.logo} alt="Logo" className="w-full h-full object-cover" />
        </div>

        {/* Metadata */}
        <div className="mb-3">
          <span className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-1 block">
            {data.category}
          </span>
          <h3 className="text-lg font-bold text-[#4b5966] leading-tight group-hover:text-brand-orange transition-colors">
            {data.name}
            {data.isFeatured && <BadgeCheck size={16} className="inline ml-1 text-brand-green" />}
          </h3>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags.map((tag, i) => <TagPill key={i} text={tag} />)}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-xs text-gray-500 font-medium">
            <Bike size={14} className="text-brand-green" />
            ${data.deliveryFee} Delivery
          </div>
          <button className="text-xs font-bold text-[#4b5966] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
            View Menu <ArrowRight size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedCard = ({ data }: { data: Restaurant }) => {
  const navigate = useNavigate();
  
  return (
  <div className="relative h-[280px] md:h-[350px] rounded-2xl overflow-hidden cursor-pointer group" onClick={() => navigate(`/restaurants/${slugify(data.name)}`)}>
    <img 
      src={data.img} 
      alt={data.name} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    
    <div className="absolute top-4 left-4 bg-brand-orange text-white text-xs font-bold px-3 py-1 rounded-full">
      Featured Spot
    </div>

    <div className="absolute bottom-0 left-0 w-full p-6 text-white">
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-white text-black text-xs font-bold px-2 py-0.5 rounded flex items-center gap-1">
          <Star size={12} className="fill-yellow-400 text-yellow-400" /> {data.rating}
        </div>
        <span className="text-gray-200 text-sm font-medium">{data.category}</span>
      </div>
      <h3 className="text-2xl font-bold mb-2">{data.name}</h3>
      <div className="flex items-center gap-4 text-sm text-gray-200">
        <span className="flex items-center gap-1"><Clock size={14}/> {data.deliveryTime}</span>
        <span className="flex items-center gap-1"><Bike size={14}/> ${data.deliveryFee}</span>
      </div>
    </div>
  </div>
)};

// --- Main Component ---

export default function RestaurantListing() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(RESTAURANTS.map(r => r.category)))];
  
  // Filter logic
  const filteredList = activeCategory === "All" 
    ? RESTAURANTS 
    : RESTAURANTS.filter(r => r.category === activeCategory);

  const featuredList = RESTAURANTS.filter(r => r.isFeatured);

  return (
    <section className="py-12 bg-[#f8f8fb] min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* --- 1. Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#4b5966] font-manrope mb-2">
              Explore <span className="text-brand-orange">Local Flavors</span>
            </h2>
            <p className="text-[#777] text-sm max-w-md">
              From spicy Suya to savory Jollof, discover the best authentic African cuisine delivered to your doorstep.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
            <MapPin size={18} className="text-brand-orange" />
            <span className="text-sm font-medium text-[#4b5966]">Delivering to: <span className="underline decoration-brand-orange/50">Lagos, Nigeria</span></span>
          </div>
        </div>

        {/* --- 2. Spotlight / Featured Swiper --- */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Utensils size={20} className="text-brand-orange" />
            <h3 className="text-xl font-bold text-[#4b5966]">Trending in your area</h3>
          </div>
          
          <Swiper
            modules={[Autoplay, FreeMode]}
            spaceBetween={20}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
            }}
            freeMode={true}
            className="pb-4"
          >
            {featuredList.map((restaurant) => (
              <SwiperSlide key={`featured-${restaurant.id}`}>
                <FeaturedCard data={restaurant} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* --- 3. Filter Tabs --- */}
        <div className="sticky top-20 z-30 bg-[#f8f8fb]/95 backdrop-blur-sm py-4 mb-6 overflow-x-auto no-scrollbar">
          <div className="flex gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border",
                  activeCategory === cat 
                    ? "bg-brand-orange text-white border-brand-orange shadow-lg shadow-brand-orange/20" 
                    : "bg-white text-[#777] border-gray-200 hover:border-brand-orange hover:text-brand-orange"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- 4. Main Grid --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {filteredList.map((restaurant) => (
              <RestaurantCard key={restaurant.id} data={restaurant} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredList.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🍲</div>
            <h3 className="text-xl font-bold text-[#4b5966]">No restaurants found</h3>
            <p className="text-[#777]">Try selecting a different category.</p>
          </div>
        )}

      </div>
    </section>
  );
}